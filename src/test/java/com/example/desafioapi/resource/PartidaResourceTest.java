package com.example.desafioapi.resource;


import com.example.desafioapi.model.Partida;
import com.example.desafioapi.repository.PartidaRepository;
import com.example.desafioapi.service.PartidaService;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.mockito.Mockito.when;

@SpringBootTest
public class PartidaResourceTest {


    @Autowired
    PartidaService partidaService;

    @MockBean
    PartidaRepository partidaRepository;


    @Test
    public void deveRetornarUmaPartidaCriada_QuandoBuscarPartida() {
        when(partidaService.obterPorCodigo(12L)).thenReturn(Optional.of(new Partida(12L, 12)));
        Partida partida = partidaService.obterPorCodigo(12L).orElse(null);
        Assert.assertNotNull(partida);
    }

    @Test
    public void deveRetornarUmaNovaPartida_QuandoAdicionarPartida() {
        when(partidaService.adicionarPartida(new Partida(1L, 12))).thenReturn(new Partida(1L, 12, 12, 12, 0, 0));
        Partida partida = partidaService.adicionarPartida(new Partida(1L, 12));
        Assert.assertNotNull(12);
        Assert.assertEquals(12, partida.getMax_temporada());
    }

    @Test
    public void deveRetornarPartidas_QuandoBuscar() {
        when(partidaRepository.findAll())
                .thenReturn(Stream.of(new Partida(1L, 12, 12, 12, 0, 0),
                        new Partida(2L, 24, 24, 12, 1, 0))
                        .collect(Collectors.toList()));

        List<Partida> partidas = partidaRepository.findAll();
        Assert.assertNotNull(partidas);
        Assert.assertEquals(2, partidas.size());
    }


}
