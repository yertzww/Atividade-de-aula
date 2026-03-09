import { CalculoImposto } from "./CalculoImposto";

export class ImpostoAlimento implements CalculoImposto {

    calcular(total: number): number {
        return total + total * 0.05;
    }

}