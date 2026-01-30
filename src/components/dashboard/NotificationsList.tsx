import { Bell, AlertTriangle, MessageSquare, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Notification {
  icon: "warning" | "message" | "success";
  text: string;
  time: string;
}

const notifications: Notification[] = [
  { icon: "warning", text: "María García no confirmó cita de mañana", time: "hace 1h" },
  { icon: "message", text: "Nueva conversación: Pedro solicita cita urgente", time: "hace 2h" },
  { icon: "success", text: "Ana Martín completó el follow-up post-sesión", time: "hace 3h" },
];

const iconConfig = {
  warning: { Icon: AlertTriangle, className: "text-yellow-600 bg-yellow-100" },
  message: { Icon: MessageSquare, className: "text-blue-600 bg-blue-100" },
  success: { Icon: CheckCircle, className: "text-green-600 bg-green-100" },
};

const NotificationsList = () => {
  return (
    <Card className="shadow-card animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <Bell className="w-5 h-5 text-primary" />
          Notificaciones
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {notifications.map((notification, index) => {
          const { Icon, className } = iconConfig[notification.icon];
          return (
            <div key={index} className="notification-item">
              <div className={`p-2 rounded-lg ${className}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">{notification.text}</p>
                <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default NotificationsList;
