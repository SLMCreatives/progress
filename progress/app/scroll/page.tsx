"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import {
  Sparkles,
  Award,
  Download,
  MessageCircle,
  GraduationCap,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  ArrowDown,
  Heart,
  Star,
  Lock,
  Unlock,
  ArrowDownCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AlumniProgressionPage() {
  const [params, setParams] = useState({
    name: "Tim",
    diploma: "Diploma in Management",
    degree: "Bachelor of Business Administration",
    credits: "10",
    ec_name: "Sulaiman",
    ec_number: "601121292383",
    faculty: "FOB"
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      setParams({
        name: searchParams.get("name") || "UNITARian",
        diploma: searchParams.get("diploma") || "Diploma programme",
        degree:
          searchParams.get("degree") || "Bachelor of Early Childhood Education",
        credits: searchParams.get("credits") || "10",
        ec_name: searchParams.get("ec_name") || "Sarah",
        ec_number: searchParams.get("ec_number") || "60123456789",
        faculty: searchParams.get("faculty") || "FEH"
      });
    }

    const unsubscribe = scrollYProgress.on("change", (v) => {
      setScrollProgress(v);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  /* const handleDownloadVoucher = () => {
    alert("🎉 Voucher downloaded! Contact your education counselor to redeem.");
  }; */

  const handleScrollToCTA = () => {
    window.scrollTo({
      top: document.getElementById("next-section")?.offsetTop || 0,
      behavior: "smooth"
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hi ${params.ec_name}, I am ${params.name} and I want to progress into ${params.degree}. Could you please tell me what I need to do next?`
  );
  const whatsappLink = `https://wa.me/${params.ec_number}?text=${whatsappMessage}`;

  // Scroll progress indicator
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#06B6D4] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Section 1: Hero - Congrats & Scroll to Unlock */}
      <Section1 params={params} scrollProgress={scrollProgress} />

      {/* Section 2: Message from Faculty */}
      <Section2 params={params} />

      {/* Section 3: Why UNITAR */}
      <Section3 />

      {/* Section 4: Voucher Download */}
      <Section4 params={params} handleScrollToCTA={handleScrollToCTA} />

      {/* Section 5: WhatsApp CTA */}
      <Section5 params={params} whatsappLink={whatsappLink} />

      {/* Section 6: Final Push */}
      <Section6 whatsappLink={whatsappLink} params={params} />
    </div>
  );
}

// Section 1: Hero
function Section1({
  params,
  scrollProgress
}: {
  params: any;
  scrollProgress: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const isUnlocked = scrollProgress > 0.05;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[#A855F7]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#06B6D4]/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: "spring", duration: 1, delay: 0.2 }}
          className="mb-8 inline-flex"
        >
          <div className="relative">
            <motion.div
              animate={isUnlocked ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isUnlocked ? (
                <Unlock className="w-20 h-20 text-[#06B6D4]" />
              ) : (
                <Lock className="w-20 h-20 text-white/50" />
              )}
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
              }}
            >
              <Sparkles className="w-8 h-8 text-[#FFD700]" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Badge className="mb-6 text-base px-6 py-2 bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] border-none text-white">
            🎓 Class of 2025 - Alumni Status Unlocked
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight text-balance"
        >
          Congratulations,{" "}
          <span className="bg-gradient-to-r from-[#06B6D4] via-[#A855F7] to-[#FF6B6B] text-transparent bg-clip-text">
            {params.name}
          </span>
          ! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          You've completed your{" "}
          <strong className="text-[#06B6D4]">{params.diploma}</strong>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto text-balance"
        >
          There's a special offer waiting for you below. Keep scrolling to
          unlock your exclusive Alumni Voucher! 👇
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowDown className="w-12 h-12 text-[#06B6D4]" />
          </motion.div>

          {isUnlocked ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-[#10B981] mx-auto mb-2" />
              <p className="text-white font-bold text-lg">
                Unlocked! Keep scrolling 🚀
              </p>
            </motion.div>
          ) : (
            <p className="text-white/60 text-sm">
              Scroll down to unlock your benefits
            </p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

// Section 2: Faculty Message
function Section2({ params }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-white via-[#F0F9FF] to-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 text-lg px-6 py-2 bg-gradient-to-r from-[#A855F7] to-[#06B6D4] border-none text-white">
            💌 Message from your Faculty
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            We're So Proud of You!
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="border-4 border-[#A855F7] shadow-2xl overflow-hidden bg-gradient-to-br from-white to-[#FAF5FF]">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <motion.div
                  animate={{ scale: [1, 1, 1.05, 1, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="shrink-0"
                >
                  <div className="w-24 h-24 rounded-full bg-linear-to-br from-[#A855F7] to-[#06B6D4] flex items-center justify-center">
                    <Avatar className="absolute w-22 h-22 border-4 border-white">
                      <AvatarImage src={`/deans/${params.faculty}.png`} />
                      <AvatarFallback>{params.faculty}</AvatarFallback>
                    </Avatar>
                  </div>
                </motion.div>
                <div>
                  <h5 className="text-lg font-medium text-slate-700 mb-1">
                    {` ${
                      params.faculty === "FOB"
                        ? "Faculty of Business"
                        : "Faculty of Education & Humanities"
                    }`}
                  </h5>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Dean of Faculty
                  </h3>
                  <p className="text-[#A855F7] font-semibold">
                    UNITAR International University
                  </p>
                </div>
              </div>

              <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 italic">
                {`Dear`} <span className="font-bold"> {params.name}</span>
                {`, Congratulations on completing your ${params.diploma}! This is just the
                beginning of your journey. We've watched you grow, and we know
                you have incredible potential. Your next step—a Bachelor's
                degree—will open doors you never imagined possible. We're here
                to support you every step of the way. Keep going, keep growing!
                🌟`}
              </blockquote>

              <div className="flex flex-wrap gap-4">
                {["Leadership", "Innovation", "Excellence"].map((trait, i) => (
                  <motion.div
                    key={trait}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Badge className="px-4 py-2 bg-[#A855F7]/10 text-[#A855F7] border-[#A855F7]/30">
                      <Star className="w-4 h-4 mr-2" />
                      {trait}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Section 3: Why UNITAR
function Section3() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const benefits = [
    {
      icon: Zap,
      title: "Free Credit Transfer",
      description:
        "Get up to 10 credit hours transferred for FREE and save up to RM1,500!",
      color: "#FFD700"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "UNITAR degrees are recognized by top employers nationwide",
      color: "#FF6B6B"
    },
    {
      icon: Users,
      title: "Alumni Network",
      description: "Join 50,000+ successful alumni across Malaysia and beyond",
      color: "#06B6D4"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "68% higher starting salary with a bachelor's degree",
      color: "#10B981"
    },
    {
      icon: Heart,
      title: "Flexible Learning",
      description: "Online and on-campus options to fit your lifestyle",
      color: "#A855F7"
    },
    {
      icon: CheckCircle2,
      title: "Fast-Track Application",
      description: "Complete your application faster with our alumni perks",
      color: "#F59E0B"
    }
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 text-lg px-6 py-2 bg-gradient-to-r from-[#FF6B6B] to-[#FFD700] border-none text-slate-900 font-bold">
            🚀 Why Choose UNITAR?
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            We're Built Different
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed text-balance">
            Other universities make you start over. We help you level up{" "}
            <span className="font-bold">faster</span> 💪
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/30 transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div
                    className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center"
                    style={{ backgroundColor: benefit.color + "20" }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon
                      className="w-7 h-7"
                      style={{ color: benefit.color }}
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("ticket")?.offsetTop || 0,
                behavior: "smooth"
              });
            }}
            size="lg"
            className="w-full md:w-auto text-lg px-8 py-6 bg-linear-to-r from-[#A855F7] to-[#06B6D4] hover:from-[#9333EA] hover:to-[#0891B2] text-white font-bold shadow-xl"
          >
            Progress Now to Get Alumni Benefits!
            <ArrowDown className="w-10 h-10 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Section 4: Voucher
function Section4({ params, handleScrollToCTA }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="ticket"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-[#A855F7] via-[#9333EA] to-[#7E22CE] overflow-hidden"
    >
      {/* Animated circles */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="inline-block mb-4"
          >
            <span className="text-8xl">🎟️</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Your Golden Ticket
          </h2>
          <p className="text-xl text-white/90 text-balance">
            Secure your spot now! This offer won't last forever! ⏰
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <Card className="border-4 border-dashed border-white bg-white shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12 relative">
              {/* Perforation circles */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-[#A855F7] rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-[#A855F7] rounded-full" />

              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-flex mb-6"
                >
                  <Badge className="text-lg px-8 py-3 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#06B6D4] border-none text-white font-bold">
                    🎓 ALUMNI PROGRESSION VOUCHER
                  </Badge>
                </motion.div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b-2 border-dashed border-slate-300">
                    <span className="text-slate-600 font-semibold">
                      Student:
                    </span>
                    <span className="text-slate-900 font-bold text-lg">
                      {params.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b-2 border-dashed border-slate-300">
                    <span className="text-slate-600 font-semibold">
                      Programme:
                    </span>
                    <span className="text-[#A855F7] font-bold text-lg text-balance text-right">
                      Bachelor of Education
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b-2 border-dashed border-slate-300">
                    <span className="text-slate-600 font-semibold">
                      Discount:
                    </span>
                    <span className="text-[#A855F7] font-bold text-lg text-balance text-right">
                      20% Tuition Fee Waiver
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b-2 border-dashed border-slate-300">
                    <span className="text-slate-600 font-semibold">
                      FREE Credit Transfer:
                    </span>
                    <span className="text-[#06B6D4] font-bold text-lg">
                      up to 10 credits
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b-2 border-dashed border-slate-300">
                    <span className="text-slate-600 font-semibold">
                      Valid Until:
                    </span>
                    <span className="text-[#FF6B6B] font-bold text-lg">
                      7th January 2026
                    </span>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleScrollToCTA}
                    size="lg"
                    className="w-full md:w-auto text-lg px-8 py-6 bg-linear-to-r from-[#A855F7] to-[#06B6D4] hover:from-[#9333EA] hover:to-[#0891B2] text-white font-bold shadow-xl"
                  >
                    Secure Your Spot Now!
                    <ArrowDown className="w-10 h-10 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Section 5: WhatsApp CTA
function Section5({ params, whatsappLink }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="next-section"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-[#10B981] via-[#059669] to-[#047857]"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="inline-block text-9xl"
          >
            💬
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-black text-white mb-6"
        >
          Ready to Fast-Track Your Future?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Chat with <strong>{params.ec_name}</strong>, your personal Education
          Counselor. Get instant answers and secure your spot today! 🚀
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            asChild
            size="lg"
            className="text-xl px-12 py-8 bg-white hover:bg-slate-100 text-[#10B981] font-black shadow-2xl rounded-2xl"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-7 h-7 mr-3" />
              WhatsApp {params.ec_name} Now
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/70 mt-8 text-sm"
        >
          Available Monday - Friday, 9AM - 6PM
        </motion.p>
      </div>
    </section>
  );
}

// Section 6: Final Push
function Section6({ whatsappLink, params }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
            Don't Let This Opportunity
            <br />
            <span className="bg-linear-to-r from-[#FF6B6B] via-[#A855F7] to-[#06B6D4] text-transparent bg-clip-text">
              Slip Away
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Limited slots available for January 2026 intake. Secure your future
            NOW before it's too late! ⏰
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { number: "50+", label: "Seats Left" },
              { number: "RM 0", label: "Crefit Transfer" },
              { number: "20%", label: "Tuition Fee Waiver" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                <Card className="bg-white/5 backdrop-blur border-white/10">
                  <CardContent className="p-6">
                    <div className="text-4xl md:text-5xl font-black text-[#10B981] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/70">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="text-xl px-12 py-8 bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-black shadow-2xl rounded-2xl"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-7 h-7 mr-3" />
                  Claim Your Spot - WhatsApp {params.ec_name}
                </a>
              </Button>
            </motion.div>

            <p className="text-white/50 text-sm">
              🔒 Secure your future in less than 2 minutes
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
