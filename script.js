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

//Event Listener
mainForm.addEventListener("submit", function (e) {
    // Prevents page refresh on submit
    e.preventDefault();

   // console.log(`FirstName: ${firstName.value}`);
   // console.log(`LastName: ${lastName.value}`);
   // console.log(`Email: ${email.value}`);
   // console.log(`Password: ${password.value}`);// Wouldn't do this in a real app for security reasons
   // console.log(`Birth Date: ${birthDate.value}`);
   
    // Loop through the checkboxes to see which ones are checked
    const selectedInterests = []; // makes array to hold selected interests
    interests.forEach((box) => { // loops through each checkox in nodelist called "interests"
     //  console.log (`Interest: ${box.value}, Checked: ${box.checked}`); //logs value and checked status of each box
       if(box.checked) { // if a box is checked, next line then logs the value into the selectedIntersts array
            selectedInterests.push(box.value);
      }
    }); 

    const interestsText = selectedInterests.length // check if any interests were selected
            ? selectedInterests.join(", ") // join them into a comma separated string ? is shorthand for an if/then statement. In this case, the ? tells the code to do the next thing if true. 
            // The : is shorthand for else, so if false, do the thing after the :
            : "None selected"; // if none selected, this is shown instead



    // Output results of the form
    outputDiv.innerHTML = `
        <p>My first name is: ${firstName.value} and my last name is: ${lastName.value}</p>
        <p>My email is: ${email.value}</p>
        <p>My password is: ${password.value}</p> 
        <p>My birth date is: ${birthDate.value}</p>
        <p>My interests are: ${interestsText}</p>
    `;
    // Note: In a real application, I wouldn't display the password like this for security reasons.

    // Makes the output div visible    
    outputDiv.style.display = 'block';
    
    // Clears the form
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    birthDate.value = '';
    interests.forEach((box) => 
        { box.checked = false; }); // unchecks all checkboxes

});
