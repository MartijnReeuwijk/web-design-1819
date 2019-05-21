
![Demo pic](https://github.com/MartijnReeuwijk/web-design-1819/blob/master/readmeassets/newHero.png)

# Web design
Voor webdesign ga ik een date picker maken voor Marijn deze word op maat gemaakt voor Martijn die most heeft van motoriek.
De app werkt in de context van de Albert hein thuisbezorgd dienst, voor bijvoordbeeld het bestellen van boodschappen en eten.


# Tabel of content
- [Web design](#web-design)
- [Tabel of content](#tabel-of-content)
  * [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Running](#running)
  * [Linting](#linting)
  * [Build With](#build-with)
- [Concept](#concept)
    + [Eye tracking](#eye-tracking)
    + [Voice controlled](#voice-controlled)
    + [Keybind support](#keybind-support)
- [User scenario](#user-scenario)
  * [User needs](#user-needs)
- [Keybinds](#keybinds)
    + [Keybinds zonders visual clue](#keybinds-zonders-visual-clue)
    + [Keybinds visual clue](#keybinds-visual-clue)
      - [Keybinds code](#keybinds-code)
  * [Authors](#authors)
  * [License](#license)
  * [Acknowledgments and Thanks](#acknowledgments-and-thanks)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git@github.com:MartijnReeuwijk/web-design-1819.git`
- `cd web-design-1819`
- `npm install`

## Running

`node inex.js`
localhost 5000.

## Linting

For linting i used CleanCss and Prettier
To run the Prettier use the code below

- `npm run clean`

## Build With

- [Prettier](https://prettier.io/docs/en/options.html) - Prettier.io - Linter
- [Node.js](https://nodejs.org/en/) - nodejs
- [Express](https://expressjs.com/) - Express

# Concept
### Eye tracking
Een van mijn concepten Marijn de website laten besturen door het gebruik van eye tracking.
Maar na het testen van de eyetacking packages kon de webcam eigelijk niet doen mijn ogen tracken en was het niet mogelijk om dit goed tedoen.
De eye tracking software kon mijn ogen ook al niet goed tracken en voor iemand die veel in de stoel beweest zou dit onmogelijk zijn. Hopelijk is in een paar jaar deze software bezig zo dat we mensen beter kunnen helpen.

Voor eyetacking heb ik webgazer gebruikt.
- [webgazer](https://webgazer.cs.brown.edu/) - webgazer

### Voice controlled
Marijn heeft moeite met duidelijk praten dus het zou te fout gevoelig zijn om deze optie te gebruiken.

### Keybind support
De keybinding is het veranderen van de keys zo dat Marijn de website beter zou kunnen navigeren.
Marijn gebruikt kan de rechter kant van zijn toestsenboord het makelijkst gebruiken.


# User scenario
Marijn moet een thuis bezorging laten bezorgen wanneer hij terug komt van een concert.
Marijn weet dat het concert op de 3de dinsdag van september is en dat, dat 17 september 2019 is.
Het zou handig zijn als zijn boodschappen er voor de 17de zijn.

Martijn gaat naar de bezorgings website van de Appie en dan deze deze data invoeren.

## User needs
- redelijk grote knoppen het liefst vierkant, voor minder horizontale beweging.
- Focus op de rechter kant van het toetsenboord.
- Alles in een viewpoort.
- Single layer keybinds.
- Visual clue voor de keybinds.

## Design principles
Hier zijn de design principles en hoe ik me er op heb gefocused

### Prioritise identity
Door het bekijken van het mijn bewegingen en hoe hij voor zijn computer zit weet ik dat ik de rechterkant van het toetsenboord kan gebruiken daarom heeft die kant een prioriteit.
zodat hij niet onconfortable moet zitten.

### Add nonsense
Voor de Add nonsense heb ik de style van een Commodore64 proberen te emuleren. Dit heb ik gedaan door het toevoegen met van een Key geluid zo dat je meer een mechanisch keyboard heb. Ook heb ik Tape saving toegepast waar bij het opstaan een tape geluid geeft zo als de ouden Commodore64.

### Ignore conventions
Voor iemand met de manier van beweging/interactie die Marijn heeft zijn zo ver ik weet geen conventions, het enige wat ik heb gebruikt is de number pad form van 1/9 met de 0 er onder.


# Keybinds
![First design pic](https://github.com/MartijnReeuwijk/web-design-1819/blob/master/readmeassets/hero1.png)

Omdat Marijn moeite heeft met het gebuik van zijn arm en zijn rechter arm eigelijk niet kan gebruiken, heb ik een maar aantal key van het toetsenboord en daar de functionalitijd van de website aan toegepast. Zo kan hij met de toetsen die voor hem het handigst zijn door de website navigeren.

### Keybinds zonders visual clue
In mijn eerste design had ik geen visual clue voor het gebruik van de keybinds waar door het erg onduidlijk was welke knoppen de gebruik kan gebruiken. Dee heb ik later toegevoegt na wat peer to peer testing
![Keybinds zonder visual clue](https://github.com/MartijnReeuwijk/web-design-1819/blob/master/readmeassets/zonder.png)

### Keybinds visual clue
De rebinded key geef ik aan met in de linker boven hoek de toets telaten zien. (Zie image hier onder)
Marijn kan met zijn duim de de trackpad besturen en de knoppen er om heen zoals de spatiebalk en de B en N.
Marijn kan ook de knoppen rond om de enter en de pijltjes toests goed gebruiken
![Keybind-Focus](https://github.com/MartijnReeuwijk/web-design-1819/blob/master/readmeassets/keybindview.png)

#### Keybinds code
Hier onder een klein stukje van de code hoe ik met de keybinds de focus van de website beinvloed.
```
document.querySelector("body").onkeypress = function(e) {
  if (event.key == "p") {
    e.preventDefault();
    document.getElementById("weekPick").focus();
  }
}
```

##Feedback
Dit is de feedback die ik heb gekregen / wat ik zelf heb geobserveerd
- Hij heeft meer moeite met motoriek dan ik eerst had verwacht.
 - Knoppen zijn correct formaat.
 - Keybinds zijn duidelijk aangegeven.
 - Delete knop moet naar boven in de zo dat hij altijd in view is.
 - Extra conformatie knop kan er uit aka focus state van de make date knop.
 - Verander de text van MakeDate.
 - Hij zag niet dat het een drop Down menu was geef dit een icoon.
 - verander de ``>`` naar een ``.`` dit zorgt dat het duidelijk niet een shift knop is.

### Feedback paper
![Feedback](https://github.com/MartijnReeuwijk/web-design-1819/blob/master/readmeassets/feedback.png)

##Feedback verweking:
  - [] Delete knop moet naar boven in de zo dat hij altijd in view is.
  - [] Extra conformatie knop kan er uit aka focus state van de make date knop.
  - [x] Verander de text van MakeDate.
  - [x] Hij zag niet dat het een drop Down menu was geef dit een icoon.
  - [x] verander de ``>`` naar een ``.`` dit zorgt dat het duidelijk niet een shift knop is.

# Redesign repeatable date picker
![Redesign](https://github.com/MartijnReeuwijk/web-design-1819/blob/master/readmeassets/newHero.png)
Ik heb na feedback het concept van mijn project veranderd van een datepicker naar een repeatable date picker.

##Feedback sessie 2
- [x] Delete knop niet duidelijk vernader de kleur
- [x] Maand picker was niet duidelijk want hij moet niet altijd open staan.
- [x] pijltjes toets navigeren was niet duidelijk.


### Feedback paper

###Feedback conclusie:
De date repeater had op een anderen manier vormgegeven kunnen worden zodat hij duidlijker was en waarschijnlijk met minder clicks.
overall heb ik er veel van geleerd maar zou ik het volgende keer anders opbouwen.




## Authors

- **Martijn Reeuwijk** - [MartijnReeuwijk](https://github.com/MartijnReeuwijk)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments and Thanks
Marijn voor het testen.
