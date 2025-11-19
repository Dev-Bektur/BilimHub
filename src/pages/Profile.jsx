import React from 'react'
import User from '../components/ProfilePage/User'
import { Link } from 'react-router-dom'

import './Profile.css'
import LessonRegulation from '../components/LessonRegulation/LessonRegulation'

function Profile() {
  return (
    <div className='userPage'>
      <User/>

      <Link to="/aiPlan" className="ai-plan-card">
  <div className="ai-icon">
    <img src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png" alt="AI" />
  </div>

  <div className="ai-text">
    <h3>Мой ИИ-план</h3>
    <p>Персональная траектория обучения</p>
    <p>Нажмите, чтобы увидеть свой план которую вы создавали вместе с нашим искуственным интелектом</p>
  </div>
</Link>

      <div className='lessonReg'>
     <LessonRegulation/>
      </div>
    </div>
  )
}

export default Profile
