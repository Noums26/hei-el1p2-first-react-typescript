import React, { EventHandler } from 'react';
interface Props {
    id: string;
    className: string;
    children: any
}
const Board: React.FC<Props> = ({id, className, children}) => {
    const drop = (e: any) => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData('cardId');

        const card: HTMLElement | null = document.getElementById(cardId);
        if (card) {card.style.display = 'block';}

        e.target.appendChild(card);
    }

    const dragOver = (e: any) => {
        e.preventDefault();
    }

    return (
        <div
            id={id}
            className={className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            {children}
        </div>
    );
};

export default Board;