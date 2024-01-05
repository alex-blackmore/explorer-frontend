import PlaylistSidebar from "./components/sidebar/PlaylistSidebar.tsx";
import PlaylistEditor from "./components/editor/PlaylistEditor.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
function App() {
  return (
    <>
      <PlaylistSidebar />
      <Navbar />
      <PlaylistEditor />
    </>
  );
}

export default App;
