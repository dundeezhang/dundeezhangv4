import pfp from './img/cropped_image.png'
import './App.css';

function App() {
    return (
        <div className="App ibm-plex-mono-light">
            <header className="App-header">
                <img src={pfp} className="App-logo" alt="profile photo" />
                <h1 className="ibm-plex-mono-regular">Dundee Zhang</h1>
                <p>
                    I am a <span className="csText">Computer Science Student</span> at the <span className="schoolText">University of Waterloo</span>
                </p>
                <ul className="social-cons">
                    <li>
                        <a href="https://www.linkedin.com/in/dundeezhang/">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                        
                    </li>
                    <li>
                        <a href="https://www.instagram.com/dundeehz">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/dundeezhang">
                        <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:dundeez124@gmail.com">
                            <i class="fa-regular fa-envelope"></i>
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default App;
