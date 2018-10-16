import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-trace',
  templateUrl: './request-trace.component.html',
  styleUrls: ['./request-trace.component.css']
})
export class RequestTraceComponent implements OnInit {

  valueListTable = [
    {id: 1, numberRequest: '19', dateRequest: '26/05/2017', area: 'RRHH', userArea: 'Andrés Arias', userProgram: '', state: 'En proceso', numberRequestCOP: 15, dateRequestCOP: '27/05/2017', UserAreaCOP: 'Andres Arias', user: '' },
    {id: 1, numberRequest: '20', dateRequest: '29/05/2017', area: 'Financiera', userArea: 'Juan Torres', userProgram: 'Mery Ballesteros', state: 'Anulado', numberRequestCOP: 15, dateRequestCOP: '27/05/2017', UserAreaCOP: 'Andres Arias', user: 'Mery Ballesteros' },
    {id: 1, numberRequest: '20', dateRequest: '29/05/2017', area: 'Financiera', userArea: 'Juan Torres', userProgram: 'Mery Ballesteros', state: 'Anulado', numberRequestCOP: 15, dateRequestCOP: '27/05/2017', UserAreaCOP: 'Andres Arias', user: 'Mery Ballesteros' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
