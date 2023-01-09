import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './View/main/header/header.component';
import { NavComponent } from './View/main/nav/nav.component';
import { FooterComponent } from './View/main/footer/footer.component';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './View/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { CoralsComponent } from './View/corals/corals.component';
import { FishsComponent } from './View/fishs/fishs.component';
import { InvertebratesComponent } from './View/invertebrates/invertebrates.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogComponent } from './Shared/components/error-dialog/error-dialog.component';
import { CoralCreateComponent } from './View/corals/coral-create/coral-create.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CoralEditComponent } from './View/corals/coral-edit/coral-edit.component';
import { CoralDeleteComponent } from './View/corals/coral-delete/coral-delete.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FishCreateComponent } from './View/fishs/fish-create/fish-create.component';
import { FishEditComponent } from './View/fishs/fish-edit/fish-edit.component';
import { FishDeleteComponent } from './View/fishs/fish-delete/fish-delete.component';
import { InvertebratesCreateComponent } from './View/invertebrates/invertebrates-create/invertebrates-create.component';
import { InvertebratesEditComponent } from './View/invertebrates/invertebrates-edit/invertebrates-edit.component';
import { InvertebratesDeleteComponent } from './View/invertebrates/invertebrates-delete/invertebrates-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    CoralsComponent,
    FishsComponent,
    InvertebratesComponent,
    ErrorDialogComponent,
    CoralCreateComponent,
    CoralEditComponent,
    CoralDeleteComponent,
    FishCreateComponent,
    FishEditComponent,
    FishDeleteComponent,
    InvertebratesCreateComponent,
    InvertebratesEditComponent,
    InvertebratesDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule{
}
