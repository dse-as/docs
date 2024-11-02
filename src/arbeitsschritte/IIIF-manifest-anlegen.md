# IIIF-Manifest anlegen

Manifeste können in einem automatisierten Prozess angelegt werden, vgl. [https://github.com/dse-as/i3f](https://github.com/dse-as/i3f/).

## Erforderliche Angaben für die Input-Dateien

* Dokument-ID (`mf_id`): entspricht der Dokument-ID des Projekts nach Konvention `typ_nnnn` ergänzt mit der Endung `.json`
* Manifest-Sprache (`mf_en`): Sprachangabe für Metadaten-Labels, z.B. "de", "fr", "en", vgl. https://iiif.io/api/cookbook/recipe/0006-text-language/
* Label des Dokuments (`mf_label`): Angabe als einfacher String ohne *Quotation Mark* (`U+0022`), stattdessen „ “ / » « / ' ' / › ‹ / ‚ ‘ / ‘ ’  o.ä. verwenden (vgl. https://de.wikipedia.org/wiki/Anf%C3%BChrungszeichen#Andere_Sprachen)
* Auflistung von Seiten-IDs und zugehörigen IIIF-Image-URLs (unter `[mf_data]`)

## `[mf_data]`

Unter `[mf_data]` werden alle zum Dokument gehörigen Seiten als einzelne Zeile eingetragen.

Jede Zeile enthält zwei Werte, getrennt durch "=". 

* Auf der linken Seite steht die Seiten-ID, die der Dokument-ID ergänzt um einen dreistelligen Index entspricht (`typ_nnnn_iii`).
* Auf der rechten Seite steht der Verweis auf die JSON-Repräsentation des IIIF-Image-Ressource.

### IIIF Image URLs ermitteln

Da die Adressstruktur der verschiedenen Institutionen/Server abweicht, können folgende Hinweise helfen:

#### iiif.ub.unibe.ch

Image URLs lauten (vorläufig) 

```
https://iiif.ub.unibe.ch/image/v3/dsl_dev/smallform_0007_001.png/info.json
```
bzw.

```
https://iiif.ub.unibe.ch/image/v3/dsl_dev/{Seiten-ID}}.png/info.json
```

[in absehbarer Zeit wird das Pfadsegment `dsl_dev` durch `schwarzenbach` ersetzt; letztlich voraussichtlich der Hostname `iiif.ub.unibe.ch` durch `iiif.annemarie-schwarzenbach.ch`].

#### ethz

TBD

#### monacensia

TBD

#### patrinum

TBD

---

#### Allgemeiner Hinweis

Ob es sich um eine funktionierende Image URL handelt, lässt sich einfach prüfen, indem man das Pfadsegment `/info.json` durch `/full/max/0/default.jpg` ersetzt und die URL im Browser öffnet. Bei einer Image URL sollte das Bild in Vollqualität angezeigt werden.

## Beispiel der Input-Datei `smallform_0007.toml`:

```
mf_id = "smallform_0007.json"
mf_lang = "en"
mf_label = "Erik. Novelle"

[mf_data]
"smallform_0007_001" = "https://iiif.ub.unibe.ch/image/v3/dsl_dev/smallform_0007_001.png/info.json"
```