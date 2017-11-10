import { Injectable } from '@angular/core';
import { DailyFileGroupByProtocol } from '../models/daily-file-group-by-protocol';
@Injectable()
export class SmartTableService {
  data: DailyFileGroupByProtocol[] = [{
    id: 1,
    date: '2017-08-28',
    size: 352903,
    protocol: 'Tor',
    category: 'Dark Web',
    percentChange: 33
  },{
    id: 2,
    date: '2017-08-28',
    size: 36026,
    protocol: 'Gnutella',
    category: 'P2P',
    percentChange: -17
  },{
    id: 3,
    date: '2017-08-28',
    size: 29134,
    protocol: 'DirectConnect',
    category: 'P2P',
    percentChange: 4
  },{
    id: 4,
    date: '2017-08-28',
    size: 28104,
    protocol: 'BitTorrent',
    category: 'P2P',
    percentChange: 223
  },{
    id: 5,
    date: '2017-08-28',
    size: 21196,
    protocol: 'PastebinScraper',
    category: 'Web',
    percentChange: 2
  },{
    id: 6,
    date: '2017-08-28',
    size: 16832,
    protocol: 'backpage.com',
    category: 'Web',
    percentChange: -36
  },{
    id: 7,
    date: '2017-08-28',
    size: 7073,
    protocol: 'WikiLeaks',
    category: 'Web',
    percentChange: -3
  },{
    id: 8,
    date: '2017-08-28',
    size: 1295,
    protocol: 'wawashare.com',
    category: 'Web',
    percentChange: -8
  },{
    id: 9,
    date: '2017-08-28',
    size: 1030,
    protocol: 'altenen.com',
    category: 'Carding Site',
    percentChange: 65
  },{
    id: 10,
    date: '2017-08-28',
    size: 474,
    protocol: 'slexy.org',
    category: 'Web',
    percentChange: 0
  },{
    id: 11,
    date: '2017-08-28',
    size: 369,
    protocol: 'eDonkey',
    category: 'P2P',
    percentChange: 101
  },{
    id: 12,
    date: '2017-08-28',
    size: 180,
    protocol: 'Omerta.ws',
    category: 'Carding Site',
    percentChange: 7
  },{
    id: 13,
    date: '2017-08-28',
    size: 104,
    protocol: 'Reddit',
    category: 'Social Media',
    percentChange: -9
  },{
    id: 14,
    date: '2017-08-28',
    size: 41,
    protocol: 'BlackHatWorld.com',
    category: 'Hacking Site',
    percentChange: 72
  },{
    id: 15,
    date: '2017-08-28',
    size: 27,
    protocol: 'kaggle.com',
    category: 'Carding Site',
    percentChange: 33
  }];

  fileTypes = [{
    title: 'image/jpg'
  },
  {
    title: 'application/xml'
  },
  {
    title: 'application/json'
  },
  {
    title: 'audio/mp3'
  },
  {
    title: 'application/exe'
  },
  {
    title: 'application/txt'
  },];

  labelData = [{
    date: 'Aug 28',
    numberOfLabels: 4732,
    numberOfFiles: 871,
    concentration: 0.16
  },
  {
    date: 'Aug 29',
    numberOfLabels: 0,
    numberOfFiles: 0,
    concentration: 0
  },
  {
    date: 'Aug 30',
    numberOfLabels: 0,
    numberOfFiles: 0,
    concentration: 0
  },
  {
    date: 'Aug 31',
    numberOfLabels: 2599,
    numberOfFiles: 1101,
    concentration: 0.23
  },
  {
    date: 'Sep 1',
    numberOfLabels: 0,
    numberOfFiles: 0,
    concentration: 0
  },
  {
    date: 'Sep 2',
    numberOfLabels: 0,
    numberOfFiles: 0,
    concentration: 0
  },
  {
    date: 'Sep 3',
    numberOfLabels: 0,
    numberOfFiles: 0,
    concentration: 0
  },];

  termData = [{
    term: 'Paradise',
    numberOfFiles: 5301
  },{
    term: 'Webmail',
    numberOfFiles: 3995
  },{
    term: 'espiv',
    numberOfFiles: 3973
  },{
    term: 'Silver',
    numberOfFiles: 3090
  },{
    term: 'Nro',
    numberOfFiles: 3075
  },{
    term: 'ja',
    numberOfFiles: 2926
  },{
    term: 'ms',
    numberOfFiles: 2605
  },{
    term: 'WSM',
    numberOfFiles: 2470
  },{
    term: 'MUSHBUD',
    numberOfFiles: 2314
  }]

  getData() {
    return this.data;
  }

  getFileTypes(){
    return this.fileTypes;
  }
  getLabelData(){
    return this.labelData;
  }
  getTermData(){
    return this.termData;
  }
}
