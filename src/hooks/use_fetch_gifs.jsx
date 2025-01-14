import { useState } from "react";
import { useEffect } from "react";
import { searchGif } from "../helpers/get_gifs";


export const useFetchGifs = (categorie) => {

   const [images, setImages] = useState([])
   const [isLoading, setsLoading ] = useState(true)
const getImages = async() => {
   const images = await searchGif(categorie);
   setImages(images);
   setsLoading(false);
}
useEffect(()=>{

   getImages();
} , [])
 return {
    images: images,
    isLoading: true
 }
}
