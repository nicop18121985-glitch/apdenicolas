// shared/healthLogic.ts
import { NutritionLog, BiometricLog } from './types';

export function calculateMacros(weightKg: number, activityLevel: 'active' | 'moderate' | 'sedentary') {
    const protein = weightKg * 2;
    const fat = weightKg * 0.8;
    const calories = activityLevel === 'active' ? weightKg * 35 : weightKg * 30;
    const carbs = (calories - (protein * 4) - (fat * 9)) / 4;

    return {
        protein: Math.round(protein),
        fat: Math.round(fat),
        calories: Math.round(calories),
        carbs: Math.round(carbs)
    };
}

export function analyzeHydration(logs: BiometricLog[]) {
    const latest = logs[logs.length - 1];
    if (!latest) return 'No data';
    return latest.hydration_liters >= 3 ? 'Optimal' : 'Increase intake';
}
