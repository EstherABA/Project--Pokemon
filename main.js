import data from "./pokedex.json" assert { type:"json" };

console.log(data)
console.log(typeof(data))
console.log(data[0]['description']);



for (let i=0; i<12; i++) {
    //creating small div for each pokemon
    const smallContainer = document.createElement("div");
    smallContainer.className = "one-pokemon-div";
    smallContainer.setAttribute("id",data[i]['id']);


    //adding id -> small div//
    const pokemonId = document.createElement("div"); 
    pokemonId.innerHTML = `#00${data[i]['id']}`;
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



function x() {
    for (let i=1; i<13; i++) {
                
        const BigDivForAllModals = document.getElementById("all-modal");
        // The Modal
        const modal= document.createElement("div");
        modal.setAttribute("id",`myModal-${i}`);
        modal.className = "modal";
        console.log("modal::::" , modal);
        
        // Modal content 
        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        console.log("modalContent::::" , modalContent);
        
        // create p for modal text
        const modalPara = document.createElement("p");
        const detailsForPokemon = {
            description: data[i]['description'], 
            HP: data[i]['HP'],
            Attack: data[i]['Attack'],
            }
        //     Defense:
        //     Spaical Atk:
        //     Spaical Def:
        //     Speed:
        //     Total:
        // },
    //      {
        //     id:
        //     img:
        //     name:
        //     types:
        // }
        const myArray = Object.values(detailsForPokemon);
        modalPara.innerHTML = myArray ;
        console.log("modalPara::::::" , modalPara);
        modalContent.appendChild(modalPara);
        
        // create span for modal close
        const modalSpan = document.createElement("span");
        modalSpan.className = "close";

        modalContent.appendChild(modalSpan);
        
        // append all child to modal
        modal.appendChild(modalContent);
       
        //adding the modal div to original pokemon div
        BigDivForAllModals.appendChild(modal);    
        
    }}
    
    x()

    for (let i=1; i<13;i++) {
    const firstpokemon = document.getElementById(i);
    // const firstModal = document.getElementById("myModal-1")

    firstpokemon.addEventListener("click", function() {
        document.getElementById(`myModal-${i}`).style.display = "block";
    });
}

// ${i}