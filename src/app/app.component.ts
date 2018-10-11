import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ICBF';
  documentAdds = 'No se encontraron resultados, verifique por favor';
  constructor () { }

  addFile() {
    console.log("Se encotraro archivos.");
  }

}