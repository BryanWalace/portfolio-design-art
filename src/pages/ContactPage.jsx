import React from 'react';
import styles from './ContactPage.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profileImage from '../assets/images/perfil.png'; 

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Obrigado pelo seu contato!');
  };

  return (
    <>
      <Header isHomePage={false} />
      <div className={styles.contactPage}>
        <section className={styles.aboutSection}>
          <div className={styles.profileImageContainer}>
            <img src={profileImage} alt="Foto do Artista" />
          </div>
          <div className={styles.aboutText}>
            <h2>Sobre RAMD</h2>
            <p>
              Artista digital e cosplayer apaixonado pelo universo de animes e games. Com anos de experiência em ilustração digital utilizando o Photoshop, busco criar peças que capturam a essência e a emoção dos personagens.
            </p>
            <p>
              Cada cosplay é um projeto de amor, desde a costura e confecção até a performance final. Este portfólio é uma janela para o meu mundo criativo. Sinta-se à vontade para explorar e entrar em contato!
            </p>
          </div>
        </section>
        <section className={styles.formSection}>
          <h2>Entre em Contato</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Seu Nome</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Seu Email</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;