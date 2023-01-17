import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const imageDog = require("../images/homePage.png");
  return (
    <>
    <div className=" home-page-bg rounded-5 my-5 d-flex  justify-content-center ">
    <div  className="d-flex text-align-center  align-self-center">

        <div className="home-text d-flex flex-column p-4">
          <div className="d-flex ">
          <span className="home-adopt-text mx-2 ">Adopt </span><span className="mx-1">The Perfect Pet</span>
          </div>
          <span className="description-text fs-6 ">
          Search for adoptable, adorable pets who are looking for a new home.
        </span>
        <div className="get-started-link w-100 ">
          <NavLink className="rounded-pill" activeclassname="active" to="/Search">
            Get Started{" "}
            <FontAwesomeIcon className="mx-1" icon={faMagnifyingGlass} />
          </NavLink>
        </div>
        </div>
       
    
   
    
      <img className="home-page-pic align-self-end  " src={imageDog} />
    </div>
    </div>
    </>
  );
}
export default Home;
