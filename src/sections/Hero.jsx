import Prism from '../components/Prism/Prism.jsx';
import './Hero.css';

function Hero() {
    return (
        <>
<section className="hero">
    <div className="hero-bg">
        <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
        />
    </div>

    <div className="hero-content">
        <h1>Cab Fare Prediction</h1>
        <p>
            A clean, fast, and intelligent way to estimate cab fares using data-driven machine 
            learning.
        </p>
    </div>
</section>
        </>
    )
}

export default Hero;