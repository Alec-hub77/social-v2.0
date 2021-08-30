import { createContext, useReducer} from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user: {
        _id: "6124e10910831b3548febb11",
        username: "Manson",
        email: "menson@gmail.com",
        profilePicture: "person/11.jpg",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        followings: []
    },
    isFetching: false,
    error: false,
}


export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return (
        <AuthContext.Provider 
        value={
            {user: state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch}}
        >
            {children}
        </AuthContext.Provider>
    )
}


