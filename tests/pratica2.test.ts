import {pratica2} from "../src/pratica2"

describe("pratica 2", () => {
    test("verificar se é do tipo number", () => {
        const result = pratica2("10" as any)
        expect(result).toBeNull()
    })
    test("verificar se par", () => {
        const result = pratica2(10)
        expect(result).toBe(true)
    })
    test("verificar se é inteiro", () => {
        const result = pratica2(2.3)
        expect(result).toBeNull()
    })
})