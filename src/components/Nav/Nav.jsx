import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css';

class Nav extends React.Component {
  render() {
    return (
      <div className={styles["nav-container"]}>
        <nav>
          <ul>
            <li>
              <NavLink to="/home" activeClassName={styles.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName={styles.active}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles["search-container"]}>
          <SearchBar onSearch={this.props.onSearch} />
        </div>
      </div>
    );
  }
}

export default Nav;
