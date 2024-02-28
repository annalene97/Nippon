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
const cirklerPersoner = document.querySelectorAll('.vaelg-personer .cirkel');
const cirklerRetter = document.querySelectorAll('.vaelg-retter .cirkel');
const prisPortion = document.getElementById('pris-portion');
const prisIAlt = document.getElementById('pris-i-alt');

// Function to update price per portion and total price based on selected options
function updatePrices() {
    // Get the selected number of persons and meals
    const selectedPersoner = parseInt(document.querySelector('.vaelg-personer .cirkel.selected').textContent);
    const selectedRetter = parseInt(document.querySelector('.vaelg-retter .cirkel.selected').textContent);

    // Calculate the base price per portion
    let basePrice = selectedRetter === 1 ? 41 : selectedRetter === 2 ? 41 : 41 - (selectedRetter - 2) * 2;

    // Adjust the base price based on the number of persons
    let prisPerPortion;
    switch (selectedPersoner) {
        case 1:
            prisPerPortion = basePrice;
            break;
        case 2:
            prisPerPortion = basePrice - 1;
            break;
        case 3:
            prisPerPortion = basePrice - 2;
            break;
        case 4:
            prisPerPortion = basePrice - 3;
            break;
        default:
            prisPerPortion = basePrice;
    }

    // Update the displayed price per portion
    prisPortion.textContent = prisPerPortion.toFixed(2) + ' kr.';

    // Calculate and update the total price
    const totalPris = selectedPersoner * selectedRetter * prisPerPortion;
    prisIAlt.textContent = totalPris.toFixed(2) + ' kr.';
}

// Add event listeners to cirkler elements in vaelg-personer div
cirklerPersoner.forEach(cirkel => {
    cirkel.addEventListener('click', function() {
        cirklerPersoner.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        updatePrices();
    });
});

// Add event listeners to cirkler elements in vaelg-retter div
cirklerRetter.forEach(cirkel => {
    cirkel.addEventListener('click', function() {
        cirklerRetter.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        updatePrices();
    });
});

// Initial price update
updatePrices();





// FILTRERINGSKNAPPER
const filterKnapper = document.querySelectorAll(".knap button");
const retter = document.querySelectorAll(".retter-grid .ret");

const filterRetter = e => {
    document.querySelector(".active").classList.remove("active"); //Active-classen slettes eller tilføjes til knapperne.
    e.target.classList.add("active");

    retter.forEach(ret => { //Retterne skjules, hvis ikke de indeholder den respektive kategori, der er aktiv.
        ret.classList.add("hidden");

        const filter = ret.dataset.name.split(','); // Splitter kategorierne i 'data-name' i en array, hvis der optræder et komma.

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
const favorit = document.querySelectorAll('.favorit i.fa-heart');

favorit.forEach(hjerte => {
    hjerte.addEventListener('click', function() {
        this.classList.toggle('favorited');
    });

}); 
