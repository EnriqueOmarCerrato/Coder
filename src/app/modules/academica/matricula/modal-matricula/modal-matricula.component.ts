import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PacageService } from '../pacage.service';

@Component({
  selector: 'app-modal-matricula',
  templateUrl: './modal-matricula.component.html',
  styleUrls: ['./modal-matricula.component.css']
})
export class ModalMatriculaComponent  {

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
    public _dialoref: MatDialogRef<ModalMatriculaComponent>,
    private toas:ToastrService) {

      this._servi.mostrarpersona();
      this._servi.mostrarasignacion();
      this._servi.mostrarcolaborador();
      this._servi.mostrarespecialidad();
      this._servi.mostrarfichainclusion();

      this._servi.responsepersona$.subscribe(resp=>{
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

      this._servi.terapeuta.get('Cod_colaborador').valueChanges.subscribe(response => {
         this.filterDatacolaborador(response);
      })

     }

     filterData(enteredData:any){
      this.filteredOptions = this.options.filter(item => {
       return item.No_identidad.indexOf(enteredData) > -1
      })

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

    filterDatacolaborador(enteredData:any){
      console.log(enteredData)
      this.filteredOptionscolaborador = this.optionscolaborador.filter(item => {
       return item.Cargo_principal.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
      })
    }

 



  guardar() {


    if (!this._servi.form.get('Cod_asignacion')?.value) {
      let params = {
        tipo: "post",
        Cod_persona: this.persona,
        Cod_ficha_inclusion: this._servi.form.value.Cod_ficha_inclusion,
        horas_asignadas_beneficiario: this._servi.form.value.horas_asignadas_beneficiario,
        Observacion_terapia: this._servi.form.value.Observacion_terapia,
        Usuario_registro: localStorage.getItem("login"),
        Cod_colaborador: this.personac,
        Cod_tipo_especialidad: this._servi.terapeuta.value.Cod_tipo_especialidad,
        horas_asignadas: this._servi.terapeuta.value.horas_asignadas
      }

      console.log(params)

      this._servi.crear(params).subscribe(resp => {
        this._servi.mostrar();
        console.log(resp)
        this.cerrarmodal();
        this.toas.success('Creado correctamente');
      });
    } else {
      let params = {
        tipo: "update",
        Cod_asignacion:this._servi.terapeuta.value.Cod_asignacion,
        Cod_persona: this._servi.form.value.Cod_persona,
        Cod_ficha_inclusion: this._servi.form.value.Cod_ficha_inclusion,
        horas_asignadas_beneficiario: this._servi.form.value.horas_asignadas_beneficiario,
        Observacion_terapia: this._servi.form.value.Observacion_terapia,
        Usuario_registro: localStorage.getItem("login"),
        Cod_colaborador: this._servi.terapeuta.value.Cod_colaborador,
        Cod_tipo_especialidad: this._servi.terapeuta.value.Cod_tipo_especialidad,
        horas_asignadas: this._servi.terapeuta.value.horas_asignadas
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
