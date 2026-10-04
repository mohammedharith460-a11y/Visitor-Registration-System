package com.visitorregistration.controller;

import com.visitorregistration.entity.Visitor;
import com.visitorregistration.service.VisitorService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class VisitorController {

    private final VisitorService visitorService;

    public VisitorController(VisitorService visitorService) {
        this.visitorService = visitorService;
    }

    @PostMapping("/visitors")
    public ResponseEntity<Visitor> createVisitor(@Valid @RequestBody Visitor visitor) {
        Visitor savedVisitor = visitorService.saveVisitor(visitor);
        return new ResponseEntity<>(savedVisitor, HttpStatus.CREATED);
    }

    @GetMapping("/visitors")
    public ResponseEntity<List<Visitor>> getAllVisitors() {
        return ResponseEntity.ok(visitorService.getAllVisitors());
    }
}
