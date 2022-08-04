
import { Component, OnInit} from '@angular/core';

interface Event {
  id?: number;
  name1: string;
  name2: string;
  flag1: string;
  flag2: string;
  a: number;
  x: number;
  b: number;
  c: number;
  d: number;
  e: number;
  gols: number;
  acima: number;
  abaixo: number;
}

const EVENTS: Event[] = [
  {
    name1: 'Real Madrid',
    name2: 'Barcelona',
    flag1: '8/86/Real_Madrid_CF_%28ancien_logo%29.svg',
    flag2:'f/f1/Barcelona-sc-logo.png',
    a: 2.23,
    x: 1.00,
    b: 1.20,
    c: 3.21,
    d: 1.35,
    e: 2.21,
    gols: 2.5,
    acima: 2.35,
    abaixo: 2.71
  },
  {
    name1: 'Real Madrid',
    name2: 'Barcelona',
    flag1: '8/86/Real_Madrid_CF_%28ancien_logo%29.svg',
    flag2:'f/f1/Barcelona-sc-logo.png',
    a: 2.23,
    x: 1.00,
    b: 1.20,
    c: 3.21,
    d: 1.35,
    e: 2.21,
    gols: 2.5,
    acima: 2.35,
    abaixo: 2.71
  },
  {
    name1: 'Real Madrid',
    name2: 'Barcelona',
    flag1: '8/86/Real_Madrid_CF_%28ancien_logo%29.svg',
    flag2:'f/f1/Barcelona-sc-logo.png',
    a: 2.23,
    x: 1.00,
    b: 1.20,
    c: 3.21,
    d: 1.35,
    e: 2.21,
    gols: 2.5,
    acima: 2.35,
    abaixo: 2.71
  },
  {
    name1: 'Real Madrid',
    name2: 'Barcelona',
    flag1: '8/86/Real_Madrid_CF_%28ancien_logo%29.svg',
    flag2:'f/f1/Barcelona-sc-logo.png',
    a: 2.23,
    x: 1.00,
    b: 1.20,
    c: 3.21,
    d: 1.35,
    e: 2.21,
    gols: 2.5,
    acima: 2.35,
    abaixo: 2.71
  },

  {
    name1: 'Real Madrid',
    name2: 'Barcelona',
    flag1: '8/86/Real_Madrid_CF_%28ancien_logo%29.svg',
    flag2:'f/f1/Barcelona-sc-logo.png',
    a: 2.23,
    x: 1.00,
    b: 1.20,
    c: 3.21,
    d: 1.35,
    e: 2.21,
    gols: 2.5,
    acima: 2.35,
    abaixo: 2.71
  },
  {
    name1: 'Real Madrid',
    name2: 'Barcelona',
    flag1: '8/86/Real_Madrid_CF_%28ancien_logo%29.svg',
    flag2:'f/f1/Barcelona-sc-logo.png',
    a: 2.23,
    x: 1.00,
    b: 1.20,
    c: 3.21,
    d: 1.35,
    e: 2.21,
    gols: 2.5,
    acima: 2.35,
    abaixo: 2.71
  },

  {
    name1: 'Real Madrid',
    name2: 'Barcelona',
    flag1: '8/86/Real_Madrid_CF_%28ancien_logo%29.svg',
    flag2:'f/f1/Barcelona-sc-logo.png',
    a: 2.23,
    x: 1.00,
    b: 1.20,
    c: 3.21,
    d: 1.35,
    e: 2.21,
    gols: 2.5,
    acima: 2.35,
    abaixo: 2.71
  },


];





@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  events: Event[] = [];

  constructor() {
    this.refreshCountries();
  }
  ngOnInit(): void {
  }

  refreshCountries() {
    this.events = EVENTS;

  }
}

