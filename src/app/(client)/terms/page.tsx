'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background">
      <section className="py-14 md:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              By accessing and using our platform, you agree to these Terms and
              Conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Eligibility</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Users must be at least 18 years old and legally capable of
              entering into agreements.
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Account Registration</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <div>
                <div className="font-semibold text-foreground">Requirements</div>
                <ul className="mt-2 space-y-2">
                  <li>- Provide accurate personal information</li>
                  <li>- Complete identity verification if required</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-foreground">Responsibilities</div>
                <ul className="mt-2 space-y-2">
                  <li>- Maintain account confidentiality</li>
                  <li>- Notify us of unauthorized access</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Services</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>- Sell precious metals to the platform</li>
                <li>- Purchase jewelry and metal products</li>
                <li>- Receive price estimates based on market rates</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Prices are based on market rates, weight, and purity. Final
              valuation is subject to verification.
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Selling Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>- Items must be legally owned</li>
                  <li>- Accurate details must be provided</li>
                  <li>- Final price may change after inspection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Buying Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>- Orders confirmed after successful payment</li>
                  <li>- Product availability is subject to change</li>
                  <li>- Prices may change without notice</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Payments</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <div>
                <div className="font-semibold text-foreground">Methods</div>
                <ul className="mt-2 space-y-2">
                  <li>- Credit/Debit cards</li>
                  <li>- Bank transfers</li>
                  <li>- Digital payment systems</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-foreground">Notes</div>
                <ul className="mt-2 space-y-2">
                  <li>- All payments must be completed before order processing</li>
                  <li>- We are not responsible for third-party payment failures</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Shipping &amp; Delivery</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Delivery timelines depend on location and logistics providers.
              Delays may occur beyond our control.
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Returns &amp; Refunds</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>- Returns accepted within specified period</li>
                <li>- Items must be unused and in original condition</li>
                <li>- Refunds processed after verification</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Prohibited Activities</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>- Selling stolen or illegal goods</li>
                <li>- Fraudulent activities</li>
                <li>- Providing false information</li>
                <li>- System misuse or hacking attempts</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We are not liable for indirect losses, delays, or damages arising
              from use of the platform.
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We reserve the right to suspend or terminate accounts violating
              these terms.
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We may modify these terms at any time. Continued use indicates
              acceptance.
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              These terms are governed by applicable local laws and regulations.
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>
                <span className="font-semibold text-foreground">Email:</span>{' '}
                <a
                  className="text-[#FBC02E] hover:text-[#E5AD1F]"
                  href="mailto:riverdalepawnbrokers@gmail.com"
                >
                  riverdalepawnbrokers@gmail.com
                </a>
              </div>
              <div>
                <span className="font-semibold text-foreground">Phone:</span>{' '}
                <a
                  className="text-[#FBC02E] hover:text-[#E5AD1F]"
                  href="tel:+14379841061"
                >
                  +1 437 984 1061
                </a>
              </div>
              <div className="text-xs text-muted-foreground">
                Address: (please add your business address)
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

