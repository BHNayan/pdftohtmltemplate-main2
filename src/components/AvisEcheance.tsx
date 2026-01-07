import { Home, FileText } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const AvisEcheance = () => {
  return (
    <div className="bg-white text-gray-900 w-full max-w-[210mm] mx-auto shadow-lg font-sans text-[11px] leading-tight print:shadow-none print:max-w-none">
      {/* Header */}
      <div className="flex items-center px-4 sm:px-5 pt-3 pb-2 bg-white">
        {/* Left - Logo */}
        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span
                className="text-[#c8102e] font-bold text-[22px] sm:text-[24px] tracking-tight leading-none"
                style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
              >
                cdc
              </span>
              <span
                className="text-[#1a1a1a] font-bold text-[22px] sm:text-[24px] tracking-tight leading-none"
                style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
              >
                
                habitat
              </span>
            </div>
            <span className="text-[#c8102e] text-[10px] sm:text-[11px] font-medium tracking-wide leading-none mt-0.5">
              social
            </span>
          </div>
          <div className="h-9 w-px bg-gray-400 mx-2"></div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] bg-[#c8102e] flex items-center justify-center">
            <div className="text-white text-center leading-[1.1]">
              <p className="text-[5px] sm:text-[6px] font-normal">Caisse</p>
              <p className="text-[5px] sm:text-[6px] font-normal">des Dépôts</p>
              <p className="text-[4.5px] sm:text-[5px] font-normal tracking-tight uppercase border-t border-white/50 pt-0.5 mt-0.5">
                groupe
              </p>
            </div>
          </div>
        </div>
        {/* Right - Agency Address */}
        <div className="text-[9px] sm:text-[10px] text-gray-700 text-right leading-[1.4]">
          <p className="font-bold text-gray-900">Ag.ROISSY VAL DE FRANCE</p>
          <p>13 RUE DE L'ESCOUVRIER</p>
          <p>95200 SARCELLES</p>
        </div>

      </div>

      {/* Red line under header */}
      <div className="h-[2px] bg-[#c8102e] mx-4 sm:mx-5 mb-3"></div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 pb-4">
        {/* Top Row - Left info and Right Title/Address */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {/* Left Column - Company info */}
          <div className="flex-1 order-2 sm:order-1">
            <p className="text-[10px] text-gray-600 mb-3">SIREN bailleur : 552 046 484</p>

            <p className="text-[10px] mb-0.5">
              <span className="text-gray-700">Votre service client : </span>
              <span className="text-[#c8102e] font-bold text-[12px]">0973 321 421</span>
            </p>
            <p className="text-[9px] text-gray-500 mb-0.5">Du Lundi au Vendredi de 08h00 à 19h00 (Appel non surtaxé)</p>
            <p className="text-[10px] text-gray-600 mb-5">
              Votre espace web : <span className="text-[#c8102e] font-semibold">https://clients.cdc-habitat.fr</span>
            </p>

            <div className="mb-4">
              <p className="text-[11px] font-bold text-gray-900 mb-1">Référence client : 340985/30</p>
              <div className="flex flex-wrap">
                <span className="text-[10px] text-gray-600">Adresse du bien principal :</span>
                <span className="text-[10px] text-gray-900 font-medium ml-1">RES. KENNEDY</span>
              </div>
              <p className="text-[10px] text-gray-900 ml-0 sm:ml-[150px]">1, ALLEE MARCEL PROUST</p>
              <p className="text-[10px] text-gray-900 ml-0 sm:ml-[150px]">95200 SARCELLES</p>
            </div>

            <div className="border-2 border-[#c8102e] p-3 flex gap-2 bg-white">
              <div className="text-[#c8102e] text-lg flex-shrink-0 leading-none font-bold">ⓘ</div>
              <p className="text-[8px] text-gray-700 leading-relaxed">
                A partir de janvier 2021, le calcul du montant de votre aide au logement change. Pour toute(s)
                question(s) relative(s) au nouveau mode de calcul, merci de bien vouloir vous rapprocher de votre CAF ou
                de vous connecter à www.mesdroitssociaux.gouv.fr
              </p>
            </div>
          </div>

          {/* Right Column - Title and Address */}
          <div className="w-full sm:w-[260px] order-1 sm:order-2">
            <div className="mb-4">
              <h1
                className="text-[#c8102e] text-[20px] sm:text-[26px] font-black tracking-tight leading-[0.95]"
                style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
              >
                AVIS D'ÉCHÉANCE
              </h1>
              <p className="text-[#c8102e] text-[12px] font-bold mt-1">N° 037890257 du 26/01/2021</p>
              <p className="text-[8px] text-gray-500 mt-2 leading-relaxed">
                Cet avis d'échéance vaut quittance du mois précédent si vous êtes titulaire du bail et n'avez pas de
                dette antérieure à la facturation du mois.
              </p>
            </div>

            <div className="mt-6" style={{ fontFamily: "Courier New, monospace" }}>
              <p className="font-bold text-[11px]">MR MME LYOU Hassane Ouarda</p>
              <p className="text-[10px]">RES. KENNEDY</p>
              <p className="text-[10px]">Porte 0402</p>
              <p className="text-[10px]">1, ALLEE MARCEL PROUST</p>
              <p className="text-[10px]">95200 SARCELLES</p>
            </div>
          </div>
        </div>

        {/* Tables Row - Side by Side */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* Table 1 - Détail de l'échéance */}
          <div className="flex-1">
            <table className="w-full border-collapse border border-[#d1d5db]">
              <thead>
                <tr className="bg-[#f3f4f6]">
                  <th className="border border-[#d1d5db] px-2 py-1.5 text-left">
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-[#c8102e]" strokeWidth={2} />
                      <span className="font-bold text-[11px] text-[#c8102e]">DÉTAIL DE L'ÉCHÉANCE</span>
                    </div>
                  </th>
                  <th className="border border-[#d1d5db] px-2 py-1.5 text-right text-[9px] text-gray-500 font-normal w-[80px]">
                    Montant (€)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className="border border-[#d1d5db] px-3 py-2">
                    <p className="text-[10px] font-bold mb-0.5 text-gray-900">
                      Logement N° 207897 Du 01/01/2021 au 31/01/2021
                    </p>
                    <p className="text-[8px] text-[#c8102e] mb-2">Montant maximum du loyer conventionné : 318,37 €</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-x border-[#d1d5db] px-3 py-0.5 text-[10px] text-gray-700 pl-8">
                    Loyer principal
                  </td>
                  <td className="border-x border-[#d1d5db] px-2 py-0.5 text-[10px] text-gray-900 text-right">314,69</td>
                </tr>
                <tr>
                  <td className="border-x border-[#d1d5db] px-3 py-0.5 text-[10px] text-gray-700 pl-8">
                    Charges chauffage
                  </td>
                  <td className="border-x border-[#d1d5db] px-2 py-0.5 text-[10px] text-gray-900 text-right">46,03</td>
                </tr>
                <tr>
                  <td className="border-x border-[#d1d5db] px-3 py-0.5 text-[10px] text-gray-700 pl-8">
                    Charges générales
                  </td>
                  <td className="border-x border-[#d1d5db] px-2 py-0.5 text-[10px] text-gray-900 text-right">96,94</td>
                </tr>
                <tr className="border-t border-[#d1d5db]">
                  <td className="border border-[#d1d5db] px-3 py-2 text-[11px] font-bold text-gray-900">
                    TOTAL ÉCHÉANCE
                  </td>
                  <td className="border border-[#d1d5db] px-2 py-2 text-[11px] font-bold text-gray-900 text-right">
                    457,66
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 2 - Situation de votre compte */}
          <div className="w-full sm:w-[280px]">
            <table className="w-full border-collapse border border-[#d1d5db]">
              <thead>
                <tr className="bg-[#f3f4f6]">
                  <th className="border border-[#d1d5db] px-2 py-1.5 text-left">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#c8102e]" strokeWidth={2} />
                      <span className="font-bold text-[10px] text-[#c8102e]">SITUATION DE VOTRE COMPTE</span>
                    </div>
                  </th>
                  <th className="border border-[#d1d5db] px-2 py-1.5 text-right text-[8px] text-gray-500 font-normal w-[70px]">
                    Montant (€)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-x border-[#d1d5db] px-3 py-1 text-[10px] font-bold text-gray-900">
                    SOLDE au 31/12/2020
                  </td>
                  <td className="border-x border-[#d1d5db] px-2 py-1 text-[10px] text-gray-900 text-right">0,00</td>
                </tr>
                <tr>
                  <td className="border-x border-[#d1d5db] px-3 py-1 text-[10px] font-bold text-gray-900">
                    SOLDE au 26/01/2021
                  </td>
                  <td className="border-x border-[#d1d5db] px-2 py-1 text-[10px] text-gray-900 text-right">0,00</td>
                </tr>
                <tr>
                  <td className="border-x border-[#d1d5db] px-3 py-1 text-[10px] text-gray-700 pl-6">Échéance</td>
                  <td className="border-x border-[#d1d5db] px-2 py-1 text-[10px] text-gray-900 text-right">457,66</td>
                </tr>
                <tr>
                  <td className="border border-[#d1d5db] px-3 py-1 text-[10px] font-bold text-gray-900">
                    SOLDE APRÈS ÉCHÉANCE
                  </td>
                  <td className="border border-[#d1d5db] px-2 py-1 text-[10px] font-bold text-gray-900 text-right">
                    457,66
                  </td>
                </tr>
              </tbody>
            </table>

            {/* A PAYER section with red background */}
            <div className="bg-[#c8102e] border-2 border-[#c8102e]">
              <div className="flex justify-between items-center px-3 py-2">
                <div>
                  <p className="font-bold text-[11px] text-white">A PAYER AVEC LE TIP</p>
                  <p className="text-[8px] text-white/90">ci-dessous le 01/02/2021</p>
                </div>
                <span className="text-[18px] font-bold text-white">457,66</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Company Info */}
        <div className="mt-8 pt-2 border-t border-gray-300 text-[7px] text-gray-500 text-center leading-relaxed">
          <p>
            CDC Habitat social - Le Galaxie, 33 avenue Pierre Mendès-France, 75013 PARIS - Société anonyme HLM au
            capital de 163 940 080 euros
          </p>
          <p>N° de TVA : FR70552046484 - RCS Paris 552 046 484 - http://www.cdc-habitat.fr/</p>
        </div>

        {/* Payment Slip Section - TIP */}
        <div className="mt-6 border-t-2 border-dashed border-gray-500 pt-1">
          {/* Scissors indicator */}
          <div className="text-center -mt-3 mb-2">
            <span className="text-gray-500 text-[12px] bg-white px-2">✂</span>
          </div>

          <div className="border-2 border-gray-400">
            <div className="flex flex-col sm:flex-row">
              {/* Left - QR Code section with red left border */}
              <div className="border-l-4 border-l-[#c8102e] px-3 py-3 flex-shrink-0 bg-white border-r-2 border-r-[#c8102e]">
                <div className="bg-[#c8102e] text-white px-2 py-0.5 text-[8px] font-bold inline-block mb-2">
                  NOUVEAU !
                </div>
                <div className="mb-2">
                  <p className="text-[10px] font-bold text-[#c8102e] leading-tight">Paiement</p>
                  <p className="text-[10px] font-bold text-[#c8102e] leading-tight">en ligne</p>
                </div>
                {/* QR code with phone illustration */}
                <div className="flex items-end gap-1">
                  <QRCodeSVG value="https://clients.cdc-habitat.fr/paiement" size={55} level="M" />
                  {/* Simple phone illustration */}
                  <div className="w-[28px] h-[45px] border-2 border-gray-600 rounded-md bg-white relative">
                    <div className="absolute top-1 left-0.5 right-0.5 bottom-2 border border-gray-300 flex items-center justify-center overflow-hidden">
                      <QRCodeSVG value="https://clients.cdc-habitat.fr" size={20} level="L" />
                    </div>
                    <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Middle - SEPA info */}
              <div className="flex-1 px-3 py-2 text-[8px] text-gray-900 border-r border-dashed border-gray-400">
                <p className="mb-0.5">
                  <span className="font-bold">IBAN :</span>{" "}
                  <span className="text-gray-600">Prière de joindre un RIB</span>
                </p>
                <p className="mb-0.5">
                  <span className="font-bold">ICS :</span> <span className="text-[#c8102e]">FR58ZZZ460977</span>
                </p>
                <p>
                  <span className="font-bold">RUM :</span>{" "}
                  <span className="text-[#c8102e]">TIP565000100013409853003789025708</span>
                </p>

                <div className="flex mt-4 mb-1">
                  <div className="w-1/2">
                    <span className="text-gray-600 text-[8px]">Date et lieu</span>
                  </div>
                  <div className="w-1/2">
                    <span className="text-gray-600 text-[8px]">Signature</span>
                  </div>
                </div>

                <div className="flex gap-4 mb-3">
                  <div className="w-1/2 border-b border-dashed border-gray-400 h-6"></div>
                  <div className="w-1/2 border-b border-dashed border-gray-400 h-6"></div>
                </div>

                <p className="text-[5.5px] text-gray-500 leading-relaxed">
                  Mandat de prélèvement SEPA ponctuel : en signant ce formulaire de mandat, vous autorisez votre
                  bailleur à envoyer des instructions à votre banque pour débiter votre compte, et votre banque à
                  débiter votre compte conformément aux instructions de votre bailleur. Vous bénéficiez du droit d'être
                  remboursé par votre banque selon les conditions décrites dans la convention que vous avez passée avec
                  elle. Toute demande de remboursement peut être présentée dans les 8 semaines suivant la date de débit
                  de votre compte pour un prélèvement autorisé. Vos droits concernant le présent mandat sont expliqués
                  dans un document que vous pouvez obtenir auprès de votre banque. Le présent document à valeur de
                  mandat de prélèvement SEPA ponctuel.{" "}
                  <span className="font-bold text-gray-700">
                    Votre signature vaut autorisation pour débiter, à réception, votre compte pour le montant indiqué.
                  </span>
                </p>
              </div>

              {/* Right - TIP Section */}
              <div className="w-full sm:w-[180px] px-3 py-2">
                <div className="text-[8px] leading-snug" style={{ fontFamily: "Courier New, monospace" }}>
                  <p className="font-bold text-[#c8102e]">MR MME LYOU Hassane Ouarda</p>
                  <p className="text-[#c8102e]">RES. KENNEDY</p>
                  <p className="text-[#c8102e]">Porte 0402</p>
                  <p className="text-[#c8102e]">1, ALLEE MARCEL PROUST</p>
                  <p className="text-[#c8102e]">95200 SARCELLES</p>
                </div>

                <div className="text-right my-3">
                  <p className="text-[12px] font-bold text-gray-900">Montant : 457,66 €</p>
                  <p
                    className="text-[#c8102e] font-black text-[16px] tracking-[0.02em]"
                    style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
                  >
                    TIPS€PA
                  </p>
                </div>

                <div className="text-[7px] leading-snug">
                  <p className="font-bold text-gray-900">CDC Habitat Social</p>
                  <p className="text-gray-700">Ag.ROISSY VAL DE FRANCE</p>
                  <p className="text-gray-700">CA : 340985/30</p>
                </div>

                <div className="text-[7px] mt-2 leading-snug">
                  <p className="font-bold text-gray-900">CDC HABITAT</p>
                  <p className="text-gray-700">CS 40800</p>
                  <p className="text-gray-700">75137 Paris Cedex 18</p>
                </div>

                <p className="text-[5px] text-gray-500 mt-3 border-t border-gray-400 pt-1 uppercase tracking-tight">
                  NE RIEN INSCRIRE SOUS CE TRAIT - NE PAS PLIER
                </p>
              </div>
            </div>

            {/* Bottom Barcode Section */}
            <div
              className="border-t border-dashed border-gray-400 py-2 px-3 text-center"
              style={{ fontFamily: "Courier New, monospace" }}
            >
              <p className="text-[11px] tracking-[0.15em] text-gray-900">000378902572 MR MME LYOU HASSAN</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-8 mt-2 text-[10px] tracking-[0.12em]">
                <span className="text-gray-900">565000004153</span>
                <span className="text-gray-900">17100013409853003789025708962108</span>
                <span className="font-bold text-gray-900 text-[12px]">45766</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvisEcheance;
