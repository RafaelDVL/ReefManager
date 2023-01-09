package com.rafaeldvl.reefmanager.repository;


import com.rafaeldvl.reefmanager.models.Invert;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public interface InvertRepository extends JpaRepository<Invert,Long> {

    @Override
    List<Invert> findAll();
}
