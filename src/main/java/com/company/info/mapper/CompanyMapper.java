package com.company.info.mapper;


import com.company.info.model.Info;
import com.company.info.model.Notice;
import com.company.info.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import java.util.HashMap;
import java.util.List;

@Mapper
public interface CompanyMapper {
    // info
    Info getInfo();
    int updateInfo(Info info);

    int getLogin(User user);

    // notice
    List<Notice> getNotice();
}