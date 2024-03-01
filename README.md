Esercizio 01/03/2024
Campo Minato
===
**Consegna**<br>
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).<br>
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.<br>
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.<br>
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). <br>
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.<br>
**BONUS 1:**
Aggiungere una `select` accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
**BONUS 2 :**
- accendere tutte le bombe
- congelare la griglia

**Consigli del giorno:**<br>
****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.<br>
****Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei `console.log()` per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
LOGICA VISTA IN CLASSE
PLAY
- leggo la proprietà della griglia (livello)
- RESET
- genero il playground
- genero le bombe
CLICK DELLA CELLA
- verifico se è una bomba
  SI -> FINE GIOCO
  NO -> - coloro la cella
        - incremento il contatore (se non è stata già cliccata)
        - verifico se il punteggio è vincente -> SI -> FINE GIOCO
RESET
- cancella la griglia
- azzero il contatore
- svuoto l’array delle bombe
FINE GIOCO
- accendere tutte le bombe
- congelo la griglia
- stampo il messaggio finale con punteggio. Messaggio diverso se vince o perde.
## Svolgimento
1. 