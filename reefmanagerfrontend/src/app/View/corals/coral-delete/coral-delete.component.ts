import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoralService } from '../../../Services/coral.service';
import { Coral } from 'src/app/Model/Coral';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-coral-delete',
  templateUrl: './coral-delete.component.html',
  styleUrls: ['./coral-delete.component.scss']
})
export class CoralDeleteComponent implements OnInit{

  idobj: any;

  obj: Coral = {
    id: '',
    tipo: '',
    nome: '',
    dificuldade: '',
    iluminacao: '',
    circulacao: '',
    agressividade: '',
    urlimage: '',
    description: '',
  };


  constructor(
    private service: CoralService,
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
    this.router.navigate(['corals'])
  }

  delete(){
    this.service.delete(this.obj.id).subscribe({
      next: resposta => {
        this.openSnackBar("Coral apagado com sucesso", "Sair")
        this.router.navigate(['corals'] )
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
