# Practicum week 5

Tijdens dit practicum (en bij [het oplevermoment dat erbij hoort](memory.md)) maken we gebruik van [een backend dat gemaakt is in php met symfony](https://github.com/hanze-hbo-ict/memory-backend). Clone de repo en volg de instructies in de bijgevoegde `README.md` om de boel aan de praat te krijgen.

!!! Warning "Alleen op de frontend"
    Het is de bedoeling dat je *alleen* aan de frontend werkt. We hebben die backend juist gemaakt om de situatie te simuleren waarin je als developer geen mogelijkheid hebt om een deel van de applicatie (de backend in dit geval) zelf aan te passen.

    Dat gezegd hebbende is het best mogelijk dat je dingen in de backend tegenkomt die echt beter moeten. We hebben dat ding redelijk snel in elkaar gezet, dus we doen geen enkele garantie over hoe goed het is. Het staat je dus zeker vrij om dit aan te passen en een pull-request te doen.


## Opgave 1. Opwarmen - JavaScript arrays

We beginnen met wat opwarmoefeningen om wat meer inzicht te krijgen in fundamentele JavaScript array-functies. Tijdens het plenaire deel is het één en ander hieromtrent gedemonstreerd; het is de bedoeling dat je hier nu zelf mee aan de gang gaat.

Gegeven de onderstaande array `arr`. 

```javascript
let arr = [4,12,4,32,5,1,2,4,5,3,2,1,5,3,2,6,4,23,25,57,78,33,42,65,2,16,85,12,87,23,87,23,87,98,23,6,23,65,87,98,1]
```

**a** Maak gebruik van de methode `filter` om een nieuwe array te maken die alleen de elementen uit `arr` bevat die deelbaar zijn door 3.

**b** Maak gebruik van de methode `map` om een nieuwe array te maken die alle elementen uit `arr` verdubbeld bevat.

**c** Maak gebruik van de methode `sort` om een nieuwe array te maken die de elementen uit `arr` gesorteerd (van hoog naar laag) bevat

**d** Maak gebruik van de methode `reduce` om het totaal van alle elementen uit `arr` te bepalen


## Opgave 2. Aggregeren en weergeven van data van de backend

Download het bestand [week5.zip](files/files-wk5.zip) en pak dit op een logische locatie uit. Deze zip bevat een php bestand `get-data.php` dat een suggestie wekt van spelers-namen met de scores van de spellen die hebben gespeeld. Bestudeer de code om een beeld te krijgen van de werking hiervan. De zip bevat ook een html bestand waarin gevraagd wordt op gebruikersgegevens (gebruikersnaam en wachtwoord). De bedoeling van deze opgave is het weergeven van de top tien beste spelers met hun scores wanneer de opgestuurde gegevens correct zijn.

![Weergave van de top tien beste spelers](imgs/top-tien.png)

Start in deze directory een php-server zodat je beschikking hebt over het bestand `get-data.php` via een netwerk:

```php
php -S localhost:8000
```

Begin met het afvangen van de normale flow van de html: er zit een submit-button in die standaard een `POST` request doet naar de `action`. In dit geval willen we de hele boel door JavaScript laten afhandelen, waarbij we de pagina zelf nooit hoeven te verlaten. 

Maak vervolgens gebruik van [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) om de ingevulde gegevens te serialiseren. Post deze gegevens naar `get-data.php`. Zorg er in eerste instantie voor dat de gegevens correct zijn (gebruikersnaam: 'Henk', wachtwoord 'OpDeTank').

De backend geeft alle data van alle spelers terug. Maak gebruik van de kennis die je bij de eerste oefening hebt opgedaan om deze data om te zetten in een array van gebruikersnamen met hun totale score. Als je dit hebt gedaan, kun je deze nieuwe array sorteren op de individuele score van de spelers. Zorg er vervolgens voor dat je van deze nieuwe gesorteerde array alleen de eerste tien elementen overhoudt (zie hiervoor eventueel de methode [`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)).

Itereer over deze laatste array en maak gebruik van de `template` met id `scores` om tien regels toe te voegen aan de gegeven tabel met id `players`. Zorg er tenslotte via css voor dat deze tabel ook daadwerkelijk wordt weergegeven.


## Opgave 3. Opvangen van verschillende response codes

Zoals je kunt zien kan de backend nog twee andere respons codes teruggeven: `401 Unauthorized` en `400 Illegal request`. Zorg er voor dat de input-velden een dikke rode lijn krijgen wanneer de eerste fout optreedt.

![Verkeerde gegevens worden duidelijk gemaakt met dikke rode lijnen](imgs/verkeerd.png)

Waarom is het onwaarschijnlijk dat in de huidige configuratie de tweede fout optreedt? In wat voor context zou dat wel kunnen, denk je?


## Opgave 4. Opvangen van een JWT van de Backend


## Opgave 5: Meesturen van het JWT in elke request




