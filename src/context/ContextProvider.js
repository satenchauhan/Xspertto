import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authInitialState';
import authReducer from './reducers/authReducer';
import usersInitialState from './initialStates/usersInitialState';
import users from './reducers/users';


export const SuperContext = createContext({});


const SuperProvider = ({children}) => {
    //const [authState, authDispatch] = useReducer(authReducer, authInitialState);
    //const [userData, setUserData] =  useReducer(authReducer, authInitialState);
    const [userData, setUserData] = useState(null);
    return (
            <SuperContext.Provider>
                {children}
            </SuperContext.Provider>
    )
};

export default SuperProvider;