<style scoped>
    #map{
        width: 100%;
        height: 100%;
    }
    @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
    body {
        font-family: 'Poppins', sans-serif;
        background: #a9a9a9c2;
    }

    p {
       font-size: 1.1em;
        font-weight: 400;
        line-height: 1.7em;
        color: #0e0e0e;
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

    /*driver*/
    .wrapper-driver{
        display: flex;
        padding-top: 87px;
        padding-bottom: 80px;
        padding-left: 41px;
        padding-right: 40px;
        width: 767px;
        height: 1024px;
        background: url(https://themes.webdoctor.vn/template/frontend/page-demo/Images/pad-port.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin: 0 auto;
    }

    /* ba nút : bắt đầu, đang di chuyển, kết thúc */
    .wrapper-button{
        display: flex;
        justify-content: space-between;
        padding: 10px 5px;
    }
    /* ba nút : bắt đầu, đang di chuyển, kết thúc */


    /* thông tin : hình ảnh, tên, trạng thái */
    .info-driver{
        width: 100%;
        height: 200px;
        background-color: #3d5de6;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .info-driver span{
        margin-top: 20px;
    }

    .portrait{
        width: 60px;
        height: 60px;
        background-color: grey;
        border-radius: 50%;
    }

    .info-driver .driver-status{
        padding: 0 5px;
    }
    .info-driver select{
        font-family: segoe ui;
        font-size: 15px;
        border-radius: 5px;
    }
    /* thông tin : hình ảnh, tên, trạng thái */


    .wrapper-driver #content{
        padding: 0;
        position: relative;
        font-family: segoe ui;
        display: flex;
        flex-direction: column;
    }
    /* thông báo: start */
    .wrapper-driver #content .wrapper-notification {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(156, 156, 156, 0.37);
        transition: 1s;
        transform: scale(0);
        transform-origin: 0 0;
    }
    .show-wrapper-notification{
        transform: scale(1) !important;
    }
    .wrapper-driver #content .wrapper-notification .notification{
        position: absolute;
        left: 20%;
        top: 198px;
        background-color: #fff;
        padding: 19px 20px;
        border-radius: 6px;
        text-align: center;
    }
    .wrapper-driver #content .wrapper-notification .notification .agree{
        background-color: #74b9ff;
        padding: 0 5px;
        color: #fff;
    }
    .wrapper-driver #content .wrapper-notification .notification .refuse{
        background-color: #74b9ff;
        padding: 0 5px;
        color: #fff;
    }
    /* thông báo: end */
</style>


<template>
    <div class="wrapper-driver">
        <nav id="sidebar" v-bind:class="active">
                <div class="sidebar-header">
                    <h3>DANH MỤC  
                        <button type="button" id="sidebarCollapse" class="btn btn-info" @click="sidebarCollapse">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                    </h3>
                    <strong>
                        <button type="button" id="showmenu" class="btn btn-info" @click="showmenu">
                            <i class="fas fa-align-justify"></i>
                        </button>
                    </strong>
    
                </div>
                <div class="info-driver">
                    <div class="portrait">
                        <img src="" alt="">
                    </div>
                    <span>Nguyễn Văn A</span>
                    <div class="driver-status mb-3">
                        <select>
                            <option>Online</option>
                            <option>Offline</option>
                        </select>
                    </div>
                </div>
                <ul class="list-unstyled components">         
                    <li id="notifi">
                        <a href="javascript:void(0)">
                            <i class="fas fa-paper-plane"></i>
                            Thông báo
                        </a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" >
                            <i class="fas fa-copy"></i>
                            Điểm cá nhân
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-info"></i>
                            Blog tài xế
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-hands-helping"></i>
                            Hổ trợ
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-sign-out-alt"></i>
                            Đăng xuất
                        </a>
                    </li>
                </ul>
            </nav>
    
            <!-- Page Content  -->
            <div id="content">
                <div class="wrapper-button">
                    <div class="btn btn-primary">Bắt đầu</div>
                    <div class="btn btn-light"> Đang di chuyển ... </div>
                    <div class="btn btn-primary">Kết thúc</div>
                </div>

                <div id="map">
                     <GmapMap
                      :center="center"
                      :zoom="13"
                      map-type-id="terrain"
                      style="width: 100%; height: 100%"
                    >
                      <GmapMarker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                      />
                    </GmapMap>
                </div>

                <!-- thông báo có khách : start -->
                <div class="wrapper-notification" v-bind:class="ishowTB">
                    <div class="notification" >
                        <p>Bạn vừa nhận được một cuốc xe </p>
                        <p style="text-align=center;">
                            <button class="btn btn-primary" type="button" id="btndongy" @click="hiddenTB">Đồng ý</button>
                            <button class="btn btn-danger" type="button" id="btntuchoi" @click="hiddenTB">từ chối</button>
                        </p>
                        
                    </div>
                </div>
                <!-- thông báo có khách : end -->
            </div> 
    </div>
</template>

<script>
  export default{

        data(){
            return {
                center: { lat: 10.7680949, lng: 106.6739531 },
                markers: [{position:{lat: 10.7680949, lng: 106.6739531}}],
                places: [],
                currentPlace: null,
                active:'active',
                ishowTB:''
            }
        },
        mounted () {
             this.showTB(); 
        },
        methods: {
            sidebarCollapse: function(){
                // $('#sidebar').toggleClass('active');
                this.active='active';
            },
            showmenu: function(){
                this.active ='';
            },
            showTB:function(){
                this.ishowTB='show-wrapper-notification';
            },
            hiddenTB:function(){
                this.ishowTB='';
            }
        }
    }
</script>



