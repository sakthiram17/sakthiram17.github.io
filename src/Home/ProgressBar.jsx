import React from 'react';
import "./Home.css"

const ProgressBar = ({ title, progress }) => {
    return (
        <p className="progress-bar">
            <span className="skill-title">{title}</span>
            <div className="progress">
                <div className="progress-bar-inner" style={{ width: `${progress}%` }}></div>
            </div>
        </p>
    );
};

export default ProgressBar;