import React from 'react'
import { Link } from 'react-router-dom'

import './LessonPage.css'

function Lessons() {
  return (
    <div className='lessonPage'>
      <Link to="/subject" className='toTheLesson'>Уроки</Link>
      <Link to="/newSubject" className='toTheHomework'>Домашние задания</Link>
    </div>
  )
}

export default Lessons
