import { MouseEventHandler } from 'react';
type Props = {
    title: string;
    description: string;
    action?: MouseEventHandler<HTMLButtonElement> | any;
    actionLabel?: string;
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
    actionLabel
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
            </CardFooter>
        </CardContent>
    </CardContainer>
)