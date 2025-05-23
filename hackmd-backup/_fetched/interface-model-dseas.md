# Interface-Modell DSE AS

Dieses Dokument klärt die informationellen, editionsphilologischen und technischen Bedürfnisse (*requirements*) von zukünftigen Nutzenden der DSE AS und formuliert auf dieser Grundlage Funktionsaspekte des Interfaces (*specifications*), gegliedert nach ihrer Wichtigkeit und Notwendigkeit. Es beschreibt auf Konzeptebene, Details der Umsetzung werden in weiteren Dokumenten beschrieben, namentlich im: 
- [Editionsmodell](https://hackmd.io/@DSE-AS/Editionsmodell) (Codierung in TEI/XML) 
- [Registermodell](https://hackmd.io/@DSE-AS/SyjEFFl9yg) (Erarbeitung der Register und Register-Einzelseiten, div. tools)
- [Transkribus-Dokumentation](https://hackmd.io/@DSE-AS/Transkribus_Dokumentation) (Erarbeitung der Transkriptionen, Transkriptionsregeln)
- [Oxygen-Dokumentation](https://hackmd.io/@DSE-AS/H1aXACCi1g) (Erarbeitung der codierten Daten, Codierungsregeln) - noch am Anfang des Entstehens

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
Für die wissenschaftliche Forschung gilt grundsätzlich:
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


## 2. Präsentation der Edendum-Seite
Hier geht es nicht um inhaltliche Aspekte, sondern das angestrebte 'look and feel'. 
Der Aufbau bzw. Inhalt der Register wird unten (siehe [3.3](#33-Register-und-Registereinträge)) beschrieben, die Anforderungen an die Register sind in einem anderen hackmd-Dokument (https://hackmd.io/@DSE-AS/SyjEFFl9yg) gesammelt. Hier geht es u.a. um die Darstellung der Referenzierungen, welche in die Register führen. 

### 2.1 Anforderungen an die Präsentation des Edendums

- Modularität der Darstellungsweise = freie Wahl der drei Darstellungsformen: 
    - Digitalisat + diplomatische Transkription (zeilengenau) + Lesefassung
    -> Jedes einzeln oder frei kombinierbar
- Jedes Edendum muss per Cmd+F komplett durchsuchbar sein
- Konkordanz/Highlighting der Zeile im Digitalisat und der Zeile in der diplomatischen Transkription (Vorbild: Escher-Briefedition).
    - Vice-Versa: Klicken auf eine Textstelle im Faksimile zeigt die Stelle in der Transkription an (das wäre tatsächlich weitgehend neu).
    - Idealerweise auch ausschaltbar
    - Im Falle der Fotografien auch Konkordanzen von Regionen (s.u.) 
- **Referenzierungen** im Edendum: 
    - Sowohl in der diplomaptischen Transkription als auch in der Lesefassung default eingeblendet
    - Bei Wiederholung derseleb Entität in der Referenzierung: Ausblenden, wenn im selben Paragraphen mehrfach (die Einheit des Paragraphen scheint mir die sinnvollste, weil übersichtlichste, Seite scheint mir keine sinnvolle Größe)? 
    - Highlighting durch Hintergrundfarbe 
    - Popup beim Klicken auf den unterlegten Text (kein Hoovertext oder dann 'statischen Hoovertext', der aktiv weggeklickt werden muss)
    - Auf Wunsch ausblendbar
    - Problem von schönen, aber für Sehbehinderte schwer lesbare Highlights: Ev. Disability-Mode (v.a. falls es schon einfach implementierbare Modelle gibt)?
- Markierung der **Stellenkommentare** im Edendum
    - Sowohl in der diplomaptischen Transkription als auch in der Lesefassung default eingeblendet
    - Highlighting muss klar von Referenzierungen unterscheidbar sein, ggfls. weniger aufdringlich, da längere Passagen kommentiert werden können.
    - Beim Klicken auf das Highlighting kein Popup sondern Einblendung der Kommentarlaufleiste (s.u.) mit Hervorhebung des relevanten Kommentars 


### 2.2 Anforderungen an Präsentation der Paratexte (Metadaten, Kommentare und Referenzierungen)

Der Platz, wo und wie bestimmte Paratexte stehen, kann ggfls. nach Dokumenttyp variieren (s.u., [2.3](#23-Darstellungsmodi-nach-Dokumenttyp)). 

#### Metadaten
- Einheitliche Darstellung der Metadaten über oder neben dem Edendum, ggfls. ausklappbar. 
- Metadaten: Hier sind nur diejenigen Informationen im TEI-header aufgeführt, die als Referenz in die Register oder aus der Edition herausführen. Im Normalfall sind dies auch Informationen, die im Interface ersichtlich werden müssen. 
- **Gemeinsame Metadaten alle Dokumenttypen**
    - Schlagworte (Sachbegriffe)
    - Reise/Ereignis
    - Ggfls. 'Hauptort', um den sich der Text dreht (ist im Falle der Briefe nicht zwingend identisch mit Absendeort)
        - Hinter diesen Orten müsste nicht ein distinkter Registereintrag stehen, der sich von den ‘normalen’ Ortsreferenzen unterscheidet. Es wäre aber gut, wenn die Dokumente, die diese ‘Hauptorte’ im TEI-Header führen im Ortsregister besonders hervorgehoben werden und in einer geographischen Karte einen spezifischen Status gegenüber den üblichen Orts-Referenzen erhalten.
    - Archiverungsort (Verlinkung mit Findmitteln oder Digitalisaten, falls möglich)
    - Download-Links (TEI, Bild, ggfls. andere Formate)
    - IIIF-Manifest des Digitalisats
    - (Perma-)link des Digitalisats (falls nicht schon von Archivierungsort als Digitalisat z.V.g., s.o.); e-manuscripta, e-periodica, e-newpsaperarchive (u.ev.a.)
- **Metadaten der Briefe**
    - Absende- und Empfangsort
    - Absender:in und Empfänger:in
- **Metadaten der Kleinen Formen**
    - Publikationsmedium und Quellennachweis
    - Verweis auf Vorstufen oder Publikationen des Dokuments
- **Metadaten Bilder**
    - tbd, wenn Digitalisate vorhanden sind

#### Kommentare
- **Übersichtskommentare** sollten unter den Metadaten eingeblendet werden, ggfls ab einer gewissen Länge ausklappbar
- **Stellenkommentare** als Laufleiste neben dem Edendum (keine Hoover-Texte/Popups)
    - Vorbild: Microsoft Word, Kommentarmodus (dort zwei Darstellungmöglichkeiten: Liste oder Kontextbezogen - ev. liesse sich ein Kompromiss zwischne diesen Formen finden, z.B. eine scrollbare Liste, die sich auf knopfdruck wieder zurück zu den Kontexten ordnet?)
    - Problem der Laufleiste: Einschränkungen bei Mobiltelefonen. Dort könnte man sich am Google-Docs orientieren, die Kommentare in der unteren Bildhälfte einblendet (hier gibt es schon CSS-Skripts). 

#### Entitäten
- Zu den Werk-Entitäten gehören neben Werken Dritter auch edierte Dokumente von AS (Briefe, Kleine und Lange Formen, Fotografien). 
- **Übersichtsliste aller referenzierten Entitäten** tendenziell neben oder unter dem Edendum (abhängig von der Breite des Faksimiles) als stabile Sidebar
    - Die Liste ist nach 6 Entitätsarten-Reiter gegliedert, die ggfls eingeklappt werden können: Personen, Orte, Institutionen, Werke Dritter, Dokumente (Briefe, Kleine Formen, Fotografien, Grosse Formen) von Annemarie Schwarzenbach (Edenda), Events 
    - Neben jeder aufgelisteten Entität befindet sich ein klickbarer Pfeil zum Registereintrag.
    - Beim Klick _auf_ den Entitätslisteneintrag neben dem Edendum werden alle Vorkommnisse der Entitäten in der Transkription ausgeklappt; bei Klick auf eine Entität in dieser Unterliste wird die Textstelle angesteuert. Die Übersichtsliste sollte sichtbar bleiben, um sich durch die Vorkommnisse einer Entität 'hindurchklicken' zu können.  -> Tooltips, die diese Funktionen erklären!
    - Idealerweise können referenzierte Orte in einer vergrösserbaren Karte neben oder unter dem Edendum eingeblendet werden. Das würde die räumliche Orientierung der oftmals sehr umfangreichen geographischen Nennungen im Text sehr erleichtern. 
        - Nice to have: Heat-Map:  besonders oft erwähnte Orte werden stärker hervorgehoben auf der Karte, das könnte das (z.T. schwierige) Definieren eines 'Hauptortes'(s.o.) teilweise erübrigen.


### 2.3 Darstellungsmodi nach Dokumenttyp

#### a. Typo- oder Manuskript
In der Regel wird das Digitalisat gleich gross wie die Transkriptionen eingeblendet.

#### b. Zeitung / Zeitschrift
In der Regel sollte per default auf den transkribierten Bereich gezoomt werden. Zeitungsseiten können sehr gross sein und der relevante Bereich nimmt z.T. nur inen Viertel oder Fünftel davon ein.

#### c. Fotoreportage / Einzelbild(er) in Illustrierter
Fotoreportagen sind oftmals komplex aufgebaut; sie sollten zunächst immer ganz eingeblendet sein und je nach Bildschirmgrösse mehr Raum einnehmen als die Transkriptionen, zumal der gedruckte Text oft sehr gut leserlich ist (keine Fraktur). Wie die Transkriptionen eingeblendet werden, muss noch festgelegt werden, ggfls. ist es sinnvoll, mehrere Optionen auszuprobieren und den Nutzenden je nach usecase zur Verfügung zu stellen. 
- Einblendung der Transkription in einer Laufleiste, vergleichbar mit Kommentaren (dann hätten wir zwei Laufleisten, eine mit Transkriptionen und eine mit Stellenkommentaren)
- Einblendung der Transkription je nach Seitenbreite: 
    - Bei Centerfolds unter den Seiten
    - Bei Hochformat auf der Seite
- Einblendungen der Transkriptionen um das Digitalisat herum, abhängig von der Nähe zur transkribierten Textregion
    - Wahrscheinlich die schwierigste und fehleranfälligste Darstellungsweise, aber reizvoll. 
- Überblendung des Digitalisats mit Transkriptionen auf Wunsch
    - Auch das sehr komplex, könnte Lesbarkeit einschränken. Ist nur im Falle der diplomatischen Transkription sinnvoll. 
- Einzelne Fotografien in Illustrierten sollten möglichst zusammen mit dem Kontext dargestellt werden, in dem sie verwendet wurden, d.h. wenn möglich die ganze Seite wie im Falle der Fotoreportage. Da wenig Text eingeblendet werden muss (in der Regel eine Bildunterschrift), ist dessen Anordnung zweitrangig. 

#### d. Fotografie

Für die Darstellung der im Archiv vorliegenden Fotografien bzw. Negative ist neben der Einblendung der 




### 2.4 Intermediale Verweisen

##### In Texten ohne Fotografien

##### In Fotoreportagen
- Ev. selbstgesetzter figurehead als permanenter hoover-text 
    - Muss die Möglichkeit geben, zur Fotografie in das digitale Foto-Archiv mit einem Klick zu gelangen. 
- Alternative, ev. sogar besser: Darstellung des figureheads und seiner Verlinkung mit dem transkribierten Text der Autorin: Ggfls. schon mit Darsellung der Fotografie aus dem Foto-Archiv.

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
*evtl. eher ein Thema für einen Folgeantrag (projektübergreifend)*

### 4.5 Reiserouten als Visual storytelling (siehe sunset over sunset)