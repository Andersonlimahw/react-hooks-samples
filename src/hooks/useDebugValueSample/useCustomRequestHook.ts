import { useState, useEffect, useDebugValue } from 'react';

type Props = {
    url: string, 
    options?: any
}
export enum ResponseType {
    loading = 1,
    error = 2,
    noContent = 3,
    success = 4
}
export const useFetchWithDebugHook = ({url, options} : Props) => {
    const [statusType, setStatusType] = useState(ResponseType.loading);
    const [response, setResponse] = useState<any>(null);
    const [debuggerResponse, setDebuggerResponse] = useState<any>();

    useEffect(() => {
        // Imediate function
        (async () => {
            await fetch(url).then(async (res) => {
                const response = await res.json().then(data => data);
                setResponse(response);
                const type = res.ok ? ResponseType.success : ResponseType.error;
                setStatusType(type);
                setDebuggerResponse({
                    status: res.status,
                    type: type,
                    content: res
                });
            }).catch(error => {
                console.error('[Error to request url: ] ', url, ' Error: ', error);
                setStatusType(ResponseType.error);
            });
        })();
    }, [url]);

    useDebugValue(debuggerResponse?.status, (message) => {
        return `Debugger Status: ${message}`;
    })

    return [statusType, response];
}