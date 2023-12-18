let clickElementId;


const Work = {
    firstJob: "Horiseon Website",
    secondJob: "",
    thirdJob: "",
};
const workDescription = {
    firstJob: "snadksjnkdnaknskdn",
    secondJob:"",
    thirdJob:"",
};

// gets the id from element that i click on 
document.addEventListener('click', function (event) {
    // Log the ID of the element being clicked 
    console.log('clicked element ID:', event.target.id);
    clickElementId = event.target.id;

    for (const job in Work) { // loops through work properties

        if (job == clickElementId){  // checks if any property in Work matches the clicked id 
            // adds text to the element with that id
            document.getElementById("work-Tittle").textContent = Work[job];
        
            if (workDescription[job]) {
                document.getElementById("work-Description").textContent = workDescription[job];
            } else {
                console.log("no match");
                null
            }  

            break; // stops the loop if a match is made or when it gets to the end of list
        }
    }
});
 
