package com.cooperativa_bocaiuva.cooper.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @GetMapping("/users")
    public String test(){
        return "Acesso confirmado";
    }
}
