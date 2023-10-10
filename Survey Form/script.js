document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("surveyForm");
    const popup = document.getElementById("popup");
    const popupResults = document.getElementById("popupResults");
    const resetBtn = document.getElementById("resetBtn");

    surveyForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Collect form data
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;

        const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
        const genderArray = Array.from(genderCheckboxes).map(checkbox => checkbox.value).join(', ');

        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        // Display form data in popup
        let popupContent = "<h3>Survey Form Submission:</h3><ul>";
        popupContent += `<li><strong>First Name:</strong> ${firstName}</li>`;
        popupContent += `<li><strong>Last Name:</strong> ${lastName}</li>`;
        popupContent += `<li><strong>Date of Birth:</strong> ${dob}</li>`;
        popupContent += `<li><strong>Country:</strong> ${country}</li>`;
        popupContent += `<li><strong>Gender:</strong> ${genderArray}</li>`;
        popupContent += `<li><strong>Profession:</strong> ${profession}</li>`;
        popupContent += `<li><strong>Email:</strong> ${email}</li>`;
        popupContent += `<li><strong>Mobile Number:</strong> ${mobile}</li>`;
        popupContent += "</ul>";
        popupResults.innerHTML = popupContent;

        // Show popup
        popup.style.display = "block";
    });

    resetBtn.addEventListener("click", function () {
        // Reset form and hide popup
        surveyForm.reset();
        popup.style.display = "none";
    });

    // Close popup when clicking the "x" button
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close popup when clicking outside of it
    window.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});
