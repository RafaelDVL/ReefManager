import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Invertebrate } from 'src/app/Model/Invertebrate';
import { InvertebrateService } from 'src/app/Services/invertebrate.service';
import { ErrorDialogComponent } from 'src/app/Shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-invertebrates',
  templateUrl: './invertebrates.component.html',
  styleUrls: ['./invertebrates.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class InvertebratesComponent implements AfterViewInit {
  invertebrateList$: Observable<Invertebrate[]>;
  errormsg: string = '';

  constructor(
    private invertebrateService: InvertebrateService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.invertebrateList$ = invertebrateService.findAll().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar a tabela.');
        return of([]);
      })
    );
  }

  dataSource = new MatTableDataSource<Invertebrate>();
  columnsToDisplay = [
    'id',
    'nome',
    'dificuldade',
    'alimentacao',
    'comportamento',
    'aquariomin',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Invertebrate | null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onError(error: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: error,
    });
    console.log(error);
  }

  print(): void {
    console.log(this.invertebrateList$);
  }

  navigateTo(id: string) {
    this.router.navigate(['/invertebrates/edit/' + id]);
  }

  navigateToDelete(id: string) {
    this.router.navigate(['invertebrates/delete/' + id]);
  }
}
