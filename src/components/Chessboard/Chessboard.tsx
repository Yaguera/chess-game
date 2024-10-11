import Square from '../Square/Square';
import './Chessboard.css'

const verticalAxis:string[] = ["1","2","3","4","5","6","7","8"];
const horizontalAxis:string[] =["a","b","c","d","e","f","g","h"];

const Chessboard = () => {
    const board = [];

    for(let i = verticalAxis.length - 1; i >= 0; i--){
        for(let j = 0; j < horizontalAxis.length; j++){
            const number = i + j;
            board.push(
                <Square number={number}/>
            )
        }
    }

    
    return (
    <div>
        <div id="chessboard">{board}</div>
    </div>
    )
    }

export default Chessboard

