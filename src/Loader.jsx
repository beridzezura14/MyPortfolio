import gsap from "gsap"
import { useEffect } from "react";

function Loader() {
    useEffect(() => {
        gsap.fromTo(".left__side", 
          { x: 0 }, 
          { x: "-100%", delay: 1, duration: 0.5 }
        );
        gsap.fromTo(".right__side", 
          { x: 0 }, 
          { x: "100%", delay: 1, duration: 0.5 }
        );
      }, []);
    return (
        <div className="loader">
            <div className="left__side"></div>
            <div className="right__side"></div>
        </div>
    )
}

export default Loader