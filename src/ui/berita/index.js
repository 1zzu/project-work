import React from 'react';
import { API_URL } from '../../config/env';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';

class Berita extends React.Component{
    state={
        berita: []

    }

    componentDidMount() {
        this.getBerita();
    }

    getBerita(){
        axios.get(`${API_URL}/berita/getall`).then(res => {
            console.log('res:', res.data)
            this.setState({berita: res.data})

        })
    }

    render(){
        console.log(this.state, "berita");
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

                            {
                                this.state.berita.map(item => (
                                    <div class="row g-0">
                                        <div class="col-sm-4">
                                            <img class="image-responsive" src={item.picture} style={{maxWidth: "100%", alt:"..."}} />
                                        </div>
                                        <div class="col-sm-8 mt-2">
                                            <div class="card-body">
                                            <h5 class="card-title">{item.tittle}</h5>
                                            <p class="card-text">{item.body}</p>
                                            <p class="card-text"><small class="text-muted">{item.CreateAt}</small></p>

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
                                )) 
                            }
                            
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