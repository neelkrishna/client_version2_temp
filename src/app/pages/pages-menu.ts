import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/charts/echarts',
    home: true,
  },
  {
    title: 'ANALYST TOOLS',
    group: true,
  },
  {
    title: 'Daily Breakdown',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Files By Protocol',
        link: '/pages/charts/echarts',
      },
      {
        title: 'All Files',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Protocol Trends',
        link: '/pages/charts/protocol-trends',
      },
      {
        title: 'Captured Labels',
        link: '/pages/charts/captured-labels', 
      },
      {
        title: 'File Types',
        link: '/pages/charts/file-types',

      },
      {
        title: 'Term Statistics',
        link: '/pages/charts/chartjs',
      },
    ],
  },
  {
    title: 'Daily Process Stats',
    icon: 'ion-wrench',
    children: [
      {
        title: 'Protocols',
      },
      {
        title: 'Labels',
      },
      {
        title: 'File Types',
      },
      {
        title: 'Term Statistics',
      },
    ],
  },
];
