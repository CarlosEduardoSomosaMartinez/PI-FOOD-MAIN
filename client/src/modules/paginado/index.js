import React from "react";
import stylos from './stylos/styles.module.css'

export default function Paginado({RecetasPagina,Recetas,paginado}){
    const pageNumber=[]
    for(let i=1;i<=Math.ceil(Recetas/RecetasPagina);i++){
         pageNumber.push(i)
    }
    return (
        
        <nav>
            <ul className={stylos.contenedor}>
                {
                    pageNumber&&
                    pageNumber.map(el=>{
                        return (<li  className={stylos.lista} key={el}><a onClick={()=>paginado(el)}>{el}</a></li>)
                    })
                }
            </ul>
        </nav>
    )
}  