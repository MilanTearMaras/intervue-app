# intervue-app

Cílem této aplikace je vytvoření formuláře pro pravidelné investování. Uživatelem je potenciální investor, jenž je povinen zadat své osobní údaje pro ověření identity (vše je povinné z legislativních důvodů) a současně parametry pravidelné investice (například kolik Kč měsíčně plánuje investovat).

### Formulář bude obsahovat následující pole:
- Pravidelná výše investice (Kč) - doplněno o slider
- Jméno a Příjmení
- Telefonní číslo
- Emailová adresa
- Rodné číslo
- Datum narození
- Číslo občanského průkazu
- Adresa trvalého pobytu
- Číslo bankovního účtu (pro případné výplaty výnosů z investice)
- Souhlas se zpracováním osobních údajů (žádné osobní údaje nesmí být uloženy bez výslovného souhlasu)

### UX/UI požadavky
- Krokovost:
  - Pro lepší orientaci a aby uživatel nebyl zahlcen množstvím polí hned na začátku, je vhodné formulář rozdělit do jednotlivých kroků s vysvětlením, co je cílem každého kroku.
- Responzivita:
  - Více než polovina uživatelů vyplňuje formuláře na mobilních zařízeních.
- Základní validace a sanitace polí:
  - Je nutné zabránit odesílání nevalidních nebo nesmyslných dat na backend a současně uživatele informovat o nevalidním vstupu a možnosti jeho opravy.

### Technické požadavky
- Aplikace musí být postavena na Vue 3 nebo Nuxt 3.
- Použití TypeScriptu je povinné.
- Je třeba použít composables/store.
- Je třeba dodržet rozumnou adresářovou strukturu pro projekt, pro komponenty.
- Kód by měl být čistý, přehledný, zkrátka jednoduše čitelný.
- Aplikace bude napojena na placeholder API: https://jsonplaceholder.typicode.com/guide/
  - POST pro odeslání dat
  - GET pro zobrazení souhrnu na stránce
- BONUS: Uvítáme použití Tailwind CSS, router guard pro povolení/zakázání kroků ve formuláři, nebo třeba https://reka-ui.com/, případně dalších rozšíření.
