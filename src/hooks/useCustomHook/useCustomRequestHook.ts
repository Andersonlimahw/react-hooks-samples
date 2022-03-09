import { useState, useEffect } from 'react';

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
export const useCustomRequestHook = ({url, options} : Props) => {
    const [statusType, setStatusType] = useState(ResponseType.loading);
    const [response, setResponse] = useState<any>(null);

    useEffect(() => {
        // Imediate function
        (async () => {
            await fetch(url).then(async (res) => {
                const response = await res.json().then(data => data);
                setResponse(response);
                const type = res.ok ? ResponseType.success : ResponseType.error;
                setStatusType(type);
            }).catch(error => {
                console.error('[Error to request url: ] ', url, ' Error: ', error);
                setStatusType(ResponseType.error);
            });
        })();
    }, [url]);

    return [statusType, response];
}