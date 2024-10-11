import React, { useState } from 'react';
import { pieces} from '../../constants/pieces';
import Square from '../Square/Square';
import './Chessboard.css'

const verticalAxis:string[] = ["1","2","3","4","5","6","7","8"];
const horizontalAxis:string[] =["a","b","c","d","e","f","g","h"];


const Chessboard = () => {
    const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
    const board = [];

    // criação do tabuleiro
    for(let i = verticalAxis.length - 1; i >= 0; i--){
        for(let j = 0; j < horizontalAxis.length; j++){
            const number = i + j;
            let image = undefined;

            pieces.map((piece) => {
                if(piece.x === j && piece.y === i){
                    image = piece.image;
                }
            })
            
            board.push(
                <Square image={image} key={`${i},${j}`} number={number}/>
            )
        }
    }

    // funcionalidades & regras
    const grabPiece = (e:React.MouseEvent <HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if(element.classList.contains('piece')){
  
            const x = e.clientX - 31.25;
            const y = e.clientY - 31.25;

            element.style.position = "absolute";
            element.style.left = `${x}px`
            element.style.top = `${y}px`
            setActivePiece(element)
        }
    }

    const movePiece = (e:React.MouseEvent) => {
        if(activePiece){
            const x = e.clientX - 31.25;
            const y = e.clientY - 31.25;

            activePiece.style.position = "absolute";
            activePiece.style.left = `${x}px`
            activePiece.style.top = `${y}px`
        }
    }

    const dropPiece = () => {
        setActivePiece(null);
    };
    
    return (
    <div>
        <div onMouseMove={movePiece} onMouseDown={grabPiece} onMouseUp={dropPiece} id="chessboard">{board}</div>
    </div>
    )
    }

export default Chessboard

