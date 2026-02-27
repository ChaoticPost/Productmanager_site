import React from 'react';
import { JobItem } from '../../types/content';
import styles from './Job.module.css';

const jobs: JobItem[] = [
  {
    id: 'job-1',
    company: 'Компания A',
    title: 'Lead Product Manager',
    period: '2022 — н.в.',
  },
  {
    id: 'job-2',
    company: 'Компания B',
    title: 'Product Manager',
    period: '2019 — 2022',
  },
  {
    id: 'job-3',
    company: 'Компания C',
    title: 'Product Owner',
    period: '2016 — 2019',
  },
];

const Job: React.FC = () => (
  <section id="job" className={styles.section}>
    <h2 className={styles.title}>Опыт работы</h2>
    <ul className={styles.list}>
      {jobs.map((job) => (
        <li key={job.id} className={styles.item}>
          <div className={styles.timelineDot} />
          <div className={styles.content}>
            <div className={styles.row}>
              <span className={styles.company}>{job.company}</span>
              <span className={styles.period}>{job.period}</span>
            </div>
            <p className={styles.role}>{job.title}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Job;
