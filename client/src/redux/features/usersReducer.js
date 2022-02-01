const initialStateTur = {
  users: [],
  loading: false,
  error: null,
  added: false
}

export default function usersReducer(state = initialStateTur, action) {
  switch(action.type) {
    case 'users/loading/fulfilled': // получение пользоватлей
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case 'users/loading/pending': // загрузка получения пользователй
      return {
        ...state,
        loading: true
      }
    case 'users/delete/fulfilled': // удаление пользователя
      return {
        ...state,
        users: state.users.filter((item) => {
          if (item._id !== action.payload){
            return item
          }
        })
      }
    default:
      return state;
  }
}
// получние пользоватлей
export const getUsers = () => {
  return async (dispatch) => {
    dispatch({type: "users/loading/pending"})
    try {
      const response = await fetch("/users")
      const users = await response.json()
      dispatch({type: "users/loading/fulfilled", payload: users})
    } catch (e) {
      console.log(e)
    }
  }
}
// удаление польователя
export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`/user/${id}`, { method: 'DELETE' })
      dispatch({type: "users/delete/fulfilled", payload: id})
    } catch (e) {
      console.log(e)
    }
  }
}

// добавление юзера в админки
export const addAdminUser = (id) => {
  return async (dispatch) => {
    const option = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: ' { "role": "admin" } '
    }
    try {
      await fetch(`/adminLord/${id}`, option )
    } catch (e) {
      console.log(e)
    }
  }
}
// удаление юзера из админки
export const deleteAdminUser = (id) => {
  return async (dispatch) => {
    const option = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: ' { "role": "User" } '
    }
    try {
      await fetch(`/adminLord/${id}`, option )
    } catch (e) {
      console.log(e)
    }
  }
}



