import "./Skills.css"

// Skills:
/*
Programming
Java
Python
Javascript / Typescript / React
Node

Experiences
Backend Systems 
Amazon Web Services
Full Stack Web Development
iOS

*/
function Skills () {
    return (
        <div className = "skills-wrapper">

            <div className = "seperation-drawing"> </div>
            <div className = "skills-text"> SKILLS </div>
            
            <div className = "grid-container">
                <div className = "line-animiation-wrapper ">
                    <div className="div1 color-animation-90"> <span className="text-slide-animation"> Java </span> </div>
                    

                    <div className="div2 color-animation-80" >  <span className="text-slide-animation"> Python </span>  </div>

                    <div className="div3 color-animation-80">  <span className="text-slide-animation"> TypeScript / React / Node </span></div>
                    <div className="div4 color-animation-70"> <span className="text-slide-animation"> Swift </span> </div>
                    <div className="div5 color-animation-90"> <span className="text-slide-animation"> Backend Systems </span></div>
                    <div className="div6 color-animation-70"> <span className="text-slide-animation"> Amazon Web Services</span> </div>
                    <div className="div7 color-animation-60"> <span className="text-slide-animation"> Full Stack Web Development</span> </div>
                    <div className="div8 color-animation-50">  <span className="text-slide-animation"> iOS </span> </div>

                </div>
            </div>



        </div>
    )

}

export default Skills;