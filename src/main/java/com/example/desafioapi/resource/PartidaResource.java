package com.example.desafioapi.resource;

import com.example.desafioapi.event.RecursoCriadoEvent;
import com.example.desafioapi.model.Partida;
import com.example.desafioapi.service.PartidaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/partidas")
public class PartidaResource {

    @Autowired
    private ApplicationEventPublisher publisher;

    @Autowired
    private PartidaService partidaService;

    @GetMapping
    public List<Partida> listar() {
        return partidaService.obterTodos();
    }

    @PostMapping
    public ResponseEntity<Partida> criar(@Valid @RequestBody Partida partida, HttpServletResponse response) {
        Partida partidaSalva = partidaService.salvar(partida);

        publisher.publishEvent(new RecursoCriadoEvent(this, response, partidaSalva.getCodigo()));
        return ResponseEntity.status(HttpStatus.CREATED).body(partidaSalva);
    }

    @GetMapping("/{codigo}")
    public ResponseEntity<Partida> buscarPeloCodigo(@PathVariable Long codigo) {
        Optional<Partida> partida = partidaService.obterPorCodigo(codigo);
        return partida.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{codigo}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void remover(@PathVariable Long codigo) {
        partidaService.deletarPorCodigo(codigo);
    }

    @PutMapping("/{codigo}")
    public ResponseEntity<Partida> atualizar(@Valid @PathVariable Long codigo, @RequestBody Partida partida) {
        Partida partidaSalva = partidaService.atualizar(codigo, partida);
        return ResponseEntity.ok(partidaSalva);
    }


}

