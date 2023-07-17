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
            descrizione: 'Descrizione cane generica'
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

    pic = '';
    dog1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Golden_retriever_stehfoto.jpg/1200px-Golden_retriever_stehfoto.jpg';
    dog2 = 'https://cdn.britannica.com/07/234207-050-0037B589/English-bulldog-dog.jpg';

    ngOnInit(): void {
        
        setInterval(() => {
            this.isDisabled = !this.isDisabled
        }, 2000);


        let counter = 0;

        setInterval(() => {
            if (counter%2 == 0) {
            this.pic = this.dog1
            } else {
                this.pic = this.dog2
            }
            counter++;
        },2000)

    }
    



}
