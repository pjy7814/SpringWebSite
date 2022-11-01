package com.company.info.service;

import com.company.info.mapper.CompanyMapper;
import com.company.info.model.Info;
import com.company.info.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {
    CompanyMapper companyMapper;

    public CompanyService(CompanyMapper companyMapper){
        this.companyMapper = companyMapper;
    }

    // 회사 정보
    public Info getInfo(){
        return companyMapper.getInfo();
    }
    public int updateInfo(Info info){
        return companyMapper.updateInfo(info);
    }

    // 로그인
    public int getLogin(User user) {
        return companyMapper.getLogin(user);
    }
}
