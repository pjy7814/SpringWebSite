package com.company.info.model;

import lombok.Data;

@Data
public class Notice {
    private int id;
    private String title;
    private String content;
    private String noticeDate;
}
