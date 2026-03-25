'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      <section className="py-14 md:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              We value your privacy and are committed to protecting your personal
              data when using our platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>- Full name and contact details</li>
                <li>- Government-issued identification</li>
                <li>- Payment and transaction details</li>
                <li>- Device and browser information</li>
                <li>- Location data</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>How We Use Information</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>- To process buying and selling transactions</li>
                <li>- To verify user identity</li>
                <li>- To improve platform performance</li>
                <li>- To communicate updates and notifications</li>
                <li>- To comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Data Sharing</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>- With payment providers for transaction processing</li>
                <li>- With logistics partners for delivery</li>
                <li>- With legal authorities when required</li>
                <li>- We do not sell user data to third parties</li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                We implement industry-standard security measures to protect your
                personal information from unauthorized access or misuse.
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Cookies Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                We use cookies to enhance user experience, analyze traffic, and
                personalize content.
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                We retain your data only as long as necessary for business and
                legal purposes.
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>User Rights</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>- Access your personal data</li>
                  <li>- Request correction of inaccurate data</li>
                  <li>- Request deletion of your data</li>
                  <li>- Withdraw consent at any time</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Our platform may contain links to third-party websites. We are
                not responsible for their privacy practices.
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Children&apos;s Privacy</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Our services are not intended for users under the age of 18.
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Policy Updates</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We may update this policy from time to time. Changes will be
              posted on this page.
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

