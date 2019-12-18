import axios from 'axios';
import { GET_ITEMS , ADD_ITEM , DELETE_ITEM , ITEM_LOADING} from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/item').then(res=>dispatch({ type: GET_ITEMS, payload:res.data}))
}

export const addItem = item => dispatch => {
    axios
      .post('/api/item', item)
      .then(res =>
        dispatch({
          type: ADD_ITEM,
          payload: res.data
        })
      )
};

export const deleteItem = id => (dispatch, ) => {
    axios
      .delete(`/api/item/${id}`)
      .then(res =>
        dispatch({
          type: DELETE_ITEM,
          payload: id
        })
    )
};

export const setItemsLoading = () =>{
    return {
        type:ITEM_LOADING
    }
}