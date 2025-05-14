import axios from "axios";

type MoviesApiResponse = {
  movies: Movie[];
  totalPages: number;
}

export type Movie = {
  id: string;
  crew: string;
  image_url: string;
  rating: string;
  title: string;
  year: string;
}

export const getMovies = async (currentPage: number): Promise<MoviesApiResponse> => {
  const results = await axios.get(`https://movies.slideworks.cc/movies?page=${currentPage}`);
  return {
    movies: results.data.data,
    totalPages: results.data.pagination.total
  };
};
