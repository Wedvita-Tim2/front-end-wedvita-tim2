import { atom } from 'recoil';

export const apiBackend= atom({
    key: 'backendApi',
    default: 'https://immense-perch-hot.ngrok-free.app/',
});

export const urlFront = atom({
    key: 'urlFront',
    default: 'http://localhost:3000'
})

export const apiBackendImage = atom({
    key: 'imageApi',
    default: 'https://immense-perch-hot.ngrok-free.app',
})