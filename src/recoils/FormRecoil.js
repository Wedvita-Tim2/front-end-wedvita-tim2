import { atom } from 'recoil';

const dateState = atom({
    key : 'dateState',
    default : new Date(),
})

export {dateState};