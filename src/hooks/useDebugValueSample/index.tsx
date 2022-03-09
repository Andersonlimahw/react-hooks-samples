import React from 'react';
import { Card } from '../../components/Card/index';
import { useFetchWithDebugHook, ResponseType } from './useCustomRequestHook';

export const UseDebugValueSample : React.FC = () => {
    const [statusType, response] = useFetchWithDebugHook({url: 'https://api.github.com/users/maateusilva'});
    const renderGitInformation = () => (`Name: ${response.name}, Bio: ${response.bio}`);
    const renderForm = () => {
        switch(statusType) {
            case ResponseType.loading:
                return (
                    <Card
                        title="Carregando..."
                        description='Watching State'
                        path="useCustomHookSample"
                    />
                );
            case ResponseType.error:
                return (
                    <Card
                        title="Error"
                        description='A error happens'
                        path="useCustomHookSample"
                    />
                );
            case ResponseType.success:
                return (
                    <Card
                        title="Success"
                        description={renderGitInformation()}
                        path="useCustomHookSample"
                    />
                );
            default:
                return (
                    <Card
                     title="No data found, sorry."
                     description='Trya again later.'
                     path="useCustomHookSample"
                    />
                )
            
        }
    }
    return (
        <>
            { renderForm() }
        </>
    )
}