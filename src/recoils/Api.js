import { atom } from 'recoil';

export const apiBackend= atom({
    key: 'backendApi',
    default: 'http://localhost:8000/',
});