import Db from "../model/Db";
import IDbProduct from "../model/IDbProduct";
import MongoDBProduct from "../model/MongoDBProduct";
import MySQLProduct from "../model/MySQLProduct";

export default class dbProductFactory {

    private static type: Db = Db.MYSQL;

    public static create(): IDbProduct {

        switch (dbProductFactory.type) {
            case Db.MYSQL:
                return new MySQLProduct();
            case Db.MONGODB:
                return new MongoDBProduct();
            case Db.SQLSERVER:
            case Db.ORACLE:
            case Db.POSTGRESQL:
            default:
                throw new Error(`Database type não suportado: ${dbProductFactory.type}`);
        }

    }

}