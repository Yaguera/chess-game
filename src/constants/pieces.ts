interface Piece {
    image: string;
    y: number;
    x: number;
}

const pieces: Piece[] = [];

// Função para gerar peões
const generatePawns = (color: 'b' | 'w', y: number) => {
    for (let x = 0; x < 8; x++) {
        pieces.push({ image: `./assets/pawn_${color}.png`, x, y });
    }
};

// Função para gerar as outras peças
const generateMainPieces = (color: 'b' | 'w', y: number) => {
    const pieceOrder = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];

    pieceOrder.forEach((piece, x) => {
        pieces.push({ image: `./assets/${piece}_${color}.png`, x, y });
    });
};

// Gerar peões brancos e pretos
generatePawns('w', 1);
generatePawns('b', 6);

// Gerar as peças principais brancas e pretas
generateMainPieces('w', 0);
generateMainPieces('b', 7);

export { pieces };
