import { MENUS } from "../../util/data";
import "../../style/nav.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          {MENUS.map((menu, index) => (
            <li key={index}>
              <a href={menu.url}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
