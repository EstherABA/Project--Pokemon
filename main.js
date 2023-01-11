
import data from "./pokedex.json" assert { type:"json" };

console.log(data)
console.log(typeof(data))


for (let i=0; i<13; i++) {
    //creating small div
    const smallContainer = document.createElement("div");
    smallContainer.className = "one-pokemon-div";

    //adding id -> small div//
    const pokemonId = document.createElement("p"); 
    pokemonId.innerHTML = `#00${data[i]['id']}`;
    smallContainer.appendChild(pokemonId);
    pokemonId.className = "type-of-id";
    
    //adding img -> small div//
    const pokemonImg = document.createElement("img");
    pokemonImg.src = `${data[i]['image']['hires']}`;
    smallContainer.appendChild(pokemonImg);
    
    //adding name -> small div//
    const pokemonName = document.createElement("p");
    pokemonName.innerHTML = `${data[i]['name']['english']}`;
    smallContainer.appendChild(pokemonName);
    pokemonName.className = "type-of-name";

    ///adding small div -> main div///
    const mainDiv = document.getElementById("main-all-pokemons");
    mainDiv.appendChild(smallContainer);
}



// let country = {
//     id: "312232481", 
//     name: "israel",
//     population: 7000,
// };

// let countryJason = JSON.stringify(country);

// console.log(country);
// console.log(countryJason);
// console.log(typeof(countryJason));

// let yabeshet = {
//     continentName: "eur",
//     countries: [
//     {
//         id: "20097675", 
//         name: "egypth",
//         population: 1000,
//     },
//     {
//         id: "00000", 
//         name: "spain",
//         population: 8000,
//     },
//     {
//         id: "99999", 
//         name: "cyprus",
//         population: 2000,
//     }]

// };

// let yabeshetJason = JSON.stringify(yabeshet);
// let objFromJsonYabeshet = JSON.parse(yabeshetJason);

// console.log(yabeshet);
// console.log(yabeshetJason);
// console.log(objFromJsonYabeshet );
