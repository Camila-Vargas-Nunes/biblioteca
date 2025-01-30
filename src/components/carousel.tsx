import { Flex, Carousel, Image } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { Movie } from '../utils/api';

type MoviesCarouselProps = {
  bestMovies: Movie[];
};
// Fiquei com um pouco de dificuldade de implementar o Carousel, consultei algumas partes para implementar da melhor forma
export function MoviesCarousel({ bestMovies }: MoviesCarouselProps) {
  return (
    <Flex>
      <Carousel arrows infinite={false} dots={{ className: 'custom-dots' }}>
        {bestMovies.map((movie, index) => (
          <div key={index} className="movie-carousel">
            <Image
              src={movie.image_url}
              className="image-carousel"
              alt={movie.title}
            />
            <div className="movie-title-overlay">
              <Flex className="banner-best-title" vertical>
                <p className="best-month">Destaque do mês</p>
                <p className="banner-title">{movie.title}</p>
              </Flex>

              <Flex className="rating-banner-crew" vertical={false}>
                <Flex className='rating-banner'>
                  <Flex className='rating-banner-container'>
                    <StarFilled className="rating-star-banner" />
                    <span className="rating-text">{movie.rating}/10</span>
                  </Flex>
                </Flex>
                <p className='movie-crew-banner'>{movie.crew}</p>
              </Flex>
            </div>
          </div>
        ))}
      </Carousel>
    </Flex>
  )
}

// A imagem do carousel estava ajustada, porem fui ajustar outras propriedades o que acabou me atrapalhando com o tempo. Por isso não consegui entregar perfeito como gostaria.