package com.rafaeldvl.reefmanager.repository;

import com.rafaeldvl.reefmanager.models.Fishs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface FishRepository extends JpaRepository<Fishs, Long> {

    @Override
    List<Fishs> findAll();
}
