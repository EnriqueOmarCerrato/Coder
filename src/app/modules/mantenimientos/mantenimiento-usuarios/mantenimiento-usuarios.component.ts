import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MantenimientoService } from './mantenimiento.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import {ModalUserComponent} from './modal-user/modal-user.component'
import * as  printJS from  'print-js';
import { NavService } from 'src/app/services/nav.service';
import { Router,ActivatedRoute  } from "@angular/router";
import {SidebarComponent} from 'src/app/shared/components/sidebar/sidebar.component'

@Component({
  selector: 'app-mantenimiento-usuarios',
  templateUrl: './mantenimiento-usuarios.component.html',
  styleUrls: ['./mantenimiento-usuarios.component.scss']
})
export class MantenimientoUsuariosComponent implements OnInit {

  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent!: PageEvent;
  d: number = 0; //desde donde
  h: number = 5; //hasta donde
  buscar: any = '';
  campo: any = ['Estatus'];
  permisoinsertar:boolean;
  permisoeliminar:boolean;
  permisoactualizar:boolean;
  user:string;
  constructor(private http:HttpClient,private toastr: ToastrService,
             public service:MantenimientoService,
             private _dialog: MatDialog,
             public router: Router,
             private navpermiso:NavService,
             private SidebarComponent:SidebarComponent,
             private routerA: ActivatedRoute) {
              let params = {
                rol: 1,
                objeto: 17
              }
              this.SidebarComponent.menuspermiso(17).subscribe(resp=>{
                 this.permisoinsertar = resp[0].Permiso_insertar == '1' ?  true : false;
                 this.permisoeliminar = resp[0].Permiso_eliminar == '1' ?  true : false;
                 this.permisoactualizar = resp[0].Permiso_actualizar == '1' ?  true : false;
              });
              this.routerA.paramMap.subscribe(nomUser=>{
                this.user=nomUser.get('user');
              });
              }

  ngOnInit(): void {
    this.router.navigateByUrl("/dashboard/"+this.user+"/usuarios");
    this.service.mostrar();
  }


  cambioPagina(e: PageEvent) {
    this.d = e.pageIndex * e.pageSize;
    this.h = this.d + e.pageSize;
  }

  editar(item: any) {
      const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '15%';
    this._dialog.open(ModalUserComponent, dialogConfig);
    this.service.popform(item);
  }

  crear() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '15%';
      this._dialog.open(ModalUserComponent, dialogConfig);
      this.service.inicializarForm();
  }

  eliminar(id: any) {
      let params = {
        tipo:"delete",
        Cod_estatus: id,
      }
        this.service.eliminar(params).subscribe((resp: any) => {
          this.service.mostrar();
          this.toastr.error('Eliminado correctamente');
        });

  }

  impo() {

    let url = 'assets/logooo.jpeg';
    let rawHTML = `
   <div id="otra">
   <div class="parraf">
   <img src="${url}">
   <h5>ASOCIACIÓN HONDUREÑA DE APOYO AL AUTISTA</h5>
   <h5>REPORTE</h5>
   <h5>Listado de Uuarios </h5>
   </div>
   </div><br>`;
    printJS({
      printable: 'reporte',
      type: 'html',
      header: rawHTML,
      css: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
      style: '@page {   margin-left: 10%; } #otra {display: block  } #otra img { max-width: 140px;} .parraf { width: 100%; padding: 0px; text-align: center;  max-height: 80px, margin-left: 90%; }',
      scanStyles: false,
      documentTitle: 'Servicios',
      font_size: '10pt',
      ignoreElements: ['d']
    })

  }

  // loading=true;
  // loadingConfig=true;
  // mostrarModal=false;
  // data:any;
  // temp:any;
  // mostrarInsert=true;
  // constructor(private http:HttpClient,private toastr: ToastrService) { }

  // ngOnInit(): void {
  //   this.getData();
  // }

  // filterTable($event) {
  //   const val = $event.target.value;
  //   this.data['data'] = this.temp.filter((d) => {
  //     for (const key in d) {
  //       if (d[key]) {
  //         if (d[key].toString().toLowerCase().indexOf(val.toString().toLowerCase()) !== -1) {
  //           return true;
  //         }
  //       }
  //     }
  //     return false;
  //   });
  // }

  // getDataForm(form:HTMLFormElement){
  //   this.loadingConfig=true;
  //   this.mostrarModal=true;
  //   let dataNform=form.getAttribute("data-nform");
  //   let json={"nform":dataNform,"id":1};
  //   let result = this.http.get('http://localhost/ApoautisApis/v1/configForm/'+btoa(JSON.stringify(json))).toPromise();
  //   result.then((data) => {
  //       this.loadingConfig=false;
  //       for (let i=0;i<data['insertUser'].length;i++){
  //         for (let i2=0;i2<form.elements.length;i2++){
  //           let imput = <HTMLInputElement>form.elements[i2];
  //           let opt="";
  //           if(imput.getAttribute('data-q')==data['insertUser'][i]['name']){
  //             for (let i2=0;i2<data['insertUser'][i]['values'].length;i2++){
  //               opt+=`<option value="${data['insertUser'][i]['values'][i2]['id']}">${data['insertUser'][i]['values'][i2]['value']}</option>`;
  //             }
  //             imput.innerHTML=opt;
  //           }
  //         }
  //       }
  //   })
  //     .catch((ex) => {
  //         console.log(ex);
  //   });
  // }

  // public getData() {
  //   let result = this.http.get('http://localhost/ApoautisApis/v1/getTabla/1').toPromise();
  //   result.then((data) => {
  //       this.loading=false;
  //       this.data=data;
  //       this.temp=data['data'];
  //   })
  //     .catch((ex) => {
  //         console.log(ex);
  //   });
  // }

  // ingresoForm(form:HTMLFormElement){
  //   let elementos=[];
  //   let dataNform=form.getAttribute("data-nform");
  //   for (let i=0;i<form.elements.length;i++){
  //     let imput = <HTMLInputElement>form.elements[i]; // document.getElementById("myInput").value;
  //     if(imput.getAttribute("data-q")!=null){
  //       elementos.push({"campo":imput.getAttribute("data-q"),"value":imput.value});
  //     }
  //   }

  //   let json={"nform":dataNform,"campos":elementos,"id":1};
  //   let result = this.http.get('http://localhost/ApoautisApis/v1/insertData/'+btoa(JSON.stringify(json))).toPromise();
  //   result.then((data) => {
  //       if(data['correcto']){
  //         this.getData();
  //         this.mostrarModal=false;
  //       }else{
  //         if(data['errorForm']){
  //           for (let i=0;i<form.elements.length;i++){
  //             let imput = <HTMLInputElement>form.elements[i]; // document.getElementById("myInput").value;
  //             if(imput.getAttribute("data-q")==data['elem']){
  //               imput.setAttribute("class","form-control errorValidate");
  //               imput.focus();
  //             }
  //           }
  //           setTimeout(()=>{
  //             for (let i=0;i<form.elements.length;i++){
  //               let imput = <HTMLInputElement>form.elements[i];
  //               if(imput.getAttribute("data-evalClass")=="1"){
  //                 imput.setAttribute("class","form-control");
  //               }
  //             }
  //           }, 3000);
  //         }
  //         this.toastr.error(data['error'], '');
  //       }
  //   })
  //     .catch((ex) => {
  //         console.log(ex);
  //   });
  // }

  // processEmit(e){

  //   this.loadingConfig=true;
  //   this.mostrarModal=true;
  //   let form_ = <HTMLFormElement>document.getElementById('insertUser');
  //   let dataNform=form_.getAttribute("data-nform");
  //   let json={"nform":dataNform,"id":1};
  //   let result = this.http.get('http://localhost/ApoautisApis/v1/configForm/'+btoa(JSON.stringify(json))).toPromise();
  //   result.then((data) => {
  //       this.loadingConfig=false;
  //       for (let i=0;i<data['insertUser'].length;i++){
  //         for (let i2=0;i2<form_.elements.length;i2++){
  //           let imput = <HTMLInputElement>form_.elements[i2];
  //           let opt="";
  //           if(imput.getAttribute('data-q')==data['insertUser'][i]['name']){
  //             for (let i2=0;i2<data['insertUser'][i]['values'].length;i2++){
  //               opt+=`<option value="${data['insertUser'][i]['values'][i2]['id']}">${data['insertUser'][i]['values'][i2]['value']}</option>`;
  //             }
  //             imput.innerHTML=opt;
  //           }
  //         }
  //       }
  //       let elementos=[];
  //       this.mostrarInsert=false;
  //       this.mostrarModal=true;
  //       let form = <HTMLFormElement>document.getElementById('insertUser');
  //       for (let i=0;i<form.elements.length;i++){
  //         let imput = <HTMLInputElement>form.elements[i];
  //         if(imput.getAttribute("data-getValue")=="1"){
  //           elementos.push({"campo":imput.getAttribute("data-q")});
  //         }
  //       }
  //       let json={"nform":"insertUser","campos":elementos,"id":1,"where":e,"CampoWhere":"id_usuario"};
  //       let result = this.http.get('http://localhost/ApoautisApis/v1/dataRow/'+btoa(JSON.stringify(json))).toPromise();
  //       result.then((data) => {
  //           console.log(data);
  //         if(data['correcto']){
  //           for (let i=0;i<data['dataFormRow'].length;i++){
  //             for (let i2=0;i2<form.elements.length;i2++){
  //               let imput = <HTMLInputElement>form.elements[i2];
  //               let opt="";
  //               if(imput.getAttribute('data-where')=="1"){
  //                 imput.value=e;
  //               }
  //               if(imput.getAttribute('data-q')==data['dataFormRow'][i]['cod']){
  //                 imput.value=data['dataFormRow'][i]['value'];
  //                 imput.setAttribute('data-old',data['dataFormRow'][i]['value']);
  //                 if(imput.getAttribute('data-edit')=='0'){
  //                   imput.disabled=true;
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       })
  //         .catch((ex) => {
  //             console.log(ex);
  //       });
  //   })
  //     .catch((ex) => {
  //         console.log(ex);
  //   });

  // }

  // onKeyUpEvent(event: any,type){
  //   if(type=='user'){
  //     event.target.value = event.target.value.toUpperCase().split(" ").join("");
  //     event.target.value  = event.target.value.replace(/[`0-9~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  //   }else{
  //     event.target.value = event.target.value.split(" ").join("");
  //   }
  // }

  // generarPass(input:HTMLInputElement){
  //   input.value=this.generatePassword(8);
  // }

  // generatePassword(passwordLength) {
  //   var numberChars = "0123456789!#$%&/()=?¡";
  //   var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  //   var allChars = numberChars + upperChars + lowerChars;
  //   var randPasswordArray = Array(passwordLength);
  //   randPasswordArray[0] = numberChars;
  //   randPasswordArray[1] = upperChars;
  //   randPasswordArray[2] = lowerChars;
  //   randPasswordArray = randPasswordArray.fill(allChars, 3);
  //   return this.shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  // }

  // shuffleArray(array) {
  //   for (var i = array.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // }

  // EditForm(form:HTMLFormElement){
  //   let elementos=[];
  //   let dataChange=false;
  //   let where="";
  //   for (let i=0;i<form.elements.length;i++){
  //     let imput = <HTMLInputElement>form.elements[i];
  //     if(imput.getAttribute('data-where')=="1"){
  //       where=imput.value;
  //     }
  //     if(imput.getAttribute("data-q")!=null && imput.getAttribute("data-edit")=='1'){
  //       if(imput.getAttribute("data-old")!=imput.value){
  //         dataChange=true;
  //         elementos.push({"campo":imput.getAttribute("data-q"),"value":imput.value});
  //       }
  //     }
  //   }
  //   if(dataChange){
  //     let json={"nform":"insertUser","campos":elementos,"id":1,"where":where};
  //     let result = this.http.get('http://localhost/ApoautisApis/v1/editData/'+btoa(JSON.stringify(json))).toPromise();
  //     result.then((data) => {
  //         if(data['correcto']){
  //           this.toastr.success("Registro actualizado exitosamente", '');
  //           this.getData();
  //           this.mostrarModal=false;
  //         }else{
  //           if(data['errorForm']){
  //             for (let i=0;i<form.elements.length;i++){
  //               let imput = <HTMLInputElement>form.elements[i]; // document.getElementById("myInput").value;
  //               if(imput.getAttribute("data-q")==data['elem']){
  //                 imput.setAttribute("class","form-control errorValidate");
  //                 imput.focus();
  //               }
  //             }
  //             setTimeout(()=>{
  //               for (let i=0;i<form.elements.length;i++){
  //                 let imput = <HTMLInputElement>form.elements[i];
  //                 if(imput.getAttribute("data-evalClass")=="1"){
  //                   imput.setAttribute("class","form-control");
  //                 }
  //               }
  //             }, 3000);
  //           }
  //           this.toastr.error(data['error'], '');
  //         }
  //     })
  //       .catch((ex) => {
  //           console.log(ex);
  //     });
  //   }else{
  //     this.toastr.info("Debe actualizar al menos un valor", '');
  //   }

  // }
}
