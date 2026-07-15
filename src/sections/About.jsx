import ScrollFloat from '../components/ScrollFloat/ScrollFloat.jsx';
import MagicBento from '../components/MagicBento/MagicBento.jsx';
import './About.css';

function About() {
    return (
        <>
            <section className="about">
                <section className="about-heading">
                    <h1>About the Model</h1>
                    <ScrollFloat
                        animationDuration={5}
                        ease='back.inOut(2)'
                        scrollStart='top bottom-=10%'
                        scrollEnd='bottom 80%'
                        stagger={0.03}
                    >
                        Built using Linear Regression and trained on over 193,000 real-world cab trips 
                        collected from New York City. The model estimates fares using trip distance as
                        its single input feature.
                    </ScrollFloat>
                    <MagicBento 
                        textAutoHide={true}
                        enableStars
                        enableSpotlight
                        enableBorderGlow={true}
                        enableTilt={false}
                        enableMagnetism={false}
                        clickEffect
                        spotlightRadius={400}
                        particleCount={12}
                        glowColor="132, 0, 255"
                        disableAnimations={false}
                    />
                </section>
            </section>
        </>
    )
}

export default About;