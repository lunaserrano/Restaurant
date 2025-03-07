import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-button-demo',
        standalone: true,
        imports: [],
        template:`<h1>Mensaje de prueba</h1>`
})

export class Ordertest implements OnInit{

    ngOnInit(): void {
        
    }
    load(index: number) {
        // this.loading[index] = true;
        // setTimeout(() => (this.loading[index] = false), 1000);
    }
}