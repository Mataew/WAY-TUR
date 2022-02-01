const initialStateByTur = {
    byTur: []
}

export default function byTurDesk(state = initialStateByTur, action) {
    switch(action.type) {
        case "tur/Loading/pending":
          return {
            ...state,
            loading: true,
          }
        case "tur/Loading/fulfilled":
          return {
            ...state,
            byTur: action.payload,
            loading: false
          }
        case "tur/Loading/rejected":
          return {
            ...state,
            error: action.payload
          }
        default:
          return state;
      }
}

export const GetByTur = (id) => {
    return async (dispatch) => {
        dispatch({type: "tur/Loading/pending"})
        try {
            console.log(id)
        const responce = await fetch(`http://localhost:7000/tur/${id}`)
        const tur = await responce.json()
        dispatch({type: "tur/Loading/fulfilled", payload: tur})
        } catch (e) {
            dispatch({type: "tur/Loading/rejected", payload: e})
        }
    }
}