let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for(i=0; i<9; i++) {
        var tile = document.createElement('div');
        tile.id = 'tile'+i;
        tile.addEventListener('click', selectTile);
        document.getElementById('board').appendChild(tile);
    }

    setInterval(setMole, 1500);
    setInterval(setPlant, 2500);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num;
}

function setMole() {
    if(gameOver) {
        return;
    }
    let num = getRandomTile();
    if(currentPlantTile && currentPlantTile.id == 'tile'+num) {
        return;
    }

    if(currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }

    let mole = document.createElement('img');
    mole.src = './resources/monty-mole.png';
    currentMoleTile = document.getElementById('tile'+num);
    currentMoleTile.appendChild(mole);
}

function setPlant() {
    if(gameOver) {
        return;
    }
    let num = getRandomTile();
    if(currentMoleTile && currentMoleTile.id == 'tile'+num) {
        return;
    }

    if(currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }
    let plant = document.createElement('img');
    plant.src = './resources/piranha-plant.png';

    currentPlantTile = document.getElementById('tile'+num);
    currentPlantTile.appendChild(plant);
}

function selectTile() {
    if(gameOver) {
        return;
    }
    if(this == currentMoleTile) {
        score+=10;
        document.getElementById('score').innerHTML = score;
    } else if(this == currentPlantTile) {
        gameOver = true;
        document.getElementById('score').innerHTML = `GAME OVER !!! Your Score : ${score}`;
    }
}
