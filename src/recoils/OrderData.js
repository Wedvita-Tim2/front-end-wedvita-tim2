import { atom } from "recoil";


export const coverImage = atom({
    key: 'coverImage',
    default: '',
});

export const brideName = atom({
    key: 'brideName',
    default: '',
});

export const brideMotherName = atom({
    key: 'brideMotheName',
    default: '',
});

export const brideFatherName = atom({
    key: 'brideFatherName',
    default: '',
});

export const groomName = atom({
    key: 'groomName',
    default: '',
});

export const groomMotherName = atom({
    key: 'groomMotheName',
    default: '',
});

export const groomFatherName = atom({
    key: 'groomFatherName',
    default: '',
});

export const dateEvent = atom({
    key: 'dateEvent',
    default: new Date(),
});

export const addressEvent = atom({
    key: 'addressEvent',
    default: '',
});

export const latEvent = atom({
    key: 'latEvent',
    default: -6.871461776598065,
});

export const lngEvent = atom({
    key: 'lngEvent',
    default: 107.57360083862629,
});

export const buildingEvent = atom({
    key: 'buildingEvent',
    default: '',
});

export const quotesEvent = atom({
    key: 'quotesEvent',
    default: '',
});

export const guestEvent = atom({
    key: 'guestEvent',
    default: '',
});

export const accountNumberEvent = atom({
    key: 'accountNumberEvent',
    default: '',
});

export const accountHolderNameEvent = atom({
    key: 'accountHolderNameEvent',
    default: '',
});

export const GalleryEvent = atom({
    key: 'GalleryEvent',
    default: [],
});

export const linkGmapsEvent = atom({
    key: 'linkGmapsEvent',
    default: [],
});