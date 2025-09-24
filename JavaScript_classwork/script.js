const About = document.getElementById("about")
const contact = document.getElementById("contacts")
const skill = document.getElementById("skill")
const about_ouput = document.getElementById("about-output")
const contact_ouput = document.getElementById("contact-output")
const skill_ouput = document.getElementById("skill-output")


About.onclick = function () {
    about_ouput.style.display = "block"
    contact_ouput.style.display = "none"
    skill_ouput.style.display = "none"
}

contact.onclick = function () {
    contact_ouput.style.display = "block"
    about_ouput.style.display = "none"
    skill_ouput.style.display = "none"
}

skill.onclick = function () {
    contact_ouput.style.display = "none"
    about_ouput.style.display = "none"
    skill_ouput.style.display = "block"
}