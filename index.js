const { faker } = require('@faker-js/faker');

const pizzas = [];



function getRandomPizzaIngredient() {
    const randomIndex = Math.floor(Math.random() * pizzaIngredients.length);
    return pizzaIngredients[randomIndex];
  }
  

function addPizza() {
    // Create pizzas
    pizzas.push({
        name: faker.address.cityName(),
        priceinCents: faker.commerce.price(1, 10),
        ingredients: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]
    })
}


// Creating an array to store pizza stores
const pizzaStores = [];

// Function to add a pizza store
function addPizzaStore(data) {
    pizzaStores.push(data);
    return data;
}

// Reading all pizza stores
function getPizzaStores() {
    return pizzaStores;
}

// Reading a single pizza store by index
function getSinglePizzaStore(index) {
    return pizzaStores[index];
}

// Updating a pizza store by index
function updatePizzaStore(index, data) {
    if (index >= 0 && index < pizzaStores.length) {
        pizzaStores[index] = {
            ...pizzaStores[index],
            ...data
        };
    }
    return pizzaStores[index];
}

// Delete a pizza store by index
function deletePizzaStore(index) {
    if (index >= 0 && index < pizzaStores.length) {
        pizzaStores.splice(index, 1);
    }
}
  addPizza() 
  addPizza()
  addPizza()
  console.log(pizzas)

// const pizzaStores = require("./data/pizzaStores.json");







