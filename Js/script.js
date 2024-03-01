//DATI

const gridContainer = document.querySelector('.grid-container');

const resetButton = document.querySelector('.btn-success');

//costanti per la generazione delle bombe
const numBombs = 16;

let arrayBombs = [];

//variabile per il punteggio
let clickCount = 0; 


reset ();

//inizio ciclo for
for(let i = 1; i<=100; i++){
    const square = getSquare(i);
    gridContainer.append(square)

}


//FUNCTIONS

//funzione per creare il quadrato

function getSquare(numero){
    const sq = document.createElement('div');
    sq.className = 'square';
    // sq.innerHTML = numero;

    //creo una proprietà custom all'interno dell'elemento HTML e la chiamo _sqID
    sq._sqID = numero;

    //EVENTO CLICK DEL QUADRATO
    sq.addEventListener('click', function(){

        // Verifica se il quadrato è già stato cliccato
    if (!this.classList.contains('clicked')) {
        console.log(this._sqID);

        this.innerHTML = this._sqID; 

        // Aggiungo la classe "clicked" al quadrato cliccato
        this.classList.add('clicked');

        // Incrementa il contatore solo se il quadrato non è stato cliccato prima
        clickCount++;
        console.log('Conteggio clic:', clickCount);
    }

    })

    
    return sq;
}


//funzione per resettare il gioco
function reset(){
    gridContainer.innerHTML = '';
    
}

//BOTTONE GIOCA funzione per resettare quadrati selezionati generare le bombe tramite funzione random

resetButton.addEventListener('click', function () {

    // Seleziona tutti i quadrati

    const squares = document.querySelectorAll('.square');

    // Itera attraverso ogni quadrato e rimuovi il testo e la classe 'clicked'

    squares.forEach(function(square) {

        // Rimuovi il testo
        square.innerHTML = '';

        // Rimuovi la classe 'clicked'
        square.classList.remove('clicked');
    });

      // Resetta il conteggio
      clickCount = 0;
      console.log('Conteggio clic resettato:', clickCount);

    //genero le 16 bombe

    generateBombIndices();

    // Mostra l'array delle bombe generato nella console
    console.log('Array di bombe generate:', arrayBombs);

});

//Funzione per generare le 16 bombe attribuendo un numero random
function generateBombIndices() {
    while (arrayBombs.length < numBombs) {
        const randomIndex = Math.floor(Math.random() * 100) + 1;
        if (!arrayBombs.includes(randomIndex)) {
            arrayBombs.push(randomIndex);
        }
    }
    // console.log('Array di bombe generate:', arrayBombs);
}
