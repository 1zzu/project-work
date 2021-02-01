import React from 'react';

import axios from 'axios';
import { link } from 'react-router-dom';
import moment from 'moment-timezone';

class Berita extends React.Component{
    state={

    }
    render(){
        return(
            <div class="content-wrapper">
                <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Berita</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">News</li>
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
                    <div class="col-sm-6">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <div class="card mb-2 bg-gradient-dark">
                            <img class="card-img-top" src="demon.png" alt="Dist Photo 1" />
                            <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <h5 class="card-title text-primary text-white">Card Title</h5>
                                <p class="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                                <a href="#" class="text-white">Last update 2 mins ago</a>
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card mb-2 bg-gradient-dark">
                            <img class="card-img-top" src="demon.png" alt="Dist Photo 1" />
                            <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <h5 class="card-title text-primary text-white">Card Title</h5>
                                <p class="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                                <a href="#" class="text-white">Last update 2 mins ago</a>
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card mb-2 bg-gradient-dark">
                            <img class="card-img-top" src="demon.png" alt="Dist Photo 1" />
                            <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <h5 class="card-title text-primary text-white">Card Title</h5>
                                <p class="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                                <a href="#" class="text-white">Last update 2 mins ago</a>
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card mb-2 bg-gradient-dark">
                            <img class="card-img-top" src="demon.png" alt="Dist Photo 1" />
                            <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <h5 class="card-title text-primary text-white">Card Title</h5>
                                <p class="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                                <a href="#" class="text-white">Last update 2 mins ago</a>
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-sm-8">
                        <div class="card">
                        <div class="card-header">
                            <h3 class="card-title"><i class="fas fa-newspaper"></i> Berita</h3>
                        </div>
                        <div class="card mb-2 ml-3 mr-3 mt-3" style={{maxWidth: "100%"}}>
                            <div class="row g-0">
                            <div class="col-sm-4">
                                <img class="image-responsive" style={{maxWidth: "100%", src:"coba.png", alt:"..."}} />
                            </div>
                            <div class="col-sm-8 mt-2">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                                <td class="project-actions text-right">
                                    <a class="btn btn-primary btn-sm" href="#">
                                        <i class="fas fa-eye">
                                        </i>
                                        View
                                    </a>
                                    <a class="btn btn-info btn-sm" href="#">
                                        <i class="fas fa-pencil-alt">
                                        </i>
                                        Edit
                                    </a>
                                    <a class="btn btn-danger btn-sm" href="#">
                                        <i class="fas fa-trash">
                                        </i>
                                        Delete
                                    </a>
                                </td>

                                </div>
                            </div>
                            </div>

                            <div class="row g-0">
                            <div class="col-sm-4 mt-2">
                                <img class="image-responsive" style={{maxWidth: "100%", src:"coba.png", alt:"..."}} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body" style={{maxHeight: "50%"}}>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                
                                <td class="project-actions text-right">
                                    <a class="btn btn-primary btn-sm" href="#">
                                        <i class="fas fa-eye">
                                        </i>
                                        View
                                    </a>
                                    <a class="btn btn-info btn-sm" href="#">
                                        <i class="fas fa-pencil-alt">
                                        </i>
                                        Edit
                                    </a>
                                    <a class="btn btn-danger btn-sm" href="#">
                                        <i class="fas fa-trash">
                                        </i>
                                        Delete
                                    </a>
                                </td>

                                </div>
                            </div>
                            </div>

                            <div class="row g-0 mt-2">
                            <div class="col-md-4">
                                <img class="image-responsive" style={{maxWidth: "100%", src:"coba.png", alt:"..."}} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                                <td class="project-actions text-right">
                                    <a class="btn btn-primary btn-sm" href="#">
                                        <i class="fas fa-eye">
                                        </i>
                                        View
                                    </a>
                                    <a class="btn btn-info btn-sm" href="#">
                                        <i class="fas fa-pencil-alt">
                                        </i>
                                        Edit
                                    </a>
                                    <a class="btn btn-danger btn-sm" href="#">
                                        <i class="fas fa-trash">
                                        </i>
                                        Delete
                                    </a>
                                </td>

                                </div>
                            </div>
                            </div>

                            <div class="row g-0 mt-2">
                            <div class="col-md-4">
                                <img class="image-responsive" style={{maxWidth: "100%", src:"coba.png", alt:"..."}} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                                <td class="project-actions text-right">
                                    <a class="btn btn-primary btn-sm" href="#">
                                        <i class="fas fa-eye">
                                        </i>
                                        View
                                    </a>
                                    <a class="btn btn-info btn-sm" href="#">
                                        <i class="fas fa-pencil-alt">
                                        </i>
                                        Edit
                                    </a>
                                    <a class="btn btn-danger btn-sm" href="#">
                                        <i class="fas fa-trash">
                                        </i>
                                        Delete
                                    </a>
                                </td>

                                </div>
                            </div>
                            </div>

                        </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card">
                        <div class="card-header">
                            <h3 class="card-title"><i class="fas fa-ad"></i> Space Iklan</h3>
                        </div>
                        <div class="Container" style={{marginLeft: "15px", marginRight: "15px", maxWidth: "100%"}}>
                            <div class="card text-white bg-primary mb-3 mt-3">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h5 class="card-title">Primary card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                            <div class="card text-white bg-secondary mb-3">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h5 class="card-title">Secondary card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                            <div class="card text-white bg-success mb-3">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h5 class="card-title">Success card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                            <div class="card text-white bg-danger mb-3">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h5 class="card-title">Danger card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

export default Berita;