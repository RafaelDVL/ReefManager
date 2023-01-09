import { ErrorDialogComponent } from './../../Shared/components/error-dialog/error-dialog.component';

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Coral } from 'src/app/Model/Coral';
import { CoralService } from '../../Services/coral.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corals',
  templateUrl: './corals.component.html',
  styleUrls: ['./corals.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class CoralsComponent implements AfterViewInit {
  coralList$: Observable<Coral[]>;
  errormsg: string = '';

  constructor(
    private coralService: CoralService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.coralList$ = coralService.findAll().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar a tabela.');
        return of([]);
      })
    );
  }

  dataSource = new MatTableDataSource<Coral>();
  columnsToDisplay = [
    'id',
    'tipo',
    'nome',
    'dificuldade',
    'iluminacao',
    'circulacao',
    'agressividade',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Coral | null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  print(id: number): void {
    console.log(id);
  }

  onError(error: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: error,
    });
    console.log(error);
  }

  navigateToCreate() {
    this.router.navigate(['corals/create']);
  }

  navigateToEdit(id: number) {
    this.router.navigate(['corals/edit/' + id]);
  }

  navigateToDelete(id: number) {
    this.router.navigate(['corals/delete/' + id]);
  }
}
