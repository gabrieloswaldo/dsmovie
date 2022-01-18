package com.devsuperior.dsmovie.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ScoreDTO {

    private String email;

    private Long movieId;

    private Double score;
}
