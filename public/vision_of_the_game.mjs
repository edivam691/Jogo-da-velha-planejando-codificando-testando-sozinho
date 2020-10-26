import { checkingWinningPlayerX } from "./game.mjs";
const __checkingWinningPlayerX = checkingWinningPlayerX();
import { checkingWinningPlayerO } from "./game.mjs";
const __checkingWinningPlayerO = checkingWinningPlayerO();
import { gameTied } from "./game.mjs";
const __gameTied = gameTied;
import { restartMacth } from "./game.mjs";
const __restartMacth = restartMacth();

const resetButton = document.getElementById('restart');
resetButton.addEventListener('click', restartMarkings);


const btnX1 = document.getElementById('btnX1');
const btnX2 = document.getElementById('btnX2');
const btnX3 = document.getElementById('btnX3');
const btnX4 = document.getElementById('btnX4');
const btnX5 = document.getElementById('btnX5');
const btnX6 = document.getElementById('btnX6');
const btnX7 = document.getElementById('btnX7');
const btnX8 = document.getElementById('btnX8');
const btnX9 = document.getElementById('btnX9');

const btnO1 = document.getElementById('btnO1');
const btnO2 = document.getElementById('btnO2');
const btnO3 = document.getElementById('btnO3');
const btnO4 = document.getElementById('btnO4');
const btnO5 = document.getElementById('btnO5');
const btnO6 = document.getElementById('btnO6');
const btnO7 = document.getElementById('btnO7');
const btnO8 = document.getElementById('btnO8');
const btnO9 = document.getElementById('btnO9');

btnX1.addEventListener('click', marking_X_1);
btnX2.addEventListener('click', marking_X_2);
btnX3.addEventListener('click', marking_X_3);
btnX4.addEventListener('click', marking_X_4);
btnX5.addEventListener('click', marking_X_5);
btnX6.addEventListener('click', marking_X_6);
btnX7.addEventListener('click', marking_X_7);
btnX8.addEventListener('click', marking_X_8);
btnX9.addEventListener('click', marking_X_9);

btnO1.addEventListener('click', marking_O_1);
btnO2.addEventListener('click', marking_O_2);
btnO3.addEventListener('click', marking_O_3);
btnO4.addEventListener('click', marking_O_4);
btnO5.addEventListener('click', marking_O_5);
btnO6.addEventListener('click', marking_O_6);
btnO7.addEventListener('click', marking_O_7);
btnO8.addEventListener('click', marking_O_8);
btnO9.addEventListener('click', marking_O_9);

function marking_X_1() {


    btnX1.disabled = true;

    document.getElementById('square_1').src = './midia_j_v/botao_x.png';

    btnO1.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerX.verticalLineX1(1);
    __checkingWinningPlayerX.horizontalLineX1(1);
    __checkingWinningPlayerX.diagonalLineLeftX(1);
}

function marking_X_2() {

    btnX2.disabled = true;

    document.getElementById('square_2').src = './midia_j_v/botao_x.png';

    btnO2.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerX.verticalLineX2(1);
    __checkingWinningPlayerX.horizontalLineX1(1);
}

function marking_X_3() {

    btnX3.disabled = true;

    document.getElementById('square_3').src = './midia_j_v/botao_x.png';

    btnO3.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerX.verticalLineX3(1);
    __checkingWinningPlayerX.horizontalLineX1(1);
    __checkingWinningPlayerX.diagonalLineRightX(1);
}

function marking_X_4() {

    btnX4.disabled = true;

    document.getElementById('square_4').src = './midia_j_v/botao_x.png';

    btnO4.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerX.verticalLineX1(1);
    __checkingWinningPlayerX.horizontalLineX2(1);
}

function marking_X_5() {

    btnX5.disabled = true;

    document.getElementById('square_5').src = './midia_j_v/botao_x.png';

    btnO5.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerX.verticalLineX2(1)
    __checkingWinningPlayerX.horizontalLineX2(1);
    __checkingWinningPlayerX.diagonalLineLeftX(1);
    __checkingWinningPlayerX.diagonalLineRightX(1);

}

function marking_X_6() {

    btnX6.disabled = true;

    document.getElementById('square_6').src = './midia_j_v/botao_x.png';

    btnO6.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerX.verticalLineX3(1);
    __checkingWinningPlayerX.horizontalLineX2(1);
}

function marking_X_7() {

    btnX7.disabled = true;

    document.getElementById('square_7').src = './midia_j_v/botao_x.png';

    btnO7.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerX.verticalLineX1(1);
    __checkingWinningPlayerX.horizontalLineX3(1);
    __checkingWinningPlayerX.diagonalLineRightX(1);
}

function marking_X_8() {

    btnX8.disabled = true;

    document.getElementById('square_8').src = './midia_j_v/botao_x.png';

    btnO8.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerX.verticalLineX2(1);
    __checkingWinningPlayerX.horizontalLineX3(1);
}

function marking_X_9() {

    btnX9.disabled = true;

    document.getElementById('square_9').src = './midia_j_v/botao_x.png';

    btnO9.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerX.verticalLineX3(1);
    __checkingWinningPlayerX.horizontalLineX3(1);
    __checkingWinningPlayerX.diagonalLineLeftX(1);

}



function marking_O_1() {

    btnO1.disabled = true;

    document.getElementById('square_1').src = './midia_j_v/botao_o.png';

    btnX1.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerO.verticalLineO1(1);
    __checkingWinningPlayerO.horizontalLineO1(1);
    __checkingWinningPlayerO.diagonalLineLeftO(1);
}

function marking_O_2() {

    btnO2.disabled = true;

    document.getElementById('square_2').src = './midia_j_v/botao_o.png';

    btnX2.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerO.verticalLineO2(1);
    __checkingWinningPlayerO.horizontalLineO1(1);
}

function marking_O_3() {

    btnO3.disabled = true;

    document.getElementById('square_3').src = './midia_j_v/botao_o.png';

    btnX3.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerO.verticalLineO3(1);
    __checkingWinningPlayerO.horizontalLineO1(1);
    __checkingWinningPlayerO.diagonalLineRightO(1);
}

function marking_O_4() {

    btnO4.disabled = true;

    document.getElementById('square_4').src = './midia_j_v/botao_o.png';

    btnX4.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerO.verticalLineO1(1);
    __checkingWinningPlayerO.horizontalLineO2(1);
}

function marking_O_5() {

    btnO5.disabled = true;

    document.getElementById('square_5').src = './midia_j_v/botao_o.png';

    btnX5.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerO.verticalLineO2(1);
    __checkingWinningPlayerO.horizontalLineO2(1);
    __checkingWinningPlayerO.diagonalLineLeftO(1);
    __checkingWinningPlayerO.diagonalLineRightO(1);
}

function marking_O_6() {

    btnO6.disabled = true;

    document.getElementById('square_6').src = './midia_j_v/botao_o.png';

    btnX6.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerO.verticalLineO3(1);
    __checkingWinningPlayerO.horizontalLineO2(1);
}

function marking_O_7() {

    btnO7.disabled = true;

    document.getElementById('square_7').src = './midia_j_v/botao_o.png';

    btnX7.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerO.verticalLineO1(1);
    __checkingWinningPlayerO.horizontalLineO3(1);
    __checkingWinningPlayerO.diagonalLineRightO(1);
}

function marking_O_8() {

    btnO8.disabled = true;

    document.getElementById('square_8').src = './midia_j_v/botao_o.png';

    btnX8.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerO.verticalLineO2(1);
    __checkingWinningPlayerO.horizontalLineO3(1);
}

function marking_O_9() {

    btnO9.disabled = true;

    document.getElementById('square_9').src = './midia_j_v/botao_o.png';

    btnX9.disabled = true;

    __gameTied(1);

    __checkingWinningPlayerO.verticalLineO3(1);
    __checkingWinningPlayerO.horizontalLineO3(1);
    __checkingWinningPlayerO.diagonalLineLeftO(1);
}


function restartMarkings() {

    document.getElementById('square_1').src = './midia_j_v/tabuleiro_laranja.png';

    document.getElementById('square_2').src = './midia_j_v/tabuleiro_rosa.png';

    document.getElementById('square_3').src = './midia_j_v/tabuleiro_laranja.png';

    document.getElementById('square_4').src = './midia_j_v/tabuleiro_rosa.png';

    document.getElementById('square_5').src = './midia_j_v/tabuleiro_laranja.png';

    document.getElementById('square_6').src = './midia_j_v/tabuleiro_rosa.png';

    document.getElementById('square_7').src = './midia_j_v/tabuleiro_laranja.png';

    document.getElementById('square_8').src = './midia_j_v/tabuleiro_rosa.png';

    document.getElementById('square_9').src = './midia_j_v/tabuleiro_laranja.png';

    restartButtons();
    newGame();
}

function restartButtons() {

    btnX1.disabled = false;
    btnX2.disabled = false;
    btnX3.disabled = false;
    btnX4.disabled = false;
    btnX5.disabled = false;
    btnX6.disabled = false;
    btnX7.disabled = false;
    btnX8.disabled = false;
    btnX9.disabled = false;

    btnO1.disabled = false;
    btnO2.disabled = false;
    btnO3.disabled = false;
    btnO4.disabled = false;
    btnO5.disabled = false;
    btnO6.disabled = false;
    btnO7.disabled = false;
    btnO8.disabled = false;
    btnO9.disabled = false;
}

function newGame() {

    __restartMacth.verticalLineX1();
    __restartMacth.verticalLineX2();
    __restartMacth.verticalLineX3();
    __restartMacth.horizontalLineX1();
    __restartMacth.horizontalLineX2();
    __restartMacth.horizontalLineX3();
    __restartMacth.diagonalLineLeftX();
    __restartMacth.diagonalLineRightX();
    __restartMacth.verticalLineO1();
    __restartMacth.verticalLineO2();
    __restartMacth.verticalLineO3();
    __restartMacth.horizontalLineO1();
    __restartMacth.horizontalLineO2();
    __restartMacth.horizontalLineO3();
    __restartMacth.diagonalLineLeftO();
    __restartMacth.diagonalLineRightO();
    __restartMacth.gameTied();

}