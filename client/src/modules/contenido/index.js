import React,{useState,useEffect} from 'react';
import { connect } from "react-redux";
import  stylos from './stylos/stylos.module.css'
import Paginado from '../paginado/index';
import RecipeCart from '../recipeCart/index'
export   function Home({result1,nanai}){
        const [pagina,setPagina]=useState(1)
        const [RecetasPagina,setRecetasPagina]=useState(9)
        const UltimaReceta=pagina*RecetasPagina;
        const PrimeraReceta=UltimaReceta-RecetasPagina;
        
      const PaginaActual = result1.slice(PrimeraReceta,UltimaReceta)
        const paginado =(pageNumber)=>{
                setPagina(pageNumber)
        }
        useEffect(()=>{
            setPagina(1);
        },[result1])




    return(
        <> 
        <div className={stylos.ordenContenido}>
            {
               nanai===""?PaginaActual.map((el,i)=>{return <RecipeCart key={i} name={el.name} imagen={el.Imagen} types={el.Types} Nivel={el.Nivel} id={el.id} pasos={el.Pasos}/>}):<p className={stylos.carga}>{nanai} encontradas</p>
            }
        </div>
            <div >
               <p className={stylos.nomargin}>{pagina}</p>   
            <Paginado RecetasPagina={RecetasPagina} Recetas={result1.length} paginado={paginado} ></Paginado>
          
            </div>
        </>
    )
    
}
const mapStateToProps = (state) => {
    return {
      result1: state.recipeFilter,
      nanai:state.nanai
    };
  };
  export default connect(mapStateToProps,{})(Home);