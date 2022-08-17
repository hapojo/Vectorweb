<template>
    <!---Navbar-->
    <div>
        <nav class="navbar fixed-top navbarbody">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img class="logo" src="./image/LOGO.svg" alt="">
                </a>
                <div class="d-flex">
                    <button type="button" class="contactus">Contact Us</button>
                    <a href=""><img class="lightdark" src="./image/lightdarkmode.svg" alt=""> </a>

                    <a data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
                        <img class="offcan" src="./image/Frame-36922.svg" alt="">
                    </a>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel" style="width: 100%;">


                        <div class="drawer">
                            <div class="left-pane">
                                <div class="top-pane"><svg width="86" height="87" viewBox="0 0 86 87" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M52.1315 40.8747L47.0193 32.5548C49.7909 33.0368 56.0048 34.4641 58.687 36.3176C62.4362 37.6476 70.6769 43.4775 73.647 56.1569C73.9979 57.4764 74.0419 60.0507 71.4104 59.7923L58.4272 59.493C56.5321 59.6722 52.6481 59.7769 52.2736 58.7623L29.6155 23.272L41.1576 2.94492C41.6857 1.62123 43.1184 -0.396579 44.6242 2.12167L64.8475 37.2619C62.5603 35.5764 56.8796 31.9413 52.4549 30.8847L43.5006 15.5563C43.3911 15.3688 43.1206 15.3677 43.0096 15.5543L38.6758 22.8388C38.6219 22.9295 38.6224 23.0425 38.6772 23.1326L56.7114 52.783C56.7617 52.8658 56.8505 52.9173 56.9473 52.9198L64.8806 53.1295C65.0952 53.1352 65.2393 52.9136 65.1387 52.724C63.3698 49.3912 58.6458 42.9622 52.1315 40.8747Z"
                                            fill="#F36F2E" />
                                        <path
                                            d="M13.2673 56.0841C13.3305 51.3537 17.352 40.2004 32.9329 33.4311L37.0536 39.7154C32.0966 41.5294 22.8597 46.273 21.7485 51.798C21.7151 51.9637 21.8416 52.1149 22.0105 52.1216L29.094 52.4059C29.3197 52.415 29.4657 52.1705 29.3508 51.9761L27.5077 48.8586L32.7283 44.9143L39.9185 55.8055C40.7121 56.8495 41.6442 58.9583 39.0236 59.0418L20.2133 58.6214C18.7278 58.5882 17.22 58.8321 15.756 58.5777C14.497 58.3589 13.3184 57.6882 13.2673 56.0841Z"
                                            fill="#373737" />
                                        <path
                                            d="M9.15616 76.6699H4.59632L3.90322 78.7674H0.145915L4.83343 65.9086H8.95552L13.6248 78.7674H9.84925L9.15616 76.6699ZM8.26243 73.934L6.87624 69.7754L5.50829 73.934H8.26243ZM28.1594 68.4439C29.4483 68.4439 30.4576 68.833 31.1872 69.6112C31.9289 70.3895 32.2998 71.4534 32.2998 72.8031V78.7674H28.7248V73.2773C28.7248 72.7302 28.5729 72.3046 28.2689 72.0006C27.9649 71.6966 27.5514 71.5446 27.0286 71.5446C26.5057 71.5446 26.0923 71.6966 25.7883 72.0006C25.4843 72.3046 25.3323 72.7302 25.3323 73.2773V78.7674H21.7574V73.2773C21.7574 72.7302 21.6054 72.3046 21.3014 72.0006C21.0096 71.6966 20.6023 71.5446 20.0794 71.5446C19.5444 71.5446 19.1249 71.6966 18.8209 72.0006C18.5169 72.3046 18.3649 72.7302 18.3649 73.2773V78.7674H14.79V68.5351H18.3649V69.8848C18.681 69.4471 19.0884 69.1005 19.5869 68.8452C20.0976 68.5777 20.6813 68.4439 21.3379 68.4439C22.0918 68.4439 22.7606 68.6081 23.3442 68.9364C23.9401 69.2647 24.4082 69.7268 24.7487 70.3226C25.1135 69.7632 25.5938 69.3133 26.1896 68.9729C26.7854 68.6202 27.442 68.4439 28.1594 68.4439ZM33.6747 73.6421C33.6747 72.5843 33.8632 71.6601 34.2401 70.8698C34.6292 70.0794 35.1521 69.4714 35.8087 69.0458C36.4775 68.6202 37.2192 68.4074 38.0339 68.4074C38.7392 68.4074 39.3471 68.5473 39.8578 68.8269C40.3685 69.1066 40.7637 69.4836 41.0434 69.9578V68.5351H44.6183V78.7674H41.0434V77.3447C40.7637 77.8189 40.3625 78.1959 39.8396 78.4756C39.3289 78.7552 38.727 78.8951 38.0339 78.8951C37.2192 78.8951 36.4775 78.6823 35.8087 78.2567C35.1521 77.8311 34.6292 77.2231 34.2401 76.4328C33.8632 75.6302 33.6747 74.7 33.6747 73.6421ZM41.0434 73.6421C41.0434 72.9855 40.861 72.4687 40.4962 72.0918C40.1436 71.7148 39.7058 71.5264 39.183 71.5264C38.648 71.5264 38.2041 71.7148 37.8515 72.0918C37.4989 72.4566 37.3226 72.9734 37.3226 73.6421C37.3226 74.2988 37.4989 74.8216 37.8515 75.2107C38.2041 75.5877 38.648 75.7761 39.183 75.7761C39.7058 75.7761 40.1436 75.5877 40.4962 75.2107C40.861 74.8338 41.0434 74.3109 41.0434 73.6421ZM50.2303 69.9578C50.51 69.4714 50.9052 69.0945 51.4159 68.8269C51.9266 68.5473 52.5285 68.4074 53.2216 68.4074C54.0363 68.4074 54.7719 68.6202 55.4285 69.0458C56.0973 69.4714 56.6202 70.0794 56.9971 70.8698C57.3862 71.6601 57.5808 72.5843 57.5808 73.6421C57.5808 74.7 57.3862 75.6302 56.9971 76.4328C56.6202 77.2231 56.0973 77.8311 55.4285 78.2567C54.7719 78.6823 54.0363 78.8951 53.2216 78.8951C52.5285 78.8951 51.9266 78.7613 51.4159 78.4938C50.9052 78.2141 50.51 77.8311 50.2303 77.3447V78.7674H46.6554V65.2703H50.2303V69.9578ZM53.9512 73.6421C53.9512 72.9734 53.7688 72.4566 53.404 72.0918C53.0513 71.7148 52.6136 71.5264 52.0907 71.5264C51.5679 71.5264 51.1241 71.7148 50.7593 72.0918C50.4066 72.4687 50.2303 72.9855 50.2303 73.6421C50.2303 74.3109 50.4066 74.8338 50.7593 75.2107C51.1241 75.5877 51.5679 75.7761 52.0907 75.7761C52.6136 75.7761 53.0513 75.5877 53.404 75.2107C53.7688 74.8216 53.9512 74.2988 53.9512 73.6421ZM60.8582 67.5867C60.2259 67.5867 59.7152 67.4164 59.3261 67.076C58.9491 66.7233 58.7606 66.2856 58.7606 65.7627C58.7606 65.2277 58.9491 64.7839 59.3261 64.4313C59.7152 64.0786 60.2259 63.9023 60.8582 63.9023C61.4783 63.9023 61.9769 64.0786 62.3538 64.4313C62.7429 64.7839 62.9375 65.2277 62.9375 65.7627C62.9375 66.2856 62.7429 66.7233 62.3538 67.076C61.9769 67.4164 61.4783 67.5867 60.8582 67.5867ZM62.6274 68.5351V78.7674H59.0525V68.5351H62.6274ZM68.2381 65.2703V78.7674H64.6632V65.2703H68.2381ZM73.8489 65.2703V78.7674H70.274V65.2703H73.8489ZM80.2439 78.8951C79.3198 78.8951 78.4929 78.7431 77.7633 78.4391C77.0459 78.1229 76.4744 77.6974 76.0488 77.1623C75.6354 76.6152 75.4044 76.0011 75.3558 75.3202H78.8212C78.8699 75.6485 79.0219 75.9038 79.2772 76.0862C79.5326 76.2686 79.8487 76.3598 80.2257 76.3598C80.5175 76.3598 80.7485 76.299 80.9188 76.1774C81.089 76.0558 81.1741 75.8977 81.1741 75.7032C81.1741 75.4478 81.0343 75.2594 80.7546 75.1378C80.4749 75.0162 80.0129 74.8824 79.3684 74.7365C78.6388 74.5906 78.0309 74.4264 77.5445 74.244C77.0581 74.0616 76.6325 73.7637 76.2677 73.3503C75.9151 72.9369 75.7388 72.3775 75.7388 71.6723C75.7388 71.0643 75.9029 70.5171 76.2312 70.0307C76.5595 69.5322 77.0399 69.137 77.6721 68.8452C78.3166 68.5534 79.0887 68.4074 79.9885 68.4074C81.3261 68.4074 82.3779 68.7357 83.144 69.3924C83.91 70.049 84.3538 70.9123 84.4754 71.9824H81.2471C81.1863 71.654 81.0404 71.4048 80.8093 71.2345C80.5904 71.0521 80.2925 70.961 79.9156 70.961C79.6238 70.961 79.3988 71.0157 79.2407 71.1251C79.0948 71.2345 79.0219 71.3865 79.0219 71.5811C79.0219 71.8243 79.1617 72.0128 79.4414 72.1465C79.721 72.2681 80.1709 72.3958 80.7911 72.5295C81.5328 72.6876 82.1469 72.8639 82.6333 73.0585C83.1318 73.253 83.5635 73.5692 83.9282 74.0069C84.3052 74.4325 84.4937 75.0162 84.4937 75.7579C84.4937 76.3537 84.3174 76.8887 83.9647 77.363C83.6243 77.8372 83.1318 78.2141 82.4873 78.4938C81.855 78.7613 81.1072 78.8951 80.2439 78.8951Z"
                                            fill="#373737" />
                                    </svg>
                                    <div>
                                        <a href=""><svg width="48" height="47" viewBox="0 0 48 47" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="21.6702" cy="23.9134" r="20.1702" fill="#FAFBFC"
                                                    stroke="black" />
                                                <path
                                                    d="M27.4841 11.9051C25.8858 9.49773 23.718 7.53462 21.1846 6.1829C27.217 5.72107 33.2831 8.41216 36.8398 13.7586C42.1005 21.6667 39.8885 32.3967 31.8829 37.7222C26.7253 41.1533 20.4269 41.4968 15.1907 39.1906C17.7726 38.8008 20.2447 37.847 22.4279 36.3888C30.5952 30.9551 32.8656 19.9952 27.4841 11.9051Z"
                                                    fill="#262626" stroke="black" />
                                            </svg> </a>
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
                                        <svg width="100" height="100" viewBox="0 0 105 104" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.2" filter="url(#filter0_b_23_20)">
                                                <rect x="0.0634766" width="104" height="104" rx="52" fill="#E8E8E8" />
                                            </g>
                                            <rect x="38.8989" y="33.4968" width="43.8317" height="4.03713" rx="1.21149"
                                                transform="rotate(47.6134 38.8989 33.4968)" fill="#F5F5F5" />
                                            <rect x="34.5972" y="66.3511" width="44.1426" height="4.03713" rx="1.21149"
                                                transform="rotate(-46.6254 34.5972 66.3511)" fill="#F5F5F5" />
                                            <defs>
                                                <filter id="filter0_b_23_20" x="-74.9365" y="-75" width="254"
                                                    height="254" filterUnits="userSpaceOnUse"
                                                    color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feGaussianBlur in="BackgroundImage" stdDeviation="37.5" />
                                                    <feComposite in2="SourceAlpha" operator="in"
                                                        result="effect1_backgroundBlur_23_20" />
                                                    <feBlend mode="normal" in="SourceGraphic"
                                                        in2="effect1_backgroundBlur_23_20" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>
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
        <div class="row g-0">
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
                                <div class="nexttext2">
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
                                <img src="./image/LOGO.png" alt="">
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
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M44.1943 44.505L38.628 35.4461C41.6458 35.9709 48.4116 37.525 51.3321 39.5431C55.4142 40.9913 64.3869 47.339 67.6207 61.1445C68.0028 62.5812 68.0507 65.3842 65.1855 65.1029L51.0492 64.777C48.9857 64.9721 44.7567 65.0861 44.349 63.9814L19.6784 25.3388L32.2457 3.20632C32.8207 1.76506 34.3806 -0.431971 36.0202 2.30994L58.0397 40.5713C55.5493 38.7361 49.3641 34.7781 44.5464 33.6277L34.7968 16.9378C34.6776 16.7337 34.383 16.7325 34.2622 16.9356L29.5435 24.8672C29.4847 24.9659 29.4853 25.089 29.545 25.1871L49.1809 57.471C49.2357 57.5611 49.3325 57.6172 49.4378 57.62L58.0758 57.8483C58.3094 57.8545 58.4663 57.6131 58.3568 57.4067C56.4308 53.7779 51.2872 46.7778 44.1943 44.505Z"
                    fill="#F36F2E" />
                <path
                    d="M1.87787 61.0652C1.94665 55.9145 6.32541 43.7706 23.2901 36.4001L27.7769 43.2426C22.3796 45.2176 12.3222 50.3825 11.1123 56.3983C11.076 56.5787 11.2138 56.7433 11.3977 56.7507L19.1103 57.0602C19.356 57.0701 19.515 56.8039 19.3899 56.5922L17.3831 53.1979L23.0674 48.9032L30.8962 60.7618C31.7603 61.8985 32.7752 64.1946 29.9218 64.2855L9.44086 63.8278C7.82342 63.7917 6.18161 64.0572 4.58765 63.7802C3.21683 63.542 1.93349 62.8117 1.87787 61.0652Z"
                    fill="#FCFCFC" />
            </svg>
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
                        <div class="pro-info d-flex">
                            <div class="product">
                                <h5>OUR PRODUCT</h5>
                                <a href="">360 Corporation</a> <br>
                                <a href="">Filling Station Managements</a> <br>
                                <a href="">What Next</a>
                            </div>
                            <div class="infomation d-block">
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
                        <div class="say-location d-flex">
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
</style>


<script>
// AOS.init();
</script>