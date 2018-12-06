  <style scoped>
       .navbar{
            margin-bottom: 10px;
        }
        .slide{
            position: absolute;
            z-index: 1000;
            font-size: 30px;
            cursor: pointer;
            color: #2e86de;
        }

        .hidden-show{
            display: none;
            opacity: 0;
        }

        .rotate-arrow{
            transform: rotate(180deg);
        }

        .location-detail{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(60, 59, 59, 0.56);
            padding: 50px 50px 50px 50px;
            display: none;
            opacity: 0;
        }

        .show-detail{
            display: block;
            opacity: 1;
        }
        .hide-detail{
            display: none;
            opacity: 0;
        }

        .location-detail .request-info{
            display: flex;
            justify-content: center;
        }
        .location-detail .request-info .close{
            position: relative;
            top: 0px;
            left: 25px;
            color: black;
            z-index: 1000;
         }
        .location-detail .request-info ul{
           width: 340px;
            height: 500px;
            margin: 0;
            padding: 30px;
            color: black;
            background-color: #fff;
            border-radius: 6px;
        }
        .location-detail .request-info ul li{
            list-style: none;
        }
          

          .navbar {
              padding: 15px 10px;
              background: #fff;
              border: none;
              border-radius: 0;
              margin-bottom: 40px;
              box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.85);
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
   <div id="content">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand " href="#" > <img width="70px" src="https://uphinhnhanh.com/images/2018/12/02/logod94b759c8218f26f.png" alt=""> </a>
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
            <a class="nav-link " href="#">Trương Văn Hậu</a>
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
              <a class="dropdown-item" href="#"><i class="fas fa-sign-in-alt"></i> Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- notification : start -->
    <div class="row">
                  <!-- <div class="slide">
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </div> -->
                    <div class="col-sm-12" id="notification">
                      <table class="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Note</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="Items in formdata">
                            <th scope="row">{{Items.ID}}</th>
                            <td>{{Items.Name}}</td>
                            <td>{{Items.Phone}}</td>
                            <td>{{Items.Address}}</td>
                             <td>{{Items.Note}}</td>
                            <td>
                              <button class="btn btn-primary detail" @click="selectDetail(Items.Address)">Detail</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>

          </div>
        </div>
        <!-- notification : end -->

        <!-- Pagination : start -->
        <div class="row" style="justify-content: flex-end">
           <div class="col-sm-4">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
        </div>
        <!-- Pagination : end -->

        <!-- localtion-detail : start -->
        <div class="location-detail" v-bind:class="isshowdetail">
          <div class="row">
            <div class="col-sm-4">
              <div class="request-info">
                <div class="close" @click="closeDtail">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <ul>
                  <li>Name &nbsp;&nbsp;  : <span>Nguyễn Văn A </span> </li>
                  <li>Address : <span>1994</span></li>
                  <li>Phone  &nbsp;&nbsp;  : <span>Gay</span></li>
                  <li>Note  &nbsp;&nbsp;&nbsp;&nbsp;   : <span>1234567890</span></li>
                  <li>Lat &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  : <span>...</span></li>
                  <li>lng &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  : <span>...</span></li>
                </ul>
              </div>
            </div>
            <div class="col-sm">
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
              <!-- <div id="map" style="min-height: 600px">
                  
              </div> -->
            </div>
          </div>
        </div>
        <!-- localtion-detail : end -->
      </div>
    </div>
  </template>
  <script>

  </script>

