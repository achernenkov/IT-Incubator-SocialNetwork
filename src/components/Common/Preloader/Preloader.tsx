import React from "react";
import preloaderImg from './../../../assets/img/preloader.svg'

type PreloaderType = {

}

let Preloader: React.FC<PreloaderType> = (props) => {
    return (
        <>
            <img src={preloaderImg} />
        </>
    )
}

export default Preloader;