---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Digitale Edition"
  text: "Annemarie Schwarzenbach"
  tagline: Dokumentation
  actions:
    - theme: brand
      text: Zum Inhalt →
      link: /editionsmodell
    - theme: alt
      text: Projektwebseite ↗︎
      link: https://annemarie-schwarzenbach.ch

features:
  - title: Editionsmodell
    details: Prinzipien und Regeln der digitalen Edition, inklusive Codierungsrichtlinien und Kommentierungsmodelle.
    link: /editionsmodell
  - title: Interface-Modell
    details: Anforderungen und Konzepte für die Präsentation, Navigation und Funktionalität.
    link: /interface-model-dseas
  - title: Registermodell
    details: Struktur und Erfassung von Personen-, Orts- und Werkregistereinträgen.
    link: /register-model-dseas
  - title: Transkribus-Dokumentation
    details: Leitfaden für den Workflow in Transkribus (Upload, Transkription, Korrektur und Export).
    link: /transkribus-dokumentation
  - title: Oxygen-Dokumentation
    details: Codierung und Bearbeitung der TEI/XML-Daten mit Oxygen XML Editor.
    link: /oxygen-docu
---

<style>

.VPButton {
  border-radius: 6px !important;
}

.VPHome .VPFeature {
  border-radius: 6px;
}

.tagline {
  font-size: 20px !important;
  color: var(--vp-c-text-1) !important;
}

@media (min-width: 640px) {
  .tagline {
    font-size: 28px !important;
  }
}

@media (min-width: 960px) {
  .tagline {
    font-size: 32px !important;
  }
}

</style>

<script setup>

import {onMounted} from "vue";

onMounted(() => {
  const p = document.querySelector(".VPHero .tagline");
  const s = document.querySelector("#hero-text");
  if (!p || !s) return;
  while (p.lastChild) p.lastChild.remove();
  p.append(s);

  const p2 = document.querySelector(".VPNavBarTitle .title");
  const s2 = document.querySelector("#title-text");
  if (!p2 || !s2) return;
  while (p2.lastChild) p2.lastChild.remove();
  p2.append(s2);
});

</script>

<template>
  <div id="hero-text"><span style="display: inline-block; position: relative;">Dokumentation<svg style="color: var(--vp-c-red-1); position: absolute; z-index: -1; top: 1.22em; left: 0.05em; width: calc(100% - 0.1em);" width="220" height="12" viewBox="0 0 220 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><pattern id="hatch" patternUnits="userSpaceOnUse" patternTransform="rotate(45)" width="4" height="4"><rect width="1" height="4" style="stroke:currentColor" /></pattern><rect x="0" y="0" width="220" height="12" fill="url(#hatch)"/></svg>
  </span></div>
  <div id="title-text"><span style="display: inline-block; position: relative;">DSE-AS</span></div>
</template>