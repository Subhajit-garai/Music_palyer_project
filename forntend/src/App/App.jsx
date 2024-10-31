import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../pages/HomePage/Home.jsx'
import Music from '../pages/MuiscPage/Music.jsx'
import Nav from '../pages/nav/Nav'
import InnerPath from '../pages/nav/BreadcrumbComp.jsx'
import Playlist from '../pages/PlaylistPage/Playlist.jsx'
import CreatePlaylist from '../pages/PlaylistPage/CreatePlaylist.jsx'
import ErrorPage from '../pages/ErrorPage/error_page.jsx'
import GolobalMusicEle from "../utility/GlobalMusicElement/GolobalMusicEle.jsx";
import MusicPlayer from "../pages/MuiscPage/MusicPlayer.jsx";




function App() {
  return (
    <BrowserRouter>
      <Nav />
      <InnerPath />
      <GolobalMusicEle />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/playlist" element={<Playlist />}>
          <Route path="create-playlist" element={<CreatePlaylist />} />
        </Route>

        <Route path="/music" element={<Music />} />
        <Route path="create-playlist" element={<CreatePlaylist />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <MusicPlayer />
      <h1>footer</h1>
    </BrowserRouter>)
}

export default App
