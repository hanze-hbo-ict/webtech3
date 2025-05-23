# Memory week 7: Geaggregeerde data (summatief toetsmoment)

Voor de angular-applicatie gelden voor de code dezelfde regels als voor het memory-spel zelf, dus gebruikersvriendelijkheid, responsiveness en mobile first. Zorg er ook voor dat je de applicatie voorziet van een fraaie vormgeving (wat 'fraai' is mag je zelf bedenken).

Bekijk [de omschrijving van deze backend die vorige week gegeven is](../week6/memory.md). Zorg er verder voor dat de volgende niet-functionele requirements in je applicatie verwerkt zitten:

- (Herhalende) functionaliteiten/onderdelen zijn op een logische manier gescheiden in verschillende `components`.

- Er worden `services` gebruikt voor het afhandelen van de API requests, JWT logica, en eventueel functionaliteiten en data die gedeeld worden door meerdere `components`.

- Indien daar een goede reden voor is mogen `NgModules` gebruikt worden, maar dit is niet noodzakelijk.

- Het Angular project gebruikt Typescript als taal, dus geen JavaScript.

- Het delen van data tussen componenten d.m.v. `@Input()`, `@Output()`, *property binding* en *event binding* komt voor in de applicatie.

- Directives `*ngIf` en `*ngFor` komen beiden voor in de applicatie.

- Tot slot is het MVC gedachtegoed aanwezig in de opbouw van de applicatie en worden de principes uit de [Angular Style Guide](https://angular.io/guide/styleguide) toegepast.


