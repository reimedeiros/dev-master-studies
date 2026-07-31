import Helper from "../Helper";
import Client from "./Client";
import Notify from "./Notify";

const client = new Client();
const helpers = new Helper()
const notification = new Notify(client, helpers);

notification.sendEmail();