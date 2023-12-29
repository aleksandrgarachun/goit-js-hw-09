const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const input = document.querySelector(".form-input");
const textarea = document.querySelector(".form-textarea");

form.addEventListener("submit", onFormSubmit);
input.addEventListener("input", onInputWriteDown);
textarea.addEventListener("input", onTextareaInput);

updateFormData();


function onFormSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();

}

function onInputWriteDown(event) {
    const email = event.target.value;
    saveFormData ({email});

}

function onTextareaInput(event) {
    const message = event.target.value;
    saveFormData ({message});
} 

function saveFormData(event) {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    const updateFormData = {...savedMessage, ...event};
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updateFormData));

}

function updateFormData(event) {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    input.value = savedMessage.email || "";
    textarea.value = savedMessage.message || "";

}


