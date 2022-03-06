import React from 'react';
import { useState } from 'react';
import { Card } from '../../components/Card/index';

export const UseStateSample : React.FC = () => {
    const [title, setTitle]  = useState<string>('React.useState');
   
    return (
            <Card
                title={title}
                description='Updating State'
                action={()=> setTitle('Use State')}
                actionLabel="Update Title"
            />
    )
}