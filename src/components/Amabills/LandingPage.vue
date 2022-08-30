<template>
    <!---Navbar-->
    <div>
        <nav class="navbar fixed-top navbarbody">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img class="logo" :src="changeLogo" alt="">
                </a>
                <div class="d-flex">
                    <button type="button" class="contactus">Contact Us</button>
                    <a style="cursor: pointer" @click="changName" id="icon">
                        <!-- <img class="lightdark" v-if="dark - theme" src="./image/lightdarkmode.svg" alt="">  -->
                        <img :src="changeIcon" class="lightdark" />
                    </a>

                    <a data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
                        <img class="offcan" :src="changeBar" alt="">
                    </a>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel" style="width: 100%;">


                        <div class="drawer">
                            <div class="left-pane">
                                <div class="top-pane">
                                    <img :src="changeLogo2" alt="">
                                    <div>
                                        <a style="cursor: pointer" @click="changName">
                                            <img class="logochange" :src="changeIcon2" alt="">
                                        </a>
                                    </div>
                                </div>
                                <div class="bottom-pane">
                                    <div class="welcome">
                                        <h5>WELCOME</h5> <br>
                                        <hr>
                                        <p>FB</p>
                                        <p>TW</p>
                                        <p>LN</p>
                                        <p>IG</p>
                                    </div>
                                </div>
                            </div>
                            <div class="right-pane">
                                <div class="right-top-pane">
                                    <h5>NAVIGATION</h5>
                                </div>
                                <div class="right-bottom-pane">
                                    <hr>
                                    <a href="">Home</a> <br>
                                    <a href="">About us</a> <br>
                                    <a href="">Product</a> <br>
                                    <a href="">Blog</a>
                                    <hr>
                                </div>
                                <div class="button-right">
                                    <button type="button" class="btn text-reset" data-bs-dismiss="offcanvas"
                                        aria-label="Close">
                                        <img :src="changeClose" alt="">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    </div>

    <!---Body-->
    <div class="body">
        <div class="row g-0">
            <div class="col-sm-6">
                <div>
                    <div class="Forging">
                        <h5>Forging Technology to Empower <span style="color:#F36F2E;">Corporative Firms</span></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum mauris lacus, lorem
                            volutpat, ut diam, turpis
                            Sapien cursus vitae tortor risus.t amet, consectetur adipiscing elit. Ut vestibulum mauris
                            lacus, lorem volutpat, ut diam, turpis. Sapien cursus vitae tortor risus.t amet, consectetur
                            adipiscing elit.
                            Ut vestibulum mauris lacus, lorem volutpat, ut diam, turpis. Sapien cursus vitae tortor
                            risus.</p>
                        <a href="#"> <button class="learnmore">Learn More</button></a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div>
                    <center>
                        <img class="vector" src="./image/vector.png" alt="" />
                    </center>


                </div>
            </div>
        </div>
    </div>

    <!----what we do-->
    <div class="whatwedo">
        <div class="row g-0 wedo">
            <div class="col-sm-6">
            </div>
            <div class="col-sm-6">
                <div>
                    <div data-aos="fade-up" data-aos-duration="1000" class="digitizing">
                        <div class="whatwedotext d-flex">
                            <div class="addline"></div>
                            <span>WHAT WE DO</span>
                        </div>
                        <h5>Digitizing Africa’s Economy </h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque etiam eu in eget id
                            nulla id dignissim. Volutpat risus non, id tellus senectus in mauris. Sed nisl aenean morbi
                            senectus neque tincidunt auctor. ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque etiam eu in eget id nulla id dignissim. Volutpat risus non, id tellus senectus
                            in mauris. Sed nisl aenean morbi senectus neque tincidunt auctor. ipsum dolor sit amet,
                            consectetur adipiscing elit. Pellentesque etiam eu in eget id nulla id dignissim. Volutpat
                            risus non, id tellus senectus in mauris. Sed nisl aenean morbi senectus neque tincidunt
                            auctor.Volutpat risus non, id tellus senectus in mauris. Sed nisl aenean morbi senectus
                            neque tincidunt auctor. ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            etiam eu in eget id nulla id dignissim. Volutpat risus non, id tellus senectus in mauris.
                            Sed nisl aenean morbi senectus neque tincidunt auctor.</p>
                        <a href="#"> <button class="learnmore">Learn More</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!----What next carousel--->
    <div class="nextcarousel">
        <div class="project">
            <span>Our Project</span>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner" data-aos="fade-up" data-aos-duration="1000">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-sm-1">
                            <div class="nexttext1">
                                <h1 class="">20<br><span>18</span></h1>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="nextbody">
                                <div class="nexttext2" style="padding-left: 20px;">
                                    <h5>How we started</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                                        etiam eu in eget id nulla id dignissim. Volutpat risus non, id tellus senectus
                                        in mauris. Sed nisl aenean morbi senectus neque tincidunt auctor. ipsum dolor
                                        sit amet, consectetur adipiscing elit. Pellentesque etiam eu in eget id nulla id
                                        dignissim. Volutpat risus non, id tellus senectus in mauris. Sed nisl aenean
                                        morbi senectus neque tincidunt auctor. ipsum dolor sit amet, consectetur
                                        adipiscing elit. Pellentesque etiam eu in eget id nulla id dignissim. Volutpat
                                        risus non, id tellus senectus in mauris. Sed nisl aenean morbi senectus neque
                                        tincidunt auctor.Volutpat risus non, id tellus senectus in mauris. Sed nisl
                                        aenean morbi senectus neque tincidunt auctor. ipsum dolor sit amet, consectetur
                                        adipiscing elit. Pellentesque etiam eu in eget id nulla id dignissim. Volutpat
                                        risus non, id tellus senectus in mauris. Sed nisl aenean morbi senectus neque
                                        tincidunt auctor.</p>
                                    <a class="nextlink" href="">View branding</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="nextimg">
                                <img :src="changeCarousel" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- <img src=" ..." class="d-block w-100" alt="..."> -->
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-sm-1">
                            <div class="nexttext1">
                                <h1 class="">20<br><span>22</span></h1>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="nextbody">
                                <div class="nexttext2">
                                    <h5>360 Corporation</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                                        etiam eu in eget id nulla id dignissim. Volutpat risus non, id tellus senectus
                                        in mauris. Sed nisl aenean morbi senectus neque tincidunt auctor. ipsum dolor
                                        sit amet, consectetur adipiscing elit. Pellentesque etiam eu in eget id nulla id
                                        dignissim. Volutpat risus non, id tellus senectus in mauris. Sed nisl aenean
                                        morbi senectus neque tincidunt auctor. ipsum dolor sit amet, consectetur
                                        adipiscing elit. Pellentesque etiam eu in eget id nulla id dignissim. Volutpat
                                        risus non, id tellus senectus in mauris. Sed nisl aenean morbi senectus neque
                                        tincidunt auctor.Volutpat risus non, id tellus senectus in mauris. Sed nisl
                                        aenean morbi senectus neque tincidunt auctor. ipsum dolor sit amet, consectetur
                                        adipiscing elit. Pellentesque etiam eu in eget id nulla id dignissim. Volutpat
                                        risus non, id tellus senectus in mauris. Sed nisl aenean morbi senectus neque
                                        tincidunt auctor.</p>
                                    <a class="nextlink" href="">View Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="nextimg">
                                <img style="width: 35%;" src="./image/Vectary-texture.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- <img src="..." class="d-block w-100" alt="..."> -->
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-sm-1">
                            <div class="nexttext1">
                                <h1 class="">Ne<br><span>xt</span></h1>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="nextbody">
                                <div class="nexttext2">
                                    <h5>What Next ?</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                                        etiam eu in eget id nulla id dignissim. Volutpat risus non, id tellus senectus
                                        in mauris. Sed nisl aenean morbi senectus neque tincidunt auctor. ipsum dolor
                                        sit amet, consectetur adipiscing elit. Pellentesque etiam eu in eget id nulla id
                                        dignissim. Volutpat risus non, id tellus senectus in mauris. Sed nisl aenean
                                        morbi senectus neque tincidunt auctor. ipsum dolor sit amet, consectetur
                                        adipiscing elit. Pellentesque etiam eu in eget id nulla id dignissim. Volutpat
                                        risus non, id tellus senectus in mauris. Sed nisl aenean morbi senectus neque
                                        tincidunt auctor.Volutpat risus non, id tellus senectus in mauris. Sed nisl
                                        aenean morbi senectus neque tincidunt auctor. ipsum dolor sit amet, consectetur
                                        adipiscing elit. Pellentesque etiam eu in eget id nulla id dignissim. Volutpat
                                        risus non, id tellus senectus in mauris. Sed nisl aenean morbi senectus neque
                                        tincidunt auctor.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="nextimg">
                                <img src="./image/world-1.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- <img src="..." class="d-block w-100" alt="..."> -->
                </div>
            </div>
        </div>


        <!-----Culture-->
        <div class="culture">
            <div class="row g-0" data-aos="fade-up" data-aos-duration="1000">
                <div class="col-sm-6">
                    <div class="cultureimg">
                        <svg width="70%" height="682" viewBox="0 0 575 682" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="279" height="598.789" transform="translate(295.316)" fill="white" />
                            <rect width="279" height="319.789" transform="translate(0 113.395)" fill="white" />
                            <rect width="279" height="232.5" transform="translate(0 449.5)" fill="white" />
                        </svg>

                    </div>
                </div>
                <div class="col-sm-6">
                    <div>
                        <div class="culturebody">
                            <div class="culturetext d-flex">
                                <div class="addline"></div>
                                <span>OUR WAY OF WORK</span>
                            </div>
                            <h5>Culture... </h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque etiam eu in eget id
                                nulla id dignissim. Volutpat risus non, id tellus senectus in mauris. Sed nisl aenean
                                morbi
                                senectus neque tincidunt auctor. ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque etiam eu in eget id nulla id dignissim. Volutpat risus non, id tellus
                                senectus
                                in mauris. Sed nisl aenean morbi senectus neque tincidunt auctor. ipsum dolor sit amet,
                                consectetur adipiscing elit. Pellentesque etiam eu in eget id nulla id dignissim.
                                Volutpat
                                risus non, id tellus senectus in mauris. Sed nisl aenean morbi senectus neque tincidunt
                                auctor.Volutpat risus non, id tellus senectus in mauris. Sed nisl aenean morbi senectus
                                neque tincidunt auctor. ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                                etiam eu in eget id nulla id dignissim. Volutpat risus non, id tellus senectus in
                                mauris.
                                Sed nisl aenean morbi senectus neque tincidunt auctor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

    <!----Footer-->
    <div class="footer">
        <div class="contact">
            <img :src="changeContact" alt="">
            <span>Contact Us</span>
            <div class="contactright">
                <a href="">Book Appointments</a>
            </div>
        </div>
        <hr>
        <div>
            <div class="footerbottom" style="max-width: 1740px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <div class="pro-info ">
                            <div class="product">
                                <h5>OUR PRODUCT</h5>
                                <a href="">360 Corporation</a> <br>
                                <a href="">Filling Station Managements</a> <br>
                                <a href="">What Next</a>
                            </div>
                            <div class="infomation">
                                <h5>INFORMATION</h5>
                                <a href="">About Us</a> <br>
                                <a href="">Culture</a> <br>
                                <a href="">Services</a> <br>
                                <a href="">Careers</a> <br>
                                <a href="">Amabills Blog</a> <br>
                                <a href="">Privacy Policy</a>
                            </div>
                            <div class="vl"></div>
                        </div>
                        <!-- <img src="..." class="img-fluid rounded-start" alt="..."> -->
                    </div>
                    <div class="col-md-8">
                        <div class="say-location">
                            <div class="say">
                                <h5>SAY HELLO</h5>
                                <p>Amabills@gmail.com</p>
                            </div>
                            <div class="location">
                                <h5>LOCATION</h5>
                                <p>94B Novare Center, Third Floor
                                    Wuse 2, Abuja</p>
                                <p>94B Novare Center, Third Floor
                                    Wuse 2, Abuja</p>
                            </div>
                            <div class="copyright">
                                <p>© 2020 Amabills Technologies. All rights reserved. </p>

                                <p>All text, graphics, audio files, code, downloadable material, and other works on this
                                    web site are the copyrighted works of Amabills
                                    Technologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<style>
@import '@/components/Amabills/landingpage.css';

:root {
    --faded-white: #EDEDED;
    --faded-whitex: #373737;
    --cancle-btn: #E8E8E8;
    --img-opa: 1;
    --black: #FFFFFF;
}

.dark-theme {
    --faded-white: #373737;
    --faded-whitex: #EDEDED;
    --cancle-btn: #818080;
    --img-opa: 0.6;
    --black: #000000;

}
</style>


<script>
import light from "@/components/Amabills/image/lightdarkmode.svg";
import dark from "@/components/Amabills/image/darklightmode.svg";
import darklogo from "@/components/Amabills/image/LOGO.svg";
import lightlogo from "@/components/Amabills/image/LOGOdark.svg";
import darkbar from "@/components/Amabills/image/bardark.svg";
import lightbar from "@/components/Amabills/image/barlight.svg";
import closelight from "@/components/Amabills/image/close.svg";
import closedark from "@/components/Amabills/image/closedark.svg";
import contactlight from "@/components/Amabills/image/contactlight.svg";
import contactdark from "@/components/Amabills/image/contactdark.svg";
import carousellight from "@/components/Amabills/image/carousellight.svg";
import carouseldark from "@/components/Amabills/image/carouseldark.svg"

export default {
    mounted() {
        this.changeIcon = this.light
        this.changeIcon2 = this.dark
        this.changeLogo = this.darklogo
        this.changeLogo2 = this.lightlogo
        this.changeBar = this.lightbar
        this.changeClose = this.closelight
        this.changeContact = this.contactlight
        this.changeCarousel = this.carousellight
    },
    data() {
        return {
            changeIcon: "",
            changeIcon2: "",
            dark: dark,
            light: light,
            changeLogo: "",
            changeLogo2: "",
            darklogo: darklogo,
            lightlogo: lightlogo,
            changeBar: "",
            darkbar: darkbar,
            lightbar: lightbar,
            changeClose: "",
            closelight: closelight,
            closedark: closedark,
            changeContact: "",
            contactlight: contactlight,
            contactdark: contactdark,
            changeCarousel: "",
            carousellight: carousellight,
            carouseldark: carouseldark
        }
    },
    methods: {
        changName() {
            document.body.classList.toggle("dark-theme");
            if (document.body.classList.contains("dark-theme")) {
                this.changeIcon = this.dark
                this.changeIcon2 = this.light
                this.changeLogo = this.lightlogo
                this.changeLogo2 = this.darklogo
                this.changeBar = this.darkbar
                this.changeClose = this.closedark
                this.changeContact = this.contactdark
                this.changeCarousel = this.carouseldark
            }
            else {
                this.changeIcon = this.light
                this.changeIcon2 = this.dark
                this.changeLogo = this.darklogo
                this.changeLogo2 = this.lightlogo
                this.changeBar = this.lightbar
                this.changeClose = this.closelight
                this.changeContact = this.contactlight
                this.changeCarousel = this.carousellight
            }
        }
    }
}


</script>