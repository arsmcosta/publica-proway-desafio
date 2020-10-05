package com.example.desafioapi.resource;

import com.example.desafioapi.event.RecursoCriadoEvent;
import com.example.desafioapi.model.Partida;
import com.example.desafioapi.service.PartidaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/partidas")
@CrossOrigin(origins = "http://localhost:3000")
public class PartidaResource {

    @Autowired
    private ApplicationEventPublisher publisher;

    @Autowired
    private PartidaService partidaService;

    @GetMapping
    public Page<Partida> listar(Pageable pageable) {
        return partidaService.obterTodos(pageable);
    }

    @PostMapping
    public ResponseEntity<Partida> criar(@Valid @RequestBody Partida partida, HttpServletResponse response) {
        Partida partidaSalva = partidaService.adicionarPartida(partida);

        publisher.publishEvent(new RecursoCriadoEvent(this, response, partidaSalva.getCodigo()));
        return ResponseEntity.status(HttpStatus.CREATED).body(partidaSalva);
    }

    @GetMapping("/{codigo}")
    public ResponseEntity<Partida> buscarPeloCodigo(@PathVariable Long codigo) {
        Optional<Partida> partida = partidaService.obterPorCodigo(codigo);
        return partida.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

}

