import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
const swal = require('sweetalert2')

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.css']
})
export class NewEditComponent implements OnInit {
  // PoPUp
  titlePopUp = '¿Está seguro de realizar los cambios?';
  typePopUp = 'warning';
  buttonConfirm = 'SI';
  buttoncancel = 'NO';

  // OptionConfirm
  titleConfirm = 'Los cambios se han realizado correctamente.';
  descriptionConfirm = '';
  typeConfirm = 'success';
  
  // OptionCancel
  titleCancel = 'Los cambios no se han relizado correctamente.';
  descriptionCancel = '';
  typeCancel = 'error';

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
    { id: 1, periodo: '2018', FuenteNacion: 'Nación', valueRequest: '200000000', valueAproved: '200000000' },
    { id: 2, periodo: '2018', FuenteNacion: 'Propia', valueRequest: '180000000', valueAproved: '200000000' },
    { id: 3, periodo: '2019', FuenteNacion: 'Nación', valueRequest: '200000000', valueAproved: '200000000' }
  ]

  constructor() { }
  
  popUpChange() {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    })
    swalWithBootstrapButtons({
      title: this.titlePopUp,
      type: this.typePopUp,
      showCancelButton: true,
      confirmButtonText: this.buttonConfirm,
      cancelButtonText: this.buttoncancel,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons(
          this.titleConfirm,
          this.descriptionConfirm,
          this.typeConfirm
        )
      } else if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons(
          this.titleCancel,
          this.descriptionCancel,
          this.typeCancel
        )
      }
    })
  }

  ngOnInit() {
  }

}
