import React from 'react'
import { Link } from 'react-router-dom'
import './SubjectList.css'

function NewSubjectList() {
  return (
    <div className='subjectList'>
      <ul>
        <Link to="/homework"><li className='math'>Математика</li></Link>
        <Link to="/homework"><li className='rus'>Русский язык</li></Link>
        <Link to="/homework"><li className='kgz'>Кыргызский язык(аналогия)</li></Link>
        <Link to="/homework"><li className='kgz1'>Кыргызский язык(чтение и понимание)</li></Link>
        <Link to="/homework"><li className='eng'>Английский язык</li></Link>
        <Link to="/homework"><li className='chemistry'>Химия</li></Link>
        <Link to="/homework"><li className='biology'>Биология</li></Link>
        <Link to="/homework"><li className='physics'>Физика</li></Link>
      </ul>
    </div>
  )
}

export default NewSubjectList
