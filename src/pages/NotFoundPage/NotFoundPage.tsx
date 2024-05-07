import styles from "./NotFoundPage.module.scss";
// import notFoundImage from '../assets/images/not-found-image.svg';

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      {/* <img src={notFoundImage} alt="Página no encontrada" className={styles.animatedImage} /> */}
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe en Mercado Libre.</p>
    </div>
  );
};

export default NotFoundPage;
