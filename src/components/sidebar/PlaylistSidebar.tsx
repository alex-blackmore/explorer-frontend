import PlaylistList from "./PlaylistList.tsx";

function PlaylistSidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <PlaylistList
          items={[
            { name: "playlist1", index: 0 },
            { name: "playlist2", index: 1 },
          ]}
        />
      </div>
    </div>
  );
}

export default PlaylistSidebar;
