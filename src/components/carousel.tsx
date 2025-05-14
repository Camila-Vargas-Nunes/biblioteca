import { Carousel } from 'antd';
import { Movie } from '../utils/api';
import Image from 'next/image';
import styles from './carousel.module.css';

interface MoviesCarouselProps {
  bestMovies: Movie[];
}

export const MoviesCarousel: React.FC<MoviesCarouselProps> = ({ bestMovies }) => {
  const parseRating = (ratingString: string): number => {
    const rating = parseFloat(ratingString);
    return isNaN(rating) ? 0 : rating;
  };

  if (!bestMovies || bestMovies.length === 0) {
    return (
      <div className={styles.movieCarousel}>
        <div className={styles.slide}>
          <div className={styles.imageContainer}>
            <div className={styles.fallbackImage}>
              Nenhum filme disponível
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.movieCarousel}>
      <Carousel
        autoplay
        effect="fade"
        dots={{ className: styles.customDots }}
        className={styles.carousel}
      >
        {bestMovies.map((movie) => (
          <div key={movie.id} className={styles.slide}>
            <div className={styles.imageContainer}>
              <Image
                src={movie.image_url || 'https://via.placeholder.com/1440x577?text=Poster+N%C3%A3o+Dispon%C3%ADvel'}
                alt={movie.title}
                width={1440}
                height={577}
                className={styles.movieImage}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/1440x577?text=Poster+N%C3%A3o+Dispon%C3%ADvel';
                  target.className = `${styles.movieImage} ${styles.fallbackImage}`;
                }}
              />
              <div className={styles.overlay}>
                <div className={styles.bannerContent}>
                  <p className={styles.bestMonth}>Destaque do Mês</p>
                  <h1 className={styles.movieTitle}>{movie.title}</h1>
                  <div className={styles.movieInfo}>
                    <div className={styles.ratingContainer}>
                      <span className={styles.ratingStar}>★</span>
                      <span className={styles.ratingValue}>
                        {parseRating(movie.rating).toFixed(1)}
                      </span>
                    </div>
                    <p className={styles.movieCrew}>{movie.crew}</p>
                    <p className={styles.movieYear}>{movie.year}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};