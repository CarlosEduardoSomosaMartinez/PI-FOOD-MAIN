import React, { useState, useEffect } from "react";
import { getId } from "../../store/actions/recipeAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import stylos from './stylos/estylos.module.css';

export function Detallado({ match, getId, recipeId, pasosId }) {
  const [pasos, setPasos] = useState([]);
  useEffect(() => {
    
    getId(match.params.id);

       if(typeof pasosId[0]==="object"){
        
                    
            
          let arreglo = [];
          for (let x = 0; x < pasosId[0].steps.length; x++) {
                arreglo.push(pasosId[0].steps[x].step);
              }
          setPasos([...arreglo]);
         
       }else{
        
        if(pasosId.length!==0){
  setPasos([pasosId])
        }
       
         
       }
 
        

  },[]);

  return (
    <>
    <div className={stylos.contenedor}>
      <div>
      <img className={stylos.imagen} src={recipeId.Imagen} />
      <div className={stylos.ajuste}>
      <h2>Puntuacion:</h2>
      <p>{recipeId.Puntuacion}</p>
      <h2>Nivel de salud:</h2>
      <p>{recipeId.Nivel}</p>
      </div>
      </div>

      <div className={stylos.marco}>
           
      <h2 className={stylos.titulo}>{recipeId.name}</h2>
      <h3 className={stylos.titulo}>Dietas:</h3>
      <p className={stylos.titulo}>{recipeId.Types&&recipeId.Types.map(el=><label>{el} </label>)}</p>
      <h3 className={stylos.titulo}>Resumen:</h3>
      <div className={stylos.box}
        dangerouslySetInnerHTML={{
          __html: recipeId.Resumen,
        }}
      ></div>
          <h3 className={stylos.titulo}>Pasos:</h3>
      
          {

          pasos.length!==0?<div className={stylos.box}>{
          pasos.map((el,i)=>{
            return(<div><p key={i}>{el}</p></div>)
          })}</div>
          :
          <p>Pronto tendremos la receta</p>
        }


    </div>
               
   
      </div>
      <Link to={`/home`}  >
          <a>Home</a>
        </Link>
</>
   


  );
}
const mapStateToProps = (state) => {
  return {
    recipeId: state.recipeId,
    pasosId: state.pasosId,
  };
};
export default connect(mapStateToProps, {
  getId,
})(Detallado);
