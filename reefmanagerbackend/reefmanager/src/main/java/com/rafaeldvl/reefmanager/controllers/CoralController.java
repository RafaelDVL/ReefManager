package com.rafaeldvl.reefmanager.controllers;


import com.rafaeldvl.reefmanager.models.Corals;
import com.rafaeldvl.reefmanager.repository.CoralRepository;
import com.rafaeldvl.reefmanager.services.CoralService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/corals")
public class CoralController {

    @Autowired
    private final CoralRepository repository;

    @Autowired
    private final CoralService service;

    @GetMapping("/all")
    public List<Corals> findAll(){
        return repository.findAll();
    }

    @GetMapping("/findid/{id}")
    public Optional<Corals> findById(@PathVariable Long id){
        return repository.findById(id);
    }

    @PostMapping("/create")
    public ResponseEntity<Corals> createNew(@RequestBody Corals obj){
        repository.save(obj);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Corals> update(@PathVariable Long id, @RequestBody Corals corals){
        Corals coralupdate = service.update(id, corals);
        return ResponseEntity.status(HttpStatus.OK).body(coralupdate);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }


}
