let clickElementId;


const Work = {
    firstJob: "--Horiseon Website--",
    secondJob: "",
    thirdJob: "",
};
const workDescription = {
    firstJob: "This project aims to enhance familiarity with website accessibility standards and provides an opportunity to further hone CSS skills by focusing on the organized structuring of HTML elements with semantic precision.",
    secondJob:"",
    thirdJob:"",
};
const workTools = {
    firstJob: ["HTML","CSS"],
    secondJob:"",
    thirdJob:"",
}
const workLinks = {
    firstJob: "https://oneuglyghost.github.io/Horiseon-Social-Solution-Information-Website/",
    secondJob: "https://example.com/another-job",
    thirdJob: "https://example.com/yet-another-job",
};

// gets the id from element that i click on 
document.addEventListener('click', function (event) {
    // Log the ID of the element being clicked 
    console.log('clicked element ID:', event.target.id);
    clickElementId = event.target.id;

    for (const job in Work) { // loops through work properties

        if (job == clickElementId){  // checks if any property in Work matches the clicked id 
            // adds text to the element with that id
            document.getElementById("work-Tittle").innerHTML = '<mark>' + Work[job] + '</mark>';
        
            if (workDescription[job]) {
                animateText("work-Description", workDescription[job]);
                document.getElementById("description-tittle").textContent = "Description:"
                document.getElementById("tools-list").textContent = "Skills Used:"
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
 
