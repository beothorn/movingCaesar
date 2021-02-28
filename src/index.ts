import {cypher, decypher} from './movingCaesar';

const input:HTMLInputElement = (<HTMLInputElement>document.getElementById("input"));
const output:HTMLInputElement = (<HTMLInputElement>document.getElementById("output"));
const rotation:HTMLInputElement = (<HTMLInputElement>document.getElementById("rotation"));


input.addEventListener("keyup", (e) => {
    output.value = cypher(input.value, parseInt(rotation.value));
})

output.addEventListener("keyup", (e) => {
    input.value = decypher(output.value, parseInt(rotation.value));
})