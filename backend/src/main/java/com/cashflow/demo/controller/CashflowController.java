package com.cashflow.demo.controller;
import com.cashflow.demo.model.Cashflow;
import com.cashflow.demo.repository.CashflowRepository;
import com.cashflow.demo.service.CashflowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cashflow")
public class CashflowController {


    @Autowired
    private CashflowService cashflowService;

    @PostMapping("/create")
    public Cashflow createCashflow(@RequestBody Cashflow cashflow) {
        return cashflowService.saveCashflow(cashflow);
    }


}
