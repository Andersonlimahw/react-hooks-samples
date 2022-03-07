import React from 'react';
import { Card } from '../../components/Card/index';

export const UseRefSample : React.FC = () => {
    console.log('UseRefSample Rendered');
    const [description, setDescription] = React.useState('Digite um valor');
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
                padding: 0}
            }>
                <input 
                    type="text"
                    ref={inputRef}
                    placeholder="Digite"
                    style={{
                        background: '#333',
                        color: '#fff',
                        padding: 16, 
                        position: 'static',
                        bottom: 0,
                    }}
                />
                <Card
                    title="React.useRef"
                    description={description}
                    path="UseRefSample"
                    action={handlePrintName}
                    actionLabel="print"
                />
            </div>
            
    )
}