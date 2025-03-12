# Interface-Modell DSE AS

Dieses Dokument klärt die informationellen, editionsphilologischen und technischen Bedürfnisse (requirements) von zukünftigen Nutzenden der DSE AS und formuliert auf dieser Grundlage Funktionsaspekte des Interfaces (specifications), gegliedert nach ihrer Wichtigkeit und Notwendigkeit. Es beschreibt auf Konzeptebene, Details der Umsetzung werden in weiteren Dokumenten beschrieben, namentlich im: 
- [Editionsmodell](https://hackmd.io/@DSE-AS/Editionsmodell) (Codierung in TEI/XML) 
- [Registermodell](https://hackmd.io/@DSE-AS/SyjEFFl9yg) (Erarbeitung der Register und Register-Einzelseiten, div. tools)
- [Transkribus-Dokumentation](https://hackmd.io/@DSE-AS/Transkribus_Dokumentation) (Erarbeitung der Transkriptionen, Transkriptionsregeln)
- [Oxygen-Dokumentatio](https://hackmd.io/@DSE-AS/H1aXACCi1g) (Erarbeitung der codierten Daten, Codierungsregeln) - noch am Anfang des Entstehens

Mögliche Tools zur Erweiterung dieses Dokumentes (z.B. für erste wireframes): 
- https://asciiflow.com
- https://monosketch.io
- https://www.archimetric.com

**Inhalt**

[toc]

## 1. Voraussetzungen
Was sind die Bedingungen, die das Design des Interfaces bestimmen/begrenzen.? 

### 1.1 Nutzende/ Nutzendegruppen

#### **a. Wissenschaftlich Forschende/Nutzende**
Für die wissenschftliche Forschung gilt grundsätzlich:
- Zitierbarkeit des Primärtextes und Referenzierung relevanter Intertexte und Forschungsliteratur als Quellen

- Annemarie Schwarzenbach: 
    - Interesse an biographischen Ressourcen und Kontexten. Fokus auf (unveröffentlichte/schwer zugängliche) Briefe und Lebensdokumente  
- Print-Medien-Forschung: 
    - Interesse an Zeitschriften, Verlagen, Publizist:innen 
    - Möglicherweise mediale Praktiken (Interaktion von AS mit genannten Stakeholdern) 
    - Historische Hintergründe der einzlenen Printmedien und der Medienlandschaft (primär der Schweiz) = Mediengeschichte  
    - Unterinteressen: 
        - Feuilleton-Forschung
        - Schweizer Verlagsgeschichte (z.B. Projekt Robert Leucht) 
- Intermedialitäts-Forschung: 
    - Zusammenspiel von Bild und Text (hier besonders Fotografien von AS, vereinzelt Fotografien/Zeichnungen von anderer Hand)
        - Werkgenetische Zusammenhänge durch Kommentare und Verweise (Referenzen innerhalb der Edition, idealerweise mit Einblendung des Bildes im Kommentar)
        - Materielle Zusammenhänge durch Edition der Fotografien mitsamt allem Text (dieser muss durchsuchbar sein)
        - Publizistischer Zusammenhang durch die Mit-Edition der Fotografien (’eigener’ Titel, Bildunterschriften zuordnen, auch publizierte Fotos ansteuerbar machen? = Register von Fotografien *in* Publikationen)
        - Korrespondenz-Zusammenhang durch durchsuchbare Metadaten zum Verwendungszweck der Fotografie (Beilage Brief, Vorderseite Postkarte, zur Veröffentlichung bestimmt, aufgrund Wunsch d. Angeschriebenen, als Erinnerungsstück)
- Reise(-literatur)-Forschung: 
    - Reisepraktiken und ihre (inter-)mediale Darstellung 
    - Nachvollziehbarkeit der Reisen (Geographie) 
- Archäologie: 
    - (Inter-)mediale Darstellung von besuchten Ausgrabungsstätten, mediale Vermittlung von archäologischem Wissen der Zeit.
    - Ev. Verknüpfung mit Archäologie-Datenbanken?
- Linguistik: 
    - Medienlinguistik: Ähnliche Interessen wie die Print-Medien-Forschung. 
    - Korpuslinguistik (Gender, Sprachwandel, Pragmatik etc.): Interesse an 'rohen Texten' (ohne TEI/XML-Annotationen), verarbeiten m.W. Text selber weiter (keine bestimmte Ausgabemöglichkeiten nötig).  
- Archive: 
    - Abgleich mit eigenem Material, schnelle Auffindbarkeit der Originaldokumente in ihren Archivstandorten (direkte Verlinkung mit Findmitteln - nice to have?). 
    - Ev. ähnliche Funktionen wie sie für das Becher-Portal entwickelt werden?
- Kunst- und Fotogeschichte: z.T. durch Intermeidalitätsforschung abgedeckt (s.o.), tbd

#### **b. Literaturvermittler:innen und Journalist:innen**
- Schnell auffindbare Einleitungen, Kontaktangaben zum Team
- Ev. Elemente des 'storytellings', die ggfls. mit aktuellen Themen im Zusammenhang stehen
- Ev. Angebote zur Zusammenarbeit prominent präsentiert

#### **c. Lehrpersonen**
- Ev. Elemente des 'storytellings', die auf ein jüngeres Publikum zugeschnitten sind
- Ev. Angebote zur Zusammenarbeit mit Schulen (primär Gymnasien) gut erkennbar

#### **d. Interessierte Öffentlichkeit**
- Einfache Zugangsmöglichkeiten zu den Inhalten
- Kommentierung mit minimaler - und dann erläuterter - wissenschaftlicher Fachterminologie
- Kurze erläuternde und zusammenfassende Einleitungen ('readers digest') zu den versch. Editiongattungen (warum nennen wir es 'Kleine und Grosse Formen', was ist interessant an den Briefen?)

#### **e. Nutzende einer zukünftigen Studienausgabe**
Dies betrifft potentiell alle oben aufgeführten Nutzendengruppen. 
- Identische Titel, deren schnelle Auffindbarkeit ggfls. nach Bänden (Studienausgabe-Register, das die Inhaltsverzeichnisse auf die DSE mapped?) 
- Verweise von der DSE in die Studienausgabe (umgekehrt wäre abzuraten)

### 1.2 Zeitliche, personelle und finanzielle Ressourcen

Bis 2028 werden im Rahmen des SNF-Projektes die Kleinen Formen und Briefe ediert und mithilfe des DSL das Interface (weiter-)entwickelt. Erste Ergebnisse/Überlegungen zum Interface sollen am 5. September 2025 dem editorischen Beirat gezeigt werden. Erste Publikationen in der DSE im Verlaufe von 2026 wären ideal.  

Angesichts der Ressourcen (bislang keine externe Webdesign-Expert:innen vorgesehen) ist das Hauptziel bis 2028 ein funktionales Interface ohne letzten Feinschliff. Im Zug der Komplettierung der DSE um die Grossen Formen 2028-2030 (digitale Gesamtausgabe), für die laufend Gelder akquiriert werden, sollen weitere Ressourcen zur Verbesserung des Interfaces eingesetzt werden. 
    - Idealerweise geschieht die Verfeinerung des Interfaces von 2028-2030 im Hinblick und Zuschnitt auf auf eine größere, von der SAGW (teil-)finanzierte DSE-Plattform (Schweizer Literatur der Ränder: Schwarzenbach, Ceresa, Becher, ev. Spiry oder andere ZB-Bestände). 

### 1.3 Technische Wartbarkeit

Einfache Wartbarkeit, Zitat SNF-Antrag, S. 13f.: 

:::info


Die digitale Edition als Webanwendung: Die so erarbeiteten Metadaten und Transkriptionen bilden die Datengrundlage für die Webpräsentation der Edition, die in modularem Ansatz mit klar definierten internen Schnittstellen aufgebaut wird (Trennung von Backend, Frontend und Suchindex). Dabei wird der Ansatz ver folgt, möglichst viele Komponenten bzw. Repräsentationsformate vorzugenerieren, so dass nur sehr grundle-
gende Anforderungen an die Serverinfrastruktur entstehen. Modellcharakter haben hier z.B. die Endings Principles for Digital Longevity (https://endings.uvic.ca/principles.html) oder die Sturm-Edition (https://sturm-edition.de/ressourcen/software.html).

Indem der Wartungsaufwand in engen Grenzen bleibt und kaum anwendungsspezifische Sicherheitslücken entstehen können, lässt sich die langfristige Betreuung durch eine:n fachlich nicht-involvierte:n, nicht spezialisierte:n Webmaster:in leisten. Der skizzierte Ansatz harmoniert überdies gut mit einem auf Versionsständen basierenden Publikationsworkflow, wie er in der Webentwicklung in jüngerer Zeit grosse Verbreitung gefunden hat (CI/CD-Ansatz; continuous integration/continuous delivery).
:::


### 1.4 Accessibility/Barrierefreiheit 

Zur Frage der Accessibility für Menschen mit Einschränkungen/besonderen Bedüfnissen bestehen zurzeit noch keine konkreten Vorstellungen. Als nice-to-have ist eine Audio-Text-Ausgabe angedacht (s.u., 4.4.). 
Handreichungen mit wichtigen Punkten für die Barrierefreiheit von DSE hat das ZDE erarbeitet: https://www.zde.uzh.ch/dam/jcr:c09a0418-1013-418e-bb06-3b960ecc468d/2024_UB_ZDE_KeyVisual_Handreich_A5_barrierefrei_digital.pdf


## 2. Präsentation des Edendums

### 2.1 Darstellungsmodi nach Dokumenttyp

#### a. Typo- oder Manuskript

#### b. Zeitung / Zeitschrift

#### c. Fotoreportage / Einzelbild(er) in Illustrierter

#### d. Fotografie

### 2.2 Referenzen

Der Aufbau bzw. Inhalt der Register selbst wird unten beschrieben, die Anforderungen an die Register sind in einem anderen hackmd-Dokument (https://hackmd.io/@DSE-AS/SyjEFFl9yg) gesammelt. Hier geht es um die Darstellung der Referenzierungen, welche in die Register führen. 

#### a. Ebene Einzeldokument = TEI-header

Hier sind nur diejenigen Informationen im TEI-header aufgeführt, die als Referenz in die Register oder aus der Edition herausführen. Im Normalfall sind dies auch Informationen, die im Interface ersichtlich werden müssen. 

**Alle Dokumenttypen**
- Schlagworte
- Schreibort (auch für Kleine Formen, falls bekannt!) (ist nicht Abesendeort!)
- Archiverungsort (Verlinkung mit Findmitteln oder Digitalisaten, falls möglich)
- IIIF-Manifest des Digitalisats
- (Perma-)link des Digitalisats (falls nicht schon von Archivierungsort als Digitalisat z.V.g., s.o.); e-manuscripta, e-periodica, e-newpsaperarchive (u.ev.a.)


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

Angestrebt wird (SNF-Antrag, S. 14): ein flexibles Suchinterface, mit dem sich neben Volltexten und Metadaten auch der Kommentar durchsuchen lässt. 

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