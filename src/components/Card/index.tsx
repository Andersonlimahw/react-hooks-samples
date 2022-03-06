import { MouseEventHandler } from 'react';
type Props = {
    title: string;
    description: string;
    action?: MouseEventHandler<HTMLButtonElement> | any;
    actionLabel?: string;
    additionalAction?: MouseEventHandler<HTMLButtonElement> | any;
    additionalActionLabel?: string
}

import {
    CardContainer, 
    CardContent,
    CardTitle,
    CardDescription,
    CardFooter, 
    CardButton
} from './Card.style';
export const Card: React.FC<Props> = ({
    title,
    description,
    action, 
    actionLabel, 
    additionalAction, 
    additionalActionLabel
}: Props) => (
    <CardContainer>
        <CardContent>
            <CardTitle>
                {title}
            </CardTitle>
            <CardDescription>
                {description}
            </CardDescription>
            <CardFooter>
                <CardButton
                 type="button"
                 onClick={action}
                >
                    {actionLabel}
                </CardButton>
                <CardButton
                 type="button"
                 onClick={additionalAction}
                >
                    {additionalActionLabel}
                </CardButton>
            </CardFooter>
        </CardContent>
    </CardContainer>
)