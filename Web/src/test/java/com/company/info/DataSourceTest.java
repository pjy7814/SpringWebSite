package com.company.info;

import com.company.info.model.Info;
import com.company.info.service.CompanyService;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;
import java.sql.Connection;

@SpringBootTest
public class DataSourceTest {
    @Autowired
    CompanyService companyService;
    private DataSource ds;
    @Test
    @DisplayName("info 조회")
    void test1() {
        Info info = companyService.getInfo();
        if (info.getSubtitle() != null){
            System.out.println("info = " + info.getContent());
        }
    }


    @Test
    public void testConntection() throws Exception{
        try (Connection con = ds.getConnection()){
            System.out.println(con);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
}
