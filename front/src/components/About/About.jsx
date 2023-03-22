import React, { Component } from 'react';
import styles from './About.module.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: new Date().getFullYear()
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Acerca de</h1>
        <p className={styles.author}>Autor: David Orlando Miranda Roa</p>
        <p className={styles.institution}>Institución: Henry</p>
        <p className={styles.year}>Año: {this.state.currentYear}</p>
        <p className={styles.paragraph}>
          Proyecto con fines educativos, los nombres, personajes, logotipos y demas elementos
          renderizados pertenecen a sus creadores [adult swimm]
        </p>
      </div>
    );
  }
}

export default About;
