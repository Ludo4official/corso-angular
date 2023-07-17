import { Component, OnInit } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {

    cani = [
        {
            nome: 'Roger',
            razza: 'Golden',
            descrizione: 'Descrizione cane'
        },
        {
            nome: 'Mario',
            razza: 'Bulldog',
            descrizione: 'Descrizione cane 2'
        },
        {
            nome: 'Piero',
            razza: 'Labrador',
            descrizione: 'Descrizione cane 3'
        },
        {
            nome: 'Fido',
            razza: 'Maremmano',
            descrizione: 'Descrizione cane 4'
        },
        {
            nome: 'Cap',
            razza: 'Malinois',
            descrizione: 'Descrizione cane 5'
        }
    ]

    isDisabled = false;

    ngOnInit(): void {
        setInterval(() => {
        this.isDisabled = !this.isDisabled
        }, 2000)
    }    

}
