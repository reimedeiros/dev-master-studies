import dbProductFactory from "../factory/DbProductFactory";

export default class Payment {
    pay(productId: number): void {

        const dbProduct = dbProductFactory.create();
        const product = dbProduct.getProductById(productId);


        console.log(product);
    }
}