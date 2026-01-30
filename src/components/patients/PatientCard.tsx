import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Patient {
  id: string;
  name: string;
  initials: string;
  phone: string;
  lastVisit: string;
  totalSessions: number;
  regularPhysio: string;
  status: "active" | "followup";
}

const statusConfig = {
  active: {
    label: "Activa",
    className: "bg-green-100 text-green-700 hover:bg-green-100",
  },
  followup: {
    label: "Seguimiento",
    className: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
  },
};

interface PatientCardProps {
  patient: Patient;
}

const PatientCard = ({ patient }: PatientCardProps) => {
  const status = statusConfig[patient.status];

  return (
    <Card className="shadow-card hover:shadow-lg transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center mb-4">
          <Avatar className="w-16 h-16 mb-3">
            <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
              {patient.initials}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {patient.name}
          </h3>
          <Badge className={status.className}>{status.label}</Badge>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm mb-4">
          <div>
            <span className="text-muted-foreground">Teléfono:</span>
            <p className="font-medium text-foreground">{patient.phone}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Última cita:</span>
            <p className="font-medium text-foreground">{patient.lastVisit}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Total sesiones:</span>
            <p className="font-medium text-foreground">{patient.totalSessions}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Fisio habitual:</span>
            <p className="font-medium text-foreground">{patient.regularPhysio}</p>
          </div>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90">
          Ver Ficha Completa
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default PatientCard;
