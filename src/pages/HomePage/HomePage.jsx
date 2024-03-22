import styles from "./HomePage.module.css";
import { VideoThumbnail } from "../../components/VideoThumbnail";
import { Chip } from "../../components/Chip";
import { SearchBar } from "../../components/SearchBar";
import tw from "tailwind-styled-components";

function CaixaColorTail({ className }) {
  return (
    <div
      className={`w-[128px] h-[128px] border-2 border-red-500 ${className}`}
    />
  );
}

const CaixaColor = tw.div`
w-[128px]
h-[128px]
border-2
border-red-500
`;

export function HomePage() {
  return (
    <div className={styles["home-page"]}>
      <CaixaColor className="bg-red-500 hover:bg-red-600" />
    </div>
  );
}
