import { Component,OnInit } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router,ActivatedRoute  } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SidebarComponent} from 'src/app/shared/components/sidebar/sidebar.component'


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit{
  email: String;
  password: String;
  titleForm:String="INICIO DE SESIÓN";
  formLogin=true;
  formSolicitudUsuario=false;
  formRecuperacion=false;
  usuarioVerificado=false;
  mensajeModal="";
  user="";
  correo="";
  status_login="";
  mostrarModal=false;
  loading=false;
  loadingPreguntas=false;
  formCorreo=false;
  formPreguntas=false;
  formReg=false;
  preguntasSeguridad=[];
  preguntaSeguridad=false;
  passEstablecido=false;
  correoElectronico=false;
  primerVez=false;
  formPv=false;
  formGroup: FormGroup | null = null;


  constructor(private fb: FormBuilder,private http:HttpClient,public routerA: ActivatedRoute, public router: Router,private toastr: ToastrService,
    private SidebarComponent:SidebarComponent) {
    this.formGroup = this.fb.group({
      user: ['', [Validators.required]],
      pass: ''
    });



  }

  ngOnInit() {
    let existeQ=false;
    this.routerA.queryParams.subscribe(res=>{
      if(res['q']){
        let data=JSON.parse(atob(res['q']));
        this.mensajeModal="Recuperación de cuenta medienta correo, usuario: "+data['user'];
        existeQ=true;
        this.user=data['user'];
        let result = this.http.get(`http://localhost/ApoautisApis/v1/comprobarToken/${res['q']}`).toPromise();
      result.then((data) => {
          if(data['correcto']){
            this.mostrarModal=true;
            this.correoElectronico=true;
            this.toastr.success(data['msg'], '');
          }else{
            this.toastr.error(data['msg'], '');
            this.router.navigateByUrl("/login");
          }
      })
        .catch((ex) => {
            console.log(ex);
      });

      }
    })
    if (localStorage && !existeQ){
      if(localStorage.getItem('login') != undefined){
        this.router.navigateByUrl("/dashboard/"+ this.user);
      }
    }

  }

  onSubmit(){
    alert();
  }

  login(user,pass) {
    this.user=user.value;
    if(user.value.length && pass.value.length){
      let consulta=[user.value,pass.value];
      let result = this.http.get(`http://localhost/ApoautisApis/v1/login/${btoa(JSON.stringify(consulta))}`).toPromise();
      result.then((data) => {
        if(data['login']['login']==="Passcorrecto"){
          this.mostrarModal=true;
          this.correoElectronico=true;
        }else{
          if(data['code']===1){
            //console.log(data['login']['data'].id_usuario);
            if(data['login']['correcto']){
              localStorage.setItem('login', data['login']['data'].id_usuario);
              this.router.navigateByUrl("/dashboard/"+ this.user);
              this.toastr.success('¡Inicio de sesion exitoso!', '');
              this.mostrarModal=true;
              //this.mensajes.setMsg('¡Inicio de sesion exitoso!','',2000,'success','toast-top-right');
              //this.usuarioVerificado=true;
            }else{
              let status_login = data['login']['status_login'];
              if(status_login=="PV"){
                this.toastr.success(data['login']['alert'], '');
                this.getPreguntasPV(this.user,status_login);
                this.mostrarModal=true;
                this.primerVez=true;
                this.formPv=true;
              }else{
                this.usuarioVerificado=false;
                this.toastr.error(data['login']['alert'], '');
              }
              //this.mensajes.setMsg('¡Error al iniciar sesion!','',2000,'danger','toast-top-right');
            }
          }else{
            this.toastr.error('¡Error al hacer la consulta intente mas tarde!', '');
            //this.mensajes.setMsg('¡Error al hacer la consulta intente mas tarde!','',2000,'danger','toast-top-right');
          }
        }

      })
        .catch((ex) => {
            console.log(ex);
      });
    }else{
      this.toastr.error('¡Debe escribir un usuario y contraseña!', '');
      //this.mensajes.setMsg('¡Debe escribir un usuario y contraseña!','',2000,'danger','toast-top-right');
    }
  }

  verificarUser(user) {
    this.user=user.value;
    if(user.value.length){
      let result = this.http.get(`http://localhost/ApoautisApis/v1/existeUsuario/${user.value}`).toPromise();
      result.then((data) => {
          if(data['code']===1){
            if(data['existeUsuario']){
              this.toastr.success('¡Usuario comprobado con éxito!', '');
              //this.mensajes.setMsg('¡Usuario comprobado con éxito!','',2000,'success','toast-top-right');
              this.usuarioVerificado=true;
            }else{
              this.usuarioVerificado=false;
              this.toastr.error('¡No se pudo comprobar el usuario!', '');
              //this.mensajes.setMsg('¡No se pudo comprobar el usuario!','',2000,'danger','toast-top-right');
            }
          }else{
            this.toastr.error('¡Error al hacer la consulta intente mas tarde!', '');
            //this.mensajes.setMsg('¡Error al hacer la consulta intente mas tarde!','',2000,'danger','toast-top-right');
          }
      })
        .catch((ex) => {
            console.log(ex);
      });
    }else{
      this.toastr.error('¡Debe escribir un valor en la caja de texto!', '');
      //this.mensajes.setMsg('¡Debe escribir un valor en la caja de texto!','',2000,'danger','toast-top-right');
    }
  }

  getCorreo(user) {
    this.toastr.success('Enviando correo...', '');
    this.user=user.value;
    let result = this.http.get(`http://localhost/ApoautisApis/v1/correo/${user.value}`).toPromise();
    result.then((data) => {
        this.loading=false;
        if(data['correcto']){
          this.toastr.success('¡Se envio un correo electronico con los pasos para recuperar su acceso!', '');
        }else{
          this.correo="";
          this.toastr.error('¡Error al enviar el correo!', '');
        }
    })
      .catch((ex) => {
          console.log(ex);
    });
  }

  getPreguntas(user) {
    this.loadingPreguntas=true;
    let consulta=[user.value,'L'];
    let result = this.http.get(`http://localhost/ApoautisApis/v1/loginPreguntas/${btoa(JSON.stringify(consulta))}`).toPromise();
    result.then((data) => {
        this.loadingPreguntas=false;
        if(data['code']===1){
          this.preguntasSeguridad=JSON.parse(data['preguntas']);
        }else{
          this.correo="";
        }
    })
      .catch((ex) => {
          console.log(ex);
    });
  }

  getPreguntasPV(user,status_login) {
    this.loadingPreguntas=true;
    let consulta=[user,status_login];
    let result = this.http.get(`http://localhost/ApoautisApis/v1/loginPreguntas/${btoa(JSON.stringify(consulta))}`).toPromise();
    result.then((data) => {
        this.loadingPreguntas=false;
        if(data['code']===1){
          this.preguntasSeguridad=JSON.parse(data['preguntas']);
        }else{
          this.correo="";
        }
    })
      .catch((ex) => {
          console.log(ex);
    });
  }



  comprobarPreguntas(id,respuesta){
    let consulta=[id.value,respuesta.value,this.user];
    let result = this.http.get(`http://localhost/ApoautisApis/v1/comprobarPregunta/${btoa(JSON.stringify(consulta))}`).toPromise();
    result.then((data) => {
        if(data['code']===1){
          this.preguntaSeguridad=data['PreguntaSeguridad'];
          if(data['PreguntaSeguridad']){
            this.toastr.success('¡Comprobado con éxito, ingrese nueva contraseña!', '');
            //this.mensajes.setMsg('¡Comprobado con éxito, ingrese nueva contraseña!','',2000,'success','toast-top-right');
          }else{
            this.toastr.error('¡La respuesta a su pregunta no coidice!', '');
            //this.mensajes.setMsg('¡La respuesta a su pregunta no coidice!','',2000,'danger','toast-top-right');
          }

        }else{
          this.toastr.error('¡Error al hacer la consilta intente mas tarde!', '');
          //this.mensajes.setMsg('¡Error al hacer la consilta intente mas tarde!','',2000,'danger','toast-top-right');
        }
    })
      .catch((ex) => {
          console.log(ex);
    });
  }

  establecerPreguntaPass(pre,res,pass1,pass2) {
    if(res.value){
      if(pass1.value==pass2.value){

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
        if(regex.test(pass1.value)){
          let consulta=[pre.value,res.value,this.user,pass1.value];
        let result = this.http.get(`http://localhost/ApoautisApis/v1/establecerPassPv/${btoa(JSON.stringify(consulta))}`).toPromise();
        result.then((data) => {
            if(data['code']===1){
              this.router.navigateByUrl("/login");
              this.passEstablecido=data['passEstablecido'];
              this.mostrarModal=false;
              this.formLogin=true;
              this.formSolicitudUsuario=false;
              this.formRecuperacion=false;
              this.usuarioVerificado=false;
              this.formCorreo=false;
              this.formPreguntas=false;
              this.preguntaSeguridad=false;
              this.passEstablecido=false;
              this.toastr.success('¡Contraseña establecida con éxito!', '');
              //this.mensajes.setMsg('¡Contraseña establecida con éxito!','',2000,'success','toast-top-right');
            }else{
              this.toastr.error('¡Hubo un error al establecer su contraseña!', '');
              //this.mensajes.setMsg('¡Hubo un error al establecer su contraseña!','',2000,'danger','toast-top-right');
            }
        })
          .catch((ex) => {
              console.log(ex);
        });
        }else{
          this.toastr.error('¡Contraseña debe llevar una mayuscula una minuscula, un numero y caracter especial', '');
          this.toastr.error('¡Minimo 8 caracteres!', '');
        }
      }else{
        this.toastr.error('¡Las contraseñas no coididen!', '');
        //this.mensajes.setMsg('¡Las contraseñas no coididen!','',2000,'danger','toast-top-right');
      }
    }else{
      this.toastr.error('¡Debe establecer una respuesta!', '');
    }

  }



  establecerPass(pass1,pass2,pass0,tipoRecuperacion) {
    let consulta=[];
    if(tipoRecuperacion==2){
      if(pass0.value==null){
        this.toastr.error('¡Debe escribir la contraseña generada!', '');
      }else{
        consulta=[this.user,pass1.value, pass0.value];
      }
    }else{
      if(pass1.value==pass2.value){
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
          if(regex.test(pass1.value)){
            consulta=[this.user,pass1.value];
            let result = this.http.get(`http://localhost/ApoautisApis/v1/establecerPass/${btoa(JSON.stringify(consulta))}`).toPromise();
            result.then((data) => {
                if(data['code']===1){
                  this.passEstablecido=data['passEstablecido'];
                  this.mostrarModal=false;
                  this.formLogin=true;
                  this.formSolicitudUsuario=false;
                  this.formRecuperacion=false;
                  this.usuarioVerificado=false;
                  this.formCorreo=false;
                  this.formPreguntas=false;
                  this.preguntaSeguridad=false;
                  this.passEstablecido=false;
                  this.toastr.success('¡Contraseña establecida con éxito!', '');
                  //this.mensajes.setMsg('¡Contraseña establecida con éxito!','',2000,'success','toast-top-right');
                }else{
                  this.toastr.error('¡Hubo un error al establecer su contraseña!', '');
                  //this.mensajes.setMsg('¡Hubo un error al establecer su contraseña!','',2000,'danger','toast-top-right');
                }
            })
              .catch((ex) => {
                  console.log(ex);
            });
          }else{
            this.toastr.error('¡Contraseña debe llevar una mayuscula una minuscula, un numero y caracter especial', '');
            this.toastr.error('¡Minimo 8 caracteres!', '');
          }
      }else{
        this.toastr.error('¡Las contraseñas no coididen!', '');
        //this.mensajes.setMsg('¡Las contraseñas no coididen!','',2000,'danger','toast-top-right');
      }
    }
  }

  onKeyUpEvent(event: any,type){
    if(type=='user'){
      event.target.value = event.target.value.toUpperCase().split(" ").join("");
      event.target.value  = event.target.value.replace(/[`0-9~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    }else{
      event.target.value = event.target.value.split(" ").join("");
    }
  }

  mostrarPass(input:HTMLInputElement){
    if(input.type == "password"){
      input.type = "text";
    }else{
      input.type = "password";
    }
  }

  ingresoForm(form:HTMLFormElement,pass1,pass2){
    if(pass1.value!=""){


    if(pass1.value==pass2.value){

      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
        if(regex.test(pass1.value)){
          let elementos=[];
          let dataNform=form.getAttribute("data-nform");
          for (let i=0;i<form.elements.length;i++){
            let imput = <HTMLInputElement>form.elements[i]; // document.getElementById("myInput").value;
            if(imput.getAttribute("data-q")!=null){
              elementos.push({"campo":imput.getAttribute("data-q"),"value":imput.value});
            }
          }

          let json={"nform":dataNform,"campos":elementos,"id":1};
          let result = this.http.get('http://localhost/ApoautisApis/v1/insertData/'+btoa(JSON.stringify(json))).toPromise();
          result.then((data) => {
              if(data['correcto']){
                this.toastr.success('¡Usuario registrado con éxito!', '');

                this.formLogin=true;
                this.formRecuperacion=false;
                this.usuarioVerificado=false;
                this.formReg=false;
              }else{
                if(data['errorForm']){
                  for (let i=0;i<form.elements.length;i++){
                    let imput = <HTMLInputElement>form.elements[i]; // document.getElementById("myInput").value;
                    if(imput.getAttribute("data-q")==data['elem']){
                      imput.setAttribute("class","form-control errorValidate");
                      imput.focus();
                    }
                  }
                  setTimeout(()=>{
                    for (let i=0;i<form.elements.length;i++){
                      let imput = <HTMLInputElement>form.elements[i];
                      if(imput.getAttribute("data-evalClass")=="1"){
                        imput.setAttribute("class","form-control");
                      }
                    }
                  }, 3000);
                }
                this.toastr.error(data['error'], '');
              }
          })
            .catch((ex) => {
                console.log(ex);
          });
        }else{
          this.toastr.error('¡Contraseña debe llevar una mayuscula una minuscula, un numero y caracter especial', '');
          this.toastr.error('¡Minimo 8 caracteres!', '');
        }
    }else{
      this.toastr.error('¡Las contraseñas no coididen!', '');
      //this.mensajes.setMsg('¡Las contraseñas no coididen!','',2000,'danger','toast-top-right');
    }

  }else{
    this.toastr.error('¡Debe establecer una contraseña!', '');
  }
}

}
