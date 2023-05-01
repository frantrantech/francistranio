import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoadingScreen from './LoadingScreen';
import {useState, useEffect} from 'react';


const IntroPage = React.lazy(() => import('./IntroPage'));
const PortfolioPage = React.lazy(() => import('./PortfolioPage'));
const Skills = React.lazy(() => import('./Skills'));
const Contact = React.lazy(() => import('./Contact'));

function App ()  {

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