<template>
  <div class="grid">
    <div id="html" class="grid-cell">
      <textarea
        :oninput="writeCode"
        v-model="htmlCode"
        name=""
        id="htmltextarea"
        cols="30"
        rows="10"
        spellcheck="false"
      ></textarea>
      <div class="title">HTML</div>
    </div>
    <div id="css" class="grid-cell">
      <textarea
        :oninput="writeCode"
        v-model="cssCode"
        name=""
        id=""
        cols="30"
        rows="10"
        spellcheck="false"
      ></textarea>
      <div class="title">CSS</div>
    </div>
    <div id="js" class="grid-cell">
      <textarea
        :oninput="writeCode"
        v-model="jsCode"
        name=""
        id=""
        cols="30"
        rows="10"
        spellcheck="false"
      ></textarea>
      <div class="title">JS</div>
    </div>
    <div class="grid-cell" id="preview">
      <iframe id="myframe"></iframe>
      <div class="title">This is a cell</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeEditor",
  data() {
    return {
      htmlCode: "<h1>hi</h1>",
      cssCode: "",
      jsCode: "document.querySelector('h1').style.color = 'blue';",
      styleBegin: "<style>",
      styleEnd: "</style>",
      scriptBegin: "<script>",
      scriptEnd: "</" + "script>",
    };
  },
  methods: {
    writeCode() {
      var doc = document.getElementById("myframe").contentWindow.document;
      doc.open();
      doc.write(
        this.htmlCode +
          this.styleBegin +
          this.cssCode +
          this.styleEnd +
          this.scriptBegin +
          this.jsCode +
          this.scriptEnd
      );
      doc.close();
    },
  },
  mounted() {
    this.writeCode()
  },
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
    iframe {
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
      word-wrap: break-word;
    }
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
      font-family: Menlo, Monaco, "Courier New", monospace;
      font-weight: normal;
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
      textarea, iframe {
        background: #15202b;
        color: white;
        transition: none;
      }
      .title {
        background: #111a24;
        transition: none;
      }
    }
  }
}
</style>
