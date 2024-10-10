import './Chessboard.css'

const verticalAxis:string[] = ["1","2","3","4","5","6","7","8"];
const horizontalAxis:string[] =["a","b","c","d","e","f","g","h"];

const Chessboard = () => {
    const board = [];

    for(let i = verticalAxis.length - 1; i >= 0; i--){
        for(let j = 0; j < horizontalAxis.length; j++){
            board.push(
                <div className={(i + j) % 2 === 0 ? "black-square" : "white-square"}>[{horizontalAxis[j]}{verticalAxis[i]}]</div>
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

