const trMatches = document.getElementById('matches');
const trPlayerScoreX = document.getElementById('player_score_X');
const trPlayerScoreO = document.getElementById('player_score_O');
const trGameTied = document.getElementById('tied_games');
const tdPlayerX = document.getElementById('playerX');
const tdPlayerO = document.getElementById('playerO');
const tdGameTied = document.createElement('td');
const tdTotalGames = document.createElement('td');
const tdPointsX = document.createElement('td');
const tdPointsO = document.createElement('td');
let pointsX = 0;
let pointsO = 0;
let totalGames = 0;
let tied = 0;


export function showAllPlayerPointsX() {

    pointsX++;

    tdPointsX.innerHTML = `${pointsX}`;

    trPlayerScoreX.appendChild(tdPointsX);
}

export function showAllPlayerPointsO() {

    pointsO++;

    tdPointsO.innerHTML = `${pointsO}`;

    trPlayerScoreO.appendChild(tdPointsO);
}

export function showAllGames() {

    totalGames++;

    tdTotalGames.innerHTML = `${totalGames}`;

    trMatches.appendChild(tdTotalGames);
}

export function showWinnerX() {

    const txtPlayerX = document.getElementById('player_X').value;

    Swal.fire({
        title: `Jogador ${txtPlayerX} venceu a partida`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });

    tdPlayerX.innerHTML = `${txtPlayerX}`;

}

export function showWinnerO() {

    const txtPlayerO = document.getElementById('player_O').value;

    Swal.fire({
        title: `Jogador ${txtPlayerO} venceu a partida`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });

    tdPlayerO.innerHTML = `${txtPlayerO}`;
}

export function showTied() {

    tied++

    Swal.fire({
        title: 'JOGO EMPATADO!!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });

    tdGameTied.innerHTML = `${tied}`;

    trGameTied.appendChild(tdGameTied);
}

export function putButton() {

    const resetButton = document.getElementById('restart');

    resetButton.style.opacity = '1'
}

export function playSoundX() {

    const audioX = document.getElementById('audio_X');
    audioX.play();
}

export function playSoundO() {

    const audioO = document.getElementById('audio_O');

    audioO.play();
}

export function playSoundEndOfTheGame() {

    const end_of_the_game = document.getElementById('end_of_the_game');

    end_of_the_game.play();
}