import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    padding: 24px;
    border-top: 2px solid #004355;
    box-shadow: 4px 8px 4px #004355;
    background: #f1f1f1;
    margin: 16px;
`;

export const CardContent = styled.div`
    flex: 1;    
`
export const CardTitle = styled.h2`
    color: #004355;
    padding: 0;
`
export const CardDescription = styled.h5`
    color: #333;
    padding: 8px 0;    
`
export const CardPath = styled.p`
    color: #004355;
    padding: 8px 0;  
    font-size: 1.2rem;  
`
export const CardFooter = styled.div`
    padding: 8px 0;
`
export const CardButton = styled.button`
    border: 2px solid #333;
    background: #333;
    padding: 8px 16px;
    color: #fff;
    font-size: 1.5rem;
    line-height: 1.8rem;
    transition: all 0.3s ease-in;
    margin-right: 8px;
    cursor: pointer;

    &:hover {
        border: 2px solid #333;
        background: #fff;
        color: #333;
    }
`