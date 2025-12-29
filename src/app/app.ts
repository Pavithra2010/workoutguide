import { Component } from '@angular/core';
import { WorkoutGuideComponent } from './workout-guide/workout-guide';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WorkoutGuideComponent],
  template: `
    <header class="header">
      <h1>Fitness Learning Hub</h1>
      <p>Workout Guide & Exercise Education</p>
    </header>

    <!-- ✅ ONLY EDUCATIONAL CONTENT -->
    <app-workout-guide></app-workout-guide>
  `,
  styles: [`
    .header {
      padding: 28px;
      background: linear-gradient(135deg, #020617, #0f172a);
      color: #fff;
    }

    .header h1 {
      margin: 0;
      font-size: 28px;
    }

    .header p {
      margin-top: 6px;
      font-size: 14px;
      color: #cbd5f5;
    }
  `]
})
export class AppComponent {}
