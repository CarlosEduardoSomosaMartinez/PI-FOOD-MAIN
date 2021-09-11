import {
  GET_RECIPE,
  GET_RECIPE_TYPES,
    GET_ID,
  FILTER_DIET,
  PREP,
  ASC_A,
  DES_A,
  ASC_N,
  DES_N,
  PASOS,
  ENVIO
  
} from "../actions/recipeAction";
const initialState = {
  recipe: [],
  recipeFilter: [],
  recipeId:[],
  pasosId:[],
  box:[],
  result:[]
};
const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.paylod,
        recipeFilter: action.paylod,
      };
      case GET_RECIPE_TYPES:
        return {
          ...state,
          box:action.paylod
        };
      case GET_ID:
        return {
          ...state,
          recipeId:action.paylod,

        }
        case PASOS:
          return{
            ...state,
            pasosId:action.paylod
          }
          case ENVIO:
            return{
              ...state,
              result:[...action.paylod]
            }

    case FILTER_DIET:
      let copia = [...state.recipeFilter];
    
      for (let i = 0; i < action.paylod.length; i++) {
  
           copia = copia.filter((el) => {
              return el.Types.includes(action.paylod[i]);
             });

      
      }
      

      return {
        ...state,
        recipeFilter: [...copia],
      };




    case PREP:
      return {
        ...state,
        recipeFilter: [...state.recipe],
      };

    case ASC_A:
      let copia3 = [...state.recipeFilter];
      copia3 = copia3.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        recipeFilter: copia3,
      };
    case ASC_N:
      let copia2 = [...state.recipeFilter];

      copia2 = copia2.sort((a, b) => a.Nivel - b.Nivel);
      console.log(copia2);
      return {
        ...state,
        recipeFilter: copia2,
      };
    case DES_N:
      let copia1 = [...state.recipeFilter];

      copia1 = copia1.sort((a, b) => b.Nivel - a.Nivel);
      console.log(copia1);
      return {
        ...state,
        recipeFilter: copia1,
      };
    case DES_A:
      let copia4 = [...state.recipeFilter];
      copia4 = copia4.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        recipeFilter: copia4,
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
