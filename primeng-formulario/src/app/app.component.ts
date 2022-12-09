import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeng-formulario';

  nome = ''
  sobrenome = ''

  cadastrar(){
    alert('Pessoa Fisica ' + this.nome + ' cadastrada!');
  }

  estadoCivilSelecionado ?: EstadoCivil;
  estadoCivilArray: EstadoCivil[];

constructor(){
  this.estadoCivilArray = [
    {chave:'so', valor: 'Solteiro'},
    {chave:'ca', valor: 'Casado'},
    {chave:'di', valor: 'Divorciado'},
  ];

  habilidadeSelecionadas: string[] = [];
}

}
interface EstadoCivil {
  chave: string;
  valor: string;
}


