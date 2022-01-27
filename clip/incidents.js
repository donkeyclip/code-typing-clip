import { loadPlugin,CSSEffect } from "@donkeyclip/motorcortex";
import MCCodeTyping from "@donkeyclip/motorcortex-code-typing";
const CodeTypingPlugin = loadPlugin(MCCodeTyping);

export const WriteSthg =  (selector, duration) => 
new CodeTypingPlugin.WriteCode(
  {
    animatedAttrs: {
       code: `const welcome = {
          from:"Donkeyclip",
          to:"Claudio Holanda",
          reason:"Introduce MotorCortexjs",
          whatItIs:"Animation Framework",
          opensource:true,
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
              email:"donkeyclip@...com",
              github:"https://github.com/donkeyclip",
              twitter:"",
              linkedin:"",
              facebook:"",
              instagram:""
          },
          thankYouForYourTime:true
         }`
    }
  }, 
  {
    selector,
    duration
  }
);

export const codeEditor = (selector) => new CodeTypingPlugin.Clip({
  darkTheme: true,
  lineNumbers: true,
  readOnly: false
}, 
{
  selector
});

export const button =  (selector, duration) => 
new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    }
  }, 
  {
    selector,
    duration
  }
);