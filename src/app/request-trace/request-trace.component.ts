import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-request-trace',
  templateUrl: './request-trace.component.html',
  styleUrls: ['./request-trace.component.css']
})
export class RequestTraceComponent implements OnInit {

  valueListTable = [
    { id: 1, numberRequest: '19', dateRequest: '26/05/2017', area: 'RRHH', userArea: 'Andrés Arias', userProgram: '', state: 'En proceso', numberRequestCOP: 15, dateRequestCOP: '27/05/2017', UserAreaCOP: 'Andres Arias', user: '' },
    { id: 2, numberRequest: '20', dateRequest: '29/05/2017', area: 'Financiera', userArea: 'Juan Torres', userProgram: 'Mery Ballesteros', state: 'Anulado', numberRequestCOP: 15, dateRequestCOP: '27/05/2017', UserAreaCOP: 'Andres Arias', user: 'Mery Ballesteros' },
    { id: 3, numberRequest: '21', dateRequest: '2/06/2016', area: 'Tesorería', userArea: 'Ana Torres', userProgram: '', state: 'Devuelto por programación', numberRequestCOP: 32, dateRequestCOP: '05/06/2017', UserAreaCOP: 'Ana Torres', user: 'Mery Ballesteros' }
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
