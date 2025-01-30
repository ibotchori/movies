"use client"
import React, {
  useState,
  useEffect,
} from "react"





const FavoriteContext = React.createContext({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
})

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])




  const addToFavorites = (product) => {
    
    const updatedFavorites = [...favorites]

  
      const existingProductIndex = updatedFavorites.findIndex(
        (item) => item?.id == product?.id
      )

      if (existingProductIndex !== -1) {
        updatedFavorites.splice(existingProductIndex, 1)
      } else {
        updatedFavorites.push(product)
      }

      setFavorites(updatedFavorites)

      // Update local storage
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  
  }

  const removeFromFavorites = (productId) => {
 
      localStorage.setItem(
        "favorites",
        JSON.stringify(
          favorites.filter((item) => item.id !== productId)
        )
      )
    
    setFavorites(
      favorites.filter((item) => item.id !== productId)
    )
  }

  useEffect(() => {
    const localFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    )
    setFavorites(localFavorites)
  
  }, [])
  

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}
export default FavoriteContext
