// Array di colori css
const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];
// Targhettizzo tutti gli elementi che mi occorrono
var countdown = document.getElementById('safeTimerDisplay');
var sectionCard = document.getElementById("game");
var containerCards = document.getElementById('container-cards');
var sectionWin = document.getElementById("win");
var sectionLose = document.getElementById("lose");
var sectionReplay = document.getElementById("replay");

// Variabile per stabilire se clicco due carte uguali o no
let counter = 0;
let firstSelection = "";
let secondSelection = "";
// Variabile per controllare il punteggio
let score = 0;
// Numero card totali
let numCards = 12;

// Stampo le cards
createCards(containerCards, numCards)

// Targhettizzo tutte le cards
const cards = document.querySelectorAll(".cards .card-inner");

cards.forEach((card) => {
    // Ad ogni card assegno l'evento al click
    card.addEventListener('click', () => {
        // Quando clicco una card assegno la classe 'clicked'
        card.classList.add('clicked');

        // Se clicco una card ottengo il suo attributo
        if (counter == 0) {

            firstSelection = card.getAttribute('color');
            counter++;

            // Altrimenti se ho già cliccato una card...
        } else {
            secondSelection = card.getAttribute('color');
            counter = 0;

            // Se ho cliccato due card con lo stesso attributo
            if (firstSelection === secondSelection) {
                // Targhettizzo le due card con lo stesso attributo
                const correctCards = document.querySelectorAll(
                    ".card-inner[color='" + firstSelection + "']"
                );

                correctCards.forEach((e) => {
                    e.classList.add('checked');
                    e.classList.remove('clicked');
                })
                // Aumento di uno il punteggio
                score++;

                // Vinco quando lo score raggiunge la metà del numero delle cards
                if (score == numCards / 2) {
                    // Mostro il messaggio hai vinto
                    setTimeout(function () {
                        countdown.style.display = 'none';
                        sectionCard.style.display = 'none';
                        sectionWin.style.display = 'flex';
                    }, 1000);
                }
                // Se ho cliccato due card con attributi diversi
            } else {
                // Targhettizzo le cards che ho cliccato
                const incorrectCards = document.querySelectorAll(".card-inner.clicked");

                // Con un ritardo di 800ms rimuovo tutte le classi e ritorno allo stato iniziale
                setTimeout(() => {
                    incorrectCards.forEach((e) => {
                        e.classList.remove("clicked");
                    });
                }, 800)
            }
        }


    })
});

// Funzione per generare le card desiderate
function createCards(tag, numCards) {
    if (numCards % 2 == 0) {

        var arrayCheckRandom = [];
        var arrayCards = [];

        for (let i = 0; i < numCards / 2; i++) {
            // Prendo l'indice di un colore random
            const randomColor = Math.floor(Math.random() * CSS_COLOR_NAMES.length);

            // Controllo se quell'indice era già uscito
            if (arrayCheckRandom.includes(randomColor) != true) {
                arrayCheckRandom.push(randomColor);

                var newColor = CSS_COLOR_NAMES[randomColor];
                var newCard = `<div class="card">
                    <div class="card-inner showBack" color="${newColor}">
                        <div class="card-front number"></div>
                        <div class="card-back" style="background-color:${newColor}"></div>
                    </div>
                </div>`
                // Pusho due card con lo stesso colore
                arrayCards.push(newCard);
                arrayCards.push(newCard);

                // Se già uscito ripeto il ciclo
            } else {
                i--;
            }

        }

        // Mischio l'array
        shuffleArray(arrayCards);
        // Stampo le cards
        arrayCards.forEach((e) => {
            tag.innerHTML += e;
        });
        // Stampo i vari numeri su ogni card
        var allNumbers = document.getElementsByClassName('card-front');
        Array.from(allNumbers).forEach((e, index) => {
            e.innerHTML += index + 1;
        })

        // Per tre secondi i colori sono visibili
        setTimeout(function () {
            var allCards = document.getElementsByClassName('card-inner');
            // Rimuovo la classe che rende visibile il back
            Array.from(allCards).forEach((e) => {
                e.classList.remove('showBack');
            });

            // Faccio partire il timer
            timer(60);

        }, 1000);

    } else {
        alert('Il numero di card inserito deve essere pari')
    }
}

// Funzione per mischiare posizione array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
// Timer
// Aspetto 3 secondi, rigiro tutte le card e faccio partire il timer
function timer(sec) {
    var timer = setInterval(function () {
        countdown.innerHTML = sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            countdown.style.display = 'none';
            sectionCard.style.display = 'none';
            sectionLose.style.display = 'flex';
        }
    }, 1000);
}


// Funzione per ricaricare la pagina
function reload(sec) {
    sectionLose.style.display = 'none';
    sectionWin.style.display = 'none';
    sectionReplay.style.display = 'flex';
    var timer = setInterval(function () {
        sectionReplay.innerHTML = `<p class="f-replay">${sec}</p>`;
        sec--;
        if (sec <= 0) {
            clearInterval(timer);
            location.reload();
        }
    }, 1000);
}