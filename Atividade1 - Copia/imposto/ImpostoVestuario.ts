import { CalculoImposto } from "./CalculoImposto";

export class ImpostoVestuario implements CalculoImposto {

    calcular(total: number): number {
        return total + total * 0.10;
    }

}