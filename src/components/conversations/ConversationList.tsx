import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Conversation {
  id: string;
  name: string;
  initials: string;
  phone: string;
  lastMessage: string;
  time: string;
  status: "scheduled" | "pending" | "attention";
}

const conversations: Conversation[] = [
  {
    id: "1",
    name: "María García",
    initials: "MG",
    phone: "+34 666 123 456",
    lastMessage: "Perfecto, gracias",
    time: "Hoy 10:35",
    status: "scheduled",
  },
  {
    id: "2",
    name: "Pedro Ruiz",
    initials: "PR",
    phone: "+34 677 234 567",
    lastMessage: "¿Tenéis hueco urgente?",
    time: "Hoy 09:15",
    status: "pending",
  },
  {
    id: "3",
    name: "Carmen López",
    initials: "CL",
    phone: "+34 688 345 678",
    lastMessage: "Me duele mucho la espalda",
    time: "Ayer 18:20",
    status: "attention",
  },
];

const statusConfig = {
  scheduled: {
    label: "Agendada ✓",
    className: "bg-green-100 text-green-700 hover:bg-green-100",
  },
  pending: {
    label: "Pendiente ⏰",
    className: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
  },
  attention: {
    label: "Requiere Atención ⚠️",
    className: "bg-red-100 text-red-700 hover:bg-red-100",
  },
};

interface ConversationListProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

const ConversationList = ({ selectedId, onSelect }: ConversationListProps) => {
  return (
    <div className="space-y-2">
      {conversations.map((conversation) => {
        const status = statusConfig[conversation.status];
        const isSelected = conversation.id === selectedId;

        return (
          <div
            key={conversation.id}
            onClick={() => onSelect(conversation.id)}
            className={cn(
              "p-4 rounded-xl cursor-pointer transition-all duration-200",
              isSelected
                ? "bg-accent border-l-4 border-primary"
                : "hover:bg-muted"
            )}
          >
            <div className="flex items-start gap-3">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                  {conversation.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground truncate">
                    {conversation.name}
                  </h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {conversation.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {conversation.phone}
                </p>
                <p className="text-sm text-muted-foreground truncate mb-2">
                  {conversation.lastMessage}
                </p>
                <Badge className={status.className}>{status.label}</Badge>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ConversationList;
