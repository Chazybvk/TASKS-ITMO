let board = []
function figure(name, position){
    this.name = name
    this.position = position
}
const black_queen = new figure('Черная королева', "a1")
const black_bishop1 = new figure('Черный слон', "g1")
const white_king = new figure('Белый король', "e2")
const white_pawn1 = new figure('Белая пешка', "c2")
const white_pawn2 = new figure('Белая пешка', "a2")
const white_pawn3 = new figure('Белая пешка', "d3")
const white_pawn4 = new figure('Белая пешка', "g4")
const white_pawn5 = new figure('Белая пешка', "h5")
const white_pawn6 = new figure('Белая пешка', "e5")
const white_horse1 = new figure('Белый слон', "d5")
const black_pawn1 = new figure('Черная пешка', "b5")
const black_horse1 = new figure('Черный конь', "f6")
const black_horse2 = new figure('Черный конь', "a6")
const black_pawn2 = new figure('Черная пешка', "h7")
const white_horse2 = new figure('Черная королева', "g7")
const black_pawn3 = new figure('Черная пешка', "f7")
const white_bishop1 = new figure('Черный слон', "e7")
const black_pawn4 = new figure('Черная пешка', "d7")
const black_pawn5 = new figure('Черная пешка', "a7")
const black_rook1 = new figure('Черная ладья', "h8")
const black_king = new figure('Черный король', "d8")
const black_bishop2 = new figure('Черный слон', "c8")
const black_rook2 = new figure('Черная ладья', "a8")
board.push(black_queen,black_bishop1,white_king,white_pawn1,white_pawn2,white_pawn3,white_pawn4,white_pawn5,white_pawn6,white_horse1,black_pawn1,black_horse1,black_horse2,black_pawn2,white_horse2,black_pawn3,white_bishop1,black_pawn4,black_pawn5,black_rook1,black_king,black_bishop2,black_rook2)

for (i=0;i<board.length;++i){
    console.log(board[i])
}

console.log(board)
