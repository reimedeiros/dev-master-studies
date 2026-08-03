import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {
    constructor(
        color: string,
        year: number,
        engine: number
    ) {
        this.configurationMotocycle(color, year, engine);
    }

    startVehicle(): void {
        console.log("Ligando os motores.");
    }
    
    configurationMotocycle(color: string, year: number, engine: number): void {
        console.log(`Moto da cor ${color}, do ano ${year} com motor de ${engine} cilindradas.`);
        this.startVehicle();
    }

}