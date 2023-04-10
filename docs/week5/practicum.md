# Practicum week 5

Tijdens dit practicum (en bij [het oplevermoment dat erbij hoort](memory.md)) maken we gebruik van [een backend dat gemaakt is in php met symfony](https://github.com/hanze-hbo-ict/memory-backend). Clone de repo en volg de instructies in de bijgevoegde `README.md` om de boel aan de praat te krijgen.

!!! Warning "Alleen op de frontend"
    Het is de bedoeling dat je *alleen* aan de frontend werkt. We hebben die backend juist gemaakt om de situatie te simuleren waarin je als developer geen mogelijkheid hebt om een deel van de applicatie (de backend in dit geval) zelf aan te passen.

    Dat gezegd hebbende is het best mogelijk dat je dingen in de backend tegenkomt die echt beter moeten. We hebben dat ding redelijk snel in elkaar gezet, dus we doen geen enkele garantie over hoe goed het is. Het staat je dus zeker vrij om dit aan te passen en een pull-request te doen.


## 1. Opwarmen - JavaScript arrays

We beginnen met wat opwarmoefeningen om wat meer inzicht te krijgen in fundamentele JavaScript array-functies. Tijdens het plenaire deel is het één en ander hieromtrent gedemonstreerd; het is de bedoeling dat je hier nu zelf mee aan de gang gaat.

Gegeven de onderstaande array `arr`. 

```javascript
let arr = [4,12,4,32,5,1,2,4,5,3,2,1,5,3,2,6,4,23,25,57,78,33,42,65,2,16,85,12,87,23,87,23,87,98,23,6,23,65,87,98,1]
```

#### 1a
Maak gebruik van de methode `filter` om een nieuwe array te maken die alleen de elementen uit `arr` bevat die deelbaar zijn door 3.

#### 1b
Maak gebruik van de methode `map` om een nieuwe array te maken die alle elementen uit `arr` verdubbeld bevat.

#### 1c
Maak gebruik van de methode `sort` om een nieuwe array te maken die de elementen uit `arr` gesorteerd (van hoog naar laag) bevat

#### 1d
Maak gebruik van de methode `reduce` om het totaal van alle elementen uit `arr` te bepalen


## 2. Aggregeren en weergeven van data van de backend

Download het bestand [week5.zip](files/files-wk5.zip) en pak dit op een logische locatie uit. Deze zip bevat een php bestand `get-data.php` dat een suggestie wekt van spelers-namen met de scores van de spellen die hebben gespeeld. Bestudeer de code om een beeld te krijgen van de werking hiervan. De zip bevat ook een html bestand waarin gevraagd wordt op gebruikersgegevens (gebruikersnaam en wachtwoord). De bedoeling van deze opgave is het weergeven van de top tien beste spelers met hun scores wanneer de opgestuurde gegevens correct zijn.

![Weergave van de top tien beste spelers](imgs/top-tien.png)

Start in deze directory een php-server zodat je beschikking hebt over het bestand `get-data.php` via een netwerk:

```php
php -S localhost:8000
```

Begin met het afvangen van de normale flow van de html: er zit een submit-button in die standaard een `POST` request doet naar de `action`. In dit geval willen we de hele boel door JavaScript laten afhandelen, waarbij we de pagina zelf nooit hoeven te verlaten. Vervang dus de submit door een standaard knop en vang het `click` event op met een eventListener.

Maak vervolgens gebruik van [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) om de ingevulde gegevens te serialiseren. Post deze gegevens naar `get-data.php`. Zorg er in eerste instantie voor dat de gegevens correct zijn (gebruikersnaam: 'Henk', wachtwoord 'OpDeTank').

De backend geeft alle data van alle spelers terug. Maak gebruik van de kennis die je bij de eerste oefening hebt opgedaan om deze data om te zetten in een array van gebruikersnamen met hun totale score. Als je dit hebt gedaan, kun je deze nieuwe array sorteren op de individuele score van de spelers. Zorg er vervolgens voor dat je van deze nieuwe gesorteerde array alleen de eerste tien elementen overhoudt (zie hiervoor eventueel de methode [`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)).

Itereer over deze laatste array en maak gebruik van de `template` met id `scores` om tien regels toe te voegen aan de gegeven tabel met id `players`. Zorg er tenslotte via css voor dat deze tabel ook daadwerkelijk wordt weergegeven.

!!! Tip "NumberFormat"
    Maak gebruik van [Intl.NumberFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) om de (relatief grote) scores wat vriendelijker en leesbaarder weer te geven.


## 3. Opvangen van verschillende response codes

Zoals je kunt zien kan de backend nog twee andere respons codes teruggeven: `401 Unauthorized` en `400 Illegal request`. Zorg er voor dat de input-velden een dikke rode lijn krijgen wanneer de eerste fout optreedt.

![Verkeerde gegevens worden duidelijk gemaakt met dikke rode lijnen](imgs/verkeerd.png)

Waarom is het onwaarschijnlijk dat in de huidige configuratie de tweede fout optreedt? In wat voor context zou dat wel kunnen, denk je?


## 4. Opvangen van een JWT van de Backend

In deze en de volgende opgave gaan we gebruik maken van [de backend voor het memory-spel](https://github.com/hanze-hbo-ict/memory-backend). Clone deze repository op een handige plek en volg de instructies in de `README.md` om de boel aan de praat te krijgen. In de directory `create` vind je scripts (feitelijk `cURL` calls) die je kunt gebruiken om de installatie te testen. Bestudeer de scripts om een beeld te krijgen van hoe deze backend werkt. 

Verder maken we hier ook weer gebruik van dezelfde login-pagina als die je in de vorige opgave hebt gebruikt. Zorg ervoor dat je een nieuw JavaScript-bestand aan deze html koppelt. Je vind dit bestand ook in de directory `frontend` van de repo.

Als je met goeie credentials op deze backend inlogt, krijg je json terug dat er als volgt uitziet (met een ander jwt, vanzelfsprekend):

```json
{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTQwNjQ5MzksImV4cCI6MTY1NDA2ODUzOSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiQ2hhbnRhbCJ9.RJVkBQfZ5DvNwjNlRxsVnQJagwIOwQvsbLGi9bI-rh4aOkzq6-oc3hESDVt-ibWVZSsj33ojdkft8bvUph1ylBrZbG0a96r-HdcHY-IyYaj_l-T_xT7epivvYafXejKRTSou-bBh1KiKhhSLrROjTsNu5CuhrG66qXpq_uLlBC1r4bYWzv6ekqqOAzqUqyBz40dBTkbLhpHFaor6dEO1rMf48AwBg41l4CWTChzTq7WPj_CR3UmETSPBnliTlmE7ge4Y_HjwTVRDvOHaNYZnc8L8h61yM2461h3liLYAEhDrzJ1aRKvuZxBC0wTHGLPmRUv5DbODAas2q7iGj9PVE_o3Y9mHVCKHFw_zqCxpmrcpnh874K9aly8rJYjvoFsEnWJXj976gz87a9nPlsetOyiCwU36aPgQ9ACHU3Lp7mEKQyooYrGz6Fpl_Kx7ii1shoUEumm_QCzZGAZbqAQJxFxJ5fVzcnuf-wVDvxtYCsfaHIRlac4knt14BTSI0JC0m-PWQ6O0PR6_OPrxm177s1QyyqXZgXvqbvHTB0jEd1Wv-znBDzD_mhdmcDvCXuv6hgVtGbvBWLdyQm3sxBMjfIstWCOhtMoTsNoihyHsrGZsYHQNUGW-2vBiii6r9dkaNCIOKJtW3EF_Nzw9WkfwG8lSYB9qcVuvrgO6uIYARvo"}
```

Sla dit token op in de `localStorage` en geef een duidelijke melding aan de speler dat er is ingelogd. Check de `localStorage` via de `Application`-tab in de developer tools.

![JWT opgeslagen in de `localStorage`](imgs/ingelogd.png)

Wanneer de bezoeker de verkeerde gegevens (gebruikersnaam of wachtwoord) invult, moet daar ook een duidelijke melding van komen.

![Foute inlog-gegevens](imgs/fout.png)


## 5: Meesturen van het JWT in elke request

De volgende stap is het meesturen van het jwt bij elke request. Je kunt hiervoor [je eigen service maken die elk http-request ondervangt](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests) en het jwt injecteert, maar voor deze exercitie is het voldoende om het token handmatig toe te voegen in de headers.

Voeg het jwt toe met de volgende syntax: `Authorization: Bearer <token>` (bekijk [de documentatie op jwt.io](https://jwt.io/introduction); geen handige links in die pagina, maar ongeveer halverwege staat dit toegelicht). Doe een call naar `/api/player/{id}/games` om een overzicht te krijgen van de spellen die de speler met deze id heeft gespeeld (zoek zelf een bestaande id op in de database; het bijhorende wachtwoord vind je in `create/create_users.sh`). 

Vang de respons van de server op en toon deze weer netjes onder het login-scherm.

![De hele pagina inclusief de scores](imgs/scores.png)

!!! Tip "Datum Format" 
    Maak gebruik van [`toLocaleDateString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) om de datum die je terugkrijg van de backend om te zetten in een iets vriendelijker en leesbaarder formaat.

![xkcd over datum formaten](https://imgs.xkcd.com/comics/iso_8601_2x.png)




