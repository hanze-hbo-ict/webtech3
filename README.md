# Repository voor webtechnologie 3

## Status van deze repo
Dit is de centrale repository voor het onderwijsmateriaal voor het onderdeel webtechnologie 3, wat in semester vier van de opleiding HBO-ICT van de Hanzehogeschool Groningen gegeven wordt. Althans, deze repo betreft vooralsnog alleen de [mkdocs-bestanden](https://www.mkdocs.org/) van dat onderwijsmateriaal – de voorbeeldcode, docentenhandleidingen, lesplannen en wat dies meer zij komen waarschijnlijk in een andere repository.

Dit materiaal is continu *work in progress*; aanpassingen, verbeteringen en aanvullingen zijn aan de orde van de dag, zeker wanneer het onderwijs een keertje heeft gedraaid. De eerste editie van deze module is in periode 4 van 2021/2022.

Samengesteld door [Bart Barnard](b.barnard@pl.hanze.nl) en [Kayleigh Beard](k.l.beard@pl.hanze.nl).


## Opstarten

We adviseren gebruik te maken van een [virtuele omgeving](https://virtualenv.pypa.io/). Installeer de dependencies op basis van het bijgeleverde `requirements.txt`-document en start de ontwikkelserver op. Om de volledige site te genereren maak je gebruik van `mkdocs build`:

```shell
python -m pip install -r requirements.txt
mkdocs serve
mkdocs build
```

&copy;2022 Hanzehogeschool Groningen
![Hanze logo](docs/imgs/hanze-logo.jpeg)