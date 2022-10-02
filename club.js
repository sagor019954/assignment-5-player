function TotalCosts() {
    const perPerson = document.getElementById('per-person');
    const perPersonString = perPerson.value;
    const perPersonCost = parseFloat(perPersonString);
    const playerPriceString = playerNewArray.length;
    const playerPrice = parseFloat(playerPriceString);
    const totalPrice = perPersonCost * playerPrice;
    const totalExpanses = document.getElementById('total-expanses');
    totalExpanses.innerText = totalPrice
    const inputMan = document.getElementById('input-Man');
    const inputManString = inputMan.value;
    const inputManValue = parseFloat(inputManString);
    const inputCoach = document.getElementById('input-coach');
    const inputCoachString = inputCoach.value;
    const inputCoachValue = parseFloat(inputCoachString)
    const sum = inputManValue + inputCoachValue + totalPrice;
    const totalfield = document.getElementById('total-field');
    totalfield.innerText = sum;
    if (isNaN(perPersonCost)) {
        alert('Give  Value');

    }
    if (isNaN(inputManValue) || isNaN(inputCoachValue)) {
        alert('Give Maneger and Coach Price')
    }
}

const playerNewArray = [];
function addName(player) {
    playerNewArray.push(player);
    if (playerNewArray.length > 5) {
        alert('you can not add player');
        return;
    }
    const playerList = document.getElementById('player-list');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerText = player;
    ul.appendChild(li);
    playerList.appendChild(ul);
    console.log(playerNewArray);
}
const btns = document.getElementsByClassName('btn');

const names = document.getElementsByClassName('name');
for (let i = 0; i <= btns.length; i++) {

    btns[i].addEventListener('click', function () {
        const playerName = names[i];
        console.log(playerName);
        const player = playerName.innerText;
        addName(player)
        if (true && playerNewArray.length <= 5) {
            const btnsfield = document.querySelectorAll('.btn');
            const btnSingle = btnsfield[i];
            btnSingle.style.backgroundColor = 'red'
            btnSingle.disabled = true;
        }
    })
}

