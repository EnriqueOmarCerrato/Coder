import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss']
})
export class BackupComponent implements OnInit {
  file:File;
  fileToUpload:File;

  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
  }



  backup() {
    let result = this.http.get(`http://localhost/ApoautisApis/v1/backup`).toPromise();
    result.then((data) => {
      if(data=='Listo'){
        this.toastr.success(data['msg'], 'Backup realizado con éxito');
      }else{
        this.toastr.error(data['msg'], 'Error');
      }
  })
    .catch((ex) => {
        console.log(ex);
  });
}

fileleName(files: File){
  this.file= files;
  let nomA = files[0].name;
  if(nomA){
    let ext = nomA.split('.').pop();
    if(ext=="sql"){
      this.toastr.success('', 'archivo seleccionado');
    }else{
      this.toastr.error('', 'este archivo es incorrecto');
      this.file= null;
    }
  }
}

restor() {
  this.fileToUpload = <File>this.file[0];
  let nomArchivo= this.file[0].name;
  console.log(nomArchivo);
  if(nomArchivo){
      let result = this.http.get(`http://localhost/ApoautisApis/v1/restor/${nomArchivo}`).toPromise();
      result.then((data) => {
        if(data=='Listo'){
          this.toastr.success(data['msg'], 'Restor realizado con éxito');
        }else{
          this.toastr.error(data['msg'], 'Error');
        }
    })
      .catch((ex) => {
          console.log(ex);
    });
  }else{
    this.toastr.info('', 'Debe seleccionar un archivo correcto.');
  }
}



}
