/* -- Uitwerkingen vraag 1 -- */

const featured = document.getElementById('featured');
const subtitle = document.getElementById('subtitle');

featured.addEventListener('mouseover', showSubtitle);
featured.addEventListener('mouseleave', hideSubtitle);

function showSubtitle() {
    subtitle.classList.add('visible');
}

function hideSubtitle() {
    subtitle.classList.remove('visible');
}

/* -- Uitwerkingen vraag 2 -- */

const 

window.setInterval(function () {
    
}, 1000) // 1000ms = 1s

/* -- Uitwerkingen vraag 3 -- */

// TODO : met queryselector inner html veranderen van die zinnen die hetzelfde zijn voor poll/resultaat?

const form  = document.getElementById('coronaPoll');

form.addEventListener('submit', (event) => {
    // handle the form data
    event.preventDefault();
    saveChoice('illegal-qr');
    saveChoice('no-corona');
    saveChoice('max-750-people');
    showResults();
});

function saveChoice(choice) {
    if (form.elements[choice].checked) {
        if (parseInt(localStorage.getItem(choice))) {
            localStorage.setItem(choice, parseInt(localStorage.getItem(choice)) + 1);
        } else {
            localStorage.setItem(choice, 1);
        }
    }
}

function showResults() {
    let resultIllegalQR = document.getElementById('result-illegal-qr');
    let resultNoCorona = document.getElementById('result-no-corona');
    let resultMax750People = document.getElementById('result-max-750-people');

    resultIllegalQR.innerHTML = localStorage.getItem('illegal-qr');
    resultNoCorona.innerHTML = localStorage.getItem('no-corona');
    resultMax750People.innerHTML = localStorage.getItem('max-750-people');

    console.log('illegal-qr: ', localStorage.getItem('illegal-qr'));
    console.log('no-corona: ', localStorage.getItem('no-corona'));
    console.log('max-750-people: ', localStorage.getItem('max-750-people'));

    toggleDisplayPollResults();
}

function toggleDisplayPollResults() {
    let pollQuestions = document.getElementById('poll-questions');
    let pollResults = document.getElementById('poll-results');

    if (pollQuestions.style.display == 'none') {
        pollQuestions.style.display = 'block';
        pollResults.style.display = 'none';
    } else {
        pollQuestions.style.display = 'none';
        pollResults.style.display = 'block';
    }
}
