import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-guide.html',
  styleUrls: ['./workout-guide.css']
})
export class WorkoutGuideComponent {

  userName: string = '';
  weight: number = 0;

  goal: 'weight_loss' | 'muscle_gain' | 'maintenance' | null = null;

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || 'Guest User';
    this.weight = Number(localStorage.getItem('weight')) || 0;
  }

  selectGoal(goal: 'weight_loss' | 'muscle_gain' | 'maintenance') {
    this.goal = goal;
  }

  resetGoal() {
    this.goal = null;
  }
}

