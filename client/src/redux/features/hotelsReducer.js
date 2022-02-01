const initialState = {
  hotels: [],
  error: null,
  loading: false,
};

export default function hotelsReducer (state = initialState, action) {
  switch (action.type) {
    case 'hotels/load/fulfilled':
      return{
        ...state,
        hotels: action.payload
      }
    default:
      return state;
  }
}

export const hotelsLoad = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:7000/hotels");
      const hotels = await response.json()
      dispatch({type: "hotels/load/fulfilled", payload: hotels})
    } catch (error) {
      console.log(error.message);
    }
  };
};