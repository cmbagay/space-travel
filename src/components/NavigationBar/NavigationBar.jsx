import { Link } from "react-router-dom";

import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/spacecrafts">Spacecrafts</Link></li>
      <li><Link to="/planets">Planets</Link></li>
    </ul>
  );
}

export default NavigationBar;
