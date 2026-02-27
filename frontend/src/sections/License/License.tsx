import React from 'react';
import { LicenseItem } from '../../types/content';
import styles from './License.module.css';

const licenses: LicenseItem[] = [
  {
    id: 'lic-1',
    name: 'Сертификат по продакт-менеджменту (заглушка)',
    issuer: 'Провайдер А',
    year: '2023',
  },
  {
    id: 'lic-2',
    name: 'Сертификат по аналитике / SQL (заглушка)',
    issuer: 'Провайдер B',
    year: '2021',
  },
];

const License: React.FC = () => (
  <section id="license" className={styles.section}>
    <h2 className={styles.title}>Сертификаты и лицензии</h2>
    <ul className={styles.list}>
      {licenses.map((item) => (
        <li key={item.id} className={styles.item}>
          <div className={styles.header}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.year}>{item.year}</span>
          </div>
          <p className={styles.issuer}>{item.issuer}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default License;
