import React from 'react';
import { Card } from '../../components/Card/index';
import { UserContext } from '../../contexts/UserContext';

export const UseContextSample : React.FC = () => {
   
    return (
        <UserContext.Consumer>
            {({userData, setUserData}) => (
               <Card
                    title={userData.name}
                    description={userData.email}
                    path="useContextSample"
                    action={() => setUserData({
                        name: 'Context',
                        email: 'context@contex.com'
                    })}
                    actionLabel="Update context"
               />
            )}
        </UserContext.Consumer>
    )
}