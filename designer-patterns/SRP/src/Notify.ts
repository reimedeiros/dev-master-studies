import Helper from "../Helper";
import Client from "./Client";

export default class Notify {
    constructor(private client: Client, private helpers: Helper) { }

    async sendEmail(): Promise<boolean> {
        console.log("Enviando Email !");

        let response = false;

        while (!response) {
            console.log("Aguarde...");
            await this.helpers.delay(1000);
            response = await this.hasResponse(this.client.email);
        }

        return true;
    }

    async hasResponse(email: string): Promise<boolean> {
        console.log("Email Enviado para: " + email);

        await this.helpers.delay(5000);
        return true;
    }

}