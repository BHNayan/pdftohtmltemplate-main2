// Template data types for PDF generation

export interface AvisEcheanceData {
  // Header
  logoUrl: string;
  agencyName: string;
  agencyAddress1: string;
  agencyAddress2: string;
  
  // Client info
  sirenBailleur: string;
  serviceClient: string;
  serviceHours: string;
  webspace: string;
  referenceClient: string;
  propertyName: string;
  propertyAddress1: string;
  propertyAddress2: string;
  
  // Invoice info
  invoiceNumber: string;
  invoiceDate: string;
  conventionAmount: string;
  
  // Tenant info
  tenantName: string;
  tenantResidence: string;
  tenantDoor: string;
  tenantAddress: string;
  tenantCity: string;
  
  // Charges
  logementNumber: string;
  periodStart: string;
  periodEnd: string;
  loyerPrincipal: string;
  chargesChauffage: string;
  chargesGenerales: string;
  totalEcheance: string;
  
  // Account situation
  soldeDate1: string;
  soldeAmount1: string;
  soldeDate2: string;
  soldeAmount2: string;
  echeanceAmount: string;
  soldeApresEcheance: string;
  
  // Payment info
  paymentDate: string;
  paymentAmount: string;
  
  // TIP info
  iban: string;
  ics: string;
  rum: string;
  
  // QR Code
  qrCodeUrl: string;
  qrCodeImage: string;
  
  // Footer text
  barcodeText1: string;
  barcodeText2: string;
  barcodeText3: string;
  barcodeText4: string;

 // Footer tex before
  footerCompanyName: string;
  footerAddress: string;
  footerLegalForm: string;
  footerCapital: string;
  footerTvaNumber: string;
  footerRcs: string;
  footerWebsite: string;
  RefferCS: string;
  RefferAddress: string;
}

// Pichet Avis d'Échéance template data
export interface PichetAvisEcheanceData {
  // Header
  logoUrl: string;
  agencyName: string;
  agencyAddress: string;
  agencyCity: string;
  
  // Company info
  companyName: string;
  companyCapital: string;
  companyPhone: string;
  companySiege: string;
  companyRCS: string;
  companyTVA: string;
  companyAPE: string;
  companyCartePro: string;
  companyRC: string;
  companyEmail: string;
  espaceClient: string;
  
  // Tenant info
  tenantName: string;
  tenantAddress1: string;
  tenantAddress2: string;
  tenantCity: string;
  
  // Property info
  propertyDescription: string;
  propertyAddress1: string;
  propertyAddress2: string;
  
  // Staff info
  assistantName: string;
  assistantPhone: string;
  assistantEmail: string;
  comptableName: string;
  comptablePhone: string;
  comptableEmail: string;
  
  // Document info
  documentDate: string;
  
  // Quittance section
  quittancePeriodStart: string;
  quittancePeriodEnd: string;
  quittanceLoyer: string;
  quittanceProvisionCharges: string;
  quittanceProvisionTOM: string;
  quittanceTotal: string;
  
  // Avis d'échéance section
  avisPeriodStart: string;
  avisPeriodEnd: string;
  soldeAnterieurDate: string;
  soldeAnterieurLabel: string;
  soldeAnterieurAmount: string;
  paiementDate: string;
  paiementLabel: string;
  paiementAmount: string;
  avisLoyer: string;
  avisSoldeCharges: string;
  avisRegularisationEau: string;
  avisProvisionCharges: string;
  avisProvisionTOM: string;
  avisTotal: string;
  
  // Payment info
  montantNetAPayer: string;
  dateExigible: string;
  
  // Prélèvement info
  prelevementDate: string;
  montantPreleve: string;
  ics: string;
  rum: string;
  iban: string;
  bic: string;
  titulaireCo: string;
  
  // QR Code
  qrCodeUrl: string;
  qrCodeImage: string;
}

// Foncia Avis d'Échéance template data
export interface FonciaAvisEcheanceData {
  // Header
  logoUrl: string;
  agencyName: string;
  agencyAddress1: string;
  agencyAddress2: string;
  agencyPhone: string;
  agencyFax: string;
  agencyEmail: string;
  agencyWebsite: string;
  
  // Document info
  documentDate: string;
  documentRef: string;
  
  // Property info
  propertyName: string;
  propertyAddress1: string;
  propertyAddress2: string;
  
  // Tenant info
  tenantName: string;
  tenantAddress1: string;
  tenantAddress2: string;
  tenantCity: string;
  
  // Staff info
  gestionnaireName: string;
  gestionnairePhone: string;
  comptableName: string;
  comptablePhone: string;
  reference: string;
  tvaIntra: string;
  
  // Lot info
  lotNumber: string;
  entree: string;
  escalier: string;
  etage: string;
  porte: string;
  typeLot: string;
  
  // Additional lot info (for parking etc)
  lot2Number: string;
  lot2Entree: string;
  lot2Escalier: string;
  lot2Etage: string;
  lot2Porte: string;
  lot2Type: string;
  
  // Client space info
  clientId: string;
  clientPassword: string;
  
  // Quittance section
  quittancePeriodStart: string;
  quittancePeriodEnd: string;
  quittancePaymentType: string;
  quittanceLoyerPrincipal: string;
  quittanceProvisionCharges: string;
  quittanceAssurance: string;
  quittanceTotal: string;
  
  // Avis d'échéance section (Relevé de compte)
  avisPeriodStart: string;
  avisPeriodEnd: string;
  soldeAnterieurDate: string;
  soldeAnterieurAmount: string;
  paiementDate: string;
  paiementLabel: string;
  paiementAmount: string;
  avisLoyerPrincipal: string;
  avisTaxesOM: string;
  avisTaxesOMYear: string;
  avisAssurance: string;
  avisProvisionCharges: string;
  avisTotal: string;
  
  // Revision de loyer
  revisionDate: string;
  revisionRubrique: string;
  revisionMontantPrecedent: string;
  
  // Payment totals
  montantNetAPayer: string;
  totalCredits: string;
  totalDebits: string;
  
  // Prélèvement info
  prelevementDate: string;
  montantPreleve: string;
  ics: string;
  rum: string;
  bic: string;
  iban: string;
  titulaireCompte: string;
  
  // QR Code
  qrCodeUrl: string;
  qrCodeImage: string;
}

// Pichet Paris Quittance template data
export interface PichetParisQuittanceData {
  // Header
  logoUrl: string;
  agencyName: string;
  agencyAddress: string;
  agencyCity: string;
  agencyPhone: string;
  
  // Company info
  companyName: string;
  companySiege: string;
  companyRCS: string;
  companyTVA: string;
  companyAPE: string;
  companyCartePro: string;
  companyGarantie: string;
  companyRC: string;
  companyEmail: string;
  companyWebsite: string;
  
  // Tenant info
  tenantName: string;
  tenantAddress1: string;
  tenantAddress2: string;
  tenantCity: string;
  
  // Property info
  propertyDescription: string;
  propertyAddress: string;
  
  // Staff info
  assistantName: string;
  assistantPhone: string;
  assistantEmail: string;
  comptableName: string;
  comptablePhone: string;
  comptableEmail: string;
  compteWeb: string;
  
  // Document info
  documentDate: string;
  documentRef: string;
  
  // Locataires
  locataire1Name: string;
  locataire1Ref: string;
  locataire2Name: string;
  
  // Lot info
  lotNumber: string;
  lotType: string;
  proprietaire: string;
  referenceARappeler: string;
  
  // Quittance section
  quittancePeriodStart: string;
  quittancePeriodEnd: string;
  quittanceType: string;
  quittanceLoyer: string;
  quittanceProvisionCharges: string;
  quittanceProvisionTOM: string;
  quittanceTotal: string;
  
  // Avis d'échéance section
  avisPeriodStart: string;
  avisPeriodEnd: string;
  avisType: string;
  soldeAnterieurDate: string;
  soldeAnterieurAmount: string;
  paiementDate: string;
  paiementLabel: string;
  paiementAmount: string;
  avisLoyer: string;
  avisProvisionCharges: string;
  avisProvisionTOM: string;
  avisTotal: string;
  
  // Payment info
  montantNetAPayer: string;
  dateExigible: string;
  
  // Prélèvement info
  prelevementDate: string;
  prelevementTotal: string;
  prelevement1Name: string;
  prelevement1ICS: string;
  prelevement1RUM: string;
  prelevement1BIC: string;
  prelevement1IBAN: string;
  prelevement1Amount: string;
  prelevement2Name: string;
  
  // QR Code
  qrCodeUrl: string;
  qrCodeImage: string;
}

// Seqens Avis d'Échéance template data
export interface SeqensAvisEcheanceData {
  // Header
  logoUrl: string;
  companyName: string;
  companyGroup: string;
  companyAddress: string;
  companyCity: string;
  companyRCS: string;
  companyCapital: string;
  companyICS: string;
  companySIRET: string;
  companyTVAI: string;
  
  // Document info
  documentTitle: string;
  documentMonth: string;
  factureNumber: string;
  factureDate: string;
  pageNumber: string;
  
  // Reference client
  referenceClient: string;
  
  // Correspondence address
  correspondenceIntro: string;
  correspondenceCompany: string;
  correspondenceAddress1: string;
  correspondenceAddress2: string;
  correspondencePhone: string;
  correspondenceWebsite: string;
  
  // Residence address
  residenceLabel: string;
  residenceName: string;
  residenceAddress: string;
  residenceCity: string;
  
  // Direction info
  directionName: string;
  directionAddress: string;
  directionCity: string;
  
  // Tenant info
  tenantName: string;
  tenantAddress: string;
  tenantCity: string;
  
  // Convention info
  conventionAmount: string;
  
  // Appartement details
  appartNumber: string;
  appartPeriodStart: string;
  appartPeriodEnd: string;
  loyerConventionne: string;
  rlsCAF: string;
  aidePersonnelleLogement: string;
  provChargesAscenseur: string;
  provChargesChauffage: string;
  provChargesLocatives: string;
  provEauChaude: string;
  provEauFroide: string;
  
  // Stationnement details
  stationnementNumber: string;
  stationnementPeriodStart: string;
  stationnementPeriodEnd: string;
  loyerStationnement: string;
  provChargesAscenseurParking: string;
  provChargesParking: string;
  
  // Account summary
  soldeFaveurDate: string;
  soldeFaveurAmount: string;
  prelevementDate: string;
  prelevementHistAmount: string;
  soldeAvantEcheance: string;
  montantTotalEcheance: string;
  soldeApresEcheance: string;
  
  // Payment
  montantPreleveDate: string;
  montantPreleve: string;
  
  // Footer
  footerText1: string;
  footerText2: string;
  rumNumber: string;
  
  // QR Code
  qrCodeUrl: string;
  qrCodeImage: string;
}

// Nexity Avis d'Échéance template data
export interface NexityAvisEcheanceData {
  // Header
  logoUrl: string;
  agencyName: string;
  agencyAddress: string;
  agencyCity: string;
  
  // Interlocuteur
  interlocuteurTitle: string;
  interlocuteurWebsite: string;
  
  // Company info
  companyLegal1: string;
  companyLegal2: string;
  
  // Promotional banner
  bannerText: string;
  bannerLink: string;
  
  // Document info
  documentRef: string;
  couponNumber: string;
  pageNumber: string;
  documentLocation: string;
  documentDate: string;
  
  // Period
  periodStart: string;
  periodEnd: string;
  
  // Tenant info
  tenantName: string;
  tenantApartment: string;
  tenantAddress: string;
  tenantCity: string;
  
  // Building info
  buildingAddress: string;
  buildingCity: string;
  
  // Lot info
  lotNumber: string;
  lotType: string;
  batiment: string;
  escalier: string;
  etage: string;
  
  // Login info
  loginUrl: string;
  loginEmail: string;
  
  // Avis d'échéance - Loyer section
  avisOperations: Array<{
    date: string;
    description: string;
    debit: string;
    credit: string;
  }>;
  avisTotal: string;
  avisTotalDebit: string;
  avisTotalCredit: string;
  soldeAPayer: string;
  
  // Quittance section
  quittancePeriodStart: string;
  quittancePeriodEnd: string;
  quittanceLot: string;
  quittanceOperations: Array<{
    description: string;
    montant: string;
  }>;
  quittanceTotalPeriode: string;
  
  // Prélèvement bancaire section
  prelevementNumeroAppel: string;
  prelevementReferenceClient: string;
  prelevementPeriodStart: string;
  prelevementPeriodEnd: string;
  prelevementICS: string;
  prelevementRUM: string;
  prelevementMontant: string;
  prelevementDate: string;
  prelevementIBAN: string;
  prelevementBIC: string;
  
  // Duplicata
  showDuplicata: boolean;
  
  // Legal disclaimer
  disclaimerText: string;
  
  // QR Code
  qrCodeUrl: string;
  qrCodeImage: string;
}

// C'immo Quittance template data
export interface CimmoQuittanceData {
  // Header
  logoUrl: string;
  documentLocation: string;
  documentDate: string;
  salutation: string;
  
  // Tenant info
  locataireName: string;
  referenceBien: string;
  propertyAddress1: string;
  propertyCity: string;
  
  // Recipient
  recipientName: string;
  recipientAddress: string;
  recipientCity: string;
  recipientCountry: string;
  
  // Quittance section
  quittanceDescription: string;
  quittanceMonth1: string;
  quittanceYear1: string;
  quittanceLoyer1: string;
  quittanceCharges1: string;
  quittanceTotal1: string;
  
  // Appel Loyer section
  appelLoyerDescription: string;
  appelMonth: string;
  appelYear: string;
  appelLoyer: string;
  appelCharges: string;
  appelTotal: string;
  
  // Payment info
  prelevementDate: string;
  prelevementAmount: string;
  prelevementIBAN: string;
  prelevementName: string;
  rum: string;
  ics: string;
  
  // Company info
  companyLegal1: string;
  companyLegal2: string;
  companyLegal3: string;
  
  // QR Code
  qrCodeUrl: string;
  qrCodeImage: string;
}

// Orpi Avis d'Échéance template data
export interface OrpiAvisEcheanceData {
  // Header
  logoUrl: string;
  agencyName: string;
  agencyAddress: string;
  agencyCity: string;
  agencyPhone: string;
  agencyEmail: string;
  
  // Services
  serviceType: string;
  
  // Company info
  companyLegal: string;
  
  // Document info
  documentLocation: string;
  documentDate: string;
  
  // Property info
  propertyDescription: string;
  propertyAddress: string;
  propertyCity: string;
  
  // Gestionnaire
  gestionnaireName: string;
  gestionnairePhone: string;
  gestionnaireEmail: string;
  
  // Client info
  compteWeb: string;
  
  // Tenant info
  tenantName: string;
  tenantAddress1: string;
  tenantAddress2: string;
  tenantCity: string;
  
  // Lot info
  lotNumber: string;
  lotType: string;
  proprietaire: string;
  referenceARappeler: string;
  
  // Information message
  informationMessage: string;
  
  // Quittance section
  quittancePeriodStart: string;
  quittancePeriodEnd: string;
  quittanceType: string;
  quittanceLoyer: string;
  quittanceCharges: string;
  quittanceTotalPeriode: string;
  
  // Avis d'échéance section
  avisPeriodStart: string;
  avisPeriodEnd: string;
  avisType: string;
  avisOperations: Array<{
    date: string;
    description: string;
    debit: string;
    credit: string;
  }>;
  avisTotalPeriode: string;
  montantNetAPayer: string;
  dateExigible: string;
  
  // Prélèvement section
  prelevementDate: string;
  prelevementReference: string;
  prelevementMontant: string;
  prelevementICS: string;
  prelevementRUM: string;
  prelevementIBAN: string;
  prelevementBIC: string;
  prelevementTitulaire: string;
  
  // Legal disclaimer
  disclaimerText: string;
  
  // QR Code
  qrCodeUrl: string;
  qrCodeImage: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  component: string;
  defaultData: AvisEcheanceData | PichetAvisEcheanceData | FonciaAvisEcheanceData | PichetParisQuittanceData | SeqensAvisEcheanceData | CimmoQuittanceData | NexityAvisEcheanceData | OrpiAvisEcheanceData;
}

export const defaultAvisEcheanceData: AvisEcheanceData = {
  // Header
  logoUrl: "",
  agencyName: "Ag.ROISSY VAL DE FRANCE",
  agencyAddress1: "13 RUE DE L'ESCOUVRIER",
  agencyAddress2: "95200 SARCELLES",
  
  // Client info
  sirenBailleur: "552 046 484",
  serviceClient: "0973 321 421",
  serviceHours: "Du Lundi au Vendredi de 08h00 à 19h00 (Appel non surtaxé)",
  webspace: "https://clients.cdc-habitat.fr",
  referenceClient: "340985/30",
  propertyName: "RES. KENNEDY",
  propertyAddress1: "1, ALLEE MARCEL PROUST",
  propertyAddress2: "95200 SARCELLES",
  
  // Invoice info
  invoiceNumber: "037890257",
  invoiceDate: "26/01/2021",
  conventionAmount: "318,37",
  
  // Tenant info
  tenantName: "MR MME LYOU Hassane Ouarda",
  tenantResidence: "RES. KENNEDY",
  tenantDoor: "Porte 0402",
  tenantAddress: "1, ALLEE MARCEL PROUST",
  tenantCity: "95200 SARCELLES",
  
  // Charges
  logementNumber: "207897",
  periodStart: "01/01/2021",
  periodEnd: "31/01/2021",
  loyerPrincipal: "314,69",
  chargesChauffage: "46,03",
  chargesGenerales: "96,94",
  totalEcheance: "457,66",
  
  // Account situation
  soldeDate1: "31/12/2020",
  soldeAmount1: "0,00",
  soldeDate2: "26/01/2021",
  soldeAmount2: "0,00",
  echeanceAmount: "457,66",
  soldeApresEcheance: "457,66",
  
  // Payment info
  paymentDate: "01/02/2021",
  paymentAmount: "457,66",
  
  // TIP info
  iban: "Prière de joindre un RIB",
  ics: "FR58ZZZ460977",
  rum: "TIP565000100013409853003789025708",
  
  // QR Code
  qrCodeUrl: "https://clients.cdc-habitat.fr/paiement",
  qrCodeImage: "",
  
  // Footer
  barcodeText1: "000378902572 MR MME LYOU HASSAN",
  barcodeText2: "565000004153",
  barcodeText3: "17100013409853003789025708962108",
  barcodeText4: "45766",

  footerCompanyName: "CDC Habitat social",
  footerAddress: "Le Galaxie, 33 avenue Pierre Mendès-France, 75013 PARIS",
  footerLegalForm: "Société anonyme HLM",
  footerCapital: "163 940 080 euros",
  footerTvaNumber: "FR70552046484",
  footerRcs: " Paris 552 046 484 ",
  footerWebsite: "http://www.cdc-habitat.fr/",

  RefferCS: "40800",
  RefferAddress: "75137 Paris Cedex 18",
};

export const defaultPichetAvisEcheanceData: PichetAvisEcheanceData = {
  // Header
  logoUrl: "",
  agencyName: "AGENCE DE PESSAC",
  agencyAddress: "20-24, avenue Canteranne",
  agencyCity: "33608 PESSAC Cedex",
  
  // Company info
  companyName: "PICHET IMMOBILIER SERVICES - SARL au capital de 8 000 €",
  companyCapital: "8 000 €",
  companyPhone: "0 806 806 400",
  companySiege: "20-24, avenue de Canteranne - 33608 PESSAC Cedex",
  companyRCS: "Bordeaux B 432 296 234",
  companyTVA: "FR 72 432296234",
  companyAPE: "6832 A",
  companyCartePro: "T.G et S n° 3301 2016 000 010 775",
  companyRC: "GENERALI IARD - 2, rue Pillet Will - 75009 PARIS",
  companyEmail: "clients@pichet-adb.fr",
  espaceClient: "https://pichet.thetranet.fr",
  
  // Tenant info
  tenantName: "M. MORANGE Guillaume",
  tenantAddress1: "SQUARE OREA APPT B3 302",
  tenantAddress2: "2 AVENUE DE LA RESISTANCE",
  tenantCity: "33310 LORMONT",
  
  // Property info
  propertyDescription: "Appart. 2 Pieces B3 302",
  propertyAddress1: "2 AVENUE DE LA RESISTANCE",
  propertyAddress2: "RES SQUARE OREA",
  
  // Staff info
  assistantName: "MME Marie ROCHARD",
  assistantPhone: "05.56.07.52.14",
  assistantEmail: "marie.rochard@pichet-adb.fr",
  comptableName: "MME Amelie MAROLLEAU",
  comptablePhone: "05.57.10.58.93",
  comptableEmail: "amelie.marolleau@pichet-adb.fr",
  
  // Document info
  documentDate: "31/08/2021",
  
  // Quittance section
  quittancePeriodStart: "01/08/2021",
  quittancePeriodEnd: "31/08/2021",
  quittanceLoyer: "514,36",
  quittanceProvisionCharges: "56,00",
  quittanceProvisionTOM: "10,00",
  quittanceTotal: "580,36",
  
  // Avis d'échéance section
  avisPeriodStart: "01/09/2021",
  avisPeriodEnd: "30/09/2021",
  soldeAnterieurDate: "01/08/2021",
  soldeAnterieurLabel: "SOLDE ANTERIEUR",
  soldeAnterieurAmount: "580,36",
  paiementDate: "10/08/2021",
  paiementLabel: "Prlvt MORANGE 4304",
  paiementAmount: "580,36",
  avisLoyer: "514,36",
  avisSoldeCharges: "139,12",
  avisRegularisationEau: "101,52",
  avisProvisionCharges: "52,00",
  avisProvisionTOM: "10,00",
  avisTotal: "538,76",
  
  // Payment info
  montantNetAPayer: "538,76",
  dateExigible: "10/09/2021",
  
  // Prélèvement info
  prelevementDate: "10/09/2021",
  montantPreleve: "538,76",
  ics: "FR36ZZZ455747",
  rum: "TA931L000205117N000045712",
  iban: "FR7610558xxxxxxxxxxxxx30044",
  bic: "TARNFR2LXXX",
  titulaireCo: "M. MORANGE Guillaume",
  
  // QR Code
  qrCodeUrl: "https://pichet.thetranet.fr",
  qrCodeImage: "",
};

export const defaultFonciaAvisEcheanceData: FonciaAvisEcheanceData = {
  // Header
  logoUrl: "",
  agencyName: "AZUR",
  agencyAddress1: "11 BOULEVARD DE LA FERRAGE",
  agencyAddress2: "06400 CANNES",
  agencyPhone: "04.92.99.68.66",
  agencyFax: "04.93.68.41.23",
  agencyEmail: "azur@foncia.fr",
  agencyWebsite: "foncia.com",
  
  // Document info
  documentDate: "Cannes, le 22/11/2022",
  documentRef: "G.000000.2022.0083882",
  
  // Property info
  propertyName: "LES PETITES ALPES",
  propertyAddress1: "102 BOULEVARD RAYMOND POUNCARE",
  propertyAddress2: "06160 JUAN LES PINS",
  
  // Tenant info
  tenantName: "M. ARNAOUT SHADY",
  tenantAddress1: "102 BOULEVARD RAYMOND POUNCARE",
  tenantAddress2: "06160 JUAN LES PINS",
  tenantCity: "",
  
  // Staff info
  gestionnaireName: "LE FEE MARINE",
  gestionnairePhone: "04 93 64.38.19",
  comptableName: "DURAND MAGALI",
  comptablePhone: "04.97.06.18.43",
  reference: "G.002950.008214.00039",
  tvaIntra: "",
  
  // Lot info
  lotNumber: "119",
  entree: "0000",
  escalier: "",
  etage: "4",
  porte: "19",
  typeLot: "MEUBLE",
  
  // Additional lot info
  lot2Number: "135",
  lot2Entree: "0000",
  lot2Escalier: "",
  lot2Etage: "-1",
  lot2Porte: "35",
  lot2Type: "PARKING INTERIEUR",
  
  // Client space info
  clientId: "A58MAR24786SF",
  clientPassword: "Nice police de Préfecture N°1074",
  
  // Quittance section
  quittancePeriodStart: "01/11/2022",
  quittancePeriodEnd: "30/11/2022",
  quittancePaymentType: "MENSUEL / AVANCE",
  quittanceLoyerPrincipal: "745,92",
  quittanceProvisionCharges: "60,00",
  quittanceAssurance: "14,34",
  quittanceTotal: "820,26",
  
  // Avis d'échéance section
  avisPeriodStart: "01/12/2022",
  avisPeriodEnd: "31/12/2022",
  soldeAnterieurDate: "01/11/2022",
  soldeAnterieurAmount: "820,26",
  paiementDate: "10/11/2022",
  paiementLabel: "Prlvt du 10/11/2022 ARNAOUT",
  paiementAmount: "820,26",
  avisLoyerPrincipal: "745,92",
  avisTaxesOM: "132,00",
  avisTaxesOMYear: "2022",
  avisAssurance: "14,34",
  avisProvisionCharges: "60,00",
  avisTotal: "952,26",
  
  // Revision de loyer
  revisionDate: "",
  revisionRubrique: "",
  revisionMontantPrecedent: "",
  
  // Payment totals
  montantNetAPayer: "952,26",
  totalCredits: "1.772,52",
  totalDebits: "820,26",
  
  // Prélèvement info
  prelevementDate: "12/12/2022",
  montantPreleve: "952,26",
  ics: "FR24ZZZ477885",
  rum: "W0580L004247861N000021687",
  bic: "SMCTFR2A",
  iban: "FR763007704911xxxxxxx030012",
  titulaireCompte: "M. ARNAOUT SHADY",
  
  // QR Code
  qrCodeUrl: "",
  qrCodeImage: "",
};

export const defaultPichetParisQuittanceData: PichetParisQuittanceData = {
  // Header
  logoUrl: "",
  agencyName: "AGENCE DE PARIS",
  agencyAddress: "3, rue des Saussaies",
  agencyCity: "75008 PARIS",
  agencyPhone: "01 53 92 71 71",
  
  // Company info
  companyName: "PICHET IMMOBILIER SERVICES - SARL au capital de 8 000 €",
  companySiege: "20-24, avenue de Canteranne - 33608 PESSAC Cedex",
  companyRCS: "RCS Bordeaux B 432 296 234",
  companyTVA: "FR 72 432296234",
  companyAPE: "6832 A",
  companyCartePro: "T.G et S n° 3301 2016 000 010 775",
  companyGarantie: "Garantie Financière délivrée par la CEGC - 16 rue Hoche - Tour Kupka - TSA 39999 - 92919 PARIS LA DEFENSE Cedex",
  companyRC: "Responsabilité Civile Professionnelle délivrée par GENERALI IARD - 2, rue Pillet Will 75009 PARIS",
  companyEmail: "clients@pichet-adb.fr",
  companyWebsite: "pichet.fr",
  
  // Tenant info
  tenantName: "M.&MME BAMBA/PORQUET Moustapha Kalo /Athena",
  tenantAddress1: "LOREDEN - APPT A111",
  tenantAddress2: "69-71 RUE HONORE DAUMIER",
  tenantCity: "77000 LA ROCHETTE",
  
  // Property info
  propertyDescription: "Appart. 2 Pieces A111",
  propertyAddress: "69-71 RUE HONORE DAUMIER",
  
  // Staff info
  assistantName: "MME Anja MESSAOUDI",
  assistantPhone: "01.53.81.95.96",
  assistantEmail: "anja.messaoudi@pichet-adb.fr",
  comptableName: "M. Issam MASSOUDY",
  comptablePhone: "01.53.81.95.86",
  comptableEmail: "issam.massoudy@pichet-adb.fr",
  compteWeb: "BA2226WQE",
  
  // Document info
  documentDate: "Pessac, le 1/10/2021",
  documentRef: "0148338",
  
  // Locataires
  locataire1Name: "M. BAMBA Moustapha Kalo",
  locataire1Ref: "222610",
  locataire2Name: "MME PORQUET Athena",
  
  // Lot info
  lotNumber: "21",
  lotType: "Appart. 2 Pieces A111",
  proprietaire: "13840",
  referenceARappeler: "G.0904.00121",
  
  // Quittance section
  quittancePeriodStart: "01/09/2021",
  quittancePeriodEnd: "30/09/2021",
  quittanceType: "Avance / Mens",
  quittanceLoyer: "613,00",
  quittanceProvisionCharges: "69,00",
  quittanceProvisionTOM: "10,00",
  quittanceTotal: "692,00",
  
  // Avis d'échéance section
  avisPeriodStart: "01/10/2021",
  avisPeriodEnd: "31/10/2021",
  avisType: "Avance / Mens",
  soldeAnterieurDate: "01/09/2021",
  soldeAnterieurAmount: "702,00",
  paiementDate: "06/09/2021",
  paiementLabel: "Prlvt BAMBA/PORQUET 4355",
  paiementAmount: "692,00",
  avisLoyer: "613,00",
  avisProvisionCharges: "69,00",
  avisProvisionTOM: "10,00",
  avisTotal: "692,00",
  
  // Payment info
  montantNetAPayer: "702,00",
  dateExigible: "01/10/2021",
  
  // Prélèvement info
  prelevementDate: "01/10/2021",
  prelevementTotal: "692,00",
  prelevement1Name: "MME PORQUET Athena",
  prelevement1ICS: "FR36ZZZ455747",
  prelevement1RUM: "TA931L000211639C000056967",
  prelevement1BIC: "BNPAFRPPXXX",
  prelevement1IBAN: "FR7630004xxxxxxxxxxxxx70525",
  prelevement1Amount: "692,00",
  prelevement2Name: "M. BAMBA Moustapha Kalo",
  
  // QR Code
  qrCodeUrl: "",
  qrCodeImage: "",
};

export const defaultCimmoQuittanceData: CimmoQuittanceData = {
  // Header
  logoUrl: "",
  documentLocation: "MONTPELLIER CEDEX 5",
  documentDate: "lundi 1 août 2022",
  salutation: "Monsieur,",
  
  // Tenant info
  locataireName: "MARTY Anthony",
  referenceBien: "B05 LARDENNE",
  propertyAddress1: "31 bis Chemin de Saint Amand",
  propertyCity: "31100 TOULOUSE",
  
  // Recipient
  recipientName: "M. MARTY Anthony",
  recipientAddress: "31 bis Chemin de Saint Amand",
  recipientCity: "31100 TOULOUSE",
  recipientCountry: "FRANCE",
  
  // Quittance section
  quittanceDescription: "Cette quittance est délivrée sous réserve du paiement des sommes qui resteraient dues de toutes procédures judiciaires en cours.",
  quittanceMonth1: "Juillet",
  quittanceYear1: "2022",
  quittanceLoyer1: "516,59",
  quittanceCharges1: "50,00",
  quittanceTotal1: "566,59",
  
  // Appel Loyer section
  appelLoyerDescription: "Cet avis est une demande de paiement et ne peut en aucun cas avoir valeur de quittance.",
  appelMonth: "Aout",
  appelYear: "2022",
  appelLoyer: "516,59",
  appelCharges: "50,00",
  appelTotal: "566,59",
  
  // Payment info
  prelevementDate: "05/08/2022",
  prelevementAmount: "566,59",
  prelevementIBAN: "FR761*************50875 AGRIFRPP817",
  prelevementName: "MARTY Anthony",
  rum: "G0000L00089200000002137000000000324",
  ics: "FR94ZZZ82E77F",
  
  // Company info
  companyLegal1: "C'immo - SAS au capital de 500 000 € - RCS Montpellier 827 444 019 - TVA Intracom FR 25 827 444 019 Carte",
  companyLegal2: "professionnelle 3402 2017 000 018 432 - CCI de l'Hérault - Garantie Financière : QBE - https://www.c-immo.fr",
  companyLegal3: "47, quai du Verdanson - CS 15179 - 34090 Montpellier - Tél 04 34 09 90 90 - contact@c-immo.fr",
  
  // QR Code
  qrCodeUrl: "",
  qrCodeImage: "",
};

export const defaultSeqensAvisEcheanceData: SeqensAvisEcheanceData = {
  // Header
  logoUrl: "",
  companyName: "Seqens",
  companyGroup: "Groupe ActionLogement",
  companyAddress: "14-16 Boulevard Garibaldi - Immeuble «Be Issy»",
  companyCity: "92130 Issy-les-Moulineaux",
  companyRCS: "RC Nanterre 582 142 816",
  companyCapital: "SA d'HLM, Société à mission, au capital de 534 164 611,50 €",
  companyICS: "FR69V90217018",
  companySIRET: "582 142 816 00310",
  companyTVAI: "ASU SEQENS, N° de TVAI FR 09921777322",
  
  // Document info
  documentTitle: "du mois de février 2023",
  documentMonth: "février 2023",
  factureNumber: "026104279",
  factureDate: "22 février 2023",
  pageNumber: "1-2",
  
  // Reference client
  referenceClient: "422748/22",
  
  // Correspondence address
  correspondenceIntro: "Vous êtes locataires :",
  correspondenceCompany: "SEQENS",
  correspondenceAddress1: "TSA 10004 AUBERVILLIERS",
  correspondenceAddress2: "93579 LA PLAINE SAINT DENIS CEDEX",
  correspondencePhone: "01 49 42 79 89",
  correspondenceWebsite: "www.seqens.fr",
  
  // Residence address
  residenceLabel: "Adresse de votre résidence :",
  residenceName: "RUEIL 10B LIONEL TERRAY",
  residenceAddress: "10 BIS RUE LIONEL TERRAY",
  residenceCity: "92500 RUEIL MALMAISON",
  
  // Direction info
  directionName: "Direction Déléguée Hauts-de-Seine",
  directionAddress: "5 RUE CARNOT",
  directionCity: "92300 LEVALLOIS PERRET",
  
  // Tenant info
  tenantName: "M. AHMIM MME MEHENNI",
  tenantAddress: "10 BIS RUE LIONEL TERRAY",
  tenantCity: "92500 RUEIL MALMAISON",
  
  // Convention info
  conventionAmount: "969,28",
  
  // Appartement details
  appartNumber: "422387",
  appartPeriodStart: "01/02/2023",
  appartPeriodEnd: "28/02/2023",
  loyerConventionne: "968,35",
  rlsCAF: "71,14",
  aidePersonnelleLogement: "370,63",
  provChargesAscenseur: "9,95",
  provChargesChauffage: "125,78",
  provChargesLocatives: "58,50",
  provEauChaude: "33,00",
  provEauFroide: "27,00",
  
  // Stationnement details
  stationnementNumber: "422404",
  stationnementPeriodStart: "01/02/2023",
  stationnementPeriodEnd: "28/02/2023",
  loyerStationnement: "41,57",
  provChargesAscenseurParking: "2,04",
  provChargesParking: "6,00",
  
  // Account summary
  soldeFaveurDate: "31/01/2023",
  soldeFaveurAmount: "388,76",
  prelevementDate: "06/02/2023",
  prelevementHistAmount: "388,76",
  soldeAvantEcheance: "0,00",
  montantTotalEcheance: "830,42",
  soldeApresEcheance: "830,42",
  
  // Payment
  montantPreleveDate: "06/03/2023",
  montantPreleve: "830,42",
  
  // Footer
  footerText1: "Détail de votre compte sur Déclic, votre espace client sur www.seqens.fr. Retrouvez également sur www.seqens.fr toutes les modalités de règlement du loyer.",
  footerText2: "Dans le cadre du prélèvement SEPA, cet avis sert de prénotification du montant qui vous sera prélevé à la date d'échéance.",
  rumNumber: "000134870",
  
  // QR Code
  qrCodeUrl: "",
  qrCodeImage: "",
};

export const defaultNexityAvisEcheanceData: NexityAvisEcheanceData = {
  // Header
  logoUrl: "",
  agencyName: "Nexity Créteil",
  agencyAddress: "90 AV. DU MARÉCHAL DE LATT",
  agencyCity: "94000 CRÉTEIL",
  
  // Interlocuteur
  interlocuteurTitle: "Votre interlocuteur",
  interlocuteurWebsite: "www.mynexity.fr",
  
  // Company info
  companyLegal1: "NEXITY LAMY SAS au capital de 21930858€-SIREN 487530099",
  companyLegal2: "RCS Paris APE854A-Carte pro 1 G S P1 CPI 7501201600001224 délivrée par la CCI de Paris Ile de France - Garanties financières SOCAMAB, 58 av Pierre Mendès France 75013 PARIS",
  
  // Promotional banner
  bannerText: "Envie de vacances à la mer ou à la montagne ? Réservez dès maintenant votre séjour sur nexity.fr",
  bannerLink: "nexity.fr",
  
  // Document info
  documentRef: "AEC/95185388",
  couponNumber: "288ES4",
  pageNumber: "Page 1/2",
  documentLocation: "MAISONS ALFORT",
  documentDate: "22/08/2024",
  
  // Period
  periodStart: "01/09/2024",
  periodEnd: "30/09/2024",
  
  // Tenant info
  tenantName: "M. MAZERES PAOLO",
  tenantApartment: "APPARTEMENT 3, ETAGE 1",
  tenantAddress: "30 RUE EUGENE RENAULT",
  tenantCity: "94700 MAISONS ALFORT",
  
  // Building info
  buildingAddress: "30 RUE EUGENE RENAULT",
  buildingCity: "94700 MAISONS ALFORT",
  
  // Lot info
  lotNumber: "000057",
  lotType: "T1",
  batiment: "BA002",
  escalier: "",
  etage: "1",
  
  // Login info
  loginUrl: "myNexity.fr",
  loginEmail: "mazeres-paoloo@outlook.com",
  
  // Avis d'échéance - Loyer section
  avisOperations: [
    { date: "01/09/2024", description: "Echéance Août 2024 - Mensuel - Avance", debit: "800,00", credit: "" },
    { date: "07/09/2024", description: "Prélèvement locataire 01/09/2024", debit: "", credit: "800,00" },
    { date: "", description: "Echéance Septembre 2024 - Mensuel - Avance", debit: "800,00", credit: "" },
    { date: "", description: "Loyer", debit: "750,00", credit: "" },
    { date: "", description: "Provision sur charges", debit: "50,00", credit: "" },
  ],
  avisTotal: "800,00",
  avisTotalDebit: "800,00",
  avisTotalCredit: "800,00",
  soldeAPayer: "800,00",
  
  // Quittance section
  quittancePeriodStart: "01/09/2024",
  quittancePeriodEnd: "30/09/2024",
  quittanceLot: "Lot 57",
  quittanceOperations: [
    { description: "Loyer", montant: "750,00" },
    { description: "Provision sur charges", montant: "50,00" },
  ],
  quittanceTotalPeriode: "800,00",
  
  // Prélèvement bancaire section
  prelevementNumeroAppel: "288ES4",
  prelevementReferenceClient: "BL0993535",
  prelevementPeriodStart: "01/09/2024",
  prelevementPeriodEnd: "30/09/2024",
  prelevementICS: "FR80ZZZ345733",
  prelevementRUM: "SIG4760276",
  prelevementMontant: "800,00",
  prelevementDate: "07/09/2024",
  prelevementIBAN: "FR76 3000 4009 7300 0007 **** ***",
  prelevementBIC: "BNPAFRPPXXX",
  
  // Duplicata
  showDuplicata: true,
  
  // Legal disclaimer
  disclaimerText: "Dont quittance, sans préjudice du terme en cours, sous réserve de tous suppléments pouvant être dus en vertu des lois ou conventions applicables et sous réserve de tous les droits et actions du propriétaire, de toutes poursuites qui auraient pu être engagées et de toutes décisions de justice qui auraient pu être obtenues. En cas de congé précédemment donné, cette quittance représenterait l'indemnité d'occupation et ne saurait être considérée comme un titre de location. Cette quittance annule tous les reçus qui auraient pu être donnés pour acompte versé sur le présent terme, même si ces reçus portent une date postérieure à la date ci-contre. Le paiement de la présente quittance n'emporte pas présomption de paiement des termes antérieurs.",
  
  // QR Code
  qrCodeUrl: "",
  qrCodeImage: "",
};

export const defaultOrpiAvisEcheanceData: OrpiAvisEcheanceData = {
  // Header
  logoUrl: "",
  agencyName: "L2M Immobilier",
  agencyAddress: "40 chemin Constant Chlore",
  agencyCity: "97354 REMIRE-MONTJOLY",
  agencyPhone: "05 94 31 50 44",
  agencyEmail: "contact.guyane@orpi.com",
  
  // Services
  serviceType: "Gestion locative\nSyndic de Copropriété\nLocation - Transaction",
  
  // Company info
  companyLegal: "OA Immobilier – SARL au capital de 8000 € - RCS Cayenne 412 023 905 - CP n° 2901 2016 000 007 260 délivrée par CCI Guyane\nRCP GENERALI IARD – Garant financier CEGC - TVA intra-communautaire FR48412023905",
  
  // Document info
  documentLocation: "Montabo",
  documentDate: "26/06/2025",
  
  // Property info
  propertyDescription: "APPT T2 BAT C",
  propertyAddress: "2 IMPASSE DU PERE RENAULT",
  propertyCity: "97300 CAYENNE",
  
  // Gestionnaire
  gestionnaireName: "MME Sandy SAINT GERMAIN",
  gestionnairePhone: "05 94 25 62 25",
  gestionnaireEmail: "s.saint-germain@gestionlocative10-orpi.com",
  
  // Client info
  compteWeb: "ALA75899E",
  
  // Tenant info
  tenantName: "M. ALLEN kéving, Andre",
  tenantAddress1: "2 IMPASSE DU PERE RENAULT",
  tenantAddress2: "Bois des Chaumes C 34",
  tenantCity: "97300 CAYENNE",
  
  // Lot info
  lotNumber: "34",
  lotType: "APPT T2 BAT C",
  proprietaire: "844",
  referenceARappeler: "G.0024.11104",
  
  // Information message
  informationMessage: "Votre contrat d'assurance venant à échéance le 12/12/2024 Merci de nous justifier son renouvellement.",
  
  // Quittance section
  quittancePeriodStart: "01/06/2025",
  quittancePeriodEnd: "30/06/2025",
  quittanceType: "Avance / Mens",
  quittanceLoyer: "649,17",
  quittanceCharges: "28,00",
  quittanceTotalPeriode: "677,17",
  
  // Avis d'échéance section
  avisPeriodStart: "01/07/2025",
  avisPeriodEnd: "31/07/2025",
  avisType: "Avance / Mens",
  avisOperations: [
    { date: "01/06/2025", description: "SOLDE ANTERIEUR", debit: "1.815,70", credit: "" },
    { date: "05/06/2025", description: "Prlvt.ALLEN 631", debit: "", credit: "677,17" },
    { date: "", description: "Loyer", debit: "649,17", credit: "" },
    { date: "", description: "Provisions/Charges", debit: "28,00", credit: "" },
  ],
  avisTotalPeriode: "677,17",
  montantNetAPayer: "1.815,70",
  dateExigible: "07/07/2025",
  
  // Prélèvement section
  prelevementDate: "07/07/2025",
  prelevementReference: "G.0024.11104",
  prelevementMontant: "677,17",
  prelevementICS: "FR81ZZZ494901",
  prelevementRUM: "T0798L000075899N000011091",
  prelevementIBAN: "FR7616159xxxxxxxxxxxxx80173",
  prelevementBIC: "CMCIFR2A",
  prelevementTitulaire: "M. ALLEN kéving, Andre",
  
  // Legal disclaimer
  disclaimerText: "Dont quittance, sans préjudice du terme en cours, sous réserve de tous suppléments pouvant être dus en vertu des lois ou conventions applicables et sous réserve de tous les droits et actions du propriétaire, de toutes poursuites qui auraient pu être engagées et de toutes décisions de justice qui auraient pu être obtenues. En cas de congé précédemment donné, cette quittance représenterait l'indemnité d'occupation et ne saurait être considérée comme un titre de location. Cette quittance annule tous les reçus qui auraient pu être donnés pour acompte versé sur le présent terme, même si ces reçus portent une date postérieure à la date ci-contre. Le paiement de la présente quittance n'emporte pas présomption de paiement des termes antérieurs.",
  
  // QR Code
  qrCodeUrl: "",
  qrCodeImage: "",
};
