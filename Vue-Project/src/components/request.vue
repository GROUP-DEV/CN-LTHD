

    <!-- Bootstrap CSS CDN -->
  
    <style scoped>
    #map{
        width: 100%;
        /*height: 100%;*/
    }
    .title{
        text-align: center;
        font-size: 24px;
        margin-bottom: 22px;
        color: #3454dc;
    }
    .request-receiver{
        width: 100%;
        height: 100%;
      
    }
   /* .request-receiver .shadow-bg{
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.80);
    }*/
    .request-receiver .shadow-bg .request-form{
        width: 350px;
        background-color:rgba(158, 156, 156, 0.43);
        border-radius: 10px;
        padding: 30px;
        margin: 0 auto;
    }
    .request-receiver .shadow-bg .request-form .team{
        display: flex;
        justify-content: center;
        margin: 30px 0;
        margin-top: 0;
    }
    .request-receiver .shadow-bg .request-form .team .logo{
       width: 100px;
   }
   .request-receiver .shadow-bg .request-form .team .logo img{
       width: 100%;
   }
   /*css left*/

     @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
   body {
        font-family: 'Poppins', sans-serif;
        background: #fafafa;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 1.1em;
        font-weight: 300;
        line-height: 1.7em;
        color: #999;
    }

    a,
    a:hover,
    a:focus {
        color: inherit;
        text-decoration: none;
        transition: all 0.3s;
    }

    .navbar {
        padding: 15px 10px;
        background: #fff;
        border: none;
        border-radius: 0;
        margin-bottom: 40px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.54);
    }

    .navbar-btn {
        box-shadow: none;
        outline: none !important;
        border: none;
    }

    .line {
        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #ddd;
        margin: 40px 0;
    }

    i,
    span {
        display: inline-block;
    }

        /* ---------------------------------------------------
            SIDEBAR STYLE
            ----------------------------------------------------- */
            /*.wrapper {
                display: flex;
                align-items: stretch;
                  background: url('https://uphinhnhanh.com/images/2018/12/02/map.png');
            }*/

            .request-receiver {
                width: 100%;
                height: 100%;
               
            }
            #sidebar {
                min-width: 250px;
                max-width: 250px;
                background: #7386D5;
                color: #fff;
                transition: all 0.3s;
            }

            #sidebar.active {
                min-width: 80px;
                max-width: 80px;
                text-align: center;
            }

            #sidebar.active .sidebar-header h3,
            #sidebar.active .CTAs {
                display: none;
            }

            #sidebar.active .sidebar-header strong {
                display: block;
                font-size: 17px;
            }

            #sidebar ul li a {
                text-align: left;
            }

            #sidebar.active ul li a {
                padding: 20px 10px;
                text-align: center;
                font-size: 0.85em;
            }

            #sidebar.active ul li a i {
                margin-right: 0;
                display: block;
                font-size: 1.8em;
                margin-bottom: 5px;
            }

            #sidebar.active ul ul a {
                padding: 10px !important;
            }

            #sidebar.active .dropdown-toggle::after {
                top: auto;
                bottom: 10px;
                right: 50%;
                -webkit-transform: translateX(50%);
                -ms-transform: translateX(50%);
                transform: translateX(50%);
            }

            #sidebar .sidebar-header {
                padding: 20px;
                background: #6d7fcc;
            }

            #sidebar .sidebar-header strong {
                display: none;
                font-size: 1.8em;
            }

            #sidebar ul.components {
                padding: 20px 0;
                border-bottom: 1px solid #47748b;
            }

            #sidebar ul li a {
                padding: 10px;
                font-size: 1.1em;
                display: block;
            }

            #sidebar ul li a:hover {
                color: #7386D5;
                background: #fff;
            }

            #sidebar ul li a i {
                margin-right: 10px;
            }

            #sidebar ul li.active>a,
            a[aria-expanded="true"] {
                color: #fff;
                background: #6d7fcc;
            }

            a[data-toggle="collapse"] {
                position: relative;
            }

            .dropdown-toggle::after {
                display: block;
                position: absolute;
                top: 50%;
                right: 20px;
                transform: translateY(-50%);
            }

            ul ul a {
                font-size: 0.9em !important;
                padding-left: 30px !important;
                background: #6d7fcc;
            }

            ul.CTAs {
                padding: 20px;
            }

            ul.CTAs a {
                text-align: center;
                font-size: 0.9em !important;
                display: block;
                border-radius: 5px;
                margin-bottom: 5px;
            }

            a.download {
                background: #fff;
                color: #7386D5;
            }

            a.article,
            a.article:hover {
                background: #6d7fcc !important;
                color: #fff !important;
            }

    /* ---------------------------------------------------
        CONTENT STYLE
        ----------------------------------------------------- */

        #content {
            width: 100%;
            padding: 20px;
            min-height: 100vh;
            transition: all 0.3s;
             background: url('https://uphinhnhanh.com/images/2018/12/02/map.png');
            /*background: #fafafa6e;*/
        }

    /* ---------------------------------------------------
        MEDIAQUERIES
        ----------------------------------------------------- */

        @media (max-width: 768px) {
            #sidebar {
                min-width: 80px;
                max-width: 80px;
                text-align: center;
                margin-left: -80px !important;
            }
            .dropdown-toggle::after {
                top: auto;
                bottom: 10px;
                right: 50%;
                -webkit-transform: translateX(50%);
                -ms-transform: translateX(50%);
                transform: translateX(50%);
            }
            #sidebar.active {
                margin-left: 0 !important;
            }
            #sidebar .sidebar-header h3,
            #sidebar .CTAs {
                display: none;
            }
            #sidebar .sidebar-header strong {
                display: block;
            }
            #sidebar ul li a {
                padding: 20px 10px;
            }
            #sidebar ul li a span {
                font-size: 0.85em;
            }
            #sidebar ul li a i {
                margin-right: 0;
                display: block;
            }
            #sidebar ul ul a {
                padding: 10px !important;
            }
            #sidebar ul li a i {
                font-size: 1.3em;
            }
            #sidebar {
                margin-left: 0;
            }
            #sidebarCollapse span {
                display: none;
            }
        }
        </style>
<template>
     <!--    <div class="wrapper"> -->
          

            <!-- Page Content  -->

            <div id="content">

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand " href="#" >
                        <img width="70px" src="https://uphinhnhanh.com/images/2018/12/02/logod94b759c8218f26f.png" alt=""> </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="col-sm"> </div>
                    <div class="col-sm"></div>
                    <div class="col-sm"></div>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <form class="form-inline my-2 my-lg-0 col-md-auto">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <ul class="navbar-nav mr-auto my-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " href="#">{{lgName.user.fullname}}</a>
                            </li> 
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-user fa-fw"></i>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                                    <a class="dropdown-item" href="#"> setting</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#" @click="logout"><i class="fas fa-sign-in-alt"></i> Logout</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                </nav>


                <div id="map">
                    <div class="request-receiver">
                       <div class="shadow-bg">
                            <div class="request-form">
                                <div class="team">
                                    <div class="logo">
                                       <img src="https://uphinhnhanh.com/images/2018/12/02/logod94b759c8218f26f.png" alt=""/> 
                                    </div>

                                </div>
                                <div class="title">
                                    NHẬP THÔNG TIN KHÁCH
                                </div>
                                <form style="text-align: center" action="" method="post" v-on:submit.prevent="sendRequest">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" placeholder="Name" v-model="infoRequest.b_name"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="phone" placeholder="Phone" v-model="infoRequest.b_phone"/>
                                    </div>
                                      <div class="form-group">
                                        <!-- <input type="password" class="form-control" id="address" placeholder="Address"/> -->
                                            <gmap-autocomplete  
                                              class="form-control"
                                              @place_changed="setPlace"
                                              :options="{
                                                bounds: {north: 102.170435826, south: 8.59975962975, east: 109.33526981, west: 23.3520633001},
                                                strictBounds: true
                                              }">
                                            </gmap-autocomplete>
                                    </div>
                                    <div class="form-group">
                                        <textarea v-model="infoRequest.b_note" class="form-control" id="note" cols="30" rows="5" placeholder="Note"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->
</template>
    <script>
        export default{
            data(){
                 var name = JSON.parse(localStorage.getItem('key'));
                return {
                   // description: '',
                    isCheckLogin: true,
                    isCheckRegister: false,
                    latLng: {},
                    description:'',
                    infoRequest:{},
                    lgName:name
                }
            },
            methods: {
                logout(){
                    localStorage.removeItem('key');
                    window.location.replace('http://localhost:8080/#/');
                },
                changeIsCheckLogin: function(){
                    this.isCheckLogin = !this.isCheckLogin;
                    this.isCheckRegister = !this.isCheckRegister;
                },
                changeIsCheckRegister: function(){
                    this.isCheckLogin = !this.isCheckLogin;
                    this.isCheckRegister = !this.isCheckRegister;
                },
                 sendRequest(){
                    if(this.infoRequest.b_name==null || this.infoRequest.b_phone==null || this.infoRequest.b_address==null || this.infoRequest.b_note == null){
                        alert('dữ liệu không được rỗng!!');
                        return;
                    }
                    this.axios.post("http://172.0.0.1:1742/b/bookcar",this.infoRequest)
                    .then((response) => {
                        alert(response.data.message);
                        this.infoRequest.b_name =null;
                        this.infoRequest.b_phone =null;
                        this.infoRequest.b_address=null;
                        this.infoRequest.b_note =null;
                        console.log(response);
                     }).catch(err => {
                        console.log(err)
                    })
                },
                setPlace(place) {
                    //console.log(place.formatted_address);
                    this.infoRequest.b_address = place.formatted_address;
                    if (!place) return
                    this.latLng = {
                      lat: place.geometry.location.lat(),
                      lng: place.geometry.location.lng(),
                    };
                }
            }
        }
    </script>
