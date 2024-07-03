import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="card">
            <div className="icon">👁️</div>
            <div className="info">
                <h1>Name: Mathavan S</h1>
                <p>Registration No:212221220031</p>
            </div>
            <button onClick={handleShowDetails}>Show Details</button>
            {showDetails && (
                <div className="details">
                    <p>B.tech IT</p>
                </div>
            )}
        </div>
    );
}

export default App;
