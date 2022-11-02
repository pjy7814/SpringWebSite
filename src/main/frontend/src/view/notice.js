import React, {useEffect, useState} from 'react';
import axios from "axios";
import HeadMenu from "./headMenu";
import {Route, Link} from "react-router-dom";

function Notice() {
    const [notice, setNotice] = useState([])

    useEffect(() => {
        axios.get('/notice')
            .then(response => {
                    setNotice(response.data);
                    console.log(notice)
                }
            )
            .catch(error => console.log(error))
    }, []);

    const NoticeMap = notice.map((noti) =>
        <Link to={"/notice/".concat(noti.id)}><li>{noti.id} {noti.title} {noti.noticeDate.split(" ")[0]}</li></Link>
    );
    return (
        <div>
            <HeadMenu />
            <h1>Notice</h1>
            <ul>{NoticeMap}</ul>
        </div>
    )
}
export default Notice;