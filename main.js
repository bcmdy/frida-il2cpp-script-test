export function start() {
    Il2Cpp.perform(() => {
        // dunp
        console.log('dump start');
        Il2Cpp.dump();
        console.log('dump end');
    });
};