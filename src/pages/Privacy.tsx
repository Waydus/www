import { BackHome } from "../components/BackHome";
import { CookieNotice } from "../components/CookieNotice";
import { Footer } from "../components/Footer";

import styles from "./Privacy.module.css";

export default function Privacy() {
  return (
    <div>
      <BackHome />
      <article className={styles.container}>
        <div className={styles.content}>
          <h3>Privacy Policy</h3>
          <section>
            <p>
              {`Welcome to the Waydus iOS mobile application (our "APP"). This
            Privacy Policy applies to you and Waydus Ltd, irrespective of your
            country of residence or location.`}
            </p>
            <p>
              {`This Policy describes our privacy practices in plain language,
            keeping legal and technical jargon to a minimum to make sure you
            understand the information we collect, why we collect it, how it is
            used and your choices regarding your information.`}
            </p>
            <p>
              {`This Privacy Policy sits in line with the UK's Data Protection Act
            ("DPA") and the General Data Protection Regulation ("GDPR").`}
            </p>
          </section>

          <br />
          <div className={styles.header}>General Information</div>
          <section>
            <h4>What is Personal Data?</h4>
            <p>
              {`Personal Data is information by which you can be directly or
            indirectly identified (hereinafter "data"). This generally includes
            information such as your name, address, email address and telephone
            number; however, it may also include other information such as your
            IP address, Online identifiers or preferences and interests.`}
            </p>
          </section>
          <section>
            <h4>What is processing?</h4>
            <p>
              {`"Processing" means any operation or set of operations which is
            performed upon Personal Data, whether or not by automatic means. The
            term is broad and covers virtually any handling of data.`}
            </p>
          </section>
          <section>
            <h4>The Data Controller</h4>
            <p>
              The person that is responsible for your information under this
              Privacy Policy (the “data controller”) is:
            </p>
            <p>
              Waydus Ltd
              <br />
              124 City Road
              <br />
              London
              <br />
              EC1V 2NX, UK
            </p>
            <p>
              If you have any questions about the processing of your Personal
              Data by us or about data protection in general, you can reach us
              at privacy@waydus.com.
            </p>
          </section>
          <section>
            <h4>The Supervisory Authority</h4>
            <p>The competent data protection authority in the UK is:</p>
            <p>
              {`The Information Commissioner's Office (ICO)`}
              <br />
              Wycliffe House, Water Ln,
              <br />
              Wilmslow SK9 5AF, UK
              <br />
              www.ico.org.uk
            </p>
          </section>
          <section>
            <h4>Relevant legal basis</h4>
            <p>
              In the following, we inform you about the legal basis on which we
              process Personal Data. If more specific legal bases apply in
              individual cases, we will inform you of these separately.
            </p>
            <ul>
              <li>
                Consent - The data subject has given his/her consent to the
                processing of Personal Data relating to him/her for a specific
                purpose or purposes.
              </li>
              <li>
                {`Performance of a contract and pre-contractual enquiries -
              Processing is necessary for the performance of a contract to which
              the data subject is a party or for the performance of
              pre-contractual measures carried out at the data subject's
              request.`}
              </li>
              <li>
                Legitimate interests - Processing is necessary for the purposes
                of the legitimate interests of the controller or a third party
                unless such interests are overridden by the interests or
                fundamental rights and freedoms of the data subject which
                require the protection of Personal Data.
              </li>
            </ul>
          </section>
          <section>
            <h4>Your rights</h4>
            <p>
              When we process your Personal Data, you have following rights:
            </p>
            <ul>
              <li>
                Right to information: what Personal Data a company is processing
                and why (this policy).
              </li>
              <li>
                Right of access: You can request information about data
                collected.
              </li>
              <li>
                Right to rectification: If data collected is not correct, you
                can ask for it to be corrected.
              </li>
              <li>
                Right to erasure: Under certain circumstances, you can request
                the erasure of your data.
              </li>
              <li>
                Right to restriction of processing: In certain circumstances,
                you can request the further processing of your data, but the
                data will remain stored.
              </li>
              <li>
                Right to data portability: You can have the data collected about
                you transferred to another provider in a machine-readable
                format.
              </li>
              <li>
                Right to object: In certain circumstances (including where your
                data is processed on the basis of legitimate interests or for
                marketing purposes) you may object to processing.
              </li>
              <li>
                Rights in relation to automated case-by-case decisions,
                including profiling: This includes several rights where data is
                processed solely by automated means, and this has a legal or
                significant impact on an individual. In these circumstances, you
                have, among other things, the right to human intervention in the
                decision-making process.
              </li>
              <li>
                Right to Complaint: You have a right to complaint to your local
                Data Protection Authority. We would however appreciate the
                chance to deal with your concern first.
              </li>
            </ul>
            <p>
              If you wish to exercise any of the rights listed above, you can
              contact us by email at privacy@waydus.com. For your protection and
              the protection of all our users, we may need to request certain
              information from you to help us confirm your identity before we
              can respond to the above requests.
            </p>
          </section>
          <section>
            <h4>Data Security</h4>
            <p>
              Our data processing is subject to the principle that we only
              process the Personal Data that is necessary for the use of our
              services. In doing so, we take great care to ensure that your
              privacy and the confidentiality of all Personal Data are always
              guaranteed.
            </p>
            <p>
              All transmitted data is protected by TLS encryption. Transport
              Layer Security (TLS) is a protocol used to ensure secure data
              transmission on the Internet. The public-private key procedure is
              used here. This means that data encrypted with a publicly
              accessible key can only be decrypted again with a separate private
              key.
            </p>
            <p>
              We also use technical and organisational security measures (TOMs)
              throughout the company to protect the data we manage from you
              against accidental or intentional manipulation, loss, destruction
              or against access by unauthorised persons.
            </p>
          </section>
          <section>
            <h4>Updating your information</h4>
            <p>
              If you believe that the information, we hold about you is
              inaccurate or that we are no longer entitled to use it and want to
              request its rectification, deletion, or object to its processing,
              please do so by contacting us.
            </p>
            <p>
              For your protection and the protection of all of our users, we may
              ask you to provide proof of identity before we can answer the
              above requests. Please keep in mind, we may reject requests for
              certain reasons, including if the request is unlawful or if it may
              infringe on trade secrets or intellectual property or the privacy
              of another person.
            </p>
            <p>
              Also, we may not be able to accommodate certain requests to object
              to the processing of Personal Data, notably where such requests
              would not allow us to provide our service to you anymore.
            </p>
          </section>
          <section>
            <h4>Withdraw your consent</h4>
            <p>
              You may withdraw your consent and request us to stop using and/or
              disclosing your Personal Data for any or all of the Purposes by
              submitting your request to us. Should you withdraw your consent to
              the collection, use or disclosure of your Personal Data, it may
              impact our ability to proceed with your transactions, agreements,
              or interactions with us. Please note that your withdrawal of
              consent will not prevent us from exercising our legal rights
              (including any remedies) or undertaking any steps as we may be
              entitled to at law.
            </p>
          </section>
          <section>
            <h4>Transfer</h4>
            <p>We may transfer your information if:</p>
            <ul>
              <li>
                we are involved in whole or in part in a merger, sale,
                acquisition, divestiture, restructuring, reorganisation,
                dissolution, bankruptcy or other change of ownership or control.
              </li>
              <li>
                reasonably necessary: (i) to comply with a legal process, such
                as a court order, subpoena or search warrant, government/legal
                investigation, or other legal requirement; (ii) to assist in the
                prevention or detection of crime (in each case, subject to
                applicable law); or (iii) to protect the safety of any person.
              </li>
              <li>
                disclosure would reduce our liability in actual or threatened
                litigation; (ii) if necessary to protect our legal rights and
                the legal rights of our users, business partners or other
                interested parties; (iii) to enforce our agreements with you;
                and (iv) to investigate, prevent, or take other action regarding
                illegal activities, suspected fraud or other misconduct.
              </li>
            </ul>
            <p>
              We may ask for your consent to share your information with third
              parties. In any such case, we will make clear why we want to share
              the information.
            </p>
          </section>

          <section>
            <h4>Retention</h4>
            <p>
              In instances where you submit data to us, we will retain your data
              on our server provided by Amazon Web Services (AWS) in their
              London Location until the purpose for processing it no longer
              applies. If you assert a legitimate request for deletion or revoke
              your consent to data processing, your data will be deleted unless
              we have other legally permissible reasons for storing your
              Personal Data (e.g., retention periods under tax or commercial
              law); in the latter case, the data will be deleted once these
              reasons no longer apply.
            </p>
          </section>

          <section>
            <h4>Do you have to provide data?</h4>
            <p>
              The provision of both Personal Data and special category data is
              neither legally nor contractually required, nor is it necessary
              for the conclusion of a contract. You are also not obliged to
              provide the Personal Data. However, failure to provide the data
              could result in you not being able to use our APP or not being
              able to use it to its full extent. The legal basis for this data
              processing is consent.
            </p>
            <p>
              You may withdraw your consent and request us to stop using and/or
              disclosing your personal and special category data by submitting
              your request to us in writing to privacy@waydus.com.
            </p>

            <div className={styles.header}>About our APP</div>

            <p>
              In principle, our APP is designed to have data protection-friendly
              default settings. This includes, for example, that only such
              Personal Data is collected that is required for the function of
              the APP (principle of data minimisation). As such we have made
              sure that as little as possible information that directly
              identifies you is collected.
            </p>
            <p>
              We assure you of the lawful and responsible handling of all data
              that you transmit to us as a user of our APP and would like to
              transparently present to you below which data we process, what we
              use it for and whether and, if so, to what extent it is stored by
              us and/or transmitted to third parties.
            </p>
          </section>

          <section>
            <h4>What sources and data do we use</h4>
            <p>
              We process Personal Data only to the extent authorised by you
              personally. In doing so, we only collect and process the data that
              is absolutely necessary to maintain and use the APP. Personal data
              may be collected in two ways, that is directly when you for
              example volunteer it to us or automatically for example when you
              install and use our APP.
            </p>
          </section>

          <section>
            <h4>Do Not Sell</h4>
            <p>We do not sell Personal Data to third parties.</p>
          </section>

          <section>
            <h4>Authorisations and Access</h4>
            <p>
              {`We may request permission to access your device's GPS, Camera and
            Microphone, Internet, Album and Network Access. The legal basis for
            data processing is our legitimate interest and your consent. You can
            deny access on your device via the Settings/Notifications/ options
            of your device; however, this means that our APP may not function as
            intended.`}
            </p>
          </section>

          <br />
          <div className={styles.header}>
            Data collection, storage and use of Personal Data
          </div>
          <section>
            <h4>When you contact us</h4>
            <p>
              If you send us feedback, or a support request, your e-mail address
              will only be used for correspondence with you and only to clarify
              your support case. Your data will not be passed on to third
              parties. The data of your request will be deleted after
              completion. In the course of the support you have requested, it
              may be necessary for you to provide us with some of your Personal
              Data so that we can fulfil our contractual obligations. The data
              transmitted in this context will be deleted after the end of the
              support. The legal basis for this processing is consent and our
              legitimate interest and, in some cases, fulfilment of our
              contractual obligations.
            </p>
          </section>
          <section>
            <h4>When using our APP</h4>
            <p>
              When using the APP, it is necessary to create and set up an
              account using your email address and send you a One-time password
              (OTP).
            </p>
            <p>
              When using our APP, you can submit, share and publish Personal
              Data including pictures, image, photos, and free text submissions
              as well as your location. Some of the Personal Data you provide
              may be considered “special” or “sensitive”. This includes Personal
              Data concerning for example your health, racial or ethnic origins,
              sexual orientation, and religious beliefs. By choosing to provide
              this data, you consent to our processing of that data.{" "}
            </p>
            <p>
              You have choices about the Personal Data you upload and share. You
              don’t have to provide Personal Data; however, Personal Data helps
              you to get more from our Services. It’s your choice whether to
              include special category data and to make that special category
              data public. Please do not post, upload or add data that you would
              not want to be available.
            </p>
            <p>
              The legal basis for the processing of your personal and special
              category data is the establishment and implementation of the user
              contract for the use of the service as well as your consent. We
              store the data until you delete your user account. Insofar as
              legal retention periods are to be observed, storage also takes
              place beyond the time of deletion of a user account.
            </p>
            <p>
              You may withdraw your consent and request us to stop using and/or
              disclosing your personal and special category data by submitting
              your request to us in writing to privacy@waydus.com or use the
              delete my account feature in our App.
            </p>

            <div className={styles.header}>
              Data collection, storage and use of technical Personal Data
            </div>
            <p>
              Some countries including the UK and the European Union, have a
              broad definition of Personal Data and as indicated above it
              encompasses online identifiers, IP address, device IDs as such we
              are required to cover the following.
            </p>
          </section>

          <section>
            <h4>Apple</h4>
            <p>
              {`The App can be downloaded from the "Apple App Store" and you might
            be required to register with Apple and/or to download certain App
            store software. When downloading and installing our APP, Apple
            collects and processes the following data: device identifiers, IP
            addresses, and location information and it cannot be ruled out that
            Apple also transmits the information collected to a server in a
            third country.`}
            </p>
            <p>
              Apple may also collect information from and about the device(s)
              you use to access our APP, including hardware and software
              information such as IP address, device ID and type,
              device-specific and app settings and properties, APP crashes,
              advertising IDs information about your wireless and mobile network
              connection such as your service provider and signal strength;
              information about device sensors such as accelerometer, gyroscope,
              and compass when you are using our APP. We cannot influence which
              Personal Data Apple processes with your registration and the
              provision of downloads in the respective App store and App store
              software. The responsible party in this respect is Apple.
            </p>
          </section>

          <br />
          <i>Miscellaneous and Closing</i>
          <section>
            <h4>Uninstall</h4>
            <p>
              You can stop the collection of information by the APP by
              uninstalling it using the standard uninstall procedure for your
              device.
            </p>
          </section>

          <section>
            <h4>Updating your information</h4>
            <p>
              If you believe that the information, we hold about you is
              inaccurate or that we are no longer entitled to use it and want to
              request its rectification, deletion, or object to its processing,
              please do so in your account or contact us using
              privacy@waydus.com. For your protection and the protection of all
              of our users, we may ask you to provide proof of identity before
              we can answer the above requests.
            </p>
          </section>

          <section>
            <h4>Exercising your rights</h4>
            <p>
              If you wish to access your Personal Data or exercise any of the
              rights listed above, you should apply in writing, providing
              evidence of your identity. Any communication from us in relation
              to your rights as detailed above will be provided free of charge.
              However, in case of requests that are manifestly unfounded or
              excessive, in particular because of their repetitive character, we
              may charge a reasonable fee taking into account the administrative
              costs of providing the information or communication or taking the
              action requested; or refuse to act on the request.
            </p>
            <p>
              Insofar as you have given us consent to process Personal Data for
              specific purposes, the lawfulness of this processing is given on
              the basis of your consent. Consent given can be revoked at any
              time.
            </p>
          </section>

          <section>
            <h4>Automated individual decision-making including profiling</h4>
            <p>
              We do not make automated decisions in individual cases, including
              profiling.
            </p>
          </section>

          <section>
            <h4>Accuracy</h4>
            <p>
              It is important that the data we hold about you is accurate and
              current, therefore please keep us informed of any changes to your
              Personal Data.
            </p>
          </section>

          <section>
            <h4>Changes, Queries and Complaint</h4>
            <p>
              This Policy and our commitment to protecting the privacy of your
              Personal Data can result in changes to this Policy. Please
              regularly review this policy to keep up to date. This Policy was
              last updated on Thursday, 08 December 2022.
            </p>
            <p>
              Any comments or queries on this policy should be directed to us.
              If you believe that we have not complied with this Policy or acted
              otherwise than in accordance with data protection law, then you
              should notify us.
            </p>
          </section>
        </div>
      </article>

      <CookieNotice />
      <Footer />
    </div>
  );
}
