package com.company.info;

import com.company.info.model.Info;
import com.company.info.model.User;
import com.company.info.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class MainController {

    private final CompanyService service;
    public MainController(CompanyService companyService){
        this.service = companyService;
    }
    @GetMapping("/api/hello")
    public String hello() {
        Info info = service.getInfo();
        System.out.println(info.getSubtitle()+ info.getContent());
        return "안녕하세요 리액트와 스프링부트를 Proxy 설정을 통해 연결하고 있습니다 : " + info.getSubtitle()+ info.getContent();
    }

    @GetMapping("/info")
    public Info getInfo() {
        Info info = service.getInfo();
        System.out.println(info.getSubtitle()+ info.getContent());
        return info;
    }

    @PostMapping("/login")
    public void getLogin(@RequestBody Map<String, Object> requestData) {
        System.out.println("!!!!!!!!!!!!!");
        requestData.forEach((key, value) -> {
            System.out.println("key : " + key);
            System.out.println("value : " + value);
        });

    }
}