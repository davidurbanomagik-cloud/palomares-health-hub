import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Appointment {
  physio: string;
  patient: string;
  isHighlighted?: boolean;
}

interface DayAppointments {
  [time: string]: Appointment | undefined;
}

interface WeekData {
  [day: string]: DayAppointments;
}

const weekData: WeekData = {
  "LUN 3": {
    "09:00": { physio: "Carlos", patient: "Juan P." },
    "11:00": { physio: "Laura", patient: "Ana M." },
  },
  "MAR 4": {
    "10:00": { physio: "Pedro", patient: "Carmen L." },
    "16:00": { physio: "Ana", patient: "Luis T." },
  },
  "MIÉ 5": {
    "09:00": { physio: "Carlos", patient: "Pedro R." },
    "17:00": { physio: "Marta", patient: "María G." },
  },
  "JUE 6": {
    "12:00": { physio: "Laura", patient: "Juan P." },
    "16:00": { physio: "Carlos", patient: "Ana M." },
  },
  "VIE 7": {
    "09:00": { physio: "Carlos", patient: "Juan P." },
    "11:00": { physio: "Carlos", patient: "María G.", isHighlighted: true },
    "16:00": { physio: "Laura", patient: "Ana M." },
  },
};

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "16:00", "17:00"];
const days = ["LUN 3", "MAR 4", "MIÉ 5", "JUE 6", "VIE 7"];

const WeeklyCalendar = () => {
  return (
    <div className="space-y-4">
      {/* Week Selector */}
      <div className="flex items-center justify-center gap-4">
        <Button variant="outline" size="icon">
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <span className="font-semibold text-foreground">
          Semana del 3-7 Febrero 2025
        </span>
        <Button variant="outline" size="icon">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header Row */}
          <div className="grid grid-cols-6 gap-1 mb-2">
            <div className="p-3 font-semibold text-muted-foreground text-sm">
              Hora
            </div>
            {days.map((day) => (
              <div
                key={day}
                className="p-3 font-semibold text-center text-foreground text-sm bg-muted rounded-lg"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Time Rows */}
          {timeSlots.map((time) => (
            <div key={time} className="grid grid-cols-6 gap-1 mb-1">
              <div className="p-3 font-semibold text-muted-foreground text-sm flex items-center">
                {time}
              </div>
              {days.map((day) => {
                const appointment = weekData[day]?.[time];
                return (
                  <div
                    key={`${day}-${time}`}
                    className={cn(
                      "min-h-[60px] rounded-lg p-2 transition-all duration-200",
                      appointment
                        ? "bg-card hover:shadow-md cursor-pointer"
                        : "bg-muted/30 border border-border/50"
                    )}
                  >
                    {appointment && (
                      <div
                        className={cn(
                          "h-full rounded-lg p-2 border-l-4",
                          appointment.isHighlighted
                            ? "bg-accent border-primary"
                            : "bg-green-50 border-primary/60"
                        )}
                      >
                        <p className="text-sm">
                          <span className="font-semibold">{appointment.physio}</span>
                          <span className="text-muted-foreground"> • </span>
                          <span className="text-muted-foreground">
                            {appointment.patient}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyCalendar;
