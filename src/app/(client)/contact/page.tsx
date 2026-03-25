'use client';

import { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const mailtoHref = useMemo(() => {
    const to = 'riverdalepawnbrokers@gmail.com';
    const subject = `Website enquiry${form.name ? ` - ${form.name}` : ''}`;
    const body = [
      `Name: ${form.name}`.trim(),
      `Email: ${form.email}`.trim(),
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n');

    return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [form.email, form.message, form.name]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill all fields.');
      return;
    }
    toast.success('Opening your email app to send the message.');
    window.location.href = mailtoHref;
  }

  return (
    <div className="bg-background">
      <section className="py-14 md:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Have a question about an order, a product, or selling metals? Send
              us a message and our team will get back to you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 bg-card border-border">
              <CardHeader>
                <CardTitle>Send a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      rows={6}
                      className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="Write your message..."
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-[#9A0156] to-[#c0016d] hover:from-[#c0016d] hover:to-[#d40179] text-white font-bold"
                    >
                      Send
                    </Button>
                    <Button type="button" variant="outline" asChild>
                      <a href={mailtoHref}>Open in email app</a>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Reach us directly</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="text-muted-foreground">
                  <div className="font-semibold text-foreground">Email</div>
                  <a
                    className="text-[#FBC02E] hover:text-[#E5AD1F]"
                    href="mailto:riverdalepawnbrokers@gmail.com"
                  >
                    riverdalepawnbrokers@gmail.com
                  </a>
                </div>
                <div className="text-muted-foreground">
                  <div className="font-semibold text-foreground">Phone</div>
                  <a
                    className="text-[#FBC02E] hover:text-[#E5AD1F]"
                    href="tel:+14379841061"
                  >
                    +1 437 984 1061
                  </a>
                </div>
                <div className="pt-2 text-xs text-muted-foreground">
                  For order questions, include your order reference in the
                  message.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

