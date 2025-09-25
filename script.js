


// HTML Selectors
const mainForm = document.getElementById("main_form");
const outputDiv = document.getElementById("output");

// Variables of the inputs
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

//Event Listeners
mainForm.addEventListener('submit', function(e)) {
    // Prevent the action from the form to refresh the page
    e.preventDefault();

    console.log(`FirstName: ${firstName.value}`);
    console.log(`LastName: ${lastName.value}`);

    // Output results of the form
    outputDiv.innerHTML =`
    <p>My first name is: ${firstName.value} and my last name is: ${lastName.value}</p>
    `;

    outputDiv.style.display = 'block';
    // Clear the form
    firstNameInput.value = '';
    lastNameInput.value = '';
    
}



