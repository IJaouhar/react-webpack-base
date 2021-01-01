import * as intlEnglish from '../statics/texts/en/en.intl.json';

const i18nextDefaultOpts = {
    fallbackLng: 'en',
    lng: 'en',
    resources: {
        en: {
            translation: {
                ...intlEnglish,
            },
        },
    },
};

export default i18nextDefaultOpts;
