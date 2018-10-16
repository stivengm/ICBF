import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
const swal = require('sweetalert2')

@Component({
  selector: 'app-pop-ups',
  templateUrl: './pop-ups.component.html',
  styleUrls: ['./pop-ups.component.css']
})
export class PopUpsComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
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
}
