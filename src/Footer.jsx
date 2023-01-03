import React from "react";

const Footer = () => {

    const mydate = new Date().getFullYear();


    return (
        <>

            <footer className="footer">
            	<span>&#169;  copyright {mydate} All rights reserved </span>
                <p>arunkatoch955@gmail.com</p>
                </footer>

        </>
    )
}

export default Footer;