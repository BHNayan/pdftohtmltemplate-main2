import { useRef } from "react";
import { PichetParisQuittanceData } from "@/types/template";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface PichetParisTemplateEditorProps {
  data: PichetParisQuittanceData;
  onChange: (data: PichetParisQuittanceData) => void;
}

const PichetParisTemplateEditor = ({ data, onChange }: PichetParisTemplateEditorProps) => {
  const logoInputRef = useRef<HTMLInputElement>(null);
  const qrCodeInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof PichetParisQuittanceData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange("logoUrl", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    handleChange("logoUrl", "");
  };

  const handleQrCodeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange("qrCodeImage", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveQrCode = () => {
    handleChange("qrCodeImage", "");
  };

  const renderField = (label: string, field: keyof PichetParisQuittanceData) => (
    <div className="space-y-1">
      <Label className="text-xs">{label}</Label>
      <Input
        value={data[field]}
        onChange={(e) => handleChange(field, e.target.value)}
        className="h-8 text-sm"
      />
    </div>
  );

  return (
    <ScrollArea className="h-[calc(100vh-300px)]">
      <Accordion type="multiple" className="space-y-2" defaultValue={["logo", "agency"]}>
        {/* Logo */}
        <AccordionItem value="logo">
          <AccordionTrigger className="text-sm font-medium">Logo</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {data.logoUrl ? (
              <div className="relative inline-block">
                <img src={data.logoUrl} alt="Logo" className="h-16 object-contain" />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute -top-2 -right-2 h-6 w-6"
                  onClick={handleRemoveLogo}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => logoInputRef.current?.click()}
              >
                <Upload className="h-4 w-4" />
                Upload Logo
              </Button>
            )}
            <input
              ref={logoInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleLogoUpload}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Agency Info */}
        <AccordionItem value="agency">
          <AccordionTrigger className="text-sm font-medium">Agency</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Agency Name", "agencyName")}
            {renderField("Address", "agencyAddress")}
            {renderField("City", "agencyCity")}
            {renderField("Phone", "agencyPhone")}
          </AccordionContent>
        </AccordionItem>

        {/* Company Info */}
        <AccordionItem value="company">
          <AccordionTrigger className="text-sm font-medium">Company</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Company Name", "companyName")}
            {renderField("Headquarters", "companySiege")}
            {renderField("RCS", "companyRCS")}
            {renderField("VAT", "companyTVA")}
            {renderField("APE Code", "companyAPE")}
            {renderField("Professional Card", "companyCartePro")}
            {renderField("Guarantee", "companyGarantie")}
            {renderField("RC", "companyRC")}
            {renderField("Email", "companyEmail")}
            {renderField("Website", "companyWebsite")}
          </AccordionContent>
        </AccordionItem>

        {/* Document Info */}
        <AccordionItem value="document">
          <AccordionTrigger className="text-sm font-medium">Document</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Document Date", "documentDate")}
            {renderField("Reference", "documentRef")}
          </AccordionContent>
        </AccordionItem>

        {/* Property Info */}
        <AccordionItem value="property">
          <AccordionTrigger className="text-sm font-medium">Rented Property</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Description", "propertyDescription")}
            {renderField("Address", "propertyAddress")}
          </AccordionContent>
        </AccordionItem>

        {/* Lot Info */}
        <AccordionItem value="lot">
          <AccordionTrigger className="text-sm font-medium">Lot</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Lot Number", "lotNumber")}
            {renderField("Lot Type", "lotType")}
            {renderField("Owner", "proprietaire")}
            {renderField("Reference to Recall", "referenceARappeler")}
          </AccordionContent>
        </AccordionItem>

        {/* Tenant Info */}
        <AccordionItem value="tenant">
          <AccordionTrigger className="text-sm font-medium">Tenant</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Name", "tenantName")}
            {renderField("Address Line 1", "tenantAddress1")}
            {renderField("Address Line 2", "tenantAddress2")}
            {renderField("City", "tenantCity")}
            {renderField("Tenant 1 Name", "locataire1Name")}
            {renderField("Tenant 1 Ref", "locataire1Ref")}
            {renderField("Tenant 2 Name", "locataire2Name")}
          </AccordionContent>
        </AccordionItem>

        {/* Staff Info */}
        <AccordionItem value="staff">
          <AccordionTrigger className="text-sm font-medium">Staff</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Assistant", "assistantName")}
            {renderField("Assistant Phone", "assistantPhone")}
            {renderField("Assistant Email", "assistantEmail")}
            {renderField("Accountant", "comptableName")}
            {renderField("Accountant Phone", "comptablePhone")}
            {renderField("Accountant Email", "comptableEmail")}
            {renderField("Web Account", "compteWeb")}
          </AccordionContent>
        </AccordionItem>

        {/* Rent Receipt */}
        <AccordionItem value="quittance">
          <AccordionTrigger className="text-sm font-medium">Rent Receipt</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Period Start", "quittancePeriodStart")}
            {renderField("Period End", "quittancePeriodEnd")}
            {renderField("Type", "quittanceType")}
            {renderField("Rent", "quittanceLoyer")}
            {renderField("Charges Provision", "quittanceProvisionCharges")}
            {renderField("Property Tax", "quittanceProvisionTOM")}
            {renderField("Total", "quittanceTotal")}
          </AccordionContent>
        </AccordionItem>

        {/* Due Notice */}
        <AccordionItem value="avis">
          <AccordionTrigger className="text-sm font-medium">Due Notice</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Period Start", "avisPeriodStart")}
            {renderField("Period End", "avisPeriodEnd")}
            {renderField("Type", "avisType")}
            {renderField("Previous Balance Date", "soldeAnterieurDate")}
            {renderField("Previous Balance Amount", "soldeAnterieurAmount")}
            {renderField("Payment Date", "paiementDate")}
            {renderField("Payment Label", "paiementLabel")}
            {renderField("Payment Amount", "paiementAmount")}
            {renderField("Rent", "avisLoyer")}
            {renderField("Charges Provision", "avisProvisionCharges")}
            {renderField("Property Tax", "avisProvisionTOM")}
            {renderField("Total", "avisTotal")}
          </AccordionContent>
        </AccordionItem>

        {/* Payment */}
        <AccordionItem value="payment">
          <AccordionTrigger className="text-sm font-medium">Payment</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Net Amount Due", "montantNetAPayer")}
            {renderField("Due Date", "dateExigible")}
          </AccordionContent>
        </AccordionItem>

        {/* Direct Debit */}
        <AccordionItem value="prelevement">
          <AccordionTrigger className="text-sm font-medium">Direct Debit</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Debit Date", "prelevementDate")}
            {renderField("Total Amount", "prelevementTotal")}
            {renderField("Payer 1 Name", "prelevement1Name")}
            {renderField("ICS", "prelevement1ICS")}
            {renderField("RUM", "prelevement1RUM")}
            {renderField("BIC", "prelevement1BIC")}
            {renderField("IBAN", "prelevement1IBAN")}
            {renderField("Amount", "prelevement1Amount")}
            {renderField("Payer 2 Name", "prelevement2Name")}
          </AccordionContent>
        </AccordionItem>

        {/* QR Code */}
        <AccordionItem value="qrcode">
          <AccordionTrigger className="text-sm font-medium">QR Code</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("QR Code URL", "qrCodeUrl")}
            {data.qrCodeImage ? (
              <div className="relative inline-block">
                <img src={data.qrCodeImage} alt="QR Code" className="h-16 object-contain" />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute -top-2 -right-2 h-6 w-6"
                  onClick={handleRemoveQrCode}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => qrCodeInputRef.current?.click()}
              >
                <Upload className="h-4 w-4" />
                Upload QR Code
              </Button>
            )}
            <input
              ref={qrCodeInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleQrCodeUpload}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ScrollArea>
  );
};

export default PichetParisTemplateEditor;
