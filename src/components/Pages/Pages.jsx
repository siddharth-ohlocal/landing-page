import React from 'react'
import './Pages.css'
import { pageData } from "../../data/pageData";

export const Pages = () => {
  return (
    <div className="Pages">
      {pageData.map((page) => (
        <div className="section" style={{ backgroundImage: `url(${page.bg})` }}>
          <div className="section-text">
            {page.heading}    {/* Section Heading */}

            <span className='subhead'>
              {page.subhead}
            </span>

            <span className='button'>Start now</span>
          </div>

          {/* For sizing only */}
          <img src={page.bg} alt="" style={{ visibility: "hidden", height: "100vh" }} />
        </div>
      ))}
    </div>
  )
}
