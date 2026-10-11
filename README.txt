DANISHLIFE RP — HJEMMESIDE STARTERPAKKE
========================================

FILER
- index.html : hjemmesiden
- style.css  : design, layout og baggrundsbilleder
- script.js  : menu og ansøgningsformular
- admin.html : lokalt adminpanel
- admin.js   : behandling af lokale ansøgninger og nyheder

SÅDAN ÅBNER DU SIDEN (Windows)
1. Download ZIP-filen og pak den ud.
2. Åbn mappen "danishlife_rp_hjemmeside".
3. Dobbeltklik på index.html. Den åbner i din browser.
4. Klik på "Ansøgninger" og send en testansøgning.
5. Klik på "Adminpanel" i menuen eller åbn admin.html. Ansøgningen vises, hvis du bruger samme browser og samme mappe/oprindelse.
6. I adminpanelet kan du ændre status på ansøgningen og oprette nyheder.

VIGTIGT — HVAD DENNE VERSION KAN OG IKKE KAN
Denne pakke er en funktionel statisk starterhjemmeside. Ansøgninger og nyheder gemmes i browserens localStorage. Det betyder:
- Data gemmes kun i den browser, hvor den blev oprettet.
- Data sendes ikke til Discord eller en server.
- Adminpanelet har ikke sikker loginbeskyttelse.
- Andre besøgende kan ikke se deres ansøgninger fra andre enheder.
- Rigtige brugerprofiler, sikker admin-login, fælles database og automatisk Discord-afsendelse kræver backend/server og konfiguration.

BAGGRUNDSBILLEDER
Forsidens vigtigste cinematic baggrund ligger lokalt i images/hero-background.jpg, så den vises uden at hente selve baggrundsbilledet fra internettet. Nogle øvrige galleribilleder bruger stadig eksterne billed-URL'er. For at bruge dine egne billeder:
1. Lav en mappe der hedder "images" i projektmappen.
2. Læg dine egne billeder i den mappe, fx "by.jpg".
3. Åbn style.css i Notesblok eller VS Code.
4. Find ".hero" og udskift billedets URL i background-linjen med url('images/by.jpg').
5. Gem filen og opdater hjemmesiden med Ctrl+F5.
Du kan også ændre billed-URL'erne under .city-image, .road-image og .g1, .g2, .g3, .g4.

TILPASNING
- Tekster og sektioner: index.html
- Farver, billeder og design: style.css
- Formular og menu: script.js
- Adminpanel: admin.html og admin.js

Før du bruger siden offentligt, bør de generiske regler og joboplysninger tilpasses jeres faktiske server.

ADMIN-KODE I DENNE STARTERVERSION
================================
Åbn admin.html og indtast koden: DL2026
Bemærk: Koden er kun en simpel lokal browser-gate. Den beskytter ikke sikkert en offentlig hjemmeside, fordi koden findes i admin.js. Til offentlig brug kræves serverbaseret login og database.
