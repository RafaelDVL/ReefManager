package com.rafaeldvl.reefmanager.controllers;

import com.rafaeldvl.reefmanager.models.Fishs;
import com.rafaeldvl.reefmanager.repository.FishRepository;
import com.rafaeldvl.reefmanager.services.FishService;
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
@RequestMapping("/api/fishs")
public class FishController {

    @Autowired
    private final FishService service;

    @Autowired
    private final FishRepository repository;


    @GetMapping("/all")
    public List<Fishs> findAll(){
        return repository.findAll();
    }

    @GetMapping("findid/{id}")
    public Optional<Fishs> findById(@PathVariable Long id) {
        return repository.findById(id);
    }

    @PostMapping("/create")
    public ResponseEntity<Fishs> save(@RequestBody Fishs obj){
        repository.save(obj);
        return ResponseEntity.status(HttpStatus.CREATED).body(obj);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Fishs> update(@PathVariable Long id, @RequestBody Fishs fish){
        Fishs fishupdate = service.update(id, fish);
        return ResponseEntity.status(HttpStatus.OK).body(fishupdate);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
