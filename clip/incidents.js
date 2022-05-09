import { loadPlugin, CSSEffect } from "@donkeyclip/motorcortex";
import MCCodeTyping from "@donkeyclip/motorcortex-code-typing";
const CodeTypingPlugin = loadPlugin(MCCodeTyping);

export const WriteSthg = (selector, duration) =>
  new CodeTypingPlugin.WriteCode(
    {
      animatedAttrs: {
        code: "@initParams.code",
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

