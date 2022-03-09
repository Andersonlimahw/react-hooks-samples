import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Card } from '../../components/Card/index';

export const UseImperativeHandleSample : React.FC = () => {
    console.log('UseFowardRefSample Rendered');
    const [description, setDescription] = useState('Digite um valor');
    const formRef = useRef(null);
    const inputRef = useRef(null);
    function handleSubmit() {
        console.log('formRef => ', formRef);
        const currentRef = formRef.current as any;
        currentRef.submit();
    }
    const Form = forwardRef((props, ref) => {
       
        function handleSubmit() {
            const currentRef = inputRef.current as any;
            alert(currentRef.value)
        }
        useImperativeHandle(
            ref, 
            () => {
                return {
                    submit: handleSubmit
                };
            }, 
            []
        );

        return(
            <form>
                Formulário
            </form>
        )
    });

    return (
            <div style={{ 
                display: 'inline-block',
                padding: 0}
            }>
                <input 
                    type="text" 
                    ref={inputRef}
                />
                <Form ref={formRef}/>
                <Card
                    title="React.useImperativeHandle"
                    description={description}
                    path="UseFwdRefSample"
                    action={handleSubmit}
                    actionLabel="print"
                />
            </div>
            
    )
}