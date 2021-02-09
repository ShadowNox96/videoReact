import { actions } from '../actions';

const reducer = (state, action) => {
    // este switch me permite recibir el type evaluarlo y saber que hacer con el estado
    switch (action.type) {
        case actions.setFavorite:
            const exist = state.myList.find((items) => items.id === action.payload.id);
            if (exist) return { ...state };
            return {
                ...state,
                myList: [...state.myList, action.payload],
            };
        case actions.deleteFavorite:
            return {
                ...state,
                myList: state.myList.filter((items) => items.id !== action.payload),
            };
        case actions.loginRequest:
            return {
                ...state,
                user: action.payload,
            };
        case actions.logOutRequest:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};

export default reducer;

