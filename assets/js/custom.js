function validateForm(event) {
    "use strict";
    event.preventDefault();
    const form = document.getElementById("create-page");
    if (!form.checkValidity()) {
        //form tidak valid
        event.stopPropagation();
        form.classList.add("was-validated");
        return false;
    }
    return submitForm();
}

function submitForm() {
    console.log("Get Form Content");
    const nameField = document.getElementById("name");
    const nameValue =  nameField.value;
    console.log("nameValue :>>",nameValue);
    clearForm();
    return true;
    
}

function clearForm() {
    /**
        Get name field and reset it's value
     */
     
     const nameField = document.getElementById("name");
     nameField.value = "";
     
    /**
        Remove was-validated from the form
     */
     
     const form = document.getElementById("create-page");
     form.classList.remove("was-validated")
     
}