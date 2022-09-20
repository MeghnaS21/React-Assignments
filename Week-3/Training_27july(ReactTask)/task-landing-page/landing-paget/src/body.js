import React from 'react'
import './styles.css'

export function Body() {
    return (
        <>
            {/* <h1 className="primary">Welcome to my Task-1 </h1>
        <h2>HEADING TAG</h2> */}
            {/* <nav>
                <div className="row">
                    <div className="col-sm-2">
                        <ul class="horizontal-list">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#projects">Project</a>
                            </li>
                            <li>
                                <a href="#education">Education</a>
                            </li>
                            <li>
                                <a href="#achievements">Achievements</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="input-group">
                        <div class="form-outline">
                            <input type="search" id="form1" class="form-control" />
                            <label class="form-label" for="form1">Search</label>
                        </div>
                        <button type="button" class="btn btn-primary">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </nav> */}

            <div class="navbar">
                <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
                <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
                <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
            </div>
        </>
    )
}