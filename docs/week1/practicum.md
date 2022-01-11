# Practicum week 1

Hier een opzetje voor browser inspecteeropdracht. Het is wat speels en soms wat gek, maar het idee is een eerste kennismaking met wat belangrijke componenten van de webbrowser en webpagina's: html elementen en de architectuur daarvan, netwerk, javascript, styling, etc. 

Open de browser en navigeer naar hanze.nl. Klik op rechtermuistoets ergens willekeurig op de pagina en selecteer “inspect” of “inspect element”.

Vind voorbeelden van:
- `<a>`
- `<p>`
- `<h1>`
- `<input>`
- `<li>`
- `<span>`

Wat voor soort HTML elementen/tags worden gebruikt voor het opsommen van opleidingen, open dagen & voorlichtingen, en bedrijven?

Open het tabje Network/Netwerk en ververs de pagina. Wat is de url van de grote bannerafbeelding?

Open in het tabje Elements het tabje Styles. Selecteer een element dat de typische Hanze-oranje kleur bevat. Kun je erachter komen wat de kleurcode is?

Navigeer naar google.com. Verwijder alle elementen behalve de zoekbalk en het microfoon icoontje.

Selecteer het google logo (img element) en typ naast ``class=".."`` het volgende: 

    id="google-logo"

Open het tabje Console en voer de volgende JavaScript code uit:

```
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

Voer bovenstaande code nogmaals uit, maar vervang dit keer de woorden ``rotate`` door ``skewY``. Wat gebeurt er nu? Kun je dit ook op andere elementen toepassen? (let op: geef elk element een uniek id, en gebruik dit id ook in de code) Wie maakt de meest gestoorde webpagina? ;) (demonstratie aan het eind?)

Of: wie kan de webpagina onherkenbaar veranderen?

Misschien als begin http://motherfuckingwebsite.com/ & http://bettermotherfuckingwebsite.com/ & https://thebestmotherfucking.website/ inspecteren?