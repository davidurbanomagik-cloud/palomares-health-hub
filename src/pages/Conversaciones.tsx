import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import ConversationList from "@/components/conversations/ConversationList";
import ChatArea from "@/components/conversations/ChatArea";

const Conversaciones = () => {
  const [selectedId, setSelectedId] = useState("1");

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
        <MessageSquare className="w-8 h-8 text-primary" />
        Conversaciones del Chatbot
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-6 h-[calc(100vh-220px)]">
        {/* Conversation List */}
        <Card className="shadow-card overflow-hidden">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Conversaciones</h3>
          </div>
          <div className="p-2 overflow-y-auto max-h-[calc(100vh-320px)]">
            <ConversationList selectedId={selectedId} onSelect={setSelectedId} />
          </div>
        </Card>

        {/* Chat Area */}
        <Card className="shadow-card overflow-hidden">
          <ChatArea />
        </Card>
      </div>
    </div>
  );
};

export default Conversaciones;
