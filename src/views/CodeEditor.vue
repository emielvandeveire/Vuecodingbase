<template>
  <div class="grid">
    <div id="html" class="grid-cell">
      <textarea v-model="htmlCode" name="" id="" cols="30" rows="10"></textarea>
      <div class="title">This is a cell</div>
    </div>
    <div id="css" class="grid-cell">
      <textarea v-model="cssCode" name="" id="" cols="30" rows="10"></textarea>
      <div class="title">This is a cell</div>
    </div>
    <div id="js" class="grid-cell">
      <textarea v-model="jsCode" name="" id="" cols="30" rows="10"></textarea>
      <div class="title">This is a cell</div>
    </div>
    <div id="preview" class="grid-cell">
      <div
        v-html="
          htmlCode +
          styleBegin +
          cssCode +
          stylEend +
          scriptBegin +
          jsCode +
          scriptEnd
        "
      ></div>
      <div class="title">This is a cell</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeEditor",
  methods: {},
  data() {
    return {
      htmlCode: "<h1>hi</h1>",
      cssCode: "",
      jsCode: "",
      styleBegin: "<style>",
      styleEnd: "</style>",
      scriptBegin: "<script>",
      scriptEnd: "</"+"script>"
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.grid {
  padding: 10px;
  height: 95.45vh;
  width: 100vw;
  display: grid;
  gap: 10px;
  grid-template-areas:
    "html preview"
    "css preview"
    "js preview";
  #html {
    grid-area: html;
  }
  #css {
    grid-area: css;
  }
  #js {
    grid-area: js;
  }
  #preview {
    grid-area: preview;
    grid-template-rows: 50fr 1fr;
  }
  .grid-cell {
    border-radius: 1rem;
    display: grid;
    grid-template-rows: 10fr 1fr;
    overflow: hidden;

    textarea {
      padding: 10px;
      border: none;
      outline: none;
      resize: none;
    }
    .title {
      height: 45px;
      padding-left: 1rem;
      background: pink;
      display: flex;
      align-items: center;
    }
  }
}
.light {
  .grid {
    .grid-cell {
      box-shadow: 0px 2px 8px 0px #b0bec5;
      .title {
        background: rgb(245, 245, 245);
      }
    }
  }
}
.dark {
  .grid {
    .grid-cell {
      box-shadow: 0px 2px 8px 0px rgb(11, 18, 24);
      .title {
        background: #111a24;
      }
    }
  }
}
</style>
