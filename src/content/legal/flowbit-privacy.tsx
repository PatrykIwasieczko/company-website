import { siteContent } from "@/content/site";

const linkClassName =
  "text-foreground underline-offset-4 hover:underline";

export const flowbitPrivacyMeta = {
  lastUpdated: "July 21, 2026",
  title: "FlowBit Privacy Policy",
  description:
    "How FlowBit handles information on Android and iOS — no accounts, no ads, local-only workout data.",
} as const;

export function FlowbitPrivacyPolicy() {
  const { owner } = siteContent;

  return (
    <div className="mt-10 space-y-8 text-muted-foreground">
      <p className="leading-relaxed">
        This Privacy Policy describes how <strong className="text-foreground">FlowBit</strong>{" "}
        (&quot;the App&quot;), developed by{" "}
        <strong className="text-foreground">{owner.googlePlayName}</strong>{" "}
        (&quot;we&quot;, &quot;us&quot;, or &quot;the developer&quot;), handles
        information when you use the App on Android or iOS.
      </p>
      <p className="leading-relaxed">
        FlowBit is an interval workout timer. You can build and run timed
        workouts, save custom plans on your device, and optionally unlock
        FlowBit Pro through an in-app purchase.
      </p>

      <section>
        <h2 className="text-xl font-medium text-foreground">1. Summary</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            We do <strong className="text-foreground">not</strong> create user
            accounts.
          </li>
          <li>
            We do <strong className="text-foreground">not</strong> collect
            personal information for advertising, analytics, or profiling.
          </li>
          <li>
            Workout plans and settings are stored{" "}
            <strong className="text-foreground">only on your device</strong>.
          </li>
          <li>
            Purchases are processed by{" "}
            <strong className="text-foreground">Google Play</strong> or the{" "}
            <strong className="text-foreground">Apple App Store</strong>, not by
            our own servers.
          </li>
          <li>
            The App does{" "}
            <strong className="text-foreground">not</strong> include third-party
            analytics, ads, or crash-reporting SDKs.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-medium text-foreground">
          2. Information we do not collect
        </h2>
        <p className="mt-3 leading-relaxed">
          FlowBit does <strong className="text-foreground">not</strong> collect,
          transmit, sell, or rent:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            Name, email address, phone number, or postal address (except if you
            choose to email us for support)
          </li>
          <li>Precise or approximate location</li>
          <li>
            Photos, contacts, or files from your device (beyond App storage
            described below)
          </li>
          <li>Health or fitness data from other apps or sensors</li>
          <li>Advertising identifiers for tracking</li>
          <li>Usage analytics or marketing profiles</li>
        </ul>
        <p className="mt-3 leading-relaxed">
          There is no sign-up and no cloud sync of your workouts.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium text-foreground">
          3. Information stored on your device
        </h2>
        <p className="mt-3 leading-relaxed">
          The App may store the following{" "}
          <strong className="text-foreground">locally</strong> on your phone
          (for example via on-device preferences storage):
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 font-medium text-foreground">Data</th>
                <th className="py-2 font-medium text-foreground">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/60 align-top">
                <td className="py-3 pr-4">
                  Custom workout plans (names, steps, interval durations)
                </td>
                <td className="py-3">
                  So your plans are available the next time you open the App
                </td>
              </tr>
              <tr className="border-b border-border/60 align-top">
                <td className="py-3 pr-4">
                  App settings (sound, vibration, countdown, keep-screen-on)
                </td>
                <td className="py-3">To remember your preferences</td>
              </tr>
              <tr className="align-top">
                <td className="py-3 pr-4">FlowBit Pro unlock status</td>
                <td className="py-3">
                  So a purchased unlock remains available after you close the
                  App
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-relaxed">
          This information stays on your device. It is removed if you uninstall
          the App or clear the App&apos;s storage in your device settings. We do
          not have access to this data remotely.
        </p>
        <p className="mt-3 leading-relaxed">
          Bundled preset workouts that ship with the App are part of the App
          package; they are not uploaded from your device.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium text-foreground">4. Permissions</h2>
        <p className="mt-3 leading-relaxed">
          Depending on the platform, the App may use:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <strong className="text-foreground">Vibration / haptics</strong> —
            optional feedback when intervals end or a workout finishes
            (controlled in Settings).
          </li>
          <li>
            <strong className="text-foreground">Keep screen on</strong> —
            optional; keeps the display awake on the Timer tab or while a workout
            is running (controlled in Settings).
          </li>
          <li>
            <strong className="text-foreground">Store billing</strong> — Google
            Play / the App Store handle FlowBit Pro purchases and restores. The
            App does not send your workout plans to our servers.
          </li>
        </ul>
        <p className="mt-3 leading-relaxed">
          Sound cues use short audio files bundled with the app (played on your
          device) when enabled in Settings. Countdown 3-2-1 uses a soft system
          click.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium text-foreground">
          5. In-app purchases and third parties
        </h2>
        <p className="mt-3 leading-relaxed">
          FlowBit Pro is a one-time (non-consumable) in-app purchase that unlocks
          features such as unlimited saved plans and the full preset library.
        </p>
        <p className="mt-3 leading-relaxed">
          Purchases and restorations are handled by:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <strong className="text-foreground">Google Play Billing</strong> on
            Android
          </li>
          <li>
            <strong className="text-foreground">Apple In-App Purchase</strong> on
            iOS
          </li>
        </ul>
        <p className="mt-3 leading-relaxed">
          Payment details (such as card numbers) are processed by Google or Apple
          under their own privacy policies. We do not receive your full payment
          card information. We may only learn that a purchase succeeded so the
          App can unlock Pro on your device.
        </p>
        <p className="mt-3 leading-relaxed">
          Relevant policies (for your reference):
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <a
              href="https://policies.google.com/privacy"
              className={linkClassName}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://www.apple.com/legal/privacy/"
              className={linkClassName}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Privacy Policy
            </a>
          </li>
        </ul>
        <p className="mt-3 leading-relaxed">
          Aside from store billing for purchases, FlowBit does not share App data
          with third-party advertising or analytics companies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium text-foreground">
          6. Children&apos;s privacy
        </h2>
        <p className="mt-3 leading-relaxed">
          The App is a general fitness timer tool. We do not knowingly collect
          personal information from children. Because we do not operate accounts
          or collect personal data through the App, we do not seek to identify
          users by age. If you believe a child has provided personal information
          to us by email, contact us and we will delete it.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium text-foreground">7. Data security</h2>
        <p className="mt-3 leading-relaxed">
          Local data is protected by your device&apos;s normal security (lock
          screen, OS app sandbox). We do not operate a FlowBit backend that stores
          your workouts. No method of storage is 100% secure; protect your device
          as you would for any app.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium text-foreground">
          8. Changes to this policy
        </h2>
        <p className="mt-3 leading-relaxed">
          We may update this Privacy Policy from time to time. The &quot;Last
          updated&quot; date at the top will change when we do. Continued use of
          the App after an update means you accept the revised policy. For
          material changes, we may also note them in the App store listing when
          practical.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium text-foreground">9. Your choices</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            Turn sound, vibration, countdown, and keep-screen-on on or off in{" "}
            <strong className="text-foreground">Settings</strong>.
          </li>
          <li>
            Delete saved plans inside the App, or clear App storage / uninstall to
            remove local data.
          </li>
          <li>
            Manage or request refunds for purchases through Google Play or the App
            Store according to their rules.
          </li>
          <li>Contact us (below) with privacy questions.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-medium text-foreground">10. Contact</h2>
        <p className="mt-3 leading-relaxed">
          For privacy questions about FlowBit, contact:
        </p>
        <ul className="mt-3 list-none space-y-2 leading-relaxed">
          <li>
            <strong className="text-foreground">Email:</strong>{" "}
            <a href={`mailto:${owner.email}`} className={linkClassName}>
              {owner.email}
            </a>
          </li>
          <li>
            <strong className="text-foreground">Developer:</strong>{" "}
            {owner.googlePlayName}
          </li>
          <li>
            <strong className="text-foreground">App:</strong> FlowBit (Google Play
            / Apple App Store)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-medium text-foreground">
          11. Governing note
        </h2>
        <p className="mt-3 leading-relaxed">
          This policy is provided to explain how FlowBit handles information. It
          is not legal advice. If you need formal legal review for your
          jurisdiction, consult a qualified professional.
        </p>
      </section>
    </div>
  );
}
