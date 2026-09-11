import { TrendingUp, Calendar, Clock, Target, Award, ChevronRight, BarChart3 } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface SuiviProps {
  onTab: (tab: string) => void;
}

const radarData = [
  { pilier: "Passion", score: 85, fullMark: 100 },
  { pilier: "Talent", score: 72, fullMark: 100 },
  { pilier: "Besoins", score: 60, fullMark: 100 },
  { pilier: "Aspiration", score: 90, fullMark: 100 },
];

const progressionData = [
  { date: "S1", score: 20 },
  { date: "S2", score: 35 },
  { date: "S3", score: 48 },
  { date: "S4", score: 55 },
  { date: "S5", score: 65 },
  { date: "S6", score: 78 },
];

const pillarProgress = [
  { label: "Passion", percent: 85, color: "bg-kpe-passion", textColor: "text-kpe-passion" },
  { label: "Talent", percent: 72, color: "bg-kpe-talent", textColor: "text-kpe-talent" },
  { label: "Besoins", percent: 60, color: "bg-kpe-besoins", textColor: "text-kpe-besoins" },
  { label: "Aspiration", percent: 90, color: "bg-kpe-aspiration", textColor: "text-kpe-aspiration" },
];

const sessions = [
  { date: "12 Mars 2026", pilier: "Passion", questions: 20, duration: "18 min", score: 85, color: "bg-kpe-passion", done: true },
  { date: "10 Mars 2026", pilier: "Talent", questions: 15, duration: "14 min", score: 72, color: "bg-kpe-talent", done: false },
  { date: "7 Mars 2026", pilier: "Aspiration", questions: 20, duration: "22 min", score: 90, color: "bg-kpe-aspiration", done: true },
  { date: "3 Mars 2026", pilier: "Besoins", questions: 12, duration: "10 min", score: 60, color: "bg-kpe-besoins", done: false },
];

export function SuiviScreen({ onTab }: SuiviProps) {
  return (
    <div className="flex-1 flex flex-col bg-background overflow-y-auto kpe-scrollbar-hide">
      {/* Header */}
      <div className="kpe-gradient-hero px-5 pt-3 pb-6 rounded-b-[32px]">
        <div className="flex items-center gap-3 mb-3">
          <BarChart3 size={22} className="text-primary-foreground" />
          <h1 className="font-display text-xl font-bold text-primary-foreground">Mon Suivi</h1>
        </div>
        <p className="font-body text-xs text-primary-foreground/70">Progression IKIGAI & historique des séances</p>

        <div className="mt-4 bg-card/15 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="white" strokeWidth="3" strokeDasharray={`${78 * 0.975} 100`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-lg font-extrabold text-primary-foreground">78%</span>
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-bold text-primary-foreground">Score IKIGAI global</p>
            <p className="font-body text-[11px] text-primary-foreground/70 mt-0.5">4 séances complétées · Profil Analytique-Social</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp size={12} className="text-kpe-green-light" />
              <span className="font-body text-[11px] font-semibold text-kpe-green-light">+13% cette semaine</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-3 pb-6 space-y-5">
        {/* Radar Chart */}
        <div className="kpe-card-elevated p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target size={16} className="text-primary" />
            <h2 className="font-display text-sm font-bold text-foreground">Profil IKIGAI</h2>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="hsl(0 0% 90%)" />
                <PolarAngleAxis dataKey="pilier" tick={{ fontSize: 11, fontFamily: "'Plus Jakarta Sans', sans-serif", fill: "hsl(0 0% 40%)" }} />
                <Radar name="Score" dataKey="score" stroke="#00963F" fill="#00963F" fillOpacity={0.25} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pillar Progress Bars */}
        <div className="kpe-card p-4 space-y-3">
          <h2 className="font-display text-sm font-bold text-foreground">Progression par pilier</h2>
          {pillarProgress.map((p, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-body text-xs font-medium text-foreground">{p.label}</span>
                <span className={`font-display text-xs font-bold ${p.textColor}`}>{p.percent}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                <div className={`h-full rounded-full ${p.color} transition-all`} style={{ width: `${p.percent}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Area Chart */}
        <div className="kpe-card p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={16} className="text-primary" />
            <h2 className="font-display text-sm font-bold text-foreground">Évolution du score</h2>
          </div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={progressionData}>
                <defs>
                  <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00963F" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00963F" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 90%)" />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "hsl(0 0% 40%)" }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: "hsl(0 0% 40%)" }} axisLine={false} tickLine={false} width={28} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, fontSize: 12, fontFamily: "'Plus Jakarta Sans', sans-serif", border: "1px solid hsl(0 0% 90%)", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                  formatter={(value: number) => [`${value}%`, "Score"]}
                />
                <Area type="monotone" dataKey="score" stroke="#00963F" strokeWidth={2.5} fill="url(#scoreGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Session History */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Calendar size={16} className="text-primary" />
            <h2 className="font-display text-sm font-bold text-foreground">Historique des séances</h2>
          </div>
          <div className="space-y-3">
            {sessions.map((s, i) => (
              <div key={i} className="kpe-card p-4 flex items-center gap-3">
                <div className={`w-1.5 h-14 rounded-full ${s.color} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-display text-sm font-bold text-foreground">{s.pilier}</p>
                    {s.done ? (
                      <span className="px-2 py-0.5 rounded-full bg-kpe-green-pale font-body text-[10px] font-semibold text-primary">Complété</span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-kpe-yellow-pale font-body text-[10px] font-semibold text-kpe-yellow">En cours</span>
                    )}
                  </div>
                  <p className="font-body text-[11px] text-muted-foreground mt-0.5">{s.date}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <div className="flex items-center gap-1">
                      <Award size={11} className="text-muted-foreground" />
                      <span className="font-body text-[10px] text-muted-foreground">{s.score}%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={11} className="text-muted-foreground" />
                      <span className="font-body text-[10px] text-muted-foreground">{s.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Target size={11} className="text-muted-foreground" />
                      <span className="font-body text-[10px] text-muted-foreground">Q{s.questions}/20</span>
                    </div>
                  </div>
                </div>
                <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
