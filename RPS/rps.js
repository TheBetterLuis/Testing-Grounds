
async function gettingData() {
    try {
        let info = await fetch('https://rps101.pythonanywhere.com/api/v1/objects/all');
        let data = await info.json();

        console.table(data);

        data.forEach(element => {
            let firstSelect = document.getElementById('firstSelect');
            let secondSelect = document.getElementById('secondSelect');


            let firstOption = document.createElement('option');
            let secondOption = document.createElement('option');


            firstOption.innerText = element;
            firstOption.value = `${element}`;
            secondOption.innerText = element;
            secondOption.value = `${element}`;

            firstSelect.appendChild(firstOption);
            secondSelect.appendChild(secondOption);



        });
    } catch (error) {
        console.error(error);
    }
};

gettingData();


async function battle() {
    let firstValue = document.getElementById('firstSelect').value;
    let secondValue = document.getElementById('secondSelect').value;

    const outcome = await fetch(`https://rps101.pythonanywhere.com/api/v1/match?object_one=${firstValue}&object_two=${secondValue}`);

    let outcomeData = await outcome.json();

    console.log(outcomeData)
    announceWinner(firstValue, secondValue, outcomeData)
}

const buttonBattle = document.getElementById('battle');
buttonBattle.addEventListener('click', battle);


//console.log("El codigo no se detuvo")

function announceWinner(firstValue, secondValue, outcomeData) {
    const outcomeDiv = document.getElementById('outcome');
    outcomeDiv.innerHTML = '';

    if (outcomeData.winner === outcomeData.loser) {
        let outcome = document.createElement('h1');
        outcome.innerText = `${firstValue} is the same as ${secondValue}`
        outcomeDiv.appendChild(outcome);
    } else {


        let outcome = document.createElement('h1');
        outcome.innerText = `${outcomeData.winner} ${outcomeData.outcome} ${outcomeData.loser}`
        outcomeDiv.appendChild(outcome);
    }


}