import { atom } from 'recoil';

export const apiBackend= atom({
    key: 'backendApi',
    default: 'https://immense-perch-hot.ngrok-free.app/',
});

export const urlFront = atom({
    key: 'urlFront',
    default: 'https://front-end-wedvita-tim2.vercel.app'
})

export const apiBackendImage = atom({
    key: 'imageApi',
    default: 'https://immense-perch-hot.ngrok-free.app',
})