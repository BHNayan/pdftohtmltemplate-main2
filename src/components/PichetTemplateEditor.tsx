import { PichetAvisEcheanceData } from "@/types/template";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { useRef } from "react";

interface PichetTemplateEditorProps {
  data: PichetAvisEcheanceData;
  onChange: (data: PichetAvisEcheanceData) => void;
}

const PichetTemplateEditor = ({ data, onChange }: PichetTemplateEditorProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const qrCodeInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof PichetAvisEcheanceData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        handleChange("logoUrl", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    handleChange("logoUrl", "");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleQrCodeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        handleChange("qrCodeImage", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveQrCode = () => {
    handleChange("qrCodeImage", "");
    if (qrCodeInputRef.current) {
      qrCodeInputRef.current.value = "";
    }
  };

  const renderField = (label: string, field: keyof PichetAvisEcheanceData) => (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium text-gray-600">{label}</Label>
      <Input
        value={data[field]}
        onChange={(e) => handleChange(field, e.target.value)}
        className="h-8 text-sm"
      />
    </div>
  );

  return (
    <ScrollArea className="h-[calc(100vh-200px)]">
      <div className="pr-4 space-y-2">
        <Accordion type="multiple" defaultValue={["logo", "agency", "tenant", "quittance"]} className="space-y-2">
          {/* Logo Section */}
          <AccordionItem value="logo" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              🖼️ Logo
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              <div className="space-y-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                  id="pichet-logo-upload"
                />
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    Choose File
                  </Button>
                  {data.logoUrl && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleRemoveLogo}
                      className="flex items-center gap-2 text-red-600 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                      Remove
                    </Button>
                  )}
                </div>
                {data.logoUrl && (
                  <div className="border rounded-lg p-2 bg-gray-50">
                    <img 
                      src={data.logoUrl} 
                      alt="Logo preview" 
                      className="h-12 object-contain"
                    />
                  </div>
                )}
                <p className="text-xs text-gray-500">
                  Upload an image to replace the default logo (PNG, JPG, SVG)
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Agency Section */}
          <AccordionItem value="agency" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              🏢 Agency
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Agency Name", "agencyName")}
              {renderField("Address", "agencyAddress")}
              {renderField("City", "agencyCity")}
              {renderField("Document Date", "documentDate")}
            </AccordionContent>
          </AccordionItem>

          {/* Staff Section */}
          <AccordionItem value="staff" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              👥 Staff
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Assistant", "assistantName")}
              {renderField("Assistant Phone", "assistantPhone")}
              {renderField("Assistant Email", "assistantEmail")}
              {renderField("Accountant", "comptableName")}
              {renderField("Accountant Phone", "comptablePhone")}
              {renderField("Accountant Email", "comptableEmail")}
            </AccordionContent>
          </AccordionItem>

          {/* Tenant Section */}
          <AccordionItem value="tenant" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              👤 Tenant
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Tenant Name", "tenantName")}
              {renderField("Address Line 1", "tenantAddress1")}
              {renderField("Address Line 2", "tenantAddress2")}
              {renderField("City", "tenantCity")}
            </AccordionContent>
          </AccordionItem>

          {/* Property Section */}
          <AccordionItem value="property" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              🏠 Rented Property
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Description", "propertyDescription")}
              {renderField("Address Line 1", "propertyAddress1")}
              {renderField("Address Line 2", "propertyAddress2")}
            </AccordionContent>
          </AccordionItem>

          {/* Quittance Section */}
          <AccordionItem value="quittance" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              📋 Rent Receipt
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Period Start", "quittancePeriodStart")}
              {renderField("Period End", "quittancePeriodEnd")}
              {renderField("Rent (€)", "quittanceLoyer")}
              {renderField("Charges Provision (€)", "quittanceProvisionCharges")}
              {renderField("Property Tax (€)", "quittanceProvisionTOM")}
              {renderField("Total (€)", "quittanceTotal")}
            </AccordionContent>
          </AccordionItem>

          {/* Due Notice Section */}
          <AccordionItem value="avis" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              💰 Due Notice
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Period Start", "avisPeriodStart")}
              {renderField("Period End", "avisPeriodEnd")}
              {renderField("Previous Balance Date", "soldeAnterieurDate")}
              {renderField("Previous Balance Label", "soldeAnterieurLabel")}
              {renderField("Previous Balance Amount (€)", "soldeAnterieurAmount")}
              {renderField("Payment Date", "paiementDate")}
              {renderField("Payment Label", "paiementLabel")}
              {renderField("Payment Amount (€)", "paiementAmount")}
              {renderField("Rent (€)", "avisLoyer")}
              {renderField("Charges Balance (€)", "avisSoldeCharges")}
              {renderField("Water Adjustment (€)", "avisRegularisationEau")}
              {renderField("Charges Provision (€)", "avisProvisionCharges")}
              {renderField("Property Tax (€)", "avisProvisionTOM")}
              {renderField("Total (€)", "avisTotal")}
            </AccordionContent>
          </AccordionItem>

          {/* Payment Section */}
          <AccordionItem value="payment" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              💳 Payment
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Net Amount Due (€)", "montantNetAPayer")}
              {renderField("Due Date", "dateExigible")}
              {renderField("Debit Date", "prelevementDate")}
              {renderField("Amount Debited (€)", "montantPreleve")}
            </AccordionContent>
          </AccordionItem>

          {/* Bank Section */}
          <AccordionItem value="bank" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              🏦 Bank Information
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("ICS", "ics")}
              {renderField("RUM", "rum")}
              {renderField("IBAN", "iban")}
              {renderField("BIC", "bic")}
              {renderField("Account Holder", "titulaireCo")}
            </AccordionContent>
          </AccordionItem>

          {/* QR Code Section */}
          <AccordionItem value="qrcode" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              📱 QR Code
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              <div className="space-y-3">
                <Label className="text-xs font-medium text-gray-600">Option 1: Generate from URL</Label>
                {renderField("QR Code URL", "qrCodeUrl")}
                <p className="text-xs text-gray-500">The QR code will be generated automatically from this URL</p>
              </div>
              
              <div className="border-t pt-4 space-y-3">
                <Label className="text-xs font-medium text-gray-600">Option 2: Upload QR Image</Label>
                <input
                  ref={qrCodeInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleQrCodeUpload}
                  className="hidden"
                  id="pichet-qrcode-upload"
                />
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => qrCodeInputRef.current?.click()}
                    className="flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    Upload QR Code
                  </Button>
                  {data.qrCodeImage && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleRemoveQrCode}
                      className="flex items-center gap-2 text-red-600 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                      Remove
                    </Button>
                  )}
                </div>
                {data.qrCodeImage && (
                  <div className="border rounded-lg p-2 bg-gray-50">
                    <img 
                      src={data.qrCodeImage} 
                      alt="QR Code preview" 
                      className="h-16 object-contain"
                    />
                  </div>
                )}
                <p className="text-xs text-gray-500">
                  The uploaded image will replace the generated QR code
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Company Section */}
          <AccordionItem value="company" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              🏛️ Company
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Company Name", "companyName")}
              {renderField("Phone", "companyPhone")}
              {renderField("Headquarters", "companySiege")}
              {renderField("RCS", "companyRCS")}
              {renderField("VAT", "companyTVA")}
              {renderField("APE Code", "companyAPE")}
              {renderField("Professional Card", "companyCartePro")}
              {renderField("Professional RC", "companyRC")}
              {renderField("Email", "companyEmail")}
              {renderField("Client Space", "espaceClient")}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ScrollArea>
  );
};

export default PichetTemplateEditor;
