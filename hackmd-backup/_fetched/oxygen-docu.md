# Dokumentation Oxygen

Das vorliegende Dokument führt durch den Editionsprozess in Oxygen, in dem es versucht, dessen Arbeitsschritte chronologisch abzubilden. Der Ablauf folgt der Grundregel, dass strukturelle und formale Aspekte vor inhaltlichen Aspekten ediert sein müssen, um keine vorschnelle inhaltliche Schlüsse aus einer vermeintlichen Form zu treffen. 

Die Anleitung führt in Untertiteln auf, ob der Editionsschritt in der Regel im Code (Text-Editor) oder in der Benutzeroberfläche (Autor-Editor bzw. Framework) geschieht. Damit ist primär die arbeitsergonomisch beste Editionsumgebung bezeichnet; abgesehen vom Referenzieren der meisten Entitäten (die nur im Autor-Editor geschehen kann, weil dort externe Ressourcn abgefragt werden können), sind alle Editionsschritte auch im Text-Editor möglich. Sind sie alos einfacher im Autor-Editor zu machen, wird der Code dahinter hier nicht ausgeführt, er findet sich jedoch immer im [Editionsmodell Edition Annemarie Schwarzenbach](/ccjyBww-TpSE6ivZjWDPig) dokumentiert. Der Einbezug dieses Dokuments erlaubt es - die Entitätenreferenzierung ausgenommen - bei Ausfall des Autor-Editors komplett im Text-Editor zu edieren.


[toc]

## 0. Vorbildhafte TEI-Dokumente des Projektes

Neben der Schritt-für-Schritt Anleitung in diesem Dokument bieten wir für jede Textform exemplarische TEI-Dokumente im WebDAV (zur Verwendung des WebDAV siehe [unten](#1-Verwendung-von-WebDAV)). An diesen Dokumenten können sich die Editor:innen hinsichtlich TEI-Header (soweit er manuell zu vervollständigen ist), Dokument-Struktur, Referenzierungen und Kommentierung orientieren. Ihnen sind auch Code-Beispiele für die Dokumentation entnommen. 

Die Dokumente haben wir zusätzlich durch XML-Kommentare angereichert. Sie können bei Unklarheiten durch die [Oxygen-Kommentarfunktion](#Korrekturlesen-Autor-Editor) von Euch mit Rückfragen angereichert werden. 

### 0.1 Kleine Formen

Alle Varianten des TEI-Headers: https://dav.annemarie-schwarzenbach.ch/sandbox/examples/teiheader_smallform.xml

- **Zeitungsartikel mit Zwischentitel**: _BEI STUDENTEN IN VIER LÄNDERN_ = smallform_0226
    - Spalten 
    - viele Ortreferenzen
    - historisch-politische Kommentierung
- **(Reise-)Feuilleton mit Untertitel**: _Baltisches Tagebuch I: Kaunas, die Hauptstadt einer „ersten Generation"._ = smallform_0227
    - Spezialfall: Redaktioneller Text zwischen Titel und Untertitel
- **Rezension**: _Abenteuer von Klaus Mann_ = smallform_0011  
    - Spalten 
    - Werk-Referenzen
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

-> Wir brauchen auch noch ein Beispiel eines Textes mit Fussnoten im Original. 

### 0.2 Briefe 
- Brief mit Umschlag: 
- Postkarte:
- Telegramm: 

## 1. Verwendung von WebDAV

### 1.0 Installation des WebDAV

Optionen -> Einstellungen -> Datenquellen -> Verbindungen -> + [NEU]
![grafik](oxygen-docu/ryTJwOtpJg.png)


(Dataillierte WebDAV-Anleitung von Oxygen:https://www.oxygenxml.com/doc/versions/27.0/ug-editor/topics/configure-webdav-connection.html)

Einstellungen bei der Generierung einer neuen Verbindung:

- Hostname: https://dav.annemarie-schwarzenbach.ch  oder https://reverse-proxy.jcloud.ik-server.com/
- Benutzer: `dseas-dav`
- Passwort: `T0dInP3rsi3n`
![grafik](oxygen-docu/SJxsGdYTyl.png)


### 1.1 Export aus Transkribus
Vor der Benutzung von Oxygen müssen die Dokumente aus Transkribus exportiert und konvertiert werden. Hierfür verwenden wir die entsprechende [Export-Github-Issue](https://github.com/dse-as/workflow_IIIF-ATR-TEI/issues). Das Resultat sind jeweils zwei XML-Dateien im Ordner https://github.com/dse-as/workflow_IIIF-ATR-TEI/blob/main/_generated/2-base-TEI: die eigentliche TEI-XML-Datei mit der Form 'ProjektID.xml' (z.B. letter_0201.xml) und eine Datei mit den Koordinaten, die zurück auf das Digitalisat verweist, mit der Form 'ProjektID_facs.xml' (z.B. letter_0201_facs.xml). 

Beide Dateien müssen lokal (zwischen-)gespeichert werden (oder es gibt eine lokale Synchronisation via GitHub-Desktop, die das sicherstellt).

### 1.2 Upload in WebDAV-Ordnerstruktur

Beide auf GitHub erzeugten Dateien werden in entsprechende Ordner des WebDAV geladen, die analog aufgebaut sind: 
- TEI-Datei: 
    - Überordner aller TEI's: https://dav.annemarie-schwarzenbach.ch/data/sources/tei
    - Unterordner für die smallform-TEI's: https://dav.annemarie-schwarzenbach.ch/data/sources/tei/smallforms/
    - Unterordner für die letter-TEI's: https://dav.annemarie-schwarzenbach.ch/data/sources/tei/letters
        ->Beide Unterordner sind weiter unterteilt in nummerierte Ordner, die jeweils 100 Dateien umfassen solle: smallform/00 = smallform_0001 - smallform_0099; smallform/01 = smallform_0100 - smallform_0199 etc. 
- Faksimile-Datei: https://dav.annemarie-schwarzenbach.ch/data/sources/facs
    -> Die restlichen Unterordner sind analog aufgebaut

Mithilfe obiger Links lässt sich das WebDAV bzw. die darin enthaltenen Dateien übrigens auch über einen Browser durchsehen, jedoch nicht bearbeiten.  

### 1.3 Bearbeitungsregeln: Sperren von Dokumenten etc.

:::warning
Bei der Arbeit im WebDAV ist zu beachten, dass in der Regel nur eine Person eine Datei auf Oxygen geöffnet haben kann (ist eine Datei - vom user selbst oder von jemand anderem - geöffnet, ist es mit einem Schloss-Symbol versehen. 
:::


- Achtung: Der Dateibaum aktualisiert sich nicht automatisch, sondern bildet Initialzustand ab; d.h. zuweilen sieht man das Schloss nicht. Man kann aber immer verzeichnisweise neu laden (markieren und `F5`)
- Unabhängig davon, ob das Schloss-Symbol angezeigt wird, erscheint beim Öffnen eine Locking-Warnung. Die sollte nur ganz bewusst weggeklickt werden; normalerweise “Cancel” wählen und mit der Person, die in der Warnung angegegeben wurde, Kontakt aufnehmen (es kann sein, dass das Dokument nur aus Versehen noch geöffnet war und freigegeben werden kann).
- Dasselbe gilt für das Entsperren im Kontextmenü (d.h. nicht durch Doppelklick, sondern durch Rechtsklick) - nur im Notfall machen und auch dann nur, wenn die sperrende Person informiert wird

## 2. Metadaten im TEI-Header

Für diesen und alle weiteren Editionsschritte ist es oftmals sinnvoll, das Digitalisat bzw. Faksimile zum Abgleich der vorhandenen (Meta-)Daten herbeizuziehen (z.B. auf einem separaten Bildschirm). Das Digitalisat kann mit folgendem Button im Autor-Modus in einem IIIF-Viewer im Browser aufgerufen werden: 
![grafik](oxygen-docu/SJeDkAKTkl.png)
Alternativ kann das Dokument auch auf Transkribus in der Collection dse-as_finished aufgerufen werden; es ist jedoch zu beachten, dass es dort nicht mehr bearbeitet werden sollte, da der Arbeitsstand auf Transkribus nicht mehr abgerufen wird. 

Grundsätzlich gilt es, im Autor-Modus die Maske des TEI-Headers auf der Grundlage des Digitalisates, des tranksribierten Textes und der bereits vorhandenen Metadaten im Index zu befüllen. Im Text-Mode, d.h. im Code, muss überprüft werden, ob die Informationen auch dort korrekt auftauchen (z.B. keine Einträge verdoppelt sind, das kann in der Datumsmaske passieren). 

:::info
Zur Zeit sind noch nicht alle Masken für den TEI-Header im Framework. Für die bibliographischen Angaben der Dokumente, die mit dem Edendum zusammenhängen (publizierte Textstufe, Zweitpublikation zu Lebzeiten, posthume Editionen etc.) muss deshalb im Moment noch das jeweilige Code-Snippet im Text-Editor eingefügt und befüllt werden. 
Der entsprechende Code findet sich für die Kleinen Formen in folgendem exemplarischen TEI/XML: https://dav.annemarie-schwarzenbach.ch/sandbox/examples/teiheader_smallform.xml
Für die Briefe ist nur der Code für posthume Editionen und Übersetzungen relevant, auch dieser kann aus obigem XML entnommen werden. 
:::

Folgende **Regeln** sind zu beachten: 

### 2.1 Metadaten Kleine Formen
- Titel: Werktitel im Titel werden durch `<hi>[Werktitel]</hi>` hervorgehoben
- Datum von Typoskripten und Manuskripten: Bei einem Entstehungszeitrum wird das Enddatum eingetragen

### 2.2 Metadaten Briefe
- Poststempel werden wie Datierung durch Absender:innen behandelt und in der Maske "Schreibdatum" eingefügt. Wo Poststempel und Datierung durch Absender:innen vorliegen und voneinander abweichen, ist letzteres Datum vorzuziehen  
- Eruierte Absendedaten (die nicht aus einem Poststempel hervogehen) werden in eckigen Klammern eingefügt und im Übersichtskommentar erläutert


Mit dem Ausfüllen der Maske 'Übersichtskommentar', der keine normierten Metadaten, sondern freie philologische Ausführungen enthält, kann zwar schon begonnen werden. Jedoch ist es in den meisten Fällen nötig, nach Abschluss aller anderen Editionsschritte in Oxygen nochmals zum Übersichtskommentar zurückzukommen. Zu Grundregeln des Übersichtskommentars siehe unten, [5.4](#54-Übersichtskommentar-im-TEI-Header), dasselbe gilt für die Verschlagwortung im TEI-Header, s.u, [5.3](#54-Übersichtskommentar-im-TEI-Header).   

Für smallforms gibt es die folgende Ausnahme, die Ergänzungen im Code benötigen:


### 2.3 Spezialfall: Kleine Formen als Typoksript oder Manuskript (aus Archiv)
Im Falle von smallforms aus dem Archiv wird dem Header nicht automatisch ein msIdentifier hinzugegeben (weil über die Hälfte der smallforms publiziert sind und nicht aus Archiven stammen). Bei smallforms aus Archiven wird deshalb händisch folgender Code ganz zu Beginn von `<sourceDesc>` hinzugefügt (TEI verlang, dass es am Anfang steht): 

```
<sourceDesc> 
    <msDesc> 
       <msIdentifier> 
          <repository/>
           <collection/>
           <idno/>
        </msIdentifier>
     </msDesc>

     <!--other sourceDesc stuff goes here-->
     
</sourceDesc>
```

Weitere Informationen im `<sourceDesc>` bei Archiv-Material: 
`<title level="u"/>`: steht für 'unpublished', damit ist die unpublizierte Textstufe gemeint (nicht, dass gar keine Textstufe publiziert wurde)
`<biblScope></biblScope>`: hier wird gewöhnlich die Seitenzahl eingefügt, im Falle von Archivmaterial kann die Kollation eingefügt werden (z.B. 4 S. Ts. m. hs. Korr.)

Danach kann in den Autor-Modus gewechselt werden und die Archivinformationen können dort in der Maske ausgefüllt werden. Das Feld "Zeitschrift" wird freigelassen. 
Eine Schematron-Regel überprüft zusätzlich, ob alle smallforms des Typs "manuscipt" und "typoscript" den msIdentifier aufweisen. 

## 3. Strukturelle Auszeichnung

Nach Upload ins WebDAV und befüllen der Metadaten im TEI-Header wird im Code die Struktur des Textes festgehalten (auch der Autor-Modus, d.h. das Framework erlaubt punktuell eine Strukturierung, jedoch nur beschränkt). 

### 3.1 Grundlegende Strukturen (für Briefe *und* Kleine Formen)

#### a. Seitenbeginn und Zeilenbrüche (Autor-Editor)

**Seitenanfänge** sind in der Regegel schon aus dem Transkribus-Import vorhanden, können wenn nötig mit folgendem Framework-Button eingefügt werden: 
![grafik](oxygen-docu/SJJa6Hc6Jx.png)

Bei jedem Seitnbeginn erscheint im Fliesstext folgendes Zeichen mit befüllbarer Maske: 
![grafik](oxygen-docu/BkZBCS56ke.png)
Die Textmaske wird nur befüllt, wenn eine Seitenzahl auf dem Dokument lesbar ist (abgebildet wird also nicht die projekteigene Seitenzählung, die geht bereits aus der automatischen Zählung der Digitalisate hervor). 

#### b. Paragraphen (Text-Editor)

Paragraphen können zwar durch custom-taggings in Transkribus vorbereitet werden, an vielen Stellen müssen sie jedoch auch dann noch im Code angepasst werden.  
- Bei custom-tagging von \p\ bzw. \:p\ mit \fml\, um paragraphen-tags bei Seitenumbrüchen als temporär zu markieren: Dort muss nun sowohl die FML-Warnung als auch der Paragraph selbst wieder gelöscht werden.
- Wo in Transkribus keine customtagging für Paragraphen verwendet wurde (weil die Paragraphen-Struktur z.B. sehr einfach ist, und sich Paragraphen über mehrere Seiten hinziehen wie bei vielen Briefen, oder weil andere tags wie head, byline, dateline etc nötig werden): Hier umschliesst die Konversion automatisch alle unvertaggten Text mit einem temporären Paragraphen und FML-Wrapper. 
    - Entweder muss nur die FML-Warnung gelöscht werden
    - Oder der Absatz muss mit dem korrekte Wrapper umschlsosen werden (zu den diversen Taggings von spezifischen Grundstrukturen, s.u.)

#### c. Zeilen und Silbentrennung (Autor-Editor)

Zeilen werden direkt aus der automatisierten Zeilenerkennung von Transkribus importiert. Sollte bei der Korrektur in Tranksribus ein Fehler unterlaufen sein, können Zielen mit folgendem Buztton im Autor-Modus getrennt werden: 
![grafik](oxygen-docu/r1_jgjs6Jx.png)

Silbentrennungen, die in der Leseausgabe zusammen mit den diplomatischen Zeilenbrüchen tilgbar sind, werden aus der Konversion von Transkribus automatisch importiert, wo ein Negationszeichen `¬`steht. Sie werden am Zeilenbeginn im Autor-Modus durch pinke (statt schwarze) Pfeile markiert (der Silbentrenntstrich fällt weg und wird für die Leseausgabe wieder ergänzt).
Wo in Transkribus das Negationszeichen vergessen ging, kann im Autor-Modus mit einem Klick auf den Zeilenbeginnpfeil 'break no' ausgewählt werden.
![grafik](oxygen-docu/rkGE-jopyl.png)

#### d. Verse (Text-Editor)
Im Gegensatz zu Prosa-Zeilen, werden Verszeilen auch in Leseausgaben weiterhin gebrochen, deshalb müssen sie gesondert ausgezeichnet werden. Dabei sollte folgendes Code-Schema verwendet werden (vgl. auch smallform_0607):
```xml 
<lg> 
<l> Vers 1 </l>
<l> Vers 2 </l>
</lg>
```

### 3.2 Grundstruktur Briefe 

- Opener
    - Dateline
    - Salute
- Salute im Paragraph
- Closer
    - Salute
    - Postscriptum

### 3.3 Grundstruktur Kleine Formen

Titel/Untertitel/Zwischentitel: `head`
- Jeder (Unter-/Zwischne-)Titel wird von einem neuen `<div>`-Element eingefasst.
- Das erste `<div>`-Element (`<div type="smallform">`) wird bereits durch die Konversion erzeugt, deshalb muss bei lediglich einem Titel darauf nicht geachtet werden. 

Spalten können in der Regel dort angezeichnet werdne, wo eine neue, spaltenförmige Textregion
- Spaltenbrüche: `</cb>`
- Spaltenbeginn: `</cb type=>`
- Bilder


## 4. Auszeichnungen von Renderings und Texteingriffen (Text- oder Autor-Editor)


### 4. Kursiv, fett, gesperrt, unterstrichen, hochgestellt, Zitate

Alle diese Renderings können ebenfalls bereits aus Transkribus importiert werden, sind aber auch durch folgende Buttons im Framework einfügbar: 
![grafik](oxygen-docu/Skn-yU9Tyg.png)


### 4. Sofortkorrekturen durch Autorin

### 4. Unleserlicher Text (wegen Handschrift/Zerstörung)

### 4. Korrekturen/Emendation druch Editor:innen


## 5. Inhaltliche Auszeichnung (Autor-Editor)

### 5.1 Referenzierung von Entitäten

### 5.2 Textstellen-Kommentar

Die Textstellen-Kommentare werden auch dazu verwendet, auf Fotografien im Archiv zu verweisen, die unmittelbar einen Bezug zu dieser Textstelle haben. 

#### Referenzierungen im Textstellen-Kommentar
Alle Entitäten im Übersichtskommentar werden konsequent referenziert. 

#### Verschlagwortung eines Textstellen-Kommentars

### 5.3 Verschlagwortung im TEI-Header

### 5.4 Übersichtskommentar im TEI-Header

Was der Übersichtskommentar NICHT ist: Kein Regest bzw. keine Zusammenfassung des Inhalts. Inhaltliche Aspekte können hervorgehoben werden, wenn sie für die Kontextualisierung notwendigerweise referiert werden müssen. 

Aufbau des Übersichtskommentars: 
- **Entstehungskontext**: In der Regel biographische Kontexte wie Reise/Lebenssituation/Konflikt/Thema/Freundschaft etc.  Ästhetische/literarischen Eigenarten, wenn relevant (z.B.: ästhetisierende/narrativierende Wiederaufnahme eines zuvor sachlich-journalistisch bearbeiteten Themas).
- **Publikationskontext** (falls publiziert): Thematisch ähnliche Publikationen; Hintergründe, warum Publikation in diesem Medium/zu dieser Zeit.
- **Historischer Kontext** (falls relevant): Breitere Einbettung in Zeitgeschichte (z.B.: Anschluss von Österreich).  
- 
## 6. Korrekturlesen (Autor-Editor)
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




