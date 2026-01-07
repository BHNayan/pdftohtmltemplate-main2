import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { OrpiAvisEcheanceData } from "@/types/template";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Upload } from "lucide-react";

interface OrpiTemplateEditorProps {
  data: OrpiAvisEcheanceData;
  onChange: (data: OrpiAvisEcheanceData) => void;
}

const OrpiTemplateEditor = ({ data, onChange }: OrpiTemplateEditorProps) => {
  const updateField = (field: keyof OrpiAvisEcheanceData, value: string) => {
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
              <Label htmlFor="agencyPhone">Phone</Label>
              <Input id="agencyPhone" value={data.agencyPhone} onChange={(e) => updateField("agencyPhone", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="agencyEmail">Email</Label>
              <Input id="agencyEmail" value={data.agencyEmail} onChange={(e) => updateField("agencyEmail", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyLegal">Legal Notice</Label>
              <Textarea id="companyLegal" value={data.companyLegal} onChange={(e) => updateField("companyLegal", e.target.value)} rows={3} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Document Info */}
        <AccordionItem value="document">
          <AccordionTrigger className="text-sm font-semibold">Document Information</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label htmlFor="documentLocation">Location</Label>
              <Input id="documentLocation" value={data.documentLocation} onChange={(e) => updateField("documentLocation", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="documentDate">Date</Label>
              <Input id="documentDate" value={data.documentDate} onChange={(e) => updateField("documentDate", e.target.value)} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Property Info */}
        <AccordionItem value="property">
          <AccordionTrigger className="text-sm font-semibold">Rented Property</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label htmlFor="propertyDescription">Description</Label>
              <Input id="propertyDescription" value={data.propertyDescription} onChange={(e) => updateField("propertyDescription", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="propertyAddress">Address</Label>
              <Input id="propertyAddress" value={data.propertyAddress} onChange={(e) => updateField("propertyAddress", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="propertyCity">City</Label>
              <Input id="propertyCity" value={data.propertyCity} onChange={(e) => updateField("propertyCity", e.target.value)} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Gestionnaire */}
        <AccordionItem value="gestionnaire">
          <AccordionTrigger className="text-sm font-semibold">Property Manager</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label htmlFor="gestionnaireName">Name</Label>
              <Input id="gestionnaireName" value={data.gestionnaireName} onChange={(e) => updateField("gestionnaireName", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gestionnairePhone">Phone</Label>
              <Input id="gestionnairePhone" value={data.gestionnairePhone} onChange={(e) => updateField("gestionnairePhone", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gestionnaireEmail">Email</Label>
              <Input id="gestionnaireEmail" value={data.gestionnaireEmail} onChange={(e) => updateField("gestionnaireEmail", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="compteWeb">Web Account</Label>
              <Input id="compteWeb" value={data.compteWeb} onChange={(e) => updateField("compteWeb", e.target.value)} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Tenant Info */}
        <AccordionItem value="tenant">
          <AccordionTrigger className="text-sm font-semibold">Tenant</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label htmlFor="tenantName">Name</Label>
              <Input id="tenantName" value={data.tenantName} onChange={(e) => updateField("tenantName", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tenantAddress1">Address Line 1</Label>
              <Input id="tenantAddress1" value={data.tenantAddress1} onChange={(e) => updateField("tenantAddress1", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tenantAddress2">Address Line 2</Label>
              <Input id="tenantAddress2" value={data.tenantAddress2} onChange={(e) => updateField("tenantAddress2", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tenantCity">City</Label>
              <Input id="tenantCity" value={data.tenantCity} onChange={(e) => updateField("tenantCity", e.target.value)} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Lot Info */}
        <AccordionItem value="lot">
          <AccordionTrigger className="text-sm font-semibold">Lot</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="lotNumber">Lot Number</Label>
                <Input id="lotNumber" value={data.lotNumber} onChange={(e) => updateField("lotNumber", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lotType">Type</Label>
                <Input id="lotType" value={data.lotType} onChange={(e) => updateField("lotType", e.target.value)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="proprietaire">Owner</Label>
              <Input id="proprietaire" value={data.proprietaire} onChange={(e) => updateField("proprietaire", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="referenceARappeler">Reference to Recall</Label>
              <Input id="referenceARappeler" value={data.referenceARappeler} onChange={(e) => updateField("referenceARappeler", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="informationMessage">Information Message</Label>
              <Textarea id="informationMessage" value={data.informationMessage} onChange={(e) => updateField("informationMessage", e.target.value)} rows={2} />
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
              <Label htmlFor="quittanceType">Type</Label>
              <Input id="quittanceType" value={data.quittanceType} onChange={(e) => updateField("quittanceType", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="quittanceLoyer">Rent</Label>
                <Input id="quittanceLoyer" value={data.quittanceLoyer} onChange={(e) => updateField("quittanceLoyer", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quittanceCharges">Charges</Label>
                <Input id="quittanceCharges" value={data.quittanceCharges} onChange={(e) => updateField("quittanceCharges", e.target.value)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quittanceTotalPeriode">Period Total</Label>
              <Input id="quittanceTotalPeriode" value={data.quittanceTotalPeriode} onChange={(e) => updateField("quittanceTotalPeriode", e.target.value)} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Avis d'Échéance Section */}
        <AccordionItem value="avis">
          <AccordionTrigger className="text-sm font-semibold">Due Notice</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="avisPeriodStart">Period Start</Label>
                <Input id="avisPeriodStart" value={data.avisPeriodStart} onChange={(e) => updateField("avisPeriodStart", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="avisPeriodEnd">Period End</Label>
                <Input id="avisPeriodEnd" value={data.avisPeriodEnd} onChange={(e) => updateField("avisPeriodEnd", e.target.value)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="avisType">Type</Label>
              <Input id="avisType" value={data.avisType} onChange={(e) => updateField("avisType", e.target.value)} />
            </div>
            
            {/* Operations */}
            <div className="space-y-2">
              <Label className="font-semibold">Operations</Label>
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
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="avisTotalPeriode">Period Total</Label>
                <Input id="avisTotalPeriode" value={data.avisTotalPeriode} onChange={(e) => updateField("avisTotalPeriode", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="montantNetAPayer">Net Amount Due</Label>
                <Input id="montantNetAPayer" value={data.montantNetAPayer} onChange={(e) => updateField("montantNetAPayer", e.target.value)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateExigible">Due Date</Label>
              <Input id="dateExigible" value={data.dateExigible} onChange={(e) => updateField("dateExigible", e.target.value)} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Prélèvement Section */}
        <AccordionItem value="prelevement">
          <AccordionTrigger className="text-sm font-semibold">Direct Debit</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label htmlFor="prelevementDate">Debit Date</Label>
              <Input id="prelevementDate" value={data.prelevementDate} onChange={(e) => updateField("prelevementDate", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prelevementReference">Reference</Label>
              <Input id="prelevementReference" value={data.prelevementReference} onChange={(e) => updateField("prelevementReference", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prelevementMontant">Amount</Label>
              <Input id="prelevementMontant" value={data.prelevementMontant} onChange={(e) => updateField("prelevementMontant", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="prelevementICS">ICS</Label>
                <Input id="prelevementICS" value={data.prelevementICS} onChange={(e) => updateField("prelevementICS", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prelevementRUM">RUM</Label>
                <Input id="prelevementRUM" value={data.prelevementRUM} onChange={(e) => updateField("prelevementRUM", e.target.value)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="prelevementIBAN">IBAN</Label>
              <Input id="prelevementIBAN" value={data.prelevementIBAN} onChange={(e) => updateField("prelevementIBAN", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prelevementBIC">BIC</Label>
              <Input id="prelevementBIC" value={data.prelevementBIC} onChange={(e) => updateField("prelevementBIC", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prelevementTitulaire">Account Holder</Label>
              <Input id="prelevementTitulaire" value={data.prelevementTitulaire} onChange={(e) => updateField("prelevementTitulaire", e.target.value)} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Disclaimer */}
        <AccordionItem value="disclaimer">
          <AccordionTrigger className="text-sm font-semibold">Legal Text</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label htmlFor="disclaimerText">Disclaimer Text</Label>
              <Textarea id="disclaimerText" value={data.disclaimerText} onChange={(e) => updateField("disclaimerText", e.target.value)} rows={4} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default OrpiTemplateEditor;
