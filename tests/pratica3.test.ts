import {pratica3} from "../src/pratica3"

describe("pratica 3", () => {
    test("verifica se são números", () => {
        const result = pratica3("3" as any, 2)
        expect(result).toBeNull()
    })
    test("recebe dois números e retorna a soma e a multiplicação em um objeto", () => {
        const result = pratica3(2,3)
        expect(result).toEqual({soma: 5, mult: 6})
    })
})