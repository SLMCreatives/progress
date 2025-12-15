"use client";

import { useEffect, useState } from "react";
import {
  Sparkles,
  Briefcase,
  TrendingUp,
  Award,
  Download,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AlumniProgressionPage() {
  const [params, setParams] = useState({
    name: "Tim",
    diploma: "Diploma in Management",
    degree: "Bachelor of Business Administration",
    credits: "30",
    ec_name: "Sulaiman",
    ec_number: "601121292383",
    faculty: "FOB"
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      setParams({
        name: searchParams.get("name") || "Graduate",
        diploma: searchParams.get("diploma") || "Diploma programme",
        degree:
          searchParams.get("degree") || "Bachelor of Early Childhood Education",
        credits: searchParams.get("credits") || "30",
        ec_name: searchParams.get("ec_name") || "Sarah",
        ec_number: searchParams.get("ec_number") || "60123456789",
        faculty: searchParams.get("faculty") || "FEH"
      });
    }
  }, []);

  const handleDownloadVoucher = () => {
    alert("Voucher downloaded! Contact your education counselor to redeem.");
  };

  const whatsappMessage = encodeURIComponent(
    `Hi ${params.ec_name}, I am ${params.name} and I want to claim my voucher.`
  );
  const whatsappLink = `https://wa.me/${params.ec_number}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-slate-50 to-white py-16 px-4 sm:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent-primary/10 blur-3xl" />
          <div className="absolute top-20 -left-10 h-60 w-60 rounded-full bg-accent-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Class of 2025 - Alumni Status Unlocked
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Congratulations,{" "}
            <span className="text-accent-primary">{params.name}</span>!
          </h1>

          <p className="text-balance text-lg text-slate-600 sm:text-xl">
            You have completed your <strong>{params.diploma}</strong>
            . <br className="hidden sm:block" />
            We are so proud of you.
          </p>
          <p className="text-balance text-lg text-slate-600 sm:text-xl pt-6">
            {`All you need to do now is wait for your results to be officially released.
            `}
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 bg-accent-primary hover:bg-accent-primary/90 font-bold uppercase"
          >
            <a href="#next-steps">In The Mean Time</a>
          </Button>
        </div>
      </section>

      {/* Career Fork Section */}
      <section className="py-16 px-4 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What is your next move?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2 transition-all hover:border-slate-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                  <Briefcase className="h-6 w-6 text-slate-700" />
                </div>
                <CardTitle className="text-xl">Searching for a Job?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Visit our{" "}
                  <Link
                    href="https://www.unitar.my/university/about-unitar/career-placement-centre/"
                    target="_blank"
                    className="underline text-accent-primary"
                  >
                    Career Placement Center
                  </Link>{" "}
                  for CV help, interview prep, and job matching services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent-primary/50 bg-accent-primary/5 transition-all hover:border-accent-primary hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-primary/20">
                  <TrendingUp className="h-6 w-6 text-accent-primary" />
                </div>
                <CardTitle className="text-xl text-accent-primary">
                  Ready to Upgrade?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  See your progression advantage below and unlock better career
                  opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reality Check Section */}
      <section className="bg-slate-50 py-16 px-4 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {`Why a Bachelor's Degree Matters`}
          </h2>
          <p className="mb-12 text-center text-lg text-slate-600">
            {`Don't hit the glass ceiling. Future-proof your career now.`}
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-700">Diploma Holder</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-slate-900">
                      RM 2,500
                    </span>
                    <span className="mb-1 text-sm text-slate-500">
                      /month avg
                    </span>
                  </div>
                  <div className="h-3 w-2/3 rounded-full bg-slate-300" />
                  <p className="text-sm text-slate-600">
                    Entry to mid-level positions
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent-primary bg-accent-primary/5">
              <CardHeader>
                <CardTitle className="text-accent-primary">
                  Degree Holder
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-accent-primary">
                      RM 4,200
                    </span>
                    <span className="mb-1 text-sm text-slate-600">
                      /month avg
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-accent-primary" />
                  <p className="text-sm text-slate-700">
                    Management & senior roles
                  </p>
                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-white px-3 py-2">
                    <TrendingUp className="h-5 w-5 text-accent-primary" />
                    <span className="text-sm font-medium text-slate-900">
                      +68% higher salary
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fast Track Offer Section */}
      <section className="py-16 px-4 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Your Exclusive Fast Track Path
          </h2>
          <p className="mb-12 text-center text-lg text-slate-600">
            Skip ahead. Graduate faster. Start earning sooner.
          </p>

          <Card className="border-2 border-accent-primary shadow-lg">
            <CardHeader className="bg-linear-to-r from-accent-primary/10 to-accent-primary/5">
              <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
                <Award className="h-6 w-6 text-accent-primary" />
                Credit Transfer Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-600">
                    Eligible Program
                  </p>
                  <p className="text-xl font-bold text-slate-900">
                    {params.degree}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-600">
                    Credits Exempted
                  </p>
                  <p className="text-xl font-bold text-accent-primary">
                    {params.credits} Credit Hours
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-600">
                    Time Saved
                  </p>
                  <p className="text-xl font-bold text-slate-900">≈ 1 Year</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-600">
                    Intake Starts
                  </p>
                  <p className="text-xl font-bold text-accent-primary">
                    Jan 12, 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Voucher Section */}
      <section className="bg-slate-50 py-16 px-4 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Your Golden Ticket
          </h2>
          <p className="mb-12 text-center text-lg text-slate-600">
            {`This exclusive offer expires soon. Don't miss out.`}
          </p>

          {/* Ticket-style Voucher */}
          <div className="relative">
            <div className="rounded-lg border-4 border-dashed border-accent-primary bg-white p-8 shadow-xl">
              {/* Perforated circles on sides */}
              <div className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-slate-50" />
              <div className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-slate-50" />

              <div className="text-center">
                <div className="mb-6 inline-flex rounded-lg bg-accent-primary px-4 py-2">
                  <span className="text-sm font-bold uppercase tracking-wide text-white">
                    Alumni Progression Voucher
                  </span>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-3">
                    <span className="text-sm font-medium text-slate-600">
                      Student:
                    </span>
                    <span className="font-bold text-slate-900">
                      {params.name}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-3">
                    <span className="text-sm font-medium text-slate-600">
                      Offer:
                    </span>
                    <span className="font-bold text-accent-primary">
                      20% Tuition Discount
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-3">
                    <span className="text-sm font-medium text-slate-600">
                      Valid Until:
                    </span>
                    <span className="font-bold text-slate-900">
                      Jan 12, 2025
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">
                      Code:
                    </span>
                    <span className="rounded bg-slate-100 px-3 py-1 font-mono text-sm font-bold text-slate-900">
                      ALUMNI-2025
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleDownloadVoucher}
                  variant="outline"
                  className="gap-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white bg-transparent"
                >
                  <Download className="h-4 w-4" />
                  Download Voucher
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white p-4 shadow-lg sm:p-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm font-medium text-slate-900 sm:text-left sm:text-base">
            Secure this offer now. Limited slots available.
          </p>
          <Button
            asChild
            size="lg"
            className="w-full gap-2 bg-[#25D366] hover:bg-[#20BA5A] sm:w-auto"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              WhatsApp {params.ec_name} to Claim
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom padding to prevent content being hidden by sticky footer */}
      <div className="h-24 sm:h-20" />
    </div>
  );
}
