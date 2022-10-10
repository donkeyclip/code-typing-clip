import { loadPlugin, CSSEffect } from "@donkeyclip/motorcortex";
import MCCodeTyping from "@donkeyclip/motorcortex-code-typing";
const CodeTypingPlugin = loadPlugin(MCCodeTyping);
import initParams from "./initParams";

export const WriteSthg = (selector, duration) =>
  new CodeTypingPlugin.WriteCode(
    {
      animatedAttrs: {
        code: `const welcome = {
          from:"Donkeyclip",
          to:"`+ initParams[0].value.receiver +`",
          reason:"`+ initParams[0].value.reason +`",
          whatItIs:"Animation Framework",
          whatYouCanDoWith:"Create dynamic clips and plugins",
          easyToUse:true,
          simpleStepsToFollow:{
              step1:"create a clip with motorcortex-cli",
              step2:"create Incidents for your clip",
              step3:"put them in the timeline of your clip",
              step4:"add a player if you want",
              readyClip:true
          },
          extra:"You can use our plugins, " + " create yours, " + " or use HTML and CSS.",
          whereYouCanFindMoreInfo:"https://motorcortexjs.com/",
          getInTouchWithUs:{
            email:"social@donkeyclip.com",
            github:"https://github.com/donkeyclip",
            twitter:"https://twitter.com/Donkeyclip1",
            instagram:"https://www.instagram.com/donkeyclip"
          },
          thankYouForYourTime: true
         },`
      },
    },
    {
      selector,
      duration,
    }
  );

export const subscribeButton = (selector, duration, easing = "easeInOutSine") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform:{
          scale:1
        }
      },
      initialValues:{
        transform:{
          scale:0
        }
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

