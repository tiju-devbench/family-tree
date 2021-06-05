import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AnimateComponent } from './animate.component';
import { AnimateService } from './animate.service';
import { AnimateDirective } from './animate.directive';


@NgModule({
  declarations: [AnimateComponent, AnimateDirective],
  imports: [
    CommonModule,
    ScrollingModule
  ],
  exports: [ AnimateComponent, AnimateDirective ]
})
export class AnimateModule { }
