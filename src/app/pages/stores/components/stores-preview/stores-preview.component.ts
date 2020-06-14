import { Component, Input, OnInit } from '@angular/core';
import { IStore } from '../../../../@core/data/stores';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { StoresUpdateComponent } from '../stores-update/stores-update.component';

@Component({
  selector: 'ngx-stores-preview',
  templateUrl: './stores-preview.component.html',
  styleUrls: ['./stores-preview.component.scss'],
})

export class StoresPreviewComponent implements OnInit {
  @Input() store: IStore;
  constructor(
    private route: Router,
    private dialogService: NbDialogService,
  ) { }
  ngOnInit() {
  }
  update() {
    this.dialogService.open(StoresUpdateComponent);
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/stores/library']);
  }
}
