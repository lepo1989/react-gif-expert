import React from 'react'

export const GIfItem = ({title, url, id}) => {
  console.log(title, url)
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
