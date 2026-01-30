import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pacientes = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
        <Users className="w-8 h-8 text-primary" />
        Pacientes
      </h1>
      
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>En desarrollo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Esta sección está actualmente en desarrollo. Pronto podrás gestionar el historial y la información de todos los pacientes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pacientes;
