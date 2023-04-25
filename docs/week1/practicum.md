# Practicum week 1 - Browsers, HTML & CSS (1)

In dit practicum maak je kennis met algemene frontend technieken, waaronder componenten van de webbrowser en webpagina's, html elementen, developer tools, netwerk, console, JavaScript, styling, etc. 

**1e helft**: Browser & webpagina's
- Inspect element
- Styles
- Network
- Console
- Performance

**2e helft**: HTML & CSS
- CV bouwen

## 1. Browser & webpagina's

Open de browser en navigeer naar [hanze.nl](https://www.hanze.nl). Klik met de rechtermuistoets ergens willekeurig op de pagina en selecteer “inspect” of “inspect element”.

1. Wat voor soort HTML elementen/tags worden gebruikt voor het opsommen van de lijst bovenaan de pagina? 

1. Vind voorbeelden van:
    - `<a>`
    - `<p>`
    - `<h1>`
    - `<input>`
    - `<li>`
    - `<span>`

---

Verander de nieuwskoppen van je favoriete nieuwssite naar wat luchtiger/positiever nieuws, publiceer de schermafbeelding ervan op [deze Padlet](https://padlet.com/bbarnard3/padlet-voor-nieuws-67xalc242mgux68o).

![Nieuwskoppen van NOS veranderd](files/nos.PNG)

---

Ga naar het Twitter account van de Amerikaanse president Joe Biden. Als je een twitter account hebt, zorg dan dat je **uitgelogd** bent.

1. Scroll naar beneden en je zult gevraagd worden om in te loggen of te registeren. Doe dit niet. Zorg in plaats daarvan dat je de "muur" verwijdert, het het scrollen weer activeert. **Hint**: zoek naar het element waarbij in CSS de `pointer-events` zijn uitgeschakeld (tabje Styles). Als je die gevonden hebt, schakel de pointer events weer in.

1. Pas vervolgens een willekeurige tweet aan door een tekst naar keuze, publiceer de schermafbeelding ervan op [deze Padlet](https://padlet.com/bbarnard3/web3biden).

![Joe Biden](files/biden.PNG)

---

Wat vind je ervan dat je zomaar nieuwssites en Twitter posts kunt aanpassen?

![Fact / Fake](files/fake.jpeg)

---

#### Styles 

Open de browser en navigeer naar [hanze.nl](https://www.hanze.nl). Klik met de rechtermuistoets ergens willekeurig op de pagina en selecteer “inspect” of “inspect element”. Open in het tabje Elements het tabje Styles.

1. Selecteer een element dat de typische Hanze-oranje kleur bevat. Wat is de kleurcode?
1. Maak het Hanze logo twee keer zo groot.
1. Verwijder een achtergrond foto.
1. De Hanze website wordt natuurlijk veel mooier in een developer-achtige look. Geef alle tekst het lettertype `monospace`.
1. Vervang de teksten bovenaan de pagina (welkomsttekst, menu-items, etc.) door teksten naar keuze.
1. Vervang de achtergrondkleuren door een kleur naar keuze.
1. Vervang het Hanze logo door een logo van een ander bedrijf naar keuze (link).
1. Publiceer de schermafbeelding ervan op [deze Padlet](https://padlet.com/bbarnard3/web3).

![Styles](files/styles.PNG)

---

#### Network 

1. Open het tabje Network/Netwerk en ververs [hanze.nl](https://www.hanze.nl). Wat is de url van de eerste foto op de pagina?

1. We gaan testen hoe snel de website laadt op een snel 3G netwerk.
  	- Zorg dat de opname knop aan staat
    - Vink "disable cache" aan. 
    - Zet network throttling op "Fast 3G".
    - Wat is de totale laadtijd van de pagina?
    - Welk bestand is het grootst en neemt het meeste laadtijd in beslag?

![Network](files/network.PNG)

---

#### Console 

Navigeer naar [google.com](https://google.com/). Verwijder alle elementen behalve de zoekbalk en het microfoon icoontje.

Selecteer het google logo (`img` element) en typ naast ``class=".."`` het volgende: 

```
id="google-logo"
```

Open de tab 'console' en voer de volgende JavaScript code uit:

```javascript
document.getElementById("google-logo").animate([
  // keyframes
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' }
], {
  // timing options
  duration: 1000,
  iterations: Infinity
});
```

Wat gebeurt er met het logo?

Voer bovenstaande code nogmaals uit, maar vervang dit keer de woorden ``rotate`` door ``skewY``. Wat gebeurt er nu? Kun je dit ook op andere elementen toepassen? (let op: geef elk element een uniek id, en gebruik dit id ook in de code) 

Voeg dit principe toe aan een andere website naar keuze, en doe dit met meerdere elementen. Wie maakt de meest gestoorde webpagina? Publiceer de schermafbeelding ervan op [deze Padlet](https://padlet.com/bbarnard3/padlet-voor-gekke-sites-83v2uw53xa8kxuti)

![Google](files/google.PNG)

---

#### Performance 

Bekijk en inspecteer de website: [http://motherfuckingwebsite.com/](http://motherfuckingwebsite.com/). De makers ervan beweren dat dit dé perfecte website is, onder andere omdat het *lightweight* is en snel laadt. We gaan deze bewering over de high performance testen met Lighthouse. 

- Vergelijk de score voor performance met deze sites: [hanze.nl](https://www.hanze.nl), [nos.nl](https://www.nos.nl), en [w3schools.com](https://www.w3schools.com). Wat zijn de scores? Waardoor denk je dat de een beter scoort dan de ander?

- Bekijk de details van de performance scores voor de verschillende sites. Wat valt je op?

![Lighthouse](files/lighthouse.PNG)

---

## 2. HTML & CSS


Maak in een HTML bestand je (fictieve droom) CV en gebruik tenminste de volgende HTML elementen. Je hoeft nog geen CSS toe te voegen.

- headings (`<h1>`, `<h2>`, etc.)
- divisions (`<div>`)
- paragraphs (`<p>`)
- tekst formatting (`<strong>`, `<i>`, `<small>`, etc.)
- images (`<img>`)
- links (`<a>`)
- lists (`<ul>` of `<ol>`)
- table (`<table>`)

![CV](files/cv.jpeg)

---


Voeg styling toe aan je CV, en denk aan:

- kleur
- lettertype
- grootte
- positionering
- etc.



---