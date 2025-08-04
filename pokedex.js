let pokedexContainer = document.getElementById("pokedex_cards");
let pokemonInfoContainer = document.getElementById("pokemon_info");
let request = new XMLHttpRequest();
request.open('GET','./data/pokedex.json');
request.onload = function(){
    let pokedexData = JSON.parse(request.responseText);
    pokemonInfoContainer.style.position = 'relative';
    createCards(pokedexData);
};
request.send();

function getTypeColor(type) {
    const typeColors = {
        Bug: '#A8B820',
        Dragon: '#7038F8',
        Electric: '#F8D030',
        Fairy: '#EE99AC',
        Fighting: '#C03028',
        Fire: '#F08030',
        Flying: '#A890F0',
        Ghost: '#705898',
        Grass: '#78C850',
        Ground: '#E0C068',
        Ice: '#98D8D8',
        Normal: '#A8A878',
        Poison: '#A040A0',
        Psychic: '#F85888',
        Rock: '#B8A038',
        Steel: '#B8B8D0',
        Water: '#6890F0'
    };

    return typeColors[type] || '#E0E0E0'; // Default gray if unknown
}


function createCards(data){
    const grid = document.createElement('div');
    grid.id = 'pokedex_grid';
    grid.className = 'row';

    for (let j = 0; j < data.length; j++) {
        const col = document.createElement('div');
        col.className = "col s12 m6 l3";

        const card = document.createElement('div');
        card.className = "card pokemon-card";
        card.accessKey = data[j].id;

        const cardImg = document.createElement('div');
        cardImg.className = "card-image";

        const image = document.createElement('img');
        image.src = data[j].img;

        const cardContent = document.createElement('div');
        cardContent.className = "card-content";

        const cardNumber = document.createElement('h6');
        cardNumber.textContent = `#${data[j].num} ${data[j].name}`;

        const pokemonType = document.createElement('div');
        pokemonType.className = "pokemon-type";

        let typeArray = data[j].type;
        for (let k = 0; k < typeArray.length; k++) {
            const chip = document.createElement('div');
            chip.className = "chip";
            chip.textContent = typeArray[k];
            chip.style.backgroundColor = getTypeColor(typeArray[k]);
            chip.style.color = '#fff'; // ensures readable text
            chip.style.fontWeight = 'bold';
            pokemonType.appendChild(chip);
        }


        card.addEventListener('click', function () {
            pokedexContainer.style.display = 'none';
            pokemonInfoContainer.style.display = "block";

            document.getElementById("pokemon-name-number").textContent = "#" + data[j].num + " " + data[j].name;
            document.getElementById("pokemon_image").src = data[j].img;
            document.getElementById("height").textContent = data[j].height;
            document.getElementById("weight").textContent = data[j].weight;
            document.getElementById("candy").textContent = data[j].candy;
            document.getElementById("candy_count").textContent = data[j].candy_count || "N/A";
            document.getElementById("spawn_chance").textContent = data[j].spawn_chance;
            document.getElementById("spawn_time").textContent = data[j].spawn_time;
            document.getElementById("weaknesses").textContent = data[j].weaknesses.join(", ");
        });

        cardImg.appendChild(image);
        cardContent.appendChild(cardNumber);
        cardContent.appendChild(pokemonType);
        card.appendChild(cardImg);
        card.appendChild(cardContent);
        col.appendChild(card);
        grid.appendChild(col);
    }

    pokedexContainer.appendChild(grid);
}

function typeLabel(type){
    if(type === "Bug"){
        let label = document.createElement('button');
        label.className = "btn dark green btn-small";
        label.textContent = "BUG";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Dragon"){
        let label = document.createElement('button');
        label.className = "btn indigo btn-small";
        label.textContent = "DRAGON";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Electric"){
        let label = document.createElement('button');
        label.className = "btn yellow btn-small";
        label.textContent = "ELECTRIC";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Fairy"){
        let label = document.createElement('button');
        label.className = "btn pink btn-small";
        label.textContent = "FAIRY";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Fighting"){
        let label = document.createElement('button');
        label.className = "btn orange btn-small";
        label.textContent = "FIGHTING";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Fire"){
        let label = document.createElement('button');
        label.className = "btn red btn-small";
        label.textContent = "FIRE";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Flying"){
        let label = document.createElement('button');
        label.className = "btn lavender btn-small";
        label.textContent = "FLYING";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Ghost"){
        let label = document.createElement('button');
        label.className = "btn purple btn-small";
        label.textContent = "GHOST";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Grass"){
        let label = document.createElement('button');
        label.className = "btn green btn-small";
        label.textContent = "GRASS";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Ground"){
        let label = document.createElement('button');
        label.className = "btn brown btn-small";
        label.textContent = "GROUND";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Ice"){
        let label = document.createElement('button');
        label.className = "btn light blue btn-small";
        label.textContent = "ICE";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Normal"){
        let label = document.createElement('button');
        label.className = "btn light grey btn-small";
        label.textContent = "NORMAL";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Poison"){
        let label = document.createElement('button');
        label.className = "btn dark purple btn-small";
        label.textContent = "POISON";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Psychic"){
        let label = document.createElement('button');
        label.className = "btn light pink btn-small";
        label.textContent = "PSYCHIC";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Rock"){
        let label = document.createElement('button');
        label.className = "btn dark brown btn-small";
        label.textContent = "ROCK";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Steel"){
        let label = document.createElement('button');
        label.className = "btn dark grey btn-small";
        label.textContent = "STEEL";
        label.style.marginLeft = '2.5%';

        return label;
    }
    else if(type === "Water"){
        let label = document.createElement('button');
        label.className = "btn blue btn-small";
        label.textContent = "WATER";
        label.style.marginLeft = '2.5%';

        return label;
    }
}

