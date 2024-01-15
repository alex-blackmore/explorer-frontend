interface PlaylistItemProps {
  name: string;
}

function PlaylistItem({ name }: PlaylistItemProps) {
  return <p>{name}</p>;
}

export default PlaylistItem;
