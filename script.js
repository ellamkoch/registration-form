// HTML Selectors
const mainForm = document.getElementById("main_form");
const outputDiv = document.getElementById("output");

// Variables of the inputs
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const birthDate = document.getElementById("birthDate");
const interests = document.querySelectorAll(".checkbox_item_input"); // select all checkboxes with this class

//Event Listeners
mainForm.addEventListener('submit', function (e) {
    // Prevent the action from the form to refresh the page
    e.preventDefault();

    console.log(`FirstName: ${firstName.value}`);
    console.log(`LastName: ${lastName.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Password: ${password.value}`);// Wouldn't do this in a real app for security reasons
    console.log(`Birth Date: ${birthDate.value}`);
   
    // Loop through the checkboxes to see which ones are checked
    const selectedInterests = [];
    interests.forEach((box) => {
       console.log (`Interest: ${box.value}, Checked: ${box.checked}`);
        if(interest.checked) {
            selectedInterests.push(box.value);
        }
    }); 

    // Output results of the form
    const interestsText = selectedInterests.length // check if any interests were selected
        ? selectedInterests.join(", ") // join them into a comma separated string
        : "None selected"; // if none selected, this is shown instead

    outputDiv.innerHTML = `
    <p>My first name is: ${firstName.value} and my last name is: ${lastName.value}</p>
    <p>My email is: ${email.value}</p>
    <p>My birth date is: ${birthDate.value}</p>
    <p>My interests are: ${interestsText}</p>
  `;
    
    outputDiv.style.display = 'block';
    
    // Clears the form
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    birthDate.value = '';
    interests.forEach((box) => { box.checked = false; }); // unchecks all checkboxes

});
