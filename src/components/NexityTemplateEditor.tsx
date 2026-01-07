import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { NexityAvisEcheanceData } from "@/types/template";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Upload } from "lucide-react";

interface NexityTemplateEditorProps {
  data: NexityAvisEcheanceData;
  onChange: (data: NexityAvisEcheanceData) => void;
}

const NexityTemplateEditor = ({ data, onChange }: NexityTemplateEditorProps) => {
  const updateField = (field: keyof NexityAvisEcheanceData, value: string | boolean) => {
    onChange({ ...data, [field]: value });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        updateField("logoUrl", result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateAvisOperation = (index: number, field: string, value: string) => {
    const newOperations = [...data.avisOperations];
    newOperations[index] = { ...newOperations[index], [field]: value };
    onChange({ ...data, avisOperations: newOperations });
  };

  const addAvisOperation = () => {
    onChange({
      ...data,
      avisOperations: [...data.avisOperations, { date: "", description: "", debit: "", credit: "" }]
    });
  };

  const removeAvisOperation = (index: number) => {
    const newOperations = data.avisOperations.filter((_, i) => i !== index);
    onChange({ ...data, avisOperations: newOperations });
  };

  const updateQuittanceOperation = (index: number, field: string, value: string) => {
    const newOperations = [...data.quittanceOperations];
    newOperations[index] = { ...newOperations[index], [field]: value };
    onChange({ ...data, quittanceOperations: newOperations });
  };

  const addQuittanceOperation = () => {
    onChange({
      ...data,
      quittanceOperations: [...data.quittanceOperations, { description: "", montant: "" }]
    });
  };

  const removeQuittanceOperation = (index: number) => {
    const newOperations = data.quittanceOperations.filter((_, i) => i !== index);
    onChange({ ...data, quittanceOperations: newOperations });
  };

  return (
    <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
      <Accordion type="multiple" defaultValue={["header"]} className="w-full">
        {/* Header Section */}
        <AccordionItem value="header">
          <AccordionTrigger className="text-sm font-semibold">Header & Agency</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label>Logo</Label>
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 px-3 py-2 border rounded-md cursor-pointer hover:bg-muted text-sm">
                  <Upload className="w-4 h-4" />
                  Upload Logo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                </label>
                {data.logoUrl && (
                  <img src={data.logoUrl} alt="Logo" className="h-8 object-contain" />
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="agencyName">Agency Name</Label>
              <Input id="agencyName" value={data.agencyName} onChange={(e) => updateField("agencyName", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="agencyAddress">Agency Address</Label>
              <Input id="agencyAddress" value={data.agencyAddress} onChange={(e) => updateField("agencyAddress", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="agencyCity">Agency City</Label>
              <Input id="agencyCity" value={data.agencyCity} onChange={(e) => updateField("agencyCity", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyLegal1">Legal Notice 1</Label>
              <Input id="companyLegal1" value={data.companyLegal1} onChange={(e) => updateField("companyLegal1", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyLegal2">Legal Notice 2</Label>
              <Input id="companyLegal2" value={data.companyLegal2} onChange={(e) => updateField("companyLegal2", e.target.value)} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Document Info */}
        <AccordionItem value="document">
          <AccordionTrigger className="text-sm font-semibold">Document Information</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label htmlFor="documentRef">Document Reference</Label>
              <Input id="documentRef" value={data.documentRef} onChange={(e) => updateField("documentRef", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="couponNumber">Coupon Number</Label>
              <Input id="couponNumber" value={data.couponNumber} onChange={(e) => updateField("couponNumber", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pageNumber">Page Number</Label>
              <Input id="pageNumber" value={data.pageNumber} onChange={(e) => updateField("pageNumber", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="documentLocation">Location</Label>
              <Input id="documentLocation" value={data.documentLocation} onChange={(e) => updateField("documentLocation", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="documentDate">Date</Label>
              <Input id="documentDate" value={data.documentDate} onChange={(e) => updateField("documentDate", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="periodStart">Period Start</Label>
              <Input id="periodStart" value={data.periodStart} onChange={(e) => updateField("periodStart", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="periodEnd">Period End</Label>
              <Input id="periodEnd" value={data.periodEnd} onChange={(e) => updateField("periodEnd", e.target.value)} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Tenant Info */}
        <AccordionItem value="tenant">
          <AccordionTrigger className="text-sm font-semibold">Tenant Information</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label htmlFor="tenantName">Tenant Name</Label>
              <Input id="tenantName" value={data.tenantName} onChange={(e) => updateField("tenantName", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tenantApartment">Apartment</Label>
              <Input id="tenantApartment" value={data.tenantApartment} onChange={(e) => updateField("tenantApartment", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tenantAddress">Address</Label>
              <Input id="tenantAddress" value={data.tenantAddress} onChange={(e) => updateField("tenantAddress", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tenantCity">City</Label>
              <Input id="tenantCity" value={data.tenantCity} onChange={(e) => updateField("tenantCity", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="loginEmail">Login Email</Label>
              <Input id="loginEmail" value={data.loginEmail} onChange={(e) => updateField("loginEmail", e.target.value)} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Building & Lot Info */}
        <AccordionItem value="building">
          <AccordionTrigger className="text-sm font-semibold">Building & Lot</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label htmlFor="buildingAddress">Building Address</Label>
              <Input id="buildingAddress" value={data.buildingAddress} onChange={(e) => updateField("buildingAddress", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="buildingCity">Building City</Label>
              <Input id="buildingCity" value={data.buildingCity} onChange={(e) => updateField("buildingCity", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lotNumber">Lot Number</Label>
              <Input id="lotNumber" value={data.lotNumber} onChange={(e) => updateField("lotNumber", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lotType">Lot Type</Label>
              <Input id="lotType" value={data.lotType} onChange={(e) => updateField("lotType", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="batiment">Building</Label>
              <Input id="batiment" value={data.batiment} onChange={(e) => updateField("batiment", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="escalier">Staircase</Label>
              <Input id="escalier" value={data.escalier} onChange={(e) => updateField("escalier", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="etage">Floor</Label>
              <Input id="etage" value={data.etage} onChange={(e) => updateField("etage", e.target.value)} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Avis Operations */}
        <AccordionItem value="avis">
          <AccordionTrigger className="text-sm font-semibold">Due Notice - Operations</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            {data.avisOperations.map((op, index) => (
              <div key={index} className="border rounded-lg p-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium">Operation {index + 1}</span>
                  <Button variant="ghost" size="sm" onClick={() => removeAvisOperation(index)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs">Date</Label>
                    <Input value={op.date} onChange={(e) => updateAvisOperation(index, "date", e.target.value)} className="text-xs" />
                  </div>
                  <div>
                    <Label className="text-xs">Description</Label>
                    <Input value={op.description} onChange={(e) => updateAvisOperation(index, "description", e.target.value)} className="text-xs" />
                  </div>
                  <div>
                    <Label className="text-xs">Debit</Label>
                    <Input value={op.debit} onChange={(e) => updateAvisOperation(index, "debit", e.target.value)} className="text-xs" />
                  </div>
                  <div>
                    <Label className="text-xs">Credit</Label>
                    <Input value={op.credit} onChange={(e) => updateAvisOperation(index, "credit", e.target.value)} className="text-xs" />
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addAvisOperation} className="w-full">
              <Plus className="w-4 h-4 mr-2" /> Add Operation
            </Button>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="space-y-2">
                <Label htmlFor="avisTotalDebit">Total Debit</Label>
                <Input id="avisTotalDebit" value={data.avisTotalDebit} onChange={(e) => updateField("avisTotalDebit", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="avisTotalCredit">Total Credit</Label>
                <Input id="avisTotalCredit" value={data.avisTotalCredit} onChange={(e) => updateField("avisTotalCredit", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="soldeAPayer">Balance Due</Label>
                <Input id="soldeAPayer" value={data.soldeAPayer} onChange={(e) => updateField("soldeAPayer", e.target.value)} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Quittance Section */}
        <AccordionItem value="quittance">
          <AccordionTrigger className="text-sm font-semibold">Rent Receipt</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="quittancePeriodStart">Period Start</Label>
                <Input id="quittancePeriodStart" value={data.quittancePeriodStart} onChange={(e) => updateField("quittancePeriodStart", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quittancePeriodEnd">Period End</Label>
                <Input id="quittancePeriodEnd" value={data.quittancePeriodEnd} onChange={(e) => updateField("quittancePeriodEnd", e.target.value)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quittanceLot">Lot</Label>
              <Input id="quittanceLot" value={data.quittanceLot} onChange={(e) => updateField("quittanceLot", e.target.value)} />
            </div>
            {data.quittanceOperations.map((op, index) => (
              <div key={index} className="border rounded-lg p-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium">Payment {index + 1}</span>
                  <Button variant="ghost" size="sm" onClick={() => removeQuittanceOperation(index)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs">Description</Label>
                    <Input value={op.description} onChange={(e) => updateQuittanceOperation(index, "description", e.target.value)} className="text-xs" />
                  </div>
                  <div>
                    <Label className="text-xs">Amount</Label>
                    <Input value={op.montant} onChange={(e) => updateQuittanceOperation(index, "montant", e.target.value)} className="text-xs" />
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addQuittanceOperation} className="w-full">
              <Plus className="w-4 h-4 mr-2" /> Add Payment
            </Button>
            <div className="space-y-2">
              <Label htmlFor="quittanceTotalPeriode">Period Total</Label>
              <Input id="quittanceTotalPeriode" value={data.quittanceTotalPeriode} onChange={(e) => updateField("quittanceTotalPeriode", e.target.value)} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Prélèvement Section */}
        <AccordionItem value="prelevement">
          <AccordionTrigger className="text-sm font-semibold">Bank Direct Debit</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label htmlFor="prelevementNumeroAppel">Call Number</Label>
              <Input id="prelevementNumeroAppel" value={data.prelevementNumeroAppel} onChange={(e) => updateField("prelevementNumeroAppel", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prelevementReferenceClient">Client Reference</Label>
              <Input id="prelevementReferenceClient" value={data.prelevementReferenceClient} onChange={(e) => updateField("prelevementReferenceClient", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="prelevementPeriodStart">Period Start</Label>
                <Input id="prelevementPeriodStart" value={data.prelevementPeriodStart} onChange={(e) => updateField("prelevementPeriodStart", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prelevementPeriodEnd">Period End</Label>
                <Input id="prelevementPeriodEnd" value={data.prelevementPeriodEnd} onChange={(e) => updateField("prelevementPeriodEnd", e.target.value)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="prelevementICS">SEPA Creditor ID</Label>
              <Input id="prelevementICS" value={data.prelevementICS} onChange={(e) => updateField("prelevementICS", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prelevementRUM">Unique Mandate Reference</Label>
              <Input id="prelevementRUM" value={data.prelevementRUM} onChange={(e) => updateField("prelevementRUM", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prelevementMontant">Amount</Label>
              <Input id="prelevementMontant" value={data.prelevementMontant} onChange={(e) => updateField("prelevementMontant", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prelevementDate">Debit Date</Label>
              <Input id="prelevementDate" value={data.prelevementDate} onChange={(e) => updateField("prelevementDate", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prelevementIBAN">IBAN</Label>
              <Input id="prelevementIBAN" value={data.prelevementIBAN} onChange={(e) => updateField("prelevementIBAN", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prelevementBIC">BIC</Label>
              <Input id="prelevementBIC" value={data.prelevementBIC} onChange={(e) => updateField("prelevementBIC", e.target.value)} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Options */}
        <AccordionItem value="options">
          <AccordionTrigger className="text-sm font-semibold">Options</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="showDuplicata"
                checked={data.showDuplicata}
                onCheckedChange={(checked) => updateField("showDuplicata", checked)}
              />
              <Label htmlFor="showDuplicata">Show DUPLICATA watermark</Label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default NexityTemplateEditor;
