import React from 'react'
import { useTranslation } from 'react-i18next'
import './Two.css'

function SectionTwo() {
  const {t} = useTranslation();

  return (
    <div className='sec-2'>
      <div className="card">
        <div className='cardBook'>
            <div><img src="https://static.vecteezy.com/system/resources/thumbnails/017/032/397/small/book-icon-free-vector.jpg" alt="" /></div>
            <p>{t("ort")}</p>
        </div>
        <h3>{t("callback")}</h3>
      </div>

      <div className="card">
        <div className='cardBook'>
            <div><img src="https://t4.ftcdn.net/jpg/03/55/07/55/360_F_355075519_imkg8DhsVrvsPMrf9WR8VZ8dblJXJMPs.jpg" alt="" /></div>
            <p>ИИ‑план</p>
        </div>
        <h3>{t("tasks")}</h3>
      </div>

      <div className="card">
        <div className='cardBook'>
            <div><img src="https://static.thenounproject.com/png/1724957-200.png" alt="" /></div>
            <p>{t("resource")}</p>
        </div>
        <h3>{t("hacks")}</h3>
      </div>
    </div>
  )
}

export default SectionTwo
