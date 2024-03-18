import React from 'react'
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className={styles.NavContainer}>
        <Link to="/dashboard/chats" className={styles.navItem}>Chats</Link>
        <Link to="/dashboard/story" className={styles.navItem}>Story</Link>
        <Link to="/dashboard/call" className={styles.navItem}>Calls</Link>
    </div>
  )
}

export default Nav
