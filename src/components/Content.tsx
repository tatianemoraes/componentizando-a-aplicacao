import { MovieCard } from './MovieCard'

interface MovieCardProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Value: string,
  }>,
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface Content {
  selectedGenre: GenreResponseProps,
  movies: MovieCardProps[],
}

export function Content({ selectedGenre, movies } : Content) {
  return (
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}
