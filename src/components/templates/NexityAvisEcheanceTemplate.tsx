import { forwardRef } from "react";
import { NexityAvisEcheanceData } from "@/types/template";
import nexityLogo from "@/assets/nexity-logo.png";

interface NexityAvisEcheanceTemplateProps {
  data: NexityAvisEcheanceData;
}

const NexityAvisEcheanceTemplate = forwardRef<HTMLDivElement, NexityAvisEcheanceTemplateProps>(
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
        <div className="flex justify-between mb-2" style={{ borderBottom: "2px solid #c8102e", paddingBottom: "4px" }}>
          {/* Left - Logo */}
          <div className="flex items-start gap-3">
            <img
              src={data.logoUrl || nexityLogo}
              alt="Nexity"
              style={{ height: "40px", objectFit: "contain" }}
            />
            <div style={{ fontSize: "7px", color: "#666" }}>
              <div style={{ fontWeight: "bold", color: "#000" }}>Services immobiliers aux particuliers</div>
              <div style={{ color: "#c8102e", fontWeight: "bold" }}>www.nexity.fr</div>
              <div style={{ marginTop: "2px", fontSize: "6px", lineHeight: "1.2" }}>
                {data.companyLegal1}<br />
                {data.companyLegal2}
              </div>
            </div>
          </div>
          
          {/* Center - Agency Info */}
          <div style={{ textAlign: "center", fontSize: "8px" }}>
            <div style={{ fontWeight: "bold" }}>{data.agencyName}</div>
            <div>{data.agencyAddress}</div>
            <div>{data.agencyCity}</div>
          </div>
          
          {/* Right - Interlocuteur */}
          <div style={{ textAlign: "right", fontSize: "8px" }}>
            <div style={{ fontWeight: "bold" }}>{data.interlocuteurTitle}</div>
            <div>Contactez vous depuis votre Espace MyNexity</div>
            <div style={{ color: "#c8102e" }}>{data.interlocuteurWebsite}</div>
            <div style={{ marginTop: "4px", fontSize: "7px" }}>{data.pageNumber}</div>
          </div>
        </div>
        
        {/* Promotional Banner */}
        <div style={{ 
          backgroundColor: "#f5f5f5", 
          padding: "4px 8px", 
          marginBottom: "6px",
          fontSize: "8px",
          textAlign: "center"
        }}>
          {data.bannerText}
        </div>
        
        {/* Red Header Bar - AVIS D'ÉCHÉANCE */}
        <div style={{ 
          backgroundColor: "#c8102e", 
          color: "white", 
          padding: "6px 10px",
          marginBottom: "6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ fontWeight: "bold", fontSize: "11px" }}>
            AVIS D'ÉCHÉANCE - APPEL DE LOYER
          </div>
          <div style={{ fontSize: "8px" }}>{data.documentRef}</div>
        </div>
        
        {/* Period and Tenant Info Row */}
        <div className="flex justify-between mb-3">
          <div style={{ fontSize: "9px" }}>
            <span style={{ fontWeight: "bold" }}>PÉRIODE :</span> du{" "}
            <span style={{ fontWeight: "bold", color: "#c8102e" }}>{data.periodStart}</span> au{" "}
            <span style={{ fontWeight: "bold", color: "#c8102e" }}>{data.periodEnd}</span>
            <div style={{ marginTop: "2px" }}>
              <span style={{ fontWeight: "bold" }}>VOS RÉFÉRENCES :</span> {data.prelevementReferenceClient}{" "}
              <span style={{ fontWeight: "bold" }}>N° DE COUPON :</span> {data.couponNumber}
            </div>
          </div>
          <div style={{ textAlign: "right", fontSize: "9px" }}>
            <div style={{ fontWeight: "bold" }}>{data.tenantName}</div>
            <div style={{ fontWeight: "bold" }}>{data.tenantApartment}</div>
            <div>{data.tenantAddress}</div>
            <div style={{ fontWeight: "bold" }}>{data.tenantCity}</div>
          </div>
        </div>
        
        {/* Building Address Box */}
        <div style={{ 
          border: "1px solid #000", 
          padding: "6px 10px", 
          marginBottom: "6px",
          fontSize: "8px"
        }}>
          <div style={{ fontWeight: "bold", marginBottom: "4px" }}>Adresse principale de l'immeuble</div>
          <div>{data.buildingAddress}</div>
          <div>{data.buildingCity}</div>
          
          {/* Lot Table */}
          <table style={{ width: "100%", marginTop: "6px", borderCollapse: "collapse", fontSize: "7px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th style={{ border: "1px solid #000", padding: "2px 4px" }}>LOT</th>
                <th style={{ border: "1px solid #000", padding: "2px 4px" }}>TYPE DE LOT</th>
                <th style={{ border: "1px solid #000", padding: "2px 4px" }}>BAT</th>
                <th style={{ border: "1px solid #000", padding: "2px 4px" }}>ESC</th>
                <th style={{ border: "1px solid #000", padding: "2px 4px" }}>ETAGE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #000", padding: "2px 4px" }}>{data.lotNumber}</td>
                <td style={{ border: "1px solid #000", padding: "2px 4px" }}>{data.lotType}</td>
                <td style={{ border: "1px solid #000", padding: "2px 4px" }}>{data.batiment}</td>
                <td style={{ border: "1px solid #000", padding: "2px 4px" }}>{data.escalier}</td>
                <td style={{ border: "1px solid #000", padding: "2px 4px" }}>{data.etage}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* myNexity Login Box */}
        <div style={{ 
          border: "1px solid #000", 
          padding: "4px 10px", 
          marginBottom: "6px",
          fontSize: "8px",
          display: "flex",
          justifyContent: "space-between"
        }}>
          <div>
            Télécharger l'appli Espace Privé Nexity ou aller sur <span style={{ fontWeight: "bold" }}>{data.loginUrl}</span>
            <br />
            <span style={{ fontWeight: "bold" }}>Login :</span> {data.loginEmail}
          </div>
          <div style={{ textAlign: "right", fontSize: "8px" }}>
            {data.documentLocation}, le {data.documentDate}
          </div>
        </div>
        
        {/* Main Content - Two Column Layout */}
        <div className="flex gap-2" style={{ marginBottom: "6px" }}>
          {/* Left Column - Avis d'Échéance - Loyer */}
          <div style={{ flex: 1 }}>
            {/* Green Header */}
            <div style={{ 
              backgroundColor: "#2e7d32", 
              color: "white", 
              padding: "4px 8px",
              fontWeight: "bold",
              fontSize: "9px"
            }}>
              AVIS D'ÉCHÉANCE - LOYER
            </div>
            
            {/* Period Info */}
            <div style={{ 
              backgroundColor: "#e8f5e9", 
              padding: "4px 8px",
              fontSize: "8px",
              borderLeft: "1px solid #2e7d32",
              borderRight: "1px solid #2e7d32"
            }}>
              Période du {data.periodStart} au {data.periodEnd}
            </div>
            
            {/* Left side info */}
            <div style={{ 
              padding: "6px 8px",
              fontSize: "8px",
              borderLeft: "1px solid #2e7d32",
              borderRight: "1px solid #2e7d32",
              backgroundColor: "#fff"
            }}>
              <div><span style={{ fontWeight: "bold" }}>Périodicité :</span> Mensuelle</div>
              <div><span style={{ fontWeight: "bold" }}>Terme :</span> Avance</div>
              <div><span style={{ fontWeight: "bold", color: "#c8102e" }}>EXIGIBLE LE :</span> <span style={{ color: "#c8102e", fontWeight: "bold" }}>{data.periodStart}</span></div>
              <div style={{ marginTop: "4px", fontSize: "7px", lineHeight: "1.3" }}>
                Nous vous informons que vous êtes redevable(s) du montant de l'avis d'échéance détaillé ci-contre que nous vous invitons à régler des réception. Cet avis est une demande de paiement. Il ne peut en aucun cas servir de reçu ou de quittance de loyer.
              </div>
            </div>
            
            {/* Green footer bar */}
            <div style={{ 
              backgroundColor: "#2e7d32", 
              padding: "4px 8px",
              fontSize: "8px"
            }} />
          </div>
          
          {/* Right Column - Operations Table */}
          <div style={{ flex: 1.5 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "8px" }}>
              <thead>
                <tr style={{ backgroundColor: "#2e7d32", color: "white" }}>
                  <th colSpan={2} style={{ padding: "4px", textAlign: "left" }}>OPÉRATIONS</th>
                  <th style={{ padding: "4px", textAlign: "right" }}>DÉBIT (en €)</th>
                  <th style={{ padding: "4px", textAlign: "right" }}>CRÉDIT (en €)</th>
                </tr>
              </thead>
              <tbody>
                {data.avisOperations.map((op, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: "2px 4px", width: "60px" }}>{op.date}</td>
                    <td style={{ padding: "2px 4px" }}>{op.description}</td>
                    <td style={{ padding: "2px 4px", textAlign: "right" }}>{op.debit}</td>
                    <td style={{ padding: "2px 4px", textAlign: "right" }}>{op.credit}</td>
                  </tr>
                ))}
                <tr style={{ borderTop: "2px solid #000", fontWeight: "bold" }}>
                  <td colSpan={2} style={{ padding: "4px", textAlign: "right" }}>TOTAL</td>
                  <td style={{ padding: "4px", textAlign: "right" }}>{data.avisTotalDebit}</td>
                  <td style={{ padding: "4px", textAlign: "right" }}>{data.avisTotalCredit}</td>
                </tr>
              </tbody>
            </table>
            
            {/* Solde à Payer */}
            <div style={{ 
              backgroundColor: "#fff9c4", 
              border: "2px solid #c8102e",
              padding: "6px 10px",
              marginTop: "4px",
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              fontSize: "10px"
            }}>
              <span>SOLDE À PAYER (en €)</span>
              <span>{data.soldeAPayer}</span>
            </div>
          </div>
        </div>
        
        {/* Dotted Line Separator */}
        <div style={{ borderTop: "2px dashed #999", margin: "10px 0" }} />
        
        {/* Quittance Section */}
        <div className="flex gap-2" style={{ marginBottom: "6px" }}>
          {/* Left - Quittance Header */}
          <div style={{ flex: 1 }}>
            <div style={{ 
              backgroundColor: "#8b0000", 
              color: "white", 
              padding: "6px 8px",
              fontWeight: "bold",
              fontSize: "10px"
            }}>
              QUITTANCE DE LOYER<br />
              OU INDEMNITÉ D'OCCUPATION
            </div>
            <div style={{ 
              backgroundColor: "#ffebee", 
              padding: "4px 8px",
              fontSize: "8px",
              border: "1px solid #8b0000"
            }}>
              Période du {data.quittancePeriodStart} au {data.quittancePeriodEnd}
            </div>
            
            {/* Nexity logo small */}
            <div style={{ padding: "6px 8px", border: "1px solid #8b0000", borderTop: "none" }}>
              <img
                src={data.logoUrl || nexityLogo}
                alt="Nexity"
                style={{ height: "20px", objectFit: "contain" }}
              />
              <div style={{ fontSize: "7px", marginTop: "4px" }}>
                {data.agencyName}<br />
                {data.agencyAddress}<br />
                {data.agencyCity}
              </div>
              <div style={{ fontSize: "8px", fontWeight: "bold", marginTop: "6px" }}>
                {data.tenantName}
              </div>
              <div style={{ fontSize: "7px" }}>
                {data.tenantApartment}<br />
                {data.tenantAddress}<br />
                {data.tenantCity}
              </div>
            </div>
          </div>
          
          {/* Right - Quittance Table */}
          <div style={{ flex: 1.5 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "8px" }}>
              <thead>
                <tr style={{ backgroundColor: "#8b0000", color: "white" }}>
                  <th colSpan={2} style={{ padding: "4px", textAlign: "left" }}>OPÉRATIONS</th>
                  <th style={{ padding: "4px", textAlign: "right" }}>MONTANT RÉGLÉ<br />(en €)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "4px", fontWeight: "bold" }}>{data.quittanceLot}</td>
                  <td style={{ padding: "4px" }}>Règlement :</td>
                  <td style={{ padding: "4px" }} />
                </tr>
                {data.quittanceOperations.map((op, index) => (
                  <tr key={index}>
                    <td style={{ padding: "2px 4px" }} />
                    <td style={{ padding: "2px 4px" }}>- {op.description}</td>
                    <td style={{ padding: "2px 4px", textAlign: "right" }}>{op.montant}</td>
                  </tr>
                ))}
                <tr style={{ borderTop: "2px solid #000", fontWeight: "bold", backgroundColor: "#f5f5f5" }}>
                  <td colSpan={2} style={{ padding: "6px", textAlign: "right" }}>TOTAL SUR LA PÉRIODE</td>
                  <td style={{ padding: "6px", textAlign: "right", fontWeight: "bold" }}>{data.quittanceTotalPeriode}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Legal Disclaimer */}
        <div style={{ 
          fontSize: "6px", 
          color: "#666", 
          marginBottom: "8px",
          lineHeight: "1.3"
        }}>
          {data.disclaimerText}
        </div>
        
        {/* Prélèvement Bancaire Section */}
        <div className="flex gap-4">
          {/* Left - Reference Info */}
          <div style={{ flex: 1, fontSize: "8px" }}>
            <div><span style={{ fontWeight: "bold" }}>N° D'APPEL :</span> {data.prelevementNumeroAppel}</div>
            <div><span style={{ fontWeight: "bold" }}>REFERENCE CLIENT :</span> {data.prelevementReferenceClient}</div>
            <div><span style={{ fontWeight: "bold" }}>PERIODE D'ECHEANCE :</span> du {data.prelevementPeriodStart} au {data.prelevementPeriodEnd}</div>
            <div><span style={{ fontWeight: "bold" }}>IDENTIFIANT CREANCIER SEPA :</span> {data.prelevementICS}</div>
            <div><span style={{ fontWeight: "bold" }}>REFERENCE UNIQUE MANDAT :</span> {data.prelevementRUM}</div>
            <div style={{ marginTop: "8px" }}>
              <span style={{ fontWeight: "bold" }}>MONTANT</span> <span style={{ color: "#c8102e", fontWeight: "bold" }}>{data.prelevementMontant}</span> Euros
            </div>
            <div><span style={{ fontWeight: "bold" }}>PRELEVE LE:</span> {data.prelevementDate}</div>
          </div>
          
          {/* Right - Prélèvement Box */}
          <div style={{ 
            flex: 1,
            border: "2px solid #8b0000",
            padding: "8px"
          }}>
            <div style={{ 
              fontWeight: "bold", 
              fontSize: "12px",
              textAlign: "center",
              marginBottom: "8px",
              borderBottom: "1px solid #8b0000",
              paddingBottom: "4px"
            }}>
              PRELEVEMENT BANCAIRE
            </div>
            <div style={{ fontSize: "8px" }}>
              <div style={{ fontWeight: "bold" }}>{data.tenantName}</div>
              <div>{data.tenantApartment}</div>
              <div>{data.tenantAddress}</div>
              <div>{data.tenantCity}</div>
            </div>
          </div>
        </div>
        
        {/* DUPLICATA Watermark */}
        {data.showDuplicata && (
          <div style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-15deg)",
            fontSize: "80px",
            fontWeight: "bold",
            color: "rgba(200, 16, 46, 0.15)",
            letterSpacing: "20px",
            pointerEvents: "none",
            whiteSpace: "nowrap"
          }}>
            DUPLICATA
          </div>
        )}
        
        {/* Bottom Payment Info Box */}
        <div style={{ 
          position: "absolute",
          bottom: "20mm",
          right: "10mm",
          border: "2px solid #c8102e",
          padding: "8px",
          fontSize: "8px",
          backgroundColor: "#fff",
          maxWidth: "200px"
        }}>
          <div style={{ textAlign: "center", marginBottom: "4px" }}>
            Conformément à votre demande, le montant de cet avis sera prélevé sur votre compte :
          </div>
          <div style={{ fontWeight: "bold", textAlign: "center" }}>
            {data.prelevementIBAN}
          </div>
          <div style={{ textAlign: "center" }}>{data.prelevementBIC}</div>
        </div>
      </div>
    );
  }
);

NexityAvisEcheanceTemplate.displayName = "NexityAvisEcheanceTemplate";

export default NexityAvisEcheanceTemplate;
