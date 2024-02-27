// VALG AF MÅLTIDSKASSE - fra chatGPT --- fungerer ikke helt
// Select all 'cirkel' elements
const cirklerPersoner = document.querySelectorAll('.vaelg-personer .cirkel');
const cirklerRetter = document.querySelectorAll('.vaelg-retter .cirkel');
const prisPortion = document.getElementById('pris-portion');
const prisIAlt = document.getElementById('pris-i-alt');

// Function to update price based on selected options
function updatePrice() {
    const antalPersoner = document.querySelector('.vaelg-personer .cirkel.selected').getAttribute('data-personer');
    const antalRetter = document.querySelector('.vaelg-retter .cirkel.selected').getAttribute('data-retter');
    const prisPerPortion = 39; // Example price per portion

    prisPortion.textContent = (prisPerPortion).toFixed(2) + ' kr.';
    prisIAlt.textContent = (prisPerPortion * antalPersoner * antalRetter).toFixed(2) + ' kr.';
}

// Add event listeners to cirkler elements in vaelg-personer div
cirklerPersoner.forEach(cirkel => {
    cirkel.addEventListener('click', function() {
        cirklerPersoner.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        updatePrice();
    });
});

// Add event listeners to cirkler elements in vaelg-retter div
cirklerRetter.forEach(cirkel => {
    cirkel.addEventListener('click', function() {
        cirklerRetter.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        updatePrice();
    });
});

// Initial price update
updatePrice();



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

//
