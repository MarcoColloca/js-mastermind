console.log('JS Trial') 

/// generare un array di 4 numeri univoci compresi da 1 a 9

/// leggere l'input inserito  (max 4 numeri) e trasformarlo in un array di 4 numeri interi

/// verificare se i valori inseriti corrispondono o sono presenti nell'array dei nuemri generati all'inizio

/// rispondere con una stringa composta da o / x dove:
///  • o = numero giusto posizione sbagliata
///  • x = numero giusto posizione corretta


// funzione che crea una quantità di numeri univoci pari a "howMany" ognuno di essi copmreso tra "min" e "max"
function randomNumbers (min, max, howMany){

    const randomUniqueNumbers = []

    while (randomUniqueNumbers.length < howMany){

        let randomNumber = Math.floor(Math.random() * max) + min;

        if (randomUniqueNumbers.includes(randomNumber) === false){
            // Inserisco il numero generato nell'Array
            randomUniqueNumbers.push(randomNumber);
        }

    }

    return randomUniqueNumbers
}


//funzione che converte una stringa in un array di numeri
function convertStringToNumberArray(numberString){

    let userNumbersArray = []
    
    for(let i = 0; i < numberString.length; i++){

        userNumbersArray.push(parseInt(numberString[i]))  

    }

    return userNumbersArray
}







const userNumbersDOMElement = document.getElementById('user-number')

const resultBox = document.getElementById('result')
const getNumbers = document.getElementById('submit-numbers')

const gameNumbers = randomNumbers(1, 9, 4)
console.log(gameNumbers)



getNumbers.addEventListener('click', function(){

    const userNumbers = document.getElementById('user-number').value

    let reslutString = document.createElement('div')
    resultBox.append(reslutString)
    reslutString.classList.add('reslut-string')

    const playerNUmberArray = convertStringToNumberArray(userNumbers)
    
    
    let counter = 0

    for(let i = 0; i < playerNUmberArray.length; i++){
        
        const indexChecked = gameNumbers.indexOf(playerNUmberArray[i]);
        
        

        if(indexChecked === (0 + i)){

            reslutString.innerHTML += 'x '

        }else if(indexChecked !== -1){

            reslutString.innerHTML += ' o '
        }

        if(reslutString.innerHTML === 'x x x x '){
            reslutString.innerHTML = 'HAI VINTO!'
        }
    }
})


