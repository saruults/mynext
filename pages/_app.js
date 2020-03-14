import React, { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../theme'

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      {isMounted && <Component {...pageProps} />}
      <style jsx global>
      {`
      :root {
        font-size: 16px;
        font-family: 'Open Sans';
        --transition-speed: 200ms;
        --mypink:  #6649b8;
        --darkishL: #242526;
        --whiteish: #F0F2F5;
      }
      body.dark-mode {
        color: white;
        background-color: #12181B;
        margin: 0;
        padding: 0;
        }
      body.light-mode {
        color: black;
        background-color: #FFFFFF;
        margin: 0;
        padding: 0;
        }
      body::-webkit-scrollbar{
        width: 0.4rem;
      } 
      body::-webkit-scrollbar-track.dark-mode{
        background: black;
      }
      body::-webkit-scrollbar-track.light-mode{
        background: white;
      }
      body::-webkit-scrollbar-thumb{
        background: var(--mypink);
      }
      ::selection {
        background: var(--mypink);
      }
      `}
    </style>
    </ThemeProvider>
  )
}
export default MyApp