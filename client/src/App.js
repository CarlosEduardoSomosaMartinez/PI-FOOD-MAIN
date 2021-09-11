
import './App.css';
import {Route} from 'react-router-dom';
import Home from './modules/home/index'
import Landing from './modules/loding/index';
import Detallado from './modules/detallado/index';
import Formulario from './modules/formulario/index';
//import Detallado from './detallado/index'
 
function App() {
  return (
    <>
   
    <div className="App">
        <Route path='/' exact component={Landing}/>
        <Route path='/home' exact component={Home}/>
        <Route path={`/detalles/:id`} exact render={({match})=>{
          return (<Detallado match={match} />)}}/>
          <Route path={'/formulario'} exact render={()=><Formulario></Formulario>}/>
    </div>
    </>
  );
}

export default App;
