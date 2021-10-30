import React from 'react';
import './Found.css'
import { Link } from 'react-router-dom';

const Found = () => {
    return (
        <div className="notFound">
            <h1 className="error">404</h1>
            <p>Page not Found</p>
            <p>Please again try it</p>
            <Link to="/home">Go back</Link>
        </div>
    );
};

export default Found;