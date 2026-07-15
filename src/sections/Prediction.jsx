import { useState } from "react";

import BorderGlow from "../components/BorderGlow/BorderGlow";
import Counter from "../components/Counter/Counter";
import Button from "../components/Button/Button";
import Button2 from "../components/Button2/Button2";
import Loader from "../components/Loader/Loader";

import './Prediction.css';

function Prediction() {
    const [distance, setDistance] = useState(0);
    const handleIncreaseOne = () => {
        setDistance((prevDistance) => prevDistance + 1);
    };

    const handleDecreaseOne = () => {
        setDistance((prevDistance) => prevDistance - 1);
    };

    const handleIncreasePointOne = () => {
        setDistance((prevDistance) => prevDistance + 0.1);
    };

    const handleDecreasePointOne = () => {
        setDistance((prevDistance) => prevDistance - 0.1);
    }; 
    
    const [fare, setFare] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handlePredict = async () => {
        setIsLoading(true);
        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                distance: distance,
            }),
        });
        const data = await response.json();
        setFare(data.fare);
        setShowResult(true);
        //add a delay to show loader for 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
    };

    return (
        <>
            <section className="header-section">
                <h1 className="header">Try the Model</h1>
            </section>
            <section className="sub-header-section">
                <p className="sub-header">
                    Predict New York City cab fares instantly using our Linear Regression Model.
                </p>
                <br></br>
            </section>
            <section className="prediction-section">
            <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            >
                <div className="prediction-card-content">
                    <Counter
                    places={[100, 10, 1, '.', 0.1]}
                    fontSize={80}
                    padding={5}
                    gap={10}
                    textColor="white"
                    fontWeight={900}
                    digitPlaceHolders
                    value={distance}
                    />
                </div>
                <div className="controls">
                    <Button text="-1" onClick={handleDecreaseOne} />
                    <Button text="-0.1" onClick={handleDecreasePointOne} />
                    <Button text="+0.1" onClick={handleIncreasePointOne} />
                    <Button text="+1" onClick={handleIncreaseOne} />
                </div>
                <div className="quick-controls">
                    <Button text="5" onClick={() => setDistance(5)} />
                    <Button text="10" onClick={() => setDistance(10)} />
                    <Button text="15" onClick={() => setDistance(15)} />
                    <Button text="20" onClick={() => setDistance(20)} />
                </div>
                <div className="quick-controls">
                    <Button2 text="Predict" onClick={handlePredict} />
                </div>
                {isLoading && <Loader />}   {/* Show loader when isLoading is true */}
                <div className="result-card">

    <h3>Prediction Complete</h3>

    <h1>${fare?.toFixed(2)}</h1>

    <p>
        Based on a distance of {distance} km
    </p>

</div>
            </BorderGlow>
            </section>
        </>
    )
}

export default Prediction;