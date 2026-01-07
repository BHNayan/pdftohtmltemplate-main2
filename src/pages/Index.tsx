import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileDown, Eye, Edit3, LayoutTemplate } from "lucide-react";
import { toast } from "sonner";
import AvisEcheanceTemplate from "@/components/templates/AvisEcheanceTemplate";
import PichetAvisEcheanceTemplate from "@/components/templates/PichetAvisEcheanceTemplate";
import FonciaAvisEcheanceTemplate from "@/components/templates/FonciaAvisEcheanceTemplate";
import PichetParisQuittanceTemplate from "@/components/templates/PichetParisQuittanceTemplate";
import SeqensAvisEcheanceTemplate from "@/components/templates/SeqensAvisEcheanceTemplate";
import CimmoQuittanceTemplate from "@/components/templates/CimmoQuittanceTemplate";
import NexityAvisEcheanceTemplate from "@/components/templates/NexityAvisEcheanceTemplate";
import OrpiAvisEcheanceTemplate from "@/components/templates/OrpiAvisEcheanceTemplate";
import TemplateEditor from "@/components/TemplateEditor";
import PichetTemplateEditor from "@/components/PichetTemplateEditor";
import FonciaTemplateEditor from "@/components/FonciaTemplateEditor";
import PichetParisTemplateEditor from "@/components/PichetParisTemplateEditor";
import SeqensTemplateEditor from "@/components/SeqensTemplateEditor";
import CimmoTemplateEditor from "@/components/CimmoTemplateEditor";
import NexityTemplateEditor from "@/components/NexityTemplateEditor";
import OrpiTemplateEditor from "@/components/OrpiTemplateEditor";
import TemplateSelector from "@/components/TemplateSelector";
import { 
  AvisEcheanceData, 
  PichetAvisEcheanceData,
  FonciaAvisEcheanceData,
  PichetParisQuittanceData,
  SeqensAvisEcheanceData,
  CimmoQuittanceData,
  NexityAvisEcheanceData,
  OrpiAvisEcheanceData,
  defaultAvisEcheanceData, 
  defaultPichetAvisEcheanceData,
  defaultFonciaAvisEcheanceData,
  defaultPichetParisQuittanceData,
  defaultSeqensAvisEcheanceData,
  defaultCimmoQuittanceData,
  defaultNexityAvisEcheanceData,
  defaultOrpiAvisEcheanceData,
  Template 
} from "@/types/template";

type TemplateDataType = AvisEcheanceData | PichetAvisEcheanceData | FonciaAvisEcheanceData | PichetParisQuittanceData | SeqensAvisEcheanceData | CimmoQuittanceData | NexityAvisEcheanceData | OrpiAvisEcheanceData;

const templates: Template[] = [
  {
    id: "avis-echeance",
    name: "CDC Habitat Due Notice",
    description: "Rent invoice CDC Habitat",
    component: "AvisEcheanceTemplate",
    defaultData: defaultAvisEcheanceData,
  },
  {
    id: "pichet-avis-echeance",
    name: "Pichet Due Notice",
    description: "Rent invoice Pichet Immobilier",
    component: "PichetAvisEcheanceTemplate",
    defaultData: defaultPichetAvisEcheanceData,
  },
  {
    id: "foncia-avis-echeance",
    name: "Foncia Due Notice",
    description: "Rent invoice Foncia",
    component: "FonciaAvisEcheanceTemplate",
    defaultData: defaultFonciaAvisEcheanceData,
  },
  {
    id: "pichet-paris-quittance",
    name: "Pichet Paris Receipt",
    description: "Rent receipt Pichet Paris",
    component: "PichetParisQuittanceTemplate",
    defaultData: defaultPichetParisQuittanceData,
  },
  {
    id: "seqens-avis-echeance",
    name: "Seqens Due Notice",
    description: "Rent invoice Seqens HLM",
    component: "SeqensAvisEcheanceTemplate",
    defaultData: defaultSeqensAvisEcheanceData,
  },
  {
    id: "cimmo-quittance",
    name: "C'immo Receipt",
    description: "Rent receipt C'immo",
    component: "CimmoQuittanceTemplate",
    defaultData: defaultCimmoQuittanceData,
  },
  {
    id: "nexity-avis-echeance",
    name: "Nexity Due Notice",
    description: "Rent invoice Nexity",
    component: "NexityAvisEcheanceTemplate",
    defaultData: defaultNexityAvisEcheanceData,
  },
  {
    id: "orpi-avis-echeance",
    name: "Orpi Due Notice",
    description: "Rent invoice Orpi",
    component: "OrpiAvisEcheanceTemplate",
    defaultData: defaultOrpiAvisEcheanceData,
  },
];

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("avis-echeance");
  const [templateData, setTemplateData] = useState<TemplateDataType>(defaultAvisEcheanceData);
  const [activeTab, setActiveTab] = useState("edit");
  const [isGenerating, setIsGenerating] = useState(false);
  const templateRef = useRef<HTMLDivElement>(null);

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    const template = templates.find((t) => t.id === templateId);
    if (template) {
      setTemplateData(template.defaultData as TemplateDataType);
    }
  };

  const generatePDF = async () => {
    if (!templateRef.current) return;

    setIsGenerating(true);
    toast.info("Generating PDF...");

    try {
      const canvas = await html2canvas(templateRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, Math.min(imgHeight, pageHeight));

      let fileName = "";
      if (selectedTemplate === "pichet-avis-echeance") {
        fileName = `pichet-avis-echeance-${(templateData as PichetAvisEcheanceData).documentDate?.replace(/\//g, "-") || "document"}.pdf`;
      } else if (selectedTemplate === "foncia-avis-echeance") {
        fileName = `foncia-avis-echeance-${(templateData as FonciaAvisEcheanceData).documentDate?.replace(/\//g, "-") || "document"}.pdf`;
      } else if (selectedTemplate === "pichet-paris-quittance") {
        fileName = `pichet-paris-quittance-${(templateData as PichetParisQuittanceData).documentDate?.replace(/\//g, "-") || "document"}.pdf`;
      } else if (selectedTemplate === "seqens-avis-echeance") {
        fileName = `seqens-avis-echeance-${(templateData as SeqensAvisEcheanceData).factureNumber || "document"}.pdf`;
      } else if (selectedTemplate === "cimmo-quittance") {
        fileName = `cimmo-quittance-${(templateData as CimmoQuittanceData).documentDate?.replace(/\//g, "-") || "document"}.pdf`;
      } else if (selectedTemplate === "nexity-avis-echeance") {
        fileName = `nexity-avis-echeance-${(templateData as NexityAvisEcheanceData).documentDate?.replace(/\//g, "-") || "document"}.pdf`;
      } else if (selectedTemplate === "orpi-avis-echeance") {
        fileName = `orpi-avis-echeance-${(templateData as OrpiAvisEcheanceData).documentDate?.replace(/\//g, "-") || "document"}.pdf`;
      } else {
        fileName = `avis-echeance-${(templateData as AvisEcheanceData).invoiceNumber}-${(templateData as AvisEcheanceData).invoiceDate?.replace(/\//g, "-")}.pdf`;
      }
      pdf.save(fileName);

      toast.success("PDF generated successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Error generating PDF");
    } finally {
      setIsGenerating(false);
    }
  };

  const renderTemplate = () => {
    if (selectedTemplate === "pichet-avis-echeance") {
      return <PichetAvisEcheanceTemplate ref={templateRef} data={templateData as PichetAvisEcheanceData} />;
    }
    if (selectedTemplate === "foncia-avis-echeance") {
      return <FonciaAvisEcheanceTemplate ref={templateRef} data={templateData as FonciaAvisEcheanceData} />;
    }
    if (selectedTemplate === "pichet-paris-quittance") {
      return <PichetParisQuittanceTemplate ref={templateRef} data={templateData as PichetParisQuittanceData} />;
    }
    if (selectedTemplate === "seqens-avis-echeance") {
      return <SeqensAvisEcheanceTemplate ref={templateRef} data={templateData as SeqensAvisEcheanceData} />;
    }
    if (selectedTemplate === "cimmo-quittance") {
      return <CimmoQuittanceTemplate ref={templateRef} data={templateData as CimmoQuittanceData} />;
    }
    if (selectedTemplate === "nexity-avis-echeance") {
      return <NexityAvisEcheanceTemplate ref={templateRef} data={templateData as NexityAvisEcheanceData} />;
    }
    if (selectedTemplate === "orpi-avis-echeance") {
      return <OrpiAvisEcheanceTemplate ref={templateRef} data={templateData as OrpiAvisEcheanceData} />;
    }
    return <AvisEcheanceTemplate ref={templateRef} data={templateData as AvisEcheanceData} />;
  };

  const renderEditor = () => {
    if (selectedTemplate === "pichet-avis-echeance") {
      return (
        <PichetTemplateEditor 
          data={templateData as PichetAvisEcheanceData} 
          onChange={(data) => setTemplateData(data)} 
        />
      );
    }
    if (selectedTemplate === "foncia-avis-echeance") {
      return (
        <FonciaTemplateEditor 
          data={templateData as FonciaAvisEcheanceData} 
          onChange={(data) => setTemplateData(data)} 
        />
      );
    }
    if (selectedTemplate === "pichet-paris-quittance") {
      return (
        <PichetParisTemplateEditor 
          data={templateData as PichetParisQuittanceData} 
          onChange={(data) => setTemplateData(data)} 
        />
      );
    }
    if (selectedTemplate === "seqens-avis-echeance") {
      return (
        <SeqensTemplateEditor 
          data={templateData as SeqensAvisEcheanceData} 
          onChange={(data) => setTemplateData(data)} 
        />
      );
    }
    if (selectedTemplate === "cimmo-quittance") {
      return (
        <CimmoTemplateEditor 
          data={templateData as CimmoQuittanceData} 
          onChange={(data) => setTemplateData(data)} 
        />
      );
    }
    if (selectedTemplate === "nexity-avis-echeance") {
      return (
        <NexityTemplateEditor 
          data={templateData as NexityAvisEcheanceData} 
          onChange={(data) => setTemplateData(data)} 
        />
      );
    }
    if (selectedTemplate === "orpi-avis-echeance") {
      return (
        <OrpiTemplateEditor 
          data={templateData as OrpiAvisEcheanceData} 
          onChange={(data) => setTemplateData(data)} 
        />
      );
    }
    return (
      <TemplateEditor 
        data={templateData as AvisEcheanceData} 
        onChange={(data) => setTemplateData(data)} 
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#c8102e] rounded-lg flex items-center justify-center">
                <LayoutTemplate className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">PDF Template Editor</h1>
                <p className="text-xs text-gray-500">Edit and generate your PDF documents</p>
              </div>
            </div>
            <Button
              onClick={generatePDF}
              disabled={isGenerating}
              className="bg-[#c8102e] hover:bg-[#a00d25] text-white gap-2"
            >
              <FileDown className="w-4 h-4" />
              {isGenerating ? "Generating..." : "Download PDF"}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Template Selector */}
        <section className="mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Choose a template</h2>
          <TemplateSelector
            templates={templates}
            selectedTemplate={selectedTemplate}
            onSelect={handleTemplateSelect}
          />
        </section>

        {/* Editor Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="edit" className="gap-2">
              <Edit3 className="w-4 h-4" />
              Edit
            </TabsTrigger>
            <TabsTrigger value="preview" className="gap-2">
              <Eye className="w-4 h-4" />
              Preview
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Editor Panel - Always visible on desktop */}
            <TabsContent value="edit" className="lg:hidden mt-0">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Edit Fields</h3>
                {renderEditor()}
              </div>
            </TabsContent>

            {/* Desktop: Side-by-side layout */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">Edit Fields</h3>
                {renderEditor()}
              </div>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-2">
              <TabsContent value="preview" className="lg:block mt-0">
                <div className="bg-gray-100 rounded-lg p-4 overflow-auto">
                  <div className="mx-auto" style={{ maxWidth: "210mm" }}>
                    {renderTemplate()}
                  </div>
                </div>
              </TabsContent>

              {/* Desktop: Always show preview */}
              <div className="hidden lg:block">
                <div className="bg-gray-100 rounded-lg p-4 overflow-auto">
                  <div className="mx-auto" style={{ maxWidth: "210mm" }}>
                    {renderTemplate()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
