import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  ferramenta: string;
  atualizado: string;
  objetivo: string;
  campo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {atualizado: 'Sim', ferramenta: 'Nmap', objetivo: 'Análise', campo: ''},
  {atualizado: 'Sim', ferramenta: 'SET', objetivo: 'Penetração', campo: ''},
  {atualizado: 'Não', ferramenta: 'DNSenum', objetivo: 'Informação', campo: ''},
  {atualizado: 'Sim', ferramenta: 'OWASP ZAP', objetivo: 'Vulnerabilidade', campo: ''},
  {atualizado: 'Sim', ferramenta: 'THC Hydra', objetivo: 'Senha', campo: ''},
  {atualizado: 'Sim', ferramenta: 'Wireshark', objetivo: 'Análise', campo: ''},
];

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {
  displayedColumns: string[] = ['atualizado', 'ferramenta', 'objetivo', 'campo'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }
}
