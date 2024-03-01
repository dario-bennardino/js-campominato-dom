
const gridContainer = document.querySelector('.grid-container');

const resetButton = document.querySelector('.btn-success');

// resetButton.addEventListener('click', reset);

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

    sq.addEventListener('click', function(){
        //this mi restituisce l'elemento contenitore 
        console.log(this._sqID);

        this.innerHTML = this._sqID; 

    // Aggiungo la classe "clicked" al quadrato cliccato
        this.classList.add('clicked');
    })

    
    return sq;
}


//funzione per resettare il gioco
function reset(){
    gridContainer.innerHTML = '';
    
}

//funzione per resettare quadrati selezionati da associare al bottone

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

});
