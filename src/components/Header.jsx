import React, { useEffect, useState } from 'react';
// import '../index.css';

const Header = () => {
    const [theme,setTheme] = useState( isValidJSONString(localStorage.getItem("theme")) ? JSON.parse(localStorage.getItem("theme")) : localStorage.getItem("theme") ||  "medium");
    useEffect(() => {
        document.documentElement.removeAttribute("class")
        document.documentElement.classList.add(theme)
        localStorage.setItem("theme",JSON.stringify(theme));
    },[theme]);

    function isValidJSONString(str) {
        try {
          JSON.parse(str);
        } catch (e) {
          return false;
        }
        return true;
      }
  return (
    <header className='header'>
        <div className='logo'>
        <img src="logo.svg" alt="logo"/>
        <span>Taskmate</span>
        </div>
        <div className='themeSelector'>
            <span onClick={() => setTheme("light")} className={theme === 'light' ? 'light activeTheme' : 'light'}></span>
            <span onClick={() => setTheme("medium")}  className={theme === 'medium' ? 'medium activeTheme' : 'medium'}></span>
            <span onClick={() => setTheme("dark")}  className={theme === 'dark' ? 'dark activeTheme' : 'dark'}></span>
            {/* <span className='gradientOne'></span>
            <span className='gradientTwo'></span> */}
        </div>
        
    </header>
  )
}

export default Header