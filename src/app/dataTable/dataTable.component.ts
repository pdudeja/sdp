import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import * as dataTable from './tableData';

import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';

@Component({
    selector: 'data-table',
    templateUrl: 'dataTable.component.html'
})

export class DataTableComponent implements OnInit {

    public rows: Array<any> = [];
    public columns: Array<any> = [
        { title: 'scheduleFlag', name: 'scheduleFlag', filtering: { filterString: '', placeholder: 'Filter by name' } },
        { title: 'workflowName', name: 'workflowName', filtering: { filterString: '', placeholder: 'Filter by name' } },
        { title: 'ownerId', name: 'ownerId', filtering: { filterString: '', placeholder: 'Filter by name' } },
        { title: 'applicationType', name: 'applicationType', filtering: { filterString: '', placeholder: 'Filter by name' } }


    ];
    public page: number = 1;
    public itemsPerPage: number = 10;
    public maxSize: number = 5;
    public numPages: number = 1;
    public length: number = 0;

    public config: any = {
        paging: true,
        sorting: { columns: this.columns },
        filtering: { filterString: '' },
        className: ['table-striped', 'table-bordered']
    };

    private data: Array<any> = [];

    public constructor() {

    }

    ngOnInit() {
        this.data = this.changeTableStructure(dataTable.data.results);
       
        this.length = this.data.length;

        this.onChangeTable(this.config);
    }


    changeTableStructure(data) {
        let dummy: Array<any> = [];
        data.forEach((element, index) => {
            let obj = {};
            if (element['schedule']['scheduleFlag']) {

                obj['scheduleFlag'] = element['schedule']['scheduleFlag']

            }
            if (element['schedule']['workflowName']) {
                obj['workflowName'] = element['schedule']['workflowName']
            }
            if (element['batchApplications'][0]['ownerId']) {

                obj['ownerId'] = element['batchApplications'][0]['ownerId']
            }
            if (element['batchApplications'][0]['applicationType']) {
                obj['applicationType'] = element['batchApplications'][0]['applicationType']
            }
            dummy.push(obj);



        });

        console.log(dummy);
        return dummy;
    }

    public changePage(page: any, data: Array<any> = this.data): Array<any> {
        let start = (page.page - 1) * page.itemsPerPage;
        let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    }

    public changeSort(data: any, config: any): any {
        if (!config.sorting) {
            return data;
        }

        let columns = this.config.sorting.columns || [];
        let columnName: string = void 0;
        let sort: string = void 0;

        for (let i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }

        if (!columnName) {
            return data;
        }

        // simple sorting
        return data.sort((previous: any, current: any) => {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            } else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    }



    public changeFilter(data: any, config: any): any {
        let filteredData: Array<any> = data;
        this.columns.forEach((column: any) => {
            if (column.filtering) {
                filteredData = filteredData.filter((item: any) => {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });

        if (!config.filtering) {
            return filteredData;
        }

        if (config.filtering.columnName) {
            return filteredData.filter((item: any) =>
                item[config.filtering.columnName].match(this.config.filtering.filterString));
        }

        let tempArray: Array<any> = [];
        filteredData.forEach((item: any) => {
            let flag = false;
            this.columns.forEach((column: any) => {
                if (item[column.name].toString().match(this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;

        return filteredData;
    }

    public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }

        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }

        let filteredData = this.changeFilter(this.data, this.config);
        let sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    }



    public onCellClick(data: any): any {
        console.log(data);
    }


}