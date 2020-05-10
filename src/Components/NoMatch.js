import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
        return (
        <div>
            <h1 style={{textAlign:"center"}}>404!</h1>
            <h2 style={{textAlign:"center"}}>PAGE NOT FOUND</h2>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>
        )
}