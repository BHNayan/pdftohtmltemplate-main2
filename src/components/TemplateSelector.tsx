import { Template } from "@/types/template";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Plus } from "lucide-react";

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplate: string;
  onSelect: (templateId: string) => void;
}

const TemplateSelector = ({ templates, selectedTemplate, onSelect }: TemplateSelectorProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {templates.map((template) => (
        <Card
          key={template.id}
          className={`cursor-pointer transition-all hover:shadow-md ${
            selectedTemplate === template.id
              ? "ring-2 ring-[#c8102e] border-[#c8102e]"
              : "hover:border-gray-400"
          }`}
          onClick={() => onSelect(template.id)}
        >
          <CardContent className="p-4 flex flex-col items-center text-center">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-2 ${
              selectedTemplate === template.id ? "bg-[#c8102e]" : "bg-gray-100"
            }`}>
              <FileText className={`w-6 h-6 ${
                selectedTemplate === template.id ? "text-white" : "text-gray-600"
              }`} />
            </div>
            <p className="text-sm font-medium text-gray-900 line-clamp-2">{template.name}</p>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{template.description}</p>
          </CardContent>
        </Card>
      ))}
      
      {/* Add new template placeholder */}
      <Card className="cursor-pointer border-dashed border-2 hover:border-gray-400 transition-all opacity-50">
        <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full min-h-[120px]">
          <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-2">
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-sm font-medium text-gray-400">Ajouter un modèle</p>
          <p className="text-xs text-gray-400 mt-1">Bientôt disponible</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TemplateSelector;
