console.log("Hello")
let container = document.querySelector(".foodList")

// fetch("http://localhost:8088/foods")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     })


    const foodHTML = (food) => {
        return `
        <div> 
        <h1>${food.name}</h1
        <p>${food.category}</p>
        <p>${food.ethnicity}</p>
        </divs>
        `
    }




    const foodFactory = (food) =>  {
            container.innerHTML += food
    }

    // fetch("http://localhost:8088/foods")
    // .then(foods => foods.json())
    // .then(parsedFoods => {
    //     parsedFoods.forEach(food => {
    //         const foodAsHTML = foodHTML(food)
    //         foodFactory(foodAsHTML)
    //     })
    // })