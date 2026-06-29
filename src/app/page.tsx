"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BodyMap from "@/components/BodyMap";
import {
	Heart,
	Calendar,
	Phone,
	ArrowUpRight,
	ArrowRight,
	Activity,
	ShieldAlert,
	CheckCircle2,
	ChevronRight,
	Sparkles,
	Users,
	Clock,
	Award,
	BookmarkCheck,
	MessageCircle,
	MapPin,
	ChevronDown,
	ChevronUp,
} from "lucide-react";

const CLINIC_SERVICES = [
	{
		title: "Shoulder Pain",
		description:
			"Specialized rehabilitation for rotator cuff tears, frozen shoulder, joint impingement, and chronic stiffness.",
		icon: "Sparkles",
	},
	{
		title: "Knee Pain",
		description:
			"Targeted physical therapy, joint strengthening, and gait training for ligament and cartilage tears.",
		icon: "Award",
		popular: true,
	},
	{
		title: "Neck Pain",
		description:
			"Relief from chronic neck stiffness, cervical spondylosis, nerve compression, and posture strains.",
		icon: "Sparkles",
	},
	{
		title: "Back Pain",
		description:
			"Advanced spinal decompression, sciatica relief, core stabilizing, and spine alignment sessions.",
		icon: "BookmarkCheck",
	},
	{
		title: "After Surgery",
		description:
			"Comprehensive post-operative physical protocols to restore full range of motion safely.",
		icon: "Calendar",
	},
	{
		title: "Restricted Movements",
		description:
			"Manual therapy and osteopathy to release fascial tightness and increase joint flexibility.",
		icon: "Activity",
	},
	{
		title: "Sports Injury",
		description:
			"Fast-track recovery, muscle sprain rehabilitation, and injury prevention strategies for athletes.",
		icon: "Award",
	},
	{
		title: "Stress",
		description:
			"Holistic craniosacral therapy and somatic release to reduce physical and nervous system tension.",
		icon: "Heart",
	},
	{
		title: "Head Ache",
		description:
			"Treatment for tension headaches and migraine relief by releasing neck muscle trigger points.",
		icon: "Sparkles",
	},
	{
		title: "Hand Injury",
		description:
			"Focused rehabilitation for wrist fractures, carpal tunnel syndrome, and tendon sprains.",
		icon: "ShieldAlert",
	},
];

const FAQ_ITEMS = [
	{
		question: "Do I need a doctor's referral?",
		answer:
			"No, you do not need a doctor's referral to visit our clinic. You can book an appointment directly. However, if you have any recent doctor prescriptions or imaging reports (like X-rays or MRI scans), please bring them along to help us customize your treatment.",
	},
	{
		question: "What should I wear to my session?",
		answer:
			"We recommend wearing loose, comfortable clothing (like athletic wear, t-shirts, shorts, or track pants) that allows easy movement and lets us examine the affected joints or muscle groups without restrictions.",
	},
	{
		question: "How many sessions will I need?",
		answer:
			"This depends entirely on your diagnosis, the severity of your symptoms, and how your body responds to therapy. After a comprehensive assessment in your first session, we will customize a recovery plan and estimate the number of sessions required.",
	},
	{
		question: "Is physiotherapy covered by insurance?",
		answer:
			"Many health insurance policies cover post-operative physiotherapy and rehabilitation. We provide complete billing invoices, doctor prescriptions, and treatment certificates for you to submit for reimbursement.",
	},
	{
		question: "What happens in the first session?",
		answer:
			"In your first session, Dr. Rajashree Lad will perform a comprehensive evaluation of your medical history, posture, joint range of motion, strength, and pain levels, followed by an initial treatment and personalized exercise prescription.",
	},
	{
		question: "Do you offer home visits?",
		answer:
			"Yes, we offer specialized home visit sessions for patients with acute mobility restrictions, post-surgical recovery limits (e.g. immediate post-hip or knee replacement), or elderly patients in Dadar and surrounding regions. Please contact us to coordinate.",
	},
	{
		question: "What is Craniosacral Therapy?",
		answer:
			"Craniosacral Therapy is a gentle, hands-on treatment that releases tension deep in the body to relieve pain and dysfunction. It regulates the flow of cerebrospinal fluid and works wonders for chronic pain, migraines, spine issues, stress, and nervous system balance.",
	},
];

export default function Home() {
	const [activeTab, setActiveTab] = useState("approach");
	const [showAllServices, setShowAllServices] = useState(false);
	const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

	return (
		<div className="relative overflow-hidden">
			{/* 1. HERO SECTION */}
			<section className="relative bg-gradient-to-b from-light-mint via-white to-light-mint/30 pt-10 pb-20 lg:pt-16 lg:pb-28">
				<div className="mx-auto max-w-7xl px-6 md:px-8">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
						{/* Hero Left Content */}
						<div className="lg:col-span-7 flex flex-col justify-center">
							<div className="inline-flex items-center gap-2 rounded-full bg-primary-teal/10 px-4 py-1.5 text-sm font-bold text-dark-teal mb-6 w-fit animate-pulse">
								<Sparkles className="h-4 w-4 text-primary-teal" />
								<span>
									Dr. Rajashree Lad's Physiotherapy & Osteopathy Centre
								</span>
							</div>

							<h1 className="text-4xl font-extrabold tracking-tight text-dark-text sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
								Restore Movement, <br />
								<span className="text-primary-teal">Reclaim</span> Your <br />
								<span className="text-dark-teal">Life</span>
							</h1>

							<p className="mt-6 text-lg text-dark-text/80 max-w-xl leading-relaxed">
								Led by Dr. Rajashree Lad, our centre offers advanced, empathetic
								physical therapy and osteopathic treatments designed to target
								the source of your pain and help you live in full motion.
							</p>

							<div className="mt-8 flex flex-col sm:flex-row gap-4">
								<a
									href="#appointment"
									className="flex items-center justify-center gap-2 rounded-xl bg-primary-teal px-8 py-4 font-extrabold text-white shadow-lg shadow-primary-teal/20 hover:bg-dark-teal hover:shadow-xl transition-all duration-300"
								>
									<Calendar className="h-5 w-5" />
									Book a Free Consultation
								</a>
								<a
									href="#services"
									className="flex items-center justify-center gap-2 rounded-xl border-2 border-dark-teal/15 bg-white/40 px-8 py-4 font-bold text-dark-text hover:bg-white hover:border-primary-teal transition-all duration-300"
								>
									Explore Our Services
									<ArrowRight className="h-4 w-4 text-primary-teal" />
								</a>
							</div>
						</div>

						{/* Hero Right Graphic */}
						<div className="lg:col-span-5 relative flex justify-center">
							<div className="relative w-full max-w-[420px] aspect-square rounded-[2rem] border-4 border-white/60 bg-white/30 p-4 shadow-2xl backdrop-blur-sm overflow-hidden group">
								<div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-teal/10 blur-2xl"></div>
								<div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-dark-teal/5 blur-2xl"></div>

								{/* Grayscale with teal accents pain point image */}
								<div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-light-mint">
									<Image
										src="/pain_shoulder_closeup.png"
										alt="Restoring Shoulder & Joint Movement"
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
										priority
									/>
									{/* Glowing absolute visual cue overlays to make design pop */}
									<div className="absolute left-[52%] top-[60%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
										<span className="relative flex h-16 w-16">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-teal/30 opacity-75"></span>
											<span className="relative inline-flex rounded-full h-16 w-16 bg-primary-teal/10 border border-primary-teal/40"></span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 2. OVERLAPPING QUICK ACTION CARDS */}
			<section className="relative z-10 -mt-10 px-4">
				<div className="mx-auto max-w-6xl">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Card 1: Our Service Providers */}
						<Link
							href="#about"
							className="p-8 bg-white rounded-3xl border border-dark-teal/5 shadow-xl hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl active:scale-[0.98] active:translate-y-0 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
						>
							<div>
								<div className="flex items-center justify-between">
									<div className="rounded-2xl bg-primary-teal/10 p-4 text-primary-teal group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
										<Heart className="h-7 w-7" />
									</div>
									<span className="rounded-full bg-dark-text/5 p-2 text-dark-text/50 group-hover:bg-primary-teal group-hover:text-white transition-all">
										<ArrowRight className="h-4 w-4" />
									</span>
								</div>
								<h3 className="mt-6 text-xl font-extrabold text-dark-teal">
									Our Service Providers
								</h3>
								<p className="mt-2 text-sm text-dark-text/75 leading-relaxed">
									Meet Dr. Rajashree Lad and our team of highly skilled
									rehabilitation therapists dedicated to your wellness.
								</p>
							</div>
							<div className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary-teal group-hover:text-dark-teal transition-colors">
								View Specialists <ChevronRight className="h-3.5 w-3.5" />
							</div>
						</Link>

						{/* Card 2: Book an Appointment */}
						<Link
							href="#appointment"
							className="p-8 bg-white rounded-3xl border border-dark-teal/5 shadow-xl hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl active:scale-[0.98] active:translate-y-0 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
						>
							<div>
								<div className="flex items-center justify-between">
									<div className="rounded-2xl bg-primary-teal/10 p-4 text-primary-teal group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
										<Calendar className="h-7 w-7" />
									</div>
									<span className="rounded-full bg-dark-text/5 p-2 text-dark-text/50 group-hover:bg-primary-teal group-hover:text-white transition-all">
										<ArrowUpRight className="h-4 w-4" />
									</span>
								</div>
								<h3 className="mt-6 text-xl font-extrabold text-dark-teal">
									Book an Appointment
								</h3>
								<p className="mt-2 text-sm text-dark-text/75 leading-relaxed">
									Schedule your physical evaluation or manual therapy sessions
									online in under two minutes.
								</p>
							</div>
							<div className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary-teal group-hover:text-dark-teal transition-colors">
								Schedule Online <ChevronRight className="h-3.5 w-3.5" />
							</div>
						</Link>

						{/* Card 3: Emergency Line (Teal Accent with Actual Phone) */}
						<a
							href="tel:9773953209"
							className="p-8 bg-dark-teal text-white rounded-3xl border border-dark-teal/10 shadow-xl hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary-teal/20 active:scale-[0.98] active:translate-y-0 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer"
						>
							<div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-primary-teal/10 blur-xl"></div>

							<div>
								<div className="flex items-center justify-between">
									<div className="rounded-2xl bg-white/10 p-4 text-primary-teal group-hover:scale-110 transition-transform duration-300">
										<Phone className="h-7 w-7 animate-bounce-subtle" />
									</div>
									<span className="rounded-full bg-white/5 p-2 text-white/50 group-hover:bg-primary-teal group-hover:text-white transition-all">
										<ArrowRight className="h-4 w-4" />
									</span>
								</div>

								<h3 className="mt-6 text-xl font-extrabold">
									Have an Emergency?
								</h3>

								<p className="mt-2 text-xs text-light-mint/80 uppercase tracking-wide">
									Emergency clinical line for acute orthopedic trauma and
									musculoskeletal pain relief.
								</p>

								<div className="mt-4 flex flex-col">
									<span className="text-[10px] uppercase font-bold tracking-widest text-primary-teal">
										Call Dr. Lad Directly
									</span>
									<span className="text-2xl font-black text-white group-hover:text-primary-teal transition-all">
										+91 9773953209
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</section>

			{/* 2.5. ABOUT THE CENTRE SECTION */}
			<section id="about" className="py-20 lg:py-28 bg-light-mint/45 mt-10">
				<div className="mx-auto max-w-7xl px-6 md:px-8">
					<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
						{/* About Left Image */}
						<div className="lg:col-span-5 flex justify-center">
							<div className="relative w-full max-w-[390px] aspect-[4/5] rounded-[2rem] border-4 border-white bg-white shadow-2xl overflow-hidden group">
								<div className="relative h-full w-full overflow-hidden bg-light-mint/30">
									<Image
										src="/pain_neck_shoulder.png"
										alt="Neck and Shoulder Therapy"
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									{/* Glowing absolute visual cue for Neck Pain point */}
									<div className="absolute left-[45%] top-[32%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
										<span className="relative flex h-14 w-14">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-teal/40 opacity-75"></span>
											<span className="relative inline-flex rounded-full h-14 w-14 bg-primary-teal/15 border border-primary-teal/30"></span>
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* About Right Content */}
						<div className="lg:col-span-7">
							<span className="text-xs font-bold uppercase tracking-widest text-primary-teal">
								About The Centre
							</span>

							<h2 className="text-3xl font-extrabold tracking-tight text-dark-teal sm:text-4xl mt-3 leading-snug">
								At Dr. Rajashree Lad's Centre, we pride ourselves on providing
								the best care possible to our patients.
							</h2>

							{/* Credentials Badges */}
							<div className="mt-6 flex flex-wrap gap-2.5">
								<span className="inline-flex items-center gap-1.5 rounded-lg bg-dark-teal text-white px-3 py-1.5 text-xs font-extrabold tracking-wide uppercase">
									<Award className="h-3.5 w-3.5 text-primary-teal" />
									Dr. Rajashree Lad (PT)
								</span>
								<span className="inline-flex items-center gap-1.5 rounded-lg bg-primary-teal/10 text-dark-teal border border-primary-teal/15 px-3 py-1.5 text-xs font-bold">
									M.P.Th (Master of Physiotherapy)
								</span>
								<span className="inline-flex items-center gap-1.5 rounded-lg bg-primary-teal/10 text-dark-teal border border-primary-teal/15 px-3 py-1.5 text-xs font-bold">
									DOMTP (Canada - Osteopathy)
								</span>
								<span className="inline-flex items-center gap-1.5 rounded-lg bg-primary-teal/10 text-dark-teal border border-primary-teal/15 px-3 py-1.5 text-xs font-bold">
									COMT (Manual Therapy)
								</span>
							</div>

							{/* Subsections */}
							<div className="mt-8 space-y-6">
								{/* Subsection 1: Our Approach */}
								<div className="flex gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-dark-teal/10 text-primary-teal shadow-md shadow-dark-teal/5">
										<BookmarkCheck className="h-6 w-6" />
									</div>
									<div>
										<h4 className="font-extrabold text-dark-teal text-base">
											Our Approach
										</h4>
										<p className="text-sm text-dark-text/80 mt-1 leading-relaxed">
											We believe in holistic, personalized, and patient-centered
											rehabilitation. Instead of just masking symptoms, we
											perform detailed musculoskeletal examinations to locate
											and cure the biomechanical root causes of pain.
										</p>
									</div>
								</div>

								{/* Subsection 2: Expertise */}
								<div className="flex gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-dark-teal/10 text-primary-teal shadow-md shadow-dark-teal/5">
										<Activity className="h-6 w-6" />
									</div>
									<div>
										<h4 className="font-extrabold text-dark-teal text-base">
											Expertise & Modalities
										</h4>
										<p className="text-sm text-dark-text/80 mt-1 leading-relaxed">
											Equipped with modern biomechanics assessment units, we
											specialize in spinal manipulations, musculoskeletal manual
											therapy, sports injury correction, and gentle craniosacral
											osteopathy.
										</p>
									</div>
								</div>
							</div>

							<div className="mt-10">
								<a
									href="#appointment"
									className="inline-flex items-center justify-center gap-2 rounded-xl bg-dark-teal hover:bg-primary-teal px-8 py-3.5 font-bold text-white shadow-lg shadow-dark-teal/10 transition-all duration-300"
								>
									Learn More About Us
									<ArrowRight className="h-4 w-4" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* INTERACTIVE BODY MAP */}
			<BodyMap />

			{/* 3. HIGH-QUALITY PHYSIOTHERAPY & OSTEOPATHY CARE (REDESIGNED SERVICES SECTION) */}
			<section id="services" className="py-20 lg:py-28 bg-dark-teal text-white">
				<div className="mx-auto max-w-7xl px-6 md:px-8">
					{/* Top Header Split Layout */}
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-16 items-start">
						{/* Left Column: Title, Subtext, & CTA */}
						<div className="lg:col-span-5 flex flex-col justify-center h-full">
							<span className="text-xs font-bold uppercase tracking-widest text-primary-teal font-extrabold">
								Our Treatment Solutions
							</span>
							<h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl mt-2 leading-tight">
								High-Quality Physiotherapy & Osteopathy Care
							</h2>
							<p className="mt-4 text-base text-light-mint/80 max-w-md">
								We help you live your life in full motion. Our therapies are
								customized around your unique physiology to eliminate pain and
								restore natural joint dynamics.
							</p>

							<div className="mt-8">
								<button
									onClick={() => setShowAllServices(!showAllServices)}
									className="rounded-xl border-2 border-white hover:border-primary-teal px-8 py-3.5 text-sm font-extrabold text-white hover:bg-white hover:text-dark-teal transition-all duration-300 w-fit cursor-pointer shadow-lg"
								>
									{showAllServices
										? "Show Less Services"
										: "Full List of Services"}
								</button>
							</div>
						</div>

						{/* Right Column: Two prominent featured cards (Shoulder Pain & Knee Pain Treatment) */}
						<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
							{/* Card 1: Shoulder Pain Treatment */}
							<div className="rounded-3xl bg-white p-8 text-dark-text shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] active:scale-[0.98] active:translate-y-0 border border-white/10 hover:border-primary-teal/10 transition-all duration-300 ease-out min-h-[240px] group cursor-pointer">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-teal/10 text-primary-teal shadow-inner group-hover:scale-110 transition-transform duration-300">
									<Sparkles className="h-6 w-6" />
								</div>
								<h3 className="mt-6 text-xl font-bold text-dark-teal">
									Shoulder Pain Treatment
								</h3>
								<p className="mt-3 text-sm text-dark-text/75 leading-relaxed">
									Specialized orthopedic programs to treat rotator cuff injuries, frozen shoulder stiffness, joint instability, and chronic bursitis.
								</p>
							</div>

							{/* Card 2: Knee Pain Treatment */}
							<div className="rounded-3xl bg-white p-8 text-dark-text shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] active:scale-[0.98] active:translate-y-0 border border-white/10 hover:border-primary-teal/10 transition-all duration-300 ease-out min-h-[240px] relative group cursor-pointer">
								<div className="absolute top-4 right-4 bg-primary-teal text-white text-[10px] font-black px-2 py-0.5 rounded-full">
									POPULAR
								</div>
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-teal text-white shadow-md shadow-primary-teal/20 group-hover:scale-110 transition-transform duration-300">
									<Award className="h-6 w-6" />
								</div>
								<h3 className="mt-6 text-xl font-bold text-dark-teal">
									Knee Pain Treatment
								</h3>
								<p className="mt-3 text-sm text-dark-text/75 leading-relaxed">
									Targeted rehabilitation for patellar tendonitis, meniscus tears, osteoarthritis stiffness, and post-surgical reconstruction.
								</p>
							</div>
						</div>
					</div>

					{/* Lower Grid (Remaining 8 Services in Transparent-Dark Theme) */}
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{CLINIC_SERVICES.slice(2, showAllServices ? 10 : 6).map((service, idx) => (
							<div
								key={idx}
								className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white hover:text-dark-text hover:border-transparent hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl active:scale-[0.98] active:translate-y-0 transition-all duration-300 ease-out group min-h-[190px] cursor-pointer"
							>
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white group-hover:bg-primary-teal group-hover:text-white transition-all shadow-inner group-hover:scale-110 transition-transform duration-300">
									{service.icon === "Activity" && <Activity className="h-5 w-5" />}
									{service.icon === "Award" && <Award className="h-5 w-5" />}
									{service.icon === "Sparkles" && <Sparkles className="h-5 w-5" />}
									{service.icon === "BookmarkCheck" && <BookmarkCheck className="h-5 w-5" />}
									{service.icon === "Calendar" && <Calendar className="h-5 w-5" />}
									{service.icon === "Heart" && <Heart className="h-5 w-5" />}
									{service.icon === "ShieldAlert" && <ShieldAlert className="h-5 w-5" />}
								</div>
								<h3 className="mt-4 text-lg font-bold text-white group-hover:text-dark-teal transition-all">
									{service.title}
								</h3>
								<p className="mt-2 text-xs text-light-mint/70 group-hover:text-dark-text/75 leading-relaxed transition-all">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 4. KNEE REPLACEMENT PROCEDURE DETAIL SECTION */}
			<section id="conditions" className="py-20 lg:py-28 bg-light-mint/45">
				<div className="mx-auto max-w-7xl px-6 md:px-8">
					<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
						{/* Left Content (Columns / Details) */}
						<div className="lg:col-span-7">
							<span className="text-xs font-bold uppercase tracking-widest text-primary-teal">
								Surgical Support
							</span>
							<h2 className="text-3xl font-extrabold tracking-tight text-dark-teal sm:text-5xl mt-2 leading-tight">
								Knee <span className="text-primary-teal">Replacement</span>{" "}
								<br />
								Surgery Procedure
							</h2>
							<p className="mt-4 text-base text-dark-text/80 leading-relaxed">
								Knee joint replacement (arthroplasty) is a highly successful
								surgery to replace a diseased or damaged knee joint with a
								custom, biological-grade prosthetic joint.
							</p>

							{/* Interactive Tabs */}
							<div className="mt-8 flex border-b border-dark-teal/15">
								<button
									onClick={() => setActiveTab("approach")}
									className={`border-b-2 px-4 py-2.5 text-sm font-bold transition-all ${
										activeTab === "approach"
											? "border-primary-teal text-primary-teal"
											: "border-transparent text-dark-text/50 hover:text-dark-text"
									}`}
								>
									Our Approach
								</button>
								<button
									onClick={() => setActiveTab("experts")}
									className={`border-b-2 px-4 py-2.5 text-sm font-bold transition-all ${
										activeTab === "experts"
											? "border-primary-teal text-primary-teal"
											: "border-transparent text-dark-text/50 hover:text-dark-text"
									}`}
								>
									Medical Experts
								</button>
								<button
									onClick={() => setActiveTab("benefits")}
									className={`border-b-2 px-4 py-2.5 text-sm font-bold transition-all ${
										activeTab === "benefits"
											? "border-primary-teal text-primary-teal"
											: "border-transparent text-dark-text/50 hover:text-dark-text"
									}`}
								>
									Recovery Benefits
								</button>
							</div>

							{/* Tab Contents */}
							<div className="mt-6 min-h-[140px]">
								{activeTab === "approach" && (
									<div className="space-y-4 animate-fade-in">
										<div className="flex gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-teal/10 text-primary-teal">
												<CheckCircle2 className="h-5 w-5" />
											</div>
											<div>
												<h4 className="font-extrabold text-dark-teal text-base">
													Comprehensive Evaluation
												</h4>
												<p className="text-sm text-dark-text/80 mt-1">
													We offer efficient access to diagnostic testing,
													orthopedic biomechanics scans, and functional
													cardiovascular clearance.
												</p>
											</div>
										</div>
										<div className="flex gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-teal/10 text-primary-teal">
												<CheckCircle2 className="h-5 w-5" />
											</div>
											<div>
												<h4 className="font-extrabold text-dark-teal text-base">
													Pre-Operative Strengthening
												</h4>
												<p className="text-sm text-dark-text/80 mt-1">
													Our therapists prepare patients with target strength
													routines to ensure post-surgery recovery is
													accelerated by up to 40%.
												</p>
											</div>
										</div>
									</div>
								)}

								{activeTab === "experts" && (
									<div className="space-y-4 animate-fade-in">
										<div className="flex gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-teal/10 text-primary-teal">
												<Users className="h-5 w-5" />
											</div>
											<div>
												<h4 className="font-extrabold text-dark-teal text-base">
													Multidisciplinary Medical Panel
												</h4>
												<p className="text-sm text-dark-text/80 mt-1">
													Our clinical network includes board-certified
													orthopedic surgeons, physical therapists, vascular
													medical staff, and wellness coordinators.
												</p>
											</div>
										</div>
										<div className="flex gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-teal/10 text-primary-teal">
												<Clock className="h-5 w-5" />
											</div>
											<div>
												<h4 className="font-extrabold text-dark-teal text-base">
													Continuous Monitoring Care
												</h4>
												<p className="text-sm text-dark-text/80 mt-1">
													Regular check-ins, joint angle checks, and muscle tone
													evaluations are performed by dedicated specialists.
												</p>
											</div>
										</div>
									</div>
								)}

								{activeTab === "benefits" && (
									<div className="space-y-4 animate-fade-in">
										<div className="flex gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-teal/10 text-primary-teal">
												<Activity className="h-5 w-5" />
											</div>
											<div>
												<h4 className="font-extrabold text-dark-teal text-base">
													Rapid Restoration of Mobility
												</h4>
												<p className="text-sm text-dark-text/80 mt-1">
													95% of patients regain independent walking capability
													within 4-6 weeks with customized gait retraining.
												</p>
											</div>
										</div>
										<div className="flex gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-teal/10 text-primary-teal">
												<ShieldAlert className="h-5 w-5" />
											</div>
											<div>
												<h4 className="font-extrabold text-dark-teal text-base">
													Pain Reduction & Joint Protection
												</h4>
												<p className="text-sm text-dark-text/80 mt-1">
													Complete resolution of chronic bone-on-bone arthritis
													friction, eliminating inflammation and heavy pain
													killer reliance.
												</p>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>

						{/* Right Side (Clinic Graphic - Hero Physio Care) */}
						<div className="lg:col-span-5 flex justify-center">
							<div className="w-full max-w-[380px] rounded-3xl bg-white border border-dark-teal/10 shadow-2xl p-4 flex flex-col items-center overflow-hidden">
								<div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden bg-light-mint">
									<Image
										src="/hero_physio_care.png"
										alt="Orthopedic & Joint Treatment"
										fill
										className="object-cover"
									/>
								</div>
								<h4 className="mt-4 font-extrabold text-dark-teal text-center text-sm">
									Professional Physiotherapy Care
								</h4>
								<p className="text-xs text-dark-text/60 text-center mt-1 pb-2">
									Providing advanced, patient-focused joint mobilization and
									alignment therapy.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* TESTIMONIALS / REVIEWS SECTION */}
			<section className="py-20 lg:py-28 bg-light-mint/30">
				<div className="mx-auto max-w-7xl px-6 md:px-8">
					<div className="text-center mb-14">
						<span className="text-xs font-bold uppercase tracking-widest text-primary-teal">
							Patient Stories
						</span>
						<h2 className="text-3xl font-extrabold text-dark-teal sm:text-4xl mt-2">
							What Our Patients Say
						</h2>
						<p className="mt-3 text-base text-dark-text/70 max-w-xl mx-auto">
							Read real feedback from patients who have restored their movement
							and reclaimed their health.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{/* Review 1 */}
						<div className="rounded-3xl border border-dark-teal/10 bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer">
							<div>
								{/* 5 Stars */}
								<div className="flex gap-1 text-primary-teal mb-5">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className="h-5 w-5 fill-current"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<p className="text-dark-text/85 italic leading-relaxed text-sm">
									&ldquo;The sessions are structured well and the doctor and her
									team are focused on addressing the issue as well as any
									underlying problems.&rdquo;
								</p>
							</div>
							<div className="mt-6 flex items-center gap-3 border-t border-dark-teal/5 pt-4">
								<div className="h-10 w-10 rounded-full bg-primary-teal/10 text-primary-teal font-extrabold text-sm flex items-center justify-center group-hover:bg-primary-teal group-hover:text-white transition-colors duration-300">
									SS
								</div>
								<div>
									<h4 className="font-extrabold text-dark-teal text-sm">
										Sonia Saxena
									</h4>
									<p className="text-xs text-dark-text/50">
										Verified Google Review
									</p>
								</div>
							</div>
						</div>

						{/* Review 2 */}
						<div className="rounded-3xl border border-dark-teal/10 bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer">
							<div>
								{/* 5 Stars */}
								<div className="flex gap-1 text-primary-teal mb-5">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className="h-5 w-5 fill-current"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<p className="text-dark-text/85 italic leading-relaxed text-sm">
									&ldquo;Dr Rajashree Lad is one of the best Osteopath in
									Mumbai. Cranial osteopathy worked wonders for my migraine and
									spine issues. Thanks a ton Dr Rajashree. Also, cannot forget
									to mention her cordial and expert team. Much
									recommended!!&rdquo;
								</p>
							</div>
							<div className="mt-6 flex items-center gap-3 border-t border-dark-teal/5 pt-4">
								<div className="h-10 w-10 rounded-full bg-primary-teal/10 text-primary-teal font-extrabold text-sm flex items-center justify-center group-hover:bg-primary-teal group-hover:text-white transition-colors duration-300">
									PD
								</div>
								<div>
									<h4 className="font-extrabold text-dark-teal text-sm">
										Priti Darde
									</h4>
									<p className="text-xs text-dark-text/50">
										Verified Google Review
									</p>
								</div>
							</div>
						</div>

						{/* Review 3 */}
						<div className="rounded-3xl border border-dark-teal/10 bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer">
							<div>
								{/* 5 Stars */}
								<div className="flex gap-1 text-primary-teal mb-5">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className="h-5 w-5 fill-current"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<p className="text-dark-text/85 italic leading-relaxed text-sm">
									&ldquo;Dr. Rajashree is very soft spoken and patient. She
									hears out her patient very patiently. She is very much aware
									of the latest technology and procedures available in her field
									of work. Results may vary from patient to patient but she
									makes sure that her patient is completely cured.&rdquo;
								</p>
							</div>
							<div className="mt-6 flex items-center gap-3 border-t border-dark-teal/5 pt-4">
								<div className="h-10 w-10 rounded-full bg-primary-teal/10 text-primary-teal font-extrabold text-sm flex items-center justify-center group-hover:bg-primary-teal group-hover:text-white transition-colors duration-300">
									DM
								</div>
								<div>
									<h4 className="font-extrabold text-dark-teal text-sm">
										Devangi Maniar
									</h4>
									<p className="text-xs text-dark-text/50">
										Verified Google Review
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Details & Clinic Hours Card */}
					<div
						id="contact"
						className="mt-16 rounded-3xl bg-white border border-dark-teal/10 p-8 md:p-12 shadow-lg flex flex-col lg:flex-row gap-8 justify-between items-stretch"
					>
						{/* Left Column: Info & Hours */}
						<div className="flex flex-col justify-between gap-6 lg:w-1/2">
							<div className="space-y-4">
								<span className="text-xs font-bold uppercase tracking-widest text-primary-teal">
									Visit Our Centre
								</span>
								<h3 className="text-3xl font-extrabold text-dark-teal">
									Dr. Rajashree Lad&apos;s Centre
								</h3>
								<div className="flex gap-3 text-sm text-dark-text/80 leading-relaxed">
									<MapPin className="h-5 w-5 shrink-0 text-primary-teal mt-1" />
									<span>
										Harjivandas Estate, Dr Babasaheb Ambedkar Rd, near Dadar TT,
										Dadar East, Dadar, Mumbai, Maharashtra 400014
									</span>
								</div>
							</div>

							<div className="bg-light-mint/45 border border-primary-teal/15 p-6 rounded-2xl">
								<div className="flex items-center gap-3 mb-2 text-sm font-extrabold text-dark-teal">
									<Clock className="h-5 w-5 text-primary-teal" />
									<span>Operational Hours</span>
								</div>
								<p className="text-sm font-semibold text-[#25D366]">
									Monday - Saturday: 8:00 AM - 8:30 PM
								</p>
							</div>
						</div>

						{/* Right Column: Google Maps IFrame */}
						<div className="lg:w-1/2 min-h-[280px] rounded-2xl overflow-hidden border border-dark-teal/10 shadow-inner relative bg-light-mint/10">
							<iframe
								title="Google Map location of Dr. Rajashree Lad's centre"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.80242250106!2d72.8446732!3d19.0165401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf860d89e63f%3A0x314792d08a15c28c!2sDr%20Rajashree%20Lad&#39;s%20centre%20of%20Physiotherapy%20and%20Osteopathy!5e0!3m2!1sen!2sin!4v1719647248102"
								className="absolute inset-0 w-full h-full border-0"
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</section>

			{/* TEAL BANNER SECTION: EDUCATION */}
			<section className="py-10 bg-white">
				<div className="mx-auto max-w-7xl px-6 md:px-8">
					<div className="relative rounded-3xl bg-primary-teal text-white p-8 md:p-12 shadow-xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
						{/* Decorative Glow elements */}
						<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
						<div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-dark-teal/20 blur-2xl"></div>

						<div className="relative z-10 space-y-3 max-w-2xl text-center md:text-left">
							<span className="text-xs font-black uppercase tracking-widest text-light-mint/90 font-bold">
								Featured Program
							</span>
							<h3 className="text-2xl font-extrabold sm:text-3xl leading-tight">
								Pre-Operative & Post-Operative Education
							</h3>
							<p className="text-sm text-light-mint/90">
								Prepare your body for joint/spine surgery and learn the core
								exercises to accelerate your rehabilitation post-surgery.
							</p>
						</div>

						<div className="relative z-10 shrink-0">
							<a
								href={`https://wa.me/919773953209?text=${encodeURIComponent(
									"Hello Dr. Rajashree Lad, I would like to learn more and register for your Pre-Operative & Post-Operative Education program."
								)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-extrabold text-primary-teal shadow-lg hover:bg-light-mint hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
							>
								Learn More
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* 4. FAQ ACCORDION SECTION (2 COLUMNS) */}
			<section className="py-20 lg:py-28 bg-light-mint/45 border-t border-dark-teal/5">
				<div className="mx-auto max-w-7xl px-6 md:px-8">
					<div className="text-center mb-14">
						<span className="text-xs font-bold uppercase tracking-widest text-primary-teal font-extrabold">
							FAQ
						</span>
						<h2 className="text-3xl font-extrabold text-dark-teal sm:text-4xl mt-2">
							Frequently Asked Questions
						</h2>
						<p className="mt-2 text-dark-text/70 text-sm max-w-xl mx-auto">
							Clear answers to common questions about our physiotherapy and osteopathy sessions.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
						{/* Left Column: Even indices (0, 2, 4, 6) */}
						<div className="flex flex-col gap-6">
							{FAQ_ITEMS.filter((_, idx) => idx % 2 === 0).map((faq) => {
								const originalIndex = FAQ_ITEMS.indexOf(faq);
								const isOpen = activeFaqIndex === originalIndex;
								return (
									<div
										key={originalIndex}
										className="rounded-2xl border border-dark-teal/8 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
									>
										<button
											onClick={() => setActiveFaqIndex(isOpen ? null : originalIndex)}
											className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-bold text-dark-teal hover:text-primary-teal transition-colors cursor-pointer active:scale-[0.99] transition-transform duration-150"
										>
											<span className="text-base sm:text-lg">{faq.question}</span>
											<div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-light-mint text-dark-teal">
												{isOpen ? (
													<ChevronUp className="h-4 w-4" />
												) : (
													<ChevronDown className="h-4 w-4" />
												)}
											</div>
										</button>
										
										{/* Expandable answer panel */}
										<div
											className={`transition-all duration-300 ease-in-out ${
												isOpen ? "max-h-[300px] border-t border-dark-teal/5" : "max-h-0"
											} overflow-hidden`}
										>
											<div className="p-6 text-sm text-dark-text/80 leading-relaxed bg-light-mint/10">
												{faq.answer}
											</div>
										</div>
									</div>
								);
							})}
						</div>

						{/* Right Column: Odd indices (1, 3, 5) */}
						<div className="flex flex-col gap-6">
							{FAQ_ITEMS.filter((_, idx) => idx % 2 !== 0).map((faq) => {
								const originalIndex = FAQ_ITEMS.indexOf(faq);
								const isOpen = activeFaqIndex === originalIndex;
								return (
									<div
										key={originalIndex}
										className="rounded-2xl border border-dark-teal/8 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
									>
										<button
											onClick={() => setActiveFaqIndex(isOpen ? null : originalIndex)}
											className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-bold text-dark-teal hover:text-primary-teal transition-colors cursor-pointer active:scale-[0.99] transition-transform duration-150"
										>
											<span className="text-base sm:text-lg">{faq.question}</span>
											<div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-light-mint text-dark-teal">
												{isOpen ? (
													<ChevronUp className="h-4 w-4" />
												) : (
													<ChevronDown className="h-4 w-4" />
												)}
											</div>
										</button>
										
										{/* Expandable answer panel */}
										<div
											className={`transition-all duration-300 ease-in-out ${
												isOpen ? "max-h-[300px] border-t border-dark-teal/5" : "max-h-0"
											} overflow-hidden`}
										>
											<div className="p-6 text-sm text-dark-text/80 leading-relaxed bg-light-mint/10">
												{faq.answer}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* 5. INSTANT WHATSAPP BOOKING SECTION */}
			<section
				id="appointment"
				className="py-20 lg:py-28 bg-white border-t border-dark-teal/5"
			>
				<div className="mx-auto max-w-3xl px-6 md:px-8">
					<div className="text-center mb-10">
						<span className="text-xs font-bold uppercase tracking-widest text-primary-teal">
							Start Recovery
						</span>
						<h2 className="text-3xl font-extrabold text-dark-teal sm:text-4xl mt-2">
							Book Your Consultation Instantly
						</h2>
						<p className="mt-2 text-dark-text/75 text-sm">
							Skip the forms. Connect directly with Dr. Rajashree Lad on WhatsApp.
						</p>
					</div>

					<div className="rounded-3xl border border-[#25D366]/20 bg-gradient-to-br from-white to-[#25D366]/5 p-8 md:p-12 shadow-2xl relative overflow-hidden hover:shadow-3xl hover:translate-y-[-2px] active:scale-[0.99] transition-all duration-300 group">
						{/* Decorative background glow */}
						<div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#25D366]/10 blur-3xl"></div>
						<div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-teal/10 blur-3xl"></div>

						<div className="relative z-10 flex flex-col items-center text-center">
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white mb-6 shadow-lg shadow-[#25D366]/30 animate-pulse group-hover:scale-110 transition-transform duration-300">
								<MessageCircle className="h-8 w-8 text-white fill-white/15" />
							</div>

							<h3 className="text-2xl font-extrabold text-dark-teal">
								Start a Conversation
							</h3>
							<p className="mt-3 text-sm text-dark-text/80 leading-relaxed max-w-md">
								Clicking the button below will open a secure WhatsApp chat directly with Dr. Rajashree Lad prefilled with a booking request. You can discuss symptoms, ask questions, and secure your schedule in real-time.
							</p>

							<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-lg mb-8">
								<div className="bg-white border border-[#25D366]/10 px-4 py-3 rounded-2xl shadow-sm hover:scale-[1.03] transition-transform duration-300">
									<span className="text-[#25D366] text-xs font-black uppercase tracking-wider block mb-1">
										Response Time
									</span>
									<span className="text-dark-teal font-extrabold text-sm">
										Under 2 Hours
									</span>
								</div>
								<div className="bg-white border border-[#25D366]/10 px-4 py-3 rounded-2xl shadow-sm hover:scale-[1.03] transition-transform duration-300">
									<span className="text-[#25D366] text-xs font-black uppercase tracking-wider block mb-1">
										Specialist
									</span>
									<span className="text-dark-teal font-extrabold text-sm">
										Direct Contact
									</span>
								</div>
								<div className="bg-white border border-[#25D366]/10 px-4 py-3 rounded-2xl shadow-sm hover:scale-[1.03] transition-transform duration-300">
									<span className="text-[#25D366] text-xs font-black uppercase tracking-wider block mb-1">
										Requirements
									</span>
									<span className="text-dark-teal font-extrabold text-sm">
										No Forms Needed
									</span>
								</div>
							</div>

							<a
								href={`https://wa.me/919773953209?text=${encodeURIComponent(
									"Hello Dr. Rajashree Lad, I would like to schedule an appointment for a physiotherapy consultation."
								)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] px-10 py-4.5 text-base font-extrabold text-white shadow-xl shadow-[#25D366]/30 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer"
							>
								<MessageCircle className="h-5 w-5 shrink-0" />
								Book via WhatsApp Chat
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
