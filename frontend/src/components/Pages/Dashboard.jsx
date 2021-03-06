import { Link } from "react-router-dom";
import { MyButton } from '../styles/Button.styled'
import {Container} from '../styles/Dashboard.styled'

function Dashboard(props) {
  return(
  <Container>
    <div className="main-page">
      <p>Reduce.Reuse.Refill.Repeat.</p>
      <div className="main-buttons">

        <Link to="/freecycle">
          <div>
            <MyButton size="large" >FreeCycle</MyButton>
          </div>
        </Link>

        <Link to="/store">
          <div>
          <MyButton size="large">Eco Store</MyButton>
          </div>
        </Link>

      </div>
    </div>
  </Container>


  );
};

export default Dashboard;