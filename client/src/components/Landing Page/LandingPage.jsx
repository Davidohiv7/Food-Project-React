import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div id='LPContainer'>
            <div id='LPWindow'>
                <div id='LPHeader'>
                    <span id='LPTitle1'>Davids's Food</span>
                    <span id='LPTitle2'>Project</span>
                </div>
                <div id='LPBody'>
                    <div id='LPDescription'>
                        <p>Welcome to this amazing website, where you are going to be able to find
                            amazing recipes, filtered them by their diet type's and share your
                            own recipe with the community, just click the Home button!
                        </p>
                    </div>
                    <Link to={'/home'}>
                        <button id='LPHomeButton'>Home</button>
                    </Link>
                </div>
            </div>
        </div>
        );
  };