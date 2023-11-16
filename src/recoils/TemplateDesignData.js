import { atom } from "recoil";

export const TemplateName = atom({
    key: 'TemplateName',
    default: '',
});

export const TemplatePrice = atom({
    key: 'TemplatePrice',
    default: 0,
});

export const TemplateThumbnail = atom({
    key: 'TemplateThumbnail',
    default: '',
});

//template id untuk edit informasi template design
export const TemplateEditId = atom({
    key: 'TemplateEditId',
    default: '',
});