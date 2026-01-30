import { useState } from "react";
import { Users, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PatientCard from "@/components/patients/PatientCard";

const patients = [
  {
    id: "1",
    name: "María García",
    initials: "MG",
    phone: "+34 666 123 456",
    lastVisit: "15 Enero 2025",
    totalSessions: 12,
    regularPhysio: "Carlos Martínez",
    status: "active" as const,
  },
  {
    id: "2",
    name: "Juan Pérez",
    initials: "JP",
    phone: "+34 677 234 567",
    lastVisit: "20 Enero 2025",
    totalSessions: 8,
    regularPhysio: "Laura Sánchez",
    status: "active" as const,
  },
  {
    id: "3",
    name: "Pedro Ruiz",
    initials: "PR",
    phone: "+34 688 345 678",
    lastVisit: "10 Enero 2025",
    totalSessions: 5,
    regularPhysio: "Ana López",
    status: "followup" as const,
  },
  {
    id: "4",
    name: "Carmen López",
    initials: "CL",
    phone: "+34 699 456 789",
    lastVisit: "25 Enero 2025",
    totalSessions: 15,
    regularPhysio: "Carlos Martínez",
    status: "active" as const,
  },
  {
    id: "5",
    name: "Ana Martín",
    initials: "AM",
    phone: "+34 655 567 890",
    lastVisit: "28 Enero 2025",
    totalSessions: 6,
    regularPhysio: "Marta Díaz",
    status: "active" as const,
  },
];

const Pacientes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
        <Users className="w-8 h-8 text-primary" />
        Base de Datos de Pacientes
      </h1>

      {/* Search and Add */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre o teléfono..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Paciente
        </Button>
      </div>

      {/* Patient Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPatients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No se encontraron pacientes con "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default Pacientes;
