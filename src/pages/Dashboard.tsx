import { Calendar, MessageSquare, CalendarDays } from "lucide-react";
import MetricCard from "@/components/dashboard/MetricCard";
import AppointmentsList from "@/components/dashboard/AppointmentsList";
import NotificationsList from "@/components/dashboard/NotificationsList";

const Dashboard = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Capitalize first letter
  const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Bienvenido, Quique</h1>
        <p className="text-muted-foreground">{capitalizedDate}</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          icon={<Calendar className="w-6 h-6" />}
          value="8"
          label="Citas Hoy"
        />
        <MetricCard
          icon={<MessageSquare className="w-6 h-6" />}
          value="3"
          label="Nuevos Mensajes"
          badge={3}
        />
        <MetricCard
          icon={<CalendarDays className="w-6 h-6" />}
          value="32"
          label="Citas Esta Semana"
          className="[&>div:first-child>div:first-child]:bg-primary [&>div:first-child>div:first-child]:text-primary-foreground"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AppointmentsList />
        </div>
        <div>
          <NotificationsList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
