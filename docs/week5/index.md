# Week 5: Javascript async

Nadat vorige week de basis is gelegd, gaan we deze week in op één van de meest fundamentele eigenschappen van Javascript: *asynchroon programmeren*. De meeste programmeertalen die je tot nu toe bent tegengekomen gaan in basis uit van een *call stack* waarbij functies of methoden elkaar aanroepen en wachten totdat die call is afgerond voordat de de caller zelf door kan gaan. Javacript is van meet af aan ingesteld op het werken met calls die lange tijd in beslag kunnen nemen, bijvoorbeeld data ophalen over een netwerk. Om deze reden (en omdat Javascript altijd maar in één *thread* draait) heeft [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) al vanaf het prille begint gewerkt met zogenaamde *callback functions*. 

## Hoorcollege

In het hoorcollege wordt de theorie van asynchroon programmeren toegelicht. We bespreken de noodzaak van deze techniek en de verschillende manieren waarop aan deze noodzaak voldaan kan worden. Aan de hand van de werking van de *callback queue* en de *event loop* wordt toegelicht hoe functies conditioneel gemaakt kunnen worden – en hoe ze pas kunnen worden aangeroepen wanneer er aan die conditie voldaan is. We bespreken de theoretische werking van deze techniek en laten zien hoe deze concreet is gerealiseerd in de browser (in de [V8-engine](https://github.com/v8/v8)) en in [nodejs](https://github.com/nodejs/node).

Vervolgens gaan we in op het concept van `Promises` en het aan elkaar rijgen van functie-aanroepen. We kijken naar goede architecturen om dit soort code efficiënt en leesbaar te maken.

![De Volharding der Herinnering als metafoor voor asynnchroon programmeren](../imgs/persistència_memòria.jpeg)

## Werkcollege

In het werkcollege wordt de theorie uit het hoorcollege praktisch uitgewerkt. Aan de hand van een aantal kleine specifieke opgaven wordt Javascript ingezet om remote data op te halen en te verwerken. Hierbij maken we gebruik van technieken die zowel in de browser als op de command line werken. We kijken hoe we data uit verschillende bronnen tot één geheel kunnen integreren, zonder problemen te ondervinden van latency of kapotte links.

## Literatuur

- Simpson, Kyle (2015), *Async and Performance*. Uit de (aan te raden) serie [You Don't Know JavaScript](https://github.com/getify/You-Dont-Know-JS). Dit boek is eenvoudig via de Hanze mediatheek te vinden.

- [`fetch` op MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

