import { loadPlugin,HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import {WriteSthg,subscribeButton } from "./incidents";
import { initParamsValidationRules, initParams } from "./initParams";
import MCCodeTyping from "@donkeyclip/motorcortex-code-typing";
const CodeTypingPlugin = loadPlugin(MCCodeTyping);

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  containerParams: {
    width: "800px",
    height: "600px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap",
    },
  ],
});

 const codeEditor =  new CodeTypingPlugin.Clip({
  darkTheme: true,
  lineNumbers: true,
  readOnly: false
}, 
{
  selector:".code",
  containerParams: { width: '800px', height: '600px' },
  initParams:initParams[0].value,
  // initParamsValidationRules -> errors if uncomment
});

clip.addIncident(codeEditor,0);
codeEditor.addIncident(WriteSthg("!#editor",27000),1);
clip.addIncident(subscribeButton(".button",500),28500);
