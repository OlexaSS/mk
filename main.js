let player1 = {
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['нож', 'пистолет', 'автомат'],
    attack (){
        console.log(player1.name +' '+ 'Fight...')
    }

}

function createPlayer(player, name){
    
    const $arenas = document.querySelector('.arenas');

    const $player = document.createElement('div');
        $player.classList.add(player);

    const $progressbar = document.createElement('div');
        $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
        $character.classList.add('character');

    const $life = document.createElement('div');
        $life.classList.add('life');
        $life.innerHTML = name.hp;

    const $name = document.createElement('div');
        $name.classList.add('name');
        $name.innerHTML = name.name;

    const $img = document.createElement('img');
        $img.classList.add('img');
        $img.src=name.img;

    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    
}

createPlayer('Player1', player1);