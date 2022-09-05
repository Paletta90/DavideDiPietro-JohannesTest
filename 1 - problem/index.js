// Targettizzo le tre colonne principali
var firstColumn = document.getElementById('first-column');
var secondColumn = document.getElementById('second-column');
var thirdColumn = document.getElementById('third-column');

// Creo i blocchi desiderati
createBlock(firstColumn, 5, 1);
createBlock(secondColumn, 4, 2);
createBlock(thirdColumn, 25, 5);

// Assegno ad ogni blocco con classe 'block' un colore random e l'evento al click
var block = document.getElementsByClassName('block');
Array.from(block).forEach((e) => { 
    e.style.backgroundColor = getRandomColor();
    e.addEventListener('click', splitRectangle, { once: true });
} )


// Funzione per creare una serie di nuovi rettangoli
// tag: in quale blocck voglio crearli
// numTot: il numero di quanti ne voglio creare
// numColumn: numero di colonne su cui si andranno a distribuire i vari rettangoli
function createBlock(tag, numTot, numColumn) {

    for (let i = 0; i < numTot; i++) { 
        var newBlock = createElementWithClass('div', 'col-' + numColumn, 'block', 'd-flex');
        tag.appendChild(newBlock);
    }
}
// Funzione per divide in 4 parti i vari rettangoli
function splitRectangle() { 
    for (let i = 0; i < 4; i++) {
        var newBlock = createElementWithClass('div', 'col-2', 'd-flex');
        newBlock.style.backgroundColor = getRandomColor();
        newBlock.addEventListener('click', splitRectangle, { once: true });
        this.appendChild(newBlock);
    }
}
// Funzione per creare nuovi elementi.
// elementName: tipo di tag che creo
// ...className: classi che aggiungo
function createElementWithClass(elementName, ...className) {
    var el = document.createElement(elementName);

    for (let i = 0; i < className.length; i++) {
        el.classList.add(className[i]);
    }

    return el;
}
// Funzione per generare colori random
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

