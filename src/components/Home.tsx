import PlaylistSidebar from "./sidebar/PlaylistSidebar.tsx";
import PlaylistEditor from "./editor/PlaylistEditor.tsx";
import Navbar from "./navbar/Navbar.tsx";
function Home() {
  const SIDEBAR_WIDTH = 200;
  return (
    <div className="container-fluid vh-100">
      <div className="row bg-primary">
        <Navbar />
      </div>
      <div className="row h-100">
        <div className="col-auto bg-light g-0" style={{ width: SIDEBAR_WIDTH }}>
          <PlaylistSidebar />
        </div>
        <div className="col bg-secondary g-0">
          <PlaylistEditor />
        </div>
      </div>
    </div>
  );
}

export default Home;
