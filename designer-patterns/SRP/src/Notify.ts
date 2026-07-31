import Client from "./Client";

export default class Notify {
    constructor(private client: Client) { }

    async sendEmail(): Promise<boolean> {
        console.log("Enviando Email !");

        let response = false;

        while (!response) {
            console.log("Aguarde...");
            await this.delay(1000);
            response = await this.hasResponse(this.client.email);
        }

        return true;
    }

    async hasResponse(email: string): Promise<boolean> {
        console.log("Email Enviado para: " + email);

        await this.delay(5000);
        return true;
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}