import { loadPlugin} from "@donkeyclip/motorcortex";
import MCCodeTyping from "@donkeyclip/motorcortex-code-typing";
const CodeTypingPlugin = loadPlugin(MCCodeTyping);
import {WriteSthg} from "./incidents";

const codeEditor =  new CodeTypingPlugin.Clip({
    darkTheme: "@initParams.darkTheme",
    lineNumbers: "@initParams.lineNumbers",
    readOnly: false,
  }, 
  {
    selector:".code",
    containerParams: { width: '800px', height: '600px' },
    initParams:{
      darkTheme: "@initParams.darkTheme",
      lineNumbers: "@initParams.lineNumbers",
    }
  });

codeEditor.addIncident(WriteSthg("!#editor",27000),1);

export default codeEditor;