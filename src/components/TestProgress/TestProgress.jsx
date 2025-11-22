import React, { useEffect, useState } from 'react'
import './TestProgress.css'

function TestProgress() {
  const [results, setResults] = useState({})
  const [animatedValues, setAnimatedValues] = useState({})


  const getColor = (value) => {
    if (value < 30) return "#d93434"       
    if (value < 70) return "#d9a834"       
    return "#38a169"                       
  }

  useEffect(() => {
    const loadResults = () => {
      const saved = JSON.parse(localStorage.getItem("testResults")) || {}
      setResults(saved)

      // Анимация
      Object.keys(saved).forEach(subject => {
        setAnimatedValues(prev => ({ ...prev, [subject]: 0 }))
        setTimeout(() => {
          setAnimatedValues(prev => ({
            ...prev,
            [subject]: saved[subject]
          }))
        }, 150)
      })
    }

    loadResults()

    // Слушаем изменения localStorage в реальном времени
    window.addEventListener("storage", loadResults)

    return () => window.removeEventListener("storage", loadResults)
  }, [])

  return (
    <div className="test-progress">
      <h2>Ваш прогресс</h2>

      {Object.keys(results).length === 0 && (
        <p className="empty">Вы пока не проходили тесты.</p>
      )}

      {Object.keys(results).map(subject => {
        const value = animatedValues[subject] || 0

        return (
          <div key={subject} className="progress-item">
            <div className="progress-header">
              <p>{subject}</p>
              <p>{value}%</p>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${value}%`,
                  backgroundColor: getColor(value)
                }}
              ></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TestProgress
