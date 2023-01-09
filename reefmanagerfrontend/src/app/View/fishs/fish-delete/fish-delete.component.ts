import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { FishService } from '../../../Services/fish.service';
import { Fish } from '../../../Model/Fish';

@Component({
  selector: 'app-fish-delete',
  templateUrl: './fish-delete.component.html',
  styleUrls: ['./fish-delete.component.scss']
})
export class FishDeleteComponent implements OnInit {

  idobj: any;

  obj: Fish = {
    nome: "",
    dificuldade: "",
    alimentacao:"",
    comportamento: "",
    aquariomin: "",
    urlimage: "",
    description: ""
  }


  constructor(
    private service: FishService,
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
    this.router.navigate(['fishs'])
  }

  delete(){
    this.service.delete(this.obj.id).subscribe({
      next: resposta => {
        this.openSnackBar("Peixe apagado com sucesso", "Sair")
        this.router.navigate(['fishs'] )
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
