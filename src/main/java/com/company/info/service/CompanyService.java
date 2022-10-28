package com.company.info.service;

import com.company.info.mapper.CompanyMapper;
import com.company.info.model.Info;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {
    CompanyMapper companyMapper;

    public CompanyService(CompanyMapper companyMapper){
        this.companyMapper = companyMapper;
    }

    public Info getInfo(){
        return companyMapper.getInfo();
    }
    public boolean updateInfo(Info info){
        return true;
    }
}
