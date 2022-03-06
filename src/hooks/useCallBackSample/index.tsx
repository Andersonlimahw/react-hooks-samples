import React from 'react';
import { Card } from '../../components/Card/index';

const fnCounter = new Set();
const fnMemorizedCounter = new Set();

export const UseCallBackSample : React.FC = () => {
    const [counterCallBack, setCounterCallBack]  = React.useState(0);
    
    const handlePlus = () => {
        setCounterCallBack(prevState => prevState + 1);
    }

    const handlePlusMemorized = React.useCallback(() => {
        console.log(counterCallBack);
        setCounterCallBack(prevState => prevState + 1);
    }, []);

    fnMemorizedCounter.add(handlePlusMemorized);
    fnCounter.add(handlePlus);
    console.log('Quantide de funções criadas: Memorizada', fnMemorizedCounter.size, 'Normal: ',fnCounter.size );

    return (
            <Card
                title="useCallBackSample"
                description={`Please check console: ${counterCallBack.toString()}`}
                path="useCallBackSample"
                action={handlePlusMemorized}
                actionLabel="Memorized +"
                additionalAction={handlePlus}
                additionalActionLabel="Normal +"

            />
    )
}