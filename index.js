function rollDice() {
    let p1Number = Math.floor((Math.random() * 6) + 1);
    let p2Number = Math.floor((Math.random() * 6) + 1);

    document.querySelector('.img1').setAttribute('src', `images/dice${p1Number}.png`);
    document.querySelector('.img2').setAttribute('src', `images/dice${p2Number}.png`);
    
    if (p1Number > p2Number) {
        document.querySelector('.container h1').textContent = 'Player 1 venceu!'
    } else if (p1Number == p2Number) {
        document.querySelector('.container h1').textContent = "Empate!"
    } else {
        document.querySelector('.container h1').textContent = 'Player 2 venceu!'
    }
}
rollDice();

document.querySelector('#roll-button').addEventListener('click', rollDice)