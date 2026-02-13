/* Random webpage events */
let outcome = Math.floor(100*Math.random() + 1);

if(outcome <= 10) {
    const infoList = document.getElementsByClassName("info-list")[0];
    infoList.innerHTML += `
        <li>Alias: me!!!</li>
    `;
}

if(outcome == 1) {
    const hobbyList = document.getElementsByClassName("hobby-list")[0];
    hobbyList.innerHTML = `
        <li>Programming</li>
        <li>Listening to music</li>
    `;
} 

// console.log(outcome);

/* Randomized rickroll */
const yesButton = document.getElementsByClassName("yes")[0];
const noButton = document.getElementsByClassName("no")[0];

let countYes = 0;
yesButton.addEventListener("click", () => {
    countYes++;
    if(countYes == 1) {
        return;
    }

    outcome = Math.floor(5*Math.random() + 1);
    if(outcome == 1) {
        yesButton.innerHTML = `
            <a href="https://youtu.be/QDia3e12czc">Yes</a>
        `;
    }
});


/* True ending */
let countNo = 0;
noButton.addEventListener("click", () => {
    countNo++;

    if(countNo >= 2) {
        const questionDiv = document.getElementsByClassName("final-question")[0];
        questionDiv.innerHTML = `
            <div class="question">I knew this would be the outcome. But it still hurts</div>
            <div class="spongebob"><img src="spongebob.jpeg" alt="emotional image" height="300"></div>
        `;
    }
    else {
        noButton.textContent = "Still no";
        alert("Please think about it");
    }

    // console.log(count);

});
