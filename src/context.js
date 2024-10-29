import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()
  const ThemeProvider =({children})=>{
    const [dark,setDark]=useState(false)
        return(
            <ThemeContext.Provider value={{dark,setDark}}>{children}</ThemeContext.Provider>
        )
    
} 
const useThemecontext = ()=>{
   return useContext(ThemeContext) 
}
export {ThemeProvider, useThemecontext}