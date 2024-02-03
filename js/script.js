const firstNumberInArray = document.querySelector('.firstNumberInArray')
const lastNumberInArray = document.querySelector('.lastNumberInArray')
const acceptRangeBtn = document.querySelector('.acceptRangeBtn')
const tableWithNumbers = document.querySelector('.tableWithNumbers')
const drawNumber = document.querySelector('.drawNumber')
const luckyNumber = document.querySelector('.luckyNumber')

//Obsługa klawisza enter
document.addEventListener('keypress', (e) =>{
    let keyCode = e.keyCode ? e.keyCode : e.which;
    if(keyCode === 13) {
      makeTableWithNumbers()
}})


const makeTableWithNumbers = () => {

    if((Number(firstNumberInArray.value) >= Number(lastNumberInArray.value)) || (firstNumberInArray.value == '' || lastNumberInArray == '' || lastNumberInArray.value > 999)){
         alert('Podaj poprawne wartości')
         firstNumberInArray.value = '1'
         lastNumberInArray.value = ''
        }
    else{
        let numbers = []

        for (let i = Number(firstNumberInArray.value); i<=Number(lastNumberInArray.value); i++){
            //Utworzenie boxów z liczbami z podanego zakresu
            const numberDiv = document.createElement("div");
            numberDiv.classList.add('number')
            numberDiv.textContent = i
            tableWithNumbers.appendChild(numberDiv)

            //Usuwanie ręczne elementów z tablicy
            numberDiv.addEventListener('click', () => {
                numbers.forEach(element => {
                    if(element == numberDiv.textContent){
                       numbers = numbers.filter(item => item !== element)
                       console.log(numbers);
                    }
                    numbers.indexOf(element)
                });

                numberDiv.style = "display: none"
            })
            numbers.push(i)
        }
        const drawRandomNumber = () => {
            
            let luckyNumberNow = numbers[Math.floor(Math.random()*numbers.length)]
            luckyNumber.textContent = luckyNumberNow
            numbers.forEach(element => {
                if(element == luckyNumberNow){
                   numbers = numbers.filter(item => item !== element)
                   console.log(numbers);
                }
                numbers.indexOf(element)
                if(numbers.length < 1){drawNumber.style = "display: none"}
            });
            const numberDivs = document.querySelectorAll('.number')
            console.log(numberDivs);

            numberDivs.forEach(element => {
                if(element.textContent == luckyNumberNow){
                    element.style = 'display: none'
                }
            })
            
        }
        drawNumber.addEventListener('click', drawRandomNumber)

        console.log(numbers);
        acceptRangeBtn.style = "display: none"
        drawNumber.style = "display: block"
        firstNumberInArray.setAttribute('disabled', '')
        firstNumberInArray.value = ''
        lastNumberInArray.setAttribute('disabled', '')
        lastNumberInArray.value = ''
    }        
}
acceptRangeBtn.addEventListener('click', makeTableWithNumbers)

