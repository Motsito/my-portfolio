import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
   return (
      <div>
         <nav id="navbar">
               <ul class="nav-l">
                  <li><a href="#welcome-section">About</a></li>
                  <li><a href="#projects">Work</a></li>
                  <li><a href="#contact">Contact</a></li>
               </ul>
         </nav>
         <section id="welcome-section">
               <h1>I am Carlos Di Nobile</h1>
               <p>a Front-End Developer</p>
         </section>
         <section id="projects">
               <h2>There are some of my projects</h2>
               <div class="project-tile" id="projects-grid">
                  <a href="https://motsito.github.io/proyecto-cl-1/" target="_blank" class="project">
                     <img src="https://cdn.discordapp.com/attachments/1055571611039830081/1080547359513120798/image.png" />
                     <p>Furniture store price Calculator</p>
                  </a>
                  <a href="https://motsito.github.io/finsphera-pt2/" target="_blank" class="project">
                     <img src="https://cdn.discordapp.com/attachments/1055571611039830081/1080547699889287229/image.png" />
                     <p>R&M Character provider</p></a>
                  <a href="https://motsito.github.io/aplicacion-multiple/" target="_blank" class="project">
                     <img src="https://cdn.discordapp.com/attachments/1055571611039830081/1080547517655154688/image.png" />
                     <p>Tic Tac Toe, Calculator</p>
                  </a>
                  <a href="https://motsito.github.io/finsphera-challenge/" target="_blank" class="project">
                     <img src="https://cdn.discordapp.com/attachments/1055571611039830081/1080547412738846791/image.png"/>
                     <p>Log in, Register pages</p>
                  </a>
                  <a href="https://motsito.github.io/react-calendar/" target="_blank" class="project">
                     <img src="https://cdn.discordapp.com/attachments/1055571611039830081/1080546760558116904/image.png"/>
                     <p>Calendar</p>
                  </a>
               </div>
         </section>
         <section>
            <div id="contact">
               <div>
                  <h1>Lets work together...</h1>
                  <h3>How do you take coffee?</h3>
               </div>
               <div class="social">
                  <a href="https://www.linkedin.com/in/carlos-di-nobile-2a641b238/" class="down" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" /> LinkedIn
                  </a>
                  <a href="https://github.com/Motsito" class="down" target="_blank">
                     <FontAwesomeIcon icon={faGithub} size="lg" /> Github
                  </a>
                  <a>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" /> lenfoarz@gmail.com
                  </a>
                  <a>
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" /> +52 8126081698 
                  </a>
               </div>
            </div>
         </section>
      </div>
   );
}

export default App;
