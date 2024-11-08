// Get refernce to the foam & display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;


// Handle foam submission
form.addEventListener('submit',(event: Event)=> {
    event.preventDefault();//Prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const contact = (document.getElementById('contact') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //generate the resume content dynamically
    const resumeHTML =`
    <h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>name:</b>${name}</p>
<p><b>email:</b>${email}</p>
<p><b>contact:</b>${contact}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
    `;
//Display the generated resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML=resumeHTML;
}else  {
    console.error('The resume display element is missing')
}
}) ;