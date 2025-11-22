import React from 'react'
import { Link } from 'react-router-dom'

import './LessonWatch.css'
import { useTranslation } from 'react-i18next'

function LessonWatch() {
  const {t} = useTranslation();
  return (
    <div className='watchLesson'>
      <h1>{t("lesson")}</h1>
      <div className='lessonList'>
        <Link to="/firstLesson">{t("lesson1")} №1</Link>
        <Link>{t("lesson1")} №2</Link>
        <Link>{t("lesson1")} №3</Link>
        <Link>{t("lesson1")} №4</Link>
        <Link>{t("lesson1")} №5</Link>
        <Link>{t("lesson1")} №6</Link>
        <Link>{t("lesson1")} №7</Link>
        <Link>{t("lesson1")} №8</Link>
        <Link>{t("lesson1")} №9</Link>
        <Link>{t("lesson1")} №10</Link>
      </div>
    </div>
  )
}

export default LessonWatch
