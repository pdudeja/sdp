import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'filter',
    templateUrl: 'filter.component.html'
})

export class FilterComponent implements OnInit {

    table: Array<any> = [
        {
            "name": "John",
            "age": 30,
            "cars": ["Ford", "BMW", "Fiat"]
        },
        {
            "name": "parmod",
            "age": 20,
            "cars": ["Ford", "BMW", "Fiat"]
        },
        {
            "name": "ankit",
            "age": 10,
            "cars": ["Ford", "BMW", "Fiat"]
        }
    ]
    constructor() { }

    ngOnInit() { }
}