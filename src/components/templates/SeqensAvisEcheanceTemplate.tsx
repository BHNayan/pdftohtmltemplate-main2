import { forwardRef } from "react";
import { SeqensAvisEcheanceData } from "@/types/template";
import { QRCodeSVG } from "qrcode.react";

interface SeqensAvisEcheanceTemplateProps {
  data: SeqensAvisEcheanceData;
}

const SeqensAvisEcheanceTemplate = forwardRef<HTMLDivElement, SeqensAvisEcheanceTemplateProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white shadow-lg mx-auto"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "8mm 12mm",
          fontFamily: "Arial, sans-serif",
          fontSize: "9px",
          lineHeight: "1.3",
          color: "#1a365d",
        }}
      >
        {/* Header with Logo and Title */}
        <div className="flex justify-between items-start mb-4">
          {/* Left - Logo */}
          <div>
            {data.logoUrl ? (
              <img src={data.logoUrl} alt="Logo" className="h-14 object-contain" />
            ) : (
              <div>
                <div className="flex items-center gap-1">
                  <span 
                    className="text-[28px] font-bold"
                    style={{ color: "#d41b2c" }}
                  >
                    Seqens
                  </span>
                  <div 
                    className="flex items-center justify-center"
                    style={{ 
                      width: "32px", 
                      height: "32px",
                      position: "relative",
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32">
                      <path 
                        d="M16 4 L28 14 L28 28 L4 28 L4 14 Z" 
                        fill="none" 
                        stroke="#d41b2c" 
                        strokeWidth="2"
                      />
                      <text 
                        x="16" 
                        y="22" 
                        textAnchor="middle" 
                        fontSize="10" 
                        fontWeight="bold" 
                        fill="#1a365d"
                      >
                        AL
                      </text>
                    </svg>
                  </div>
                </div>
                <div 
                  className="w-24 h-[3px] my-1"
                  style={{ background: "linear-gradient(90deg, #d41b2c 50%, #1a365d 50%)" }}
                ></div>
                <div className="text-[10px] font-bold" style={{ color: "#1a365d" }}>
                  {data.companyGroup}
                </div>
              </div>
            )}
          </div>

          {/* Right - Document Title */}
          <div className="text-right">
            <div className="text-[14px] mb-1">
              <span className="font-bold" style={{ color: "#d41b2c" }}>AVIS D'ECHEANCE</span> 
              <span style={{ color: "#1a365d" }}> {data.documentTitle}</span>
            </div>
            <div className="text-[10px]" style={{ color: "#d41b2c" }}>Facture n° {data.factureNumber}</div>
            <div className="text-[8px] mt-1 text-gray-600 max-w-[300px]">
              Le présent avis d'échéance vaut quittance ou indemnité d'occupation des mois précédents si aucune somme ne reste due avant le terme appelé.
            </div>
          </div>
        </div>

        {/* Company Info and Reference */}
        <div className="flex justify-between mb-3">
          {/* Left - Company Legal Info */}
          <div className="text-[7px] text-gray-600" style={{ maxWidth: "45%" }}>
            <div>{data.companyAddress}</div>
            <div>{data.companyCity}</div>
            <div>{data.companyRCS}</div>
            <div>{data.companyCapital}</div>
            <div>ICS : {data.companyICS} - SIRET {data.companySIRET}</div>
            <div>{data.companyTVAI}</div>
          </div>

          {/* Right - Reference Client */}
          <div className="flex items-start gap-4">
            <div 
              className="flex items-center gap-2 px-3 py-2"
              style={{ 
                backgroundColor: "#f8f8f8", 
                border: "1px solid #ddd",
                borderRadius: "4px"
              }}
            >
              <div 
                className="flex items-center justify-center text-[14px] font-bold"
                style={{ 
                  width: "20px", 
                  height: "20px", 
                  border: "2px solid #1a365d", 
                  borderRadius: "50%",
                  color: "#1a365d"
                }}
              >
                i
              </div>
              <div>
                <div className="text-[9px] font-bold" style={{ color: "#1a365d" }}>
                  VOTRE RÉFÉRENCE CLIENT : <span style={{ color: "#d41b2c" }}>{data.referenceClient}</span>
                </div>
                <div className="text-[8px]" style={{ color: "#1a365d" }}>à rappeler pour tout contact</div>
              </div>
            </div>
            <div className="text-[10px]" style={{ color: "#1a365d" }}>{data.pageNumber}</div>
          </div>
        </div>

        {/* Date */}
        <div className="text-[10px] mb-4 text-right" style={{ marginRight: "30px" }}>
          Fait à {data.companyCity.split(' ')[1] || 'Issy-les-Moulineaux'}, le {data.factureDate}
        </div>

        {/* Two Column Layout - Addresses */}
        <div className="flex gap-8 mb-4">
          {/* Left Column - Correspondence and Residence */}
          <div style={{ width: "50%" }}>
            {/* Correspondence Address */}
            <div className="flex items-start gap-2 mb-3">
              <div className="text-[14px]" style={{ color: "#1a365d" }}>✉</div>
              <div className="text-[8px]">
                <div className="font-bold" style={{ color: "#1a365d" }}>{data.correspondenceIntro}</div>
                <div>{data.correspondenceCompany}</div>
                <div>{data.correspondenceAddress1}</div>
                <div>{data.correspondenceAddress2}</div>
                <div>Tél : {data.correspondencePhone}</div>
                <div>{data.correspondenceWebsite}</div>
              </div>
            </div>

            {/* Residence Address */}
            <div className="mb-3">
              <div className="text-[8px] font-bold" style={{ color: "#d41b2c" }}>{data.residenceLabel}</div>
              <div className="text-[8px]" style={{ color: "#d41b2c" }}>{data.residenceName}</div>
              <div className="text-[8px]" style={{ color: "#d41b2c" }}>{data.residenceAddress}</div>
              <div className="text-[8px]" style={{ color: "#d41b2c" }}>{data.residenceCity}</div>
            </div>

            {/* Direction */}
            <div>
              <div className="text-[8px] font-bold" style={{ color: "#1a365d" }}>{data.directionName}</div>
              <div className="text-[8px]">{data.directionAddress}</div>
              <div className="text-[8px]">{data.directionCity}</div>
            </div>
          </div>

          {/* Right Column - Tenant */}
          <div style={{ width: "45%" }}>
            <div className="text-[11px] font-bold" style={{ color: "#1a365d" }}>{data.tenantName}</div>
            <div className="text-[10px]" style={{ color: "#1a365d" }}>{data.tenantAddress}</div>
            <div className="text-[10px]" style={{ color: "#1a365d" }}>{data.tenantCity}</div>
          </div>
        </div>

        {/* Convention Amount */}
        <div className="text-[9px] mb-3">
          Montant du loyer maximum de la convention <span className="text-[8px] text-gray-500">(hors coefficient logement éventuel)</span> : <strong style={{ color: "#d41b2c" }}>{data.conventionAmount} €</strong>
        </div>

        {/* Main Content - Two Tables Side by Side */}
        <div className="flex gap-3">
          {/* Left Table - Détail de l'échéance */}
          <div style={{ width: "58%" }}>
            <table className="w-full text-[8px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th 
                    className="p-2 text-left text-white"
                    style={{ 
                      backgroundColor: "#1a365d",
                      borderTop: "3px solid #1a365d",
                      borderLeft: "3px solid #1a365d",
                      borderRight: "1px solid #1a365d",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      </svg>
                      <span className="font-bold">Détail de l'échéance</span>
                    </div>
                  </th>
                  <th 
                    className="p-2 text-center text-white text-[7px]"
                    style={{ 
                      backgroundColor: "#1a365d",
                      borderTop: "3px solid #1a365d",
                      width: "50px"
                    }}
                  >
                    TVA<br/>en €
                  </th>
                  <th 
                    className="p-2 text-center text-white text-[7px]"
                    style={{ 
                      backgroundColor: "#1a365d",
                      borderTop: "3px solid #1a365d",
                      borderRight: "3px solid #1a365d",
                      width: "65px"
                    }}
                  >
                    Montant<br/>TTC en €
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Appartement Section Header */}
                <tr>
                  <td 
                    colSpan={3} 
                    className="px-2 py-1 font-bold"
                    style={{ 
                      color: "#1a365d",
                      borderLeft: "3px solid #1a365d",
                      borderRight: "3px solid #1a365d",
                    }}
                  >
                    Appart. N°{data.appartNumber} du {data.appartPeriodStart} au {data.appartPeriodEnd}
                  </td>
                </tr>
                {/* Charge Rows */}
                <tr>
                  <td className="px-2 py-0.5" style={{ color: "#1a365d", borderLeft: "3px solid #1a365d" }}>Loyer conventionné</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right" style={{ borderRight: "3px solid #1a365d" }}>{data.loyerConventionne} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5" style={{ color: "#1a365d", borderLeft: "3px solid #1a365d" }}>RLS CAF</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right" style={{ borderRight: "3px solid #1a365d" }}>- {data.rlsCAF} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5" style={{ color: "#1a365d", borderLeft: "3px solid #1a365d" }}>Aide pers. logement</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right" style={{ borderRight: "3px solid #1a365d" }}>- {data.aidePersonnelleLogement} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5" style={{ color: "#1a365d", borderLeft: "3px solid #1a365d" }}>Prov.Charges Ascenseur</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right" style={{ borderRight: "3px solid #1a365d" }}>{data.provChargesAscenseur} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5" style={{ color: "#1a365d", borderLeft: "3px solid #1a365d" }}>Prov.Charges Chauffage</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right" style={{ borderRight: "3px solid #1a365d" }}>{data.provChargesChauffage} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5" style={{ color: "#1a365d", borderLeft: "3px solid #1a365d" }}>Prov.Charges Locatives</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right" style={{ borderRight: "3px solid #1a365d" }}>{data.provChargesLocatives} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5" style={{ color: "#1a365d", borderLeft: "3px solid #1a365d" }}>Prov.Eau chaude</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right" style={{ borderRight: "3px solid #1a365d" }}>{data.provEauChaude} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5" style={{ color: "#1a365d", borderLeft: "3px solid #1a365d" }}>Prov.Eau froide</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right" style={{ borderRight: "3px solid #1a365d" }}>{data.provEauFroide} €</td>
                </tr>

                {/* Stationnement Section */}
                {data.stationnementNumber && (
                  <>
                    <tr>
                      <td 
                        colSpan={3} 
                        className="px-2 py-1 font-bold pt-2"
                        style={{ 
                          color: "#1a365d",
                          borderLeft: "3px solid #1a365d",
                          borderRight: "3px solid #1a365d",
                        }}
                      >
                        Stationn. N°{data.stationnementNumber} du {data.stationnementPeriodStart} au {data.stationnementPeriodEnd}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-0.5" style={{ color: "#1a365d", borderLeft: "3px solid #1a365d", borderBottom: "3px solid #1a365d" }}>Loyer stationnement</td>
                      <td className="px-2 py-0.5 text-right" style={{ borderBottom: "3px solid #1a365d" }}></td>
                      <td className="px-2 py-0.5 text-right" style={{ borderRight: "3px solid #1a365d", borderBottom: "3px solid #1a365d" }}>{data.loyerStationnement} €</td>
                    </tr>
                  </>
                )}

                {!data.stationnementNumber && (
                  <tr>
                    <td style={{ borderLeft: "3px solid #1a365d", borderBottom: "3px solid #1a365d" }}>&nbsp;</td>
                    <td style={{ borderBottom: "3px solid #1a365d" }}></td>
                    <td style={{ borderRight: "3px solid #1a365d", borderBottom: "3px solid #1a365d" }}></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Right Table - Account Summary */}
          <div style={{ width: "42%" }}>
            <table className="w-full text-[8px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th 
                    className="p-2 text-left text-white"
                    style={{ 
                      backgroundColor: "#1a365d",
                      borderTop: "3px solid #1a365d",
                      borderLeft: "3px solid #1a365d",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <path d="M8 12h8M12 8v8"/>
                      </svg>
                      <span className="font-bold text-[7px]">Dernières écritures<br/>sur votre compte locataire</span>
                    </div>
                  </th>
                  <th 
                    className="p-2 text-center text-white text-[7px]"
                    style={{ 
                      backgroundColor: "#1a365d",
                      borderTop: "3px solid #1a365d",
                      borderRight: "3px solid #1a365d",
                      width: "70px"
                    }}
                  >
                    Montant<br/>TTC en €
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td 
                    className="px-2 py-1"
                    style={{ 
                      color: "#1a365d",
                      borderLeft: "3px solid #1a365d",
                    }}
                  >
                    <span className="font-bold">{data.soldeFaveurDate}</span> <span style={{ color: "#d41b2c" }}>Solde en notre faveur</span>
                  </td>
                  <td 
                    className="px-2 py-1 text-right font-bold"
                    style={{ 
                      color: "#d41b2c",
                      borderRight: "3px solid #1a365d",
                    }}
                  >
                    {data.soldeFaveurAmount}€
                  </td>
                </tr>
                <tr>
                  <td 
                    className="px-2 py-1"
                    style={{ 
                      color: "#1a365d",
                      borderLeft: "3px solid #1a365d",
                    }}
                  >
                    <span className="font-bold">{data.prelevementDate}</span> Prélèvement au 06
                  </td>
                  <td 
                    className="px-2 py-1 text-right"
                    style={{ borderRight: "3px solid #1a365d" }}
                  >
                    - {data.prelevementHistAmount}€
                  </td>
                </tr>
                <tr>
                  <td 
                    className="px-2 py-1 pl-6"
                    style={{ 
                      color: "#1a365d",
                      borderLeft: "3px solid #1a365d",
                    }}
                  >
                    Solde avant échéance
                  </td>
                  <td 
                    className="px-2 py-1 text-right"
                    style={{ borderRight: "3px solid #1a365d" }}
                  >
                    {data.soldeAvantEcheance}€
                  </td>
                </tr>
                <tr>
                  <td 
                    className="px-2 py-1 pl-6"
                    style={{ 
                      color: "#1a365d",
                      borderLeft: "3px solid #1a365d",
                    }}
                  >
                    Montant total de l'échéance
                  </td>
                  <td 
                    className="px-2 py-1 text-right"
                    style={{ borderRight: "3px solid #1a365d" }}
                  >
                    {data.montantTotalEcheance}€
                  </td>
                </tr>
                <tr>
                  <td 
                    className="px-2 py-1 pl-6"
                    style={{ 
                      color: "#1a365d",
                      borderLeft: "3px solid #1a365d",
                      borderBottom: "3px solid #1a365d",
                    }}
                  >
                    Solde après échéance
                  </td>
                  <td 
                    className="px-2 py-1 text-right"
                    style={{ 
                      borderRight: "3px solid #1a365d",
                      borderBottom: "3px solid #1a365d",
                    }}
                  >
                    {data.soldeApresEcheance}€
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Montant prélevé */}
            <div 
              className="mt-4 p-2 flex justify-between items-center font-bold text-[9px]"
              style={{ 
                backgroundColor: "#1a365d",
                color: "white",
              }}
            >
              <span>MONTANT PRELEVE LE {data.montantPreleveDate}</span>
              <span>{data.montantPreleve} €</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-[7px]">
          <div className="mb-1" style={{ color: "#555" }}>{data.footerText1}</div>
          <div className="font-bold mb-1" style={{ color: "#d41b2c" }}>{data.footerText2}</div>
          <div style={{ color: "#555" }}>Reference Unique de Mandat : {data.rumNumber}</div>
        </div>

        {/* Separate Parking Charges Box */}
        {(data.provChargesAscenseurParking || data.provChargesParking) && (
          <div className="mt-6" style={{ width: "58%" }}>
            <table className="w-full text-[8px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th 
                    className="p-2 text-left text-white"
                    style={{ 
                      backgroundColor: "#1a365d",
                      borderTop: "3px solid #1a365d",
                      borderLeft: "3px solid #1a365d",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      </svg>
                      <span className="font-bold">Détail de l'échéance</span>
                    </div>
                  </th>
                  <th 
                    className="p-2 text-center text-white text-[7px]"
                    style={{ 
                      backgroundColor: "#1a365d",
                      borderTop: "3px solid #1a365d",
                      width: "50px"
                    }}
                  >
                    TVA<br/>en €
                  </th>
                  <th 
                    className="p-2 text-center text-white text-[7px]"
                    style={{ 
                      backgroundColor: "#1a365d",
                      borderTop: "3px solid #1a365d",
                      borderRight: "3px solid #1a365d",
                      width: "65px"
                    }}
                  >
                    Montant<br/>TTC en €
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.provChargesAscenseurParking && (
                  <tr>
                    <td className="px-2 py-0.5" style={{ color: "#1a365d", borderLeft: "3px solid #1a365d" }}>Prov.Charges Ascenseur</td>
                    <td className="px-2 py-0.5 text-right"></td>
                    <td className="px-2 py-0.5 text-right" style={{ borderRight: "3px solid #1a365d" }}>{data.provChargesAscenseurParking} €</td>
                  </tr>
                )}
                {data.provChargesParking && (
                  <tr>
                    <td className="px-2 py-0.5" style={{ color: "#1a365d", borderLeft: "3px solid #1a365d" }}>Prov.Charges Parking</td>
                    <td className="px-2 py-0.5 text-right"></td>
                    <td className="px-2 py-0.5 text-right" style={{ borderRight: "3px solid #1a365d" }}>{data.provChargesParking} €</td>
                  </tr>
                )}
                {/* Total Row */}
                <tr>
                  <td 
                    colSpan={2} 
                    className="px-2 py-2 text-right font-bold"
                    style={{ 
                      color: "#1a365d",
                      borderLeft: "3px solid #1a365d",
                      borderBottom: "3px solid #1a365d",
                      borderTop: "1px solid #ccc",
                    }}
                  >
                    MONTANT TOTAL DE L'ECHEANCE
                  </td>
                  <td 
                    className="px-2 py-2 text-right font-bold"
                    style={{ 
                      color: "#1a365d",
                      borderRight: "3px solid #1a365d",
                      borderBottom: "3px solid #1a365d",
                      borderTop: "1px solid #ccc",
                    }}
                  >
                    {data.montantTotalEcheance} €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

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

SeqensAvisEcheanceTemplate.displayName = "SeqensAvisEcheanceTemplate";

export default SeqensAvisEcheanceTemplate;
