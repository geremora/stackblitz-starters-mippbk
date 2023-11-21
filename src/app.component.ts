import { Component } from '@angular/core';
import { DxDataGridModule, DxTextAreaModule } from 'devextreme-angular';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [DxDataGridModule, DxTextAreaModule] // Declare the required modules here
})
export class AppComponent {
  data: any[] = [
    { id: 1, name: 'Item 1', description: 'This is a longer text that might need more space...' },
    // ... more data items ...
  ];

  onEditorPreparing(e: any) {
    if (e.dataField === 'description' && e.parentType === 'dataRow') {
      e.editorName = 'dxTextArea';
      e.editorOptions.autoResizeEnabled = true;
      e.editorOptions.height = 100; // Adjust as needed
    }
  }
}