import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import LandingPage from '../pages/LandingPage/LandingPage';
import MainPage from '../pages/MainPage/MainPage';
import TeamPage from '../pages/TeamPage/TeamPage';
import InstructionsPage from '../pages/InstructionsPage/InstructionsPage';
import GamePage from '../pages/GamePage/GamePage';

function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<LandingPage />}/>
                <Route path={"/main"} element={<MainPage />} />
                <Route path={"/team"} element={<TeamPage />} />
                <Route path={"/instructions"} element={<InstructionsPage />} />
                <Route path={"/game"} element={<GamePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;