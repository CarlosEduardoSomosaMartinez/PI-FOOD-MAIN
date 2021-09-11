import {Link} from 'react-router-dom';
import estylo from './stylo/estylo.module.css';
export default  function Lading(){
    return(
        <div  className={estylo.fondo}>
            <div className={estylo.letras}>
                Welcome to the...
            </div>
            <Link to="/home">
                 <button className={estylo.home}>kitchen</button>
             </Link>
    
        </div>
 
    )
}