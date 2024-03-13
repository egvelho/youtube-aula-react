import { MdMenu, MdSearch } from "react-icons/md";
import styles from "./AppBar.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { IconButton } from "../../components/IconButton/IconButton";
import { OutlineButton } from "../../components/OutlineButton";
import { YouTubeLogo } from "../../components/YouTubeLogo";

function onClickButton() {
  alert("Clicou no botão!");
}

export function AppBar() {
  return (
    <header className={styles["app-bar"]}>
      <IconButton onClick={onClickButton}>
        <MdMenu />
      </IconButton>
      <YouTubeLogo />
      YouTube
      <IconButton onClick={onClickButton}>
        <MdSearch />
      </IconButton>
      <OutlineButton>
        <FaCircleUser /> Fazer login
      </OutlineButton>
    </header>
  );
}
