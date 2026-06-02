import React from 'react'
import '../BannerComponent/BannerComponent.css'

function BannerComponent( { title, subtitle, description } ) {
  return (
    <div className='banner-cover'>
      <div className="content">
        {description ? <p className="banner-description">{description}</p> : null}
        {title ? <h1 className="banner-title">{title}</h1> : null}
        {subtitle ? <p className="banner-subtitle">{subtitle}</p> : null}
      </div>
    </div>
  )
}

export default BannerComponent
