import './LoadingScreen.css'

function LoadingScreen () {
    return (

        <div className="loading-screen-wrapper">

            <img src="firstscreen.png" className="background-image2" alt="Background" />


            <div className="loading-circle-wrapper">
                <svg className="circular-loader"viewBox="25 25 50 50" >
                    <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#70c542" strokeWidth=".75" />
                </svg>
            </div>
            
        </div>
    );

}

export default LoadingScreen;