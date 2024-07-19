function validateForm() {
    
    const recipe = document.getElementById("recipe").value;
    const ingredient = document.getElementById("ingredient").value;
    const instruction = document.getElementById("instruction").value;
    



    const recipeError = document.getElementById("recipe-error");
    const ingredientError = document.getElementById("ingredient-error");
    const instructionError = document.getElementById( "instruction-error");
    

    recipeError.textContent = "";
    ingredientError.textContent = "";
    instructionError.textContent = "";
   

    let isValid = true;

    if (recipe === "" || /\d/.test(recipe)) {
        recipeError.textContent =
            "Please enter your recipe properly.";
        isValid = false;
    }

    if (ingredient === "" ||  /\d/.test(ingredient)) {
        ingredientError.textContent =
            "Please enter your ingredient properly";
        isValid = false;
    }

    if (instruction === "" ||  /\d/.test(instruction)) {
        instructionError.textContent =
            "Please enter your instruction properly";
        isValid = false;
    }

        
    display(recipe, ingredient , instruction); 
    
    return isValid;
   
}

function display(recipe, ingredient,instruction) {
    const table = document.getElementById('dataTable');
    const newRow = table.insertRow();

    const recipeCell = newRow.insertCell(0);
    const ingredientCell = newRow.insertCell(1);
    const instructionCell= newRow.insertCell(2);

    recipeCell.innerHTML = recipe;
    ingredientCell.innerHTML = ingredient;
    instructionCell.innerHTML=instruction;
    
    table.style.display = 'table';

    document.getElementById('dataForm').reset();
}