console.log('JS Trial') 

// 1 • generare un array di 4 numeri univoci compresi da 1 a 9

// 2 • leggere l'input inserito  (max 4 numeri) e trasformarlo in un array di 4 numeri interi

// 3 • verificare se i valori inseriti corrispondono o sono presenti nell'array dei nuemri generati all'inizio

// 4 • rispondere con una stringa composta da o / x dove:
///         • o = numero giusto posizione sbagliata
///         • x = numero giusto posizione corretta


// funzione che crea una quantità di numeri univoci pari a "howMany" ognuno di essi copmreso tra "min" e "max".
function randomNumbers (min, max, howMany){

    const randomUniqueNumbers = []

    while (randomUniqueNumbers.length < howMany){

        let randomNumber = Math.floor(Math.random() * max) + min;

        if (randomUniqueNumbers.includes(randomNumber) === false){
            
            randomUniqueNumbers.push(randomNumber);
        }

    }

    return randomUniqueNumbers
}


//funzione che converte una stringa in un array di numeri.
function convertStringToNumberArray(numberString){

    let userNumbersArray = []
    
    for(let i = 0; i < numberString.length; i++){

        userNumbersArray.push(parseInt(numberString[i]))  

    }

    return userNumbersArray
}


// funzione che permette di avviare il giochino, quando si vince viene bloccato il pulsante per indovinare i numeri, ed appare il pulsante per il reset.
function playGame (){

    const userNumbers = document.getElementById('user-number').value

    let numberString = document.createElement('span')
    let reslutString = document.createElement('div')
    resultBox.append(reslutString)
    resultBox.append(numberString)
    reslutString.classList.add('reslut-string', 'col-60')
    numberString.classList.add('number-string', 'col-20')

    const playerNUmberArray = convertStringToNumberArray(userNumbers)
    
    
    

    for(let i = 0; i < playerNUmberArray.length; i++){
        
        const indexChecked = gameNumbers.indexOf(playerNUmberArray[i]);
        

        if(indexChecked === (0 + i)){

            reslutString.innerHTML += 'x '

        }else if(indexChecked !== -1){

            reslutString.innerHTML += 'o '
        }

        if(reslutString.innerHTML === 'x x x x '){
            reslutString.innerHTML = 'HAI VINTO! Ci hai impiegato ' + '<span style="color:rgb(0, 81, 255);">' + (counter+1) + '</span>' + ' tentativi.'
            reset.classList.remove('d-none')
            getNumbers.removeEventListener('click', playGame)
        }
    }

    counter += 1
    // console.log(counter)
    numberString.innerHTML += userNumbers;

    userNumbersDOMElement.value = ''
}


// funzione che permette il reset del giochino.
function resetGame(){
    resultBox.innerHTML = ''

    gameNumbers = randomNumbers(1, 9, 4)
    console.log(gameNumbers) /* se vuoi barare, attiva il commento ed in console trovi i numeri :-) */
    reset.classList.add('d-none')
    getNumbers.addEventListener('click', playGame)
    counter = 0
}





const reset = document.getElementById('reset')

const userNumbersDOMElement = document.getElementById('user-number')

const resultBox = document.getElementById('result')

const getNumbers = document.getElementById('submit-numbers')

let counter = 0


let gameNumbers = randomNumbers(1, 9, 4)
console.log(gameNumbers) /* se vuoi barare, attiva il commento ed in console trovi i numeri :-) */




getNumbers.addEventListener('click', playGame)


reset.addEventListener('click', resetGame)