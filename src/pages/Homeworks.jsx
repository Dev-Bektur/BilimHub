import React from 'react'
import { Link } from 'react-router-dom'

import './Homework.css'
import { useTranslation } from 'react-i18next'

function Homeworks() {
  const {t} = useTranslation();
  return (
    <div className='homeworkPage'>
      <h1>{t("hw")}</h1>
      <div className='homeworkList'>
        <Link>{t("hw1")} №1</Link>
        <Link>{t("hw1")} №2</Link>
        <Link>{t("hw1")} №3</Link>
        <Link>{t("hw1")} №4</Link>
        <Link>{t("hw1")} №5</Link>
        <Link>{t("hw1")} №6</Link>
        <Link>{t("hw1")} №7</Link>
        <Link>{t("hw1")} №8</Link>
        <Link>{t("hw1")} №9</Link>
        <Link>{t("hw1")} №10</Link>
      </div>
    </div>
  )
}

export default Homeworks
