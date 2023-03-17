import "./PortfolioPage.css"

function PortfolioPage() {
    return(
        <div className="PortfolioWrapper">
            <div className="portfolioText">
                MY PORTFOLIO
            </div>

            <div className = "cardsWrapper">
                <div className="card">
                    <a href="https://github.com/yungfran/Application-Filler-Python">
                        <img className="cardImg"src="resume-portfolio-svgrepo-com.svg"/>
                    </a>
                </div>

                <div className="card">
                    <a href="https://github.com/yungfran/interrupted_me">
                        <img src="discord-icon-svgrepo-com.svg"/>
                    </a>
                </div>

                <div className="card">
                    <a href="https://github.com/yungfran/gtg">
                        <img src="pulling-up-training-silhouette-svgrepo-com.svg"/>
                    </a>
                </div>
            </div>
            
        </div>
    )

}

export default PortfolioPage;