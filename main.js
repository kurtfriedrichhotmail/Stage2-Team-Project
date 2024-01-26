//create food object constructor
class Food{
    constructor(fName,fCalories){
        this.name = fName;
        this.calories = fCalories;
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    let foodName;
    let calories;
    let total;
    
    //define a FoodList array
    let foodList = [];

    document.getElementById("button1").addEventListener("click", function () {
        foodName = document.getElementById("foodName").value ;
        calories = document.getElementById("calories").value ;
        console.log(foodName + "  " + calories)

        //call constructor
        const foodObject = new Food(foodName, calories);
        //push the new object into the array
        foodList.push(foodObject);
        console.log("sucess");
    });
});







