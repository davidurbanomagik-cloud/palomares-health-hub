import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Appointment {
  time: string;
  physio: string;
  patient: string;
  status: "completed" | "in-progress" | "pending" | "confirmed";
}

const appointments: Appointment[] = [
  { time: "09:00", physio: "Carlos Martínez", patient: "María García", status: "completed" },
  { time: "10:00", physio: "Laura Sánchez", patient: "Juan Pérez", status: "in-progress" },
  { time: "11:00", physio: "Ana López", patient: "Pedro Ruiz", status: "pending" },
  { time: "12:00", physio: "Pedro González", patient: "Carmen López", status: "pending" },
  { time: "16:00", physio: "Marta Díaz", patient: "Ana Martín", status: "pending" },
  { time: "17:00", physio: "Carlos Martínez", patient: "Luis Torres", status: "confirmed" },
];

const statusConfig = {
  completed: { label: "Completada", className: "status-completed" },
  "in-progress": { label: "En curso", className: "status-in-progress" },
  pending: { label: "Pendiente", className: "status-pending" },
  confirmed: { label: "Confirmada", className: "status-confirmed" },
};

const AppointmentsList = () => {
  return (
    <Card className="shadow-card animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <Calendar className="w-5 h-5 text-primary" />
          Citas de Hoy
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Hora</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Fisioterapeuta</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Paciente</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Estado</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr 
                  key={index} 
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-4 px-4 font-semibold text-foreground">{appointment.time}</td>
                  <td className="py-4 px-4 text-foreground">{appointment.physio}</td>
                  <td className="py-4 px-4 text-foreground">{appointment.patient}</td>
                  <td className="py-4 px-4">
                    <span className={cn("status-badge", statusConfig[appointment.status].className)}>
                      {statusConfig[appointment.status].label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentsList;
