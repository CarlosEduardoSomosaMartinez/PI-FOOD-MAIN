import React from 'react';
import SideBar from '../sidebar/index';
import Contenido from '../contenido/index';
import Detallado from '../detallado/index'
import {Route} from 'react-router-dom';
import estylo from './estylo/estylo.module.css';
import { deepStrictEqual } from 'assert';
export  default function Home(){
    return(
        <div className={estylo.contendorHome}>
            <div className={estylo.contenedorSearh}>
                <SideBar></SideBar>
            </div>
            <div>
                <Contenido></Contenido>
            </div>           
        </div >
    )
}