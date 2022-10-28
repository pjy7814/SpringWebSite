package com.company.info.mapper;


import com.company.info.model.Info;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import java.util.HashMap;
import java.util.List;

@Mapper
public interface CompanyMapper {
    Info getInfo();
    boolean updateInfo(Info info);
}