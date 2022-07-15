import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from "rxjs";

export interface Table {
	loading:boolean,
  mostrarTabla:boolean,
	table:[]
}

@Injectable({
  providedIn: 'root'
})
export class DataTabsService {
  private tabActivo$: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() {}

  getTabActivoObs(): Observable<string> {
    return this.tabActivo$.asObservable();
  }

  setTabActivoObs(tabActivo: string) {
      this.tabActivo$.next(tabActivo);
  }
}
