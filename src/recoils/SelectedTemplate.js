import { atom } from "recoil";


export const selectedTemplate = atom({
    key: 'selectedTemplate',
    default: '',
});

export const selectedTemplateName = atom({
    key: 'selectedTemplateName',
    default: '',
});