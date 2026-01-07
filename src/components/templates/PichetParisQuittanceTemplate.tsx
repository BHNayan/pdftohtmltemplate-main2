import { forwardRef } from "react";
import { PichetParisQuittanceData } from "@/types/template";
import { QRCodeSVG } from "qrcode.react";

interface PichetParisQuittanceTemplateProps {
  data: PichetParisQuittanceData;
}

const PichetParisQuittanceTemplate = forwardRef<HTMLDivElement, PichetParisQuittanceTemplateProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white shadow-lg mx-auto"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "5mm 10mm",
          fontFamily: "Arial, sans-serif",
          fontSize: "9px",
          lineHeight: "1.2",
          color: "#000",
        }}
      >
        {/* Header with Logo and Agency */}
        <div className="flex justify-between items-start" style={{ borderBottom: "2px solid #000", paddingBottom: "3mm", marginBottom: "2mm" }}>
          {/* Left - Logo */}
          <div className="flex items-center gap-2">
            {data.logoUrl ? (
              <img src={data.logoUrl} alt="Logo" className="h-10 object-contain" />
            ) : (
              <div className="flex items-center gap-1">
                <div className="text-[24px] text-gray-400">◎</div>
                <div 
                  className="font-bold text-[28px] tracking-wide"
                  style={{ 
                    background: "linear-gradient(90deg, #f7b500 0%, #d4a000 25%, #c41230 50%, #8b0000 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  PICHET
                </div>
              </div>
            )}
          </div>

          {/* Right - Agency Info */}
          <div className="text-right">
            <div className="text-[24px] font-light tracking-[0.15em]" style={{ fontFamily: "Times New Roman, serif" }}>
              AGENCE DE PARIS
            </div>
            <div className="text-[9px]">{data.agencyAddress}</div>
            <div className="text-[9px]">{data.agencyCity}</div>
            <div className="text-[9px]">Tél. : {data.agencyPhone}</div>
          </div>
        </div>

        {/* Company Legal Info */}
        <div className="text-[6.5px] text-gray-600 leading-tight mb-1">
          <div>{data.companyName}</div>
          <div>Siège social : {data.companySiege}</div>
          <div>{data.companyRCS} – TVA intracommunautaire : {data.companyTVA} – Code APE {data.companyAPE}</div>
          <div>{data.companyEmail}</div>
          <div>Carte professionnelle ({data.companyCartePro}) délivrée par la CCI de BORDEAUX</div>
          <div>{data.companyGarantie}</div>
          <div>{data.companyRC}</div>
        </div>

        {/* Email notice and Espace client */}
        <div className="flex justify-between items-start text-[6.5px] text-gray-500 mb-3" style={{ borderBottom: "1px solid #c41230", paddingBottom: "2mm" }}>
          <div style={{ maxWidth: "70%" }}>
            Conformément à la loi « informatique et liberté » du 06/01/1978, vous disposez d'un droit d'accès et de rectifications aux informations vous concernant en vous adressant à : <span style={{ color: "#c41230" }}>clients@pichet-adb.fr</span>
          </div>
          <div className="text-right">
            <div>{data.companyWebsite}</div>
            <div>Espace client : <span className="font-bold" style={{ color: "#00008B" }}>https://pichet.thetranet.fr</span></div>
          </div>
        </div>

        {/* AVIS D'ECHEANCE Title */}
        <div className="font-bold text-[12px] mb-2" style={{ borderBottom: "2px solid #c41230", paddingBottom: "1mm" }}>
          AVIS D'ECHEANCE
        </div>

        {/* Property and Tenant Info Row */}
        <div className="flex justify-between mb-2">
          {/* Left - Property Address */}
          <div style={{ width: "55%" }}>
            <div className="text-[8px] mb-1" style={{ borderBottom: "1px solid #c41230", display: "inline-block" }}>
              <span className="font-bold">Adresse du bien loué</span>
            </div>
            <div className="text-[9px]">{data.propertyDescription}</div>
            <div className="text-[9px]">{data.propertyAddress}</div>
          </div>

          {/* Right - Tenant with red background */}
          <div 
            className="text-[9px] p-2"
            style={{ 
              backgroundColor: "#c41230",
              color: "white",
              width: "40%",
            }}
          >
            <div className="font-bold">{data.tenantName}</div>
            <div>{data.tenantAddress1}</div>
            <div>{data.tenantAddress2}</div>
            <div>{data.tenantCity}</div>
          </div>
        </div>

        {/* Staff Info */}
        <div className="text-[8px] mb-1">
          <div className="flex">
            <span style={{ width: "60px" }}>Assistante :</span>
            <span>{data.assistantName} / {data.assistantPhone}</span>
          </div>
          <div className="flex">
            <span style={{ width: "60px" }}></span>
            <span>{data.assistantEmail}</span>
          </div>
          <div className="flex">
            <span style={{ width: "60px" }}>Comptable :</span>
            <span>{data.comptableName} / {data.comptablePhone}</span>
          </div>
          <div className="flex">
            <span style={{ width: "60px" }}></span>
            <span>{data.comptableEmail}</span>
          </div>
          <div className="flex">
            <span style={{ width: "60px" }}>Compte Web :</span>
            <span>{data.compteWeb}</span>
          </div>
          <div className="flex">
            <span style={{ width: "60px" }}>Locataire(s) :</span>
            <span>{data.tenantName}</span>
          </div>
          <div className="flex">
            <span style={{ width: "60px" }}></span>
            <span>{data.locataire2Name}</span>
          </div>
          <div className="flex">
            <span style={{ width: "60px" }}></span>
            <span>{data.locataire1Name}</span>
          </div>
        </div>

        {/* Document Date and Reference Number */}
        <div className="flex justify-between items-start mb-2">
          <div className="text-[9px]">{data.locataire1Ref}</div>
          <div className="text-[9px] font-bold">{data.documentDate}</div>
        </div>

        {/* Lot Info Table */}
        <div className="flex gap-2 mb-3">
          <table className="text-[8px] border-collapse" style={{ border: "1px solid #000", width: "45%" }}>
            <thead>
              <tr>
                <th className="border border-black p-1 text-left bg-gray-100" style={{ width: "40px" }}>N° Lot</th>
                <th className="border border-black p-1 text-left bg-gray-100">Type de lot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-1">{data.lotNumber}</td>
                <td className="border border-black p-1">{data.lotType}</td>
              </tr>
            </tbody>
          </table>

          <table className="text-[8px] border-collapse" style={{ border: "1px solid #000", width: "45%" }}>
            <tbody>
              <tr>
                <td className="border border-black p-1 bg-gray-100 font-bold" style={{ width: "120px" }}>Propriétaire</td>
                <td className="border border-black p-1">{data.proprietaire}</td>
              </tr>
              <tr>
                <td className="border border-black p-1 bg-gray-100 font-bold">References à rappeler :</td>
                <td className="border border-black p-1" style={{ color: "#c41230" }}>{data.referenceARappeler}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="flex gap-3">
          {/* Left Column - Quittance and Avis text */}
          <div style={{ width: "35%" }}>
            {/* Quittance Section */}
            <div 
              className="p-1 mb-2 text-center"
              style={{ 
                backgroundColor: "#1a365d",
                color: "white",
              }}
            >
              <div className="font-bold text-[9px]">QUITTANCE DE LOYER</div>
              <div className="text-[8px]">ou Indemnité d'Occupation</div>
            </div>

            <div className="text-[8px] mb-3">
              <div className="font-bold">du {data.quittancePeriodStart} au {data.quittancePeriodEnd} / {data.quittanceType}</div>
              <div className="mt-1 text-[7px] leading-tight text-justify">
                Dont quittance, sans préjudice du terme en cours, sous réserve de tous suppléments pouvant être dus en vertu des lois ou conventions applicables et sous réserve de tous les droits et actions du propriétaire, de toutes poursuites qui auraient pu être engagées et de toutes décisions de justice qui auraient pu être obtenues.
              </div>
              <div className="mt-1 text-[7px] leading-tight text-justify">
                En cas de congé précédemment donné, cette quittance représenterait l'indemnité d'occupation et ne saurait être considérée comme un titre de location.
              </div>
              <div className="mt-1 text-[7px] leading-tight text-justify">
                Cette quittance annule tous les reçus qui auraient pu être donnés pour acompte versé sur le présent terme, même si ces reçus portent une date postérieure à la date ci-contre. Le paiement de la présente quittance n'importe pas présomption de paiement des termes antérieurs.
              </div>
            </div>

            {/* Dashed line separator */}
            <div style={{ borderTop: "1px dashed #000", margin: "3mm 0" }}></div>

            {/* Avis Section */}
            <div 
              className="p-1 mb-2 text-center"
              style={{ 
                backgroundColor: "#1a365d",
                color: "white",
              }}
            >
              <div className="font-bold text-[9px]">AVIS D'ECHEANCE</div>
            </div>

            <div className="text-[8px]">
              <div className="font-bold">du {data.avisPeriodStart} au {data.avisPeriodEnd} / {data.avisType}</div>
              <div className="mt-1 text-[7px] leading-tight text-justify">
                Nous vous informons que vous êtes redevable du montant de la somme détaillée ci-contre que nous vous invitons à régler des réception du présent avis.
              </div>
              <div className="mt-2 text-[7px]">Cet avis est une demande de paiement.</div>
              <div className="mt-1 text-[7px] font-bold">Il ne peut en aucun cas servir de reçu ou de quittance de loyer.</div>
            </div>
          </div>

          {/* Right Column - Tables */}
          <div style={{ width: "65%" }}>
            {/* Quittance Table */}
            <table className="w-full text-[8px] border-collapse mb-2" style={{ border: "1px solid #000" }}>
              <thead>
                <tr>
                  <th 
                    colSpan={3} 
                    className="border border-black p-1 text-center"
                    style={{ backgroundColor: "#d3d3d3" }}
                  >
                    QUITTANCE POUR LA PERIODE
                    <div>DU {data.quittancePeriodStart} AU {data.quittancePeriodEnd}</div>
                  </th>
                </tr>
                <tr style={{ backgroundColor: "#f0f0f0" }}>
                  <th className="border border-black p-1 text-left"></th>
                  <th className="border border-black p-1 text-right" style={{ color: "#d4a000", width: "70px" }}>Débit</th>
                  <th className="border border-black p-1 text-right" style={{ color: "#d4a000", width: "70px" }}>Crédit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-1">Loyer</td>
                  <td className="border border-black p-1 text-right"></td>
                  <td className="border border-black p-1 text-right">{data.quittanceLoyer}</td>
                </tr>
                <tr>
                  <td className="border border-black p-1">Provision sur charges&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(HP)</td>
                  <td className="border border-black p-1 text-right"></td>
                  <td className="border border-black p-1 text-right">{data.quittanceProvisionCharges}</td>
                </tr>
                <tr>
                  <td className="border border-black p-1">Provision sur T.O.M.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(HP)</td>
                  <td className="border border-black p-1 text-right"></td>
                  <td className="border border-black p-1 text-right">{data.quittanceProvisionTOM}</td>
                </tr>
                <tr>
                  <td className="border border-black p-1" style={{ height: "30px" }}></td>
                  <td className="border border-black p-1"></td>
                  <td className="border border-black p-1"></td>
                </tr>
              </tbody>
              <tfoot>
                <tr style={{ backgroundColor: "#f0f0f0" }}>
                  <td className="border border-black p-1 text-right font-bold">TOTAL de la période</td>
                  <td className="border border-black p-1 text-right"></td>
                  <td className="border border-black p-1 text-right font-bold">{data.quittanceTotal}</td>
                </tr>
              </tfoot>
            </table>

            {/* Avis Table */}
            <table className="w-full text-[8px] border-collapse mb-2" style={{ border: "1px solid #000" }}>
              <thead>
                <tr style={{ backgroundColor: "#d3d3d3" }}>
                  <th className="border border-black p-1 text-left font-bold">AVIS D'ECHEANCE du {data.avisPeriodStart} au {data.avisPeriodEnd}</th>
                  <th className="border border-black p-1 text-right" style={{ color: "#d4a000", width: "70px" }}>Débit</th>
                  <th className="border border-black p-1 text-right" style={{ color: "#d4a000", width: "70px" }}>Crédit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-1">{data.soldeAnterieurDate} SOLDE ANTERIEUR</td>
                  <td className="border border-black p-1 text-right">{data.soldeAnterieurAmount}</td>
                  <td className="border border-black p-1 text-right"></td>
                </tr>
                <tr>
                  <td className="border border-black p-1">{data.paiementDate} {data.paiementLabel}</td>
                  <td className="border border-black p-1 text-right"></td>
                  <td className="border border-black p-1 text-right">{data.paiementAmount}</td>
                </tr>
                <tr>
                  <td className="border border-black p-1 pl-3">Loyer</td>
                  <td className="border border-black p-1 text-right">{data.avisLoyer}</td>
                  <td className="border border-black p-1 text-right"></td>
                </tr>
                <tr>
                  <td className="border border-black p-1 pl-3">Provision sur charges&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(HP)</td>
                  <td className="border border-black p-1 text-right">{data.avisProvisionCharges}</td>
                  <td className="border border-black p-1 text-right"></td>
                </tr>
                <tr>
                  <td className="border border-black p-1 pl-3">Provision sur T.O.M.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(HP)</td>
                  <td className="border border-black p-1 text-right">{data.avisProvisionTOM}</td>
                  <td className="border border-black p-1 text-right"></td>
                </tr>
                <tr>
                  <td className="border border-black p-1" style={{ height: "30px" }}></td>
                  <td className="border border-black p-1"></td>
                  <td className="border border-black p-1"></td>
                </tr>
              </tbody>
              <tfoot>
                <tr style={{ backgroundColor: "#f0f0f0" }}>
                  <td className="border border-black p-1 text-right font-bold">TOTAL de la période</td>
                  <td className="border border-black p-1 text-right"></td>
                  <td className="border border-black p-1 text-right font-bold">{data.avisTotal}</td>
                </tr>
                <tr>
                  <td className="border border-black p-1 font-bold">MONTANT NET A PAYER</td>
                  <td className="border border-black p-1 text-right font-bold">{data.montantNetAPayer}</td>
                  <td className="border border-black p-1 text-right"></td>
                </tr>
                <tr>
                  <td className="border border-black p-1">Exigible le : {data.dateExigible}</td>
                  <td className="border border-black p-1 text-right"></td>
                  <td className="border border-black p-1 text-right"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Payment Footer Section */}
        <div className="mt-3" style={{ borderTop: "1px solid #000", paddingTop: "2mm" }}>
          {/* Règlement Header */}
          <div className="flex justify-end mb-2">
            <div className="text-[8px] text-center" style={{ border: "1px solid #000", padding: "2mm 4mm" }}>
              <div className="font-bold">Règlement d'un montant total de {data.prelevementTotal} Euros</div>
              <div>selon le détail ci-dessous</div>
            </div>
          </div>

          {/* Prélèvement Section */}
          <div 
            className="text-[8px] p-2"
            style={{ 
              backgroundColor: "#1a365d",
              color: "white",
            }}
          >
            Prélèvement effectué le {data.prelevementDate}
          </div>

          {/* Payment Details Table */}
          <table className="w-full text-[8px] border-collapse" style={{ border: "1px solid #000" }}>
            <tbody>
              <tr>
                <td className="border border-black p-1" style={{ width: "25%" }}>{data.prelevement1Name}</td>
                <td className="border border-black p-1" colSpan={4}>
                  PRLV - ICS : {data.prelevement1ICS}&nbsp;&nbsp;&nbsp;&nbsp;RUM : {data.prelevement1RUM}&nbsp;&nbsp;&nbsp;&nbsp;BIC : {data.prelevement1BIC}&nbsp;&nbsp;&nbsp;&nbsp;IBAN : {data.prelevement1IBAN}
                </td>
                <td className="border border-black p-1 text-right font-bold" style={{ width: "80px" }}>{data.prelevement1Amount}</td>
              </tr>
              {data.prelevement2Name && (
                <tr>
                  <td className="border border-black p-1">{data.prelevement2Name}</td>
                  <td className="border border-black p-1" colSpan={5}></td>
                </tr>
              )}
            </tbody>
          </table>

          {/* QR Code */}
          {(data.qrCodeImage || data.qrCodeUrl) && (
            <div className="flex justify-end mt-2">
              {data.qrCodeImage ? (
                <img src={data.qrCodeImage} alt="QR Code" className="w-16 h-16" />
              ) : data.qrCodeUrl ? (
                <QRCodeSVG value={data.qrCodeUrl} size={64} />
              ) : null}
            </div>
          )}
        </div>
      </div>
    );
  }
);

PichetParisQuittanceTemplate.displayName = "PichetParisQuittanceTemplate";

export default PichetParisQuittanceTemplate;
