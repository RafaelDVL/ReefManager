import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Invertebrate } from 'src/app/Model/Invertebrate';
import { InvertebrateService } from 'src/app/Services/invertebrate.service';

interface Food{
  value: string;
  viewValue: string;
}

interface Escala{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-invertebrates-create',
  templateUrl: './invertebrates-create.component.html',
  styleUrls: ['./invertebrates-create.component.scss']
})
export class InvertebratesCreateComponent {

  constructor(
  private service: InvertebrateService,
  private router: Router,
  private formBuilder: FormBuilder,
  private snackBar: MatSnackBar
  ){

  this.form = this.formBuilder.group({
    nome: [null],
    dificuldade: [null],
    alimentacao:[null],
    comportamento: [null],
    aquariomin: [null],
    urlimage:[null],
    description:[null]
  })
}

openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action);
}

form: FormGroup;

obj: Invertebrate = {
  nome: "",
  dificuldade: "",
  alimentacao:"",
  comportamento: "",
  aquariomin: "",
  urlimage: "",
  description: ""
}

foods: Food[] = [
  {value: 'Carnivoro', viewValue: 'Carnivoro'},
  {value: 'Herbivoro', viewValue: 'Herbivoro'},
  {value: 'Onivoro', viewValue: 'Onivoro'},
  {value: 'Detritivoro', viewValue: 'Detritivoro'},
  {value: 'Alimento Vivo', viewValue: 'Alimento Vivo'},
  {value: 'Algueiro', viewValue: 'Algueiro'}
];

escala: Escala[] = [
  {value: 'Baixa', viewValue: 'Baixa'},
  {value: 'Media', viewValue: 'Média'},
  {value: 'Alta', viewValue: 'Alta'},
];


nome = new FormControl('',[Validators.minLength(6) , Validators.required]);
dificuldade = new FormControl('',[Validators.required]);
alimentacao = new FormControl('',[Validators.required]);
comportamento = new FormControl('',[Validators.required]);
aquariomin = new FormControl('',[Validators.required]);
urlimage = new FormControl('',[Validators.minLength(10), Validators.required]);
description = new FormControl('',[Validators.minLength(20), Validators.required]);

cancel(){
  this.router.navigate(['/corals']);
}

create(){
  this.service.create(this.obj).subscribe(
    {
      next: (resposta) => {
        this.router.navigate(['invertebrates']);
        this.openSnackBar("Animal cadastrado com sucesso!", "OK");
      },
      error: (err) => {
        console.log(err);
        this.openSnackBar("Erro ao salvar!", "OK");
      }
    }
  );
}



errorValidNome() {
  if (this.nome.invalid) {
    return 'O nome deve ter entre 6 e 100 caracteres!';
  } else {
    return false;
  }
}

errorValidDificuldade() {
  if (this.dificuldade.invalid) {
    return 'O nome deve ter entre 6 e 100 caracteres!';
  } else {
    return false;
  }
}

errorValidAlimentacao() {
  if (this.alimentacao.invalid) {
    return 'O nome deve ter entre 6 e 100 caracteres!';
  } else {
    return false;
  }
}

errorValidComportamento() {
  if (this.comportamento.invalid) {
    return 'O nome deve ter entre 6 e 100 caracteres!';
  } else {
    return false;
  }
}

errorValidAquariomin() {
  if (this.aquariomin.invalid) {
    return 'O nome deve ter entre 6 e 100 caracteres!';
  } else {
    return false;
  }
}

errorValidUrl() {
  if (this.urlimage.invalid) {
    return 'O nome deve ter entre 6 e 100 caracteres!';
  } else {
    return false;
  }
}

errorValidDescription() {
  if (this.description.invalid) {
    return 'O nome deve ter entre 6 e 100 caracteres!';
  } else {
    return false;
  }
}

}
