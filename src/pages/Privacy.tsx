import { useEffect } from 'react'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'

const LAST_UPDATED = 'March 31, 2026'

export default function Privacy() {
  useEffect(() => { document.title = 'Privacy Policy | Likwiid' }, [])

  return (
    <PageTransition>
      <div className="pt-20 pb-16 px-6">
        <div className="mx-auto max-w-[800px]">
          <SectionHeading as="h1" title="Privacy Policy" />

          <p className="text-text-tertiary text-sm mb-10">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                Information we collect
              </h2>
              <p className="text-text-secondary leading-relaxed">
                When you use our contact form, we collect the information you provide: your name, email address,
                company name (if provided), and message content. We do not collect any information automatically
                beyond what is strictly necessary for the website to function.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                How we use your information
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We use the information you submit through our contact form solely to respond to your inquiry and
                discuss potential projects. We will not send you marketing communications unless you have explicitly
                opted in to receive them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                Data sharing
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We do not sell, trade, or share your personal information with third parties. Your data stays with us
                and is used exclusively for the purpose it was provided.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                Cookies and local storage
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We only use essential cookies. Specifically, we store your theme preference (light or dark mode)
                in your browser&apos;s localStorage. We do not use any tracking cookies or third-party cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                Analytics
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We use privacy-friendly analytics that do not use cookies and do not track personal data. No
                personally identifiable information is collected through our analytics, and your browsing activity
                is not tracked across websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                Data retention
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Contact form submissions are retained for legitimate business purposes, such as maintaining
                records of client communications and project discussions. We keep this data only as long as
                necessary for these purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                Your rights
              </h2>
              <p className="text-text-secondary leading-relaxed">
                You have the right to request access to, correction of, or deletion of any personal data we hold
                about you. To exercise any of these rights, please contact us at{' '}
                <a href="mailto:gabriel@likwiid.com" className="text-accent-gold hover:underline">
                  gabriel@likwiid.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                Updates to this policy
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this privacy policy from time to time. Any changes will be reflected on this page
                with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary mb-3">
                Contact
              </h2>
              <p className="text-text-secondary leading-relaxed">
                If you have any questions about this privacy policy or how we handle your data, please reach out
                at{' '}
                <a href="mailto:gabriel@likwiid.com" className="text-accent-gold hover:underline">
                  gabriel@likwiid.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
