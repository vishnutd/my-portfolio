import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursorService } from './services/cursor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Vishnu T D | Personal Portfolio';

  constructor(private cursorService: CursorService) {}

  ngOnInit() {
    // Cursor service initializes automatically
  }

  ngOnDestroy() {
    this.cursorService.destroy();
  }
}
