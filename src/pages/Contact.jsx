import React from 'react'
import './Contact.css'
import { useTranslation } from 'react-i18next'

function Contact() {
  const {t} = useTranslation();
  return (
    <div className='contactPage'>
      <p>{t("contact")}:</p>
      <p>
        Телефон номер: <span>+996 553 518121</span>
      </p>
    </div>
  )
}

export default Contact
