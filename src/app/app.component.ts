import {Component, ViewChild, ElementRef} from '@angular/core';
import * as go from 'gojs';
import icon from '../assets/images/nnode.png';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  node_data: any[];
  link_data: any[];
  @ViewChild('text')
  private textField: ElementRef;

  data: any;
  node: go.Node;

  constructor() {
    this.node_data = [
      {key: 1, text: 'Alpha 123 nuevo beta', color: 'lightblue', ip: '192.168.1.1', status: 'lightgray', icon: icon},
      {key: 2, text: 'Beta  123 nuevo beta', color: 'orange', ip: '192.168.1.4', status: 'green', icon: icon},
      {key: 3, text: 'Gamma  123 nuevo beta', color: 'lightgreen', ip: '192.168.1.5', status: 'green', icon: icon},
      {key: 4, text: 'Delta  123 nuevo beta', color: 'pink', ip: '192.168.1.6', status: 'green', icon: icon}
    ];
    this.link_data = [
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 3, to: 4},
      {from: 4, to: 1}
    ];
  }


  showDetails(node: go.Node | null) {
    this.node = node;
    if (node) {
      this.data = {
        text: node.data.text,
        color: node.data.color
      };
    } else {
      this.data = null;
    }
  }

  onModelChanged(c: go.ChangedEvent) {
    this.showDetails(this.node);
  }
}
