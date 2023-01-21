import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/Aboutus";
import Blog from "./components/Blogs";
import Faq from "./components/Faq";
import Moodselect from "./components/Moodselect";
import Song from "./components/Song";
import { useState } from "react";
import { GetSongsAction } from "./actions/songs";

function App() {
  const [songs, setSongs] = useState([
    {
      lind: "https://youtu.be/BddP6PYo2gs",
      singer: "sdsd",
      title: "dsdsd",
    },
  ]);

  //TODO: suffle array
  const OnclickTag = async (tag) => {
    const Allsongs = await GetSongsAction({}, tag);
    let AllSongsState = [];
    Allsongs.forEach((s, i) => {
      AllSongsState.push({
        lind: Allsongs[i].URL,
        singer: Allsongs[i].singer,
        title: Allsongs[i].title,
      });
    });
    console.log(AllSongsState);
    if (Allsongs) {
      setSongs(AllSongsState);
    }
    console.log(songs);
  };
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/song" element={<Song song={songs} />} />
          <Route
            path="/mood"
            element={<Moodselect OnclickTag={OnclickTag} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;