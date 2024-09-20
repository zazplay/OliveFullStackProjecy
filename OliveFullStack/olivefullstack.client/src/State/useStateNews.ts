import { useState } from "react";


export const useStateNews = () => {

    const [currentNewsId, setCurrentNewsId] = useState('');
    //const currentNews = "";
    //cosnt setCurrentNews = ({id:}


    return { currentNewsId, setCurrentNewsId }
}

