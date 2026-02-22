import { useState } from 'react';
import { Utensils, Plus, Trash2 } from 'lucide-react';
// import { supabase } from '../../shared/supabaseClient';

interface NutritionLog {
    food_name: string;
    calories: number;
    logged_at: string;
}

export default function NutritionModule() {
    const [logs, setLogs] = useState<NutritionLog[]>([]);
    const [food, setFood] = useState('');
    const [cals, setCals] = useState('');

    const addLog = async () => {
        if (!food) return;
        const newEntry = { food_name: food, calories: Number(cals) || 0, logged_at: new Date().toISOString() };
        setLogs([...logs, newEntry]);
        setFood('');
        setCals('');
        // await supabase.from('nutrition_logs').insert(newEntry);
    };

    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                    <Utensils className="text-primary" /> Nutrition Log
                </h2>
            </div>

            <div className="glass-card p-6 rounded-2xl flex gap-4 items-end">
                <div className="flex-1 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Food Name</label>
                    <input
                        className="w-full bg-white/5 border-none rounded-xl px-4 py-2"
                        placeholder="e.g. Chicken Breast"
                        value={food}
                        onChange={(e) => setFood(e.target.value)}
                    />
                </div>
                <div className="w-32 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Calories</label>
                    <input
                        className="w-full bg-white/5 border-none rounded-xl px-4 py-2"
                        type="number"
                        placeholder="0"
                        value={cals}
                        onChange={(e) => setCals(e.target.value)}
                    />
                </div>
                <button
                    onClick={addLog}
                    className="bg-primary text-white p-2.5 rounded-xl hover:scale-105 active:scale-95 transition-all"
                >
                    <Plus size={24} />
                </button>
            </div>

            <div className="space-y-4">
                {logs.map((log, i) => (
                    <div key={i} className="glass-card p-4 rounded-xl flex justify-between items-center">
                        <div>
                            <p className="font-bold dark:text-white">{log.food_name}</p>
                            <p className="text-xs text-slate-500">{new Date(log.logged_at).toLocaleTimeString()}</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <p className="font-bold text-primary">{log.calories} kcal</p>
                            <Trash2 size={18} className="text-red-500 cursor-pointer opacity-50 hover:opacity-100" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
