# Dokumentation Oxygen

[toc]

## 0. Vorbildhafte TEI-Dokumente des Projektes

Neben der Schritt-für-Schritt Anleitung in diesem Dokument bieten wir für jede Textform exemplarische TEI-Dokumente im WebDAV (zur Verwendung des WebDAV siehe [unten](#1-Verwendung-von-WebDAV)). An diesen Dokumenten können sich die Editor:innen hinsichtlich TEI-Header (soweit er manuell zu vervollständigen ist), Dokument-Struktur, Referenzierungen und Kommentierung orientieren. Ihnen sind auch Code-Beispiele für die Dokumentation entnommen. 

Die Dokumente haben wir zusätzlich durch XML-Kommentare angereichert. Sie können bei Unklarheiten durch die [Oxygen-Kommentarfunktion](#Korrekturlesen-Autor-Editor) von Euch mit Rückfragen angereichert werden. 

### 0.1 Kleine Formen

- **Zeitungsartikel mit Zwischentitel**: _BEI STUDENTEN IN VIER LÄNDERN_ = smallform_0226
    - Spalten 
    - viele Ortreferenzen
    - historisch-politische Kommentierung
- **(Reise-)Feuilleton mit Untertitel**: _Baltisches Tagebuch I: Kaunas, die Hauptstadt einer „ersten Generation"._ = smallform_0227
    - Spezialfall: Redaktioneller Text zwischen Titel und Untertitel
- **Rezension**: _ 
    - Spalten 
    - viele Werk-Referenzen
    - Kommentierung von Intertextualität
- **Fotoreportage**: _Studenten - in drei Ländern_ = smallform_0270
    -  Textblöcke = Spalten
    -  Fotografien (mit Referenzierung auf Fotografien im Archiv)  
    -  Bildunterschriften 
    -  Kommentierung Intermedialität
- **Fotografie in Illustrierter**: 
    - Spezialfall einer einzelnen Aufnahme
- **Typoskript** : _Ruth_ = smallform_0607 
    - Spezialfall: enthält Prosa und Verse
    - Zur Zeit (März 25) noch vernachlässigbar
    -> Kleine Formen-Typoskripte werden voraussichtlich ab Sommer 25 in grösserer Zahl vorliegen 

### 0.2 Briefe 
- Brief mit Umschlag: 
- Postkarte:
- Telegramm: 

## 1. Verwendung von WebDAV

Neue Dokumente

### 1.1 Ordnerstruktur


### 1.2 Bearbeitungsregeln: Sperren von Dokumenten

## 2. TEI-Header

## 3. Strukturelle Auszeichnung (Text-Editor)

### 3.1 Grundstruktur Briefe 
### 3.2 Grundstruktur Kleine Formen
- Titel/Untertitel/Zwischentitel
- Spalten
- Bilder
### Seiten
### Paragraphen
### Zeilen
### Verse

## 4. Auszeichnungen von Renderings und Texteingriffen (Text- oder Autor-Editor)

### Zeilenbrüche

### Kursivierung, fett, gesperrt, unterstrichen, hochgestellt

### Sofortkorrekturen durch Autorin

### Unleserlicher Text (wegen Handschrift/Zerstörung)

### Korrekturen/Emendation druch Editor:innen

## 5. Inhaltliche Auszeichnung (Autor-Editor)

### Übersichtskommentar im TEI-Header

Was der Übersichtskommentar NICHT ist: Kein Regest bzw. keine Zusammenfassung des Inhalts. Inhaltliche Aspekte können hervorgehoben werden, wenn sie für die Kontextualisierung notwendigerweise referiert werden müssen. 

Aufbau des Übersichtskommentars: 
- **Entstehungskontext**: In der Regel biographische Kontexte wie Reise/Lebenssituation/Konflikt/Thema/Freundschaft etc.  Ästhetische/literarischen Eigenarten, wenn relevant (z.B.: ästhetisierende/narrativierende Wiederaufnahme eines zuvor sachlich-journalistisch bearbeiteten Themas).
- **Publikationskontext** (falls publiziert): Thematisch ähnliche Publikationen; Hintergründe, warum Publikation in diesem Medium/zu dieser Zeit.
- **Historischer Kontext** (falls relevant): Breitere Einbettung in Zeitgeschichte (z.B.: Anschluss von Österreich).  

#### Referenzierungen in Textstellen-Kommentar
Alle Entitäten im Übersichtskommentar werden konsequent referenziert. 

### Verschlagwortung im TEI-Header

### Ortsangaben im TEI-Header

#### Briefe

#### Kleine Formen

### Referenzierung von Entitäten

### Kommentierung von Textstellen

Die Textstellen-Kommentare werden auch dazu verwendet, auf Fotografien im Archiv zu verweisen, die unmittelbar einen Bezug zu dieser Textstelle haben. 

#### Referenzierungen in Textstellen-Kommentar


## Korrekturlesen (Autor-Editor)
Hierfür kann der Oxygen-eigene Korrektur- und Kommentarmodus im Autor-Editor verwendet werden. Er besitzt weitgehend dieselben Funktionalitäten wie der Korrekturmodus von Word. 
![grafik](oxygen-docu/BJSX2mkhJg.png)
:::warning
Nach dem Korrekturlesen müssen alle in diesem Modus erstellten Kommentare/Korrekturen angenommen/verworfen werden!
:::

Alternativ können auch XML-Kommentare folgendermaßen eingefügt werden: 

``` xml
  <!--Das ist ein XML-Kommentar-->
```

Bei Problemen/Unklarheiten, die auch im Korrekturlesen nicht gelöst werden konnten, empfiehlt es sich im Notfall, diese Form des Kommentars stehen zu lassen. 




