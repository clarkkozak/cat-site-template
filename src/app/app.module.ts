import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EngagmentComponent } from './engagment/engagment.component';
import { IntrigueComponent } from './intrigue/intrigue.component';
import { PositioningComponent } from './positioning/positioning.component';
import { ProofComponent } from './proof/proof.component';
import { ProcessComponent } from './process/process.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EngagmentComponent,
    IntrigueComponent,
    PositioningComponent,
    ProofComponent,
    ProcessComponent,
    CallToActionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
