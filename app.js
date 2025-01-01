var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var educationInput = document.getElementById("education");
var skillsInput = document.getElementById("skills");
var photoInput = document.getElementById("photo");
var previewName = document.getElementById("preview-name");
var previewEmail = document.getElementById("preview-email");
var previewEducation = document.getElementById("preview-education");
var previewSkills = document.getElementById("preview-skills");
var previewPhoto = document.getElementById("preview-photo");
// Function to update the resume preview dynamically
function updatePreview() {
    if (nameInput && previewName) {
        previewName.textContent = "Name: ".concat(nameInput.value);
    }
    if (emailInput && previewEmail) {
        previewEmail.textContent = "Email: ".concat(emailInput.value);
    }
    if (educationInput && previewEducation) {
        previewEducation.textContent = "Education: ".concat(educationInput.value);
    }
    if (skillsInput && previewSkills) {
        previewSkills.textContent = "Skills: ".concat(skillsInput.value
            .split(",")
            .map(function (skill) { return skill.trim(); })
            .join(", "));
    }
}
// Function to handle the profile picture upload
function updatePhoto(event) {
    var _a, _b;
    var file = (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];
    if (file && previewPhoto) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if (((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) && previewPhoto) {
                previewPhoto.src = e.target.result;
                previewPhoto.style.display = "block"; // Show the image
            }
        };
        reader.readAsDataURL(file);
    }
    else if (previewPhoto) {
        previewPhoto.style.display = "none"; // Hide the image if no file is selected
    }
}
// Add event listeners to form inputs if they exist
nameInput === null || nameInput === void 0 ? void 0 : nameInput.addEventListener("input", updatePreview);
emailInput === null || emailInput === void 0 ? void 0 : emailInput.addEventListener("input", updatePreview);
educationInput === null || educationInput === void 0 ? void 0 : educationInput.addEventListener("input", updatePreview);
skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.addEventListener("input", updatePreview);
photoInput === null || photoInput === void 0 ? void 0 : photoInput.addEventListener("change", updatePhoto);
// Initialize the preview with default empty values
updatePreview();
