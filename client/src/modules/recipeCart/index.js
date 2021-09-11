import React from "react";
import { Link } from "react-router-dom";
import style from "./stylos/stylos.module.css";
import {
  getIdPasos
 } from "../../store/actions/recipeAction";
 import { connect } from "react-redux";


export  function CharacterCards({ getIdPasos,name, imagen,types,Nivel,id,pasos}) {
  function handlechange(event){
    console.log("run")
      getIdPasos(pasos);
  }
  console.log(pasos);

  return (
    <div className={style.carta} style={{backgroundImage:`url(${imagen})`,backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize:"cover"}}>
      <div>
        <p className={style.nomargin}>{name}</p>
      </div>
        <p className={style.nomargin}>{Nivel}</p>
      <div>
        {types.map((el,i) => {
          return <label key={i}>{el} </label>;
        })}
      </div>
      <div>
      
        <Link to={`/detalles/${id}`} onClick={handlechange}>
          <button className={style.boton} >Detalles</button>
        </Link>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    pasosId: state.pasosId,

  };
};
export default connect(mapStateToProps, {
  getIdPasos
})(CharacterCards);

