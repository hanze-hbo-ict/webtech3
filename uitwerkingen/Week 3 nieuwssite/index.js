/* -- Uitwerkingen vraag 1 -- */

const today = new Date();

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const todayString = today.toLocaleDateString('nl-NL', options);

document.getElementById('date-today').innerHTML = todayString;
// Meer info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString



/* -- Uitwerkingen vraag 2a -- */

currentArticleNumber = 0;
const featuredArticles = document.getElementsByClassName('featured');

window.setInterval(changeFeaturedArticle, 5000) // 5 seconden

function changeFeaturedArticle() {
    currentArticleNumber += 1;
    if (currentArticleNumber >= featuredArticles.length) {
        currentArticleNumber = 0;
    }
    for (var i = 0; i < featuredArticles.length; i ++) {
        featuredArticles[i].style.display = 'none';
    }
    featuredArticles[currentArticleNumber].style.display = 'block';
}
// Meer info: https://www.w3schools.com/js/js_timing.asp


/* -- Uitwerkingen vraag 2b -- */

window.setTimeout(showSubscriptionPopUp, 5000) // 5 seconden

const subscriptionPopUp = document.getElementById('subscription-pop-up');

function showSubscriptionPopUp() {
    subscriptionPopUp.style.display = 'block';
    preventScroll();
}

document.getElementById('reject-subscription').addEventListener('click', hideSubscriptionPopUp);

function hideSubscriptionPopUp() {
    subscriptionPopUp.style.display = 'none';
    enableScroll();
}



/* -- Uitwerkingen vraag 3a -- */

const featured = document.getElementsByClassName('featured');

for (var i = 0; i < featured.length; i++) {
    featured[i].addEventListener('mouseover', showSubtitle);
    featured[i].addEventListener('mouseleave', hideSubtitle);
}

function showSubtitle() {
    this.getElementsByClassName('article-title')[0].getElementsByTagName('p')[0].classList.add('visible');
} // this is nodig omdat het om een bepaald featured element gaat van de collectie featured articles

function hideSubtitle() {
    this.getElementsByClassName('article-title')[0].getElementsByTagName('p')[0].classList.remove('visible');
}



/* -- Uitwerkingen vraag 3b -- */

const cookiesPopUp = document.getElementById('cookies-pop-up');

window.addEventListener('scroll', showCookiesPopUp);
document.getElementById('accept-cookies').addEventListener('click', acceptCookies);

function showCookiesPopUp() {
    cookiesPopUp.style.display = 'block';
    preventScroll();
}

function acceptCookies() {
    window.removeEventListener('scroll', showCookiesPopUp);
    cookiesPopUp.style.display = 'none';
    enableScroll();
}

function preventScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'visible';
}



/* -- Uitwerkingen vraag 4 -- */
// Meer info over forms: https://www.javascripttutorial.net/javascript-dom/javascript-form/
// Meer info over localStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// TODO : met queryselector inner html veranderen van die zinnen die hetzelfde zijn voor poll/resultaat?

const form  = document.getElementById('corona-poll');

const backButton = document.getElementById('back-to-poll');

const formWarning = document.getElementById('form-warning');

form.addEventListener('submit', (event) => {
    // handle the form data
    event.preventDefault();
    if (form.elements['keuze'].value != "") {
        formWarning.style.display = "none";
        saveChoice('illegal-qr');
        saveChoice('no-corona');
        saveChoice('max-750-people');
        showResults();
    } else {    
        formWarning.style.display = "block";
    }
});

backButton.addEventListener('click', () => toggleDisplayPollResults());

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



/* -- Uitwerkingen vraag 5a -- */

const chatIcon = document.getElementById('chat-icon');

var direction = 'up';

window.setInterval(animateHeight, 100); // 0.1 seconde

function animateHeight() {
    if (chatIcon.height > 35) {
        direction = 'down';
    } else if (chatIcon.height < 20) {
        direction = 'up';
    }
    if (direction == 'up') {
        chatIcon.height += 1;
    } else {
        chatIcon.height -= 1;
    }
}



/* -- Uitwerkingen vraag 5b -- */

var listedArticles = document.getElementsByClassName('listed');

for (var i = 0; i < listedArticles.length; i++) {
    listedArticles[i].addEventListener('mouseover', animateLight);
    listedArticles[i].addEventListener('mouseleave', removeAllEffects);
}

function allArticlesSeeThrough() {
    for (var i = 0; i < listedArticles.length; i++) {
        listedArticles[i].classList.add('see-through');
    }
}

function removeAllEffects () {
    for (var i = 0; i < listedArticles.length; i++) {
        listedArticles[i].classList.remove('see-through');
    }
}

function animateLight() {
    allArticlesSeeThrough();
    this.classList.remove('see-through');
}