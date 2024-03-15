import styles from "./HomePage.module.css";
import { Chip } from "../../components/Chip";
import { VideoThumbnail } from "../../components/VideoThumbnail";
import { SearchBar } from "../../components/SearchBar";

export function HomePage() {
  return (
    <div className={styles["home-page"]}>
      <Chip color="red">Felipe Neto</Chip>
    </div>
  );
}

function TagsSection() {
  return (
    <section id="user-tags">
      <Chip>Felipe neto</Chip>
    </section>
  );
}
