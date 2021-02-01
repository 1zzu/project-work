import React from 'react';
import { API_URL } from '../../config/env';

class Login extends React.Component{
    state = {

    }
    render(){
        return(
            <div class="content-wrapper">
                <section class="content">
                    <div class="container" style={{position: "static", width: "450px"}}>
                        <div class="login-box">
                        <div class="login-logo">
                            <a href="index.html"><b>VOMUZA</b> 107,9 FM</a>
                        </div>
                        <div class="card">
                            <div class="card-body login-card-body">
                            <p class="login-box-msg">Sign in to start your session</p>

                            <form action="../../index3.html" method="post">
                                <div class="input-group mb-3">
                                <input type="email" class="form-control" placeholder="Email" />
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                    </div>
                                </div>
                                </div>
                                <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Password" />
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                    </div>
                                </div>
                                </div>
                                <div class="row">
                                <div class="col-6">
                                    <button type="submit" class="btn btn-success btn-block">Register</button>
                                </div>
                                <div class="col-6">
                                    <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login;