import { BackHome } from "../components/BackHome";
import { CookieNotice } from "../components/CookieNotice";
import { Footer } from "../components/Footer";

import styles from "./Tcs.module.css";

export default function TermsAndConditions() {
  return (
    <div>
      <BackHome />
      <article className={styles.container}>
        <div className={styles.content}>
          <h3>Terms & Conditions</h3>
          <p>
            Welcome to the Waydus iOS mobile application (our “APP”). These
            Terms and Conditions (these “Terms”) constitute a legal agreement
            between you the End-User (“End-User” or “you”) and Waydus Ltd of 124
            City Road, London, EC1V 2NX , UK (“we”, “us”, or “our”) governing
            the use of our APP and our Services. We license use of our APP to
            you on the basis of these Terms.
          </p>

          <ol>
            <li>
              <b>License Agreement</b>
              <br />
              <ol>
                <li>
                  The parties of this License Agreement acknowledge that Apple
                  Inc. is not a Party to this License Agreement and is not bound
                  by any provisions or obligations with regard to our APP, such
                  as warranty, liability, maintenance and support thereof. We,
                  not Apple Inc., are solely responsible for our APP and the
                  content thereof.
                </li>
                <li>
                  {`This License Agreement may not provide for usage rules for our
                APP that are in conflict with the latest "Apple App Store" Terms
                of Service.`}
                </li>
                <li>
                  The License granted to you for our APP, is limited to a
                  non-transferable License to use our APP on a device that
                  utilises the Apple iOS operating systems and in accordance
                  with the usage rules set forth in Apple Inc.’s Terms of
                  Service;
                </li>
                <li>
                  We are responsible for providing any maintenance and support
                  services with respect to the APP as specified in these Terms
                  or as otherwise required under applicable law.
                </li>
                <li>
                  You acknowledge that Apple Inc. has no obligation whatsoever
                  to furnish any maintenance and support services with respect
                  to the APP;
                </li>
                <li>
                  In the event of any failure of the APP to conform to any
                  applicable warranty, you may notify Apple Inc., in accordance
                  with its terms and policies, may refund the purchase price, if
                  any, paid for the APP, and to the maximum extent permitted by
                  applicable law, Apple Inc. will have no other warranty
                  obligation whatsoever with respect to the APP;
                </li>
                <li>
                  You must comply with Apple Inc.’s Terms of agreement when
                  using the APP,
                </li>
                <li>
                  You acknowledge and agree that Apple Inc. is a third-party
                  beneficiary of these Terms, and that Apple Inc. will have the
                  right (and will be deemed to have accepted the right) to
                  enforce the terms and conditions in these Terms against you as
                  a third-party beneficiary thereof.
                </li>
              </ol>
              <br />
            </li>
            <li>
              <b>Scope of license</b>
              <br />
              <ol>
                <li>
                  Provided you are fulfilling your user obligations set forth
                  below, you are given a non-transferable, non-exclusive,
                  non-sublicensable license to install and use our APP on any
                  supported Apple branded Products that you own or control and
                  as permitted by the Usage Rules set forth in section Apple
                  Inc.’s Terms of Service.
                </li>
                <li>
                  This license will also govern any updates of our APP provided
                  by us that replace, repair, and/or supplement our APP, unless
                  a separate license is provided for such update in which case
                  the terms of that new license will govern.
                </li>
                <li>
                  You may not share or make our APP available to third parties,
                  sell, rent, lend, lease, or otherwise redistribute our APP.
                </li>
                <li>
                  You may not reverse engineer, translate, disassemble,
                  integrate, decompile, integrate, remove, modify, combine,
                  create derivative works or updates of, adapt, or attempt to
                  derive the source code of our APP, or any part thereof.
                </li>
                <li>
                  You may not copy or alter our APP or portions thereof. You may
                  create and store copies only on devices that you own or
                  control for backup keeping under the terms of these Terms, and
                  “Apple App Store” Terms of Service, and any other terms and
                  conditions that apply to the device or software used.
                </li>
                <li>You may not remove any intellectual property notices.</li>
                <li>
                  You acknowledge that no unauthorised third parties may gain
                  access to these copies at any time.
                </li>
                <li>
                  Violations of the obligations mentioned above, as well as the
                  attempt of such infringement, may be subject to prosecution
                  and damages.
                </li>
                <li>
                  We reserve the right to modify the terms and conditions of
                  licensing.
                </li>
                <li>
                  Nothing in this license should be interpreted to restrict
                  third-party terms. When using our APP, you must ensure that
                  you comply with applicable third-party terms and conditions.
                </li>
              </ol>
              <br />
            </li>
            <li>
              <b>Technical Requirements</b>
              <br />
              <ol>
                <li>
                  We attempt to keep our APP updated so that it complies with
                  modified/new versions of the firmware and new hardware. You
                  are not granted rights to claim such an update.
                </li>
                <li>
                  You acknowledge that it is your responsibility to confirm and
                  determine that the APP end-user device on which you intend to
                  use our APP satisfies the technical specifications mentioned
                  above.
                </li>
                <li>
                  We reserve the right to modify the technical specifications as
                  it sees appropriate at any time.
                </li>
              </ol>
              <br />
            </li>
            <li>
              <b>Uploading Content to our APP</b>
              <br />
              <ol>
                <li>
                  You irrevocably and unconditionally represent and warrant that
                  any of your content uploaded to our APP complies with our
                  Privacy Policy, and any other applicable laws.
                </li>
                <li>
                  You are fully responsible for your content uploaded to our
                  APP. We will not be responsible, or liable to any third party,
                  for:
                  <ol>
                    <li>
                      the content or accuracy of any content or data uploaded by
                      you, by us on your behalf, or any other user of our APP;
                      or
                    </li>
                    <li>
                      the loss of any content or data provided to us by you. You
                      should keep a record of all such content and data.
                    </li>
                  </ol>
                </li>
                <li>
                  We will only use the content uploaded by you for the purposes
                  of carrying out the Services, carrying out our obligations in
                  this Agreement and any other purpose expressly set out in this
                  Agreement or otherwise agreed between us. We will not
                  otherwise disclose or distribute the content uploaded by you,
                  save for when required by law, a court of competent
                  jurisdiction or any governmental or regulatory authority.
                </li>
                <li>
                  We may use the content uploaded by you for the purpose of data
                  analytics or to implement artificial intelligence or machine
                  learning. Any such content shall be anonymised and used only
                  for the purposes of improving the Services and our response to
                  users of the APP.
                </li>
                <li>
                  We have the right to disclose your identity to any third party
                  claiming that any content posted or uploaded by you to our APP
                  constitutes a violation of their rights under applicable law.
                </li>
                <li>
                  We have the right to delete any content uploaded to our APP
                  if, in our opinion, it does not comply with the content
                  standards set out by us.
                </li>
              </ol>
              <br />
            </li>
            <li>
              <b>Prohibited Uses</b>
              <br />
              <ol>
                <li>You may use our APP only for lawful purposes.</li>
                <li>
                  You may not use our APP:
                  <ol>
                    <li>
                      in any way that breaches any applicable local or
                      international laws or regulations;
                    </li>
                    <li>
                      in any way that is unlawful or fraudulent, or has any
                      unlawful or fraudulent purpose or effect;
                    </li>
                    <li>
                      to knowingly transmit any data, send or upload any
                      material that contains viruses, Trojan horses, worms,
                      time-bombs, keystroke loggers, spyware, adware or any
                      other harmful programs or similar computer code designed
                      to adversely affect the operation of any computer software
                      or hardware.
                    </li>
                    <li>
                      to post content that contains hate speech or threats, is
                      sexually explicit or pornographic, incites violence, or
                      contains nudity or violence;
                    </li>
                    <li>
                      to post content that promotes racism, bigotry, hatred or
                      physical harm of any kind against any group or individual;
                    </li>
                    <li>
                      to harass, stalk, intimidate, assault, abuse or defame any
                      person;
                    </li>
                  </ol>
                </li>
              </ol>
              <br />
            </li>
            <li>
              <b>Liability</b>
              <br />
              <ol>
                <li>
                  Our responsibility in the case of violation of obligations and
                  tort shall be limited to intent and gross negligence.
                </li>
                <li>
                  We are not liable for the completeness, accuracy or
                  correctness of any information uploaded on our APP and any
                  Related Content.
                </li>
                <li>
                  You agree not to use the Services, our APP and the Related
                  Content for any re-sale purposes, and we have no liability to
                  you, whether in contract, tort (including negligence), breach
                  of statutory duty, or otherwise, arising under or in
                  connection with these Terms (including but not limited to the
                  use of, or inability to use, the Services, our APP or any
                  other website or software) for:
                  <ol>
                    <li>loss of profits, sales, business, or revenue;</li>
                    <li>business interruption;</li>
                    <li>loss of anticipated savings;</li>
                    <li>loss or corruption of data or information;</li>
                    <li>
                      loss of business opportunity, goodwill or reputation;
                    </li>
                    <li>
                      or any other indirect or consequential loss or damage.
                    </li>
                  </ol>
                </li>
                <li>
                  Nothing in these Terms shall limit or exclude our liability
                  for:
                  <ol>
                    <li>
                      death or personal injury resulting from our negligence;
                    </li>
                    <li>fraud; and/or</li>
                    <li>
                      any other matter in respect of which we are prohibited
                      under applicable law from limiting or excluding our
                      liability.
                    </li>
                  </ol>
                </li>
                <li>
                  Our APP is not intended to serve a record-keeping function and
                  we shall not be liable for any loss of data or content.
                </li>
                <li>
                  These Terms set out the full extent of our obligations and
                  liabilities in respect of the supply of the Services and our
                  APP.
                </li>
                <li>
                  Except as expressly stated in these Terms, there are no
                  conditions, warranties, representations or other terms,
                  express or implied, that are binding on us. Any condition,
                  warranty, representation or other term concerning the supply
                  of the Services and our APP which might otherwise be implied
                  into, or incorporated in, these Terms whether by statute,
                  common law or otherwise, is excluded to the fullest extent
                  permitted by law.
                </li>
              </ol>
              <br />
            </li>
            <li>
              <b>Warranty</b>
              <br />
              <ol>
                <li>
                  We warrant that our APP is free of spyware, trojan horses,
                  viruses, or any other malware at the time of your download.
                </li>
                <li>
                  No warranty is provided for our APP that is not executable on
                  the device, that has been unauthorisedly modified, handled
                  inappropriately or culpably, combined or installed with
                  inappropriate hardware or software, used within appropriate
                  accessories, regardless if by yourself or by third parties, or
                  if there are any other reasons outside of our sphere of
                  influence that affect the executability of our APP.
                </li>
                <li>
                  You are required to inspect our APP immediately after
                  installing it and notify us about issues discovered without
                  delay. The defect report will be taken into consideration and
                  further investigated if it has been mailed within a period of
                  seven (7) days after discovery.
                </li>
                <li>
                  If we confirm that our APP is defective, we reserve to remedy
                  the situation by means of solving the defect.
                </li>
              </ol>
              <br />
            </li>
            <li>
              <b>Legal Compliance</b>
              <br />
              <p>
                {`You represent and warrant that You are not located in a country
              that is subject to a UK Government embargo, or that has been
              designated by the UK Government as a "terrorist supporting"
              country; and that You are not listed on any UK Government list of
              prohibited or restricted parties.`}
              </p>
            </li>
            <li>
              <b>Termination</b>
              <br />
              <p>
                The license is valid until terminated by us or by you. Your
                rights under this license will terminate automatically and
                without notice from us if you fail to adhere to any term(s) of
                this license. Upon License termination, you shall stop all use
                of our APP, and destroy all copies, full or partial, of our APP.
              </p>
            </li>
            <li>
              <b>Third-Party Terms</b>
              <br />
              <p>
                We represent and warrants that we will comply with applicable
                third-party terms of agreement when using licensed Application.
              </p>
            </li>
            <li>
              <b>Intellectual Property Rights</b>
              <br />
              <p>
                {`We and the End-User acknowledge that, in the event of any
              third-party claim that our APP or the End-User's possession and
              use of our APP infringes on the third party's intellectual
              property rights, we, and not Apple Inc., will be solely
              responsible for the investigation, defence, settlement and
              discharge or any such intellectual property infringement claims.`}
              </p>
            </li>
            <li>
              <b>Other important terms</b>
              <br />
              <ol>
                <li>
                  We may transfer our rights and obligations under these Terms
                  to another organisation, but this will not affect your rights
                  or obligations under these Terms.
                </li>
                <li>
                  You may only transfer your rights or your obligations under
                  these Terms to another person if we agree in writing.
                </li>
                <li>
                  No joint venture, partnership or agency or employment
                  relationship has arisen by reason of these Terms.
                </li>
                <li>
                  These Terms and any document expressly referred to in it
                  constitutes the entire agreement between us regarding their
                  subject matter, and supersedes and extinguishes all previous
                  agreements, promises, assurances, warranties, representations,
                  and understandings between us, whether written or oral,
                  relating to that subject matter. You agree that you shall have
                  no remedies in respect of any statement, representation,
                  assurance, or warranty (whether made innocently or
                  negligently) that is not set out in these Terms, or any
                  document expressly referred to in it. You agree that you shall
                  have no claim for innocent or negligent misrepresentation or
                  negligent misstatement based on any statement in these Terms
                  or any document expressly referred to in it.
                </li>
                <li>
                  If we fail to insist that you perform any of your obligations
                  under these Terms, or if we do not enforce our rights against
                  you, or if we delay in doing so, that will not mean that we
                  have waived our rights against you and will not mean that you
                  do not have to comply with those obligations. If we do waive a
                  default by you, we will only do so in writing, and that will
                  not mean that we will automatically waive any later default by
                  you.
                </li>
                <li>
                  Each of the conditions of these Terms operates separately. If
                  any court or competent authority decides that any of them are
                  unlawful or unenforceable, the remaining conditions will
                  remain in full force and effect.
                </li>
                <li>
                  These Terms, its subject matter and its formation, and any
                  other disputes or claims in connection therewith, are governed
                  by the law of England and Wales. In the event of any such
                  disputes or claims in connection with these Terms, you agree
                  to first engage in good faith discussions with us to resolve
                  such dispute or claim. If such dispute or claim is not
                  resolved within sixty (60) days, we both irrevocably submit to
                  the exclusive jurisdiction of the courts of England and Wales.
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </article>

      <CookieNotice />
      <Footer />
    </div>
  );
}
