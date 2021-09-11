import axios from "axios";
export const GET_RECIPE = "GET_RECIPE";
export const GET_RECIPE_TYPES = "GET_RECIPE_TYPES";
export const GET_ID = "GET_ID";
export const FILTER_DIET = "FILTER_DIET";
export const PREP = "PREP";
export const ASC_A = "ASC_A";
export const DES_A = "DES_A";
export const ASC_N = "ASC_N";
export const DES_N = "DES_N";
export const NAN = "NAN";
export const PASOS="PASOS";
export const ENVIO="ENVIO"



export function post(objeto){
  return function (dispatch) {
    return axios
      .post("http://localhost:3001/recipe",objeto)
      .then((recite) => {
        alert("SE FUE A LA VERGA TODO")
        // return dispatch({
        //   type: ENVIO,
        //   paylod: recite.data,
        // });
      })
      .catch((error) => {
        alert(error)
      });
  };

}

export function getRecipe(busqueda) {
  const data = busqueda ? `?name=${busqueda}` : "";
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/recipes" + data)
      .then((recite) => {
        return dispatch({
          type: GET_RECIPE,
          paylod: recite.data,
        });
      })
      .catch((error) => {
        console.log("error");
      });
  };
}
export function getBox() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/types")
      .then((recite) => {
        return dispatch({
          type: GET_RECIPE_TYPES,
          paylod: recite.data,
        });
      })
      .catch((error) => {
        console.log("error");
      });
  };
}

export function dietFilter(dietas) {
 
  return {
    type: FILTER_DIET,
    paylod: dietas,
  };
}
export function orderFilterAf() {
  return {
    type: ASC_A,
  };
}
export function orderFilterDf() {
  return {
    type: DES_A,
  };
}

export function orderFilterAn() {
  return {
    type: ASC_N,
  };
}

export function orderFilterDn() {
  return {
    type: DES_N,
  };
}

export function prep() {
  return {
    type: PREP,
  };
}

  export function getId(id) {
    return function (dispatch) {
      console.log(id,"3333")
      return axios
        .get(`http://localhost:3001/recipes/${id}`)
        .then((recite) => {
           
          return dispatch({
            type: GET_ID,
            paylod:recite.data
          });
        })
        .catch((error) => {
          console.log("error");
        });
    };
  }

  export function getIdPasos(pasos){
    return {
      type:PASOS,
      paylod:pasos
    }
  }