import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PacageService } from '../pacage.service';
@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.css']
})
export class DiagnosticoComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  fileURL:any;
  text: any = '';
  name: any;
  si: boolean = false;
  resultado: any[] = [];
  sinresultado: boolean = false;
  persona:any;

  constructor(public _servi : PacageService,
    public _dialoref:MatDialogRef<DiagnosticoComponent>) {
      
    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this._servi.mostrapersona();
    
    }

    onUpload(input:any) {  
      let originalFile = input.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(originalFile);
      reader.onload = () => {
        let json = JSON.stringify({ dataURL: reader.result });
        this.fileURL = JSON.parse(json).dataURL;
      };
    }

    buscar() {
      let params = {
        filtro: this.text
      }
      this._servi.obtenerfiltro(params).subscribe(resp => {
        console.log(resp.error)
        if (!resp.error) {
          this.sinresultado = true;
          this.si = false;
        }
  
        if (resp.length > 0) {
          this.resultado = resp;
          this.si = true;
          this.sinresultado = false;
          this.persona = resp[0].Cod_persona
        }
      })
    }

guardar(){

if(!this._servi.form.get('Cod_diagnostico')?.value){
  let params = {
    tipo:"post",
    Cod_persona: this.persona,
    Diagnostico_general: this._servi.form.value.Diagnostico_general,
    Doc_informe_diagnostico: this.fileURL,
    Usuario_registro: localStorage.getItem("login")
  } 

this._servi.crear(params).subscribe(resp=>{
  console.log(resp)
this._servi.mostrar();
this.cerrarmodal();
});
}else{
  let params = {
    tipo:"update",
    Cod_diagnostico: this._servi.form.value.Cod_diagnostico,
    Cod_persona: this._servi.form.value.Cod_persona,
    Diagnostico_general: this._servi.form.value.Diagnostico_general,
    Doc_informe_diagnostico: this._servi.form.value.Doc_informe_diagnostico || this.fileURL,
    Usuario_registro: localStorage.getItem("login")
  }
  console.log(params)
this._servi.actualizar(params).subscribe(resp=>{
this._servi.mostrar();
this.cerrarmodal();
});
}
}


//limpia modal
clear() {
this._servi.form.reset();
this._servi.inicializarForm();
}

//cerrarmodal
cerrarmodal() {
 this._dialoref.close();
}

}
