import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  value1: number;
  value2: number;
  result: any;
  operation: string;

  constructor(private toastController: ToastController) {}

  verifyValues() {
    return this.value1 && this.value2;
  }

  plus() {
    if (this.verifyValues()) {
      this.operation = `${this.value1} + ${this.value2}`;
      this.result = this.value1 + this.value2;
    } else {
      this.failedVerification();
    }
  }

  minus() {
    if (this.verifyValues()) {
      this.operation = `${this.value1} - ${this.value2}`;
      this.result = this.value1 - this.value2;
    } else {
      this.failedVerification();
    }
  }

  times() {
    if (this.verifyValues()) {
      this.operation = `${this.value1} * ${this.value2}`;
      this.result = this.value1 * this.value2;
    } else {
      this.failedVerification();
    }
  }

  divided() {
    if (this.verifyValues()) {
      this.operation = `${this.value1} / ${this.value2}`;
      this.result = this.value1 / this.value2;
    } else {
      this.failedVerification();
    }
  }

  greater() {
    if (this.verifyValues()) {
      this.operation = `${this.value1} > ${this.value2}`;
      this.result = this.value1 > this.value2 ? 'Verdadeiro' : 'Falso';
    } else {
      this.failedVerification();
    }
  }

  lower() {
    if (this.verifyValues()) {
      this.operation = `${this.value1} < ${this.value2}`;
      this.result = this.value1 < this.value2 ? 'Verdadeiro' : 'Falso';
    } else {
      this.failedVerification();
    }
  }

  async failedVerification() {
    const toast = await this.toastController.create({
      message: 'Insira os valores no campo',
      duration: 1500,
      color: 'danger',
      position: 'bottom',
      cssClass: 'failedVerificationToast'
    });

    await toast.present();
  }
}
