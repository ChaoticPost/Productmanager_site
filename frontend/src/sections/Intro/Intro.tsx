import React from 'react';
import styles from './Intro.module.css';

const Intro: React.FC = () => (
  <section id="intro" className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.textBlock}>
        <p className={styles.greeting}>Привет, я</p>
        <h1 className={styles.name}>Имя Фамилия</h1>
        <p className={styles.role}>Product Manager</p>
        <p className={styles.description}>
          Здесь будет краткое «обо мне»: сфокусирован на запуске продуктов, работе с метриками
          и выстраивании процессов. Пока это текст-заглушка.
        </p>
      </div>
      <div className={styles.avatarWrapper}>
        <div className={styles.avatar}>
          <span className={styles.avatarInitials}>PM</span>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
