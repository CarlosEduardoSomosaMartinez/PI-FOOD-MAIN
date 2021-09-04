import axios from "axios";
export  const GET_RECIPE='GET_RECIPE';

export function getCharacter(){
 
    return function(dispatch){
        return axios.get('http://localhost:3001/recipes')
        .then(recite=>{
           
            return dispatch({
                type:GET_RECIPE,
                paylod:recite.data
                
            })
        })
        .catch((error)=>{console.log("error")})
    }
}