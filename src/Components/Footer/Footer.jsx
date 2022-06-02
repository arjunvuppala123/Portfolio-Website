import "./Footer.css";

function Footer() {
    return (
        <footer class="footer-section">
        <div class="container">
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-social-icon">
                                <span>Follow Me At:</span>
                                <a href="https://www.linkedin.com/in/arjun-v-3a5620105/"><img class="logo" src="linkedin.png" alt="linkedin logo" /></a>
                                <a href="https://github.com/arjunvuppala123"><img class="logo" src="github.png" alt="github logo" /></a>
                                <a href="https://www.instagram.com/arjun_vuppala/"><img class="logo"  src="instagram.png" alt="insta logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;