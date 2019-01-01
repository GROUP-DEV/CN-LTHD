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
    <a class="navbar-brand" @click="geocodeAPI"> <img width="70px" src="https://uphinhnhanh.com/images/2018/12/02/logod94b759c8218f26f.png" alt=""> </a></a>

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
       <form class="login-form" method="post" v-on:submit.prevent="login">
        <div class="form-group">
          <label for="exampleInputEmail1" class="text-uppercase">Email</label>
          <input type="Email" class="form-control" placeholder="Email" v-model="formdata.u">

        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="text-uppercase">Password</label>
          <input type="password" class="form-control" placeholder="Password" v-model="formdata.p">
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
       <form action="" method="post" v-on:submit.prevent="regist">
        <div class="form-group">
          <input type="Email" name="txtName" class="form-control" placeholder="Email"  v-model="formregist.u_mail" />
        </div>
        <div class="form-group">
          <input type="password" name="txtPassword" class="form-control" placeholder="Password"  v-model="formregist.u_pass"/>
        </div>
        <div class="form-group">
          <input type="password" name="txtConfirmPassword" class="form-control" placeholder="Confirm Password" v-model="formregist.ConfirmPassword" />
        </div>
        <div class="form-group">
          <input type="text" name="txtUsername" class="form-control" placeholder="Họ Và Tên"  v-model="formregist.u_name" />
        </div>
        <div class="form-group">
          <input type="text" name="txtPhone" class="form-control" placeholder=" Phone Number"  v-model="formregist.u_phone"/>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-login float-right">send</button>
        </div>
      </form>

    </div>

    <!-- END UP -->
  </div>
  <div class="col-md-8 banner-sec" id="map">
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
</div>
</div>
</div>


</template>
<script> 
  var socket = io.connect();
  
  export default{

        data(){
           var name = JSON.parse(localStorage.getItem('key'));
            return {
                checkLogin:name,
                isCheckLogin: true,
                isCheckRegister: false,
                formdata:{u:'request@gmail.com',p:'123456'},//u:'htkh17hcb@gmail.com',p:'0908325568'
                formregist:{},
                msg:'',
                center: { lat: 10.7680949, lng: 106.6739531 },
                markers: [{position:{lat: 10.7680949, lng: 106.6739531}}],
                places: [],
                currentPlace: null
            }
        },
        mounted () {
            //this.geolocate();
            //this.addMarker();
             if(this.checkLogin.user.group_user == 1){
                window.location.replace('http://localhost:8080/#/request');
            }
            if(this.checkLogin.user.group_user == 2){
                window.location.replace('http://localhost:8080/#/location');
            }
            if(this.checkLogin.user.group_user == 3){
                window.location.replace('http://localhost:8080/#/management');
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
                login(){
                  //socket.emit('login')
                    console.log(this.formdata);
                    if(this.formdata.u==null || this.formdata.p ==null){
                        alert('Email and Password not null!!!');
                        return;
                    }
                    //thay bằng socket.on()
                    this.axios.post("http://localhost:1742/u/login/",this.formdata)
                    .then((response) => {
                        console.log(response.data);
                        if(response.data.user.group_user == 1){
                            //$router.push({ path: '/render/' });
                            localStorage.setItem('key',JSON.stringify(response.data));
                             this.$router.push({path: 'request'});
                             console.log(this.msg);
                             return;
                        }
                        if(response.data.user.group_user == 2){
                            //$router.push({ path: '/render/' });
                            localStorage.setItem('key',JSON.stringify(response.data));
                             this.$router.push({path: 'location'});
                             console.log(this.msg);
                             return;
                        }
                         if(response.data.user.group_user == 3){
                            //$router.push({ path: '/render/' });
                            localStorage.setItem('key',JSON.stringify(response.data));
                             this.$router.push({path: 'management'});
                             console.log(this.msg);
                             return;
                        }
                        if(response.data.user.group_user == 4){
                            //$router.push({ path: '/render/' });
                            localStorage.setItem('key',JSON.stringify(response.data));
                             this.$router.push({path: 'driver'});
                             console.log(this.msg);
                             return;
                        }
                        else{
                            alert('Ten dang nhap va mat khau khong ton tai!!');
                        }
                     }).catch(err => {
                         alert('Ten dang nhap va mat khau khong ton tai');
                    })
                },

                // DANG KY
                regist(){
                    if(this.formregist.u_pass==null || this.formregist.u_mail==null || this.formregist.u_phone==null || this.formregist.u_name == null){
                        alert('dữ liệu không được rỗng!!');
                        return;
                    }
                    if(this.formregist.ConfirmPassword != this.formregist.u_pass){
                        alert('Nhập lại password bị sai!');
                        return;
                    }
                    this.axios.post("http://localhost:1742/u/signin",this.formregist)
                    .then((response) => {
                      console.log(response);
                        alert(response.data.message);
                        this.formregist.u_pass =null;
                        this.formregist.u_mail =null;
                        this.formregist.u_phone=null;
                        this.formregist.u_name =null;
                        this.formregist.ConfirmPassword =null;
                     }).catch(err => {
                        console.log(err)
                    })
                },
                
                // GET LAT AND LNG
                geocodeAPI(){
                    // Prevent actual submit
                     // e.preventDefault();
                     console.log(this.lng);
                    var location1 = "384 ly thai to, phuong 10, quan 10, tp. ho chi minh";

                    this.axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
                      params:{
                        address:location1,
                        key:'AIzaSyCHY7K0nxdBJ2MVMMVe46mJP8PvoezIUvc'
                      }
                    })
                    .then(function(response){
                      // Log full response
                      var ln = response.data.results[0].geometry.location.lng;
                      //this.lng = ln;
                       // this.location.lat = response.data.results[0].geometry.location.lat;
                        //this.lng = response.data.results[0].geometry.location.lng;
                      console.log(response.data.results[0].geometry.location.lng);
                    })
                    .catch(function(error){
                      console.log(error);
                    });
                },
                setPlace(place) {
                  this.currentPlace = place;
                },
                addMarker() {
                  if (this.currentPlace) {
                    const marker = {
                      lat: this.currentPlace.geometry.location.lat(),
                      lng: this.currentPlace.geometry.location.lng()
                    };
                    this.markers.push({ position: marker });
                    this.places.push(this.currentPlace);
                    this.center = marker;
                    this.currentPlace = null;
                  }
                },
                 geolocate: function() {
                  navigator.geolocation.getCurrentPosition(position => {
                    this.center = {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                    };
                  });
                }
         }
    }
</script>
