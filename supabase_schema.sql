-- Database Schema for Comprehensive Health Record System (Salu)

-- 1. Profiles Table
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    display_name TEXT,
    goal_calories INTEGER DEFAULT 2000,
    goal_protein INTEGER DEFAULT 150,
    goal_carbs INTEGER DEFAULT 200,
    goal_fats INTEGER DEFAULT 60,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Nutrition Logs
CREATE TABLE public.nutrition_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    logged_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    food_name TEXT NOT NULL,
    calories FLOAT DEFAULT 0,
    protein FLOAT DEFAULT 0,
    carbs FLOAT DEFAULT 0,
    fat FLOAT DEFAULT 0
);

-- 3. Exercise Logs
CREATE TABLE public.exercise_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    logged_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    exercise_type TEXT NOT NULL, -- e.g., 'Hypertrophy', 'Cardio'
    routine_name TEXT,
    duration_mins INTEGER DEFAULT 0,
    intensity TEXT -- 'Low', 'Medium', 'High'
);

-- 4. Supplement Logs
CREATE TABLE public.supplement_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    scheduled_for TIMESTAMP WITH TIME ZONE NOT NULL,
    taken_at TIMESTAMP WITH TIME ZONE,
    supplement_name TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);

-- 5. Biometric Logs
CREATE TABLE public.biometric_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    logged_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    weight_kg FLOAT,
    hydration_liters FLOAT DEFAULT 0,
    sleep_hours FLOAT DEFAULT 0,
    mood TEXT -- 'Excellent', 'Good', 'Neutral', 'Bad'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nutrition_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercise_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.supplement_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.biometric_logs ENABLE ROW LEVEL SECURITY;

-- Simple Policies (Users can only see/edit their own data)
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- (Policies for other tables follow the same pattern)
CREATE POLICY "Users can view their own nutrition" ON public.nutrition_logs FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own nutrition" ON public.nutrition_logs FOR INSERT WITH CHECK (auth.uid() = user_id);
-- ... (Repeat for others)
