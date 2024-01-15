import PlaylistItem from "./PlaylistItem";
import { useState } from "react";

interface Props {
  items: PlaylistItem[];
}

interface PlaylistItem {
  name: string;
  index: number;
}

const handleClick = (
  e: React.MouseEvent<HTMLElement>,
  index: number,
  setSelectedIndex: (x: number) => void
) => {
  console.log(e);
  setSelectedIndex(index);
};

const displayActive = (
  { name, index }: PlaylistItem,
  selectedIndex: number,
  setSelectedIndex: (x: number) => void
) => {
  let styles = ["list-group-item"];
  if (index == selectedIndex) {
    styles.push("active");
  }
  return (
    <li
      className={styles.join(" ")}
      onClick={(e) => handleClick(e, index, setSelectedIndex)}
      key={index}
    >
      <PlaylistItem name={name} />
    </li>
  );
};

function PlaylistList({ items }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <ul className="list-group list-group-flush g-0">
      {items.map((item) =>
        displayActive(item, selectedIndex, setSelectedIndex)
      )}
    </ul>
  );
}

export default PlaylistList;
