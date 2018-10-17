import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-request',
  templateUrl: './register-request.component.html',
  styleUrls: ['./register-request.component.css']
})
export class RegisterRequestComponent implements OnInit {

  iconI = '';

  valueListSIIF = [
    { nroRequestVF: '00067', nroRequestVFSIIF: '11111', dateRequestVFSIIF: '28/04/2017', nroAutorizationVFSIIF: '2-2027-04 4177', valueTotalAproved: '100.000.000', dateAutorizationVFSIIF: '29/04/2017', area: 'Dirección Financiera', documentReques: 'Archivo.pdf', documentAutorization: 'archivo.pdf', state: '' }
  ]

  constructor() { }

  ngOnInit() {
    if (this.valueListSIIF) {
      // this.iconI = '<i class="fas fa-info"></i>';
      this.iconI = 'fas fa-info';
    }
  }

}
