import { GET_RECIPE } from "../actions/recipeAction";
const initialState={
    recipe:[]
};
const  reducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_RECIPE:
             
            return{
                ...state,
                recipe:action.paylod
            }
        default:
            return{
                ...state
            }

    }
}
export default reducer;