import { atom } from 'recoil';

export const apiBackend= atom({
    key: 'backendApi',
    default: 'http://localhost:8000/',
});

export const urlFront = atom({
    key: 'urlFront',
    default: 'http://localhost:3000'
})