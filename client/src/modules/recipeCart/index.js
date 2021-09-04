import {useEffect} from 'react';
import {getCharacter} from '../../store/actions/recipeAction';
import { connect } from 'react-redux';

export  function CharacterCards({getCharacter,result}){

    function getRecite(){
        getCharacter();
    }
    useEffect(()=>{
        getRecite();
    },[])
    return <div>{result.map((el,i)=>{
        return <div key={i}>
            <p>{el.name}</p>
        </div>
    })}</div>
}

const mapStateToProps=state=>{
    return {
        result:state.recipe
    }
}



export default connect(mapStateToProps,{getCharacter})(CharacterCards)
