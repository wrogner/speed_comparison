// run with: deno run test_env.js

/* test_env.js

Test deno environment for project

:author:  wolf
:created: 2025.05.21
*/

console.log("\nDeno Version:   ", Deno.version.deno);
console.log("V8 Version:     ", Deno.version.v8);
console.log("TypeScript:     ", Deno.version.typescript);
console.log("Platform:       ", Deno.build.os, "\n");