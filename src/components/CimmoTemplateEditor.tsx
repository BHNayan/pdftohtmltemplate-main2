import { CimmoQuittanceData } from "@/types/template";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Upload } from "lucide-react";

interface CimmoTemplateEditorProps {
  data: CimmoQuittanceData;
  onChange: (data: CimmoQuittanceData) => void;
}

const CimmoTemplateEditor = ({ data, onChange }: CimmoTemplateEditorProps) => {
  const updateField = (field: keyof CimmoQuittanceData, value: string) => {
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

  return (
    <ScrollArea className="h-[calc(100vh-250px)]">
      <Accordion type="multiple" defaultValue={["header", "tenant", "quittance", "appel"]} className="space-y-2 pr-4">
        {/* Header */}
        <AccordionItem value="header" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-semibold">Header</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div>
              <Label className="text-xs">Logo</Label>
              <div className="flex items-center gap-2 mt-1">
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
            <div>
              <Label className="text-xs">Document Location</Label>
              <Input
                value={data.documentLocation}
                onChange={(e) => updateField("documentLocation", e.target.value)}
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">Document Date</Label>
              <Input
                value={data.documentDate}
                onChange={(e) => updateField("documentDate", e.target.value)}
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">Salutation</Label>
              <Input
                value={data.salutation}
                onChange={(e) => updateField("salutation", e.target.value)}
                className="text-sm"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Tenant Info */}
        <AccordionItem value="tenant" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-semibold">Tenant</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div>
              <Label className="text-xs">Tenant Name</Label>
              <Input
                value={data.locataireName}
                onChange={(e) => updateField("locataireName", e.target.value)}
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">Property Reference</Label>
              <Input
                value={data.referenceBien}
                onChange={(e) => updateField("referenceBien", e.target.value)}
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">Property Address</Label>
              <Input
                value={data.propertyAddress1}
                onChange={(e) => updateField("propertyAddress1", e.target.value)}
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">Property City</Label>
              <Input
                value={data.propertyCity}
                onChange={(e) => updateField("propertyCity", e.target.value)}
                className="text-sm"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Recipient */}
        <AccordionItem value="recipient" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-semibold">Recipient</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div>
              <Label className="text-xs">Name</Label>
              <Input
                value={data.recipientName}
                onChange={(e) => updateField("recipientName", e.target.value)}
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">Address</Label>
              <Input
                value={data.recipientAddress}
                onChange={(e) => updateField("recipientAddress", e.target.value)}
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">City</Label>
              <Input
                value={data.recipientCity}
                onChange={(e) => updateField("recipientCity", e.target.value)}
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">Country</Label>
              <Input
                value={data.recipientCountry}
                onChange={(e) => updateField("recipientCountry", e.target.value)}
                className="text-sm"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Quittance */}
        <AccordionItem value="quittance" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-semibold">Rent Receipt</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div>
              <Label className="text-xs">Description</Label>
              <Input
                value={data.quittanceDescription}
                onChange={(e) => updateField("quittanceDescription", e.target.value)}
                className="text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Month</Label>
                <Input
                  value={data.quittanceMonth1}
                  onChange={(e) => updateField("quittanceMonth1", e.target.value)}
                  className="text-sm"
                />
              </div>
              <div>
                <Label className="text-xs">Year</Label>
                <Input
                  value={data.quittanceYear1}
                  onChange={(e) => updateField("quittanceYear1", e.target.value)}
                  className="text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Rent</Label>
                <Input
                  value={data.quittanceLoyer1}
                  onChange={(e) => updateField("quittanceLoyer1", e.target.value)}
                  className="text-sm"
                />
              </div>
              <div>
                <Label className="text-xs">Charges</Label>
                <Input
                  value={data.quittanceCharges1}
                  onChange={(e) => updateField("quittanceCharges1", e.target.value)}
                  className="text-sm"
                />
              </div>
            </div>
            <div>
              <Label className="text-xs">Total</Label>
              <Input
                value={data.quittanceTotal1}
                onChange={(e) => updateField("quittanceTotal1", e.target.value)}
                className="text-sm"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Appel Loyer */}
        <AccordionItem value="appel" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-semibold">Rent Call</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div>
              <Label className="text-xs">Description</Label>
              <Input
                value={data.appelLoyerDescription}
                onChange={(e) => updateField("appelLoyerDescription", e.target.value)}
                className="text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Month</Label>
                <Input
                  value={data.appelMonth}
                  onChange={(e) => updateField("appelMonth", e.target.value)}
                  className="text-sm"
                />
              </div>
              <div>
                <Label className="text-xs">Year</Label>
                <Input
                  value={data.appelYear}
                  onChange={(e) => updateField("appelYear", e.target.value)}
                  className="text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Rent</Label>
                <Input
                  value={data.appelLoyer}
                  onChange={(e) => updateField("appelLoyer", e.target.value)}
                  className="text-sm"
                />
              </div>
              <div>
                <Label className="text-xs">Charges</Label>
                <Input
                  value={data.appelCharges}
                  onChange={(e) => updateField("appelCharges", e.target.value)}
                  className="text-sm"
                />
              </div>
            </div>
            <div>
              <Label className="text-xs">Due Total</Label>
              <Input
                value={data.appelTotal}
                onChange={(e) => updateField("appelTotal", e.target.value)}
                className="text-sm"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Payment Info */}
        <AccordionItem value="payment" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-semibold">Direct Debit</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Debit Date</Label>
                <Input
                  value={data.prelevementDate}
                  onChange={(e) => updateField("prelevementDate", e.target.value)}
                  className="text-sm"
                />
              </div>
              <div>
                <Label className="text-xs">Amount</Label>
                <Input
                  value={data.prelevementAmount}
                  onChange={(e) => updateField("prelevementAmount", e.target.value)}
                  className="text-sm"
                />
              </div>
            </div>
            <div>
              <Label className="text-xs">IBAN</Label>
              <Input
                value={data.prelevementIBAN}
                onChange={(e) => updateField("prelevementIBAN", e.target.value)}
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">Account Holder Name</Label>
              <Input
                value={data.prelevementName}
                onChange={(e) => updateField("prelevementName", e.target.value)}
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">RUM</Label>
              <Input
                value={data.rum}
                onChange={(e) => updateField("rum", e.target.value)}
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">ICS</Label>
              <Input
                value={data.ics}
                onChange={(e) => updateField("ics", e.target.value)}
                className="text-sm"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Company Info */}
        <AccordionItem value="company" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-semibold">Company</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div>
              <Label className="text-xs">Legal Line 1</Label>
              <Input
                value={data.companyLegal1}
                onChange={(e) => updateField("companyLegal1", e.target.value)}
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">Legal Line 2</Label>
              <Input
                value={data.companyLegal2}
                onChange={(e) => updateField("companyLegal2", e.target.value)}
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">Legal Line 3</Label>
              <Input
                value={data.companyLegal3}
                onChange={(e) => updateField("companyLegal3", e.target.value)}
                className="text-sm"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* QR Code */}
        <AccordionItem value="qrcode" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-semibold">QR Code</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div>
              <Label className="text-xs">QR Code URL</Label>
              <Input
                value={data.qrCodeUrl}
                onChange={(e) => updateField("qrCodeUrl", e.target.value)}
                placeholder="https://..."
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs">QR Code Image (URL)</Label>
              <Input
                value={data.qrCodeImage}
                onChange={(e) => updateField("qrCodeImage", e.target.value)}
                placeholder="Image URL"
                className="text-sm"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ScrollArea>
  );
};

export default CimmoTemplateEditor;
