import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemOneComponent } from './components/problem-one/problem-one.component';
import { ProblemTwoComponent } from './components/problem-two/problem-two.component';
import { ProblemThreeComponent } from './components/problem-three/problem-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemOneComponent,
    ProblemTwoComponent,
    ProblemThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
