'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Award, Scale, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description:
      'We focus on transparent pricing, secure transactions, and a smooth customer experience.',
  },
  {
    icon: Scale,
    title: 'Fair Evaluations',
    description:
      'Clear assessments and straightforward explanations for every item and service.',
  },
  {
    icon: Award,
    title: 'Quality Products',
    description:
      'Carefully curated jewellery and precious metal products with authenticity in mind.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description:
      'We’re here to help — whether you’re buying, selling, or tracking an order.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="py-14 md:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              About Us
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Riverdale Pawn Brokers is built on trust, transparency, and
              customer care. We help you buy and sell precious metals and
              jewellery with confidence.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/products">
                <Button className="bg-gradient-to-r from-[#9A0156] to-[#c0016d] hover:from-[#c0016d] hover:to-[#d40179] text-white font-bold">
                  Browse Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-foreground">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {f.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground">
                  What we do
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>- Buy and sell precious metals</li>
                  <li>- Jewellery products catalogue</li>
                  <li>- Order placement and tracking</li>
                  <li>- Quick quotes for selling metals</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground">
                  Our promise
                </h2>
                <p className="mt-4 text-sm text-muted-foreground">
                  We aim to keep everything simple: clear product details,
                  straightforward checkout, and fast follow-up from our team.
                  If you ever have questions, reach out — we’re happy to help.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

