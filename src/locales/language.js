import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import kg from './kg/kg.json'
import ru from './ru/ru.json'

i18n.use(initReactI18next).init({
    resources: {
        kg: {
            translation: kg
        },
        ru: {
            translation: ru
        }
    },
    lng: "ru"
    
})

export default i18n