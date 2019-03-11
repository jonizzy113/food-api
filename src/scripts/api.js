

fetch("http://localhost:8088/foods")
    .then(response => response.json())
    .then(myFoods => {
        myFoods.forEach(foodObj => {
            fetch(`https://world.openfoodfacts.org/api/v0/product/${foodObj.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    //  getting all the information
                    foodObj.ingredients = productInfo.product.ingredients
                    foodObj.countriesOrigin = productInfo.product.countries
                    foodObj.sugars = productInfo.product.nutriments.sugars_100g
                    foodObj.fats = productInfo.product.nutriments.fat_100g
                    foodObj.carbs = productInfo.product.nutriments.carbohydrates_100g

                    // // Produce HTML representation
                    // const foodAsHTML = foodFactory(food)
                    const foodAsHTML = (food) => {
                        let contents = " "
                        for(let item = 0; item < food.ingredients.length; item++){
                            contents += food.ingredients[item].text + ", "
                            console.log(contents)
                        }
                            
                        console.log(contents)
                        // return statment 
                        return `
                        <div class="foodItems">
                            <h1>${food.name}</h3>
                            <h2>${food.category}</h4>
                            <h3>${food.ethnicity}</h5>
                            <p>Origin: ${food.countriesOrigin}</p>
                            <p>Ingredients: ${contents}</p>
                            <p>Sugars: ${food.sugars}</p>
                            <p>Fats: ${food.fats}</p>
                            <p>Carbs: ${food.carbs}</p>
                        </div>
                        `
                    }
                    // // Add representaiton to DOM
                    // addFoodToDom(foodAsHTML)
                    container.innerHTML += foodAsHTML(foodObj)
                })
        })
})