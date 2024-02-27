const filterKnapper = document.querySelectorAll(".knap button");
const retter = document.querySelectorAll(".retter-grid .ret");

const filterRetter = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    retter.forEach(ret => {
        ret.classList.add("hidden");

        const filter = ret.dataset.name.split(','); // Splitter kategorierne i'data-name' i en array, hvis der optræder et komma

        if (filter.includes(e.target.dataset.name) || e.target.dataset.name === "alle") {
            ret.classList.remove("hidden");
        }
    })
}

filterKnapper.forEach(button => button.addEventListener("click", filterRetter));




console.log("hi");
