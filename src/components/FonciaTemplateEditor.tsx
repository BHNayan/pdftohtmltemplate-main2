import { useRef } from "react";
import { FonciaAvisEcheanceData } from "@/types/template";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface FonciaTemplateEditorProps {
  data: FonciaAvisEcheanceData;
  onChange: (data: FonciaAvisEcheanceData) => void;
}

const FonciaTemplateEditor = ({ data, onChange }: FonciaTemplateEditorProps) => {
  const logoInputRef = useRef<HTMLInputElement>(null);
  const qrCodeInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof FonciaAvisEcheanceData, value: string) => {
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

  const renderField = (label: string, field: keyof FonciaAvisEcheanceData) => (
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
            {renderField("Address Line 1", "agencyAddress1")}
            {renderField("Address Line 2", "agencyAddress2")}
            {renderField("Phone", "agencyPhone")}
            {renderField("Fax", "agencyFax")}
            {renderField("Email", "agencyEmail")}
            {renderField("Website", "agencyWebsite")}
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
          <AccordionTrigger className="text-sm font-medium">Property</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Building Name", "propertyName")}
            {renderField("Address Line 1", "propertyAddress1")}
            {renderField("Address Line 2", "propertyAddress2")}
          </AccordionContent>
        </AccordionItem>

        {/* Tenant Info */}
        <AccordionItem value="tenant">
          <AccordionTrigger className="text-sm font-medium">Tenant</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Tenant Name", "tenantName")}
            {renderField("Address Line 1", "tenantAddress1")}
            {renderField("Address Line 2", "tenantAddress2")}
            {renderField("City", "tenantCity")}
          </AccordionContent>
        </AccordionItem>

        {/* Staff Info */}
        <AccordionItem value="staff">
          <AccordionTrigger className="text-sm font-medium">Staff</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Property Manager", "gestionnaireName")}
            {renderField("Manager Phone", "gestionnairePhone")}
            {renderField("Accountant", "comptableName")}
            {renderField("Accountant Phone", "comptablePhone")}
            {renderField("Reference", "reference")}
            {renderField("VAT Intra.", "tvaIntra")}
          </AccordionContent>
        </AccordionItem>

        {/* Lot Info */}
        <AccordionItem value="lot">
          <AccordionTrigger className="text-sm font-medium">Main Lot</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Lot Number", "lotNumber")}
            {renderField("Entrance", "entree")}
            {renderField("Staircase", "escalier")}
            {renderField("Floor", "etage")}
            {renderField("Door", "porte")}
            {renderField("Lot Type", "typeLot")}
          </AccordionContent>
        </AccordionItem>

        {/* Lot 2 Info */}
        <AccordionItem value="lot2">
          <AccordionTrigger className="text-sm font-medium">Secondary Lot</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Lot Number", "lot2Number")}
            {renderField("Entrance", "lot2Entree")}
            {renderField("Staircase", "lot2Escalier")}
            {renderField("Floor", "lot2Etage")}
            {renderField("Door", "lot2Porte")}
            {renderField("Lot Type", "lot2Type")}
          </AccordionContent>
        </AccordionItem>

        {/* Client Space */}
        <AccordionItem value="client">
          <AccordionTrigger className="text-sm font-medium">Client Space</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("ID", "clientId")}
            {renderField("Password", "clientPassword")}
          </AccordionContent>
        </AccordionItem>

        {/* Quittance */}
        <AccordionItem value="quittance">
          <AccordionTrigger className="text-sm font-medium">Rent Receipt</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Period Start", "quittancePeriodStart")}
            {renderField("Period End", "quittancePeriodEnd")}
            {renderField("Payment Type", "quittancePaymentType")}
            {renderField("Principal Rent", "quittanceLoyerPrincipal")}
            {renderField("Charges Provision", "quittanceProvisionCharges")}
            {renderField("Insurance", "quittanceAssurance")}
            {renderField("Total", "quittanceTotal")}
          </AccordionContent>
        </AccordionItem>

        {/* Avis d'échéance */}
        <AccordionItem value="avis">
          <AccordionTrigger className="text-sm font-medium">Due Notice</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Period Start", "avisPeriodStart")}
            {renderField("Period End", "avisPeriodEnd")}
            {renderField("Previous Balance Date", "soldeAnterieurDate")}
            {renderField("Previous Balance Amount", "soldeAnterieurAmount")}
            {renderField("Payment Date", "paiementDate")}
            {renderField("Payment Label", "paiementLabel")}
            {renderField("Payment Amount", "paiementAmount")}
            {renderField("Principal Rent", "avisLoyerPrincipal")}
            {renderField("Property Tax", "avisTaxesOM")}
            {renderField("Property Tax Year", "avisTaxesOMYear")}
            {renderField("Insurance", "avisAssurance")}
            {renderField("Charges Provision", "avisProvisionCharges")}
            {renderField("Total", "avisTotal")}
          </AccordionContent>
        </AccordionItem>

        {/* Revision */}
        <AccordionItem value="revision">
          <AccordionTrigger className="text-sm font-medium">Rent Revision</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Revision Date", "revisionDate")}
            {renderField("Category", "revisionRubrique")}
            {renderField("Previous Amounts", "revisionMontantPrecedent")}
          </AccordionContent>
        </AccordionItem>

        {/* Payment */}
        <AccordionItem value="payment">
          <AccordionTrigger className="text-sm font-medium">Payment</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Net Amount Due", "montantNetAPayer")}
            {renderField("Total Credits", "totalCredits")}
            {renderField("Total Debits", "totalDebits")}
          </AccordionContent>
        </AccordionItem>

        {/* Direct Debit */}
        <AccordionItem value="prelevement">
          <AccordionTrigger className="text-sm font-medium">Direct Debit</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Debit Date", "prelevementDate")}
            {renderField("Amount Debited", "montantPreleve")}
            {renderField("ICS", "ics")}
            {renderField("RUM", "rum")}
            {renderField("BIC", "bic")}
            {renderField("IBAN", "iban")}
            {renderField("Account Holder", "titulaireCompte")}
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

export default FonciaTemplateEditor;
