import './App.css';
import './font.css';
import Navbar from './components/pages/Navbar';
import { Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Work from './components/pages/HomePage/Work';
import Joul from './components/pages/Work/Joul';
import Seam from './components/pages/Work/Seam';
import Hera from './components/pages/Work/Hera';
import Thesis from './components/pages/Work/Thesis';
import Philips from './components/pages/Work/Philips';
import Data from './components/pages/Work/Data';
import Dhm from './components/pages/Work/Dhm';
import Trapeza from './components/pages/Work/Trapeza';
import Qcells from './components/pages/Work/Qcells';

function App() { 
  
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/work" component = {Work}/>
        <Route path="/joul" component = {Joul}/>
        <Route path="/seam" component = {Seam}/>
        <Route path="/hera" component = {Hera}/>
        <Route path="/thesis" component = {Thesis}/>
        <Route path="/philips" component = {Philips}/>
        <Route path="/data" component = {Data}/>
        <Route path="/dhm" component = {Dhm}/>
        <Route path="/trapeza" component = {Trapeza}/>
        <Route path="/qcells" component = {Qcells}/>
        <Route path="/" exact component ={Home}/>

      </Switch>
      </div>


      );
}

export default App;
