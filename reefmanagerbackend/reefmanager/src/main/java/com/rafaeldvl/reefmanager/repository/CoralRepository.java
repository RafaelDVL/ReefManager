package com.rafaeldvl.reefmanager.repository;

import com.rafaeldvl.reefmanager.models.Corals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface CoralRepository extends JpaRepository<Corals, Long> {

    @Override
    List<Corals> findAll();



}
