import {cypher, decypher} from './movingCaesar';

test('remove spaces and special chars', () => {
    expect(cypher("a b c d!", 3)).toBe("aced");
});

test('happy day', () => {
    const subject:string = "abcdefghijklmnopqrstuvxwyz"
    const rotation:number = 3
    expect(decypher(cypher(subject, rotation), rotation)).toBe(subject);
});