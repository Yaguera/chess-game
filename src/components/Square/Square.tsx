import './Square.css'

interface Props {
    number: number
}

const Square = ({ number }: Props) => {
  return (
    <div>
        <div className={number % 2 === 0 ? "square black-square" : "square white-square"}>
            <img src="./assets/pawn_b.png" alt="oi" />
        </div>
    </div>
  )
}

export default Square
