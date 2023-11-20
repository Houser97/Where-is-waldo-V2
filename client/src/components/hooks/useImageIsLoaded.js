import { useState } from "react"

export const useImageIsLoaded = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    const handleImageLoad = () => {
        setIsImageLoaded(true)
    }

    return [isImageLoaded, handleImageLoad]
}