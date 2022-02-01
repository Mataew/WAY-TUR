const initialState = {
  user: [],
  error: null,
  loading: false,
  carts: {},
  deleteCart: false,
  onlyUser: {}
};

export default function profReducer (state = initialState, action) {
  switch (action.type) {
    case 'user/load/fulfilled':
        return{
            ...state,
            user: [action.payload]
        }
        case 'cart/postCart/fulfilled':
      return {
        ...state,
          carts: {
            ...state.carts,
            tur: [action.payload]
          }
      };
      case "cart/loadCart/fulfilled":
        return {
          ...state,
          carts: action.payload
        }
      case "user/onlyUser/fulfilled":
        return {
          ...state,
          onlyUser: action.payload
        }
        case "cart/delete/fulfilled":
          return {
            ...state,
            carts: state.carts.filter((item) => item._id !== action.payload),
            deleteCart: true
          };
        case "cart/delete/pending":
          return {
            ...state,
            deleteCart: false
          };
    default:
      return state;
  }
}

export const userLoad = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/user`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json()
      dispatch({type: "user/load/fulfilled", payload: data})
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const BuyTur = (tur) => {
  return async (dispatch) => {
    try {
    const response = await fetch("/cartToken", {
      method: "POST",
      body: JSON.stringify({ tur }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    dispatch({type: 'cart/postCart/fulfilled', payload: json});
    } catch (e) {
      console.log(e);
    }
  };
};

export const onlyUser = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/user`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json()
      dispatch({type: "user/onlyUser/fulfilled", payload: data})
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const cartLoad = () => {
  return async (dispatch) => {
try {
  const response = await fetch("/cart", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    }
  })
  const data = await response.json()
  dispatch({type: "cart/loadCart/fulfilled", payload: data})
} catch (error) {
  console.log(error.message);
}
  }
}


export const deleteCart = (id) => {
  return async (dispatch) => {
    dispatch({ type: "cart/delete/pending" });
    try {
      await fetch(`/cart/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch({ type: "cart/delete/fulfilled", payload: id });
    } catch (e) {
      console.log(e);
    }
  };
};