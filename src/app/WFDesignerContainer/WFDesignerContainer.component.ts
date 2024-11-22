// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-wfdesigner',
//   standalone: true,
//   imports: [],
//   templateUrl: './wfdesigner.component.html',
//   styleUrl: './wfdesigner.component.css'
// })
// export class WFDesignerComponent {

// }

import { AfterViewInit, Component, OnChanges, OnDestroy, SimpleChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactFlowRenderer from '../React/WFDesigner/WFDesigner';

@Component({
  selector: 'WFDesignerContainer',
  standalone: true,
  //imports: [RouterOutlet],
  //template: '<div [id]="rootId"></div>',
  templateUrl: './WfdesignerContainer.component.html',
  styleUrl: '../app.component.css'
})
export class WFDesignerComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  title = 'myangularapp';
  public rootId = 'rootId';
  private eventListener: any;
  private eventListener2: any;
  private eventListener3: any;
  private eventListenerforsave : any;
  private eventforedge : any;
  private eventfornode : any;

  ngOnInit(): void {
    // Define the event listener
    this.eventListener = (event: CustomEvent) => {
      console.log('Received event from React:', event.detail.value);
    };

    this.eventListener2 = (event: CustomEvent) => {
      console.log('OnButtonClicked data received(Angular) : ', event.detail.data);

    };

    this.eventListener3 = (event: CustomEvent) => {
      console.log('OnEventClicked data received from event is (Angular) ', event.detail.data)
    };

    this.eventListenerforsave = (eventforsave : CustomEvent) => { 
      const { graphData, graphName } = eventforsave.detail;
      console.log('Graph saved (Angular):', graphName, graphData);
    }

    this.eventforedge = (eventforedge : CustomEvent ) => {
      console.log('edge data (Angular)', eventforedge.detail);
    } 

    this.eventfornode = (eventfornode : CustomEvent ) => {
      console.log('node data (Angular)', eventfornode.detail);
    } 

    // Add event listener to the window
    window.addEventListener('nodeDataChanged', this.eventListener);
    window.addEventListener('onButtonClicked', this.eventListener2);
    window.addEventListener('onEventClicked', this.eventListener3);
    window.addEventListener('onSaveClicked', this.eventListenerforsave);
    window.addEventListener('onEdgeClicked', this.eventforedge);
    window.addEventListener('onNodeClicked', this.eventfornode);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy(): void {
    window.removeEventListener('nodeDataChanged', this.eventListener);
    window.removeEventListener('onButtonClicked', this.eventListener2);
    window.removeEventListener('onEventClicked', this.eventListener3);
    window.removeEventListener('onSaveClicked', this.eventListenerforsave);
    window.removeEventListener('onEdgeClicked', this.eventforedge);
    window.removeEventListener('onNodeClicked', this.eventfornode);
  }

  private render() {
    //ReactDOM.render(React.createElement(ReactComponent ), document.getElementById(this.rootId));
    const root = ReactDOM.createRoot(document.getElementById(this.rootId) as HTMLElement);
    root.render(React.createElement(ReactFlowRenderer));
  }
}


