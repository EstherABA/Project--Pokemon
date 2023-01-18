import data from "./pokedex.json" assert { type:"json" };

let favoriteList = [];
localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
let heart_like_button = "./assets/Vector.png"
let heart_unlike_button = "./assets/VectorOnClick.png"



//adding pokemons card to main screen
export function addPokemonCard() {

    for (let i= 0 ; i<12 ; i++) {
        //creating small div for each pokemon
        const smallContainer = document.createElement("div");
        smallContainer.className = "one-pokemon-div";
        smallContainer.setAttribute("id",data[i]['id']);

        //adding id -> small div//
        const pokemonId = document.createElement("div");
        for (let y=0 ; y<1 ; y++){
            const lengthOfId = `${data[i]['id']}`
            if (lengthOfId.length < 2){
                pokemonId.innerHTML = `#00${data[i]['id']}`;
            }
            else if (lengthOfId.length > 1 && lengthOfId.length < 3 ){
                pokemonId.innerHTML = `#0${data[i]['id']}`;
            }
            else {
                pokemonId.innerHTML = `#${data[i]['id']}`;
            }
            y++
        }; 
        // pokemonId.innerHTML = `#00${data[i]['id']}`;
        smallContainer.appendChild(pokemonId);
        pokemonId.className = "type-of-id";
        
        //adding img -> small div//
        const pokemonImg = document.createElement("img");
        pokemonImg.src = `${data[i]['image']['hires']}`;
        smallContainer.appendChild(pokemonImg);
        
        //adding name -> small div//
        const pokemonName = document.createElement("div");
        pokemonName.innerHTML = `${data[i]['name']['english']}`;
        smallContainer.appendChild(pokemonName);
        pokemonName.className = "type-of-name";

        ///adding small div -> main div///
        const mainDiv = document.getElementById("main-all-pokemons");
        mainDiv.appendChild(smallContainer);
    }
};
addPokemonCard()


//creating div with data - for modal box
function addPokemonModal() {
    for (let i=1; i<13; i++) {
                
        const BigDivForAllModals = document.getElementById("all-modal");

        // create The Modal
        const modal= document.createElement("div");
        modal.setAttribute("id",`myModal-${i}`);
        modal.className = "modal";
        
        // create Modal content 
        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";

        // create span
        const modalSpan = document.createElement("span");
        modalSpan.setAttribute("id",`span-${i}`);
        modalSpan.className = "close";
        modalSpan.innerHTML = "X";
        modalContent.appendChild(modalSpan);

        //create items for content
        //div for id
        const divForId = document.createElement("div");
        divForId.setAttribute("id",`divForId-${i}`);
        divForId.className = "div-for-id-modal";
        for (let y=0 ; y<1 ; y++){
            const lenghtOF = `${data[i-1]['id']}`
            if (lenghtOF.length < 2){
                divForId.innerHTML = `#00${data[i-1]['id']}`;
            }
            else if (lenghtOF.length > 1 && lenghtOF.length < 3 ){
                divForId.innerHTML = `#0${data[i-1]['id']}`;
            }
            else {
                divForId.innerHTML = `#${data[i-1]['id']}`;
            }
            y++
        };
        
        //div for img
        const divForImg = document.createElement("img");
        divForImg.src = `${data[i-1]['image']['hires']}`;
        
        //div for name
        const divForName = document.createElement("div");
        divForName.setAttribute("id",`divForName-${i}`);
        divForName.className = "div-for-Name-modal";
        divForName.innerHTML = `${data[i-1]['name']['english']}`;
        
        //div for type
        const divForType = document.createElement("div");
        divForType.setAttribute("id",`divForType-${i}`);
        divForType.className = "div-for-Type-modal";

        let typeColors = {
            normal:   '#A8A77A',
            fire:   '#EE8130',
            water:   '#6390F0',
            electric:   '#F7D02C',
            grass:   '#7AC74C',
            ice:   '#96D9D6',
            fighting:   '#C22E28',
            poison:   '#A33EA1',
            ground:   '#E2BF65',
            flying:   '#A98FF3',
            psychic:   '#F95587',
            bug:   '#A6B91A',
            rock:   '#B6A136',
            ghost:   '#735797',
            dragon:   '#6F35FC',
            dark:   '#705746',
            steel:   '#B7B7CE',
            fairy:   '#D685AD',

        };
            
        for (let j=0; j<data[i-1]['type'].length; j++){
            let color = typeColors[data[i-1]["type"][j].toLowerCase()];
            
            let buttonForType = document.createElement("button");
            buttonForType.setAttribute("id",`buttonType${j}-forPokemon${i}`);
            buttonForType.className = `button-for-Type`;

            buttonForType.style.backgroundColor = color;
            buttonForType.innerHTML = `${data[i-1]['type'][j]}`;
            divForType.appendChild(buttonForType);
            
        };
        
        //big div for description
        const divForAllDescription = document.createElement("div");
        divForAllDescription.setAttribute("id",`divForAllDescription-${i}`);
        divForAllDescription.className = "div-for-All-Description";
        
        //div for description Title
        const divForDescriptionTitle = document.createElement("div");
        divForDescriptionTitle.setAttribute("id",`divForDescriptionTitle-${i}`);
        divForDescriptionTitle.className = "div-for-Description-title-modal";
        divForDescriptionTitle.innerHTML = "Description";
        
        //div for description content
        const divForDescription = document.createElement("div");
        divForDescription.setAttribute("id",`divForDescription-${i}`);
        divForDescription.className = "div-for-Description-modal";
        divForDescription.innerHTML = `${data[i-1]['description']}`;
        
        divForAllDescription.append(divForDescriptionTitle,divForDescription)
        
        //div for All stats content
        const divForAllStats = document.createElement("div");
        divForAllStats.setAttribute("id",`divForAllStats-${i}`);
        divForAllStats.className = "div-for-All-Stats"; //class
        divForAllStats.innerHTML = "";

        //div for stats Title
        const divForStatsTitle = document.createElement("div");
        divForStatsTitle.setAttribute("id",`divForStatsTitle-${i}`);
        divForStatsTitle.className = "div-for-statsTitle-modal"; //class
        divForStatsTitle.innerHTML = "Stats";
        
        //div for stats details//
        //div fo HP-side
        const divForStatsHpAttDef = document.createElement("div");
        divForStatsHpAttDef.setAttribute("id",`statsHpAttDef-forPokemon${i}`);
        divForStatsHpAttDef.className = `div-for-stats-Hp`; //class
        divForStatsHpAttDef.innerHTML = 'HP:' +' '+ data[i-1]['base']['HP'] +'<br>'
        + 'Attack:' +' '+ data[i-1]['base']['Attack'] + '<br>' 
        + 'Defense:' +' '+ data[i-1]['base']['Defense'];
        
        //div for Special-side
        const divForStatsSpeicalSpeed = document.createElement("div");
        divForStatsSpeicalSpeed.setAttribute("id",`statsSpeicalSpeed-forPokemon${i}`);
        divForStatsSpeicalSpeed.className = `div-for-stats-special`; //class
        divForStatsSpeicalSpeed.innerHTML = 'Sp. Attack:' + ' ' + data[i-1]['base']['Sp. Attack']+'<br>'
        + 'Sp. Defense:' +'  '+ data[i-1]['base']['Sp. Defense'] + '<br>' 
        + 'Speed:' +'  '+ data[i-1]['base']['Speed'];

        //div for total-line
        let array = [data[i-1].base.HP, data[i-1].base.Attack, data[i-1].base.Defense, data[i-1].base["Sp. Attack"], data[i-1].base["Sp. Defense"], data[i-1].base.Speed]
        const divForStatsTotal = document.createElement("div");
        divForStatsTotal.setAttribute("id",`statsTotal-forPokemon${i}`);
        divForStatsTotal.className = `div-for-stats-total`; //class
        divForStatsTotal.innerHTML = 'Total:' + array.reduce((accumulator, currentValue) => accumulator + currentValue);

        //add all to the big stats div
        divForAllStats.append(divForStatsHpAttDef,divForStatsSpeicalSpeed,divForStatsTotal)
        
        //create div for *left* details
        const divForLeft = document.createElement("div");
        divForLeft.setAttribute("id",`divForLeft-${i}`);
        divForLeft.className = "div-for-left";
        divForLeft.append(divForId,divForImg,divForName,divForType);
        //create div for line border
        const divForLine = document.createElement("div");
        divForLine.setAttribute("id",`divForLine-${i}`);
        divForLine.className = "div-for-line";
        //create div for *right* details
        const divForRight = document.createElement("div");
        divForRight.setAttribute("id",`divForRight-${i}`);
        divForRight.className = "div-for-right";
        divForRight.append(divForAllDescription,divForStatsTitle,divForAllStats);
        //create div for favorite-pic
        const buttonForHeart = document.createElement("img");
        buttonForHeart.setAttribute("id",`button-for-heart` )
        buttonForHeart.src = "./assets/Vector.png"
        buttonForHeart.className = "but-for-heart"

        // const imgFavorite = document.getElementById(`button-for-heart`);
        // console.log(imgFavorite);
        buttonForHeart.addEventListener("click", favorite);

        function favorite() {
            console.log("hi");

            //change the img
            if(buttonForHeart.getAttribute("src") == heart_unlike_button ) {
                console.log("test1");
                buttonForHeart.src = heart_like_button
            }
            else if (buttonForHeart.getAttribute("src") == heart_like_button) {
                buttonForHeart.src = heart_unlike_button 
            };

            //add to local storage
            favoriteList.push(data.indexOf(data[i-1]))
            // JSON.parse(localStorage.getItem("favoriteList"))
            localStorage.setItem("favoriteList",favoriteList)

        }

        modalContent.append(divForLeft,divForLine,divForRight,buttonForHeart);
        // append all child to modal
        modal.append(modalContent);
        
        //adding the modal div to original pokemon div
        BigDivForAllModals.appendChild(modal);    
        }

};
addPokemonModal()



//add event listener to display the modal
function displayModal() {
    for (let i=1; i<13;i++) {
            let pokemonCard = document.getElementById(`${i}`);
            pokemonCard.addEventListener("click", function() {
                document.getElementById(`myModal-${i}`).style.display = "block";
            });

            let span = document.getElementById(`span-${i}`);
            // When the user clicks on <span> (x), close the modal
            span.addEventListener("click", function() {
                document.getElementById(`myModal-${i}`).style.display = "none";
            });
    }
};
displayModal()

