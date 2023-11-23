import React from 'react'

const TopMenuOverview = () => {
      const date = new Date()
  return (
      <div className="top-menu-overview">
      <div className="overview-date">
        <h2>Quick Overview</h2>
        <h2>{date.toDateString()}</h2>
      </div>
      <div className="overview">
        <div className="overview-item">
          <p >Revenue</p>
          <small className='revenue'>+22%</small>
          <h6>Ksh 7,500,620</h6>
        </div>
        <div className="overview-item">
          <p>Orders Paid</p>
          <small className='orders'>+5.7%</small>
          <h6>520</h6>
        </div>
        <div className="overview-item">
          <p>Refunds</p>
          <small className='refunds'>18%</small>
          <h6>7,283</h6>
        </div>
        <div className="overview-item">
          <p>Net Profit</p>
          <small className='profits'>+12%</small>
          <h6>28%</h6>
        </div>
      </div>
    </div>
  )
}

export default TopMenuOverview