import { useState, useEffect } from "react";
import fetchVideos from "./components/YoutubeAPI";
import VideoList from "./components/VideoList";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Main from "./components/Main";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadVideos() {
    setLoading(true);
    setError(null);
    try {
      const fetchedVideos = await fetchVideos(query || "React tutorials");
      setVideos(fetchedVideos);
    } catch (err) {
      setError("An error occurred while fetching videos. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadVideos();
  }, []);

  const handleSearch = () => {
    if (query.trim() === "") return;
    loadVideos();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <NavBar>
        <Logo>YouTube Clone</Logo>
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      </NavBar>

      {/* Main Content */}
      <Main>
        {!loading && error && <Error message={error} />}
        {loading && <Loader />}
        {!loading && !error && videos.length === 0 && (
          <Error message="No videos found." />
        )}
        {!loading && !error && videos.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Recommended Videos</h2>
            <VideoList videos={videos} />
          </>
        )}
      </Main>
    </div>
  );
};

export default App;
