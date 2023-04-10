# Week 2 - Memory 1 - eerste toetsmoment

Voor het eerste toetsmoment staat hieronder beschreven wat er opgeleverd dient te worden. Zestig procent van de opdracht bestaat uit het ontwikkelen van het memory spel. Veertig procent bestaat uit leesopdrachten – beantwoord die in een bestand `leesopdrachten.txt` en voeg die toe aan je zip. Lever de uitwerking van de memory en je antwoorden op de leesopdracht in via het betreffende inleverpunt op Blackboard. 

### Memory 1 (70%)

!!! Warning "Let op: alleen visueel!"
    Let op: het is specifiek *niet* de bedoeling dat alle functionaliteit die hieronder gesuggereerd wordt ook al werkt. In dit eerste moment is het juist het doel de voorkant volledig afgerond te hebben voordat we de boel laten werken.

    Dit gezegd hebbende is het natuurlijk *wel* de bedoeling dat de bezoeker van het spel duidelijk te zien krijgt welke elementen interactief zijn en welke niet: zorg hiervoor voor correct werkende en duidelijke *affordances* (in de betekenis zoals [Gibson hieraan gegeven heeft](https://en.wikipedia.org/wiki/Affordance).


Zorg ervoor dat met behulp van html en css de onderstaande requirements zijn gerealiseerd:

- De pagina heeft een titel
- Het is duidelijk wat de huidige staat van het spel is:
    - verlopen tijd
    - resterende tijd
    - aantal gevonden paren
- Er is een element dat visueel de tijd weergeeft dat geopende kaarten open blijven (die werkt nu nog niet, maar moet er wel zijn)
- Er is een speelveld van zes bij zes speelkaarten (dat gaan we eveneens later dynamisch maken)
- De kaarten hebben één van de volgende drie statussen, die door middel van css visueel van elkaar te onderscheiden zijn. Zorg ervoor dat van elke status tenminste één kaart in je uitwerking aanwezig is.
    - gesloten
    - open
    - gevonden
- Er is ruimte voor de volgende informatie:
    - een top vijf
    - totaal gemiddelde speeltijd
- Er zijn twee drop-downs waarmee de volgende instellingen kunnen worden gekozen:
    - het karakter op de (gesloten) speelkaarten
    - de afmetingen van het speelbord
- Er zijn drie kleurselectieknoppen voor de volgende instellingen:
    - de kleur van de gesloten kaarten
    - de kleur van de open kaarten
    - de kleur van de gevonden kaarten
- Er is een knop waarmee het spel gestart kan worden

Verder zijn er nog de volgende niet-functionele vereisten:

- Voor de verschillende onderdelen zijn passende HTML elementen gebruikt
- Er is rekening gehouden [met toegankelijkheid](https://developer.mozilla.org/en-US/docs/Web/Accessibility), zodat bijvoorbeeld gebruikers met een screen reader de webapplicatie kunnen gebruiken
- Het spel is [responsive](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) en wordt gebruiksvriendelijk getoond op zowel desktop apparaten als mobiele telefoons, waarbij gebruik is gemaakt van [mobile-first design](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first). Zorg voor de juiste [media-queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries).

![Het memory-spel zoals het er uit kan komen te zien](../imgs/memory-demo.png)

### Leesopdracht (30%)

1. Lees het [artikel over webtoegankelijkheid](https://bighack.org/5-most-annoying-website-features-i-face-as-a-blind-screen-reader-user-accessibility/) (of hier als [bestand](../materialen/week2-flexbox/toegankelijkheid.pdf)) en beantwoord de volgende vragen in een korte alinea per vraag.

    a. Probeer je voor te stellen dat je niet (meer) kunt zien, maar wel je favoriete site wilt bezoeken. Welke van de in het artikel genoemde frustratie over (on)toegankelijkheid lijkt jou het meest belemmerend? En waarom?

    b. Kom je als ziend persoon ook wel eens dingen tegen die jou belemmeren in het correct gebruiken van een website? Beschrijf kort wat je tegenkomt en hoe jij dit beter zou willen doen.

2. Lees het [artikel over responsive web design](https://www.freecodecamp.org/news/taking-the-right-approach-to-responsive-web-design/) (of hier als [bestand](../materialen/week2-flexbox/responsive.pdf)) en beantwoord de volgende vraag in een korte alinea.

Er zijn twee benaderingen als het gaat om responsive web design: mobile-first of desktop-first. Niet iedereen is het eens over welke de voorkeur zou moeten hebben, alhoewel de één wellicht populairder is dan de ander. Dit artikel betoogt een duidelijke voorkeur. Ben jij het met de schrijver van het artikel eens? Leg uit waarom je het hier wel of niet mee eens bent met behulp van een argument dat in het artikel wordt genoemd.
