import React, {useEffect, useState} from 'react';
import axios from "axios";
import HeadMenu from "./headMenu";

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

    const Rendering = () => {
        const result = [];
        for (let i=0; i<notice.length; i++){
            result.push(<a href={notice[i].id}><li>{notice[i].id} {notice[i].title} 관리자 {notice[i].noticeDate.split(" ")[0]}</li></a>)
        }
        return result;
    }
    return (
        <div>
            <HeadMenu />
            <h1>Notice</h1>
            <Rendering />
        </div>
    )
}
export default Notice;