import * as sdk from 'node-appwrite'


export const {
    PROJECT_ID, API_KEY, DATABASE_ID, PATIENT_COLLECTION_ID, DOCTOR_COLLECTION_ID, APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT
} = process.env

const client = new sdk.Client()

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66a3805b0000bb648db3')
    .setKey('ab0bd47e274e111acf6a9c9d9107f4d5a6e58cafb2fe2e0526f431518af29af0c89f80daaf6f9f11bd418857a1383e97177acf985b141e086e90bb7b3da9776a28f0faa91ce523ecab43482bae430056f8c909590d447832d7c233ee8f2f3b4c22f66032c352def8aae9cff8d582706484862287753d8025d1f45a35c2db7137')

export const databases = new sdk.Databases(client)
export const storage = new sdk.Storage(client)
export const messaging = new sdk.Messaging(client)
export const users = new sdk.Users(client)