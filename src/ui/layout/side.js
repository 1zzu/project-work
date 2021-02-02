import React from 'react';
import { Link } from 'react-router-dom';

class LayoutSide extends React.Component{
    state = {

    }
    render() {
        return(
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="/" class="brand-link" style={{backgroundColor: 'darkorange', color: 'white'}}>
                    <i class="nav-icon fas fa-broadcast-tower ml-3"></i> &nbsp; 
                    <span class="brand-text font-weight-light">VOMUZA 107,9 FM</span>
                </Link>

                <div class="sidebar">
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item" style={{color: "white"}}>
                        <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            Dashboard
                            <i class="right fas fa-angle-left"></i>
                        </p>
                        </a>
                        <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <Link to="/" class="nav-link">
                            <i class="fas fa-home nav-icon"></i>
                            <p>Home</p>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a href="profil.html" class="nav-link">
                            <i class="fas fa-house-user nav-icon"></i>
                            <p>Profile</p>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="radio.html" class="nav-link">
                        <i class="nav-icon fas fa-microphone-alt"></i>
                        <p>
                            Radio online
                            <span class="right badge badge-danger">New</span>
                        </p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="podcast.html" class="nav-link">
                        <i class="nav-icon fas fa-podcast"></i>
                        <p>
                            Podcast
                        </p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <Link to="/berita"class="nav-link">
                            <i class="nav-icon fas fa-newspaper"></i>
                            <p>
                                Berita
                            </p>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/galeri" class="nav-link">
                            <i class="nav-icon far fa-image"></i>
                            <p>
                                Gallery
                            </p>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login" class="nav-link">
                        <i class="nav-icon fas fa-user"></i>
                        <p>
                            Login
                        </p>
                        </Link>
                    </li>
                    </ul>
                </nav>
                </div>
            </aside>
        )
    }
}

export default LayoutSide;