package com.rafaeldvl.reefmanager.controllers;

import com.rafaeldvl.reefmanager.models.Fishs;
import com.rafaeldvl.reefmanager.models.Invert;
import com.rafaeldvl.reefmanager.repository.InvertRepository;
import com.rafaeldvl.reefmanager.services.InvertService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@NoArgsConstructor
@RequestMapping("/api/inverts")
public class InvertController {

    @Autowired
    InvertRepository repository;

    @Autowired
    InvertService service;

    @GetMapping("/all")
    public List<Invert> findAll(){
        return repository.findAll();
    }
    @GetMapping("findid/{id}")
    public Optional<Invert> findById(@PathVariable Long id) {
        return repository.findById(id);
    }

    @PostMapping("/create")
    public ResponseEntity<Invert> save(@RequestBody Invert obj){
        repository.save(obj);
        return ResponseEntity.status(HttpStatus.CREATED).body(obj);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Invert> update(@PathVariable Long id, @RequestBody Invert fish){
        Invert invertupdate = service.update(id, fish);
        return ResponseEntity.status(HttpStatus.OK).body(invertupdate);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
