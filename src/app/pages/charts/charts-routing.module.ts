import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsComponent } from './charts.component';
import { EchartsComponent } from './echarts/echarts.component';
import { D3Component } from './d3/d3.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ProtocolTrendsComponent } from './protocol-trends/protocol-trends.component';
import { FileTypesComponent } from './file-types/file-types.component';
import { CapturedLabelsComponent } from './captured-labels/captured-labels.component';

const routes: Routes = [{
  path: '',
  component: ChartsComponent,
  children: [{
    path: 'echarts',
    component: EchartsComponent,
  }, {
    path: 'd3',
    component: D3Component,
  }, {
    path: 'chartjs',
    component: ChartjsComponent,
  }, {
    path: 'protocol-trends',
    component: ProtocolTrendsComponent,
  }, {
    path: 'file-types',
    component: FileTypesComponent,
  }, {
    path: 'captured-labels',
    component: CapturedLabelsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule { }

export const routedComponents = [
  ChartsComponent,
  EchartsComponent,
  D3Component,
  ChartjsComponent,
  ProtocolTrendsComponent,
  FileTypesComponent,
  CapturedLabelsComponent
];
