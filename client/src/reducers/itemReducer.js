import uuid from 'uuid';
import { GET_ITEMS , ADD_ITEM , DELETE_ITEM} from '../actions/types';

const initialState = {
    items:[
        {id: uuid(),name:'Eggs'},
        {id: uuid(),name:'Soap'},
        {id: uuid(),name:'Milk'},
        {id: uuid(),name:'caaa'},
    ]
}

export default function (state=initialState,action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            };
        case DELETE_ITEM:
            return{
                ...state,
                items:state.items.filter(items => items.id !== action.payload)
            }
        default:
            return state;
    }
}