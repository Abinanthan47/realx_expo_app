import { Client, Databases, Account } from "react-native-appwrite";

const client = new Client();
client
.setEndpoint('https://fra.cloud.appwrite.io/v1')
.setProject('68217dba000083f5721a')
.setPlatform('com.company.realestate_app');


export const account = new Account(client);
export const databases = new Databases(client);
