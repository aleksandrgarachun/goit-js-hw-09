const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", onInputOrTextarea);


updateFormData();

function onFormSubmit(event) {
    event.preventDefault();

    const formData = {
        email: form.querySelector(".form-input").value.trim(),
        message: form.querySelector(".form-textarea").value.trim(),
    };
    
    if(!formData.email || !formData.message) {
        alert("Fill in all fields of the form");
        return;
    }

    saveFormData(formData);
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();

}



function onInputOrTextarea(event) {
    const nameValue = event.target.name;
    const inputValue = event.target.value.trim();

    saveFormData({ [nameValue]: inputValue});
}


function saveFormData(data) {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    const updateFormData = {...savedMessage, ...data};
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updateFormData));

}


function updateFormData() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    form.querySelector(".form-input").value = savedData.email || "";
    form.querySelector(".form-textarea").value = savedData.message || "";
}

