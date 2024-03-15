import { MdMenu, MdSearch } from "react-icons/md";
import styles from "./AppBar.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { IconButton } from "../../components/IconButton/IconButton";
import { OutlineButton } from "../../components/OutlineButton";
import { YouTubeLogo } from "../../components/YouTubeLogo";

/* ZONA DOS EXCLUÍDOS
<IconButton onClick={onClickButton}>
        <MdMenu />
      </IconButton>
*/

function onClickButton() {
  alert("Clicou no botão!");
}

export function AppBar() {
  return (
    <header className={styles["app-bar"]}>
      <LogoDiv />
      <ActionsDiv />
    </header>
  );
}

function LogoDiv() {
  return (
    <div>
      <YouTubeLogo />
    </div>
  );
}

function ActionsDiv() {
  return (
    <div>
      <IconButton onClick={onClickButton}>
        <MdSearch />
      </IconButton>
      <IconButton onClick={onClickButton}>
        <FaCircleUser />
      </IconButton>
    </div>
  );
}
