import axios from "axios";
import { WEBMYPHAMAPI } from '@env';
const header = {
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    xsrfCookieName: 'csrftoken_testtest',
}
export default {
    //Lấy slide
    getSlide: () => {
        const url = `${WEBMYPHAMAPI}api/home-slide`;
        return new Promise((resolve, reject) => {
            axios.get(url, {}, header).then((response) => {
                if (response.data.status === true) {
                    resolve(response.data.data);
                } else {
                    reject(response);
                }
            }).catch((response) => {
                reject(response);
            })
        });
    },
}