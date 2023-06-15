// Your solution goes here
// Hints:
// 1. Assign a id to the tags you want to select
// 2. Use appropriate methods and properties to complete the specified task.
// Example: 
// (style) property to change style
// (classList) property to modify class
// (getAttribute) and (setAttribute) to modify attributes

//Change background,image
let imageBackground= document.getElementById("iits-bg");
imageBackground.classList.remove("bg-danger")
imageBackground.style.backgroundColor = "green";

let img= document.getElementById("iits-img");
img.src="https://gracefulstory.com/wp-content/uploads/2019/07/82152160-1200x700.jpg";

let msg= document.getElementById("iits-cr-msg");
msg.innerHTML="~(Do not copy)~";

 //change button colour
let buttonColour= document.getElementById("iits-btn");
buttonColour.classList.remove("btn-danger");
buttonColour.style.backgroundColor = "green";

//change all spans
let myName= document.getElementById("iits-name");
myName.classList.remove("text-danger");
myName.innerHTML="Ayesha Siddiqua";
myName.style.color="green";

let myProf= document.getElementById("iits-prof");
myProf.classList.remove("text-danger");
myProf.innerHTML="student";
myProf.style.color="green";

let myLevel= document.getElementById("iits-edu");
myLevel.classList.remove("text-danger");
myLevel.innerHTML="engineering";
myLevel.style.color="green";

let myField= document.getElementById("iits-study");
myField.classList.remove("text-danger");
myField.innerHTML="Computer SCience";
myField.style.color="green";

let mySchool= document.getElementById("iits-school");
mySchool.classList.remove("text-danger");
mySchool.innerHTML="IUBAT";
mySchool.style.color="green";

let myPassion= document.getElementById("iits-passion");
myPassion.classList.remove("text-danger");
myPassion.innerHTML="problem solving";
myPassion.style.color="green";

let years= document.getElementById("iits-numYears");
years.classList.remove("text-danger");
years.innerHTML="one year";
years.style.color="green";

let hobby= document.getElementById("iits-hobby");
hobby.classList.remove("text-danger");
hobby.innerHTML="coding";
hobby.style.color="green";

let myTraits= document.getElementById("iits-crc");
myTraits.classList.remove("text-danger");
myTraits.innerHTML="slow learner";
myTraits.style.color="green";

let myAbility= document.getElementById("iits-ability");
myAbility.classList.remove("text-danger");
myAbility.innerHTML="learn effictively";
myAbility.style.color="green";

let myGoal= document.getElementById("iits-goal");
myGoal.classList.remove("text-danger");
myGoal.innerHTML="be an entrepreneur";
myGoal.style.color="green";

//social media links
let fbLink= document.getElementById("iits-fb-link");
fbLink.href="https://www.facebook.com/ayeshasiddiqua.64";

let mailLink= document.getElementById("iits-email");
mailLink.href="mailto:ayeshasiddiqua.iubat@gmail.com";

let githubLink= document.getElementById("iits-github-link");
githubLink.href="https://github.com/ayeshan21";