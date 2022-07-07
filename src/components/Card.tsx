import React from 'react';
interface Props {
    id: string;
    className: string;
    children: any;
    draggable: boolean;
}

const Card: React.FC<Props> = ({id, children, className, draggable}) => {
    const dragStart = (e: any) => {
        const target = e.target;

        e.dataTransfer.setData('cardId', target.id);
    }

    const dragOver = (e: any) => {
        e.preventDefault();
    }
    
    return (
        <div
            id={id}
            className={className}
            draggable={draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            {children}
        </div>
    );
};

export default Card;