import { Flex, Card, Typography, Image } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { Movie } from '../utils/api';
const { Text } = Typography;

type MoviesGridProps = {
  movies: Movie[];
};

export function Movies({ movies }: MoviesGridProps) {
  return (
    <Flex wrap="wrap" className='container'>
      {movies.map((movie, index) => (
        <Flex key={index} className='movies-container'>
          <Card className='card'>
            <Flex className='movie-info' vertical>
              <Image
                width={248}
                height={372}
                src={movie.image_url}
                className='image'
                alt={movie.title}
              />
              <Text className='title'>
                {movie.title}
              </Text>
              <Text className='movie-year'>Ano de lançamento: {movie.year}</Text>
              <Text className='movie-crew'>{movie.crew}</Text>
              <Flex className='rating-container'>
                <Flex className="rating">
                  <StarFilled className="rating-star" />
                  <span className="rating-text">{movie.rating}/10</span>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      ))}
    </Flex>
  );
}
