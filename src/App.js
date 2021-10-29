import './styles/App.css';
import { SecondNavLogged } from './components/SecondNavLogged';
import { SecondNavNotLogged} from './components/SecondNavNotLogged'
import {Footer} from "./components/Footer"
import {LoginForm} from "./components/LoginForm"
import {RegisterForm} from "./components/RegisterForm"
import {ModalWindow} from "./components/ModalWindow"
import { MainNavNotLogged } from './components/MainNavNotLogged';
import {UserNavMenu} from "./components/UserNavMenu"
import {FullNavLogged} from "./components/FullNavLogged"
import { FullNavNotLogged } from './components/FullNavNotLogged';
import {ErrorView} from './components/pages/Errors/ErrorView'
import {FirstFormPosProduct} from "./components/FirstFormPosProduct"
import {SecondFormPosProduct} from "./components/SecondFormPosProduct"
import {FirstFormPostProduct} from "./components/FirstFormPostProduct"
import {SecondFormPostProduct} from "./components/SecondFormPostProduct"
import { ThirdFormPostProduct } from './components/ThirdFormPostProduct';
import {Slider} from "./components/Slider"
import {HomeLogged} from "./components/pages/Home/HomeLogged"
import { HomeNotLogged } from './components/pages/Home/HomeNotLogged';

function App() {
  return (
    <div>
      <HomeNotLogged/>

    </div>

  );
}

export default App;
