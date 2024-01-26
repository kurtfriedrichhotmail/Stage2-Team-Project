document.addEventListener("DOMContentLoaded", function (event) {
    let foodName;
    let calories;
    let total;
    document.getElementById("button1").addEventListener("click", function () {
        foodName = document.getElementById("foodName").value ;
        calories = document.getElementById("calories").value ;
        console.log(foodName + "  " + calories)
    });
});




