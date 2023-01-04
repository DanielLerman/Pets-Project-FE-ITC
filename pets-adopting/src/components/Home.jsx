import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const imageDog = require("../images/homePage.png");
  return (
    <div  className="d-flex">
     
      <div className="home-description">
        
        <div className="home-text">
      
          <span className="home-adopt-text">Adopt </span>The Perferct Pet{" "}
        </div>
        <span className="description-text">
          Search for adoptable, adorable pets who are looking for a new home.
        </span>
        <span className="get-started-link">
          <NavLink className="rounded-pill" activeclassname="active" to="/Search">
            Get Started{" "}
            <FontAwesomeIcon className="mx-1" icon={faMagnifyingGlass} />
          </NavLink>
        </span>
      </div>
      {/* <span className="home-page-pic"><img  src={imageDog} /></span> */}
      
    </div>
  );
}
export default Home;
