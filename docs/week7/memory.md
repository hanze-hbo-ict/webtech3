# Memory week 7: 

De backend geeft ook geaggregeerde data terug. Het idee hiervan is dat een administrator (`ROLE_ADMIN`) van deze endpoints gebruik kan maken om te zien hoeveel spellen er gespeeld zijn, wie zich heeft aangemeld (voor irritante direct-marketing-doeleinden bijvoorbeeld) en welke API's populair zijn.

In deze opdracht moet je de pagina voor de administrator maken. (*Je hoeft dus niet het memory-spel opnieuw te bouwen*, maar je kunt natuurlijk wel een linkje naar de administrator-kant geven). 

Maak gebruik van [Angular](https://angular.io) om met behulp van [de backend van de memory-game](https://github.com/hanze-hbo-ict/memory-backend) deze geaggregeerde data op te halen en in een fraaie visualisatie te tonen. Bekijk welke geaggregeerde data de backend teruggeeft om een idee te krijgen van de mogelijkheden (en als je een spannende toevoeging ziet, doe vooral een PR). 

Je bent vrij in de uitwerking en layout van de applicatie, dus leef je uit! Er moet *wel* een visualisatie inzitten, dus niet gewoon een row-dump van de data. Je mag zelf de visualisatie bedenken, of gebruik maken van de standaarden die in Angular zitten.

Zorg er ook voor dat het volgende in je applicatie verwerkt zit:

- (Herhalende) functionaliteiten/onderdelen zijn op een logische manier gescheiden in verschillende `components`.
- Er worden `services` gebruikt voor het afhandelen van de API requests, JWT logica, en eventueel functionaliteiten en data die gedeeld worden door meerdere `components`.
- Er is duidelijk aandacht besteed aan het uiterlijk en de gebruiksvriendelijkheid van de applicatie.
- Indien daar een goede reden voor is mogen `NgModules` gebruikt worden, maar dit is niet noodzakelijk.
- Het Angular project gebruikt Typescript als taal, dus geen JavaScript.
- Het delen van data tussen componenten d.m.v. `@Input()`, `@Output()`, *property binding* en *event binding* komt voor in de applicatie.
- Directives `*ngIf` en `*ngFor` komen beiden voor in de applicatie.
- Tot slot is het MVC gedachtegoed aanwezig in de opbouw van de applicatie en worden de principes uit de [Angular Style Guide](https://angular.io/guide/styleguide) toegepast.

## Leesopdracht

Lees het Medium artikel [Will Web Components Replace Frontend Frameworks?](https://medium.com/@mariusbongarts/will-web-components-replace-frontend-frameworks-535891d779ba). Beschrijf één van de redenen die in het artikel worden genoemd over waarom je over Web Components zou moeten leren. Ben jij het hier mee eens of niet? En waarom?

