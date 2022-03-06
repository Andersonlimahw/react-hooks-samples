import React from 'react';
import { useState, useEffect } from 'react';
import { Card } from '../../components/Card/index';

export const UseEffectSample : React.FC = () => {
    const [title, setTitle]  = useState<string>('React.useEffect');

    // Efects
    // Run: ever then a state is update
    useEffect(() => {
        console.log('### State updated: ', title);
    });

    // Run: on initial render of component
    useEffect(() => {
        console.log('### State updated on initial render: ', title);
    }, []);

    // Run: ever then info in [] changes, example: [title]
    useEffect(() => {
        console.log('### State updated with dependencie: ', title);
    }, [title]);

    return (
            <Card
                title={title}
                description='Watching State'
                path="useEffectSample"
                action={()=> setTitle((prevState) => `${prevState}, effect`)}
                actionLabel="Update Title"
            />
    )
}