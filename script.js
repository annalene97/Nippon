const filterKnapper = document.querySelectorAll(".knap button");
const retter = document.querySelectorAll(".retter-grid .ret");

const filterRetter = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    /* retter.forEach(ret => {
        ret.classList.add("hidden");

        if (ret.dataset.name === e.target.dataset.name || e.target.dataset.name === "alle") {
            ret.classList.remove("hidden");
        }
    }) */

    retter.forEach(ret => {
        ret.classList.add("hidden");

        const filter = ret.dataset.name.split(','); // Split the categories of the recipe into an array

        if (filter.includes(e.target.dataset.name) || e.target.dataset.name === "alle") {
            ret.classList.remove("hidden");
        }
    })
}

filterKnapper.forEach(button => button.addEventListener("click", filterRetter));


/* function filtreretRetter(c){
    var x, i;
    x = document.getElementsByClassName("ret");
    if (c == "all")
}
 */




console.log("hi");
