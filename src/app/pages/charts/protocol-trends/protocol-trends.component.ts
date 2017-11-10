import { Component, Input } from '@angular/core';
import {SmartTableService} from '../../../@core/data/smart-table.service';

@Component({
  selector: 'protocol-trends',
  styleUrls: ['../echarts/echarts.component.scss'],
  templateUrl: './protocol-trends.component.html',
})
export class ProtocolTrendsComponent {
    public data: any[];
    constructor(public _smartTableService: SmartTableService){
        this.data = this._smartTableService.getData();
    }
}
