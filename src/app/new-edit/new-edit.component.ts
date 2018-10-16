import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.css']
})
export class NewEditComponent implements OnInit {
  // Valores de lista Mock
  periodo1 = 2018;
  FuenteNacion1 = 'Nación';
  valueRequest1 = 200000000;
  valueAproved1 = 200000000;
  periodo2 = 2018;
  FuenteNacion2 = 'Propia';
  valueRequest2 = 180000000;
  valueAproved2 = 200000000;
  periodo3 = 2019;
  FuenteNacion3 = 'Propia';
  valueRequest3 = 200000000;
  valueAproved3 = 200000000;

  documentAdds = 'No se encontraron resultados, verifique por favor';
  valueTalbeValueSales = [
  "2018", "Nación", "200000000"
  ];

  valueListSales = [
  {id: 1, periodo1: '2018', FuenteNacion1: 'Nación' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
