import React from 'react'
import './miniCalendar.css'

interface MiniCalendarProps {
  miniCalendar: {
    id: number
    title: string
  }
  onManage: (calendarId: number) => void
}

export const MiniCalendar: React.FC<MiniCalendarProps> = ({
  miniCalendar,
  onManage,
}) => {
  console.log(miniCalendar)

  const imgPath = `./img/calendar_icons/${miniCalendar.id}.svg`
  return (
    <div className="mini-calendar">
      <header className="mini-calendar__header">
        <div className="mini-calendar__logo">
          <img src={imgPath} />
        </div>
        <h2 className="mini-calendar__title">{miniCalendar.title}</h2>
      </header>
      <main className="mini-calendar__content">
        <div className="mini-calendar__total-count">
          <div className="mini-calendar__total-count-number">34</div>
          <div className="mini-calendar__total-count-text">total</div>
        </div>
        <div className="mini-calendar__streak-count">
          <div className="mini-calendar__total-count-number">78</div>
          <div className="mini-calendar__total-count-text">
            day streak
            <img
              className="mini-calendar__streak-count-icon"
              src="./img/fire.svg"
            />
          </div>
        </div>
        <div>
          <button
            className="mini-calendar__button"
            onClick={() => onManage(miniCalendar.id)}
          >
            Manage
          </button>
        </div>
      </main>
    </div>
  )
}
