package com.cashflow.demo.repository;

import com.cashflow.demo.model.Cashflow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CashflowRepository extends JpaRepository<Cashflow, Long> {
    

}
