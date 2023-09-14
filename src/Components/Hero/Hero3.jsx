import { Link } from "react-router-dom";
import { useMyContext } from "../Context/Context";

const Hero3=()=>{
    const {visionText}=useMyContext();
    return(
        <div className="hero3">
            <img src="images/motor.jpg" alt=""/>
            <div>
                <h2>Vizyonumuz</h2>
                <p>
                    {visionText}
              </p>
              <Link href="/contact"><button>Başvur</button></Link>
            </div>
        </div>
    )
}

export default Hero3;