const initialState = {
  signingUp: false,
  signingIn: false,
  error: null,
  token: localStorage.getItem("token"),

  check: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "application/signup/pending":
      return {
        ...state,
        signingUp: true,
        error: null,
      };

    case "application/signup/fulfilled":
      return {
        ...state,
        signingUp: false,
        user: action.payload,
        check: true,
      };

    case "application/signup/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
        check: false,
      };

    case "application/signin/pending":
      return {
        ...state,
        signingIn: true,
        error: null,
      };

    case "application/signin/fulfilled":
      return {
        ...state,
        signingIn: false,
        token: action.payload,
      };

    case "application/signin/rejected":
      return {
        ...state,
        signingIn: false,
        error: action.error,
      };
    case "application/logOut/fulfilled":
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
}

export const createUser = (login, password, firstName, lastName) => {
  return async (dispatch) => {
    dispatch({ type: "application/signup/pending" });

    const responseRegister = await fetch("http://localhost:7000/users", {
      method: "POST",
      body: JSON.stringify({ login, password, firstName, lastName }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const jsonRegister = await responseRegister.json();

    if (jsonRegister.error) {
      dispatch({
        type: "application/signup/rejected",
        error: jsonRegister.error,
      });
    } else {
      dispatch({ type: "application/signup/fulfilled", payload: jsonRegister });
    }
  };
};

export const authUser = (login, password) => {
  return async (dispatch) => {

    console.log(login, password)
    dispatch({ type: "application/signin/pending" });

    const response = await fetch("http://localhost:7000/login", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json)

    if (response.status === 401) {
      dispatch({ type: "application/signin/rejected", error: json });
    } else {
      dispatch({
        type: "application/signin/fulfilled",
        payload: json.token,
      });
      localStorage.setItem("token", json.token);
    }
  };
};

export const logOut = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: "application/logOut/fulfilled" });
  };
};
