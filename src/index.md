---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Digitale Edition"
  text: "Annemarie Schwarzenbach"
  tagline: Dokumentation
  actions:
    - theme: brand
      text: Arbeitsschritte →
      link: /arbeitsschritte/IIIF-manifest-anlegen
    - theme: alt
      text: GitHub ↗︎
      link: https://github.com/dse-as/docs

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
});

</script>

<template>
  <div id="hero-text"><span style="display: inline-block; position: relative;">Dokumentation<svg style="color: var(--vp-c-red-1); position: absolute; z-index: -1; top: 1.22em; left: 0.05em; width: calc(100% - 0.1em);" width="220" height="12" viewBox="0 0 220 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><pattern id="hatch" patternUnits="userSpaceOnUse" patternTransform="rotate(45)" width="4" height="4"><rect width="1" height="4" style="stroke:currentColor" /></pattern><rect x="0" y="0" width="220" height="12" fill="url(#hatch)"/></svg>
  </span></div>
</template>