import { Component } from '@angular/core';

@Component({
  selector: 'app-seconda-prova',
  templateUrl: './seconda-prova.component.html',
  styleUrls: ['./seconda-prova.component.css']
})
export class SecondaProvaComponent {

    onInput(event: Event) {
        console.log( (<HTMLInputElement>event.target).value)
    }

}
