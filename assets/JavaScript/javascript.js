let clickElementId;
const dayNightModeElement= document.getElementById("dayNightMode");
var imageElement = document.getElementById("profile-image");
var job1 = document.getElementById("firstJob")
var job2 = document.getElementById("secondJob")
var job3 = document.getElementById("thirdJob")
var job4 = document.getElementById("fourthJob")

// Store the original image sources
const originalSources = {
    firstJob: '/assets/images/job1/job1-clear.png',
    secondJob: '/assets/images/job2/job2-clear.png',
    thirdJob: '/assets/images/job3/job3-clear.png',
    fourthJob: '/assets/images/job4/job4-clear.png'
};

const Work = {
    firstJob: "--Horiseon Website--",
    secondJob: "--Coding Quiz--",
    thirdJob: "--Work Day Scheduler--",
    fourthJob: "--Weather Forcast--",
};
const workDescription = {
    firstJob: "This project aims to enhance familiarity with website accessibility standards and provides an opportunity to further hone CSS skills by focusing on the organized structuring of HTML elements with semantic precision.",
    secondJob:"This interactive program is a quiz designed to reinforce proficiency in HTML, CSS, and JavaScript, emphasizing logical reasoning and structural understanding. Upon launching the program, a 'Start Quiz' button initiates a timer set to 75 seconds. For every correct answer, participants earn 5 points, while each incorrect response deducts 5 seconds from the timer. Once all questions are answered or the timer reaches zero, participants are prompted to submit their score and initials. Highscores are stored locally, allowing users to restart the quiz or clear the highscore list at their convenience.",
    thirdJob:"This minimalist Daily Schedule Planner serves as a hands-on exercise in utilizing time.js, dynamically updating HTML, and applying CSS with the support of jQuery. The interface presents the current date prominently and displays a daily schedule from 9 AM to 5 PM. The background color of each time block adapts to the current time—gray for the past, red for the present, and green for the future. Users can click on any time block to input upcoming events, and upon clicking the corresponding save button, the entered text is stored in local storage. This ensures that the schedule remains intact even after refreshing or closing the page. Upon successful saving, a confirmation message is displayed, providing a seamless user experience.",
    fourthJob:"This web application was created as a hands-on exercise in utilizing HTML, CSS, and JavaScript, while also honing skills with the OpenWeatherAPI. The functionality of the app revolves around user searches for city names. When a city name is entered, it undergoes validation through the OpenWeatherAPI. If it's a valid search item, the information is saved to local storage and presented below the search button as a historical search item. Users can click on these past searches to retrieve and display detailed weather information, including the city name, current date, temperature, wind speed, humidity, and a 5-day forecast for the selected city.",
};
const workTools = {
    firstJob: ["HTML","CSS"],
    secondJob: ["HTML","CSS","JavaScript"],
    thirdJob: ["HTML","CSS","JavaScript","Time.js","jQuery"],
    fourthJob:["HTML","CSS","JavaScript","Time.js","OpenWeatherApi"],
}
const workLinks = {
    firstJob: "https://oneuglyghost.github.io/Horiseon-Social-Solution-Information-Website/",
    secondJob: "https://oneuglyghost.github.io/module-4-code-quiz/",
    thirdJob: "https://oneuglyghost.github.io/Schedule-application/",
    fourthJob:"https://oneuglyghost.github.io/Weather-Updates/",
};
//display date at header
document.addEventListener("DOMContentLoaded", function(){
    function updateDate(){
        var currentDateTime = new Date();
        var formattedDateTime = currentDateTime.toLocaleString();

        //add date to element
        document.getElementById("date-display").innerHTML = " - " + formattedDateTime + " - ";
    
    }
   // call the function when page loads
   updateDate();
    
    // Update every second 
    setInterval(updateDate, 1000);
})
// Function to check local storage for mode and set initial mode
function setInitialMode() {
    const mode = localStorage.getItem('mode');
    if (mode === 'light') {
        changeToNightMode();
    } else {
        changeToDayMode();
    }
    // Update images based on the mode
    updateImages();
}
// Call setInitialMode when the page loads
document.addEventListener('DOMContentLoaded', setInitialMode);

let stopAnimation;
// Store the ID of the previously clicked element
let previousClickId = null;


document.addEventListener('click', function (event) {
    // Log the ID of the element being clicked 
    console.log('clicked element ID:', event.target.id);
    clickElementId = event.target.id;

    // Change the image source based on the clicked element
    if (originalSources.hasOwnProperty(clickElementId)) {
        //check local storage
        let mode = localStorage.getItem("mode");
        if (mode === "light"){
            document.getElementById('firstJob').src = './assets/images/job1/job1-LightMode.png';
            document.getElementById('secondJob').src = './assets/images/job2/job2-LightMode.png';
            document.getElementById('thirdJob').src = './assets/images/job3/job3-LightMode.png';    
            document.getElementById('fourthJob').src = './assets/images/job4/job4-LightMode.png';
            
        }else {
            // Reset all images to pixelated
        document.getElementById('firstJob').src = './assets/images/job1/pixel-job1.png';
        document.getElementById('secondJob').src = './assets/images/job2/pixel-job2.png';
        document.getElementById('thirdJob').src = './assets/images/job3/pixel-job3.png';
        document.getElementById('fourthJob').src = './assets/images/job4/pixel-job4.png';
        }

        

        // Set the clicked image to clear
        document.getElementById(clickElementId).src = originalSources[clickElementId];
    }

    // Stop the current animation if there is one
    if (stopAnimation) {
        stopAnimation();
    }

    const workLinkElement = document.getElementById('work-link');

    for (const job in Work) { // loops through work properties
        if (job == clickElementId){  // checks if any property in Work matches the clicked id 
            // adds text to the element with that id
            document.getElementById("work-Tittle").innerHTML = Work[job] ;
        
            if (workDescription[job]) {
                stopAnimation = animateText("work-Description", workDescription[job]);
                document.getElementById("description-tittle").textContent = "Description:"
                document.getElementById("tools-list").textContent = "Skills Used:"
                document.getElementById("about-me-paragraph").classList.remove("typingAnimation");
                document.getElementById("work-Description").classList.add("typingAnimation-Description", "crt");
            } else {
                console.log("no match");
                null
            }

            // Check if there is an existing "work-tools" list
            let workToolsList = document.getElementById("work-tools");
            if (!workToolsList) {
                // If not, create a new "ul" element
                workToolsList = document.createElement("ul");
                workToolsList.id = "work-tools";
                // Append the "ul" element to the parent container
                document.querySelector('div').appendChild(workToolsList);
            }

            // Clear the existing tools in the list
            workToolsList.innerHTML = "";

            // Check if there are tools for the current job
            if (workTools[job].length > 0) {
                // Create list items for each tool and append them to the list
                workTools[job].forEach(tool => {
                    const listItem = document.createElement("li");
                    listItem.textContent = tool;
                    workToolsList.appendChild(listItem);
                });  
            }
            
            workLinkElement.href = workLinks[job];
            // show the "work-link" button
            document.getElementById("work-link").style.display = "block"

            break; // stops the loop if a match is made or when it gets to the end of list
        }
    }
});

function animateText(elementId, text) {
    const element = document.getElementById(elementId);
    element.textContent = ""; // Clear the existing content
    // Split the text into an array of characters
    const characters = text.split("");

    // Use the array to create a sequence of setTimeout functions to simulate typing
    let animation = {
        index: 0,
        timeoutId: null
    };

    function doAnimation() {
        if (animation.index < characters.length) {
            element.textContent += characters[animation.index++];
            animation.timeoutId = setTimeout(doAnimation, 50); // Adjust the speed of typing (milliseconds)
        }
    }

    doAnimation();

    // Return a function to stop the animation
    return function() {
        clearTimeout(animation.timeoutId);
    };
}


// nav folder animation
$(document).ready(function () {
    $("#nav-folder").on("click", ":not(.last-element)", function () {
        
        $("#nav-box").css("left", "50%");
        
    });
});

function closeBox() {
    $("#nav-box").css("left", "-50%");
    
}

//show the name of the menu i clicked on in the new menu window
function updateMenuTitle(clickedElement){
    //get text inside span
    var menuText= clickedElement.querySelector("span").textContent;

    document.getElementById("menuTitle").textContent= menuText;
}

// adding a day night mode 
function changeToDayMode() {
    // Change CSS variables
    document.documentElement.style.setProperty('--border-color', '#056502');
    document.documentElement.style.setProperty('--green', '#08a702');
    document.documentElement.style.setProperty('--green-selected', '#0cfc03');
    document.documentElement.style.setProperty('--background', '#254434');
    document.documentElement.style.setProperty('--white', '#fff');
    document.documentElement.style.setProperty("--myRadialGradient","radial-gradient(circle, #12221a, #000000")
    
    //remove old day class
    dayNightModeElement.classList.remove("fa-solid", "fa-sun");

    //add new night class
    dayNightModeElement.classList.add("fa-solid", "fa-moon")

}

function changeToNightMode() {
    // Change CSS variables
    document.documentElement.style.setProperty('--border-color', '#8c521b');
    document.documentElement.style.setProperty('--green', '#f18d2d');
    document.documentElement.style.setProperty('--green-selected', '#ffae00');
    document.documentElement.style.setProperty('--background', '#543110');
    document.documentElement.style.setProperty('--white', '#000000');
    document.documentElement.style.setProperty("--myRadialGradient","radial-gradient(circle, #432e01, #000000")

     //remove old day class
   dayNightModeElement.classList.remove("fa-solid", "fa-moon");

   //add new night class
   dayNightModeElement.classList.add("fa-solid", "fa-sun")
    
    
}
function dayNightText() {
    var dayNightText = document.getElementById("lightDarkText");
    
    if (dayNightText.innerHTML === "Dark Mode") {
        dayNightText.innerHTML = "Light Mode";
    } else {
        dayNightText.innerHTML = "Dark Mode";
    }
    // Add additional code here for toggling other aspects of day/night mode
}


// Function to toggle day/night mode and update local storage
function toggleDayNight() {
    // Toggle day/night mode
    if (dayNightModeElement.classList.contains('fa-solid') && dayNightModeElement.classList.contains('fa-moon')) {
        changeToNightMode();
        localStorage.setItem('mode', 'light');
    } else {
        changeToDayMode();
        localStorage.setItem('mode', 'dark');
    }

    // Update images based on the mode
    updateImages();
}

// Function to update images based on the current mode
function updateImages() {
    const mode = localStorage.getItem('mode');
    if (mode === 'light') {
        // Change images to light mode
        imageElement.src = './assets/images/profile/terminal-effect-lightMode.png';
        imageElement.alt = 'light mode profile pic';
        job1.src = './assets/images/job1/job1-LightMode.png';
        job1.alt = 'job1 pic light mode';
        job2.src = './assets/images/job2/job2-LightMode.png';
        job2.alt = 'job2 pic light mode';
        job3.src = './assets/images/job3/job3-LightMode.png';
        job3.alt = 'job3 pic light mode';
        job4.src = './assets/images/job4/job4-LightMode.png';
        job4.alt = 'job4 pic light mode';
    } else {
        // Change images to dark mode
        imageElement.src = './assets/images/profile/profile-terminal-look.png';
        imageElement.alt = 'Dark mode profile pic';
        job1.src = '././assets/images/job1/pixel-job1.png';
        job1.alt = 'job1 pic';
        job2.src = './assets/images/job2/pixel-job2.png';
        job2.alt = 'job2 pic';
        job3.src = './assets/images/job3/pixel-job3.png';
        job3.alt = 'job3 pic';
        job4.src = './assets/images/job4/pixel-job4.png';
        job4.alt = 'job4 pic';
    }
}