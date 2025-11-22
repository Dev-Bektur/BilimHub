import React from 'react'
import { useTranslation } from 'react-i18next';
import './StudyFormat.css'

function StudyFormat() {
  const {t} = useTranslation();
  return (
    <div className='studies'>
    <h2>{t("step")}</h2>
    <div className='studyFormat'>
      <div className="studyStep1">{t("step1")}</div>
      <div className="studyStep2">{t("step2")}</div>
      <div className="studyStep3">{t("step3")}</div>
      <div className="studyStep4">{t("step4")}</div>
      <div className="studyStep5">{t("step5")}</div>
    </div>    
    </div>
      
  )
}

export default StudyFormat
