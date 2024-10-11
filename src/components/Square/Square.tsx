import './Square.css'

interface Props {
    image?: string
    number: number
}

const Square = ({ number, image }: Props) => {

  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita que o menu de contexto seja aberto
  }

  return (
    <div>
        <div onContextMenu={preventContextMenu} className= {number % 2 === 0 ? "square black-square" : "square white-square"}>
            {image && <img className='piece' src={image} alt={image} draggable="false"/>}
        </div>
    </div>
  )
}

export default Square
