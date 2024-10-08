import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa12" 
                                image={AlexaImage} 
                                description="Made by Amazon to help you."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@CortanaOfficial" 
                                image={CortanaImage} 
                                description="Made by Microsoft to help you."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Siri" 
                                handle="@Siri" 
                                image={SiriImage} 
                                description="Made by Apple to help you."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;