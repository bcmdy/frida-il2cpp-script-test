import "frida-il2cpp-bridge";
import { start } from "./main.js";
setImmediate(start);
Il2Cpp.perform(() => {
    // code here
});