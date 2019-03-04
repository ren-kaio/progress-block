let form = document.forms["progress-form"];
let valueEl=form["progress-form__value"];
let hideEl = document.getElementById("progress-bar__hide--true");
let showEl = document.getElementById("progress-bar__hide--false");

valueEl.addEventListener("input", function() {
    let value = this.value;
    let val1 = Math.round(942/100 * value);
    let val2 = 942-val1;
    let progressBar = document.getElementById("progress-bar");
    console.log(progressBar);
    let strokeDasharray = progressBar.getAttribute("stroke-dasharray");
    progressBar.setAttribute("stroke-dasharray" , val1+" "+val2);
});

hideEl.addEventListener("click", function () {
    let progressBar = document.getElementById("progress-bar");
    if((this.checked==true) && (!progressBar.classList.contains('progress__bar--hidden'))) {
        progressBar.classList.add('progress__bar--hidden');
    }
});

showEl.addEventListener("click", function () {
    let progressBar = document.getElementById("progress-bar");
    if(this.checked==true && progressBar.classList.contains('progress__bar--hidden') ) {
        progressBar.classList.remove('progress__bar--hidden')
    }
});

