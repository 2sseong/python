package com.pknu.sh_test.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Mycontroller {

    Map<String, String> result = new HashMap<>();

    @PostMapping("/data")
    public Map<String, String> receiveData(@RequestBody Map<String, String> payload) {
        String name = payload.get("name");
        String age = payload.get("age");
        String memo = payload.get("memo");
        result.put("name", name + "님");
        result.put("age", String.valueOf(Integer.parseInt(age) + 1));
        result.put(" memo", "'" + memo + "'" + "라고 잘받았습니다.");

        return result;
    }

    @GetMapping("/data")
    @ResponseBody
    public Map<String, String> getData() {
        return result;
    }

    @GetMapping("/api")
    @ResponseBody
    public Map<String, String> Api() {
        Map<String, String> data = new HashMap<>();
        data.put("data", "관련 자료들");
        return data;
    }

    @GetMapping("/list")
    @ResponseBody
    public List<String> List() {
        List<String> data = new ArrayList<>();
        data.add(new String("사과"));
        data.add(new String("딸기"));
        data.add(new String("바나나"));

        return data;
    }
}
