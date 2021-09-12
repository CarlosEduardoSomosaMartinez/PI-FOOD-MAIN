import React, { useEffect, useState } from "react";
import {
  getRecipe,
  getBox,
  dietFilter,
  prep,
  orderFilterAf,
  orderFilterDf,
  orderFilterAn,
  orderFilterDn,
} from "../../store/actions/recipeAction";
import { connect } from "react-redux";
import stylos from "./stylos/stylos.module.css"
import { Link } from "react-router-dom";


export function Sidebar({
  prep,
  box,
  getBox,
  getRecipe,
  dietFilter,
  orderFilterAf,
  orderFilterDf,
  orderFilterAn,
  orderFilterDn,
}) {
  const [input, setInput] = useState({
    buscador: "",
  });
  
  const [filto, setFiltro] = useState([]);
  const [Orde, setOrde] = useState("");
  useEffect(() => {
    prep();
    
    dietFilter(filto);

    if (Orde === "A-Z") {
        orderFilterAf();
      } else if (Orde === "Z-A") {
        orderFilterDf();
      } else if (Orde ==="0-9") {
        orderFilterAn();
      } else if (Orde === "9-0") {
        orderFilterDn();
      }

  }, [filto,Orde]);

    useEffect(()=>{
      getRecipe(" ");
      getBox();


    },[])
  
  
  
    function handleChangeBox(event) {
    if (event.target.checked) {
      setFiltro([...filto, event.target.value]);
    } else {
      setFiltro(filto.filter((el) => el !== event.target.value));
    }
  }

  function handleChangeRadio(event) {
    setOrde(event.target.value);
  }
  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmi(event) {
    event.preventDefault();
    getRecipe(input.buscador).then(()=>{
      
      prep();
      dietFilter(filto);
      if (Orde === "A-Z") {
        orderFilterAf();
      } else if (Orde === "Z-A") {
        orderFilterDf();
      } else if (Orde ==="0-9") {
        orderFilterAn();
      } else if (Orde === "9-0") {
        orderFilterDn();
      }

    });
  }


  return (
    <div>
      <div >
    <form  className={stylos.Formulariobuscador} onSubmit={handleSubmi}>
        <input
        className={stylos.barraBuscadora}
          name="buscador"
          type="text"
          value={input.buscador}
          onChange={handleChange}
        ></input>
        <input className={stylos.botonBuscador}type="submit" value="Buscar" />
      </form>
      </div>
  
<div className={stylos.menu}>

<h2>Dietas</h2>
      <form className={stylos.cajaDietas}>
        
        {box.map((el,i)=>{
          return (
            <label className={stylos.cajitas} key={i}>
              <input type="checkbox"
                onChange={handleChangeBox}
                value={el.name}
              />
              {el.name} </label>
          )
          })}

      </form>

<h2>filtros</h2>
      
      <form  className={stylos.ordenamiento}>
        
        <p>
          <input
          className={stylos.op}
            type="radio"
            onChange={handleChangeRadio}
            name="alfaN"
            value=""
          />
          Sin Filtro
        </p>
        <p>
          <input
            type="radio"
            onChange={handleChangeRadio}
            name="alfaN"
            value="A-Z"
          />
          A-Z
        </p>
        <p>
          <input
            type="radio"
            onChange={handleChangeRadio}
            name="alfaN"
            value="Z-A"
          />
          Z-A
        </p>
        <p>
          <input
            type="radio"
            onChange={handleChangeRadio}
            name="alfaN"
            value="0-9"
          />
          0-9
        </p>
        <p>
          <input
            type="radio"
            onChange={handleChangeRadio}
            name="alfaN"
            value="9-0"
          />
          9-0{" "}
        </p>
      </form>
      </div>
          <div>
              <Link to="/formulario"><button className={stylos.botonAgregar}>Agregar Recetas</button></Link>
          </div>



    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    result: state.recipe,
    result1: state.recipeFilter,
    box:state.box,
    fff: state.fff,
  };
};
export default connect(mapStateToProps, {
  getRecipe,
  dietFilter,
  prep,
  orderFilterAf,
  orderFilterDf,
  orderFilterAn,
  orderFilterDn,
  getBox
})(Sidebar);
