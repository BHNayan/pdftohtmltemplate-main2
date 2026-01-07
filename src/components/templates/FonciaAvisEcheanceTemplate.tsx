import { forwardRef } from "react";
import { FonciaAvisEcheanceData } from "@/types/template";
import { QRCodeSVG } from "qrcode.react";

interface FonciaAvisEcheanceTemplateProps {
  data: FonciaAvisEcheanceData;
}

const FonciaAvisEcheanceTemplate = forwardRef<HTMLDivElement, FonciaAvisEcheanceTemplateProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white shadow-lg mx-auto relative"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "0",
          fontFamily: "Arial, sans-serif",
          fontSize: "9px",
          lineHeight: "1.3",
          color: "#000",
        }}
      >
        {/* Orange Header Bar */}
        <div 
          style={{ 
            backgroundColor: "#f7941d",
            height: "8mm",
            width: "100%",
          }} 
        />

        {/* Blue vertical text on the right edge */}
        <div
          style={{
            position: "absolute",
            right: "2mm",
            top: "20mm",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            color: "#00529b",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          www.foncia.com
        </div>

        <div style={{ padding: "4mm 10mm 6mm 8mm" }}>
          {/* Header Section */}
          <div className="flex justify-between items-start mb-4">
            {/* Left - Foncia Logo */}
            <div className="flex-shrink-0">
              {data.logoUrl ? (
                <img src={data.logoUrl} alt="Logo" className="h-16 object-contain" />
              ) : (
                <div className="flex flex-col">
                  {/* Multi-colored house icon representation */}
                  <div className="flex items-end gap-0.5 mb-1">
                    <div style={{ width: "12px", height: "20px", backgroundColor: "#00a651" }} />
                    <div style={{ width: "12px", height: "28px", backgroundColor: "#f7941d" }} />
                    <div style={{ width: "12px", height: "24px", backgroundColor: "#00529b" }} />
                    <div style={{ width: "12px", height: "16px", backgroundColor: "#8dc63f" }} />
                    <div style={{ width: "12px", height: "20px", backgroundColor: "#fbb040" }} />
                    <div style={{ width: "12px", height: "14px", backgroundColor: "#29abe2" }} />
                  </div>
                  <div 
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "#00529b",
                      letterSpacing: "-1px",
                    }}
                  >
                    FONCIA
                  </div>
                  <div 
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#00529b",
                      letterSpacing: "3px",
                    }}
                  >
                    AZUR
                  </div>
                </div>
              )}
            </div>

            {/* Right - Agency Info */}
            <div className="text-right text-[9px]">
              <div className="font-bold" style={{ color: "#00529b" }}>{data.agencyAddress1}</div>
              <div>{data.agencyAddress2}</div>
              <div style={{ color: "#f7941d", fontWeight: "bold" }}>Tél : {data.agencyPhone}</div>
              <div>Fax : {data.agencyFax}</div>
              <div style={{ color: "#00529b" }}>{data.agencyEmail}</div>
            </div>
          </div>

          {/* Document Date and Ref Line with orange underline */}
          <div 
            className="text-[10px] mb-4"
            style={{ 
              borderBottom: "2px solid #f7941d",
              paddingBottom: "2mm",
            }}
          >
            <span>{data.documentDate}</span>
            <span className="mx-4">/</span>
            <span>{data.documentRef}</span>
          </div>

          {/* Property Address and Tenant Block */}
          <div className="flex justify-between mb-4">
            {/* Left - Property Address */}
            <div className="text-[9px]">
              <div 
                className="font-bold mb-1 pb-1" 
                style={{ 
                  borderBottom: "1px solid #f7941d",
                  color: "#000",
                }}
              >
                Adresse de l'immeuble donné à bail
              </div>
              <div className="font-bold">{data.propertyName}</div>
              <div>{data.propertyAddress1}</div>
              <div>{data.propertyAddress2}</div>
            </div>

            {/* Right - Tenant Address */}
            <div className="text-[9px]" style={{ width: "45%" }}>
              <div className="font-bold">{data.tenantName}</div>
              <div>{data.tenantAddress1}</div>
              <div>{data.tenantAddress2}</div>
              <div className="mt-2 font-bold">{data.propertyAddress1}</div>
              <div>{data.propertyAddress2}</div>
            </div>
          </div>

          {/* Staff Info Section */}
          <div 
            className="p-2 mb-3 text-[8px]"
            style={{ 
              border: "1px solid #ccc",
            }}
          >
            <div className="font-bold mb-1" style={{ color: "#00529b" }}>Les interlocuteurs à votre service</div>
            <div className="flex justify-between">
              <div>
                <span className="font-bold">Gestionnaire :</span> {data.gestionnaireName} <span className="ml-4">{data.gestionnairePhone}</span>
              </div>
              <div>
                <span className="font-bold">Référence :</span> {data.reference}
              </div>
              <div>Page N° 1/1</div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-bold">Comptable :</span> {data.comptableName} <span className="ml-4">{data.comptablePhone}</span>
              </div>
              <div>
                <span className="font-bold">TVA Intra. :</span> {data.tvaIntra}
              </div>
            </div>
          </div>

          {/* Lot Info Table with Espace Client */}
          <div className="flex gap-2 mb-4">
            {/* Left - Lot table */}
            <table className="text-[8px] border-collapse" style={{ border: "1px solid #f7941d", flex: "1" }}>
              <thead>
                <tr style={{ backgroundColor: "#f7941d", color: "white" }}>
                  <th className="border border-gray-300 p-1 text-left">N° Lot</th>
                  <th className="border border-gray-300 p-1 text-left">Ent.</th>
                  <th className="border border-gray-300 p-1 text-left">Esc.</th>
                  <th className="border border-gray-300 p-1 text-left">Et.</th>
                  <th className="border border-gray-300 p-1 text-left">Porte</th>
                  <th className="border border-gray-300 p-1 text-left">Type de lot</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-1">{data.lotNumber}</td>
                  <td className="border border-gray-300 p-1">{data.entree}</td>
                  <td className="border border-gray-300 p-1">{data.escalier}</td>
                  <td className="border border-gray-300 p-1">{data.etage}</td>
                  <td className="border border-gray-300 p-1">{data.porte}</td>
                  <td className="border border-gray-300 p-1">{data.typeLot}</td>
                </tr>
                {data.lot2Number && (
                  <tr>
                    <td className="border border-gray-300 p-1">{data.lot2Number}</td>
                    <td className="border border-gray-300 p-1">{data.lot2Entree}</td>
                    <td className="border border-gray-300 p-1">{data.lot2Escalier}</td>
                    <td className="border border-gray-300 p-1">{data.lot2Etage}</td>
                    <td className="border border-gray-300 p-1">{data.lot2Porte}</td>
                    <td className="border border-gray-300 p-1">{data.lot2Type}</td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Right - Espace Client box */}
            <div 
              className="text-[8px] p-2"
              style={{ 
                border: "2px solid #00a651",
                width: "100px",
              }}
            >
              <div className="font-bold mb-1" style={{ color: "#00a651" }}>ESPACE CLIENT</div>
              <div style={{ color: "#00a651", fontSize: "7px" }}>Pour vous identifier</div>
              <div className="mt-1">
                <div style={{ fontSize: "7px" }}>Votre identifiant</div>
                <div className="font-bold" style={{ backgroundColor: "#ffffa0", padding: "1px 2px" }}>{data.clientId}</div>
              </div>
              <div className="mt-1">
                <div style={{ fontSize: "7px" }}>Votre mot de passe</div>
                <div style={{ backgroundColor: "#f0f0f0", padding: "1px 2px", fontSize: "7px" }}>{data.clientPassword}</div>
              </div>
            </div>
          </div>

          {/* Main Content Grid - Quittance Left, Tables Right */}
          <div className="flex gap-4">
            {/* Left Column - Quittance and Avis text */}
            <div style={{ width: "40%" }}>
              {/* Quittance Section */}
              <div className="mb-4">
                <h2 
                  className="font-bold text-[12px] p-1"
                  style={{ 
                    backgroundColor: "#f7941d",
                    color: "white",
                  }}
                >
                  QUITTANCE DE LOYER
                </h2>
                <div className="text-[10px] font-bold mt-1">ou Indemnité d'Occupation</div>
                <div className="text-[8px] mt-2">
                  du {data.quittancePeriodStart} au {data.quittancePeriodEnd} {data.quittancePaymentType}
                </div>
                <div className="text-[7px] mt-2 text-justify" style={{ lineHeight: "1.4" }}>
                  Dont quittance, sans préjudice du terme en cours, sous réserve de tous suppléments pouvant être dus en vertu des lois ou conventions applicables et sous réserve de tous les droits et actions du propriétaire, de toutes poursuites qui auraient pu être engagées et de toutes décisions de justice qui auraient pu être obtenues.
                </div>
                <div className="text-[7px] mt-1 text-justify" style={{ lineHeight: "1.4" }}>
                  En cas de congé précédemment donné, cette quittance représenterait l'indemnité d'occupation et ne saurait être considérée comme un titre de location.
                </div>
                <div className="text-[7px] mt-1 text-justify" style={{ lineHeight: "1.4" }}>
                  Cette quittance annule tous les reçus qui auraient pu être donnés pour acompte versé sur le présent terme, même si ces reçus portent une date postérieure à la date ci-contre. Le paiement de la présente quittance n'emporte pas présomption de paiement des termes antérieurs.
                </div>
              </div>

              {/* Avis d'Échéance Section */}
              <div>
                <h2 
                  className="font-bold text-[12px] p-1"
                  style={{ 
                    backgroundColor: "#f7941d",
                    color: "white",
                  }}
                >
                  AVIS D'ECHEANCE
                </h2>
                <div className="text-[8px] mt-2">
                  du {data.avisPeriodStart} au {data.avisPeriodEnd} {data.quittancePaymentType}
                </div>
                <div className="text-[7px] mt-2 text-justify" style={{ lineHeight: "1.4" }}>
                  Nous avons l'honneur de vous informer que vous êtes redevable du montant de la somme détaillée ci-contre que nous vous invitons à régler dès réception du présent avis.
                </div>
                <div className="text-[7px] mt-2 font-bold">
                  Cet avis est une demande de paiement.
                </div>
                <div className="text-[7px] mt-1">
                  Il ne peut en aucun cas servir de reçu ou de quittance de loyer.
                </div>
              </div>
            </div>

            {/* Right Column - Tables */}
            <div style={{ width: "60%" }}>
              {/* Quittance Table */}
              <table className="w-full text-[8px] border-collapse mb-3" style={{ border: "1px solid #ccc" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f0f0f0" }}>
                    <th className="border border-gray-300 p-1 text-left font-bold" style={{ color: "#00529b" }}>Quittance</th>
                    <th className="border border-gray-300 p-1 text-right font-bold" style={{ color: "#00529b" }}>Débit</th>
                    <th className="border border-gray-300 p-1 text-right font-bold" style={{ color: "#00529b" }}>Crédit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-1">LOYER PRINCIPAL</td>
                    <td className="border border-gray-300 p-1 text-right"></td>
                    <td className="border border-gray-300 p-1 text-right">{data.quittanceLoyerPrincipal}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1">PROVISION CHARGES</td>
                    <td className="border border-gray-300 p-1 text-right"></td>
                    <td className="border border-gray-300 p-1 text-right">{data.quittanceProvisionCharges}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1">ASSURANCE PRIVILEGE ABP</td>
                    <td className="border border-gray-300 p-1 text-right"></td>
                    <td className="border border-gray-300 p-1 text-right">{data.quittanceAssurance}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr style={{ backgroundColor: "#f0f0f0" }}>
                    <td className="border border-gray-300 p-1 font-bold">TOTAL de la période (Euros.)</td>
                    <td className="border border-gray-300 p-1 text-right font-bold">{data.quittanceTotal}</td>
                    <td className="border border-gray-300 p-1 text-right font-bold">{data.quittanceTotal}</td>
                  </tr>
                </tfoot>
              </table>

              {/* Relevé de compte Table */}
              <table className="w-full text-[8px] border-collapse mb-3" style={{ border: "1px solid #ccc" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f0f0f0" }}>
                    <th className="border border-gray-300 p-1 text-left font-bold" style={{ color: "#00529b" }}>Relevé de compte</th>
                    <th className="border border-gray-300 p-1 text-right font-bold" style={{ color: "#00529b" }}>Débit</th>
                    <th className="border border-gray-300 p-1 text-right font-bold" style={{ color: "#00529b" }}>Crédit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-1">{data.soldeAnterieurDate} SOLDE ANTERIEUR</td>
                    <td className="border border-gray-300 p-1 text-right">{data.soldeAnterieurAmount}</td>
                    <td className="border border-gray-300 p-1 text-right"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1">{data.paiementDate} {data.paiementLabel}</td>
                    <td className="border border-gray-300 p-1 text-right"></td>
                    <td className="border border-gray-300 p-1 text-right">{data.paiementAmount}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1 pl-6">LOYER PRINCIPAL</td>
                    <td className="border border-gray-300 p-1 text-right">{data.avisLoyerPrincipal}</td>
                    <td className="border border-gray-300 p-1 text-right"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1 pl-6">TAXES ENLEVEMENT O.M. {data.avisTaxesOMYear}</td>
                    <td className="border border-gray-300 p-1 text-right">{data.avisTaxesOM}</td>
                    <td className="border border-gray-300 p-1 text-right"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1 pl-6">ASSURANCE PRIVILEGE ABP</td>
                    <td className="border border-gray-300 p-1 text-right">{data.avisAssurance}</td>
                    <td className="border border-gray-300 p-1 text-right"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1 pl-6">PROVISION CHARGES</td>
                    <td className="border border-gray-300 p-1 text-right">{data.avisProvisionCharges}</td>
                    <td className="border border-gray-300 p-1 text-right"></td>
                  </tr>
                </tbody>
              </table>

              {/* Révision de loyer */}
              <div className="text-[8px] mb-2 p-1" style={{ border: "1px solid #ccc" }}>
                <div className="font-bold" style={{ color: "#00529b" }}>Révision de loyer</div>
                <div>Date de révision : {data.revisionDate}</div>
                <div>Rubrique {data.revisionRubrique} Montants précédents {data.revisionMontantPrecedent}</div>
              </div>

              {/* Total Avis */}
              <table className="w-full text-[8px] border-collapse" style={{ border: "1px solid #ccc" }}>
                <tbody>
                  <tr style={{ backgroundColor: "#f0f0f0" }}>
                    <td className="border border-gray-300 p-1 font-bold">TOTAL de la période du {data.avisPeriodStart} au {data.avisPeriodEnd}</td>
                    <td className="border border-gray-300 p-1 text-right font-bold">{data.avisTotal}</td>
                    <td className="border border-gray-300 p-1 text-right font-bold"></td>
                  </tr>
                  <tr style={{ backgroundColor: "#f0f0f0" }}>
                    <td className="border border-gray-300 p-1 font-bold" style={{ color: "#00529b" }}>Montant net à payer (Euros.)</td>
                    <td className="border border-gray-300 p-1 text-right font-bold" style={{ color: "#00529b" }}>{data.montantNetAPayer}</td>
                    <td className="border border-gray-300 p-1 text-right font-bold">{data.totalCredits}</td>
                    <td className="border border-gray-300 p-1 text-right font-bold">{data.totalDebits}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer with Prélèvement Info */}
          <div 
            className="mt-4"
            style={{ 
              backgroundColor: "#1a365d",
              padding: "8px 12px",
            }}
          >
            <div className="flex justify-between items-center text-white text-[9px]">
              <div className="font-bold">Prélèvement effectué sur le compte indiqué ci-dessous</div>
              <div style={{ color: "#f7941d", fontWeight: "bold" }}>Prélevé le : {data.prelevementDate}</div>
            </div>
          </div>

          {/* Prélèvement Details */}
          <div 
            className="p-3 text-[8px]"
            style={{ 
              backgroundColor: "#e8f4f8",
              borderLeft: "1px solid #ccc",
              borderRight: "1px solid #ccc",
              borderBottom: "1px solid #ccc",
            }}
          >
            <div className="font-bold mb-2">Montant prélevé : {data.montantPreleve} Euros.</div>
            <div className="flex gap-8 text-[7px]">
              <div><strong>ICS :</strong> {data.ics}</div>
              <div><strong>RUM :</strong> {data.rum}</div>
              <div><strong>BIC :</strong> {data.bic}</div>
            </div>
            <div className="mt-1 text-[7px]">
              <strong>IBAN :</strong> {data.iban}
            </div>
            <div className="mt-1 text-[7px]">
              <strong>Titulaire du compte :</strong> {data.titulaireCompte}
            </div>
          </div>

          {/* QR Code section if exists */}
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

FonciaAvisEcheanceTemplate.displayName = "FonciaAvisEcheanceTemplate";

export default FonciaAvisEcheanceTemplate;
