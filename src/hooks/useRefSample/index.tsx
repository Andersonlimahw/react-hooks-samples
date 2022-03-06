import React from 'react';
import { Card } from '../../components/Card/index';

export const UseRefSample : React.FC = () => {
    console.log('UseRefSample Rendered');
    const [description, setDescription] = React.useState('');
    const inputRef = React.useRef(null);

    function handlePrintName() {
        console.log('inputRef', inputRef);
        if(inputRef && inputRef.current){
            alert(inputRef.current.value)
            setDescription(`Valor atualizado: ${inputRef.current.value}`);
        }
    }

    return (
            <div style={{ 
                display: 'inline-block',
                background: '#fff',
                padding: 0}
            }>
                <input 
                    type="text"
                    ref={inputRef}
                />
                <Card
                    title="React.useRef"
                    description={description}
                    path="UseRefSample"
                    action={handlePrintName}
                    actionLabel="console"
                />
            </div>
            
    )
}