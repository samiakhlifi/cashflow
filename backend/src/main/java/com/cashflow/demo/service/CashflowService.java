package com.cashflow.demo.service;

import com.cashflow.demo.model.Cashflow;
import com.cashflow.demo.repository.CashflowRepository;
import lombok.Data;
import org.apache.catalina.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Data
@Service
public class CashflowService {


    @Autowired
    private CashflowRepository cashflowRepository;

    public Cashflow saveCashflow(Cashflow cashflow) {
        Cashflow savedCashflow = cashflowRepository.save(cashflow);
        return savedCashflow;
    }
}
