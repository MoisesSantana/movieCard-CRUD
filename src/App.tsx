import { Route, Routes } from "react-router-dom";

import {
  MovieList,
  MovieDetails,
  NewMovie,
  EditMovie,
  NotFound,
} from "./pages/index";
import "./index.css";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/new" element={<NewMovie />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/edit" element={<EditMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
