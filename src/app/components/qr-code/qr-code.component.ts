import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-code',
  imports: [RouterLink],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.scss',
})
export class QrCodeComponent implements OnInit {
  @ViewChild('qrCanvas', { static: true }) qrCanvas!: ElementRef<HTMLCanvasElement>;

  menuUrl = '';

  ngOnInit(): void {
    this.menuUrl = `${window.location.origin}/menu`;
    QRCode.toCanvas(this.qrCanvas.nativeElement, this.menuUrl, {
      width: 300,
      margin: 2,
      color: { dark: '#1a1a2e', light: '#ffffff' },
    });
  }
}
