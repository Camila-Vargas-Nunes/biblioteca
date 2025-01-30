"use client"
import React, { useEffect, useState } from 'react';
import { Pagination, Skeleton } from 'antd';
import { getMovies, Movie } from "../utils/api";
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { MoviesCarousel } from '../components/carousel';
import { Movies } from '../components/movies';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [bestMovies, setBestMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchMovies() {
      const { movies, totalPages } = await getMovies(currentPage);
      const sortedMovies = movies.sort((a: any, b: any) => b.rating - a.rating);
      const topMovies = sortedMovies.slice(0, 3);
      setMovies(movies);
      setTotalPages(totalPages);
      setBestMovies(topMovies);
      setIsLoading(false);
    }

    fetchMovies();
  }, [currentPage]);

  return (
    <>
      <Header />
      <Skeleton active={isLoading} loading={isLoading} paragraph={{ rows: 10 }}>
        <MoviesCarousel bestMovies={bestMovies} />
        <Movies movies={movies} />

        <Pagination
          defaultCurrent={1}
          total={totalPages}
          onChange={(page: any) => setCurrentPage(page)}
          showSizeChanger={false}
          itemRender={(page: any, type: any, originalElement: any) => {
            if (type === 'page') {
              return (
                <button
                  style={{
                    backgroundColor: page === currentPage ? '#726BEA' : 'white',
                    color: page === currentPage ? 'white' : '#726BEA',
                    border: '1.2px solid #DADBE0',
                    borderRadius: 4,
                    padding: '5px 10px',
                  }}
                >
                  {page}
                </button>
              );
            }
            return originalElement;
          }}
        />
      </Skeleton>
      <Footer />
    </>
  );
}
