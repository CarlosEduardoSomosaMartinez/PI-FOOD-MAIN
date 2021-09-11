import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    getBox,
    post
  } from "../../store/actions/recipeAction";
  import  stylos from './estylos/estylos.module.css'
export function validacines(inputs) {
  
  let error = {};
  if (!inputs.name) {
    error.name = "se requiere titulo";
  }
  if (!inputs.Resumen) {
    error.Resumen = "se requiere resumen";
  }
  if (!inputs.Puntuacion) {
    error.Puntuacion = "se requeire puntuacion";
  } else {
  }
  if (!inputs.Nivel) {
    error.Nivel = "se requiere nivel";
  } else {
  }
  if (!inputs.Pasos) {
    error.Pasos = "se requiere pasos";
  }
  if (!inputs.Imagen) {
    error.Imagen = "se requiere imagen";
  }
 console.log(error)

  return error;
}



export   function Form({getBox,box,post}) {



const [filto, setFiltro] = useState([]);
  const [input, setInput] = useState({
    name: "",
    Resumen: "",
    Puntuacion: "",
    Nivel: "",
    Pasos: "",
    Imagen:""
  
  });
  const [error, setErrors] = useState({});
  const [frase ,setFrase]=useState("")
  const [frase2,setFrase2]=useState("");
  
  const handleInput = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validacines({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  
  function handleChangeBox(event) {
    if (event.target.checked) {
      setFiltro([...filto, event.target.value]);
    } else {
      setFiltro(filto.filter((el) => el !== event.target.value));
    }
    setErrors(
        validacines({
          ...input,
          [event.target.name]: event.target.value,
        })
      );

  }




  function handleSubmit(e) {
    e.preventDefault();
    if(filto.length===0){
        setFrase2("Coloca almenos una dieta")
    }


    if (
      input.name &&
      input.Resumen &&
      input.Puntuacion &&
      input.Nivel &&
      input.Pasos &&
      input.Imagen&&filto.length!==0

    ) {
    
        input.types=filto.join(",");
        console.log(input)
        post(input);

        setFrase("")
        setFrase2("")
    } else{
     
            setFrase("no se a rellenado   los campos requeridos")
        


        
    }
  }

  return (
    <div className={stylos.caja}>
      <form onSubmit={handleSubmit}>
        <label>Titulo:</label><br/>
        <input
        className={stylos.texto}
          type="text"
          name="name"
          onChange={handleInput}
          value={input.name}
        />
        {
            error.name&&(<p>{error.name}</p>)
        }



        <p></p>
        <label>Resumen de plato:</label><br/>
        <textarea className={stylos.textArea} name="Resumen" onChange={handleInput} value={input.Resumen} />
        {
            error.Resumen&&(<p>{error.Resumen}</p>)
        }
        <p></p>
        <label>Puntuacion:</label><br/>
        <input
          className={stylos.numero}
          type="number"
          name="Puntuacion"
          onChange={handleInput}
          value={input.Puntuacion}
          min="1"
          max="100"
        />
           {
            error.Puntuacion&&(<p>{error.Puntuacion}</p>)
        }

        <p></p>
        <label>Nivel "Comida Saludable":</label><br/>
        <input
         className={stylos.numero}
          type="number"
          name="Nivel"
          onChange={handleInput}
          value={input.Nivel}
          min="1"
          max="100"
        />
           {
            error.Nivel&&(<p>{error.Nivel}</p>)
        }

        <p></p>
        <label>Paso a Paso:</label><br/>
        <textarea className={stylos.textArea} name="Pasos" onChange={handleInput} value={input.Pasos} />
        {
            error.Pasos&&(<p>{error.Pasos}</p>)
        }
        <p></p>
        <label>Url de la Imagen:</label><br/>
        <input
         className={stylos.texto}
          type="text"
          name="Imagen"
          onChange={handleInput}
          value={input.Imagen}
        />
   {
            error.Imagen&&(<p>{error.Imagen}</p>)
        }
     <p></p>        
               

 <p>Dietas:</p>
          <div className={stylos.check}>
           
          {box.map((el,i)=>{
          return (
            <label   key={i}>
              <input type="checkbox"
                name="Dietas"
                onChange={handleChangeBox}
                value={i+1}
              />
              {el.name}</label>
          )
          })} 
            </div>      
            {
            frase2&&(<p>{frase2}</p>)
        }
 {frase&&(<p>{frase}</p>)}
        <input  className={stylos.boton} type="submit" value="Enviar Receta" />
      </form>
      <Link to="/home">
        <a>Regresar al home</a>
      </Link>
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
 
      box:state.box,
   
    };
  };
  export default connect(mapStateToProps, {
    post,
    getBox
  })(Form);
  
