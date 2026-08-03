import IDbProduct from "./IDbProduct";

export default class MongoDBProduct implements IDbProduct{

    getProductById(productId: number): string {
        return `MongoDB: Exibindo os dados do produto ${productId}.`;
    }

}