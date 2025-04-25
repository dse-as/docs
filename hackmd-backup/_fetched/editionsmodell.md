# Editionsmodell Edition Annemarie Schwarzenbach

[toc]



## Einführung

Die digitale Edition der Kleinen Formen und Briefe Annemarie Schwarzenbachs hat zum Ziel, die sogenannt Kleinen Formen, d.h. sämtliche unselbständig veröffentlichten und unveröffentlichten Reiseberichte, Feuilletons und Bildberichte sowie kurzen autobiographischen und fiktionalen Texte auf der einen Seite und die erhaltene Korrespondenz auf der anderen Seite digital zu veröffentlichen.  
Die Kleinen Formen umfassen ungefähr 510 Texte, davon werden 340 postum zum ersten Mal ediert. Bei der Korrespondenz handelt es sich um circa 650 erhalten Briefe, wovon die meisten von Annemarie Schwarzenbach selbst stammen. Die Gegenbriefe sind nur zu einem kleinen Teil erhalten.  
Ein wichtiger Bestandteil der Edition ist das fotographische Werk Annemarie Schwarzenbachs. Dieses ist dergestalt in die Edition der Kleinen Forme und Briefe eingebunden, dass alle im Zusammenhang mit den Texten stehenden Fotografien verlinkt und zusätzlich alle Fotografien einzeln erschlossen und zugänglich sind.

Längerfristig ist die Ergänzung der digitalen Edition zu einer Gesamtausgabe um die Grossen Formen (Romane, Reportagebücher und Drama) geplant sowie der Druck der Gesamtausgabe als Studienausgabe. Im Folgenden wird zunächst die digitale Edition umrissen und ihre Codierung in einem Editionsmodell genau beschrieben. Weiterführende Überlegungen zur Lesefassung in der Studienausgabe erfolgen am Schluss. 

## Editionsgrundsätze

Die digitale Edition richtet sich sowohl an ein wissenschaftliches Expertenpublikum als auch an eine interessierte nicht-wissenschaftliche Leserschaft. Der Zugang zum originalen Text wird mithilfe einer diplomatischen Transkription in der DSE ermöglicht. Sowohl die Kleinen Formen wie auch die Briefe sind mit ausführlichen Kommentaren versehen. Die Kleinen Formen wie auch die Briefe werden soweit möglich nach einem generischen Modell transkribiert, das je nach Textsortenspezifika um die nötigen Elemente ergänzt wird.

## Forschungszugänge

Neben den Personen-, Orts-, Institutions-, Schlagwort- und Werkregistern bietet die Edition spezifisch markierte Einträge zu folgenden drei Forschungsperspektiven:

- Reisetexte  
- Intermedialität  
- Netzwerke

Diese Forschungsperspektiven werden unter anderem durch den drei Bereichen zugeordnete spezifische Schlagworte erschlossen, wobei die Verschlagwortung nicht auf diese Bereiche beschränkt ist.

## Editionsmodell DSE-AS

### Allgemeines

Obschon es sich bereits bei den Kleinen Formen um heterogene Genres handelt und die Briefe wiederum eine andere Textsorte darstellen, ist das Editionsmodell so generisch wie möglich gehalten.

### TEI-Header
Der TEI-Header wird zwar im folgenden Editionsmodell wo relevant erwähnt, das gesamte, detailliert dokumentierte Modell des TEI-Headers wird jedoch in einem zusätzlichen Dokument beschrieben. 

### Zeilen- und Seitenumbrüche, Paragraphen, Leerzeilen 
- Grundsatz: linebeginnings `lb`, die am Anfang von sog. Block-Elementen (wie p, dateline) stehen, müssen möglichst innerhalb dieses Blockelements platziert werden. Negativ-Beispiel: 
    ```
    <lb xml:id="dummy_r_3_tl_1" break="no"/>
    <p>Am 6. Juni 1939 kauften Ella Maillart und ich beim Bäcker ...
     ```
    Korrektes Beispiel: 
    ```
    <p><lb xml:id="dummy_r_3_tl_1" break="no"/>
    Am 6. Juni 1939 kauften Ella Maillart und ich beim Bäcker ...
    ```

- zeilengenaue Transkription: 
    - `<lb break="yes">`: Standardsituation: Zeilenbruch trennt bruchunabhängige, distinkte Wortbestandteile (z.B. Aktien-Gesellschaft). Das Hyphen bleibt immer bestehen.
    - `<lb break="no">`: Ausnahme: Zeilenbruch trennt keine distinkte Wortbestandteile, sondern eine Zeilenbruch-Silbentrennung. Hyphens vor break "no" fallen weg/werden gelöscht [= gewollte Abweichung vom DTA Bf]
        - In Transkribus werden Hyphens, die Wörter beim Zeilenbruch teilen, als Negationszeichen `¬` transkribiert. In der Transformation von PAGE XML zu TEI XML werden die Negationszeichen `¬` gelöscht und mit`<lb break="no">` ungewandelt.
        - Für die diplomatische Ausgabe wird `<lb break="no">` wieder mit einem trennenden Hyphen ergänzt. 
        - Beispiel aus dem TEI (https://tei-c.org/release/doc/tei-p5-doc/en/html/examples-lb.html#index-egXML-d39e39737):  
    ```
    <lb/>With Additions, ne-<lb break="no"/>ver before Printed.
    ```
    - Framework erlaubt bei Klick auf Pfeil am Anfang der Zeile die Auswahl break "no" oder "yes" 
    - Geht die Silbentrennung oder das zusammengesetzte Wort über zwei Seiten hinweg, folgt nach dem `<pb>` das `<lb/>` mit dem enstprechenden Attribut "yes" oder "no"

- Verszeilen (Beispiel: smallform_0011): 
```xml 
<lg> 
<l> Vers 1 </l>
<l> Vers 2 </l>
</lg>
```

- Paragraphen: 
    `<p>` Das ist ein Paragraph `</p>`
    
- Grösserer Abstand zwischen Paragraphen
    Nach DTA (https://deutschestextarchiv.de/doku/basisformat/leerraum.html und https://deutschestextarchiv.de/doku/basisformat/absatz.html):
    
```xml
</p>
<space dim="vertical"/>
<p>
```
    
Wo alle Paragraphen durch zusätzlichen Abstand getrennt werden, wird dieser nicht codiert (da es eine graphische Eigenart des spezifischen Drucks ist und solche Eigenarten i.d.R. nicht in die eigene Edition übernommen werden). Oder in den Worten des DTA: "Größere Abstände zwischen Absätzen werden nur dann ausgezeichnet, wenn diesbezüglich innerhalb eines Buches eine Varianz festzustellen ist."(https://deutschestextarchiv.de/doku/basisformat/absatz.html).  

- Eingerückte Zeilen: `<space dim="horizontal"/>`
    Gemeint ist keine eingerückte Zeile die regelmässig einen Paragraphenstart markiert, sondern aussergewöhnliche Einrückungen, die etwa eine semantischer Hervorhebung markieren (siehe dazu z.B. smallform_607)
    
  
- Seitenumbruch: `<pb facs="???" n="1">`


### Korrekturen

- Sofortkorrekturen im Text über den korrigierten Text:

`<p>Der <del rend="overstrike">f</del><add>r</add>eundliche Text.</p>`

- eingefügte Korrekturen zwischen den Zeilen, am Rand, am Anfang oder am Ende der Seite werden am richtigen Platz eingefügt und mit der Angabe zum Ort, wo sie ursprünglich standen, getaggt. Einfügezeichen werden nicht wiedergegeben. Falls in einem gedruckten Text die 
schriftliche Korrektur einer bestimmten Person nachweisbar ist, wird @hand verwendet:

`<add place="above" hand="#person">`  
`<add place="below"` `<add place="right"` `<add place="left"` `<add place="top"` `<add place="bottom>"`

- Auslassungszeichen "..." werden stillschweigend um ein Leerzeichen zu Beginn ergänzt, falls noch nicht vorhanden.

### Fehlerhafte Schreibweisen

- Unkorrigierte Fehler werden im Sinne eines "sic" ausgezeichnet (siehe https://deutschestextarchiv.de/doku/basisformat/eeDruckfehler.html?hl=fehler). In Transkribus kann ein Statthalter, z.b. `[sic]`, eingefügt werden.
```
<choice>
  <sic>[fehlerhafte Form]</sic>
  <corr>[verbesserte Form]</corr>
</choice>
```
    

### Lücken/Unleserlicher Text 
(framework)

- `<gap />` Mit `@reason` werde die Gründe angegeben: "`illegible`" / "`lost`" (bei Textverlust)
- Framework-Button, durch Doppelklick auf die Markierung lassen sich die Optionen auswählen. 

### Unsichere Lesungen 
(framework)

- `<unclear>` parteiisch `<\unclear>`

### Hervorhebungen im Text 
(framework)

`<hi rendition="#g">`gesperrter Text`</hi>`  
`<hi rendition="#i">`kursiver Text`</hi>` 
`<hi rendition="#u">`unterstrichener Text`</hi>`
`<hi rendition="#b">`fetter Text`</hi>`

-> Im Falle von weiteren notwendigen Rednitions (Kapitälchen, doppelt unterstrichen etc.) ergänzen mit DTA Bf Liste: 
[https://www.deutschestextarchiv.de/doku/basisformat/typogrAllg.html](https://www.deutschestextarchiv.de/doku/basisformat/typogrAllg.html)

### Abkürzungen 
(framework)

- `<abbr>`  
  - Abkürzungen werden im Falle von Orts- und Eigennamen aufgelöst. 
  - Gebräuchliche Abkürzungen (u., etc., z.B., Dr. Prof.) werden nicht aufgelöst 
  - Im Zweifelsfall wird hier in Absprache mit Editionsteam (via Discord) angereichert.
 
`<choice>` 
`<abbr>`[Abkürzung entsprechend der Vorlag]`</abbr>`  
`<expan>`[Vollständige Auflösung/Expansion der Abkürzung]`</expan>`  
`</choice>`  
    

### Sprachen

Wird innerhalb eines Dokuments nur kurz von der Ausgangssprache in einen andere gewechselt, wird der Sprachwechsel getaggt. Mehrsprachige Briefe werden im TEI-Header mit den entsprechenden Sprachen markiert.   
Einzelne fremdsprachliche Wendungen (“Chère amie\!”) werden nicht ausgezeichnet.  

- `<foreign xml:lang="fra">` (ita, deu, lat, eng / weitere Sprachen: https://en.wikipedia.org/wiki/IETF_language_tag)

### Zitate 
(framework)

- Werden mit `<quote>` gekennzeichnet, Anführungszeichen in der Quelle werden dadurch ersetzt.  
- ACHTUNG: Anführungszeichen können auch in anderem Sinne verwendet werden (z. B. Nennung eines Titels, Ironisierung etc.), dann kein `<quote>Zitat</quote>`, sondern normale Anführungszeichen.

### Hochstellen, Tiefstellen 
(framework)

- Hochstellung von Einzelbuchstaben (oft in Abkürzungen, aber auch als Fehlerkorrekturen innerhalb eines Wortes)  
    `<hi rendition="#sup">Flugfeld</hi>`  
- Tiefstellung
    `<hi rendition="#sub">Geläut</hi>`

Geminationsstriche   
[[https://fontane-nb.dariah.eu/doku.html?id=gesamtdokumentation\_verzeichnis\_der\_sonderzeichen](https://fontane-nb.dariah.eu/doku.html?id=gesamtdokumentation_verzeichnis_der_sonderzeichen)]  
('combining macron' \= U+01404)

- m̄= `<g ref="#mgem">mm</g>`   ko`<g ref="#mgem">mm</g>`en
- n̄ = `<g ref="#ngem">nn</g>`

### Textformen und Schreibwerkzeuge 

- Auf Metadaten-Ebene, d.h. im Tei-Header, werden die Textformen mit kontrolliertem Vokabular angegeben. 
    - Letter: "Brief", "Postkarte", "Telegramm".
    - Smallform: "Typoskript", "Manuskript", "Feuilleton", "Rezension",  "Fotoreportage, "Fotografie" (= nur Fotografie publiziert, ggfls. mit Bildbeschrieb), "Zeitschriftenartikel", "Zeitungsartikel", "Sammelband" 
        - Ergänzende Textform-Kategorie für smallform: "Serie" (kann mit allen anderen Formen kombiniert werden) 
- Genauere Beschriebung der Schreibutensilien kann ebenfalls im Tei-header als Kommentar verzeichnet werden z.B. 'hs. verfasst in blauer Tinte, enthält Korrekturen in roter Tinte'. 
- Auf eine Beschreibung der gedruckten Typen (Fraktur, Antiqua etc.) wird verzichtet. 
- Wechsel im Schreibwerkzeug werden durch 'handshift' angezeigt:   
  `And if the cattes skynne be slyk <handShift medium="black-ink"/> and gaye`

### Listen und Tabellen

Listen und Tabellen werden soweit möglich inhaltlich strukturiert wiedergegeben. Feinheiten der Darstellung werden nicht berücksichtigt.

- Listen `<list>`, `<item>`  
- Tabellen:

```
<p>
<table rows="2" cols="2">
    <row>
        <cell>Pullover</cell><cell>1 Stück</cell>
    <row>
    </row>
        <cell>Hosen</cell><cell>2 Stück</cell>
    </row>
</p>
```

\[Einfache Tabellen sind als Listen darzustellen\]

### Normalisierungen

#### Satzzeichen 

- Horizontale Striche (Gedankenstriche, Spiegelstriche, Striche in Tabellen, von-bis-Striche) werden unabhängig von der Länge im Original als Halbgeviertstriche wiedergegeben (Unicode: U+2013)  
-  Leerschlag vor Gedankenstrichen, wenn kein Leerschlag ist (im Typoskript kommt das sehr häufig vor: fehlende oder überflüssige Leerschläge werden stillschweigend normalisiert.  
- Doppelte Anführungszeichen, die nicht als Zitat sowieso durch Codierung ersetzt werden, werden normalisiert zu "..." (hochgestellt 'englisch').
- Einfache Anführungszeichen werden zu Apostrophen normalisiert '...'. 
- Zitate im Zitat, die doppelte Anführungszeichen verwenden, werden stillschweigend zu einfachen Anführungszeichen normalisiert. 

#### Buchstaben
- Die handschriftlichen Anfangsbuchstaben eines Wortes sind oft sowohl von der Grösse als auch der Form her nicht eindeutig als Gross- oder Kleinbuchstaben zu identifizieren. Im Zweifelsfall wird nach den grammatikalischen Regeln entscheiden.
- Vergessene Umlaut-Punkte werden stillschweigend normalisiert.   
- Verwendung von "J" in Typoskripten, wo ein I erwartet wird wird (was regelmässig vorkommt): KEINE Normalisierung
  - Offenbar ist die Verwendung des Majuskels J für I eine verbreitete Praxis im deutschen Sprachraum bis weit ins 20. Jahrhundert, nicht nur in Typoskripten (so Wikipedia: [https://de.wikipedia.org/wiki/J](https://de.wikipedia.org/wiki/J)). Da es somit auch ein historisches Schriftbild markiert, würde ich es belassen.   
  - Volltextsuche des Interfaces muss so eingestellt sein, dass sie gegenüber der Differen I/J indifferent bleibt. 
  - Die ungewohnte historisch Schreibweise könnte die Nachnutzung der Daten erschweren (ausser natürlich die Nachnutzung zur Texterkennung, dort sollte gerade keine Normalisierung der J/I-Differenz stattfinden). Deshalb sollte die Regel gut dokumentiert sien.  

#### Druckfehler
- Offensichtliche Druckfehler werden stillschweigend korrigiert (alle anderen belassen und taggen mit orig/reg/corr - [sic] automatisch generieren)  

### Registereinträge (Personen, Organisationen, Orte, Werke) 
(framework)

- Möglichst kein "verschachteltes" Tagging. Werk vor Person, Institution vor Ort, Institution vor Person.

#### Personen

`<rs type="person" key="#id">`

- Personennamen werden grundsätzlich getaggt. Familienname und Vornamen usw. werden nicht unterschieden.  
- Pronomen werden in der Regel nicht getaggt. Ausnahme: Eine Person wird nie namentlich genannt oder die Stelle ist ohne Kontextwissen ambivalent.  
- Übernamen sind zu taggen. Sie sind in der Datenbank als alternative Namen zu vermerken.  
- Titel (z.B. 'der Prof.') ohne Namen werden getaggt.  
- Christine: Informativer Mehrwert in Registereinträgen wäre die Stellung der Person vis-à-vis Schwarzenbach. Könnte man heterogen halten.
- Absender:innen und Empfänger:innen in den Briefen werden nicht referenziert, da sie in den Metadaten sind. 


#### Organisationen

- `<rs type="org" key="#id">`  
- Hier auch Verlage und Zeitschriften, wo sie als Organisation relevant sind.
- Tagging orientiert sich an Personen.

#### Orte

`<rs type="place" key="#id">`

- primär Städte/Gemeinden (Strassen werden weggelassen) 'populated place'  
- «Örtlichkeiten», die eine besondere Bedeutung für Schwarzenbach hatten (Häuser, Farmen, Missionen etc.) \- in vielen Fällen projektspezifische ID vergeben, Geonames kann angereichert werden (nicht für schwer lokalisierbare oder fiktionale Orte).  
- Ev. antike Orte auf Pelagio (o.ä.) referenzieren  
- Tagging orientiert sich an Personen.

#### Werke

`<rs type=publication ref="#id">`

- EZ: Nicht alle Werke v. AS die referenziert werden müssen, sind Publikationen/publications, einiges ist unpubliziert, z.T. sogar verschollen.  
- Zotero zur Verwaltung und ggfls. zur ID-Vergabe (klärt Christian ab) verwenden (Tobias ist einverstanden). Die Zotero-ID wird jeweils in der Browser-Leiste angegeben (im Desktop-Client nicht sichtbar). Die kollaborative Zotero-Bibliothek “DSE AS BIBL-ID” wird zur Verwaltung genutzt; sie ist mit dem Oxygen-Framework verbunden.   
- Tagging orientiert sich an Personen.
- Publikationsmedien werden im TEI-header verzeichnet und erhalten einen eigenen Registereintrag, in dem die Einzelpublikationen (nicht die Vorkommnisse im Text) gesammelt werden

### Schlagworte

- `<rs type="keyword" xml:id="kw1">`  
- Im Unterschied zu den anderen Verweisen nicht im Primärtext referenziert, sondern **im TEI-header** 
- Offen, welche Thesauri (GND, OpenGender oder weitere) wie eingebunden werden. Möglich wäre es, mehrere Thesauri auf Geovistory zu kombinieren.  
- Zurzeit besteht eine Schlagwortliste mit GND-ID (bzw. Link) auf Google-Drive: [https://docs.google.com/spreadsheets/d/18EHyX9-BlYbEy1KrGAlRURbvyNTiW8OSELYIdphftk4/edit?usp=sharing](https://docs.google.com/spreadsheets/d/18EHyX9-BlYbEy1KrGAlRURbvyNTiW8OSELYIdphftk4/edit?usp=sharing) 

### Editor:innen-Kommentare

Für alle Editor:innen-Kommentare (Überischtskommentare und Sachkommentare) gilt: 
- Alle Entitäten werden referenziert. 
- Zitierte Werke müssen als Werk-Entität getaggt werden (können aber auch nur umschrieben werden z.b. "Schwarzenbachs Saladin-Reportage" - Saladin-Reportage nicht kursiv, aber vertaggt). 

#### Übersichtskommentare pro Dokument

- Im TEI-header als `<global comment>`

#### Sachkommentare zu Wörtern oder Textabschnitten

- `<w>Wort<note type="annotation">Dies ist ein Sachkommentar zu diesem Wort.</note></w>.`  
    
- Kommentare werden als 'Fussnote' an eine bestimmte Stelle geknüpft, wenn bestimmte Wortfolgen markiert werden sollen, wird an den Anfangspunkt ein Anker gelegt.

	@spanTo: https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-att.spanning.html
milestone: https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-milestone.html
anchor: https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-anchor.html

- Innerhalb des Kommentars sollen Referenzierungen möglich sein. 
- AS wird nicht referenziert. Oder? EZ: Ja, scheint mir in den Briefen und auch den Kleinen Formen überflüssig, da ja sonst ‘all over the place’. 
- In Kommentaren wird im Falle von AS von ‘Schwarzenbach’ geschrieben, weitere Familienmitglieder mit Vornamen ausgeführt. 
- Kommentare werden mit einem Punkt abgeschlossen.
- Innerhalb der Kommentare soll kein rendering (z.B. kursiv) stattfinden.
- Sacherklärungen: können frei formuliert werden
- Worterklärungen: Das zu erklärende Wort wird am Anfang der Note genau wiedergegeben, wie es im Text steht, gefolgt von : 

### Kommentar/Fussnote in der Quelle

- Eigene Textregion um die Fussnote setzen. Die Textregion ans Ende aller Textregionen verschieben. 
- Muss in Transkribus mit eigenem tagging \fml\ markiert werden (s.u.). 
- Codierung in Oxygen mit Textanker: 
...

### Transkribus-Tagging

Die Anwendung des Transkribus-Taggings wird in der Transkribus-Dokumentation genauer erläutert.

- Definition von Absatzumbrüchen müsste in Transkribus definiert werden als `\p\`..`\:p\`  
- Im Falle von smallforms noch `\f\`...` \:f\` und `\fp\`... `\:fp\`  
- [Leerzeilen, die sich nicht löschen lassen in Transkribus `\del\`] - das ist (zurzeit) obsoloet geworden, Transkribus erlaubt Löschungen von Blöcken imn 'Layout-Modus' der Textseite.  
- Gesperrter Text:`\g\`...`\:g\`
- Wird vor Oxygen-Import automatisch geparst 
- Wie codieren wir Paragraphen, die nicht auf einer Seite enden, um keine Validierungsprobleme zu kriegen? [haben das am 25.10.24 besprochen, bis ein konkretes Tag erstellt ist, markiere ich die Vorkommnisse mit `\fml\` = fix me later]  
- verwendete Transkribus-Tags, die in TEI XML konvertiert werden: unclear, gap, add, supplied, underlined, strikethrough, bold, italic, sic

### Textstruktur Briefe



Struktur:
Letter-Wrapper, wird automatisch in der Konversion erzeugt: 
`<div type="letterhead"`> vordegrucktes Briefpapier`<div type="letter"`
`<div type="back"` Adresse, Poststempel. Was, wenn auch Couvert vorgedruckt ist?
`<div type="attached">` Anhänge aller Art
--> -alle Divs auf einer Ebene, wenn möglich keine verschachtelten Divs

- Briefkopf (`<opener>, <dateline>, <place>`, `<salute>`)  
    
  - Wenn `<salute>` inline verwendet wird: 
   `<seg type="salute">` (semantische verwendung, kein Absatz)

- `<dateline>` kann auch ausserhalb des `<closer>` verwendet werden, wenn Briefe über mehrere Tage hinweg geschrieben sind


- Hauptteil/Absätze (`<p>`)  
    
- Briefschluss (`<closer>, <signed>, <dateline>, <salute>`)  
    
- Postscriptum (`<postscript><p>`)  
    
- Adresse (`<ab>`,`<address>`, `<addrline>`)  
    
- Vorgedrucktes Briefpapier (Briefbogen und Briefcouvert):  
  `<div type="letterhead">`  
    `<address>`  
      `<name>Firma<name/>`  
      `<street>Länggassstrasse<street/>` etc.  
    

    
- Stempel werden so einfach wie möglich mit Datum und Ort ausgezeichnet; komplexere Beobachtungen an Stempeln (z.B. Bezüge zum Briefinhalt) werden als Kommentar hinterlegt.
- Stempel werden in `<ab/>` nach der Adresse getaggt 

```
<seg type="postmark">
  <date>20. Januar 1935</date>
  <placeName>Berlin</placeName>
</seg>
```

Was, wenn Poststempel nicht lesbar ist? Leere Elemente?

- Postkarten-Aufruck auf der Rückseite: wird nur transkribiert, wenn es in irgend einer Form von Bedeutung ist

```
<div type="back">
  <p>
    Foto von Max Mustermann.
  </p>
</div>

```

- Postkarten-Vorderseite: Aufschriften/Text werden nicht transkribiert

- Reihenfolge: wenn  möglich diplomatisch. Gibt aber semantische Unklarheiten, z.B.,wenn auch dem Couvert auf der letzten Seite etwas Vorgedrucktes ist. Trotzdem div type="letterhead"? Bei Postkarte: Aufdruck nach Text.


### Textstruktur Kleine Formen

- Smallform-Wrapper (analog zu `<div type="letter"`): `<div type="smallform">`
    - Dieser `<div>`-Tag ist notwendig, um `<head>` (Titel, s.u.) zu setzen (https://www.tei-c.org/release/doc/tei-p5-doc/de/html/ref-head.html)
    - Der genaue Dokumenttyp (Feuilleton, Manuskript etc.) wird im TEI-Header festgehalten
   
- Haupttitel: `<head>Überschrift des Artikels</head>`,   
- `<byline>Von Autorname</byline>`,   
- `<dateline>Ort,Datum</dateline>`  
- Falls byline/dateline in Zeile des Haupttextes: 
    - `<seg type="byline">Von Autorname</seg>`,   
    - `<seg type="byline">Ort,Datum</seg>`
- Hauptteil/Absätze (`<div>`, `<p>`)
   
- Absatzüberschriften
    DTA schlägt die Verwendung von verschiedenen Ebenen in `div`vor (siehe https://www.deutschestextarchiv.de/doku/basisformat/div.html?hl=%C3%BCberschrift, mit dem Unterschied, dass wir nicht nur verschachtelte, sondern auch serielle Folgen von Überschriften benötigen). Wir verwenden für jeden Zwischentitel ein neues `<div>`, nummerieren sie jedoch nicht.
    
```xml=
<div type="smallform">
<head>Überschrift des Artikels</head>`
<byline>Von Autorname</byline>`,   
<dateline>Ort,Datum</dateline>`
<div> 
    <head>[Titel Kapitel 1]</head><!-- sofern vorhanden -->
        <div>
        <head>[Titel Unterkapitel 1.1]</head><!-- sofern vorhanden -->
        <p>[Text]</p>
        <p>[Text]</p>
    </div>
    </div>
    <div>
    <head>[Titel Unterkapitel 2]</head><!-- sofern vorhanden -->
    ...
</div>
</div>
</div>
```
  
- Spalten:  
    
  - Start des Spaltensatzes: `<cb type="start"/>`  
  - Ende des Spaltensatzes`<cb type="end"/>`
  - Spaltenumbrüche innerhalb des Spaltensatzes werden mittels des leeren `<cb>`\-Elements wiedergegeben \[siehe [https://deutschestextarchiv.de/doku/basisformat/spalte.html?hl=spalten](https://deutschestextarchiv.de/doku/basisformat/spalte.html?hl=spalten)\]  

- Bild und Bildunterschrift \[[https://deutschestextarchiv.de/doku/basisformat/abbVerschachtelt.html](https://deutschestextarchiv.de/doku/basisformat/abbVerschachtelt.html)\]:   
    
  - `<figure>`  
    `<head resp="editor">[Von Herausgeber:innen verliehener Titel der Abbildung]</head>`
    `<byline>[Ggfls. Autor:in der Fotografie, wenn spezifisch für dieses Bild angegeben]</byline>`
    `<p>[Bildunterschrift von AS]</p>`
    `<p>[Ggfls. weitere, durch Paragraph abgesetzte Bildunterschrift von AS (z.T. auf Französisch)]</p>` 
    `</figure>`    
    
- Im Fall von einer korrespondierenden Fotogografie: 
 `<head resp="editor" corresp="image_0204">` 
      
  - Bild-Koordinaten werden in Transkribus zoniert und dadurch auch über Kommentare ansteuer- bzw. referenzierbar, kann eigener Block sein.  
  - Bild in Transkribus als \f\  
  - Bildunterschrift in Transkribus als  \fp\(=figureparagraph)  
    

- Artikel- und Seitennummern, Fortsetzungsverweise ("Fortsetzung auf S. 7"/"Fortsetzung aus Nr. XY") \[[https://deutschestextarchiv.de/doku/basisformat/seitenFacsNr.html?hl=bild](https://deutschestextarchiv.de/doku/basisformat/seitenFacsNr.html?hl=bild)\]:  
    
  - `<fw type="tbd" place="top/inline/etc.">[tbd]</fw>`


- Redaktionelle Einleitungen/Nachbemerkungen  
  - `<div type = redactional, hand = XY>`

### Textstruktur Grosse Formen
Am textlogischen Modell von Lokalbericht orientieren (Peter lädt ein paar Beispiele auf drive). Hat noch keine Priorität. 

### Textgenetische Auszeichnung

- Wird nicht um jeden Preis angestrebt, aber könnte eine interessante Nebenschiene sein, auch für Patrick Sahle (tool 'streamreader')  
- Frühestens ab Sommer 25 genauer anschaubar, wenn die Digitalisate des SLA vorliegen  
- Interessante Abweichungen der Druckfassung von den Typoskripten (insgesamt 77 Vorstufen) können immer durch autoptische Vergleiche festgestellt und in Stellenkommentaren festgehalten werden  
- Simler verwendet Lera-Editor, den man in dem Zusammenhang ausprobieren kann

### Fotografien (SLA A-5)

- Erst relevant, wenn die neuen Digitalisierungen des Fotobestandes im Archiv stattgefunden hat.   
- Text, der sich auf die Fotografie bezieht, muss referenziert werden (bidirektional)
- Anreicherung um Koordinaten-Metadaten 
- EZ: Wie zeichnen wir Text oder Stempel auf Vorder- oder Rückseiten von Fotografien aus? Wir kommen wohl nicht um ein Stempel-Tag herum. (Das Transkribieren und Taggen von Foto-Beschriftungen wäre übrigens eine gute Hiwi-Arbeit, da eher repetitiv und zweitrangig, aber letztlich doch nötig - aber vermutlich erst, wenn wir die neuen Digitalisate haben, da wir bislang ja gar keine Rückseiten besitzen...) 
- Bei den Karteikarten mit Bildunterschriften: Wie erfassen wir den Kontext? Sinnvoll wäre es meiner Meinung nach möglichst eine integrale Darstellung, keine Freistellung 
- Diskussionsthema am 28.10., ev. auch am Intermedialitätsworkshop   
- Dafür spricht die Homogenität der Darstellungsweise   
- Die große Frage ist der Arbeitsaufwand \- Feststellung, ob es Texte aufweist, lässt sich automatisieren   
- Grundsätzlich eignet sich die Fotografie-Bearbeitung für CrowdScience/CitzienScience   

## Lesefassung Studienausgabe

### Konversionsschritte

Es ist zu unterscheiden zwischen der Lesefassung, wie sie im Frontend der DSE ausgegeben wird (DSE-Lesefassung), und der Lesefassung, wie sie voraussichtlich ab 2028 im Druck in einer Studienausgabe erscheint (SA-Lesefassung). Für erstere ist eine spezifische Ausgabe im Web-Interface nötig, letztere muss von ersterer ausgehend in einer Konversion (voraussichtlich TEI/XML -> InDesign) hergestellt werden. 

### Mikrostruktur

Die Hauptdifferenzen zwischen DSE- und SA-Lesefassung:

- Transformation von Referenzierungsfunktionen
    - Interaktives Register wird klassischer Register-Anhang ohne Verlinkungen
    - Nicht alle Referenzierungen können ggfls. sinnvoll in Print übersetzet werden: Wegfall von Referenzen zu alleinstehenden Bildern, die nur online publiziert werden oder zu anderen DSE. 
- Darstellung der Kommentare: Übersichts- und Stellenkommentare finden im Dokument-spezifischen Anhang Platz. 
- Korrekturen und Eingriffe: Unmarkierter Druck der korrigierten Fassung und der Herausgebereingriffe, Widergabe der Korrekturen und Eingriffe im Dokument-spezifischen Anhang

### Makrostruktur
- 3 Grundgattungen: Grosse Formen (= monographisch intendierte Werke = Romane, Reportagebücher, Drama), Kleine Formen, Briefe
- Reihenfolge der Texte und der Bände-Publikation: 
    - Grundsätzlich wird die Chronologie der Niederschrift beachtet (Niederschrift vor Publikation). Gleichzeitige Publikation von Bänden unterschiedlicher Gattungen, die denselben Zeitraum umfassen, könnte attraktiv sein.
        - Briefe: 
            - 3 Bände: 
                1. 1925-1933
                2. 1933-1937
                3. 1938-1942
        - Kleine Formen: 
            - 4 Bände: 
                1. 1925-1936
                2. 1936-1938 
                3. 1938-1940
                4. 1941-1942
            - 1 Sonderband: grossformatige Fotoreportagen, chronologisch
        - Grosse Formen
            - 5 Bände: 
                1. Die 3 frühen Romane (1931, 1933)
                2. Die 2 Reportagebücher (1934, 1938)
                3. Die 2 Persien-Romane (1935, 1940)
                4. Die Erzählsammlungen (1935, 1939)
                5. Die 2 Afrika-Texte (1941, 1942)
- Textstufen Kleine Formen (von allen anderen Gattungen sind keine Stufen vorhanden!)
    - Haupttext: Primat der letzten Textstufe: Publikation vor Typo- oder Manuskript
    - Inhaltliche Abweichungen der Vorstufen (ab Wortebene, in Ausnahmen auch Schreibweisen desselben Wortes) werden im Dokument-spezfifischen Anhang abgebildet