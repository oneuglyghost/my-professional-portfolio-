let clickElementId;
let selectedJobDescription;

const Work = {
    firstJob: "Horiseon Website was built using <br> HTML/CSS",
    secondJob: "https://oneuglyghost.github.io/Horiseon-Social-Solution-Information-Website/",
    thirdJob: "description",
};

// gets the id from element that i click on 
document.addEventListener('click', function (event) {
    // Log the ID of the element being clicked 
    console.log('clicked element ID:', event.target.id);
    clickElementId = event.target.id;

    for (const job in Work) { // loops through work properties

        if (job == clickElementId){  // checks if any property matches the clicked id 
            console.log("it works", Work[job]);

            selectedJobDescription = Work[job];

            document.getElementById("work-Description").textContent = selectedJobDescription;
            break; // stops the loop if a match is made or when it gets to the end of list 
        } else {
            console.log("no match");
            null
        }
    }
});

