package com.example.desafioapi.service;

import com.example.desafioapi.model.Partida;
import com.example.desafioapi.repository.PartidaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

@Service
public class PartidaService {

    @Autowired
    private PartidaRepository partidaRepository;

    public Partida atualizar(Long codigo, Partida partida){

        Partida partidaSalva = this.partidaRepository.findById(codigo)
                .orElseThrow(() -> new EmptyResultDataAccessException(1));

        BeanUtils.copyProperties(partida, partidaSalva, "codigo");

        return partidaRepository.save(partidaSalva);
    }
}
