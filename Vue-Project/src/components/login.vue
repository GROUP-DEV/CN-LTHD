<style scoped>
    .bg-primary {
    background-color: #aacdec!important;
  }
  li.nav-item {
    position: relative;
    left: 71%;
    padding: 8px;
    font-weight: bold;
    text-decoration: blink;
    list-style: none;
  }
  a.nav-link.cl-login {
      color: white !important;
  }
  a.nav-link.cl-login:hover {
      border: 1px solid;
  }
 a.nav-link.cl-login:focus {
      border: 1px solid;
  }
  a.nav-link.cl-regist {
      color: white !important;
  }
   a.nav-link.cl-regist:hover {
      border: 1px solid;
  }
    a.nav-link.cl-regist:focus {
      border: 1px solid;
  }
   a.nav-link.cl-regist:focus .d-login {
      background: red;

  }
  

  .login-block{
    background: -webkit-linear-gradient(to bottom, #FFB88C, #DE6262);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #8ccaff94, #6a798985); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    float:left;
    width:100%;
    padding : 8%  ;
  }
  .banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;}
  .container{background:#fff; border-radius: 10px; box-shadow:15px 20px 0px rgba(0,0,0,0.1);}
  .carousel-inner{border-radius:0 10px 10px 0;}
  .carousel-caption{text-align:left; left:5%;}
  .login-sec{padding: 50px 30px; position:relative;}
  .login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}
  .login-sec .copy-text i{color:#FEB58A;}
  .login-sec .copy-text a{color:#E36262;}
  .login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #DE6262;}
  .login-sec h2:after{content:" "; width:100px; height:5px; background:#FEB58A; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}
  .btn-login{background: #DE6262; color:#fff; font-weight:600;}
  .banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}
  .banner-text h2{color:#fff; font-weight:600;}
  .banner-text h2:after{content:" "; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}
  .banner-text p{color:#fff;}
</style>
<template>
	  <div class="login-block">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary rounded">
      <a class="navbar-brand" href="#"> <img width="70px" src="https://uphinhnhanh.com/images/2018/12/02/logod94b759c8218f26f.png" alt=""> </a></a>
      
      <ul class="navbar-nav ml-auto"
        <li class="nav-item">
          <a class="nav-link cl-login" :disabled="isCheckLogin == true" @click="changeIsCheckLogin">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link cl-regist" :disabled="isCheckRegister == true"  @click="changeIsCheckRegister">Register</a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-4 login-sec">
          <!-- START LOGIN -->
          <div class="d-login" v-if="isCheckLogin">
             <h2 class="text-center">Login Now</h2>
          <form class="login-form">
            <div class="form-group">
              <label for="exampleInputEmail1" class="text-uppercase">Email</label>
              <input type="Email" class="form-control" placeholder="Email">

            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" class="text-uppercase">Password</label>
              <input type="password" class="form-control" placeholder="Password">
            </div>


            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input">
                <small>Remember Me</small>
              </label>
              <button type="submit" class="btn btn-login float-right">Login</button>
            </div>
          </form>
          </div>
          <!-- END LOGIN -->

          <!-- START SIGN UP -->
          <div class="d-sign" v-if="isCheckRegister">
                <h2 class="text-center">Sign up</h2>
              <div class="form-group">
                <input type="Email" name="txtName" class="form-control" placeholder="Email" value="" />
              </div>
              <div class="form-group">
                <input type="password" name="txtPassword" class="form-control" placeholder="Password" value="" />
              </div>
              <div class="form-group">
                <input type="password" name="txtConfirmPassword" class="form-control" placeholder="Confirm Password" value="" />
              </div>
              <div class="form-group">
                <input type="text" name="txtUsername" class="form-control" placeholder="Username" value="" />
              </div>
              <div class="form-group">
                <input type="text" name="txtPhone" class="form-control" placeholder=" Phone Number" value="" />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-login float-right">send</button>
              </div>
          </div>
        
          <!-- END UP -->
        </div>
        <div class="col-md-8 banner-sec" id="map"></div>
      </div>
    </div>
  </div>


</template>
  <script> 
    export default{
        data(){
            return {
                
                isCheckLogin: true,
                isCheckRegister: false,
            }
        },
        methods: {
            changeIsCheckLogin: function(){
                this.isCheckLogin = !this.isCheckLogin;
                this.isCheckRegister = !this.isCheckRegister;
            },
            changeIsCheckRegister: function(){
                this.isCheckLogin = !this.isCheckLogin;
                this.isCheckRegister = !this.isCheckRegister;
            },
        }
    }
   //  $(document).ready(function(){
   //      $('.cl-login').click(function(){
   //          $(".d-sign").css("display", "none");
   //            $('.d-login').css("display", "block");
   //      });
   //       $('.cl-regist').click(function(){
   //          $(".d-login").css("display", "none");
   //          $('.d-sign').css("display", "block");
   //      });
   //  });
   // function initMap() {

   //      //tinh khoang cach
   //      var source, destination;  
   //      var locations = [];  
   //      var directionsDisplay;  
   //      var directionsService = new google.maps.DirectionsService();  

   //      var myLatLng = {lat: 10.7680949, lng: 106.6739531};
   //      var map = new google.maps.Map(document.getElementById('map'), {
   //        center: myLatLng,
   //        zoom: 16,
   //        mapTypeId: 'roadmap'  
   //      });

   //      // Create a marker and set its position.
   //      var marker = new google.maps.Marker({
   //        map: map,
   //        position: myLatLng,
   //        animation:google.maps.Animation.BOUNCE,
   //        title: 'Hello World!'
   //      });

   //        //tim kiem
   //        var autocomplete = new google.maps.places.Autocomplete(document.getElementById('auto-search'));
   //        autocomplete.addListener('place_changed',function(){
   //            place = autocomplete.getPlace();// lay toa do
   //           // map.setCenter(place.geometry.location);
   //           map.fitBounds(place.geometry.viewport);
   //           marker.setPosition(place.geometry.location);
   //         });

   //        google.maps.event.addDomListener(window, 'load', function () {  
   //         new google.maps.places.SearchBox(document.getElementById('travelfrom'));  
   //         new google.maps.places.SearchBox(document.getElementById('travelto'));  
   //         directionsDisplay = new google.maps.DirectionsRenderer({ 'draggable': true });  
   //       });  
   //      }
      </script>

//     // import router from '../router';
//     // import {eventBus} from '../main.js';
// 	export default{
//         data(){
//             return {
//                 isCheckLogin: true,
//                 isCheckRegister: false,
//                 title:"Form Login",
// 				formdata:{u:'hotdau911995@yahoo.com',p:123456},
//                 msg:'',
//             }
//         },
//         methods: {

//                 changeIsCheckLogin: function(){
//                     this.isCheckLogin = !this.isCheckLogin;
//                     this.isCheckRegister = !this.isCheckRegister;
//                 },
//                 changeIsCheckRegister: function(){
//                     this.isCheckLogin = !this.isCheckLogin;
//                     this.isCheckRegister = !this.isCheckRegister;
//                 },
//                 login(){// chuoi json can nhan {success: 1, email: "hotdau1@yahoo.com", fullname: "anh yêu"}
//                 console.log(this.formdata);
//                 if(this.formdata.p==null || this.formdata.p ==null){
//                     alert('Email and Password not null!!!');
//                     return;
//                 }
//                 this.axios.post("http://172.28.77.1:1742/user/login/",this.formdata)
//                     .then((response) => {
//                         console.log(response.data);
//                         localStorage.setItem('key',response.data.Email);
//                          //localStorage.setItem('key',response.data.Email);
//                         if(response.data.sl==1){// dang nhap thanh cong
//                             eventBus.$emit('flag','true');
//                              router.push({ name: 'listTickets' });
//                              //router.push({ path: '/list-tickets' })
//                              //router.go(-1);
//                         }
//                         else{
//                             if(response.data.success == 0){// user hoac matkhau sai
//                                 alert('User Not Exist!!!');
//                             }
//                         }
//                      }).catch(err => {
//                         console.log(err)
//                     })
//             },
//          }
//     };
//