package com.rafaeldvl.reefmanager.services;

import com.rafaeldvl.reefmanager.models.Invert;
import com.rafaeldvl.reefmanager.repository.InvertRepository;
import com.rafaeldvl.reefmanager.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InvertService {

    @Autowired
    InvertRepository repository;

    public Invert findById(Long id){
        Optional<Invert> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado! Id: " + id + ", Tipo " + Invert.class.getName()));
    }

    public Invert update(Long id, Invert invert) {
        Invert oldinvert = findById(id);
        oldinvert.setNome(invert.getNome());
        oldinvert.setDificuldade(invert.getDificuldade());
        oldinvert.setDescription(invert.getDescription());
        oldinvert.setAlimentacao(invert.getAlimentacao());
        oldinvert.setUrlimage(invert.getUrlimage());
        oldinvert.setAquariomin(invert.getAquariomin());
        return repository.save(oldinvert);
    }
}
