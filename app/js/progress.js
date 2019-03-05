let form = document.forms["progress-form"];
let valueEl=form["progress-form__value"];
let hideEl = document.getElementById("progress-bar__hide--true");
let showEl = document.getElementById("progress-bar__hide--false");
let animOn  = document.getElementById('progress-bar__animate--on');
let animOff  = document.getElementById('progress-bar__animate--off');
let progressBar = document.getElementById("progress-bar");
let progressBarContainer = progressBar.parentElement;

valueEl.addEventListener("input", function() {
    let value = this.value;
    let val1 = Math.round(942/100 * value);
    let val2 = 942-val1;
    console.log(progressBar);
    let strokeDasharray = progressBar.getAttribute("stroke-dasharray");
    progressBar.setAttribute("stroke-dasharray" , val1+" "+val2);
});

hideEl.addEventListener("click", function () {
    if((this.checked==true) && (!progressBar.classList.contains('progress__bar--hidden'))) {
        progressBar.classList.add('progress__bar--hidden');
    }
});

showEl.addEventListener("click", function () {
    if(this.checked==true && progressBar.classList.contains('progress__bar--hidden') ) {
        progressBar.classList.remove('progress__bar--hidden')
    }
});

animOn.addEventListener("click", function () {
    if(this.checked==true) {
        progressBarContainer.classList.add("progress__bar--animated");
    }
});
animOff.addEventListener("click", function () {
    if(this.checked==true) {
        progressBarContainer.classList.remove("progress__bar--animated");
    }
});
