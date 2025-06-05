package com.pknu.my01.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import ch.qos.logback.core.model.Model;

@Controller
public class My01controller {
    @GetMapping("/")
    public String getMethodName(Model Model) {
        return "index";
    }

}
