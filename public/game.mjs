import { showAllPlayerPointsX } from "./player_view.mjs";
const __showAllPlayerPointsX = showAllPlayerPointsX;
import { showAllPlayerPointsO } from "./player_view.mjs";
const __showAllPlayerPointsO = showAllPlayerPointsO;
import { showAllGames } from "./player_view.mjs";
const __showAllGames = showAllGames;
import { showWinnerX } from "./player_view.mjs";
const __showWinnerX = showWinnerX;
import { showWinnerO } from "./player_view.mjs";
const __showWinnerO = showWinnerO;
import { showTied } from "./player_view.mjs";
const __showTied = showTied;
import { putButton } from "./player_view.mjs";
const __putButton = putButton;
import { playSoundX } from "./player_view.mjs";
const __playSoundX = playSoundX;
import { playSoundO } from "./player_view.mjs";
const __playSoundO = playSoundO;
import { playSoundEndOfTheGame } from "./player_view.mjs";
const __playSoundEndOfTheGame = playSoundEndOfTheGame;

const verticalLineX_1 = {
    vLineX_1: []
}
const verticalLineX_2 = {
    vLineX_2: []
}
const verticalLineX_3 = {
    vLineX_3: []
}
const horizontalLineX_1 = {
    hLineX_1: []
}
const horizontalLineX_2 = {
    hLineX_2: []
}
const horizontalLineX_3 = {
    hLineX_3: []
}
const diagonalLineLeft_X = {
    dLineLeft_X: []
}
const diagonalLineRight_X = {
    dLineRight_X: []
}


const verticalLineO_1 = {
    vLineO_1: []
}
const verticalLineO_2 = {
    vLineO_2: []
}
const verticalLineO_3 = {
    vLineO_3: []
}
const horizontalLineO_1 = {
    hLineO_1: []
}
const horizontalLineO_2 = {
    hLineO_2: []
}
const horizontalLineO_3 = {
    hLineO_3: []
}
const diagonalLineLeft_O = {
    dLineLeft_O: []
}
const diagonalLineRight_O = {
    dLineRight_O: []
}

const game_Tied = {
    tied: []
}


export function gameTied(counter) {

    game_Tied.tied.push(counter);

    const resetButton = document.getElementById('restart');

    resetButton.style.opacity = '0'

    if (game_Tied.tied.length == 9) {

        setTimeout(() => {
            __showTied();
        }, 200);

        __putButton();
    }
}

export function checkingWinningPlayerX() {


    function verticalLineX1(number) {

        verticalLineX_1.vLineX_1.push(number);

        __playSoundX();

        if (verticalLineX_1.vLineX_1.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsX();

            setTimeout(() => {
                __showWinnerX();
            }, 200);

            __putButton();
        }
    }

    function verticalLineX2(number) {

        verticalLineX_2.vLineX_2.push(number);

        __playSoundX();

        if (verticalLineX_2.vLineX_2.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsX();

            setTimeout(() => {
                __showWinnerX();
            }, 200);

            __putButton();
        }
    }

    function verticalLineX3(number) {

        verticalLineX_3.vLineX_3.push(number);

        __playSoundX();

        if (verticalLineX_3.vLineX_3.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsX();

            setTimeout(() => {
                __showWinnerX();
            }, 200);

            __putButton();
        }
    }

    function horizontalLineX1(number) {

        horizontalLineX_1.hLineX_1.push(number);

        __playSoundX();

        if (horizontalLineX_1.hLineX_1.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsX();

            setTimeout(() => {
                __showWinnerX();
            }, 200);

            __putButton();
        }
    }

    function horizontalLineX2(number) {

        horizontalLineX_2.hLineX_2.push(number);

        __playSoundX();

        if (horizontalLineX_2.hLineX_2.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsX();

            setTimeout(() => {
                __showWinnerX();
            }, 200);

            __putButton();
        }
    }

    function horizontalLineX3(number) {

        horizontalLineX_3.hLineX_3.push(number);

        __playSoundX();

        if (horizontalLineX_3.hLineX_3.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsX();

            setTimeout(() => {
                __showWinnerX();
            }, 200);

            __putButton();
        }
    }

    function diagonalLineLeftX(number) {

        diagonalLineLeft_X.dLineLeft_X.push(number);

        __playSoundX();

        if (diagonalLineLeft_X.dLineLeft_X.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsX();

            setTimeout(() => {
                __showWinnerX();
            }, 200);

            __putButton();
        }
    }

    function diagonalLineRightX(number) {

        diagonalLineRight_X.dLineRight_X.push(number);

        __playSoundX();

        if (diagonalLineRight_X.dLineRight_X.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsX();

            setTimeout(() => {
                __showWinnerX();
            }, 200);

            __putButton();
        }
    }

    return { verticalLineX1, verticalLineX2, verticalLineX3, horizontalLineX1, horizontalLineX2, horizontalLineX3, diagonalLineLeftX, diagonalLineRightX }

}



export function checkingWinningPlayerO() {

    function verticalLineO1(number) {

        verticalLineO_1.vLineO_1.push(number);

        __playSoundO();

        if (verticalLineO_1.vLineO_1.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsO();

            setTimeout(() => {
                __showWinnerO();
            }, 200);

            __putButton();
        }
    }

    function verticalLineO2(number) {

        verticalLineO_2.vLineO_2.push(number);

        __playSoundO();

        if (verticalLineO_2.vLineO_2.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsO();

            setTimeout(() => {
                __showWinnerO();
            }, 200);

            __putButton();
        }
    }

    function verticalLineO3(number) {

        verticalLineO_3.vLineO_3.push(number);

        __playSoundO();

        if (verticalLineO_3.vLineO_3.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsO();

            setTimeout(() => {
                __showWinnerO();
            }, 200);

            __putButton();
        }
    }

    function horizontalLineO1(number) {

        horizontalLineO_1.hLineO_1.push(number);

        __playSoundO();

        if (horizontalLineO_1.hLineO_1.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsO();

            setTimeout(() => {
                __showWinnerO();
            }, 200);

            __putButton();
        }
    }

    function horizontalLineO2(number) {

        horizontalLineO_2.hLineO_2.push(number);

        __playSoundO();

        if (horizontalLineO_2.hLineO_2.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsO();

            setTimeout(() => {
                __showWinnerO();
            }, 200);

            __putButton();
        }
    }

    function horizontalLineO3(number) {

        horizontalLineO_3.hLineO_3.push(number);

        __playSoundO();

        if (horizontalLineO_3.hLineO_3.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsO();

            setTimeout(() => {
                __showWinnerO();
            }, 200);

            __putButton();
        }
    }

    function diagonalLineLeftO(number) {

        diagonalLineLeft_O.dLineLeft_O.push(number);

        __playSoundO();

        if (diagonalLineLeft_O.dLineLeft_O.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsO();

            setTimeout(() => {
                __showWinnerO();
            }, 200);

            __putButton();
        }
    }

    function diagonalLineRightO(number) {

        diagonalLineRight_O.dLineRight_O.push(number);

        __playSoundO();

        if (diagonalLineRight_O.dLineRight_O.length == 3) {

            __playSoundEndOfTheGame();

            __showAllGames();

            __showAllPlayerPointsO();

            setTimeout(() => {
                __showWinnerO();
            }, 200);

            __putButton();
        }
    }

    return { verticalLineO1, verticalLineO2, verticalLineO3, horizontalLineO1, horizontalLineO2, horizontalLineO3, diagonalLineLeftO, diagonalLineRightO }
}

export function restartMacth() {

    function verticalLineX1() {

        for (let i = 0; i < verticalLineX_1.vLineX_1.length; i++) {

            verticalLineX_1.vLineX_1.splice(0, verticalLineX_1.vLineX_1.length);
        }
    }

    function verticalLineX2() {

        for (let i = 0; i < verticalLineX_2.vLineX_2.length; i++) {

            verticalLineX_2.vLineX_2.splice(0, verticalLineX_2.vLineX_2.length);
        }
    }

    function verticalLineX3() {

        for (let i = 0; i < verticalLineX_3.vLineX_3.length; i++) {

            verticalLineX_3.vLineX_3.splice(0, verticalLineX_3.vLineX_3.length);
        }
    }

    function horizontalLineX1() {

        for (let i = 0; i < horizontalLineX_1.hLineX_1.length; i++) {

            horizontalLineX_1.hLineX_1.splice(0, horizontalLineX_1.hLineX_1.length);
        }
    }

    function horizontalLineX2() {

        for (let i = 0; i < horizontalLineX_2.hLineX_2.length; i++) {

            horizontalLineX_2.hLineX_2.splice(0, horizontalLineX_2.hLineX_2.length);
        }
    }

    function horizontalLineX3() {

        for (let i = 0; i < horizontalLineX_3.hLineX_3.length; i++) {

            horizontalLineX_3.hLineX_3.splice(0, horizontalLineX_3.hLineX_3.length);
        }
    }

    function diagonalLineLeftX() {

        for (let i = 0; i < diagonalLineLeft_X.dLineLeft_X.length; i++) {

            diagonalLineLeft_X.dLineLeft_X.splice(0, diagonalLineLeft_X.dLineLeft_X.length);
        }
    }

    function diagonalLineRightX() {

        for (let i = 0; i < diagonalLineRight_X.dLineRight_X.length; i++) {

            diagonalLineRight_X.dLineRight_X.splice(0, diagonalLineRight_X.dLineRight_X.length);
        }
    }



    function verticalLineO1() {

        for (let i = 0; i < verticalLineO_1.vLineO_1.length; i++) {

            verticalLineO_1.vLineO_1.splice(0, verticalLineO_1.vLineO_1.length);
        }
    }

    function verticalLineO2() {

        for (let i = 0; i < verticalLineO_2.vLineO_2.length; i++) {

            verticalLineO_2.vLineO_2.splice(0, verticalLineO_2.vLineO_2.length);
        }
    }

    function verticalLineO3() {

        for (let i = 0; i < verticalLineO_3.vLineO_3.length; i++) {

            verticalLineO_3.vLineO_3.splice(0, verticalLineO_3.vLineO_3.length);
        }
    }

    function horizontalLineO1() {

        for (let i = 0; i < horizontalLineO_1.hLineO_1.length; i++) {

            horizontalLineO_1.hLineO_1.splice(0, horizontalLineO_1.hLineO_1.length);
        }
    }

    function horizontalLineO2() {

        for (let i = 0; i < horizontalLineO_2.hLineO_2.length; i++) {

            horizontalLineO_2.hLineO_2.splice(0, horizontalLineO_2.hLineO_2.length);
        }
    }

    function horizontalLineO3() {

        for (let i = 0; i < horizontalLineO_3.hLineO_3.length; i++) {

            horizontalLineO_3.hLineO_3.splice(0, horizontalLineO_3.hLineO_3.length);
        }
    }

    function diagonalLineLeftO() {

        for (let i = 0; i < diagonalLineLeft_O.dLineLeft_O.length; i++) {

            diagonalLineLeft_O.dLineLeft_O.splice(0, diagonalLineLeft_O.dLineLeft_O.length);

        }
    }

    function diagonalLineRightO() {

        for (let i = 0; i < diagonalLineRight_O.dLineRight_O.length; i++) {

            diagonalLineRight_O.dLineRight_O.splice(0, diagonalLineRight_O.dLineRight_O.length);
        }
    }

    function gameTied() {

        for (let i = 0; i < game_Tied.tied.length; i++) {

            game_Tied.tied.splice(0, game_Tied.tied.length);
        }
    }


    return { verticalLineX1, verticalLineX2, verticalLineX3, horizontalLineX1, horizontalLineX2, horizontalLineX3, diagonalLineLeftX, diagonalLineRightX, verticalLineO1, verticalLineO2, verticalLineO3, horizontalLineO1, horizontalLineO2, horizontalLineO3, diagonalLineLeftO, diagonalLineRightO, gameTied }
}