import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { map, startWith } from 'rxjs/operators';
import { PacageService } from '../pacage.service';

@Component({
  selector: 'app-modal-informe',
  templateUrl: './modal-informe.component.html',
  styleUrls: ['./modal-informe.component.css']
})
export class ModalInformeComponent {

  academico: any;
  planificacione: any;
  options: any[] = [];
  myControl = new FormControl();
  filteredOptions: any[] = [];
  public variables2: any[] = [];
  public filteredList5 = this.variables2.slice();
  text: any = '';
  name: any;
  si: boolean = false;
  resultado: any[] = [];
  sinresultado: boolean = false;
  persona:any;
  matricula:any[] = [];
  p:boolean=false;



  opciones: any;

  constructor(public _servi: PacageService,
    public _dialoref: MatDialogRef<ModalInformeComponent>,
    private toas: ToastrService) {
    this._servi.mostrarmatricula();
    this._servi.mostrarpersona();

    this._servi.responsepersonas$.subscribe(resp => {
      this.options = resp;
      this.filteredOptions = resp;
      this.variables2 = resp;
    })

    this._servi.form.get('Cod_persona').valueChanges.subscribe(response => {
      this.filterData(response);
    })


    this.opciones = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.Nombre)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );

  }

  displayFn(user: any): string {
    return user && user.Nombre ? user.Nombre : '';
  }

  private _filter(name: string): any {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
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

        let params = {
          persona:resp[0].Cod_persona
        }
        this._servi.obtenermatriculaid(params).subscribe(resp=>{
          this.matricula = resp;
          console.log(resp)
          this.p = true;
        });
      }




      console.log(this.resultado)
    })
    console.log(this.text)

  }

  onUploadacademico(input: any) {
    let originalFile = input.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(originalFile);
    reader.onload = () => {
      let json = JSON.stringify({ dataURL: reader.result });
      this._servi.academico = JSON.parse(json).dataURL;
    };
  }

  onUploadaplanificacion(input: any) {
    let originalFile = input.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(originalFile);
    reader.onload = () => {
      let json = JSON.stringify({ dataURL: reader.result });
      this._servi.planificacione = JSON.parse(json).dataURL;
    };
  }

  filterData(enteredData: any) {
    this.filteredOptions = this.options.filter(item => {
      return item.No_identidad.indexOf(enteredData) > -1
    })
  }

  guardar() {

    if (!this._servi.form.get('Cod_informe_academico')?.value) {
      let params = {
        tipo: "post",
        Cod_informe_academico: this._servi.form.value.Cod_informe_academico,
        Cod_matricula: this._servi.form.value.Cod_matricula,
        Cod_persona: this.persona,
        Doc_informe_academico: this._servi.academico,
        Doc_planificacion_terapia: this._servi.planificacione,
        Usuario_registro: localStorage.getItem("login")
      }
      console.log(params)
      this._servi.crear(params).subscribe(resp => {
        console.log(resp)
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Creado correctamente');
      });
    } else {
      let params = {
        tipo: "update",
        Cod_informe_academico: this._servi.form.value.Cod_informe_academico,
        Cod_matricula: this._servi.form.value.Cod_matricula,
        Cod_persona: this._servi.form.value.Cod_persona,
        Doc_informe_academico: this._servi.academico,
        Doc_planificacion_terapia: this._servi.planificacione,
        Usuario_registro: localStorage.getItem("login")
      }

      console.log(params)
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
