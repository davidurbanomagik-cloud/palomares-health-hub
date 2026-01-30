import { MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Conversaciones = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
        <MessageSquare className="w-8 h-8 text-primary" />
        Conversaciones
      </h1>
      
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>En desarrollo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Esta sección está actualmente en desarrollo. Pronto podrás gestionar todas las conversaciones con pacientes desde aquí.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Conversaciones;
