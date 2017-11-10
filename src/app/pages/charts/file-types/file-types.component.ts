import { Component, Input } from '@angular/core';
import {SmartTableService} from '../../../@core/data/smart-table.service';

@Component({
  selector: 'file-types',
  styleUrls: ['../echarts/echarts.component.scss'],
  templateUrl: './file-types.component.html',
})
export class FileTypesComponent {
    public fileTypes: any[];
    constructor(public _smartTableService: SmartTableService){
        this.fileTypes = this._smartTableService.getFileTypes();
    }
}
