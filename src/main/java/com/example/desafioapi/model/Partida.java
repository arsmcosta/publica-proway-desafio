package com.example.desafioapi.model;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.PositiveOrZero;
import java.util.Objects;

@Entity
@Table(name = "partida")
public class Partida {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;

    @PositiveOrZero
    @Max(1000)
    private int pontos;

    private int max_temporada;

    private int min_temporada;

    public Partida() {
    }

    public Partida(@PositiveOrZero @Max(1000) int pontos) {
        this.pontos = pontos;
    }

    public Partida(long codigo, int pontos) {
        this.codigo = codigo;
        this.pontos = pontos;
    }

    public Partida(Long codigo, @PositiveOrZero @Max(1000) int pontos, int max_temporada, int min_temporada, int quebra_max, int quebra_min) {
        this.codigo = codigo;
        this.pontos = pontos;
        this.max_temporada = max_temporada;
        this.min_temporada = min_temporada;
        this.quebra_max = quebra_max;
        this.quebra_min = quebra_min;
    }

    public Partida(@PositiveOrZero @Max(1000) int pontos, int max_temporada, int min_temporada, int quebra_max, int quebra_min) {
        this.pontos = pontos;
        this.max_temporada = max_temporada;
        this.min_temporada = min_temporada;
        this.quebra_max = quebra_max;
        this.quebra_min = quebra_min;
    }

    public int getQuebra_max() {
        return quebra_max;
    }

    public void setQuebra_max(int quebra_max) {
        this.quebra_max = quebra_max;
    }

    public int getQuebra_min() {
        return quebra_min;
    }

    public void setQuebra_min(int quebra_min) {
        this.quebra_min = quebra_min;
    }

    private int quebra_max;

    private int quebra_min;


    public Long getCodigo() {
        return codigo;
    }

    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }

    public int getPontos() {
        return pontos;
    }

    public void setPontos(int pontos) {
        this.pontos = pontos;
    }

    public int getMax_temporada() {
        return max_temporada;
    }

    public void setMax_temporada(int max_temporada) {
        this.max_temporada = max_temporada;
    }

    public int getMin_temporada() {
        return min_temporada;
    }

    public void setMin_temporada(int min_temporada) {
        this.min_temporada = min_temporada;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Partida partida = (Partida) o;
        return pontos == partida.pontos &&
                codigo.equals(partida.codigo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(codigo);
    }
}
