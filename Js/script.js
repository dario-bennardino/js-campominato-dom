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

    //creo una proprietà custom all'interno dell'elemento HTML e la chiamo _sqID
    sq._sqID = numero;

    //EVENTO CLICK DEL QUADRATO
    sq.addEventListener('click', function(){
    
        // Verifica se il numero del quadrato è presente nell'array delle bombe

        if (!this.classList.contains('clicked')) {
            if (arrayBombs.includes(numero)) {
                this.classList.add('bomb');
                alert(`Hai perso! Hai ottenuto un punteggio di ${clickCount}`);
    
        } else {
        // Il gioco continua il quadrato assume la classe 'clicked'
            this.classList.add('clicked');
    
        // Incrementa il contatore solo se il quadrato non è una bomba
            clickCount++;
            console.log('Conteggio clic:', clickCount);
    
        // alert('Conteggio clic: ' + clickCount);
    
        // Verifica se hai vinto
            if (clickCount === 100 - numBombs) {
                alert('Hai vinto!');
                    
                }
            }
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
    
}
