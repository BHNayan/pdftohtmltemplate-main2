import { forwardRef } from "react";
import { OrpiAvisEcheanceData } from "@/types/template";
import orpiLogo from "@/assets/orpi-logo.png";

interface OrpiAvisEcheanceTemplateProps {
  data: OrpiAvisEcheanceData;
}

const OrpiAvisEcheanceTemplate = forwardRef<HTMLDivElement, OrpiAvisEcheanceTemplateProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white text-black relative"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "8mm 10mm",
          fontFamily: "Arial, sans-serif",
          fontSize: "9px",
          lineHeight: "1.3",
          boxSizing: "border-box",
        }}
      >
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
          {/* Left - Agency Info */}
          <div style={{ fontSize: "9px" }}>
            <div style={{ fontWeight: "bold", fontSize: "11px", color: "#000" }}>{data.agencyName}</div>
            <div style={{ fontSize: "9px" }}>{data.agencyAddress}</div>
            <div style={{ fontSize: "9px" }}>{data.agencyCity}</div>
            <div style={{ fontSize: "9px" }}>{data.agencyPhone}</div>
          </div>
          
          {/* Center - Orpi Logo */}
          <div style={{ textAlign: "center" }}>
            <img
              src={data.logoUrl || orpiLogo}
              alt="Orpi"
              style={{ height: "45px", objectFit: "contain" }}
            />
          </div>
          
          {/* Right - Services */}
          <div style={{ textAlign: "right", fontSize: "9px" }}>
            <div style={{ fontWeight: "bold", color: "#228B22" }}>Gestion locative</div>
            <div style={{ fontWeight: "bold", color: "#228B22" }}>Syndic de Copropriété</div>
            <div style={{ fontWeight: "bold", color: "#228B22" }}>Location - Transaction</div>
            <div style={{ color: "#E31837", marginTop: "2px" }}>{data.agencyEmail}</div>
          </div>
        </div>
        
        {/* Company Legal Info */}
        <div style={{ fontSize: "6px", color: "#666", textAlign: "center", marginBottom: "8px", lineHeight: "1.3", borderBottom: "1px solid #ccc", paddingBottom: "6px" }}>
          {data.companyLegal.split('\n').map((line, i) => (
            <span key={i}>{line}{i < data.companyLegal.split('\n').length - 1 ? ' - ' : ''}</span>
          ))}
        </div>
        
        {/* AVIS D'ECHEANCE Title */}
        <div style={{ marginBottom: "4px" }}>
          <span style={{ fontSize: "14px", fontWeight: "bold", color: "#000" }}>AVIS D'ECHEANCE</span>
        </div>
        
        {/* Property Address & Tenant Info Row */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          {/* Left - Property Address */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "8px", color: "#0066CC", textDecoration: "underline", marginBottom: "2px" }}>
              Adresse du bien loué
            </div>
            <div style={{ fontSize: "9px", color: "#E31837", fontWeight: "bold" }}>{data.propertyDescription}</div>
            <div style={{ fontSize: "9px", color: "#E31837" }}>{data.propertyAddress}</div>
            <div style={{ fontSize: "9px", color: "#E31837" }}>{data.propertyCity}</div>
          </div>
          
          {/* Right - Tenant Address with gray background */}
          <div style={{ 
            backgroundColor: "#f0f0f0", 
            padding: "8px 12px",
            fontSize: "9px",
            minWidth: "200px"
          }}>
            <div style={{ fontWeight: "bold" }}>{data.tenantName}</div>
            <div>{data.tenantAddress1}</div>
            <div>{data.tenantAddress2}</div>
            <div style={{ fontWeight: "bold" }}>{data.tenantCity}</div>
          </div>
        </div>
        
        {/* Gestionnaire & Compte Web */}
        <div style={{ marginBottom: "6px", fontSize: "8px" }}>
          <div>
            <span style={{ fontWeight: "bold" }}>Gestionnaire :</span>{" "}
            <span style={{ color: "#0066CC" }}>{data.gestionnaireName} / {data.gestionnairePhone}</span>
          </div>
          <div style={{ color: "#0066CC", marginLeft: "65px" }}>{data.gestionnaireEmail}</div>
        </div>
        
        <div style={{ marginBottom: "4px", fontSize: "8px" }}>
          <span style={{ fontWeight: "bold" }}>Compte Web :</span>{" "}
          <span style={{ color: "#0066CC" }}>{data.compteWeb}</span>
        </div>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px", fontSize: "8px" }}>
          <div>
            <span style={{ fontWeight: "bold" }}>Locataire(s) :</span> {data.tenantName}
          </div>
          <div style={{ fontWeight: "normal" }}>{data.documentLocation}, le {data.documentDate}</div>
        </div>
        
        {/* Lot Info Table */}
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "8px", marginBottom: "6px" }}>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #0066CC", padding: "3px 6px", color: "#0066CC", fontWeight: "bold", width: "40px" }}>N° Lot</td>
              <td style={{ border: "1px solid #0066CC", padding: "3px 6px", width: "120px" }}>Type de lot</td>
              <td style={{ border: "1px solid #000", padding: "3px 6px", fontWeight: "bold", width: "100px" }}>Propriétaire</td>
              <td style={{ border: "1px solid #000", padding: "3px 6px" }}>{data.proprietaire}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #0066CC", padding: "3px 6px", color: "#0066CC", fontWeight: "bold" }}>{data.lotNumber}</td>
              <td style={{ border: "1px solid #0066CC", padding: "3px 6px", color: "#0066CC" }}>{data.lotType}</td>
              <td style={{ border: "1px solid #000", padding: "3px 6px", fontWeight: "bold" }}>References à rappeler :</td>
              <td style={{ border: "1px solid #000", padding: "3px 6px", color: "#0066CC" }}>{data.referenceARappeler}</td>
            </tr>
            <tr>
              <td colSpan={2} style={{ border: "none" }}></td>
              <td style={{ border: "1px solid #000", padding: "3px 6px", fontWeight: "bold", color: "#CC6600" }}>Informations</td>
              <td style={{ border: "1px solid #000", padding: "3px 6px", color: "#CC6600", fontSize: "7px" }}>{data.informationMessage}</td>
            </tr>
          </tbody>
        </table>
        
        {/* Dotted Line Separator */}
        <div style={{ borderTop: "1px dashed #999", margin: "8px 0" }} />
        
        {/* QUITTANCE DE LOYER Section */}
        <div style={{ display: "flex", marginBottom: "8px" }}>
          {/* Left - Brown sidebar */}
          <div style={{ width: "180px", marginRight: "10px" }}>
            <div style={{ 
              backgroundColor: "#8B4513", 
              color: "white", 
              padding: "4px 8px",
              fontWeight: "bold",
              fontSize: "10px"
            }}>
              QUITTANCE DE LOYER
            </div>
            <div style={{ 
              backgroundColor: "#8B4513", 
              color: "white", 
              padding: "2px 8px",
              fontSize: "8px",
              paddingBottom: "4px"
            }}>
              ou Indemnité d'Occupation
            </div>
            <div style={{ 
              padding: "6px 8px",
              fontSize: "8px",
              border: "1px solid #8B4513",
              borderTop: "none"
            }}>
              <div style={{ marginBottom: "4px" }}>
                du {data.quittancePeriodStart} au {data.quittancePeriodEnd} / {data.quittanceType}
              </div>
              <div style={{ fontSize: "6px", lineHeight: "1.3", color: "#333" }}>
                {data.disclaimerText}
              </div>
            </div>
          </div>
          
          {/* Right - Quittance Table */}
          <div style={{ flex: 1 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "8px" }}>
              <thead>
                <tr>
                  <th colSpan={2} style={{ backgroundColor: "#FFD700", padding: "4px 6px", textAlign: "left", fontWeight: "bold", fontSize: "9px", border: "1px solid #ccc" }}>
                    QUITTANCE POUR LA PERIODE<br />
                    <span style={{ fontWeight: "normal" }}>DU {data.quittancePeriodStart} AU {data.quittancePeriodEnd}</span>
                  </th>
                  <th style={{ backgroundColor: "#FFD700", padding: "4px 6px", textAlign: "right", fontWeight: "bold", border: "1px solid #ccc", width: "60px" }}>Débit</th>
                  <th style={{ backgroundColor: "#FFD700", padding: "4px 6px", textAlign: "right", fontWeight: "bold", border: "1px solid #ccc", width: "60px" }}>Crédit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} style={{ padding: "3px 6px", fontWeight: "bold", border: "1px solid #ccc" }}>LOYER</td>
                  <td style={{ padding: "3px 6px", textAlign: "right", border: "1px solid #ccc" }}>{data.quittanceLoyer}</td>
                  <td style={{ padding: "3px 6px", border: "1px solid #ccc" }}></td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ padding: "3px 6px", fontWeight: "bold", border: "1px solid #ccc" }}>CHARGES</td>
                  <td style={{ padding: "3px 6px", textAlign: "right", border: "1px solid #ccc" }}>{data.quittanceCharges}</td>
                  <td style={{ padding: "3px 6px", border: "1px solid #ccc" }}></td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ padding: "4px 6px", fontWeight: "bold", borderTop: "2px solid #000", border: "1px solid #ccc" }}>TOTAL de la période</td>
                  <td style={{ padding: "4px 6px", borderTop: "2px solid #000", border: "1px solid #ccc" }}></td>
                  <td style={{ padding: "4px 6px", textAlign: "right", fontWeight: "bold", borderTop: "2px solid #000", border: "1px solid #ccc" }}>{data.quittanceTotalPeriode}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Dotted Line Separator */}
        <div style={{ borderTop: "1px dashed #999", margin: "8px 0" }} />
        
        {/* AVIS D'ECHEANCE Section */}
        <div style={{ display: "flex", marginBottom: "8px" }}>
          {/* Left - Blue sidebar */}
          <div style={{ width: "180px", marginRight: "10px" }}>
            <div style={{ 
              backgroundColor: "#0066CC", 
              color: "white", 
              padding: "4px 8px",
              fontWeight: "bold",
              fontSize: "10px"
            }}>
              AVIS D'ECHEANCE
            </div>
            <div style={{ 
              padding: "6px 8px",
              fontSize: "7px",
              border: "1px solid #0066CC",
              borderTop: "none",
              lineHeight: "1.4"
            }}>
              <div style={{ marginBottom: "4px" }}>
                du {data.avisPeriodStart} au {data.avisPeriodEnd} / {data.avisType}
              </div>
              <div style={{ marginBottom: "4px" }}>
                Nous vous informons que vous êtes redevable du montant de la somme détaillée ci-contre que nous vous invitons à régler dès réception du présent avis.
              </div>
              <div style={{ fontWeight: "bold", marginBottom: "2px" }}>
                Cet avis est une demande de paiement.
              </div>
              <div style={{ fontWeight: "bold", fontStyle: "italic" }}>
                Il ne peut en aucun cas servir de reçu ou de quittance de loyer.
              </div>
            </div>
          </div>
          
          {/* Right - Avis Table */}
          <div style={{ flex: 1 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "8px" }}>
              <thead>
                <tr>
                  <th colSpan={2} style={{ backgroundColor: "#FFD700", padding: "4px 6px", textAlign: "left", fontWeight: "bold", fontSize: "9px", border: "1px solid #ccc" }}>
                    AVIS D'ECHEANCE du {data.avisPeriodStart} au {data.avisPeriodEnd}
                  </th>
                  <th style={{ backgroundColor: "#FFD700", padding: "4px 6px", textAlign: "right", fontWeight: "bold", border: "1px solid #ccc", width: "60px" }}>Débit</th>
                  <th style={{ backgroundColor: "#FFD700", padding: "4px 6px", textAlign: "right", fontWeight: "bold", border: "1px solid #ccc", width: "60px" }}>Crédit</th>
                </tr>
              </thead>
              <tbody>
                {data.avisOperations.map((op, index) => (
                  <tr key={index}>
                    <td style={{ padding: "2px 6px", width: "80px", border: "1px solid #ccc" }}>{op.date}</td>
                    <td style={{ padding: "2px 6px", border: "1px solid #ccc" }}>{op.description}</td>
                    <td style={{ padding: "2px 6px", textAlign: "right", border: "1px solid #ccc" }}>{op.debit}</td>
                    <td style={{ padding: "2px 6px", textAlign: "right", border: "1px solid #ccc" }}>{op.credit}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2} style={{ padding: "4px 6px", fontWeight: "bold", borderTop: "1px solid #000", border: "1px solid #ccc" }}>TOTAL de la période</td>
                  <td style={{ padding: "4px 6px", borderTop: "1px solid #000", border: "1px solid #ccc" }}></td>
                  <td style={{ padding: "4px 6px", textAlign: "right", border: "1px solid #ccc" }}>{data.avisTotalPeriode}</td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ padding: "4px 6px", fontWeight: "bold", border: "1px solid #ccc" }}>MONTANT NET A PAYER</td>
                  <td style={{ padding: "4px 6px", border: "1px solid #ccc" }}></td>
                  <td style={{ padding: "4px 6px", textAlign: "right", fontWeight: "bold", color: "#E31837", border: "1px solid #ccc" }}>{data.montantNetAPayer}</td>
                </tr>
                <tr>
                  <td colSpan={4} style={{ padding: "2px 6px", color: "#CC6600", border: "1px solid #ccc" }}>
                    Exigible le : {data.dateExigible}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Prélèvement Blue Bar */}
        <div style={{ 
          backgroundColor: "#0066CC", 
          color: "white",
          padding: "6px 10px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "9px",
          marginBottom: "0"
        }}>
          Prélèvement effectué le {data.prelevementDate} sur le compte indiqué ci-dessous
        </div>
        
        {/* Prélèvement Details - Gray background */}
        <div style={{ 
          backgroundColor: "#E8E8E8", 
          padding: "8px 10px",
          fontSize: "8px"
        }}>
          <div><span style={{ fontWeight: "bold" }}>Référence :</span> {data.prelevementReference}</div>
          <div><span style={{ fontWeight: "bold" }}>Montant prélevé :</span> {data.prelevementMontant} Euros</div>
          <div><span style={{ fontWeight: "bold" }}>ICS :</span> {data.prelevementICS} &nbsp;&nbsp; <span style={{ fontWeight: "bold" }}>RUM :</span> {data.prelevementRUM}</div>
          <div><span style={{ fontWeight: "bold" }}>IBAN :</span> {data.prelevementIBAN} &nbsp;&nbsp; <span style={{ fontWeight: "bold" }}>BIC :</span> {data.prelevementBIC}</div>
          <div><span style={{ fontWeight: "bold" }}>Titulaire du compte :</span> {data.prelevementTitulaire}</div>
        </div>
      </div>
    );
  }
);

OrpiAvisEcheanceTemplate.displayName = "OrpiAvisEcheanceTemplate";

export default OrpiAvisEcheanceTemplate;
