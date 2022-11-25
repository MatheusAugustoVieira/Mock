import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Onde: string;
  Teste: string;
  Data: string;
  plataforma: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Teste: 'Owasp Zap', Onde: 'Google', Data: '11/09/2022', plataforma: ''},
  {Teste: 'Nmap', Onde: 'Uber', Data: '10/09/2023', plataforma: ''},
  {Teste: 'SET', Onde: 'Facebook', Data: '09/08/2023', plataforma: ''},
  {Teste: 'DNSenum', Onde: 'Starbucks', Data: '05/10/2022', plataforma: ''},
  {Teste: 'THC Hydra', Onde: 'Instagram', Data: '01/09/2022', plataforma: ''},
  {Teste: 'Wireshark', Onde: 'Nintendo', Data: '03/03/2023', plataforma: ''},
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['Teste', 'Onde', 'Data', 'plataforma'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
