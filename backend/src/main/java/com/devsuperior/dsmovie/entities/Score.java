package com.devsuperior.dsmovie.entities;

import lombok.*;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "tb_score")
public class Score {

    @EmbeddedId
    private ScorePk id;

    private Double value;
}
