import React from 'react';
import { Card } from '../../components/Card/index';


export const UseMemoSample : React.FC = () => {
    const [counterMemo, setCounterMemo]  = React.useState(0);
    const [name, setName] = React.useState('');

    // Retorna a função memorizada:
    const handlePlusMemorized = React.useCallback(() => {
        console.log(counterMemo);
        setCounterMemo(prevState => prevState + 1);
    }, []);

    // Executa a função como valor memorizado
    const total = React.useMemo(() => {
        return (counterMemo + 10 * 10 * 5 );
    }, [counterMemo])
    

    return (
            <Card
                title="React.useMemo"
                description={`total: ${total} | Name: ${name}`}
                path="useMemoSample"
                action={handlePlusMemorized}
                actionLabel="+"
                additionalAction={() => setName('Lemon')}
                additionalActionLabel="Name +"

            />
    )
}