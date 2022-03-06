import { MouseEventHandler } from 'react';
type Props = {
    title: string;
    description: string;
    path: string;
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
    CardPath,
    CardFooter, 
    CardButton
} from './Card.style';
export const Card: React.FC<Props> = ({
    title,
    description,
    path,
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
            <CardPath>
                Path: src/hooks/{path}
            </CardPath>
            <CardFooter>
                {
                    action && actionLabel && (
                        <CardButton
                        type="button"
                        onClick={action}
                       >
                           {actionLabel}
                       </CardButton>
                    )
                }
               
               {
                    additionalAction && additionalActionLabel && (
                        <CardButton
                        type="button"
                        onClick={additionalAction}
                       >
                           {additionalActionLabel}
                       </CardButton>
                    )
                }
                
            </CardFooter>
        </CardContent>
    </CardContainer>
)