import { Phone, CheckCircle } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  sender: "bot" | "patient";
  text: string;
  time: string;
}

const messages: Message[] = [
  {
    id: "1",
    sender: "bot",
    text: "¡Hola! Soy el asistente de Clínica E. Palomares. ¿En qué puedo ayudarte?",
    time: "10:28",
  },
  {
    id: "2",
    sender: "patient",
    text: "Hola, necesito agendar una cita de fisioterapia",
    time: "10:29",
  },
  {
    id: "3",
    sender: "bot",
    text: "Perfecto. ¿Qué día te vendría mejor esta semana? ¿Jueves 6 o viernes 7 de febrero?",
    time: "10:29",
  },
  {
    id: "4",
    sender: "patient",
    text: "El viernes me va mejor",
    time: "10:30",
  },
  {
    id: "5",
    sender: "bot",
    text: "Genial. Tengo disponibles estos horarios el viernes 7:\n\n• 11:00h con Carlos\n• 16:00h con Laura\n\n¿Cuál prefieres?",
    time: "10:30",
  },
  {
    id: "6",
    sender: "patient",
    text: "A las 11 con Carlos",
    time: "10:32",
  },
  {
    id: "7",
    sender: "bot",
    text: "✅ ¡Listo! Cita confirmada:\n\n📅 Viernes 7 de febrero\n🕐 11:00h\n👨‍⚕️ Carlos Martínez (fisioterapeuta)\n📍 Clínica E. Palomares\n\nTe enviaremos un recordatorio 24 horas antes para confirmar tu asistencia. ¿Alguna duda?",
    time: "10:32",
  },
  {
    id: "8",
    sender: "patient",
    text: "Perfecto, gracias",
    time: "10:35",
  },
  {
    id: "9",
    sender: "bot",
    text: "¡Perfecto María! Nos vemos el viernes. Que tengas un buen día 😊",
    time: "10:35",
  },
];

const ChatArea = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
              MG
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-foreground">María García</h3>
            <p className="text-sm text-muted-foreground">+34 666 123 456</p>
          </div>
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100 ml-2">
            Agendada
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
            <Phone className="w-4 h-4 mr-2" />
            Llamar
          </Button>
          <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
            <CheckCircle className="w-4 h-4 mr-2" />
            Marcar Resuelta
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "patient" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] ${
                  message.sender === "bot"
                    ? "bg-green-100 text-foreground"
                    : "bg-gray-100 text-foreground"
                } rounded-2xl px-4 py-3`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatArea;
