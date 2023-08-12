import React, { useState } from 'react'
import FirstSection from './Components/FirstSection'
import SecondSection from './Components/SecondSection'
import ThirdSection from './Components/ThirdSection'
import FourthSection from './Components/FourthSection'
import FifthSection from './Components/FifthSection'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Toggle from './Components/Toggle'


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <div  className={isDarkMode ? 'dark-mode' : ''}>
        <Toggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <FirstSection isDarkMode={isDarkMode} />
        <SecondSection  isDarkMode={isDarkMode}/>
        <ThirdSection isDarkMode={isDarkMode} />
        <FourthSection  isDarkMode={isDarkMode}/>
        <FifthSection isDarkMode={isDarkMode}/>
        <Faq />
        <Footer />
      </div>

    </>
  )
}

export default App
