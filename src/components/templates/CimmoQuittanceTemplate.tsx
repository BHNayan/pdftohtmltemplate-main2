import { forwardRef } from "react";
import { CimmoQuittanceData } from "@/types/template";
import { QRCodeSVG } from "qrcode.react";

interface CimmoQuittanceTemplateProps {
  data: CimmoQuittanceData;
}

const CimmoQuittanceTemplate = forwardRef<HTMLDivElement, CimmoQuittanceTemplateProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white shadow-lg mx-auto"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "10mm 15mm",
          fontFamily: "Arial, sans-serif",
          fontSize: "10px",
          lineHeight: "1.4",
          color: "#333",
        }}
      >
        {/* Header with Logo */}
        <div className="flex justify-center mb-6">
          {data.logoUrl ? (
            <img src={data.logoUrl} alt="Logo" className="h-16 object-contain" />
          ) : (
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                {/* C'immo Logo */}
                <div className="flex items-center">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <rect x="2" y="8" width="12" height="24" fill="#009688" rx="2"/>
                    <rect x="16" y="4" width="12" height="28" fill="#8BC34A" rx="2"/>
                    <rect x="30" y="12" width="8" height="20" fill="#CDDC39" rx="2"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[32px] font-light" style={{ color: "#009688" }}>C'</span>
                  <span className="text-[32px] font-bold" style={{ color: "#009688" }}>immo</span>
                </div>
              </div>
              <div className="text-[11px] mt-1" style={{ color: "#009688" }}>
                Location - Gestion - Transaction
              </div>
            </div>
          )}
        </div>

        {/* Appel Loyer Header */}
        <div 
          className="text-center py-2 mb-4"
          style={{ 
            backgroundColor: "#009688",
            color: "white",
            fontWeight: "bold",
            fontSize: "12px"
          }}
        >
          Appel Loyer
        </div>

        {/* Two Column - Tenant Info */}
        <div className="flex justify-between mb-4">
          {/* Left - Property Reference */}
          <div className="text-[9px]">
            <div><span className="font-bold">Locataires :</span> {data.locataireName}</div>
            <div className="mt-2">
              <span className="font-bold">Référence du bien :</span> {data.referenceBien}
            </div>
            <div>{data.propertyAddress1}</div>
            <div>{data.propertyCity}</div>
          </div>

          {/* Right - Recipient Address */}
          <div className="text-right text-[10px]">
            <div className="font-bold">{data.recipientName}</div>
            <div>{data.recipientAddress}</div>
            <div>{data.recipientCity}</div>
            <div>{data.recipientCountry}</div>
          </div>
        </div>

        {/* Date and Location */}
        <div className="text-right text-[10px] mb-4">
          {data.documentLocation}, le {data.documentDate}
        </div>

        {/* Salutation */}
        <div className="text-[10px] mb-4">
          {data.salutation}
        </div>

        {/* Quittance de loyer Section */}
        <div className="mb-4">
          <div className="flex">
            {/* Left Header */}
            <div 
              className="py-2 px-4 font-bold text-[10px]"
              style={{ 
                backgroundColor: "#009688",
                color: "white",
                width: "180px"
              }}
            >
              Quittance de loyer
            </div>
            {/* Right Description */}
            <div 
              className="py-2 px-3 text-[8px] flex-1"
              style={{ 
                backgroundColor: "#e0f2f1",
                color: "#333"
              }}
            >
              {data.quittanceDescription}
            </div>
          </div>
          
          {/* Quittance Table Header */}
          <div 
            className="flex text-[9px] font-bold py-1"
            style={{ 
              backgroundColor: "#b2dfdb",
              borderBottom: "1px solid #009688"
            }}
          >
            <div className="flex-1 px-2">Libellé</div>
            <div className="text-right px-2" style={{ width: "100px" }}>Montant</div>
          </div>

          {/* Quittance Items */}
          <div className="text-[9px]">
            <div className="flex py-1 border-b border-gray-200" style={{ color: "#009688" }}>
              <div className="flex-1 px-2">
                <span className="font-bold">Loyer {data.quittanceMonth1}</span> {data.quittanceYear1}
              </div>
              <div className="text-right px-2" style={{ width: "100px" }}>{data.quittanceLoyer1} €</div>
            </div>
            <div className="flex py-1 border-b border-gray-200" style={{ color: "#009688" }}>
              <div className="flex-1 px-2">
                <span className="font-bold">Provisions pour charges {data.quittanceMonth1}</span> {data.quittanceYear1}
              </div>
              <div className="text-right px-2" style={{ width: "100px" }}>{data.quittanceCharges1} €</div>
            </div>
          </div>

          {/* Quittance Total */}
          <div 
            className="flex py-1 text-[9px] font-bold"
            style={{ backgroundColor: "#e0f2f1" }}
          >
            <div className="flex-1 px-2 text-right">TOTAL</div>
            <div className="text-right px-2" style={{ width: "100px" }}>{data.quittanceTotal1} €</div>
          </div>
        </div>

        {/* Appel Loyer Section */}
        <div className="mb-4">
          <div className="flex">
            {/* Left Header */}
            <div 
              className="py-2 px-4 font-bold text-[10px]"
              style={{ 
                backgroundColor: "#009688",
                color: "white",
                width: "180px"
              }}
            >
              Appel Loyer
            </div>
            {/* Right Description */}
            <div 
              className="py-2 px-3 text-[8px] flex-1"
              style={{ 
                backgroundColor: "#e0f2f1",
                color: "#333"
              }}
            >
              {data.appelLoyerDescription}
            </div>
          </div>
          
          {/* Appel Loyer Table Header */}
          <div 
            className="flex text-[9px] font-bold py-1"
            style={{ 
              backgroundColor: "#b2dfdb",
              borderBottom: "1px solid #009688"
            }}
          >
            <div className="flex-1 px-2">Libellé</div>
            <div className="text-right px-2" style={{ width: "100px" }}>Montant</div>
          </div>

          {/* Appel Loyer Items */}
          <div className="text-[9px]">
            <div className="flex py-1 border-b border-gray-200" style={{ color: "#009688" }}>
              <div className="flex-1 px-2">
                <span className="font-bold">Loyer {data.appelMonth}</span> {data.appelYear}
              </div>
              <div className="text-right px-2" style={{ width: "100px" }}>{data.appelLoyer} €</div>
            </div>
            <div className="flex py-1 border-b border-gray-200" style={{ color: "#009688" }}>
              <div className="flex-1 px-2">
                <span className="font-bold">Provisions pour charges {data.appelMonth}</span> {data.appelYear}
              </div>
              <div className="text-right px-2" style={{ width: "100px" }}>{data.appelCharges} €</div>
            </div>
          </div>

          {/* Appel Loyer Total */}
          <div 
            className="flex py-1 text-[9px] font-bold"
            style={{ backgroundColor: "#e0f2f1" }}
          >
            <div className="flex-1 px-2 text-right">TOTAL DE L'ECHEANCE</div>
            <div className="text-right px-2" style={{ width: "100px" }}>{data.appelTotal} €</div>
          </div>
        </div>

        {/* Modalité de règlement */}
        <div className="text-[9px] mb-4">
          <div className="font-bold mb-1">MODALITE DE REGLEMENT :</div>
          <div>Prélèvement au {data.prelevementDate} : {data.prelevementAmount} €</div>
          <div>{data.prelevementIBAN} {data.prelevementName} : {data.prelevementAmount} €</div>
          <div>RUM : {data.rum}</div>
          <div className="mt-2">ICS : {data.ics}</div>
        </div>

        {/* Tear-off Section */}
        <div className="mt-8 pt-4" style={{ borderTop: "1px dashed #999" }}>
          <div className="flex justify-between">
            {/* Left - Company Info */}
            <div className="text-[8px] text-gray-500">
              <div className="text-center mb-2" style={{ color: "#009688" }}>
                Location - Gestion - Transaction
              </div>
              <div>{data.companyLegal1}</div>
              <div>{data.companyLegal2}</div>
              <div>{data.companyLegal3}</div>
            </div>

            {/* Right - Payment Slip */}
            <div 
              className="p-3 text-[8px]"
              style={{ 
                border: "1px solid #999",
                width: "200px"
              }}
            >
              <div className="flex items-start gap-2 mb-2">
                <span className="text-lg">✂</span>
                <div>
                  <div className="font-bold" style={{ color: "#d41b2c" }}>
                    Papillon à nous retourner en cas de règlement par chèque.
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div>{data.locataireName}</div>
                <div>Réf. bien : {data.referenceBien}</div>
                <div>Montant : {data.appelTotal} €</div>
                <div>{data.appelMonth} {data.appelYear}</div>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code */}
        {(data.qrCodeImage || data.qrCodeUrl) && (
          <div className="flex justify-end mt-3">
            {data.qrCodeImage ? (
              <img src={data.qrCodeImage} alt="QR Code" className="w-16 h-16" />
            ) : data.qrCodeUrl ? (
              <QRCodeSVG value={data.qrCodeUrl} size={64} />
            ) : null}
          </div>
        )}
      </div>
    );
  }
);

CimmoQuittanceTemplate.displayName = "CimmoQuittanceTemplate";

export default CimmoQuittanceTemplate;
