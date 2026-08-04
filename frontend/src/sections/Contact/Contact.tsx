import React, { FormEvent } from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Контакты</h2>
        <p className={styles.subtitle}>
          Здесь будет форма обратной связи или ссылки на мессенджеры. Сейчас это аккуратная
          заглушка.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Основные контакты</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={styles.label}>Email</span>
              <a href="mailto:dariachugu_work@inbox.ru" className={styles.value}>
                dariachugu_work@inbox.ru
              </a>
            </li>
            <li className={styles.item}>
              <span className={styles.label}>LinkedIn</span>
              <a href="#" className={styles.value}>
                linkedin.com/in/placeholder
              </a>
            </li>
            <li className={styles.item}>
              <span className={styles.label}>Telegram</span>
              <a href="#" className={styles.value}>
                @placeholder
              </a>
            </li>
          </ul>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.formTitle}>Форма-заглушка</h3>
          <p className={styles.formHint}>
            Здесь позже можно будет реализовать рабочую форму. Пока поля не отправляют данные.
          </p>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Имя
            </label>
            <input id="name" name="name" className={styles.input} placeholder="Ваше имя" />
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input id="email" name="email" className={styles.input} placeholder="you@mail.com" />
          </div>
          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              rows={3}
              placeholder="Короткое сообщение"
            />
          </div>
          <button type="submit" className={styles.submit} disabled>
            Отправка пока недоступна
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
