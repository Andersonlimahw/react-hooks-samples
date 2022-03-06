export enum ActionType {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT'
}

export type CounterModel = {
    counter: number, 
    clicks: number
}
// Reducer:
// sempre vai  retornar algo que é o state atualizado
// Escuta as alterações
export function handleReducer(state:any, action:any) : CounterModel {
    switch(action.type) {
        case ActionType.INCREMENT:
            return {
                counter: state.counter + 1,
                clicks: state.clicks + 1
            }
        case ActionType.DECREMENT:
            return {
                counter: state.counter - 1,
                clicks: state.clicks + 1
            }
        default:
            return state;
    }        
}
export const initialValue : CounterModel = {
    counter: 0,
    clicks: 0
};