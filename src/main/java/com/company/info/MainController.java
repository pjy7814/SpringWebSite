package com.company.info;

import com.company.info.model.Info;
import com.company.info.model.User;
import com.company.info.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
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
    public String getLogin(@RequestBody User user, HttpServletRequest request) {
        int result = service.getLogin(user);
        if (result != 1) {
            return "alert";

        }
        // 로그인 성공
        HttpSession session = request.getSession();
        session.setAttribute(SessionConstants.LOGIN_MEMBER, user);
        return "success";
    }

    @PostMapping("/logout")
    public String logout(HttpServletRequest request) {

        HttpSession session = request.getSession(false);
        if (session != null) {
            System.out.println("logout Success");
            session.invalidate();   // 세션 날림
        }

        return "logout";
    }

    @GetMapping("/loginCheck")
    public String loginCheck(HttpServletRequest request, Model model) {
        // 세션이 없으면 홈으로 이동
        HttpSession session = request.getSession(false);
        if (session == null) {
            return "home";
        }

        // 세션에 저장된 회원 조회
        User loginMember = (User) session.getAttribute(SessionConstants.LOGIN_MEMBER);

        // 세션에 회원 데이터가 없으면 홈으로 이동
        if (loginMember == null) {
            return "notLogin";
        }

        // 세션이 유지되면 로그인으로 이동
        System.out.println("Admin"+ loginMember.getId());
        model.addAttribute("user", loginMember);

        return "loginMember";
    }
}