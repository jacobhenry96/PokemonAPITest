console.log('Hello world');



async function fetchData() {
    
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const healthText = document.querySelector('.health');
        const attackText = document.querySelector('.attack');
        const defenseText = document.querySelector('.defense');
        const speedText = document.querySelector('.speed');
        if (!response.ok){
            throw new Error("Could not fetch resource")
        }
        const data = await response.json();
        let health = "Health: " + data.stats[0].base_stat
        healthText.innerHTML = health;
        let attack = "Attack: " + data.stats[1].base_stat
        attackText.innerHTML = attack;
        let defense = "Defense: " + data.stats[2].base_stat
        defenseText.innerHTML = defense;
        let speed = "Speed: " + data.stats[5].base_stat
        speedText.innerHTML = speed;
        const imgElement = document.getElementById('pokemonSprite');
        console.log(health, attack, defense, speed);
        imgElement.src = data.sprites.front_default;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error)
    }
}

function getEnemyPokemon() {
    
}


fetchData();