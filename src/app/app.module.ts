import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { ChartDonaComponent } from './charts/chart-dona/chart-dona.component';
import { ChartDinamicoComponent } from './charts/chart-dinamico/chart-dinamico.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartLineComponent } from './charts/chart-line/chart-line.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartDonaComponent,
    ChartDinamicoComponent,
    ChartsComponent,
    ChartLineComponent,
    NavbarComponent  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
