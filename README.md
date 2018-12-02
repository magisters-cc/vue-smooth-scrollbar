# Vue Smooth Scrollbar
Smooth Scrollbar for Vue.js projects
## Usage
### 1. Install dependency

```
npm install --save vue-smooth-scrollbar
```
### 2. Import component into main.js
```
// src/main.js
import Vue from 'vue'
...
import SmoothScrollbar from 'vue-smooth-scrollbar'
Vue.use(SmoothScrollbar)
...
```
### 3. Use component in your templates
```
<template>
  <div id="scroll-area">
    <smooth-scrollbar>
      <div id="example-content"></div>
    </smooth-scrollbar>
  </div>
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
