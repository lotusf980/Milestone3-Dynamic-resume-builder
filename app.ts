namespace ResumeBuilder {
const nameInput = document.getElementById("name") as HTMLInputElement | null;
const emailInput = document.getElementById("email") as HTMLInputElement | null;
const educationInput = document.getElementById("education") as HTMLTextAreaElement | null;
const skillsInput = document.getElementById("skills") as HTMLInputElement | null;
const photoInput = document.getElementById("photo") as HTMLInputElement | null;

const previewName = document.getElementById("preview-name") as HTMLElement | null;
const previewEmail = document.getElementById("preview-email") as HTMLElement | null;
const previewEducation = document.getElementById("preview-education") as HTMLElement | null;
const previewSkills = document.getElementById("preview-skills") as HTMLElement | null;
const previewPhoto = document.getElementById("preview-photo") as HTMLImageElement | null;

// Function to update the resume preview dynamically
function Preview(): void {
    if (nameInput && previewName) {
        previewName.textContent = `Name: ${nameInput.value}`;
    }
    if (emailInput && previewEmail) {
        previewEmail.textContent = `Email: ${emailInput.value}`;
    }
    if (educationInput && previewEducation) {
        previewEducation.textContent = `Education: ${educationInput.value}`;
    }
    if (skillsInput && previewSkills) {
        previewSkills.textContent = `Skills: ${skillsInput.value
            .split(",")
            .map((skill) => skill.trim())
            .join(", ")}`;
    }
}

// Function to handle the profile picture upload
function Photo(event: Event): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file && previewPhoto) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target?.result && previewPhoto) {
                previewPhoto.src = e.target.result as string;
                previewPhoto.style.display = "block"; // Show the image
            }
        };
        reader.readAsDataURL(file);
    } else if (previewPhoto) {
        previewPhoto.style.display = "none"; // Hide the image if no file is selected
    }
}

// Add event listeners to form inputs if they exist
nameInput?.addEventListener("input", updatePreview);
emailInput?.addEventListener("input", updatePreview);
educationInput?.addEventListener("input", updatePreview);
skillsInput?.addEventListener("input", updatePreview);
photoInput?.addEventListener("change", updatePhoto);

// Initialize the preview with default empty values
updatePreview();
}
