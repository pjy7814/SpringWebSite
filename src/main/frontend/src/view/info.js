import React, {useEffect, useState} from "react";
import axios from "axios";
import HeadMenu from "./headMenu";


function Info() {
    const [info, setInfo] = useState({
        title: '',
        subtitle: '',
        content:'',
    })

    useEffect(() => {
        axios.get('/info')
            .then(response => {
                    setInfo(response.data);
                    console.log(response.data);

                }
            )
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <HeadMenu />
            {info && <li>제목: {info.title}</li>}
            {info && <li>부제목: {info.subtitle}</li>}
            {info && <li>본문: {info.content}</li>}
        </div>
    );
}



export default Info;