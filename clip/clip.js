import { loadPlugin,HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import {codeEditor,WriteSthg,button } from "./incidents";
import { initParamsValidationRules, initParams } from "./initParams";


export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "800px",
    height: "600px",
  },
});

clip.addIncident(codeEditor(".container",10),0);
codeEditor.addIncident(WriteSthg("!#editor",27000),1);
clip.addIncident(button(".button",10),28500);


