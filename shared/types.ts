// shared/types.ts

export type Profile = {
  id: string;
  display_name: string | null;
  goal_calories: number;
  goal_protein: number;
  goal_carbs: number;
  goal_fats: number;
  updated_at: string;
};

export type NutritionLog = {
  id: string;
  user_id: string;
  logged_at: string;
  food_name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type ExerciseLog = {
  id: string;
  user_id: string;
  logged_at: string;
  exercise_type: string;
  routine_name: string | null;
  duration_mins: number;
  intensity: 'Low' | 'Medium' | 'High';
};

export type SupplementLog = {
  id: string;
  user_id: string;
  scheduled_for: string;
  taken_at: string | null;
  supplement_name: string;
  completed: boolean;
};

export type BiometricLog = {
  id: string;
  user_id: string;
  logged_at: string;
  weight_kg: number | null;
  hydration_liters: number;
  sleep_hours: number;
  mood: 'Excellent' | 'Good' | 'Neutral' | 'Bad' | null;
};
