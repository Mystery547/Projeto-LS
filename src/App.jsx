import arda from './images/arda.webp';
import hobbit from './images/hobbit.jpg';
import lotr from './images/senhor-dos-aneis.jpg';
import silmarillion from './images/silmarillion.jpg';
import tolkien from './images/tolkien.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import {Image} from 'react-bootstrap';
import HeaderComponent from './components/header-component';
import './App.css';

function App() {
  return (
    <div className="App">
        <div id="bg-top">
        <HeaderComponent/>
        <div>
          <Image id='image-arda' fluid={true} src={arda} alt="Mapa das Terras de Arda"/>
        </div>
      </div>
      <div id='main-content'>
        <h1>Seja Bem vindo(a) as terras de Arda!</h1>
      
        <p>Se você procura ouvir uma história que seja marcante e
            cheia de alegria, tristeza, paz, guerra, amor, ódio, luz e trevas,
            então você veio ao lugar certo, venha sente-se em algum lugar
            ou fique em pé mesmo, mas vou logo avisando, a história é longa então
            sugiro que encontre um lugar cofortável e ouça o que o nosso contador
            de histórias tem a nos falar hoje.
        </p>
      
        <h2>Eis que damos as boas vindas ao nosso querido anfitrião</h2>

        <div>
          <Image id="tolkien-image" fluid={true} src={tolkien} style={{'width': '230px'}} alt="Foto de John Ronald Reuel Tolkien"/>
          <div>
            <p>J. R. R. Tolkien</p>
          </div>
        </div>

        <h1>Qual história você quer ouvir?</h1>
      </div>
    </div>
  )
}

export default App
