# Vue Smooth Scrollbar
Smooth Scrollbar for Vue.js projects. Based on [@idiotwu's smooth-scrollbar](https://idiotwu.github.io/smooth-scrollbar/).
## Usage
### 1. Install dependency
```
npm install --save vue-smooth-scrollbar
```
### 2. Import component
```
// src/main.js
import Vue from 'vue'
...
import VueSmoothScrollbar from 'vue-smooth-scrollbar'
Vue.use(VueSmoothScrollbar)
...
```
### 3. Use component in your templates
```
<template>
  <vue-smooth-scrollbar id="scroll-area">
    <div id="example-content"></div>
  </vue-smooth-scrollbar>
</template>

<style>
  #scroll-area {
    width: 500px;
    height: 500px;
  }

  #example-content {
    width: 2000px;
    height: 2000px;
  }
</style>
```

## Backlog
* [x] Plugin structure
* [x] Basic implementation
* [x] Options
* [x] Methods
* [x] Build dist
* [x] SSR / Nuxt
* [ ] Events
* [ ] Styling