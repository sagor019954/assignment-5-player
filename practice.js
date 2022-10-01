document.getElementById('calculation').addEventListener('click', function () {
    const perPerson = document.getElementById('per-person');
    const perPersonString = perPerson.value;
    const perPersonCost = parseFloat(perPersonString);
    const playerPriceString = playerNewArray.length;
    const playerPrice = parseFloat(playerPriceString);
    const totalPrice = perPersonCost * playerPrice;
    const totalExpanses = document.getElementById('total-expanses');
    const totalExpansesString = totalExpanses.innerText;
    const totalExpansesValue = parseFloat(totalExpansesString);
    const resultExpanses = totalExpansesValue + totalPrice;
    totalExpanses.innerText = resultExpanses;
    console.log(finalresult);
})
document.getElementById('total-btn').addEventListener('click', function () {
    const inputMan = document.getElementById('input-Man');
    const inputManString = inputMan.value;
    const inputManValue = parseFloat(inputManString);
    const inputCoach = document.getElementById('input-coach');
    const inputCoachString = inputCoach.value;
    const inputCoachValue = parseFloat(inputCoachString);
    function clubTotal(num1, num2) {
        const clubValue = num1 + num2;
        return clubValue;
    }
    const finalresult = clubTotal(inputManValue, inputCoachValue);

})
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
        const player = playerName.innerText;
        addName(player)

    })
}

// /*----
// Total expanses ---*\

