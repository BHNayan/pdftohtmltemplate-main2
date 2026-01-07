import { useRef } from "react";
import { SeqensAvisEcheanceData } from "@/types/template";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface SeqensTemplateEditorProps {
  data: SeqensAvisEcheanceData;
  onChange: (data: SeqensAvisEcheanceData) => void;
}

const SeqensTemplateEditor = ({ data, onChange }: SeqensTemplateEditorProps) => {
  const logoInputRef = useRef<HTMLInputElement>(null);
  const qrCodeInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof SeqensAvisEcheanceData, value: string) => {
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

  const renderField = (label: string, field: keyof SeqensAvisEcheanceData) => (
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
      <Accordion type="multiple" className="space-y-2" defaultValue={["logo", "company"]}>
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

        {/* Company Info */}
        <AccordionItem value="company">
          <AccordionTrigger className="text-sm font-medium">Company</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Company Name", "companyName")}
            {renderField("Group", "companyGroup")}
            {renderField("Address", "companyAddress")}
            {renderField("City", "companyCity")}
            {renderField("RCS", "companyRCS")}
            {renderField("Capital", "companyCapital")}
            {renderField("ICS", "companyICS")}
            {renderField("SIRET", "companySIRET")}
            {renderField("VAT ID", "companyTVAI")}
          </AccordionContent>
        </AccordionItem>

        {/* Document Info */}
        <AccordionItem value="document">
          <AccordionTrigger className="text-sm font-medium">Document</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Title (Month)", "documentTitle")}
            {renderField("Month", "documentMonth")}
            {renderField("Invoice Number", "factureNumber")}
            {renderField("Invoice Date", "factureDate")}
            {renderField("Page", "pageNumber")}
            {renderField("Client Reference", "referenceClient")}
          </AccordionContent>
        </AccordionItem>

        {/* Correspondence */}
        <AccordionItem value="correspondence">
          <AccordionTrigger className="text-sm font-medium">Correspondence Address</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Introduction", "correspondenceIntro")}
            {renderField("Company", "correspondenceCompany")}
            {renderField("Address 1", "correspondenceAddress1")}
            {renderField("Address 2", "correspondenceAddress2")}
            {renderField("Phone", "correspondencePhone")}
            {renderField("Website", "correspondenceWebsite")}
          </AccordionContent>
        </AccordionItem>

        {/* Residence */}
        <AccordionItem value="residence">
          <AccordionTrigger className="text-sm font-medium">Residence Address</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Label", "residenceLabel")}
            {renderField("Residence Name", "residenceName")}
            {renderField("Address", "residenceAddress")}
            {renderField("City", "residenceCity")}
          </AccordionContent>
        </AccordionItem>

        {/* Direction */}
        <AccordionItem value="direction">
          <AccordionTrigger className="text-sm font-medium">Direction</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Direction Name", "directionName")}
            {renderField("Address", "directionAddress")}
            {renderField("City", "directionCity")}
          </AccordionContent>
        </AccordionItem>

        {/* Tenant */}
        <AccordionItem value="tenant">
          <AccordionTrigger className="text-sm font-medium">Tenant</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Name", "tenantName")}
            {renderField("Address", "tenantAddress")}
            {renderField("City", "tenantCity")}
          </AccordionContent>
        </AccordionItem>

        {/* Convention */}
        <AccordionItem value="convention">
          <AccordionTrigger className="text-sm font-medium">Convention</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Max Rent Amount", "conventionAmount")}
          </AccordionContent>
        </AccordionItem>

        {/* Apartment */}
        <AccordionItem value="appartement">
          <AccordionTrigger className="text-sm font-medium">Apartment</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Apartment Number", "appartNumber")}
            {renderField("Period Start", "appartPeriodStart")}
            {renderField("Period End", "appartPeriodEnd")}
            {renderField("Conventional Rent", "loyerConventionne")}
            {renderField("RLS CAF", "rlsCAF")}
            {renderField("Housing Assistance", "aidePersonnelleLogement")}
            {renderField("Elevator Charges", "provChargesAscenseur")}
            {renderField("Heating Charges", "provChargesChauffage")}
            {renderField("Rental Charges", "provChargesLocatives")}
            {renderField("Hot Water", "provEauChaude")}
            {renderField("Cold Water", "provEauFroide")}
          </AccordionContent>
        </AccordionItem>

        {/* Parking */}
        <AccordionItem value="stationnement">
          <AccordionTrigger className="text-sm font-medium">Parking</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Parking Number", "stationnementNumber")}
            {renderField("Period Start", "stationnementPeriodStart")}
            {renderField("Period End", "stationnementPeriodEnd")}
            {renderField("Parking Rent", "loyerStationnement")}
            {renderField("Elevator Charges", "provChargesAscenseurParking")}
            {renderField("Parking Charges", "provChargesParking")}
          </AccordionContent>
        </AccordionItem>

        {/* Account Summary */}
        <AccordionItem value="account">
          <AccordionTrigger className="text-sm font-medium">Tenant Account</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Credit Balance Date", "soldeFaveurDate")}
            {renderField("Credit Balance Amount", "soldeFaveurAmount")}
            {renderField("Debit Date History", "prelevementDate")}
            {renderField("Debit Amount History", "prelevementHistAmount")}
            {renderField("Balance Before Due", "soldeAvantEcheance")}
            {renderField("Total Due Amount", "montantTotalEcheance")}
            {renderField("Balance After Due", "soldeApresEcheance")}
          </AccordionContent>
        </AccordionItem>

        {/* Payment */}
        <AccordionItem value="payment">
          <AccordionTrigger className="text-sm font-medium">Payment</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Debit Date", "montantPreleveDate")}
            {renderField("Amount Debited", "montantPreleve")}
          </AccordionContent>
        </AccordionItem>

        {/* Footer */}
        <AccordionItem value="footer">
          <AccordionTrigger className="text-sm font-medium">Footer</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {renderField("Text 1", "footerText1")}
            {renderField("Text 2", "footerText2")}
            {renderField("RUM", "rumNumber")}
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

export default SeqensTemplateEditor;
