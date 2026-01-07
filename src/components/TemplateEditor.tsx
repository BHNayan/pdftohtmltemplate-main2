import { AvisEcheanceData } from "@/types/template";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { useRef } from "react";

interface TemplateEditorProps {
  data: AvisEcheanceData;
  onChange: (data: AvisEcheanceData) => void;
}


const TemplateEditor = ({ data, onChange }: TemplateEditorProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const qrCodeInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof AvisEcheanceData, value: string) => {
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

  const renderField = (label: string, field: keyof AvisEcheanceData) => (
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
        <Accordion type="multiple" defaultValue={["logo", "agency", "tenant", "charges"]} className="space-y-2">
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
                  id="logo-upload"
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
              {renderField("Address Line 1", "agencyAddress1")}
              {renderField("Address Line 2", "agencyAddress2")}
            </AccordionContent>
          </AccordionItem>

          {/* Tenant Section */}
          <AccordionItem value="tenant" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              👤 Tenant
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Tenant Name", "tenantName")}
              {renderField("Residence", "tenantResidence")}
              {renderField("Door", "tenantDoor")}
              {renderField("Address", "tenantAddress")}
              {renderField("City", "tenantCity")}
            </AccordionContent>
          </AccordionItem>

          {/* Charges Section */}
          <AccordionItem value="charges" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              💰 Amounts
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Principal Rent (€)", "loyerPrincipal")}
              {renderField("Heating Charges (€)", "chargesChauffage")}
              {renderField("General Charges (€)", "chargesGenerales")}
              {renderField("Total Due (€)", "totalEcheance")}
              {renderField("Amount to Pay (€)", "paymentAmount")}
            </AccordionContent>
          </AccordionItem>

          {/* Invoice Section */}
          <AccordionItem value="invoice" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              📄 Invoice
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Invoice Number", "invoiceNumber")}
              {renderField("Invoice Date", "invoiceDate")}
              {renderField("Payment Date", "paymentDate")}
              {renderField("Client Reference", "referenceClient")}
              {renderField("Housing Number", "logementNumber")}
              {renderField("Period Start", "periodStart")}
              {renderField("Period End", "periodEnd")}
            </AccordionContent>
          </AccordionItem>

          {/* Property Section */}
          <AccordionItem value="property" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              🏠 Property
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Property Name", "propertyName")}
              {renderField("Address Line 1", "propertyAddress1")}
              {renderField("Address Line 2", "propertyAddress2")}
              {renderField("Convention Amount (€)", "conventionAmount")}
            </AccordionContent>
          </AccordionItem>

          {/* Account Section */}
          <AccordionItem value="account" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              📊 Account Status
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Balance Date 1", "soldeDate1")}
              {renderField("Balance Amount 1 (€)", "soldeAmount1")}
              {renderField("Balance Date 2", "soldeDate2")}
              {renderField("Balance Amount 2 (€)", "soldeAmount2")}
              {renderField("Due Amount (€)", "echeanceAmount")}
              {renderField("Balance After Due (€)", "soldeApresEcheance")}
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
                  id="qrcode-upload"
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

          {/* TIP Section */}
          <AccordionItem value="tip" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              🏦 Bank Information
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("IBAN", "iban")}
              {renderField("ICS", "ics")}
              {renderField("RUM", "rum")}
              {renderField("Landlord SIREN", "sirenBailleur")}
            </AccordionContent>
          </AccordionItem>

          {/* Contact Section */}
          <AccordionItem value="contact" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              📞 Contact
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Customer Service", "serviceClient")}
              {renderField("Hours", "serviceHours")}
              {renderField("Web Space", "webspace")}
            </AccordionContent>
          </AccordionItem>

          {/* Barcode Section */}
          <AccordionItem value="barcode" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              📊 Barcode
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Line 1", "barcodeText1")}
              {renderField("Line 2", "barcodeText2")}
              {renderField("Line 3", "barcodeText3")}
              {renderField("Line 4", "barcodeText4")}
            </AccordionContent>
          </AccordionItem>

             {/* footer befor Section */}
          <AccordionItem value="barcode" className="border rounded-lg px-3">
            <AccordionTrigger className="text-sm font-semibold py-3">
              🗺️ Fotter Before
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              {renderField("Company Name", "footerCompanyName")}
              {renderField("Address", "footerAddress")}
              {renderField("Legal Form", "footerLegalForm")}
              {renderField("Capital", "footerCapital")}
              {renderField("Reffer CS", "RefferCS")}
              {renderField("Reffer Address", "RefferAddress")}
            </AccordionContent>
          </AccordionItem>


        </Accordion>
      </div>
    </ScrollArea>
  );
};

export default TemplateEditor;
