const BRANCA = 1;
const PRETA = 2;

var pecasBrancas = [
    ['rei', [5, 1], '&#9812;', 'e1'],
    ['rainha', [4, 1], '&#9813;', 'd1'],
    ['bispo', [3, 1], '&#9815;', 'c1'],
    ['bispo', [6, 1], '&#9815;', 'f1'],
    ['cavalo', [2, 1], '&#9816;', 'b1'],
    ['cavalo', [7, 1], '&#9816;', 'g1'],
    ['torre', [1, 1], '&#9814;', 'a1'],
    ['torre', [8, 1], '&#9814;', 'h1'],
    ['peão', [1, 2], '&#9817;', 'a2'],
    ['peão', [2, 2], '&#9817;', 'b2'],
    ['peão', [3, 2], '&#9817;', 'c2'],
    ['peão', [4, 2], '&#9817;', 'd2'],
    ['peão', [5, 2], '&#9817;', 'e2'],
    ['peão', [6, 2], '&#9817;', 'f2'],
    ['peão', [7, 2], '&#9817;', 'g2'],
    ['peão', [8, 2], '&#9817;', 'h2'],
];

var pecasPretas = [
    ['rei', [5, 8], '&#9818;', 'e8'],
    ['rainha', [4, 8], '&#9819;', 'd8'],
    ['bispo', [3, 8], '&#9821;', 'c8'],
    ['bispo', [6, 8], '&#9821;', 'f8'],
    ['cavalo', [2, 8], '&#9816;', 'b8'],
    ['cavalo', [7, 8], '&#9816;', 'g8'],
    ['torre', [1, 8], '&#9820;', 'a8'],
    ['torre', [8, 8], '&#9820;', 'h8'],
    ['peão', [1, 7], '&#9823;', 'a7'],
    ['peão', [2, 7], '&#9823;', 'b7'],
    ['peão', [3, 7], '&#9823;', 'c7'],
    ['peão', [4, 7], '&#9823;', 'd7'],
    ['peão', [5, 7], '&#9823;', 'e7'],
    ['peão', [6, 7], '&#9823;', 'f7'],
    ['peão', [7, 7], '&#9823;', 'g7'],
    ['peão', [8, 7], '&#9823;', 'h7'],
];

var cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
var arr = [];

criarTabuleiro()
colocarPecas(pecasBrancas)
colocarPecas(pecasPretas)

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function criarTabuleiro() {
    var tab = document.querySelector('.grid-container')
    for (let y = 8; y > 0; y--) {
        for (let x = 1; x <= 8; x++) {
            let n = 1 + (y * 8 + x);
            let nmcol = cols[x - 1] + y;
            arr.push([x, y])
            if (y % 2 == x % 2) {
                tab.innerHTML += '<div class="grid-item black nb' + x + y + ' nm-' + nmcol + ' ind-' + n + '"></div>'
            } else {
                tab.innerHTML += '<div class="grid-item white nb' + x + y + ' nm-' + nmcol + ' ind-' + n + '"></div>'
            }
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colocarPecas(pecas) {
    for (let i = 0; i < pecas.length; i++) {
        var casa = document.getElementsByClassName('nm-' + pecas[i][3])[0]
        casa.innerHTML = pecas[i][2]
    }
}