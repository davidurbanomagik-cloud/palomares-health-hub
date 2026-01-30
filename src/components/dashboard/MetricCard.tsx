import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  badge?: number;
  className?: string;
}

const MetricCard = ({ icon, value, label, badge, className }: MetricCardProps) => {
  return (
    <div className={cn("metric-card animate-fade-in", className)}>
      <div className="flex items-start justify-between">
        <div className="p-3 rounded-xl bg-accent text-primary">
          {icon}
        </div>
        {badge !== undefined && (
          <span className="flex items-center justify-center min-w-[22px] h-[22px] px-2 text-xs font-bold text-white bg-destructive rounded-full">
            {badge}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground mt-1">{label}</p>
      </div>
    </div>
  );
};

export default MetricCard;
