import { atom } from 'recoil';

const readFromLocalStorage = () => {
    const savedAuth = JSON.parse(localStorage.getItem('auth'));
    return savedAuth || { isAuthenticated: false, dataUser: {} };
};
  
// Inisialisasi atom dengan nilai awal dari local storage
export const authState = atom({
    key: 'authState',
    default: readFromLocalStorage(),
});