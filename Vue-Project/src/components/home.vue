<style scoped>
    a.rou {
        padding-left: 2px !important;
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

            .wrapper {
                display: flex;
                align-items: stretch;
                  background: url('https://uphinhnhanh.com/images/2018/12/02/map.png');
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
        
        .addclass {
            display: block;
            color: #7386D5;
            background: #fff;
        }
        .removeclass {
            display: none;
        }
</style>
<template>
      <!-- Sidebar  -->
            <nav id="sidebar" v-bind:class="active">
                <div class="sidebar-header">
                    <h3>DANH MỤC  
                        <button type="button" id="sidebarCollapse" class="btn btn-info" @click="sidebarCollapse" >
                            <i class="fas fa-chevron-left"></i>
                        </button>
                    </h3>
                    <strong>
                        <button type="button" id="showmenu" class="btn btn-info" @click="showmenu" >
                            <i class="fas fa-align-justify"></i>
                        </button>
                    </strong>
                </div>
                <ul class="list-unstyled components">
                    <li @click="acti('request')" v-bind:class="clRequest">
                        <!-- <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" > -->
                        <router-link data-toggle="collapse" to="/request"> <!-- aria-expanded="false" -->
                             <i class="fas fa-home"></i>
                            Request
                        </router-link>
                        <!-- </a> -->
                    </li>
                    <li @click="acti('location')" v-bind:class="clLocation">
                        <!-- <a href="#"> -->
                            <router-link  to="/location" >
                                <i class="fas fa-map-marker-alt"></i>
                                Location
                            </router-link>
                            <!-- </a> -->
                      <!--   <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" >
                            <i class="fas fa-copy"></i>
                            Management
                        </a> -->
                    </li>
                    <li @click="acti('management')" v-bind:class="clManagement">
                        <router-link  to="/management">
                                <i class="fas fa-copy"></i>
                                Management
                         </router-link>
                    </li>

                    <li>
                        <a href="#">
                            <i class="fas fa-paper-plane"></i>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
</template>

<script>
        export default{
            data(){
                var name = JSON.parse(localStorage.getItem('key'));
                return {
                    
                    isCheckLogin: true,
                    isCheckRegister: false,
                    active:'active',
                    clRequest:'',
                    clLocation:'',
                    clManagement:'',
                    lcStore:name
                }
            },
            mounted(){
                 if(this.lcStore.user.group_user == 1 ){
                    this.clRequest = 'addclass';
                    this.clLocation='removeclass',
                    this.clManagement='removeclass'
                }
                if(this.lcStore.user.group_user == 2){
                    this.clRequest = 'removeclass';
                    this.clLocation='addclass',
                    this.clManagement='removeclass'
                }
                if(this.lcStore.user.group_user == 3){
                    this.clRequest = 'removeclass';
                    this.clLocation='removeclass',
                    this.clManagement='addclass'
                }
            },
            methods: {
                sidebarCollapse: function(){
                    // $('#sidebar').toggleClass('active');
                     this.active='active';
                },
                showmenu: function(){
                     this.active ='';
                },
                acti:function(varr){
                    if(varr == 'request'){
                        this.clRequest = 'addclass';
                        this.clLocation='',
                        this.clManagement=''
                    }
                    if(varr == 'location'){
                        this.clRequest = '';
                        this.clLocation='addclass',
                        this.clManagement=''
                    }
                    if(varr == 'management'){
                        this.clRequest = '';
                        this.clLocation='',
                        this.clManagement='addclass'
                    }
                }
            }
        }
</script>



