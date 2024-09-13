import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';



export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    projectId: '66dfcebb0025027ba090',
    platform: 'com.jdim.fotobank',
    databaseId: '66dfd7400026c3a63e16',
    userCollectionId: '66dfda62002eb0591ef9',
    videoCollectionId: '66dfdae7002139375065',
    storageId: '66dfdcbb0021e672870f'
}

const {
    endpoint,
    projectId,
    platform,
    databaseId,
    userCollectionId,
    videoCollectionId,
    storageId,
} = appwriteConfig;

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID
    .setPlatform(platform) // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if (!newAccount) throw Error
        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password);
        const newUser = await databases.createDocument(
            databaseId,
            userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )
        return newUser;

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session;
    } catch (error) {

    }
}
export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if (!currentUser) throw Error;
        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
}
export const getAllPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            videoCollectionId
        )
        return posts.documents;
    } catch (error) 
    { throw new Error(error) }

}
export const getLatestPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            videoCollectionId,
            [Query.orderDesc('$createdAt', Query.limit(7))]
        )
        return posts.documents;
    } catch (error) 
    { throw new Error(error) }

}

