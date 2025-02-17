# Interface-Modell DSE AS

Mögliche Tools zur Erweiterung dieses Dokumentes (z.B. für erste wireframes): 
- https://asciiflow.com
- https://monosketch.io
- https://www.archimetric.com

**Inhalt**

[toc]

## 1. Voraussetzungen
Was sind die Bedingungen, die das Design des Interfaces bestimmen/begrenzen. 

### 1.1 Nutzende/ Nutzergruppen

**Forschende**
- Annemarie Schwarzenbach: 
    - Interesse an biographischen Ressourcen und Kontexten. Fokus auf (unveröffentlichte/schwer zugängliche) Briefe und Lebensdokumente.  
- Print-Medien-Forschung: 
    - Interesse an Zeitschriften, Verlagen, Publizist:innen. 
    - Möglicherweise mediale Praktiken (Interaktion von AS mit genannten Stakholdern). 
    - Historische Hintergründe der einzlenen Printmedien und der Medienlandschaft (primär der Schweiz) = Mediengeschichte.  
    - Unterinteressen: 
        - Feuilleton-Forschung.
        - Schweizer Verlagsgeschichte (z.B. Projekt Rober Leucht) 
- Intermedialitäts-Forschung: 
    - Zusammenspiel von Bild und Text (hier besonders Fotografien von AS, vereinzelt Zeichnungen von anderer Hand)
        - Werkgenetische Zusammenhänge durch Kommentare und Verweise (Referenzen innerhalb der Edition, idealerweise mit Einblendung des Bildes im Kommentar)
        - Materielle Zusammenhänge durch Edition der Fotografien mitsamt allem Text (dieser muss durchsuchbar sein)
        - Publizistischer Zusammenhang durch die Mit-Edition der Fotografien (’eigener’ Titel, Bildunterschriften zuordnen, auch publizierte Fotos ansteuerbar machen? = Register von Fotografien *in* Publikationen)
        - Korrespondenz-Zusammenhang durch durchsuchbare Metadaten zum Verwendungszweck der Fotografie (Beilage Brief, Vorderseite Postkarte, zur Veröffentlichung bestimmt, aufgrund Wunsch d. Angeschriebenen, als Erinnerungsstück)
- Reise(-literatur)-Forschung: 
    - Reisepraktiken und ihre (inter-)mediale Darstellung. 
    - Nachvollziehbarkeit der Reisen (Geographie). 
- Archäologie: 
    - (Inter-)mediale Darstellung von besuchten Ausgrabungsstätten, mediale Vermittlung von archäologischem Wissen der Zeit.
    - Ev. Verknüpfung mit Archäologie-Datenbanken?
- Linguistik: 
    - Medienlinguistik: Ähnliche Interessen wie die Print-Medien-Forschung. 
    - Korpuslinguistik (Gender, Sprachwandel, Pragmatik etc.): Interesse an 'rohen Texten' (ohne TEI/XML-Annotationen), verarbeiten m.W. Text selber weiter (keine bestimmte Ausgabemöglichkeiten nötig).  
- Archive: 
    - Abgleich mit eigenem Material, schnelle Auffindbarkeit der Originaldokumente in ihren Archivstandorten (direkte Verlinkung mit Findmitteln - nice to have?). 
- Kunst- und Fotogeschichte: tbd


### 1.2 Personelle und finanzielle Ressourcen

### 1.3 Technische Wartbarkeit

### 1.4 Accessibility 

## 2. Präsentation des Edendums

### 2.1 Darstellungsmodi nach Dokumenttyp

#### a. Typo- oder Manuskript

#### b. Zeitung / Zeitschrift

#### c. Fotoreportage / Einzelbild(er) in Illustrierter

#### d. Fotografie

### 2.2 Referenzen

#### a. Ebene Einzeldokument = TEI-header

Hier sind nur diejenigen Informationen im TEI-header aufgeführt, die als Referenz in die Register oder aus der Edition herausführen. Im Normalfall sind dies auch Informationen, die im Interface ersichtlich werden müssen. 

**Alle Dokumenttypen**
- Schlagworte
- Schreibort (auch für Kleine Formen, falls bekannt!) (ist nicht Abesendeort!)
- Archiverungsort (Verlinkung mit Findmitteln oder Digitalisaten, falls möglich)
- IIIF-Manifest des Digitalisats
- (Perma-)link des Digitalisats (falls nicht schon von Archivierungsort als Digitalisat z.V.g., s.o.); e-manuscripta, e-periodica, e-newpsaperarchive (u.ev.a.)
- 

**Kleine Formen**
- 

### 2.3 Kommentare

### 2.4 Intermediale Verweisen

### 2.5 Zitierhinweis Einzeldokument

### 2.6 Downloadoptionen Einzeldokument

### 2.7 Lizenzierung Einzeldokument

## 3. Notwendige Funktionen / Seiten (vom Edendum entkoppelbar)

### 3.1 Einstieg / Startseite

### 3.2 Suchfunktionen

### 3.3 Register (und Registereinträge)

### 3.4 Landkarte

### 3.5 Zeitstrahl

### 3.6 Zitierhinweis Gesamtedition 

### 3.7 Downloadoption Gesamtedition

### 3.8 Dokumentation

### 3.9 Impressum / Lizenzierung Gesamtedition

### 3.9 sitemap

### 3.10 beacons

### 3.11 Link-Seite


## 4. Funktionen Nice to have

### 4.0 Bibliographische Information als Embedded Metadata

- ContextObjects in Spans (COinS)
- Sowohl auf Ebene der Gesamtedition (Startseite) als auch auf Ebene der Einzeldokumente. 
- Ansteuerbar über Zotero-Browser-Plugin (u.ä.). 

### 4.1 Downloadoptionen für Editionsteile / custom downloads

### 4.2 Aufsätze/Vorträge rund um die Edition (Forschungsoutput)

Ggfls. bereits mit Links in die Edition. Vorbild wären die Essays bei Humboldt online. 
Auch die Monographie, die Daniela und Elias über AS schreiben, könnte als mit direkten Links versehen werden. 

### 4.3 Textgenetische Vergleiche (Implementierung von textkritischen Werkzeugen)

Div. Werkzeuge zu textgenetischen Vergleichen werden vermutlich im Zusammenhang mit der Doktorarbeiten getestet. Sollte sich eines als besonders ergiebig und einfach implementierbar erweisen, wäre das eine interessante Möglichkeit, auch Nutzenden die Möglichkeit zu geben, selbst textgenetische Vergleiche anzustellen. 

### 4.4 Text to speech

### 4.4 DSE-AS-AI ('Frag die Edition')