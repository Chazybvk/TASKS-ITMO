// todo: Сохраните результат шахматной партии в виде двухмерного массива board, называть фигуры можно 
// произвольно, например “black queen”.
let board = []
function figure(name, column, position, description, color){
    this.name = name
    this.column = column
    this.position = position
    this.description = description
    this.color = color
}
const black_queen = new figure('Черная королева', "a", "1" ,"♛",'black')
const black_bishop1 = new figure('Черный слон', "g", "1" ,"♝",'black')
const white_king = new figure('Белый король', "e", "2" ,"♚",'white')
const white_pawn1 = new figure('Белая пешка', "c", "2" ,"♟",'white')
const white_pawn2 = new figure('Белая пешка', "a", "2" ,"♟",'white')
const white_pawn3 = new figure('Белая пешка', "d", "3" ,"♟",'white')
const white_pawn4 = new figure('Белая пешка', "g", "4" ,"♟",'white')
const white_pawn5 = new figure('Белая пешка', "h", "5" ,"♟",'white')
const white_pawn6 = new figure('Белая пешка', "e", "5" ,"♟",'white')
const white_horse1 = new figure('Белый конь', "d", "5" ,"♞",'white')
const black_pawn1 = new figure('Черная пешка', "b", "5" ,"♟",'black')
const black_horse1 = new figure('Черный конь', "f", "6" ,"♞",'black')
const black_horse2 = new figure('Черный конь', "a", "6" ,"♞",'black')
const black_pawn2 = new figure('Черная пешка', "h", "7" ,"♟",'black')
const white_horse2 = new figure('Белый конь', "g", "7" ,"♞",'white')
const black_pawn3 = new figure('Черная пешка', "f", "7" ,"♟",'black')
const white_bishop1 = new figure('Черный слон', "e", "7" ,"♝",'black')
const black_pawn4 = new figure('Черная пешка', "d", "7" ,"♟",'black')
const black_pawn5 = new figure('Черная пешка', "a", "7" ,"♟",'black')
const black_rook1 = new figure('Черная ладья', "h", "8" ,"♜",'black')
const black_king = new figure('Черный король', "d", "8" ,"♚",'black')
const black_bishop2 = new figure('Черный слон', "c", "8" ,"♝",'black')
const black_rook2 = new figure('Черная ладья', "a", "8" ,"♜",'black')
board.push(black_queen,black_bishop1,white_king,white_pawn1,white_pawn2,white_pawn3,white_pawn4,white_pawn5,white_pawn6,white_horse1,black_pawn1,black_horse1,black_horse2,black_pawn2,white_horse2,black_pawn3,white_bishop1,black_pawn4,black_pawn5,black_rook1,black_king,black_bishop2,black_rook2)

for (i=0;i<board.length;++i){
    console.log(board[i])
}
console.log(board)
