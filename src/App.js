import pfp from './img/cropped_image.png'
import './css/App.css';

function App() {
    return (
        <div className="App ibm-plex-mono-light">
            <header className="App-header">
                <img src={pfp} className="App-logo" alt="profile" />
                <h1 className="ibm-plex-mono-regular">I'm Dundee</h1>
                <p>
                    a <span className="csText">Computer Science</span> student at the <span className="schoolText">University of Waterloo</span>
                </p>
                <p>
                    I am a developer who is passionate about pushing technology forward!
                </p>
                
                <ul className="social-cons">
                    <li>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/dundeezhang/" style={{color: "white", fontSize: "calc(10px + 2vmin)"}} target="_blank">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                        
                    </li>
                    <li>
                        <a rel="noreferrer" href="https://www.instagram.com/dundeehz" style={{color: "white", fontSize: "calc(10px + 2vmin)"}} target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a rel="noreferrer" href="https://github.com/dundeezhang" style={{color: "white", fontSize: "calc(10px + 2vmin)"}} target="_blank">
                        <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a rel="noreferrer" href="mailto:dundeez124@gmail.com" style={{color: "white", fontSize: "calc(10px + 2vmin)"}} target="_blank">
                            <i class="fa-regular fa-envelope"></i>
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default App;
