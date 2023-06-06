import { fixacao } from "../src/fixacao"

describe("fixacao", () => {
    test("verifica se é string", () => {
        const result = fixacao(123456 as any)
        expect(result).toBeNull()
    })
    test("recebe um string e separa em array de letras", () => {
        const result = fixacao("Myllena")
        expect(result).toEqual(["M", "y", "l", "l", "e", "n","a"])

    })
})