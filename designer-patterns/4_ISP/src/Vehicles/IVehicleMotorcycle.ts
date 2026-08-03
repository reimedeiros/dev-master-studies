import IVehicle from "./IVehicle";

export default interface IVehicleMotorcycle extends IVehicle {
    configurationMotocycle(color: string, year: number, engine: number): void;
}