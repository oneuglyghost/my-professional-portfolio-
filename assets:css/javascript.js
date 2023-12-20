let clickElementId;


const Work = {
    firstJob: "--Horiseon Website--",
    secondJob: "--Coding Quiz--",
    thirdJob: "--Work Day Scheduler--",
};
const workDescription = {
    firstJob: "This project aims to enhance familiarity with website accessibility standards and provides an opportunity to further hone CSS skills by focusing on the organized structuring of HTML elements with semantic precision.",
    secondJob:"This interactive program is a quiz designed to reinforce proficiency in HTML, CSS, and JavaScript, emphasizing logical reasoning and structural understanding. Upon launching the program, a 'Start Quiz' button initiates a timer set to 75 seconds. For every correct answer, participants earn 5 points, while each incorrect response deducts 5 seconds from the timer. Once all questions are answered or the timer reaches zero, participants are prompted to submit their score and initials. Highscores are stored locally, allowing users to restart the quiz or clear the highscore list at their convenience.",
    thirdJob:"This minimalist Daily Schedule Planner serves as a hands-on exercise in utilizing time.js, dynamically updating HTML, and applying CSS with the support of jQuery. The interface presents the current date prominently and displays a daily schedule from 9 AM to 5 PM. The background color of each time block adapts to the current time—gray for the past, red for the present, and green for the future. Users can click on any time block to input upcoming events, and upon clicking the corresponding save button, the entered text is stored in local storage. This ensures that the schedule remains intact even after refreshing or closing the page. Upon successful saving, a confirmation message is displayed, providing a seamless user experience.",
};
const workTools = {
    firstJob: ["HTML","CSS"],
    secondJob: ["HTML","CSS","JavaScript"],
    thirdJob: ["HTML","CSS","JavaScript","Time.js","jQuery"],
}
const workLinks = {
    firstJob: "https://oneuglyghost.github.io/Horiseon-Social-Solution-Information-Website/",
    secondJob: "https://oneuglyghost.github.io/module-4-code-quiz/",
    thirdJob: "https://oneuglyghost.github.io/Schedule-application/",
};

// gets the id from element that i click on 
document.addEventListener('click', function (event) {
    // Log the ID of the element being clicked 
    console.log('clicked element ID:', event.target.id);
    clickElementId = event.target.id;
    
    const workLinkElement = document.getElementById('work-link');
    
    for (const job in Work) { // loops through work properties

        if (job == clickElementId){  // checks if any property in Work matches the clicked id 
            // adds text to the element with that id
            document.getElementById("work-Tittle").innerHTML = Work[job] ;
        
            if (workDescription[job]) {
                animateText("work-Description", workDescription[job]);
                document.getElementById("description-tittle").textContent = "Description:"
                document.getElementById("tools-list").textContent = "Skills Used:"
                document.getElementById("about-me-paragraph").classList.remove("typingAnimation");
                document.getElementById("work-Description").classList.add("typingAnimation-Description");
                
                
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
    characters.forEach((char, index) => {
        setTimeout(() => {
            element.textContent += char;

        }, 50 * index); // Adjust the speed of typing (milliseconds)
    });
}


