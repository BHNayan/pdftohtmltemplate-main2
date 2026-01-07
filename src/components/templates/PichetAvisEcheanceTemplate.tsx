import { forwardRef } from "react";
import { PichetAvisEcheanceData } from "@/types/template";
import { QRCodeSVG } from "qrcode.react";

interface PichetAvisEcheanceTemplateProps {
  data: PichetAvisEcheanceData;
}

const PichetAvisEcheanceTemplate = forwardRef<HTMLDivElement, PichetAvisEcheanceTemplateProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white shadow-lg mx-auto"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "8mm 10mm",
          fontFamily: "Arial, sans-serif",
          fontSize: "9px",
          lineHeight: "1.3",
          color: "#000",
        }}
      >
        {/* Header Section */}
        <div className="flex justify-between items-start mb-4">
          {/* Left - Logo and Agency Info */}
          <div className="flex items-start gap-4">
            {data.logoUrl ? (
              <img src={data.logoUrl} alt="Logo" className="h-12 object-contain" />
            ) : (
              <div 
                className="flex items-center justify-center"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#1a365d",
                  letterSpacing: "-1px",
                }}
              >
                <span style={{ color: "#c8102e" }}>P</span>ICHET
              </div>
            )}
            <div className="text-xs">
              <div className="font-bold text-sm" style={{ color: "#1a365d" }}>{data.agencyName}</div>
              <div>{data.agencyAddress}</div>
              <div>{data.agencyCity}</div>
            </div>
          </div>
        </div>

        {/* Company Legal Info */}
        <div className="text-[7px] leading-tight mb-4 border-b pb-2" style={{ color: "#666" }}>
          <div>{data.companyName}</div>
          <div className="flex justify-between">
            <span>{data.companyPhone} Service gratuit + prix appel</span>
          </div>
          <div>Siège social : {data.companySiege}</div>
          <div>RCS {data.companyRCS} - TVA intracommunautaire : {data.companyTVA} - Code APE {data.companyAPE}</div>
          <div className="mt-1">Nos conseillers du Service Relation Clients sont à votre disposition</div>
          <div>Carte professionnelle ({data.companyCartePro}) délivrée par la CCI de BORDEAUX</div>
          <div>Responsabilité Civile Professionnelle délivrée par {data.companyRC}</div>
          <div>Conformément à la loi « informatique et liberté » du 06/01/1978, vous disposez d'un droit d'accès et de rectifications aux informations vous concernant en vous adressant à : {data.companyEmail}</div>
          <div className="mt-1">Espace client : <span style={{ color: "#0066cc" }}>{data.espaceClient}</span></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column - Document Title and Property Info */}
          <div>
            <h1 
              className="text-xl font-bold mb-4"
              style={{ 
                color: "#c8102e",
                borderBottom: "2px solid #c8102e",
                paddingBottom: "4px",
              }}
            >
              AVIS D'ECHEANCE
            </h1>
            
            <div className="mb-4">
              <div className="font-bold text-xs mb-1">Adresse du bien loué</div>
              <div className="text-xs">{data.propertyDescription}</div>
              <div className="text-xs">{data.propertyAddress1}</div>
              <div className="text-xs">{data.propertyAddress2}</div>
            </div>

            {/* Tenant Address Block */}
            <div className="border p-3 mt-6 bg-gray-50">
              <div className="font-bold">{data.tenantName}</div>
              <div>{data.tenantAddress1}</div>
              <div>{data.tenantAddress2}</div>
              <div>{data.tenantCity}</div>
            </div>
          </div>

          {/* Right Column - Contact and Info */}
          <div className="text-xs">
            <div className="mb-3">
              <div><strong>Assistante :</strong> {data.assistantName} / {data.assistantPhone}</div>
              <div style={{ color: "#0066cc" }}>{data.assistantEmail}</div>
            </div>
            <div className="mb-3">
              <div><strong>Comptable :</strong> {data.comptableName} / {data.comptablePhone}</div>
              <div><strong>Compte Web :</strong> <span style={{ color: "#0066cc" }}>{data.comptableEmail}</span></div>
            </div>
            <div className="mb-4 text-right">
              <div>Pessac, le {data.documentDate}</div>
            </div>
            <div className="mb-2">
              <strong>Locataire(s) :</strong> {data.tenantName}
            </div>
            
            {/* Info Box */}
            <div 
              className="p-2 mb-4 text-[8px]"
              style={{ 
                backgroundColor: "#e8f4f8",
                border: "1px solid #b8d4e3",
              }}
            >
              <div className="font-bold mb-1" style={{ color: "#0066cc" }}>Informations</div>
              <div>Pour toute question concernant votre compte, n'hésitez pas à contacter votre gestionnaire.</div>
            </div>
          </div>
        </div>

        {/* Quittance Section */}
        <div className="mt-4">
          <h2 
            className="font-bold text-sm mb-2 p-2"
            style={{ 
              backgroundColor: "#1a365d",
              color: "white",
            }}
          >
            QUITTANCE DE LOYER
          </h2>
          <div className="text-xs mb-2">
            QUITTANCE POUR LA PERIODE DU {data.quittancePeriodStart} AU {data.quittancePeriodEnd}
          </div>
          
          <table className="w-full text-xs border-collapse mb-4">
            <tbody>
              <tr className="border-b">
                <td className="py-1 border-r px-2" style={{ backgroundColor: "#f5f5f5" }}>
                  du {data.quittancePeriodStart} au {data.quittancePeriodEnd} / Avance / Mens
                </td>
                <td className="py-1 px-2">Loyer</td>
                <td className="py-1 px-2 text-right font-bold">{data.quittanceLoyer}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 border-r px-2" style={{ backgroundColor: "#f5f5f5" }}></td>
                <td className="py-1 px-2">Provision sur charges (HP)</td>
                <td className="py-1 px-2 text-right">{data.quittanceProvisionCharges}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 border-r px-2" style={{ backgroundColor: "#f5f5f5" }}></td>
                <td className="py-1 px-2">Provision sur T.O.M. (HP)</td>
                <td className="py-1 px-2 text-right">{data.quittanceProvisionTOM}</td>
              </tr>
              <tr style={{ backgroundColor: "#e8f4f8" }}>
                <td className="py-1 border-r px-2"></td>
                <td className="py-1 px-2 font-bold">TOTAL de la période</td>
                <td className="py-1 px-2 text-right font-bold">{data.quittanceTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Avis d'Échéance Section */}
        <div className="mt-4">
          <h2 
            className="font-bold text-sm mb-2 p-2"
            style={{ 
              backgroundColor: "#c8102e",
              color: "white",
            }}
          >
            AVIS D'ECHEANCE
          </h2>
          <div className="text-xs mb-2">
            AVIS D'ECHEANCE du {data.avisPeriodStart} au {data.avisPeriodEnd}
          </div>
          
          <table className="w-full text-xs border-collapse mb-4">
            <tbody>
              <tr className="border-b">
                <td className="py-1 border-r px-2" style={{ backgroundColor: "#f5f5f5" }} rowSpan={7}>
                  du {data.avisPeriodStart} au {data.avisPeriodEnd} / Avance / Mens
                </td>
                <td className="py-1 px-2">{data.soldeAnterieurDate} {data.soldeAnterieurLabel}</td>
                <td className="py-1 px-2 text-right">{data.soldeAnterieurAmount}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 px-2">{data.paiementDate} {data.paiementLabel}</td>
                <td className="py-1 px-2 text-right" style={{ color: "#c8102e" }}>-{data.paiementAmount}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 px-2">Loyer</td>
                <td className="py-1 px-2 text-right font-bold">{data.avisLoyer}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 px-2">Solde de charges 2020</td>
                <td className="py-1 px-2 text-right">{data.avisSoldeCharges}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 px-2">Régularisation eau 2020</td>
                <td className="py-1 px-2 text-right">{data.avisRegularisationEau}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 px-2">Provision sur charges (HP)</td>
                <td className="py-1 px-2 text-right">{data.avisProvisionCharges}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 px-2">Provision sur T.O.M. (HP)</td>
                <td className="py-1 px-2 text-right">{data.avisProvisionTOM}</td>
              </tr>
              <tr style={{ backgroundColor: "#e8f4f8" }}>
                <td className="py-1 border-r px-2"></td>
                <td className="py-1 px-2 font-bold">TOTAL de la période</td>
                <td className="py-1 px-2 text-right font-bold">{data.avisTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Montant Net à Payer */}
        <div 
          className="flex justify-between items-center p-3 mb-4"
          style={{ 
            backgroundColor: "#c8102e",
            color: "white",
          }}
        >
          <div className="font-bold text-lg">MONTANT NET A PAYER</div>
          <div className="text-right">
            <div className="font-bold text-2xl">{data.montantNetAPayer}</div>
            <div className="text-xs">Exigible le : {data.dateExigible}</div>
          </div>
        </div>

        {/* Footer with QR Code and Bank Info */}
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-start">
            {/* Logo repeat */}
            <div 
              className="flex items-center"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#1a365d",
              }}
            >
              <span style={{ color: "#c8102e" }}>P</span>ICHET
            </div>
            
            {/* Prélèvement Info */}
            <div className="text-xs flex-1 mx-6">
              <div className="font-bold mb-2" style={{ color: "#c8102e" }}>
                Prélèvement effectué le {data.prelevementDate} sur le compte indiqué ci-dessous
              </div>
              <div className="text-[8px] mb-2">Pour un règlement rapide, simple et sécurisé</div>
              <div className="mb-2">
                <strong>Montant prélevé :</strong> {data.montantPreleve} Euros.
              </div>
              <div className="grid grid-cols-2 gap-x-4 text-[8px]">
                <div><strong>ICS :</strong> {data.ics}</div>
                <div><strong>RUM :</strong> {data.rum}</div>
                <div><strong>IBAN :</strong> {data.iban}</div>
                <div><strong>BIC :</strong> {data.bic}</div>
              </div>
              <div className="mt-1 text-[8px]">
                <strong>Titulaire du compte :</strong> {data.titulaireCo}
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center">
              {data.qrCodeImage ? (
                <img src={data.qrCodeImage} alt="QR Code" className="w-20 h-20" />
              ) : data.qrCodeUrl ? (
                <QRCodeSVG value={data.qrCodeUrl} size={80} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PichetAvisEcheanceTemplate.displayName = "PichetAvisEcheanceTemplate";

export default PichetAvisEcheanceTemplate;
