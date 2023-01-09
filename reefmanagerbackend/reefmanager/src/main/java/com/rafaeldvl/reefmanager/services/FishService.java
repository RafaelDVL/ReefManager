package com.rafaeldvl.reefmanager.services;

import com.rafaeldvl.reefmanager.models.Corals;
import com.rafaeldvl.reefmanager.models.Fishs;
import com.rafaeldvl.reefmanager.repository.FishRepository;
import com.rafaeldvl.reefmanager.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FishService {

    @Autowired
    FishRepository repository;

    public Fishs findById(Long id){
        Optional<Fishs> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado! Id: " + id + ", Tipo " + Fishs.class.getName()));
    }

    public Fishs update(Long id, Fishs fish) {
        Fishs oldfish = findById(id);
        oldfish.setNome(fish.getNome());
        oldfish.setDificuldade(fish.getDificuldade());
        oldfish.setDescription(fish.getDescription());
        oldfish.setAlimentacao(fish.getAlimentacao());
        oldfish.setUrlimage(fish.getUrlimage());
        oldfish.setAquariomin(fish.getAquariomin());
        return repository.save(oldfish);
    }
}
