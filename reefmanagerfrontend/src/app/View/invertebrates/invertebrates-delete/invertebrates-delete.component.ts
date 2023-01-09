import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Invertebrate } from 'src/app/Model/Invertebrate';
import { InvertebrateService } from 'src/app/Services/invertebrate.service';

@Component({
  selector: 'app-invertebrates-delete',
  templateUrl: './invertebrates-delete.component.html',
  styleUrls: ['./invertebrates-delete.component.scss']
})
export class InvertebratesDeleteComponent implements OnInit {

  idobj: any;

  obj: Invertebrate = {
    nome: "",
    dificuldade: "",
    alimentacao:"",
    comportamento: "",
    aquariomin: "",
    urlimage: "",
    description: ""
  }


  constructor(
    private service: InvertebrateService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
    ){

  }

  ngOnInit(): void {
    this.idobj = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  cancel(){
    this.router.navigate(['invertebrates'])
  }

  delete(){
    this.service.delete(this.idobj).subscribe({
      next: resposta => {
        this.openSnackBar("Peixe apagado com sucesso", "Sair")
        this.router.navigate(['invertebrates'] )
      }
    })
  }

  findById() {
    return this.service.findById(this.idobj).subscribe((resposta) => {
      this.obj = resposta;
      console.log(resposta);
    });
  }

}

