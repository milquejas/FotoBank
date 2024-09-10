import { Client, Account, ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    projectId: '66dfcebb0025027ba090',
    platform: 'com.jdim.fotobank',
    databaseId: '66dfd7400026c3a63e16',
    userCollectionId: '66dfda62002eb0591ef9',
    videoCollectionId: '66dfdae7002139375065',
    storageId: '66dfdcbb0021e672870f'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.

    const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}

// Register User

;


