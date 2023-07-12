import { Component, Input, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Restaurante } from 'src/app/models/restaurante';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  @Input() restaurante!: Restaurante;

  constructor(public modalRef: MdbModalRef<ModalComponent>) {}
  ngOnInit(): void {
    console.log(this.restaurante);
  }
}
