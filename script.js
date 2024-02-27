// Bestil animation
document.addEventListener("DOMContentLoaded", function() {
    const buttonElement = document.getElementById("spell-button");
    const buttonText = buttonElement.innerText;

    function spellButtonText() {
        let index = 0;

        function animateText() {
            buttonElement.innerText = buttonText.substring(0, index);

            index++;

            if (index <= buttonText.length) {
                setTimeout(animateText, 300);
            } else {
                
                index = 0;
                setTimeout(animateText, 1000); 
            }
        }

        // Starter spelling efter delay på 1000ms
        setTimeout(animateText, 1000);
    }

    spellButtonText(); // Starter spelling animation
});

// VALG AF MÅLTIDSKASSE 




// FILTRERINGSKNAPPER
const filterKnapper = document.querySelectorAll(".knap button");
const retter = document.querySelectorAll(".retter-grid .ret");

const filterRetter = e => {
    document.querySelector(".active").classList.remove("active"); //Active classen slettes eller tilføjes knapperne.
    e.target.classList.add("active");

    retter.forEach(ret => { //Retterne skjules, hvis ikke de indeholder den respektive kategori, der er aktiv.
        ret.classList.add("hidden");

        const filter = ret.dataset.name.split(','); // Splitter kategorierne i'data-name' i en array, hvis der optræder et komma.

        if (filter.includes(e.target.dataset.name) || e.target.dataset.name === "alle") {
            ret.classList.remove("hidden");
        }
    })
}

filterKnapper.forEach(button => button.addEventListener("click", filterRetter)); 

// TILFØJELSE AF RET
document.querySelectorAll('.tilfojret').forEach(item => {
    const fjernKnap = item.querySelector('.fjern');
    const tilfojKnap = item.querySelector('.tilfoj');
    const display = item.querySelector('.antalretter');

    let count = 0;

    fjernKnap.addEventListener('click', () => {
        count = Math.max(0, count - 1); // Tælleren kan ikke gå under 0
        display.textContent = count;
    });

    tilfojKnap.addEventListener('click', () => {
        count++;
        display.textContent = count;
    });
});


// TILFØJ TIL FAVORIT
