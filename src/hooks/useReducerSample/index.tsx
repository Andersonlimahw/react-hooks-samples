import React from 'react';
import { useReducer } from 'react';
import { Card } from '../../components/Card/index';
import { ActionType, handleReducer, initialValue } from './counterReducer';


export const UseReducerSample : React.FC = () => {
    
    const [state, dispatch] = useReducer(handleReducer, initialValue);
       
    const increment = () => {
        // Dispara as ações
        dispatch({
            type: ActionType.INCREMENT,
        });
    }
    const decrement = () => {
        // Dispara as ações
        dispatch({
            type: ActionType.DECREMENT
        });
    }
    
    return (
            <Card
                title="React.useReducer"
                description={`Counter: ${state.counter} | Clicks: ${state.clicks}`}
                action={increment}
                actionLabel="+"
                additionalAction={decrement}
                additionalActionLabel="-"
            />
    )
}