const initialStateTur = {
  turs: [],
  loading: false,
  error: null,
  deleting: false
}

export default function turReducer(state = initialStateTur, action) {
  switch(action.type) {
    case "turs/Loading/pending":
      return {
        ...state,
        loading: true,
      }
    case "turs/Loading/fulfilled":
      return {
        ...state,
        turs: action.payload,
        loading: false
      }
    case "turs/Loading/rejected":
      return {
        ...state,
        error: action.payload
      }
    case "turs/delete/fulfilled":
      return {
        ...state,
        turs: state.turs.filter((item) => {
          if (item._id !== action.payload._id){
            return item
          }
        }),
        deleting: true
      }
    case "turs/delete/pending":
      return {
        ...state,
        deleting: false
      }
    default:
      return state;
  }
}

export const GetTurs = () => {
  return async (dispatch) => {
    dispatch({type: "turs/Loading/pending"})
    try {
      const responce = await fetch("http://localhost:7000/turs")
      const turs = await responce.json()

      dispatch({type: "turs/Loading/fulfilled", payload: turs})
    } catch (e) {
      dispatch({type: "turs/Loading/rejected", payload: e})
    }
  }
}

export const deleteTour = (id) => {
  return async (dispatch) => {
    dispatch({type: "turs/delete/pending"})
    try {
      const deleteTour = await fetch(`http://localhost:7000/turs/${id}`, { method: "DELETE"})
      const tour = await deleteTour.json()

      dispatch({type: "turs/delete/fulfilled", payload: tour})
    } catch (e) {
      console.log(e)
    }
  }
}

export const updateTours = (id, inputFrom, inputTo, inputPrice) => {
  return async (dispatch) => {
    const options = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: inputFrom,
        to: inputTo,
        price: inputPrice
      })
    }
    try {
      await fetch(`http://localhost:7000/turs/${id}`, options)
      dispatch({ type: 'tours/patch/fulfilled', payload: { id, inputFrom, inputTo, inputPrice } })
    } catch (e) {
      console.log(e)
    }
  }
}

export const postTour = (from, to, data, night, amount, hotel, price, image) => {
  return async (dispatch) => {
    const postOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: from,
        to: to,
        data: data,
        night: night,
        amount: amount,
        hotel: hotel,
        price: price
      })
    }
    try {
      const response = await fetch(`http://localhost:7000/turs`, postOptions)
      const tour = await response.json()

      const formData = new FormData()
      formData.append('img', image)

      const patchOption = {
        method: "PATCH",
        body: formData
      }
      await fetch(`http://localhost:7000/turs/${tour._id}/avatar`, patchOption)

    } catch (e) {
      console.log(e)
    }
  }
}

