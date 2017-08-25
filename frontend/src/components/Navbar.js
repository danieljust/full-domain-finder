import React, {Component} from 'react';
import '../bootstrap/css/bootstrap.min.css'
import {Link} from 'react-router-dom';

export const Navbar = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-1 col-md-2">
                <Link to="/login">| LOGIN |</Link>
            </div>
            <div className="col-lg-1 col-md-2">
                <Link to="/registration">| Register |</Link>
            </div>
        </div>
    </div>
);

