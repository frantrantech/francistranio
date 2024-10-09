import React, { Suspense } from 'react';
import '../styling/index.css';
import LoadingScreen from './LoadingScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

const IntroPage = React.lazy(() => import('./IntroPage'));
const PortfolioPage = React.lazy(() => import('./PortfolioPage'));
const Skills = React.lazy(() => import('./Skills'));
const Contact = React.lazy(() => import('./Contact'));
const MenuBar = React.lazy(() => import('./MenuBar'));

function App ()  {
    return (
        <div className="page-wrapper">
            <Suspense fallback = {<LoadingScreen/>}>
                < IntroPage />
                < MenuBar />
                < PortfolioPage />
                < Skills />
                < Contact />
            </Suspense>
        </div>
    );
}

export default App;
