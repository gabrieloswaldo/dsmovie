package com.devsuperior.dsmovie.services;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.ScorePk;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class ScoreService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private ScoreRepository scoreRepository;

    @Transactional
    public MovieDTO saveScore(ScoreDTO scoreDTO) throws EntityNotFoundException {
        User user = userRepository.findByEmail(scoreDTO.getEmail()).orElse(
                userRepository.saveAndFlush(new User(scoreDTO.getEmail()))
        );

        Optional<Movie> movie = movieRepository.findById(scoreDTO.getMovieId());
        if (movie.isEmpty()) {
            throw new EntityNotFoundException(
                    String.format("movie with id{%d} not found", scoreDTO.getMovieId()));
        }

        scoreRepository.saveAndFlush(
                Score.builder()
                        .id(new ScorePk(movie.get(), user))
                        .value(scoreDTO.getScore())
                        .build()
        );

        double avg = movie.get().getScores().stream().reduce(
                0.0, (cumSum, movieScore) -> cumSum + movieScore.getValue(), Double::sum)
                / movie.get().getScores().size();

        movie.get().setScore(avg);
        movie.get().setCount(movie.get().getScores().size());

        return new MovieDTO(movieRepository.save(movie.get()));
    }
}
