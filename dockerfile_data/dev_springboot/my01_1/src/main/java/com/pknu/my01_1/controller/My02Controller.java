package com.pknu.my01_1.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pknu.my01_1.dto.ChatRequest;

@RestController
public class My02Controller {

    @PostMapping("/final_chatbot")
    @ResponseBody
    public Map<String, String> chat(@RequestBody ChatRequest request) {

        System.out.println(request.getMessage());
        String message = request.getMessage();
        String answer;
        if ("안녕".equals(message)) {
            answer = "반가워요";
        } else if ("배고파".equals(message)) {
            answer = "밥먹으세요";
        } else {
            answer = "뭔말인지 모르겠음";
        }

        return Map.of("reply", answer);
    }
}