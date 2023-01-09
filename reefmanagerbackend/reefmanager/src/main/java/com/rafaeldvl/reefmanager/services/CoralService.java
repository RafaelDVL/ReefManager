package com.rafaeldvl.reefmanager.services;


import com.rafaeldvl.reefmanager.models.Corals;
import com.rafaeldvl.reefmanager.repository.CoralRepository;
import com.rafaeldvl.reefmanager.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CoralService {

    @Autowired
    CoralRepository repository;

    public Corals findById(Long id) {
        Optional<Corals> coral = repository.findById(id);
        return coral.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado! Id: " + id + ", Tipo " + Corals.class.getName()));
    }

    public Corals update(Long id, Corals coral){
        Corals oldCoral = findById(id);
        oldCoral.setTipo(coral.getTipo());
        oldCoral.setNome(coral.getNome());
        oldCoral.setDificuldade(coral.getDificuldade());
        oldCoral.setIluminacao(coral.getIluminacao());
        oldCoral.setCirculacao(coral.getCirculacao());
        oldCoral.setAgressividade(coral.getAgressividade());
        oldCoral.setUrlimage(coral.getUrlimage());
        oldCoral.setDescription(coral.getDescription());

        return repository.save(oldCoral);
    }
}
