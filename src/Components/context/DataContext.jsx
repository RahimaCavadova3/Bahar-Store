import React, { createContext, useEffect, useState } from 'react'
import { getCategory, getData } from '../service/Api'

export const DATA = createContext([])

function DataContext({children}) {
  const [mehsul, setMehsul] = useState([])
  const [axtar, setAxtar] = useState('')
  const [category, setCategory] = useState([])

  useEffect(() => {
    getData().then(res => setMehsul(res))
    getCategory().then(res => setCategory(res))
  }, [])

  return (
    <DATA.Provider value={{ mehsul, axtar, setAxtar, category }}>
      {children}
    </DATA.Provider>
  )
}

export default DataContext