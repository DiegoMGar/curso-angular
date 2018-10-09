export class Ingredient {
    constructor(public name: string, public amount: number) { }
    setAmount(amount: number) {
        this.amount = amount
    }
}