import React from 'react';
import { EducationItem } from '../../types/content';
import styles from './Education.module.css';

const education: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'Университет продакт-менеджмента',
    degree: 'Степень / программа (заглушка)',
    period: '2012 — 2016',
  },
  {
    id: 'edu-2',
    institution: 'Дополнительное образование',
    degree: 'Программа по аналитике данных (заглушка)',
    period: '2018',
  },
];

const Education: React.FC = () => (
  <section id="education" className={styles.section}>
    <h2 className={styles.title}>Образование</h2>
    <ul className={styles.list}>
      {education.map((item) => (
        <li key={item.id} className={styles.item}>
          <div className={styles.mainLine}>
            <span className={styles.institution}>{item.institution}</span>
            <span className={styles.period}>{item.period}</span>
          </div>
          <p className={styles.degree}>{item.degree}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Education;
