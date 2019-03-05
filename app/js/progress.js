let form = document.forms["progress-form"];
let valueEl=form["progress-form__value"];
let hideEl = document.getElementById("progress-bar__hide--true");
let showEl = document.getElementById("progress-bar__hide--false");
let animOn  = document.getElementById('progress-bar__animate--on');
let animOff  = document.getElementById('progress-bar__animate--off');
let progressBar = document.getElementById("progress-bar");
let progressBarContainer = progressBar.parentElement;
let toggleBg = document.getElementsByClassName("progress-bar__toggle-bg")[0];
let toggleBg1 = document.getElementsByClassName("progress-bar__toggle-bg")[1];


valueEl.addEventListener("input", function() {
    let value = this.value;
    let val1 = Math.round(942/100 * value);
    let val2 = 942-val1;
    console.log(progressBar);
    let strokeDasharray = progressBar.getAttribute("stroke-dasharray");
    progressBar.setAttribute("stroke-dasharray" , val1+" "+val2);
});


animOn.addEventListener("click", function () {
    if(this.checked==true) {
        progressBarContainer.classList.add("progress__bar--animated");
        toggleBg.classList.add('progress-bar__toggle-bg--coloured');

    }
});
animOff.addEventListener("click", function () {
    if(this.checked==true) {
        progressBarContainer.classList.remove("progress__bar--animated");
        toggleBg.classList.remove('progress-bar__toggle-bg--coloured');

    }
});

hideEl.addEventListener("click", function () {
    if(this.checked==true) {
        progressBar.classList.add('progress__bar--hidden');
        toggleBg1.classList.add('progress-bar__toggle-bg--coloured');
    }
});

showEl.addEventListener("click", function () {
    if(this.checked==true  ) {
        progressBar.classList.remove('progress__bar--hidden');
        toggleBg1.classList.remove('progress-bar__toggle-bg--coloured');

    }
});