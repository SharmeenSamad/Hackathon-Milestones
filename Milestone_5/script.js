// Get refernce to the foam & display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadpdfButton = document.getElementById('download-pdf');
// Handle foam submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //Prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); //saving the data locally.
    //generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>contact:</b><span contenteditable=\"true\">").concat(contact, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    //Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// handle PDF download
downloadpdfButton.addEventListener('click', function () {
    window.print(); //This will open the print dialog and allow the user to save as pdf
});
// prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        //Autofill form if the data is found in local Storage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('contact').value = resumeData.contact;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
