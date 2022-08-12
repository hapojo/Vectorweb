<template>
    <!---Navbar-->
    <div>
        <nav class="navbar sticky-top navbarbody">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="./image/LOGO.svg" alt="">
                </a>
                <div class="d-flex">
                    <button type="button" class="contactus">Contact Us</button>
                    <a href=""><img style="margin-right: 40px;" src="./image/lightdarkmode.svg" alt=""> </a>

                    <a data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
                        <img style="margin-right: 120px;" src="./image/Frame 36922.svg" alt="">
                    </a>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div>
                                Some text as placeholder. In real life you can have the elements you have chosen. Like,
                                text, images, lists, etc.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    </div>

    <!---Body-->
    <div class="body">
        <div class="row">
            <div class="col-sm-6">
                <div>
                    <div>
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
                        <img style="width:75%;" src="./image/vector.png" alt="" />
                    </center>


                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<style>
@import '@/components/Amabills/landingpage.css'
</style>