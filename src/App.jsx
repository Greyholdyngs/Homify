import Header from './components/Header';
import Stats from './components/Stats.jsx';
import Sections from './components/Sections.jsx';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Createccount from './pages/Createaccount.jsx';

function App() {

    useEffect(() => {
        AOS.init({duration: 1000,})
    }, [])

  return (
    <div>
      <Header />
      <Stats />
      <Sections />
    </div>
  )
}

export default App
