const express = require("express");
const router = express.Router();
const userQueries = require("../db/user-queries");

// GET /api/users/
// tester
router.get("/", function (req, res) {
  userQueries
    .getAllUsers()
    .then((response) => {
      console.log(response);
      const users = response.rows;
      res.json({ users });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });

  // res.send("respond with a resource");
});

//route to get user login info
router.post("/login", (req, res) => {
  const user = req.body;

  userQueries.getUserByEmail(user.email).then((response) => {
    //check if email exists
    if (!response.rows[0]) {
      res.redirect("/register");
    } else {
      req.session.user_id = response.rows[0].id;
      req.session.user_name = response.rows[0].name;
      //have this redirect to appropriate page
      //res.redirect('/?')
    }
  });
});

//route to get user register info
router.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = req.body;

  if (email === "" || password === "") {
    return res.status(400).send("Please fill out a valid email and password");
  }
  userQueries.addUser(user);
  userQueries.getUserByEmail(user.email).then((response) => {
    req.session.user_id = response.rows[0].id;
    req.session.user_name = response.rows[0].name;
    res.redirect("/");
  });
});

//logout route
router.post("/logout", (req, res) => {
  req.session.user_id = null;
  req.session.user_name = null;
  res.redirect("/");
});

module.exports = router;
