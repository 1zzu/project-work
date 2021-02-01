import React from 'react';

class HomeIndex extends React.Component{
    state = {

    }
    render(){
        return(
            <div class="content-wrapper">
                <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Dashboard</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">Home</li>
                        </ol>
                    </div>
                    </div>
                </div>
                </div>

                <section class="content">
                <div class="container-fluid">

                    <div class="row ml-3 mr-3">
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-info">
                        <div class="inner">
                            <h3>Radio</h3>
                            <p>Listening Radio online</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-microphone-alt"></i>
                        </div>
                        <a href="radio.html" class="small-box-footer">More <i class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-success">
                        <div class="inner">
                            <h3>Podcast</h3>
                            <p>Listening Podcast</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-podcast"></i>
                        </div>
                        <a href="podcast.html" class="small-box-footer">More <i class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-warning">
                        <div class="inner">
                            <h3>News</h3>
                            <p>Read the latest news</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-newspaper"></i>
                        </div>
                        <a href="berita.html" class="small-box-footer">More <i class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-danger">
                        <div class="inner">
                            <h3>Gallery</h3>
                            <p>See Documentation</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-image"></i>
                        </div>
                        <a href="galeri.html" class="small-box-footer">More <i class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="row ml-3 mr-3">
                    <section class="col-sm-5">
                        <div class="card">
                        <div class="card-header">
                            <h3 class="card-title"><i class="fas fa-map-marked-alt"></i> Lokasi VOMUZA 107,9 FM</h3>
                        </div>
                        <div class="card-body">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7016.439981515893!2d113.21663689333229!3d-8.12525126665131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6cd2590433df9d4!2sSMK%20Negeri%201%20Lumajang!5e0!3m2!1sen!2sid!4v1611150204690!5m2!1sen!2sid"  
                            style={{border:"1", ariaHidden:"false", tabIndex:"0", width:"100%", height:"670px", frameBorder:"0"}} ></iframe>
                        </div>
                        </div>
                    </section>

                    <section class="col-sm-7 ml-auto mr-auto">
                        <div class="card">
                        <div class="card-header">
                            <h3 class="card-title"><i class="fas fa-calendar"></i> Jadwal Siaran</h3>
                        </div>
                        <div class="card-body table-responsive pl-0 pr-0">
                            <table class="table table-bordered table-hover" style={{textAlign: 'center'}}>
                            {/* <thead class="table-dark">
                                <tr>
                                <th scope="col">Waktu</th>
                                <th scope="col">Senin</th>
                                <th scope="col">Selasa</th>
                                <th scope="col">Rabu</th>
                                <th scope="col">Kamis</th>
                                <th scope="col">Jumat</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                <tbody>
                                <tr style={{backgroundColor: 'black', color: "white"}}>
                                    <th scope="col">Waktu</th>
                                    <th scope="col">Senin</th>
                                    <th scope="col">Selasa</th>
                                    <th scope="col">Rabu</th>
                                    <th scope="col">Kamis</th>
                                    <th scope="col">Jumat</th>
                                </tr>
                                <tr>
                                    <th scope="row">07.00-08.00</th>
                                    <td>Tadarus</td>
                                    <td>Tadarus</td>
                                    <td>Tadarus</td>
                                    <td>Tadarus</td>
                                    <td>Tadarus</td>
                                </tr>
                                <tr>
                                    <th scope="row">08.00-10.00</th>
                                    <td>Pagoda Goyang Dangdut</td>
                                    <td>Pagoda Goyang Dangdut</td>
                                    <td>Pagoda Goyang Dangdut</td>
                                    <td>Pagoda Goyang Dangdut</td>
                                    <td>Pagoda Goyang Dangdut</td>
                                </tr>
                                <tr>
                                    <th scope="row">10.00-13.00</th>
                                    <td>Pop Indonesia</td>
                                    <td>Pop Indonesia</td>
                                    <td>Pop Indonesia</td>
                                    <td>Pop Indonesia</td>
                                    <td>Pop Indonesia</td>
                                </tr>
                                <tr>
                                    <th scope="row">13.00-15.00</th>
                                    <td>Lagu Barat</td>
                                    <td>Lagu Barat</td>
                                    <td>Lagu Barat</td>
                                    <td>Lagu Barat</td>
                                    <td>Lagu Barat</td>
                                </tr>
                                </tbody>
                            </tbody>
                            </table>
                        </div>
                        </div>

                        <div class="card bg-gradient-primary">
                        <div class="card-header border-0">

                            <h3 class="card-title">
                            <i class="far fa-calendar-alt"></i>
                            Calendar
                            </h3>
                            <div class="card-tools">
                            <button type="button" class="btn btn-success btn-sm" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-danger btn-sm" data-card-widget="remove">
                                <i class="fas fa-times"></i>
                            </button>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div id="calendar" style={{width: "100%"}}></div>
                        </div>
                        </div>
                        <div class="row" style={{opacity: "0%", color: "white"}}>
                            <div class="col-4 text-center">
                            <div id="sparkline-1"></div>
                            <div class="text-white">Visitors</div>
                            </div>
                            <div class="col-4 text-center">
                            <div id="sparkline-2"></div>
                            <div class="text-white">Online</div>
                            </div>
                            <div class="col-4 text-center">
                            <div id="sparkline-3"></div>
                            <div class="text-white">Sales</div>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
                </section>
            </div>
            
        )
    }
}

export default HomeIndex;