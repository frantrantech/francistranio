import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import '../styling/index.css';
import reportWebVitals from '../reportWebVitals';
import LoadingScreen from './LoadingScreen';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const IntroPage = React.lazy(() => import('./IntroPage'));
const PortfolioPage = React.lazy(() => import('./PortfolioPage'));
const Skills = React.lazy(() => import('./Skills'));
const Contact = React.lazy(() => import('./Contact'));
const MenuBar = React.lazy(() => import('./MenuBar'));

function App ()  {

    return (
        <div>
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