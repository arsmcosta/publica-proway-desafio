package com.example.desafioapi.service;

import com.example.desafioapi.model.Partida;
import com.example.desafioapi.repository.PartidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PartidaService {

    @Autowired
    private PartidaRepository partidaRepository;

    public Partida adicionarPartida(Partida partida) {
        List<Partida> listaDePartidas = partidaRepository.findAll();

        if (listaDePartidas.isEmpty()) {
            partida.setMax_temporada(partida.getPontos());
            partida.setMin_temporada(partida.getPontos());
            return partidaRepository.save(partida);
        }

        setMaxMinPartida(partida, listaDePartidas);

        partidaRepository.save(partida);
        listaDePartidas.add(partida);

        setQuebraMaxMin(partida, listaDePartidas);

        return partidaRepository.save(partida);
    }

    private void setQuebraMaxMin(Partida partida, List<Partida> listaDePartidas) {
        int quebraMax = listaDePartidas.stream().map(Partida::getMax_temporada).collect(Collectors.toSet()).size();
        int quebraMin = listaDePartidas.stream().map(Partida::getMin_temporada).collect(Collectors.toSet()).size();
        partida.setQuebra_max(quebraMax - 1);
        partida.setQuebra_min(quebraMin - 1);
    }

    private void setMaxMinPartida(Partida partida, List<Partida> listaDePartidas) {
        int max_temporada = Collections.max(listaDePartidas, Comparator.comparing(Partida::getMax_temporada)).getMax_temporada();
        int min_temporada = Collections.min(listaDePartidas, Comparator.comparing(Partida::getMin_temporada)).getMin_temporada();

        if (partida.getPontos() > max_temporada)
            partida.setMax_temporada(partida.getPontos());
        else
            partida.setMax_temporada(max_temporada);

        if (partida.getPontos() < min_temporada)
            partida.setMin_temporada(partida.getPontos());
        else
            partida.setMin_temporada(min_temporada);
    }

    public Optional<Partida> obterPorCodigo(Long codigo) {
        return partidaRepository.findById(codigo);
    }

    public void deletarPorCodigo(Long codigo) {
        partidaRepository.deleteById(codigo);
    }

    public Page<Partida> obterTodos(Pageable pageable) {
        return partidaRepository.findAll(pageable);
    }
}
