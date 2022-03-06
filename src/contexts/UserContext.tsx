// REF: https://pt-br.reactjs.org/docs/context.html#contextconsumer
import { createContext } from 'react';
type User = { 
    name: string;
    email: string;
}
const userData = {
    name: 'Anderson Lima', 
    email: 'sample@sample.com',
}
const setUserData = (user : User) => console.log('user => ', user);
export const UserContext = createContext({ userData, setUserData });

export const UserProvider = UserContext.Provider;
export default UserContext;