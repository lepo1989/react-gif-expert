/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react'
import { GIfItem } from './';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => { 

  /* const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(() => {
    getImages();
  }, []) */
  const {images, isLoading} = useFetchGifs(category);

  console.log(images, isLoading)

  //const {} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      
      {
        isLoading && (<h2 >Cargando...</h2>)
      }
      
      <div className='card-grid'>
      {
        images.map((image) => (
          <GIfItem 
            key={image.id}
            {...image}
          />
        ))
      }
      </div>
      <p>{category}</p>
    </>
  )
}
