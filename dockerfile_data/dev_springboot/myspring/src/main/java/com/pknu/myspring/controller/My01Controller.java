package com.pknu.myspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class My01Controller {
    @GetMapping("/")
    public String mainPage(Model model) {
        model.addAttribute("hello", "만나서 반갑습니다. Spring Boot 시작합니다.");
        return "index"; // templates/index.html
    }
}
