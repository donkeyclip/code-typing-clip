import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import {subscribeButton } from "./incidents";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";

import codeEditor from "./codeEditor";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  containerParams: {
    width: "800px",
    height: "600px",
  },
  //initParamsValidationRules,
  initParams:initParams[0].value,
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap",
    },
  ],
});

 

clip.addIncident(codeEditor,0);
clip.addIncident(subscribeButton(".button",500),28500);
