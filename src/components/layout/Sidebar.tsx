import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  MessageSquare,
  Calendar,
  Users,
  FileText,
  Clock,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ElementType;
  label: string;
  path: string;
  disabled?: boolean;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: MessageSquare, label: "Conversaciones", path: "/conversaciones" },
  { icon: Calendar, label: "Calendario", path: "/calendario" },
  { icon: Users, label: "Pacientes", path: "/pacientes" },
  { icon: FileText, label: "Facturación", path: "/facturacion", disabled: true },
  { icon: Clock, label: "Fichaje", path: "/fichaje", disabled: true },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[250px] bg-card border-r border-border shadow-soft flex flex-col z-50">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <h1 className="text-lg font-bold text-foreground">Clínica E. Palomares</h1>
        <p className="text-xs text-muted-foreground mt-1">Sistema de Gestión</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          if (item.disabled) {
            return (
              <div
                key={item.path}
                className="sidebar-item sidebar-item-disabled"
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </div>
            );
          }

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "sidebar-item sidebar-item-hover",
                isActive && "sidebar-item-active"
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
              Q
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-foreground">Quique</p>
            <p className="text-xs text-muted-foreground">Administrador</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
