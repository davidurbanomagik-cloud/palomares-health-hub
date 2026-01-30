import { Calendar, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WeeklyCalendar from "@/components/calendar/WeeklyCalendar";

const Calendario = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
          <Calendar className="w-8 h-8 text-primary" />
          Calendario Semanal
        </h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Nueva Cita
        </Button>
      </div>

      <Card className="shadow-card">
        <CardContent className="p-6">
          <WeeklyCalendar />
        </CardContent>
      </Card>
    </div>
  );
};

export default Calendario;
