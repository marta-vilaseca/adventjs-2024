/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compileTS(instructions: string[]): number {
  const dynamicVars = {};
  let i = 0;

  while (i < instructions.length) {
    const steps = instructions[i].split(" ");

    if (steps[0] === "MOV") {
      dynamicVars[steps[2]] = isNaN(Number(steps[1])) ? dynamicVars[steps[1]] : parseInt(steps[1]);
    } else if (steps[0] === "INC") {
      dynamicVars[steps[1]] = (dynamicVars[steps[1]] || 0) + 1;
    } else if (steps[0] === "DEC") {
      dynamicVars[steps[1]] = (dynamicVars[steps[1]] || 0) - 1;
    } else if (steps[0] === "JMP" && (parseInt(dynamicVars[steps[1]]) || 0) === 0) {
      i = parseInt(steps[2]) - 1;
    }

    i++;
  }

  return dynamicVars["A"] || undefined;
}
