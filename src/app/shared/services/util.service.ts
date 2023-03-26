import { DOCUMENT } from '@angular/common';
import { Injectable, Renderer2,ElementRef, RendererFactory2, Inject } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private renderer2 : Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer2 = rendererFactory.createRenderer(null, null);

  }

  showConfetti(){
    // const canvas = this.renderer2.createElement('canvas');

    // this.renderer2.appendChild(this.document.body, canvas);
    const canvas =this.document.querySelector('.confetti') as HTMLCanvasElement;
    this.renderer2.setStyle(canvas,'display','block');
    // this.renderer2.appendChild()

    const myConfetti = confetti.create(canvas, {
      resize: true // will fit all screen sizes,

    });
    myConfetti({
      particleCount: 200,
      startVelocity: 30,
      spread: 500,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2
      }
    });

    setTimeout(() => {
      this.renderer2.setStyle(canvas,'display','none');
    }, 500);


  }
}
