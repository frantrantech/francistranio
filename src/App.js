import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import IntroPage from './IntroPage';
// import PortfolioPage from './PortfolioPage';
// import Skills from './Skills';
// import Contact from './Contact';
import reportWebVitals from './reportWebVitals';
import LoadingScreen from './LoadingScreen';
import {useState, useEffect} from 'react';


const IntroPage = React.lazy(() => import('./IntroPage'));
const PortfolioPage = React.lazy(() => import('./PortfolioPage'));
const Skills = React.lazy(() => import('./Skills'));
const Contact = React.lazy(() => import('./Contact'));

function App ()  {
    // const [isLoading, setLoading] = useState (true);
    // const [isError, setError] = useState (false);
    
    // useEffect ( () => 
    //     {
    //        const promises = [IntroPage.load(), PortfolioPage.load(), Skills.load(), Contact.load()];
    //        Promise.all(promises)
    //         .then( () => { setLoading(false) })
    //         .catch( () => { setError(true) })
    //     }, 
    // []);


    return (
        <div>
            <Suspense fallback = {<LoadingScreen/>}>
                < IntroPage />
                < PortfolioPage />
                < Skills />
                < Contact />
            </Suspense>
        </div>
    );
}

export default App;