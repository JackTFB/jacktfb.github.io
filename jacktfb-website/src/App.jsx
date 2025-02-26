import './App.css'
import {useEffect, useState} from "react";
import Start from "./Pages/Start.jsx";
import Home from "./Pages/Home.jsx";

function App() {

    const [page, setPage] = useState('start');

    useEffect(() => {
        switch (page) {
            case 'start':
                document.body.classList.add('start-page');
                document.body.classList.remove('home-page');
                break;
            case 'home':
                document.body.classList.add('home-page');
                document.body.classList.remove('start-page');
                break;
            default:
                break;
        }
    }, [page]);

  return (
    <>
        {page === 'start' && <Start setPage={setPage}/>}
        {page === 'home' && <Home setPage={setPage}/>}
    </>
  )
}

export default App
