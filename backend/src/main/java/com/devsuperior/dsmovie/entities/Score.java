package com.devsuperior.dsmovie.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@Entity
@Table(name = "tb_score")
public class Score {

    @EmbeddedId
    private ScorePk id;

    private Double value;
}
