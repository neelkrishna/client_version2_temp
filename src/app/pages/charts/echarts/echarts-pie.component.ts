import { AfterViewInit, Component, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  @Input() category: string;
  legendData: string[] = [];
  seriesData: any[] = [];
  constructor(private theme: NbThemeService) {}

  ngAfterViewInit() {
    this.buildPieCharts();
  }

  buildPieCharts() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      switch (this.category) {
        case 'P2P': {
          this.legendData = ['Gnutella', 'DirectConnect', 'BitTorrent', 'eDonkey'];
          this.seriesData = [
            { value: 36026, name: 'Gnutella' },
            { value: 28014, name: 'DirectConnect' },
            { value: 29134, name: 'BitTorrent' },
            { value: 369, name: 'eDonkey' },
          ];
          break;
        }
        case 'Dark Web': {
          this.legendData = ['Tor'];
          this.seriesData = [
            { value: 352903, name: 'Tor' },
          ];
          break;
        }
        case 'Web': {
          this.legendData = ['slexy.org', 'PastebinScraper', 'backpage.com', 'wawashare.com', 'WikiLeaks'];
          this.seriesData = [
            { value: 474, name: 'slexy.org' },
            { value: 21196, name: 'PastebinScraper' },
            { value: 16832, name: 'backpage.com' },
            { value: 1295, name: 'wawashare.com' },
            { value: 7073, name: 'WikiLeaks' },
          ];
          break;
        }
        case 'Carding Site': {
          this.legendData = ['Altenen', 'Omerta', 'BlackHatUnderground', 'Kaggle'];
          this.seriesData = [
            { value: 1030, name: 'Altenen' },
            { value: 180, name: 'Omerta' },
            { value: 6, name: 'BlackHatUnderground' },
            { value: 27, name: 'Kaggle' },
          ];
          break;
        }
        case 'IRC': {
          this.legendData = ['irc.undernet.org', 'irc.CrimeIrcd.net'];
          this.seriesData = [
            { value: 335, name: 'irc.undernet.org' },
            { value: 234, name: 'irc.CrimeIrcd.net' },
          ];
          break;
        }
        case 'Social Media': {
          this.legendData = ['Reddit'];
          this.seriesData = [
            { value: 104, name: 'Reddit' },
          ];
          break;
        }
        case 'Hacking Site': {
          this.legendData = ['BlackHatWorld.com'];
          this.seriesData = [
            { value: 41, name: 'BlackHatWorld.com' },
          ];
          break;
        }
        case 'Web Scraper Social Media': {
          this.legendData = ['Nothing to Display'];
          this.seriesData = [{ value: 0, name: 'Nothing to Display' } ];
          break;
        }
        case 'DNC Email Web Archive': {
          this.legendData = ['Nothing to Display'];
          this.seriesData = [{ value: 0, name: 'Nothing to Display' } ];
          break;
        }
        case 'Other': {
          this.legendData = ['Nothing to Display'];
          this.seriesData = [{ value: 0, name: 'Nothing to Display' } ];
          break;
        }
        default: {
          this.legendData = ['No', 'Ne'];
          this.seriesData = [
            { value: 335, name: 'No' },
            { value: 234, name: 'Ne' },
          ];
          break;
        }
      }
      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.legendData,
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Number of Files',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            data: this.seriesData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
