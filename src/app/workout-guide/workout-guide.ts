import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-guide.html',
  styleUrls: ['./workout-guide.css']
})
export class WorkoutGuideComponent {

  activeTab = 'fitness';

  setTab(tab: string) {
    this.activeTab = tab;
  }

  // 🏋️ FITNESS EDUCATION
  fitnessConcepts = [
    {
      title: 'What is Fitness?',
      summary: 'Fitness is the body’s ability to handle physical demands efficiently.',
      detail: 'Fitness reflects how well the body performs daily activities, adapts to physical stress, recovers after effort, and maintains functional movement with minimal fatigue and injury risk.'
    },
    {
      title: 'Components of Fitness',
      summary: 'Strength, endurance, flexibility, and balance.',
      detail: 'These components work together to improve posture, coordination, movement efficiency, and long-term physical capability.'
    },
    {
      title: 'Cardio vs Strength Training',
      summary: 'Endurance-focused vs muscle-focused training.',
      detail: 'Cardio training improves oxygen delivery and stamina, while strength training enhances muscle efficiency, joint support, and metabolic health.'
    },
    {
      title: 'Home Workout vs Gym Workout',
      summary: 'Consistency vs equipment access.',
      detail: 'Home workouts encourage habit formation and regularity, while gym workouts support progressive overload and targeted muscle development.'
    },
    {
      title: 'How Muscles Grow',
      summary: 'Stress followed by recovery leads to adaptation.',
      detail: 'Exercise challenges muscle fibers, and during rest, the body repairs and strengthens them to handle future physical demands more effectively.'
    },
    {
      title: 'Warm-up & Cool-down',
      summary: 'Preparation and recovery phases.',
      detail: 'Warm-ups improve joint mobility and muscle readiness, while cool-downs support relaxation, circulation, and recovery.'
    },
    {
      title: 'Injury Prevention Basics',
      summary: 'Smart training reduces injury risk.',
      detail: 'Gradual progression, correct posture, adequate rest, and listening to body signals help prevent overuse and strain injuries.'
    }
  ];

  // 🍎 NUTRITION EDUCATION
  nutritionConcepts = [
    {
      title: 'What is a Balanced Diet?',
      summary: 'Right nutrients in proper proportions.',
      detail: 'A balanced diet supports energy levels, tissue repair, immune function, and overall body regulation through dietary variety and moderation.'
    },
    {
      title: 'Macronutrients',
      summary: 'Proteins, carbohydrates, and fats.',
      detail: 'Each macronutrient serves a unique role—energy supply, muscle repair, hormone support, and cellular function.'
    },
    {
      title: 'Micronutrients',
      summary: 'Vitamins and minerals.',
      detail: 'Micronutrients regulate metabolic processes, support immunity, bone health, and muscle function.'
    },
    {
      title: 'Protein & Muscle Repair',
      summary: 'Supports recovery after activity.',
      detail: 'Protein provides essential building blocks for maintaining and repairing muscle tissue after physical stress.'
    },
    {
      title: 'Calories Explained',
      summary: 'Energy measurement, not the enemy.',
      detail: 'Calories represent the energy provided by food and are essential for supporting daily activities and exercise.'
    },
    {
      title: 'Healthy Habits vs Crash Diets',
      summary: 'Sustainability over shortcuts.',
      detail: 'Healthy eating habits support long-term well-being, while crash diets may disrupt energy balance and consistency.'
    },
    {
      title: 'Vegetarian & Non-Vegetarian Diets',
      summary: 'Both can be nutritionally adequate.',
      detail: 'With thoughtful planning, both dietary patterns can meet nutritional needs and support fitness goals.'
    }
  ];

  // 💧 HYDRATION EDUCATION
  hydrationConcepts = [
    {
      title: 'Why Hydration Matters',
      summary: 'Water supports essential body functions.',
      detail: 'Hydration plays a key role in circulation, temperature regulation, digestion, and nutrient transport.'
    },
    {
      title: 'Hydration & Energy Levels',
      summary: 'Even mild dehydration affects performance.',
      detail: 'Insufficient water intake may reduce focus, energy, and physical performance.'
    },
    {
      title: 'Hydration & Muscle Performance',
      summary: 'Supports muscle movement and endurance.',
      detail: 'Water helps muscles function efficiently during physical activity.'
    },
    {
      title: 'Signs of Dehydration',
      summary: 'Early signs should not be ignored.',
      detail: 'Fatigue, headache, dry mouth, and reduced concentration can indicate dehydration.'
    },
    {
      title: 'Individual Water Needs',
      summary: 'No one-size-fits-all rule.',
      detail: 'Water requirements vary based on activity level, climate, and individual body needs.'
    },
    {
      title: 'Hydration During Workouts',
      summary: 'Regular intake supports recovery.',
      detail: 'Drinking water before, during, and after workouts helps maintain performance and supports recovery.'
    }
  ];

  // 📚 RESEARCH & LEARNING
  researchConcepts = [
    {
      title: 'Fitness Myths vs Facts',
      summary: 'Separating trends from principles.',
      detail: 'This topic explains common fitness misconceptions using general exercise science concepts.'
    },
    {
      title: 'Beginner Workout Mistakes',
      summary: 'Awareness improves safety.',
      detail: 'Skipping warm-ups, poor posture, and overtraining are common mistakes that may affect progress.'
    },
    {
      title: 'Science Behind Fat Loss',
      summary: 'Long-term consistency matters.',
      detail: 'Fat loss is influenced by sustained energy balance and regular physical activity over time.'
    },
    {
      title: 'Strength Training & Long-Term Health',
      summary: 'More than just muscle building.',
      detail: 'Strength training supports posture, mobility, bone density, and functional independence.'
    },
    {
      title: 'Sedentary Lifestyle Effects',
      summary: 'Inactivity impacts movement quality.',
      detail: 'Prolonged inactivity may affect posture, energy levels, and overall physical function.'
    },
    {
      title: 'Recovery & Sleep',
      summary: 'Essential for adaptation.',
      detail: 'Adequate rest and sleep allow the body to repair tissues, restore energy, and adapt to training.'
    }
  ];
}
