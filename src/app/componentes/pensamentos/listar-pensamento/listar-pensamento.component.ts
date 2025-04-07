import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: "Lorem ipsum dolor sit amet.",
      autoria: 'Dev1',
      modelo: 'modelo1'
    },
    // {
    //   conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula lobortis rutrum. Morbi nec justo et orci semper interdum. Cras tempor elit sed viverra aliquam. Sed id felis ornare, dictum lacus eu, hendrerit tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus scelerisque magna non finibus. Nunc ut tempor purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean a dolor id ipsum faucibus vestibulum. Cras id odio posuere, posuere mauris vulputate, auctor felis. Morbi porttitor lacinia turpis, eget vulputate eros tempus eu. Vivamus a rutrum risus. Pellentesque id ultrices leo. In ac nibh et diam faucibus faucibus non nec orci.",
    //   autoria: 'Dev2',
    //   modelo: 'modelo2'
    // },
    {
      conteudo: "Lorem ipsum dolor sit amet.",
      autoria: 'Dev4',
      modelo: 'modelo1'
    },
    {
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet eget purus in dignissim. Duis ut erat tempus, bibendum magna a, vestibulum augue. Sed dapibus purus velit, quis interdum ligula ultricies nec. Proin finibus dolor nibh, eu mollis nisl blandit in. In nulla eros, pretium non nibh sit amet, facilisis.",
      autoria: 'Dev3',
      modelo: 'modelo3'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
