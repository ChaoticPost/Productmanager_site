import React from 'react';
import { WorkItem } from '../../types/content';
import styles from './Work.module.css';

const items: WorkItem[] = [
  {
    id: 'work-1',
    title: 'Платформа аналитики для SaaS',
    description: 'Заглушка: описание ключевого кейса по запуску аналитики и росту продуктовых метрик.',
    role: 'Lead Product Manager',
    year: '2023',
  },
  {
    id: 'work-2',
    title: 'Мобильное приложение для b2c-аудитории',
    description: 'Заглушка: кейс про рост retention и воронку активации.',
    role: 'Product Manager',
    year: '2022',
  },
  {
    id: 'work-3',
    title: 'Внутренняя платформа для команд',
    description: 'Заглушка: оптимизация процессов и автоматизация рутины.',
    role: 'Product Owner',
    year: '2021',
  },
];

const Work: React.FC = () => (
  <section id="work" className={styles.section}>
    <div className={styles.header}>
      <h2 className={styles.title}>Работы и проекты</h2>
      <p className={styles.subtitle}>
        Пока здесь заглушка. Секции можно будет наполнить реальными кейсами, метриками и артефактами.
      </p>
    </div>
    <div className={styles.grid}>
      {items.map((item) => (
        <article key={item.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.year}>{item.year}</span>
            <span className={styles.role}>{item.role}</span>
          </div>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardDescription}>{item.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Work;
