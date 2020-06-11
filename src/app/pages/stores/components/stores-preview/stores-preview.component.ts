import { Component, Input, OnInit } from '@angular/core';
import { IStore } from '../../../../@core/data/stores';

@Component({
  selector: 'ngx-stores-preview',
  templateUrl: './stores-preview.component.html',
  styleUrls: ['./stores-preview.component.scss'],
})

export class StoresPreviewComponent implements OnInit {
  @Input() store: IStore;
  constructor(
  ) { }
  ngOnInit() {
  }
}
