const db = require("./db");

const getAllFreeProducts = () => {
  return db
    .query(`SELECT * FROM products WHERE is_paid=false`);
};

const getFreeProductsByCategory = (category_id) => {
  return db
    .query(`SELECT * FROM products WHERE category_id = $1;`, [`${category_id}`]);
};

const getFreeProductsBylocation = (location) => {
  return db
    .query(`SELECT * FROM products WHERE location LIKE $1`, [`${location}`])
}


module.exports = {
  getAllFreeProducts,
  getFreeProductsByCategory,
  getFreeProductsBylocation
}