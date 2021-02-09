export const actions = {
    setFavorite: 'SET_FAVORITE',
    deleteFavorite: 'DELETE_FAVORITE',
    loginRequest: 'LOGIN_REQUEST',
    logOutRequest: 'LOGOUT_REQUEST'
};
// eslint-disable-next-line import/prefer-default-export
export const setFavorite = payload => ({
  type: actions.setFavorite,
  payload,
});

export const deleteFavorite = payload => ({
    type: actions.deleteFavorite,
    payload,
});

export const loginRequest = payload => ({
  type: actions.loginRequest,
  payload,
});

export const logOutRequest = payload => ({
  type: actions.logOutRequest,
  payload
});

// Encargado solo de describri la informacion que vamos a hacer y pasar un objeto que vamos a tener disponible en nuestros reducers, el cual despues va a tomar la accion para evaluar como lo va a guardar dentro del estado

// El payload es la informacion que vamos a transmitir
// EL type es el nombre identificador de la descripcion, siempre se deben de pasar usando snakecase y mayusculas

