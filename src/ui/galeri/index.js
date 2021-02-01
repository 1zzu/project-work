import React from 'react';

class Galeri extends React.Component{
    state = {

    }
    render() {
        return(
            <div class="content-wrapper">
                <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Gallery</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">Galeri</li>
                        </ol>
                    </div>
                    </div>
                </div>
                </div>

                <section class="content">
                <div class="container-fluid">
                    <div class="row">
                    
                    <div class="col-sm-6">
                        <div class="col-md-12 ">
                        <div class="card mb-2 bg-gradient-dark">
                            <img class="card-img-top" src="coba.png" alt="Dist Photo 1" />
                            <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 class="card-title text-primary text-white">Card Title</h5>
                            <p class="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                            <a href="#" class="text-white">Last update 2 mins ago</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-md-6 ">
                        <div class="card mb-2 bg-gradient-dark">
                        <img class="card-img-top" src="coba.png" alt="Dist Photo 1" />
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 class="card-title text-primary text-white">Card Title</h5>
                            <p class="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                            <a href="#" class="text-white">Last update 2 mins ago</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                        <div class="card-header">
                            <h3 class="card-title"><i class="fas fa-newspaper"></i> Galeri</h3>
                        </div>
                        <div class="row ml-1 mr-1 mt-2">
                            <div class="col">
                            <div class="card mb-2 bg-gradient-dark">
                                <img class="card-img-top" src="demon.png" alt="Dist Photo 1" />
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <h5 class="card-title text-primary text-white">Card Title</h5>
                                <a href="#" class="text-white">Last update 2 mins ago</a>
                                </div>
                            </div>
                            </div>
                            <div class="col-sm-3">
                            <div class="card mb-2 bg-gradient-dark">
                                <img class="card-img-top" src="demon.png" alt="Dist Photo 1" />
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <h5 class="card-title text-primary text-white">Card Title</h5>
                                <a href="#" class="text-white">Last update 2 mins ago</a>
                                </div>
                            </div>
                            </div>
                            <div class="col-sm-3">
                            <div class="card mb-2 bg-gradient-dark">
                                <img class="card-img-top" src="demon.png" alt="Dist Photo 1" />
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <h5 class="card-title text-primary text-white">Card Title</h5>
                                <a href="#" class="text-white">Last update 2 mins ago</a>
                                </div>
                            </div>
                            </div>
                            <div class="col-sm-3">
                            <div class="card mb-2 bg-gradient-dark">
                                <img class="card-img-top" src="demon.png" alt="Dist Photo 1" />
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <h5 class="card-title text-primary text-white">Card Title</h5>
                                <a href="#" class="text-white">Last update 2 mins ago</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>    
                </div>
                </section>
            </div>
        )
    }
}

export default Galeri;