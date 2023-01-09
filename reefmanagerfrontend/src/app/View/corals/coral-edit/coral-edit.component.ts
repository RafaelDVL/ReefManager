import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coral } from 'src/app/Model/Coral';
import { CoralService } from 'src/app/Services/coral.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Tipos {
  value: string;
  viewValue: string;
}

interface Escala {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-coral-edit',
  templateUrl: './coral-edit.component.html',
  styleUrls: ['./coral-edit.component.scss'],
})
export class CoralEditComponent implements OnInit {
  idobj: any = '';

  constructor(
    private service: CoralService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      tipo: [null],
      nome: [null],
      dificuldade: [null],
      iluminacao: [null],
      circulacao: [null],
      agressividade: [null],
      urlimage: [null],
      description: [null],
    });
  }
  ngOnInit(): void {
    this.idobj = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById() {
    return this.service.findById(this.idobj).subscribe((resposta) => {
      this.obj = resposta;
      console.log(resposta);
    });
  }

  update() {
    this.service.update(this.obj,this.obj.id).subscribe({
      next: response =>{
        this.openSnackBar("Alteração salva com sucesso!", "Ok");
        this.router.navigate(['corals'])
      },
      error: err => {
        alert(err);
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  form: FormGroup;

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

  tipos: Tipos[] = [
    { value: 'Soft', viewValue: 'Soft' },
    { value: 'LPS', viewValue: 'LPS' },
    { value: 'SPS', viewValue: 'SPS' },
  ];

  escala: Escala[] = [
    { value: 'Baixa', viewValue: 'Baixa' },
    { value: 'Media', viewValue: 'Média' },
    { value: 'Alta', viewValue: 'Alta' },
  ];

  tipo = new FormControl('', [Validators.required]);
  nome = new FormControl('', [Validators.minLength(6), Validators.required]);
  dificuldade = new FormControl('', [Validators.required]);
  iluminacao = new FormControl('', [Validators.required]);
  circulacao = new FormControl('', [Validators.required]);
  agressividade = new FormControl('', [Validators.required]);
  urlimage = new FormControl('', [
    Validators.minLength(10),
    Validators.required,
  ]);
  description = new FormControl('', [
    Validators.minLength(20),
    Validators.required,
  ]);

  cancel() {
    this.router.navigate(['/corals']);
  }

  create() {
    this.service.create(this.obj).subscribe({
      next: (resposta) => {
        this.router.navigate(['corals']);
        this.openSnackBar('Animal cadastrado com sucesso!', 'OK');
      },
      error: (err) => {
        console.log(err);
        this.openSnackBar('Erro ao salvar!', 'OK');
      },
    });
  }

  errorValidTipo() {
    if (this.tipo.invalid) {
      return 'O tipo é obrigatório!';
    } else {
      return false;
    }
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

  errorValidIluminacao() {
    if (this.iluminacao.invalid) {
      return 'O nome deve ter entre 6 e 100 caracteres!';
    } else {
      return false;
    }
  }

  errorValidCirculacao() {
    if (this.circulacao.invalid) {
      return 'O nome deve ter entre 6 e 100 caracteres!';
    } else {
      return false;
    }
  }

  errorValidAgressividade() {
    if (this.agressividade.invalid) {
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
}
