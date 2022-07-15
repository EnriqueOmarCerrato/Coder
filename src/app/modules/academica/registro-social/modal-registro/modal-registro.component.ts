import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PacageService } from '../pacage.service';
@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.css']
})
export class ModalRegistroComponent  {

  options:any[] = [];

  filteredOptions:any[] = [];

  
  optionscolaborador:any[] = [];

  filteredOptionscolaborador:any[] = [];
  text: any = '';
  name: any;
  si: boolean = false;
  resultado: any[] = [];
  sinresultado: boolean = false;
  persona:any;


  colaborador: any = '';
  sic: boolean = false;
  resultadoc: any[] = [];
  sinresultadoc: boolean = false;
  personac:any;

  constructor(public _servi: PacageService,
    public _dialoref: MatDialogRef<ModalRegistroComponent>,
    private toas:ToastrService) {
      this._servi.mostrarcolaborador();
      this._servi.mostrarservicio()
      this._servi.mostrarpersona()

      this._servi.responsepersonas$.subscribe(resp=>{
        this.options = resp;
        this.filteredOptions = resp;
       })

      this._servi.form.get('Cod_persona').valueChanges.subscribe(response => {
         this.filterData(response);
      })

      this._servi.responsecolaborador$.subscribe(resp=>{
        this.optionscolaborador = resp;
        this.filteredOptionscolaborador = resp;
       })

      this._servi.form.get('Cod_colaborador').valueChanges.subscribe(response => {
         this.filterDatacolaborador(response);
      })

     }

     filterData(enteredData:any){
      this.filteredOptions = this.options.filter(item => {
       return item.No_identidad.indexOf(enteredData) > -1
      })
    }

    filterDatacolaborador(enteredData:any){
      console.log(enteredData)
      this.filteredOptionscolaborador = this.optionscolaborador.filter(item => {
        console.log(item.Cargo_principal)
       return item.Cargo_principal.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
      })
    }

    buscar() {
      let params = {
        filtro: this.text
      }
      this._servi.obtenerfiltro(params).subscribe(resp => {
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

    buscarcolaborador() {
      let params = {
        filtro: this.colaborador
      }
      this._servi.obtenerfiltroc(params).subscribe(resp => {
        if (!resp.error) {
          this.sinresultadoc = true;
          this.sic = false;
        }
  
        if (resp.length > 0) {
          this.resultadoc = resp;
          this.sic = true;
          this.sinresultadoc = false;
          this.personac = resp[0].Cod_colaborador
        }
      })
    }

  guardar() {
   
    if (!this._servi.form.get('Cod_registro_servicio_social')?.value) {
      let params = {
        tipo: "post",
        Cod_colaborador: this.personac,
        Cod_servicio_social: this._servi.form.value.Cod_servicio_social,
        Cod_persona: this.persona,
        Fecha_realizacion: this._servi.form.value.Fecha_realizacion,
        Usuario_registro: localStorage.getItem("login")
      }
      this._servi.crear(params).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Creado correctamente');
      });
    } else {
      let params = {
        tipo: "update",
        Cod_registro_servicio_social: this._servi.form.value.Cod_registro_servicio_social,
        Cod_colaborador: this._servi.form.value.Cod_colaborador,
        Cod_servicio_social: this._servi.form.value.Cod_servicio_social,
        Cod_persona: this._servi.form.value.Cod_persona,
        Fecha_realizacion :this._servi.form.value.Fecha_realizacion,
        Usuario_registro :localStorage.getItem("login")
      }
      this._servi.actualizar(params).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Editado correctamente');
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
