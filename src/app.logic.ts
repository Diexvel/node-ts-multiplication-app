import fs, { writeFileSync } from "fs";
import { yarg } from'./plugins/yargs.plugin';

const { b:base, l:limit, s:show} = yarg

let outputMessage = "";

const headerMessage = `
=======================
  Tabla del ${ base }
=======================\n
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if( show ) console.log(outputMessage);


