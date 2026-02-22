import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { Bell, Droplets, Pill, Play, LayoutGrid, Dumbbell, Utensils, BarChart3, Plus } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const ProgressRing = ({ size, strokeWidth, progress, color, glowColor }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <Svg width={size} height={size} style={styles.ring}>
            <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#232936"
                strokeWidth={strokeWidth}
                fill="transparent"
            />
            <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={color}
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
            />
        </Svg>
    );
};

export default function MobileDashboard() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.profileRow}>
                        <View style={styles.avatarContainer}>
                            <View style={styles.avatar} />
                        </View>
                        <View>
                            <Text style={styles.welcomeText}>Welcome back</Text>
                            <Text style={styles.nameText}>Alex Rivera</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.notificationBtn}>
                        <Bell color="#cbd5e1" size={20} />
                        <View style={styles.notificationDot} />
                    </TouchableOpacity>
                </View>

                {/* Daily Performance Card */}
                <View style={styles.performanceCard}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Daily Performance</Text>
                        <View style={styles.goalBadge}>
                            <Text style={styles.goalText}>84% Goal</Text>
                        </View>
                    </View>

                    <View style={styles.ringsContainer}>
                        <ProgressRing size={180} strokeWidth={10} progress={75} color="#135bec" />
                        <View style={styles.innerRing1}>
                            <ProgressRing size={145} strokeWidth={10} progress={65} color="#a855f7" />
                        </View>
                        <View style={styles.innerRing2}>
                            <ProgressRing size={110} strokeWidth={10} progress={80} color="#00d4ff" />
                        </View>
                        <View style={styles.ringLabelContainer}>
                            <Text style={styles.stepsVal}>8.4k</Text>
                            <Text style={styles.stepsLabel}>Steps Today</Text>
                        </View>
                    </View>

                    <View style={styles.statsRow}>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Workout</Text>
                            <Text style={[styles.statVal, { color: '#a855f7' }]}>42 min</Text>
                        </View>
                        <View style={[styles.statItem, styles.borderX]}>
                            <Text style={styles.statLabel}>Calories</Text>
                            <Text style={[styles.statVal, { color: '#00d4ff' }]}>1,240</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Recovery</Text>
                            <Text style={[styles.statVal, { color: '#135bec' }]}>92%</Text>
                        </View>
                    </View>
                </View>

                {/* Hydration & Supplements */}
                <View style={styles.gridRow}>
                    <View style={styles.gridCard}>
                        <View style={styles.gridCardHeader}>
                            <Droplets color="#135bec" size={20} />
                            <TouchableOpacity style={styles.addBtn}>
                                <Plus color="#135bec" size={16} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.gridVal}>2.4<Text style={styles.gridUnit}>L</Text></Text>
                        <Text style={styles.gridLabel}>Water Intake</Text>
                        <View style={styles.progressBarBg}>
                            <View style={[styles.progressBarFill, { width: '80%', backgroundColor: '#135bec' }]} />
                        </View>
                    </View>

                    <View style={styles.gridCard}>
                        <View style={styles.gridCardHeader}>
                            <Pill color="#a855f7" size={20} />
                            <View style={styles.statusBadge}>
                                <Text style={styles.statusText}>2 left</Text>
                            </View>
                        </View>
                        <Text style={styles.gridVal}>Stack A</Text>
                        <Text style={styles.gridLabel}>Supplements</Text>
                        <View style={styles.supplementDots}>
                            <View style={styles.dotActive} />
                            <View style={styles.dotActive} />
                            <View style={styles.dotInactive} />
                            <View style={styles.dotInactive} />
                        </View>
                    </View>
                </View>

                {/* Routine Card */}
                <Text style={styles.sectionTitle}>Routine Today</Text>
                <TouchableOpacity style={styles.routineCard}>
                    <View style={styles.routineIconBg}>
                        <Dumbbell color="#135bec" size={24} />
                    </View>
                    <View style={styles.routineInfo}>
                        <Text style={styles.routineTitle}>Hypertrophy: Chest</Text>
                        <Text style={styles.routineSub}>45 mins • 8 exercises</Text>
                    </View>
                    <View style={styles.playBtn}>
                        <Play color="white" size={20} fill="white" />
                    </View>
                </TouchableOpacity>
            </ScrollView>

            {/* Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <LayoutGrid color="#135bec" size={24} />
                    <Text style={[styles.navText, { color: '#135bec' }]}>Dash</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Dumbbell color="#64748b" size={24} />
                    <Text style={styles.navText}>Train</Text>
                </TouchableOpacity>
                <View style={styles.fabContainer}>
                    <TouchableOpacity style={styles.fab}>
                        <Plus color="white" size={28} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.navItem}>
                    <Utensils color="#64748b" size={24} />
                    <Text style={styles.navText}>Eat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <BarChart3 color="#64748b" size={24} />
                    <Text style={styles.navText}>Insights</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0a0b10' },
    scrollContent: { paddingHorizontal: 20, paddingBottom: 100 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 60, marginBottom: 20 },
    profileRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    avatarContainer: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#135bec', padding: 2 },
    avatar: { flex: 1, backgroundColor: '#1e293b', borderRadius: 20 },
    welcomeText: { color: '#94a3b8', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 },
    nameText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    notificationBtn: { width: 40, height: 40, backgroundColor: '#161b26', borderRadius: 12, borderWidth: 1, borderColor: '#232936', alignItems: 'center', justifyContent: 'center' },
    notificationDot: { position: 'absolute', top: 10, right: 10, width: 8, height: 8, backgroundColor: '#135bec', borderRadius: 4 },
    performanceCard: { backgroundColor: '#161b26', borderRadius: 24, padding: 20, borderWidth: 1, borderColor: '#232936', marginBottom: 20 },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    cardTitle: { color: '#94a3b8', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5 },
    goalBadge: { backgroundColor: 'rgba(19, 91, 236, 0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
    goalText: { color: '#135bec', fontSize: 10, fontWeight: 'bold' },
    ringsContainer: { alignItems: 'center', justifyContent: 'center', height: 200 },
    ring: { transform: [{ rotate: '-90deg' }] },
    innerRing1: { position: 'absolute' },
    innerRing2: { position: 'absolute' },
    ringLabelContainer: { position: 'absolute', alignItems: 'center' },
    stepsVal: { color: 'white', fontSize: 32, fontWeight: '900', fontStyle: 'italic' },
    stepsLabel: { color: '#94a3b8', fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase' },
    statsRow: { flexDirection: 'row', marginTop: 24 },
    statItem: { flex: 1, alignItems: 'center' },
    borderX: { borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#232936' },
    statLabel: { color: '#64748b', fontSize: 10, marginBottom: 4 },
    statVal: { fontSize: 14, fontWeight: 'bold' },
    gridRow: { flexDirection: 'row', gap: 16, marginBottom: 24 },
    gridCard: { flex: 1, backgroundColor: '#161b26', borderRadius: 20, padding: 16, borderWidth: 1, borderColor: '#232936' },
    gridCardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    addBtn: { width: 24, height: 24, borderRadius: 8, backgroundColor: 'rgba(19, 91, 236, 0.1)', alignItems: 'center', justifyContent: 'center' },
    gridVal: { color: 'white', fontSize: 20, fontWeight: 'bold' },
    gridUnit: { fontSize: 12, color: '#64748b', marginLeft: 2 },
    gridLabel: { color: '#94a3b8', fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase', marginTop: 4 },
    progressBarBg: { height: 6, backgroundColor: '#232936', borderRadius: 3, marginTop: 16 },
    progressBarFill: { height: '100%', borderRadius: 3 },
    statusBadge: { backgroundColor: 'rgba(168, 85, 247, 0.1)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
    statusText: { color: '#a855f7', fontSize: 10, fontWeight: 'bold' },
    supplementDots: { flexDirection: 'row', gap: 4, marginTop: 16 },
    dotActive: { height: 6, flex: 1, backgroundColor: '#a855f7', borderRadius: 3 },
    dotInactive: { height: 6, flex: 1, backgroundColor: '#232936', borderRadius: 3 },
    sectionTitle: { color: '#94a3b8', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 16 },
    routineCard: { backgroundColor: '#161b26', borderRadius: 20, padding: 4, flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1, borderColor: '#135bec' },
    routineIconBg: { width: 56, height: 56, borderRadius: 16, backgroundColor: 'rgba(19, 91, 236, 0.1)', alignItems: 'center', justifyContent: 'center' },
    routineInfo: { flex: 1 },
    routineTitle: { color: 'white', fontSize: 16, fontWeight: 'bold' },
    routineSub: { color: '#64748b', fontSize: 12 },
    playBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#135bec', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
    bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 90, backgroundColor: 'rgba(10, 11, 16, 0.9)', borderTopWidth: 1, borderColor: '#232936', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 20 },
    navItem: { alignItems: 'center', gap: 4 },
    navText: { fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase' },
    fabContainer: { position: 'relative', top: -30 },
    fab: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#135bec', alignItems: 'center', justifyContent: 'center', borderWidth: 4, borderColor: '#0a0b10' },
});
