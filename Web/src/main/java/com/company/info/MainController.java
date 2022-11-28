package com.company.info;

import com.company.info.model.Info;
import com.company.info.model.Notice;
import com.company.info.model.User;
import com.company.info.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;

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


    // 로그인
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
        model.addAttribute("user", loginMember);

        return "loginMember";
    }

    // Info
    @GetMapping("/info")
    public Info getInfo() {
        Info info = service.getInfo();
        return info;
    }
    @PostMapping("/update/info")
    public boolean updateInfo(@RequestBody Info info) {
        int result = service.updateInfo(info);
        if (result == 0) {  // 업데이트 실패
            return false;
        }
        return true;
    }

    // Notice
    @GetMapping("/notice")
    public List<Notice> getNotice() {

        List<Notice> nList = service.getNotice();
        return nList;
    }

    @GetMapping("/notice/{id}")
    public Notice getNoticeDetail(@PathVariable Integer id) {
        Notice notice = service.getNoticeDetail(id);
        return notice;
    }

    @PostMapping("/insert/notice")
    public boolean insertNotice(@RequestBody Notice notice) {
//        System.out.println(notice.getTitle()+ notice.getContent());
        int result = service.insertNotice(notice);
        if (result == 0) {  // 업데이트 실패
            return false;
        }
        return true;
    }


//     파일 저장
    @PostMapping(value="/api/upload/file")
    public ResponseEntity<String> uploadFile(MultipartFile file) throws IllegalStateException, IOException{
        System.out.println("uploadFile:" + file);
        if( !file.isEmpty() ) {
//            log.debug("file org name = {}", file.getOriginalFilename());
//            log.debug("file content type = {}", file.getContentType());
            file.transferTo(new File(file.getOriginalFilename()));
        }

        return new ResponseEntity<>("", HttpStatus.OK);
    }
//    @PostMapping("/api/upload/file")
//    public boolean uploadFile(List<MultipartFile> files) throws IllegalStateException, IOException {
//        String UPLOAD_PATH = "/Users/jiyoung/Pictures/" + new Date().getTime(); // 업로드 할 위치 // 현재 날짜 값 폴더
//        System.out.println(files);
//        try {
//            for (int i = 0; i < files.size(); i++) {
//
//                String originName = files.get(i).getOriginalFilename(); // 파일.type
//                String[] tempStr = originName.split(".");
//                originName = tempStr[0];
//                String type = tempStr[1];
//
//                File newFile = new File(UPLOAD_PATH, originName + "." + type); // 경로/파일.type
////
////                if (!fileSave.exists()) { // 폴더가 없을 경우 폴더 만들기
////                    fileSave.mkdirs();
////                }
//
//                files.get(i).transferTo(newFile);
//                // transferTo(File file) > multipartFile을 주어진 file의 경로로 이동 (copy)
//            }
//
//        } catch (IOException e) {
//            System.out.println("fileError" + e);
//            return false;
//        }
//
//        return true;
//    }

}