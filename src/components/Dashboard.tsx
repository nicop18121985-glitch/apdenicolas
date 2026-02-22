import type { LucideIcon } from 'lucide-react';
import {
    LayoutDashboard,
    BarChart2,
    FolderOpen,
    Calendar,
    Settings,
    TrendingUp,
    TrendingDown,
    Clock,
    Database,
    FileText,
    UploadCloud,
    Bell,
    MessageSquare
} from 'lucide-react';
import { AreaChart, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Week 1', value: 400 },
    { name: 'Week 2', value: 300 },
    { name: 'Week 3', value: 600 },
    { name: 'Week 4', value: 800 },
];

interface StatCardProps {
    icon: LucideIcon;
    label: string;
    value: string;
    trend: string;
    trendType: 'up' | 'down';
}

const StatCard = ({ icon: Icon, label, value, trend, trendType }: StatCardProps) => (
    <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
        <div className="flex justify-between items-start">
            <div className={`p-2.5 rounded-xl ${label === 'Total Files' ? 'bg-blue-500/10 text-blue-500' :
                label === 'Productivity' ? 'bg-primary/10 text-primary' :
                    label === 'Tasks Due' ? 'bg-amber-500/10 text-amber-500' :
                        'bg-purple-500/10 text-purple-500'
                }`}>
                <Icon size={20} />
            </div>
            <span className={`text-xs font-bold flex items-center px-2 py-1 rounded-full ${trendType === 'up' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                }`}>
                {trendType === 'up' ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
                {trend}
            </span>
        </div>
        <div className="mt-4">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{label}</p>
            <p className="text-2xl font-bold mt-1 dark:text-white tracking-tight">{value}</p>
        </div>
    </div>
);

export default function Dashboard() {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Side Navigation Bar */}
            <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-white/5 flex flex-col bg-white dark:bg-[#111218]">
                <div className="p-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                        <LayoutDashboard size={24} />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-base font-bold leading-none tracking-tight">Nexus One</h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Night Blue Edition</p>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1 mt-4">
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg nav-active" href="#">
                        <LayoutDashboard size={20} />
                        <span className="text-sm font-semibold">Dashboard</span>
                    </a>
                    {['Analytics', 'Cloud Files', 'Events', 'Preferences'].map((item, idx) => (
                        <a key={item} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all" href="#">
                            {idx === 0 && <BarChart2 size={20} />}
                            {idx === 1 && <FolderOpen size={20} />}
                            {idx === 2 && <Calendar size={20} />}
                            {idx === 3 && <Settings size={20} />}
                            <span className="text-sm font-semibold">{item}</span>
                        </a>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-200 dark:border-white/5">
                    <div className="bg-primary/10 rounded-xl p-4 mb-4">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Storage Plan</p>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium dark:text-slate-300">85% Used</span>
                            <span className="text-xs font-bold dark:text-white">12.4 GB / 15 GB</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                    <button className="w-full py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                        <TrendingUp size={18} /> Upgrade Now
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-slate-50 dark:bg-background-dark">
                <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5">
                    <div className="flex items-center flex-1 max-w-xl">
                        <div className="relative w-full">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Database size={18} /></span>
                            <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-white/5 border-none rounded-xl focus:ring-2 focus:ring-primary text-sm placeholder:text-slate-500 transition-all" placeholder="Search health logs, tasks, or insights..." type="text" />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                        <button className="flex items-center gap-2 bg-primary px-5 py-2.5 rounded-xl text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                            <UploadCloud size={20} /> Quick Log
                        </button>
                        <div className="h-8 w-[1px] bg-slate-200 dark:bg-white/10 mx-2"></div>
                        <Bell size={20} className="cursor-pointer hover:text-primary" />
                        <MessageSquare size={20} className="cursor-pointer hover:text-primary" />
                        <div className="ml-2 ring-2 ring-primary/20 rounded-full p-0.5">
                            <div className="w-8 h-8 rounded-full bg-primary/20" />
                        </div>
                    </div>
                </header>

                <div className="p-8 space-y-8">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight dark:text-white">Health Overview</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Monitoring your biometric and activity trends.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard icon={FileText} label="Total Files" value="1,284" trend="12%" trendType="up" />
                        <StatCard icon={TrendingUp} label="Productivity" value="88%" trend="5%" trendType="up" />
                        <StatCard icon={Clock} label="Tasks Due" value="14" trend="Pending" trendType="up" />
                        <StatCard icon={Database} label="Remaining" value="12.4 GB" trend="2%" trendType="down" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 glass-card p-8 rounded-[2rem] relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-8 relative z-10">
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white">Activity Trends</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Data interaction over the last 30 days</p>
                                </div>
                                <select className="bg-slate-100 dark:bg-white/5 border-none rounded-lg text-xs font-bold px-4 py-2 dark:text-slate-300 focus:ring-1 focus:ring-primary cursor-pointer">
                                    <option>Last 30 Days</option>
                                    <option>Last 90 Days</option>
                                </select>
                            </div>
                            <div className="h-64 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={data}>
                                        <defs>
                                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#1132d4" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#1132d4" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                        <Tooltip contentStyle={{ backgroundColor: '#101322', border: 'none', borderRadius: '12px', color: '#fff' }} />
                                        <Area type="monotone" dataKey="value" stroke="#1132d4" fillOpacity={1} fill="url(#colorValue)" strokeWidth={4} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-[2rem]">
                            <h3 className="text-xl font-bold dark:text-white mb-8">Recent Activity</h3>
                            <div className="space-y-6">
                                {[
                                    { icon: UploadCloud, title: 'Tax_2023_Final.pdf', time: '2m ago', color: 'text-blue-500' },
                                    { icon: TrendingUp, title: 'Morning Routine', time: '45m ago', color: 'text-green-500' },
                                    { icon: Clock, title: 'Storage Warning', time: '1d ago', color: 'text-amber-500' },
                                ].map((act, i) => (
                                    <div key={i} className="flex gap-4 group cursor-pointer items-center">
                                        <div className={`p-2 rounded-xl bg-white/5 ${act.color}`}>
                                            <act.icon size={20} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold dark:text-white truncate">{act.title}</p>
                                            <p className="text-xs text-slate-500">System update successfully</p>
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase">{act.time}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
