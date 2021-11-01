import React, { useState, useEffect } from 'react';
import styles from '../styles/index.module.css';
import Button from '../components/Button';
import GitHubIcon from '../components/SvgIcons/gitHubIcon';
import { loginWithGithub, authStateChanged } from '../firebase/client';

export default function Home() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    await loginWithGithub();
  };

  useEffect(() => {
    authStateChanged(setUser);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.sectionLogo}>
          <img className={styles.logo} alt="logo" src="/logo.png" />
          <h1 className={styles.appName}>Devempire</h1>
        </div>
        <h2 className={styles.aboutApp}>
          Talk about development
          {' '}
          <br />
          {' '}
          with developers
        </h2>
        <div className={styles.buttonLoginContainer}>
          {!user ? (
            <Button onClick={handleLogin}>
              <GitHubIcon />
              Login with GitHub
            </Button>
          ) : (
            <div>
              <img width="100" src={user.photoUrl} alt="avatar" />
              <strong>{user.screenName}</strong>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
