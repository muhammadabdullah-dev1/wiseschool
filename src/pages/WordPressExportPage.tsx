import React, { useState } from 'react';
import { Copy, Check, Download, Eye, Code, ExternalLink, Sparkles, FileText, CheckCircle2, PackageCheck, AlertCircle, ArrowDownCircle, RefreshCw, Layers } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { generateWordPressThemeZip } from '../utils/themeGenerator';
import { getElementorPageTemplateJson } from '../utils/elementorTemplate';
import { getWordPressPagesXml } from '../utils/xmlExport';

export const WordPressExportPage: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'hero' | 'form' | 'programs' | 'header-footer'>('all');
  const [showPreview, setShowPreview] = useState(false);
  const [isGeneratingZip, setIsGeneratingZip] = useState(false);
  const [themeDownloaded, setThemeDownloaded] = useState(false);

  const handleDownloadThemeZip = async () => {
    setIsGeneratingZip(true);
    try {
      const blob = await generateWordPressThemeZip();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'wise-up-school-theme.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setThemeDownloaded(true);
      setTimeout(() => setThemeDownloaded(false), 5000);
    } catch (err) {
      console.error('Error generating theme zip:', err);
    } finally {
      setIsGeneratingZip(false);
    }
  };

  const handleDownloadXml = () => {
    const xmlStr = getWordPressPagesXml();
    const blob = new Blob([xmlStr], { type: 'application/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'wise-up-pages.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadElementorJson = () => {
    const jsonStr = getElementorPageTemplateJson();
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'wise-up-elementor-template.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const downloadHtmlFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Block 1: Complete Standalone Page HTML
  const fullPageHtml = `<!-- ========================================================
  WISE UP INTERNATIONAL HIGH SCHOOL — QUETTA
  Complete Standalone WordPress / Elementor / Gutenberg Template
  Colors: Navy (#102A43), Gold (#D4A017), Off-White (#F7F7F5), Green (#1F7A4D)
======================================================== -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wise Up International High School — Model Town, Quetta</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Noto+Nastaliq+Urdu:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --wuis-navy: #102A43;
      --wuis-navy-dark: #0B1E30;
      --wuis-gold: #D4A017;
      --wuis-gold-hover: #C29012;
      --wuis-offwhite: #F7F7F5;
      --wuis-green: #1F7A4D;
      --wuis-slate: #627D98;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; background: var(--wuis-offwhite); color: var(--wuis-navy); line-height: 1.6; }
    .wuis-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .wuis-cinzel { font-family: 'Cinzel', Georgia, serif; }
    .wuis-urdu { font-family: 'Noto Nastaliq Urdu', Tahoma, serif; line-height: 1.4; }
    
    /* Topbar */
    .wuis-topbar { background: var(--wuis-navy-dark); color: #D8E2EC; font-size: 13px; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
    .wuis-topbar-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
    .wuis-topbar a { color: var(--wuis-gold); text-decoration: none; font-weight: 600; }

    /* Header */
    .wuis-header { background: var(--wuis-navy); color: #fff; padding: 15px 0; position: sticky; top: 0; z-index: 1000; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
    .wuis-header-inner { display: flex; justify-content: space-between; align-items: center; }
    .wuis-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; color: #fff; flex-shrink: 0; }
    .wuis-logo-crest { width: 44px; height: 44px; background: var(--wuis-gold); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: var(--wuis-navy); font-size: 14px; font-family: 'Cinzel'; flex-shrink: 0; }
    .wuis-brand-title { font-size: 18px; font-weight: 700; font-family: 'Cinzel'; line-height: 1.2; white-space: nowrap; }
    .wuis-brand-sub { font-size: 11px; color: var(--wuis-gold); font-weight: 600; white-space: nowrap; }
    .wuis-btn-apply { background: var(--wuis-gold); color: var(--wuis-navy); font-weight: 700; padding: 10px 20px; border-radius: 6px; text-decoration: none; display: inline-block; transition: background 0.2s; border: none; cursor: pointer; }
    .wuis-btn-apply:hover { background: var(--wuis-gold-hover); }

    /* Hero */
    .wuis-hero { background: var(--wuis-navy); color: #fff; padding: 70px 0; position: relative; border-bottom: 4px solid var(--wuis-gold); }
    .wuis-hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; }
    .wuis-hero-title { font-size: 42px; font-weight: 800; font-family: 'Cinzel'; line-height: 1.2; margin-bottom: 15px; }
    .wuis-hero-title span { color: var(--wuis-gold); }
    .wuis-hero-urdu { font-size: 20px; color: #FFE399; margin-bottom: 20px; text-align: right; }
    .wuis-hero-desc { font-size: 15px; color: #D8E2EC; margin-bottom: 25px; line-height: 1.7; }
    .wuis-btn-row { display: flex; gap: 15px; flex-wrap: wrap; margin-bottom: 30px; }
    .wuis-btn-outline { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.4); padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; }
    .wuis-hero-card { background: #0D2338; border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }

    /* Features Grid */
    .wuis-section { padding: 60px 0; }
    .wuis-sec-header { text-align: center; max-width: 700px; margin: 0 auto 40px; }
    .wuis-kicker { font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--wuis-gold); letter-spacing: 1px; }
    .wuis-sec-title { font-size: 30px; font-family: 'Cinzel'; font-weight: 700; margin-top: 5px; color: var(--wuis-navy); }
    .wuis-grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
    .wuis-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 10px; padding: 25px; box-shadow: 0 2px 5px rgba(0,0,0,0.04); }
    .wuis-card h3 { font-family: 'Cinzel'; font-size: 17px; margin-bottom: 10px; color: var(--wuis-navy); }

    /* Admissions Form */
    .wuis-form-box { background: #fff; border: 1px solid #CBD5E1; border-radius: 12px; padding: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.06); }
    .wuis-form-group { margin-bottom: 15px; }
    .wuis-form-group label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 5px; color: #334E68; }
    .wuis-form-group input, .wuis-form-group select, .wuis-form-group textarea { width: 100%; padding: 10px 12px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 14px; font-family: inherit; }
    .wuis-form-group input:focus, .wuis-form-group select:focus, .wuis-form-group textarea:focus { outline: none; border-color: var(--wuis-gold); ring: 2px solid var(--wuis-gold); }

    /* Footer */
    .wuis-footer { background: var(--wuis-navy-dark); color: #BCCCDC; padding: 50px 0 25px; border-top: 4px solid var(--wuis-gold); }
    .wuis-footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; margin-bottom: 40px; }
    .wuis-footer h4 { color: #fff; font-family: 'Cinzel'; font-size: 15px; margin-bottom: 15px; }
    .wuis-footer p, .wuis-footer a { font-size: 13px; color: #9FB3C8; text-decoration: none; }
    .wuis-footer a:hover { color: var(--wuis-gold); }

    @media (max-width: 768px) {
      .wuis-hero-grid { grid-template-columns: 1fr; }
      .wuis-hero-title { font-size: 30px; }
      .wuis-hero-urdu { text-align: left; }
    }
  </style>
</head>
<body>

  <!-- Top bar -->
  <div class="wuis-topbar">
    <div class="wuis-container wuis-topbar-inner">
      <div>📍 6225+R97, Khojak Rd, Model Town, Quetta, Pakistan</div>
      <div>
        Direct Helpline: <a href="tel:+92812828187">+92 81 2828187</a>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="wuis-header">
    <div class="wuis-container wuis-header-inner">
      <a href="#" class="wuis-brand">
        <div class="wuis-logo-crest">WUIS</div>
        <div>
          <div class="wuis-brand-title">Wise Up International</div>
          <div class="wuis-brand-sub">HIGH SCHOOL · وائزاپ انٹرنیشنل ہائی اسکول</div>
        </div>
      </a>
      <a href="#admissions-form" class="wuis-btn-apply">Apply for Admission</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="wuis-hero">
    <div class="wuis-container wuis-hero-grid">
      <div>
        <div class="wuis-kicker">MODEL TOWN, QUETTA · SESSION 2026-2027</div>
        <h1 class="wuis-hero-title">Where Excellence <br><span>Meets Opportunity</span></h1>
        <div class="wuis-urdu wuis-hero-urdu" dir="rtl">جہاں عمدگی اور مواقع کا سنگم ہوتا ہے۔ جدید نصاب اور شاندار اخلاقی تربیت۔</div>
        <p class="wuis-hero-desc">
          Wise Up International High School provides children in Quetta with premier bilingual international education, experienced faculty, and state-of-the-art facilities from Early Years through Matriculation.
        </p>
        <div class="wuis-btn-row">
          <a href="#admissions-form" class="wuis-btn-apply">Apply Online Now</a>
          <a href="tel:+92812828187" class="wuis-btn-outline">Call: +92 81 2828187</a>
        </div>
      </div>
      <div>
        <div class="wuis-hero-card">
          <h3 class="wuis-cinzel" style="color:#fff; margin-bottom:10px;">Admissions 2026-27</h3>
          <p style="font-size:13px; color:#9FB3C8; margin-bottom:15px;">Limited seats available for science & preschool divisions.</p>
          <div style="font-size:12px; color:#D8E2EC; line-height:2;">
            <div>✔ Early Years (Playgroup to KG)</div>
            <div>✔ Primary School (Grades 1 to 5)</div>
            <div>✔ Middle School (Grades 6 to 8)</div>
            <div>✔ High School (Matric Science & O-Level)</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="wuis-section">
    <div class="wuis-container">
      <div class="wuis-sec-header">
        <span class="wuis-kicker">CORE PILLARS</span>
        <h2 class="wuis-sec-title">Why Choose Wise Up International</h2>
      </div>
      <div class="wuis-grid-4">
        <div class="wuis-card">
          <h3>Experienced Faculty</h3>
          <p style="font-size:13px; color:#486581;">Subject matter experts with advanced training in bilingual pedagogy and child psychology.</p>
        </div>
        <div class="wuis-card">
          <h3>Modern Curriculum</h3>
          <p style="font-size:13px; color:#486581;">Integrating Cambridge exploratory learning with Balochistan Board matriculation rigor.</p>
        </div>
        <div class="wuis-card">
          <h3>Safe Campus</h3>
          <p style="font-size:13px; color:#486581;">CCTV-monitored boundary walls, secure transport fleet, and female attendants for junior grades.</p>
        </div>
        <div class="wuis-card">
          <h3>Bilingual Mastery</h3>
          <p style="font-size:13px; color:#486581;">Dual-language English eloquence coupled with profound appreciation for Urdu literature.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Admissions Form Section -->
  <section id="admissions-form" class="wuis-section" style="background:#fff; border-top:1px solid #E2E8F0;">
    <div class="wuis-container" style="max-width:800px;">
      <div class="wuis-sec-header">
        <span class="wuis-kicker">ADMISSIONS INQUIRY</span>
        <h2 class="wuis-sec-title">Apply for Admission 2026-2027</h2>
        <p style="font-size:13px; color:#627D98; margin-top:5px;">Model Town, Khojak Rd, Quetta · Tel: +92 81 2828187</p>
      </div>

      <div class="wuis-form-box">
        <form id="wuisForm" onsubmit="handleWuisSubmit(event)">
          <div class="wuis-form-group">
            <label>Student Full Name *</label>
            <input type="text" id="wuisStudent" required placeholder="e.g. Daniyal Khan">
          </div>
          <div class="wuis-form-group">
            <label>Parent / Guardian Name *</label>
            <input type="text" id="wuisParent" required placeholder="e.g. Asadullah Khan">
          </div>
          <div class="wuis-form-group">
            <label>Phone / WhatsApp Number *</label>
            <input type="tel" id="wuisPhone" required placeholder="0300 1234567">
          </div>
          <div class="wuis-form-group">
            <label>Desired Grade Level *</label>
            <select id="wuisGrade">
              <option>Early Childhood (Playgroup / KG)</option>
              <option>Grade 1 to Grade 5 (Primary School)</option>
              <option>Grade 6 to Grade 8 (Middle School)</option>
              <option>Grade 9 to 10 (Matric Science / O-Level)</option>
            </select>
          </div>
          <div class="wuis-form-group">
            <label>Message / Specific Questions</label>
            <textarea id="wuisMsg" rows="3" placeholder="Inquiry about school bus routes, fees, or previous school transfer..."></textarea>
          </div>
          <button type="submit" class="wuis-btn-apply" style="width:100%; font-size:15px; padding:12px;">Submit Admission Inquiry</button>
        </form>

        <div id="wuisSuccess" style="display:none; text-align:center; padding:30px 10px;">
          <div style="font-size:40px; color:var(--wuis-green); margin-bottom:10px;">✓</div>
          <h3 class="wuis-cinzel" style="color:var(--wuis-navy); font-size:22px;">Inquiry Submitted Successfully!</h3>
          <p style="font-size:13px; color:#486581; margin:10px 0 20px;">
            Thank you. Our admissions officer will contact you within 24 working hours.
          </p>
          <div style="background:#F7F7F5; padding:12px; border-radius:8px; font-size:13px; color:#102A43;">
            Admissions Helpline: <strong>+92 81 2828187</strong><br>
            Campus: Model Town, Khojak Rd, Quetta
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="wuis-footer">
    <div class="wuis-container">
      <div class="wuis-footer-grid">
        <div>
          <h4 class="wuis-brand-title">Wise Up International</h4>
          <p style="margin-bottom:10px;">Model Town, Quetta, Pakistan</p>
          <p class="wuis-urdu" dir="rtl" style="color:#FFE399; font-size:14px;">وائزاپ انٹرنیشنل ہائی اسکول کوئٹہ</p>
        </div>
        <div>
          <h4>Contact & Visit</h4>
          <p>Address: 6225+R97, Khojak Rd, Model Town, Quetta</p>
          <p>Phone: <a href="tel:+92812828187" style="color:#fff; font-weight:700;">+92 81 2828187</a></p>
        </div>
        <div>
          <h4>Facebook Community</h4>
          <p>Wise Up International Junior School Quetta</p>
          <p><a href="https://www.facebook.com/wiseupquettaschool" target="_blank" style="color:var(--wuis-gold);">Visit Facebook Page →</a></p>
        </div>
      </div>
      <div style="text-align:center; font-size:12px; color:#627D98; border-top:1px solid rgba(255,255,255,0.1); padding-top:20px;">
        © 2026 Wise Up International High School. All rights reserved.
      </div>
    </div>
  </footer>

  <script>
    function handleWuisSubmit(e) {
      e.preventDefault();
      document.getElementById('wuisForm').style.display = 'none';
      document.getElementById('wuisSuccess').style.display = 'block';
    }
  </script>
</body>
</html>`;

  // Block 2: Hero Section Only
  const heroBlockHtml = `<!-- ELEMENTOR / GUTENBERG HERO BLOCK: Wise Up International High School -->
<section style="background-color: #102A43; color: #ffffff; padding: 70px 20px; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; border-bottom: 4px solid #D4A017;">
  <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 40px;">
    <div style="flex: 1 1 540px;">
      <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #D4A017; letter-spacing: 1.5px; margin-bottom: 12px;">
        MODEL TOWN, QUETTA · SESSION 2026-2027
      </div>
      <h1 style="font-family: 'Cinzel', Georgia, serif; font-size: 42px; font-weight: 800; line-height: 1.2; margin-bottom: 15px; color: #ffffff;">
        Where Excellence <br><span style="color: #D4A017;">Meets Opportunity</span>
      </h1>
      <div style="font-family: 'Noto Nastaliq Urdu', Tahoma, serif; font-size: 18px; color: #FFE399; margin-bottom: 20px; line-height: 2;" dir="rtl">
        جہاں عمدگی اور سنہری مواقع کا سنگم ہوتا ہے۔ کوئٹہ میں جدید بین الاقوامی معیار اور اخلاقی تربیت کا معتبر ادارہ۔
      </div>
      <p style="font-size: 15px; color: #D8E2EC; line-height: 1.7; margin-bottom: 30px; max-width: 540px;">
        Wise Up International High School provides children in Quetta with premier bilingual international education, experienced faculty, and modern facilities from Montessori Early Years through BISE Matriculation.
      </p>
      <div style="display: flex; gap: 15px; flex-wrap: wrap;">
        <a href="#admissions-form" style="background-color: #D4A017; color: #102A43; font-weight: 700; padding: 12px 26px; border-radius: 6px; text-decoration: none; font-size: 15px; display: inline-block;">
          Apply Now for Admission
        </a>
        <a href="tel:+92812828187" style="background-color: transparent; color: #ffffff; border: 2px solid rgba(255,255,255,0.4); font-weight: 600; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 15px; display: inline-block;">
          Call: +92 81 2828187
        </a>
      </div>
    </div>
    
    <div style="flex: 1 1 380px; max-width: 440px; background-color: #0D2338; border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 30px; box-shadow: 0 15px 35px rgba(0,0,0,0.35);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin-bottom: 15px;">
        <span style="font-family: 'Cinzel', Georgia, serif; font-size: 15px; font-weight: 700; color: #ffffff;">ADMISSIONS OPEN</span>
        <span style="font-size: 11px; background: #1F7A4D; color: #fff; padding: 2px 8px; border-radius: 4px; font-weight: 600;">2026-27</span>
      </div>
      <div style="font-size: 13px; color: #CBD5E1; line-height: 2;">
        <div>✔ Early Years (Playgroup, Nursery, KG)</div>
        <div>✔ Primary School (Grades 1 to 5)</div>
        <div>✔ Middle School (Grades 6 to 8)</div>
        <div>✔ High School (Balochistan BISE Science)</div>
      </div>
      <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12px; color: #9FB3C8;">
        Helpline: <strong style="color: #D4A017;">+92 81 2828187</strong><br>
        Address: Khojak Rd, Model Town, Quetta
      </div>
    </div>
  </div>
</section>`;

  // Block 3: Interactive Admissions Form Block
  const formBlockHtml = `<!-- ELEMENTOR / GUTENBERG ADMISSIONS FORM BLOCK -->
<div id="wuis-admissions-block" style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif; background: #ffffff; border: 1px solid #CBD5E1; border-radius: 12px; padding: 35px 25px; max-width: 650px; margin: 30px auto; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
  <div style="text-align: center; margin-bottom: 25px;">
    <span style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #D4A017; letter-spacing: 1px;">WISE UP INTERNATIONAL HIGH SCHOOL</span>
    <h2 style="font-family: 'Cinzel', Georgia, serif; font-size: 24px; font-weight: 700; color: #102A43; margin: 5px 0;">Admissions Inquiry 2026-2027</h2>
    <p style="font-size: 13px; color: #627D98;">Model Town, Khojak Rd, Quetta · Tel: +92 81 2828187</p>
  </div>

  <form id="standaloneWuisForm" onsubmit="event.preventDefault(); document.getElementById('standaloneWuisForm').style.display='none'; document.getElementById('standaloneWuisSuccess').style.display='block';">
    <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-bottom: 15px;">
      <div style="flex: 1 1 240px;">
        <label style="display:block; font-size: 13px; font-weight: 600; color: #334E68; margin-bottom: 6px;">Student Full Name *</label>
        <input type="text" required placeholder="e.g. Daniyal Khan" style="width: 100%; padding: 10px 12px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
      </div>
      <div style="flex: 1 1 240px;">
        <label style="display:block; font-size: 13px; font-weight: 600; color: #334E68; margin-bottom: 6px;">Parent / Guardian Name *</label>
        <input type="text" required placeholder="e.g. Asadullah Khan" style="width: 100%; padding: 10px 12px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
      </div>
    </div>

    <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-bottom: 15px;">
      <div style="flex: 1 1 240px;">
        <label style="display:block; font-size: 13px; font-weight: 600; color: #334E68; margin-bottom: 6px;">Phone / WhatsApp *</label>
        <input type="tel" required placeholder="0300 1234567" style="width: 100%; padding: 10px 12px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
      </div>
      <div style="flex: 1 1 240px;">
        <label style="display:block; font-size: 13px; font-weight: 600; color: #334E68; margin-bottom: 6px;">Desired Grade Level *</label>
        <select style="width: 100%; padding: 10px 12px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 14px; box-sizing: border-box; background: #fff;">
          <option>Early Childhood (Playgroup / KG)</option>
          <option>Grade 1 to 5 (Primary School)</option>
          <option>Grade 6 to 8 (Middle School)</option>
          <option>Grade 9 to 10 (Matric Science / O-Level)</option>
        </select>
      </div>
    </div>

    <div style="margin-bottom: 20px;">
      <label style="display:block; font-size: 13px; font-weight: 600; color: #334E68; margin-bottom: 6px;">Questions / Specific Notes</label>
      <textarea rows="3" placeholder="Inquiry about school transport routes, fee schedule, or previous school transfer..." style="width: 100%; padding: 10px 12px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 14px; box-sizing: border-box; resize: vertical;"></textarea>
    </div>

    <button type="submit" style="width: 100%; background: #D4A017; color: #102A43; font-weight: 700; padding: 12px; border: none; border-radius: 6px; font-size: 15px; cursor: pointer; transition: background 0.2s;">
      Submit Admission Inquiry
    </button>
  </form>

  <div id="standaloneWuisSuccess" style="display:none; text-align: center; padding: 30px 10px;">
    <div style="font-size: 42px; color: #1F7A4D; margin-bottom: 10px;">✓</div>
    <h3 style="font-family: 'Cinzel', Georgia, serif; font-size: 22px; color: #102A43; margin-bottom: 8px;">Inquiry Received!</h3>
    <p style="font-size: 14px; color: #486581; line-height: 1.6; margin-bottom: 20px;">
      Thank you for contacting Wise Up International High School. Our admissions advisor will contact you within 24 hours.
    </p>
    <div style="background: #F7F7F5; padding: 12px; border-radius: 8px; font-size: 13px; color: #102A43;">
      Direct Line: <strong>+92 81 2828187</strong> · Model Town, Quetta
    </div>
  </div>
</div>`;

  // Block 4: Academic Programs Grid
  const programsGridHtml = `<!-- ELEMENTOR / GUTENBERG ACADEMIC PROGRAMS GRID -->
<section style="padding: 50px 20px; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; background: #F7F7F5;">
  <div style="max-width: 1200px; margin: 0 auto;">
    <div style="text-align: center; margin-bottom: 40px;">
      <span style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #D4A017; letter-spacing: 1px;">ACADEMIC TIERS</span>
      <h2 style="font-family: 'Cinzel', Georgia, serif; font-size: 30px; font-weight: 700; color: #102A43;">Academic Pathways at Wise Up</h2>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
      <!-- Card 1 -->
      <div style="background: #fff; border-radius: 10px; border: 1px solid #E2E8F0; padding: 25px; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
        <div style="font-size: 11px; font-weight: 700; color: #D4A017; margin-bottom: 5px;">PLAYGROUP TO KG</div>
        <h3 style="font-family: 'Cinzel', Georgia, serif; font-size: 18px; color: #102A43; margin-bottom: 10px;">Early Childhood & Montessori</h3>
        <p style="font-size: 13px; color: #627D98; line-height: 1.6;">Sensory-rich foundational program fostering motor skills, bilingual phonics, and joyful discovery.</p>
      </div>

      <!-- Card 2 -->
      <div style="background: #fff; border-radius: 10px; border: 1px solid #E2E8F0; padding: 25px; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
        <div style="font-size: 11px; font-weight: 700; color: #D4A017; margin-bottom: 5px;">GRADES 1 TO 5</div>
        <h3 style="font-family: 'Cinzel', Georgia, serif; font-size: 18px; color: #102A43; margin-bottom: 10px;">Primary School Education</h3>
        <p style="font-size: 13px; color: #627D98; line-height: 1.6;">Core STEAM foundations, English literacy, logical mathematics, Urdu diction, and character ethics.</p>
      </div>

      <!-- Card 3 -->
      <div style="background: #fff; border-radius: 10px; border: 1px solid #E2E8F0; padding: 25px; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
        <div style="font-size: 11px; font-weight: 700; color: #D4A017; margin-bottom: 5px;">GRADES 6 TO 8</div>
        <h3 style="font-family: 'Cinzel', Georgia, serif; font-size: 18px; color: #102A43; margin-bottom: 10px;">Middle School Program</h3>
        <p style="font-size: 13px; color: #627D98; line-height: 1.6;">Specialized laboratory science courses, digital computing, formal debating, and pre-matriculation tracks.</p>
      </div>

      <!-- Card 4 -->
      <div style="background: #fff; border-radius: 10px; border: 1px solid #E2E8F0; padding: 25px; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
        <div style="font-size: 11px; font-weight: 700; color: #1F7A4D; margin-bottom: 5px;">GRADES 9 & 10 (MATRIC)</div>
        <h3 style="font-family: 'Cinzel', Georgia, serif; font-size: 18px; color: #102A43; margin-bottom: 10px;">High School & Board Prep</h3>
        <p style="font-size: 13px; color: #627D98; line-height: 1.6;">BISE Balochistan Board science stream preparation with high A-1 pass rates and career guidance.</p>
      </div>
    </div>
  </div>
</section>`;

  // Block 5: Header and Footer HTML
  const headerFooterHtml = `<!-- ELEMENTOR / GUTENBERG STICKY HEADER & FOOTER -->
<!-- Top Bar -->
<div style="background: #0B1E30; color: #D8E2EC; font-size: 12px; padding: 8px 15px; border-bottom: 1px solid rgba(255,255,255,0.1); font-family: 'Plus Jakarta Sans', sans-serif;">
  <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <div>📍 Model Town, Khojak Rd, Quetta · Mon–Sat 8:00 AM – 3:30 PM</div>
    <div>Call Admissions: <a href="tel:+92812828187" style="color: #D4A017; font-weight: 700; text-decoration: none;">+92 81 2828187</a></div>
  </div>
</div>

<!-- Main Sticky Header -->
<header style="background: #102A43; color: #fff; padding: 15px 20px; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.2); font-family: 'Plus Jakarta Sans', sans-serif;">
  <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 12px;">
      <div style="width: 42px; height: 42px; background: #D4A017; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-family: 'Cinzel', Georgia, serif; font-weight: 800; color: #102A43; font-size: 14px;">WUIS</div>
      <div>
        <div style="font-family: 'Cinzel', Georgia, serif; font-size: 18px; font-weight: 700; line-height: 1.2;">Wise Up International</div>
        <div style="font-size: 11px; color: #D4A017; font-weight: 600;">وائزاپ انٹرنیشنل ہائی اسکول · Model Town Quetta</div>
      </div>
    </div>
    <div>
      <a href="#admissions-form" style="background: #D4A017; color: #102A43; font-weight: 700; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-size: 14px;">Apply Now</a>
    </div>
  </div>
</header>

<!-- Footer -->
<footer style="background: #0B1E30; color: #9FB3C8; padding: 50px 20px 20px; font-family: 'Plus Jakarta Sans', sans-serif; border-top: 4px solid #D4A017; margin-top: 40px;">
  <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; margin-bottom: 30px;">
    <div>
      <h4 style="font-family: 'Cinzel', Georgia, serif; color: #fff; font-size: 16px; margin-bottom: 12px;">Wise Up International High School</h4>
      <p style="font-size: 13px; line-height: 1.6;">Where Excellence Meets Opportunity. Serving the Model Town, Quetta educational community.</p>
    </div>
    <div>
      <h4 style="font-family: 'Cinzel', Georgia, serif; color: #fff; font-size: 16px; margin-bottom: 12px;">Campus & Contact</h4>
      <p style="font-size: 13px;">Address: 6225+R97, Khojak Rd, Model Town, Quetta</p>
      <p style="font-size: 13px; margin-top: 5px;">Phone: <a href="tel:+92812828187" style="color: #fff; font-weight: 700;">+92 81 2828187</a></p>
    </div>
    <div>
      <h4 style="font-family: 'Cinzel', Georgia, serif; color: #fff; font-size: 16px; margin-bottom: 12px;">Social Community</h4>
      <p style="font-size: 13px;">Facebook: Wise Up International Junior School Quetta</p>
      <a href="https://www.facebook.com/wiseupquettaschool" target="_blank" style="color: #D4A017; font-size: 13px; font-weight: 600; text-decoration: none; display: inline-block; margin-top: 5px;">View Facebook Page →</a>
    </div>
  </div>
  <div style="text-align: center; font-size: 12px; color: #627D98; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px;">
    © 2026 Wise Up International High School (وائزاپ انٹرنیشنل ہائی اسکول). All rights reserved.
  </div>
</footer>`;

  const getActiveCode = () => {
    switch (activeTab) {
      case 'hero':
        return heroBlockHtml;
      case 'form':
        return formBlockHtml;
      case 'programs':
        return programsGridHtml;
      case 'header-footer':
        return headerFooterHtml;
      default:
        return fullPageHtml;
    }
  };

  const getActiveFilename = () => {
    switch (activeTab) {
      case 'hero':
        return 'wise-up-hero-block.html';
      case 'form':
        return 'wise-up-admissions-form.html';
      case 'programs':
        return 'wise-up-academic-programs.html';
      case 'header-footer':
        return 'wise-up-header-footer.html';
      default:
        return 'wise-up-international-school-wordpress.html';
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] pb-24">
      {/* Page Title Header */}
      <section className="bg-[#102A43] text-white py-16 sm:py-20 border-b border-[#243E56]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4A017]">
              <span>Official WordPress Integration Kit</span>
              <span className="text-white/40">·</span>
              <span>Complete Theme (.ZIP) & Page Builder Blocks</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              WordPress Export & Theme
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Install the complete academic website directly into your WordPress site as an installable Theme (<code className="text-[#D4A017]">.zip</code>) or export individual responsive blocks for Elementor and Gutenberg.
            </p>
          </div>
        </div>
      </section>

      {/* 1. RECOMMENDED: COMPLETE WORDPRESS THEME INSTALLATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 mb-8">
        <div className="bg-gradient-to-r from-[#102A43] via-[#0D2338] to-[#102A43] text-white rounded-2xl border-2 border-[#D4A017] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-64 h-64 bg-[#D4A017]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#D4A017] text-[#102A43] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                  Recommended Method
                </span>
                <span className="text-xs text-amber-200 font-medium">
                  Fixes missing layout & stripped code
                </span>
              </div>

              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Install as Complete WordPress Theme (.ZIP)
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                <strong>Why raw HTML didn't show the full site:</strong> Standard WordPress page editors automatically strip out essential <code className="text-[#D4A017]">&lt;head&gt;</code>, <code className="text-[#D4A017]">&lt;style&gt;</code>, and <code className="text-[#D4A017]">&lt;script&gt;</code> tags for security reasons, while your existing theme forces narrow width boundaries.
              </p>

              <div className="bg-white/10 rounded-xl p-4 border border-white/15 text-xs text-slate-200 space-y-2">
                <strong className="text-white block font-cinzel text-sm">
                  How to install in 4 simple steps:
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#D4A017] text-[#102A43] font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
                    <span>Click <strong>"Download Theme (.ZIP)"</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#D4A017] text-[#102A43] font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
                    <span>Go to <strong>Appearance → Themes</strong> in WP</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#D4A017] text-[#102A43] font-bold text-[11px] flex items-center justify-center shrink-0">3</span>
                    <span>Click <strong>"Upload Theme"</strong> & pick the .zip</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#D4A017] text-[#102A43] font-bold text-[11px] flex items-center justify-center shrink-0">4</span>
                    <span>Click <strong>Install Now</strong> & <strong>Activate</strong></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <PackageCheck className="w-14 h-14 text-[#D4A017] mb-3 animate-pulse" />
              <div className="text-sm font-bold text-white font-cinzel mb-1">
                wise-up-school-theme.zip
              </div>
              <p className="text-[11px] text-slate-400 mb-4">
                Complete self-contained WordPress theme package with responsive header, K-10 programs, Urdu fonts & admissions form.
              </p>

              <button
                onClick={handleDownloadThemeZip}
                disabled={isGeneratingZip}
                className="w-full py-3.5 px-6 bg-[#D4A017] hover:bg-[#c29012] text-[#102A43] font-bold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {isGeneratingZip ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Packaging Theme...</span>
                  </>
                ) : themeDownloaded ? (
                  <>
                    <Check className="w-4 h-4 text-[#102A43]" />
                    <span>Downloaded Successfully!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-[#102A43]" />
                    <span>Download Complete Theme (.ZIP)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ELEMENTOR EDITING & MANUAL CUSTOMIZATION GUIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-[#92003B] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Elementor Compatible
                </span>
                <span className="text-xs font-bold uppercase text-[#D4A017] tracking-wider">
                  Live Visual Drag & Drop Editing
                </span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#102A43]">
                Edit Pages Manually with Elementor Plugin
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                The theme is built with native Elementor compatibility. You can click on any page in WordPress, open Elementor, and manually customize any text, phone number, address, or picture directly in the visual builder.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                onClick={handleDownloadXml}
                className="py-2.5 px-3.5 bg-amber-50 hover:bg-amber-100 text-[#102A43] text-xs font-bold rounded-lg border border-[#D4A017] transition-colors flex items-center gap-2 shadow-sm"
                title="Download WordPress XML Pages File to import via Tools > Import"
              >
                <Download className="w-4 h-4 text-[#D4A017]" />
                <span>Download Pages XML (Tools → Import)</span>
              </button>

              <button
                onClick={handleDownloadElementorJson}
                className="py-2.5 px-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg border border-slate-300 transition-colors flex items-center gap-2 shadow-sm"
                title="Download Elementor Page Template JSON"
              >
                <Download className="w-4 h-4 text-[#102A43]" />
                <span>Download Elementor JSON Template</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="p-4 bg-[#F7F7F5] rounded-xl border border-slate-200 space-y-2">
              <strong className="text-sm text-[#102A43] font-cinzel block">1. Open Any Page in Elementor</strong>
              <p className="leading-relaxed">
                In your WordPress Dashboard, go to <strong>Pages</strong>. Hover over <em>Home</em>, <em>About Us</em>, <em>Academics</em>, or <em>Contact</em>, and click <strong>"Edit with Elementor"</strong>.
              </p>
            </div>

            <div className="p-4 bg-[#F7F7F5] rounded-xl border border-slate-200 space-y-2">
              <strong className="text-sm text-[#102A43] font-cinzel block">2. Click & Type to Edit</strong>
              <p className="leading-relaxed">
                Click on any headline, paragraph, fee figure, phone number, or button to change it immediately on your screen. You can customize colors and typography in the Elementor Style panel.
              </p>
            </div>

            <div className="p-4 bg-[#F7F7F5] rounded-xl border border-slate-200 space-y-2">
              <strong className="text-sm text-[#102A43] font-cinzel block">3. Drag & Drop New Widgets</strong>
              <p className="leading-relaxed">
                Want to add extra photo galleries, contact forms, video tours, or staff profiles? Simply drag new widgets from the Elementor left panel. Click <strong>Update</strong> to publish instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Color Variables Reference Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
            <div>
              <h2 className="font-cinzel text-base font-bold text-[#102A43]">
                Brand Color Palette Guide (Elementor / Gutenberg)
              </h2>
              <p className="text-xs text-slate-500">
                Use these exact hex color values when styling elements or theme settings in WordPress.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Client Brand Approved
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3 rounded-lg border border-slate-200 bg-[#F7F7F5] flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#102A43] shadow-sm border border-black/10 shrink-0" />
              <div>
                <strong className="block text-[#102A43]">Deep Navy</strong>
                <code className="text-[11px] font-mono font-bold text-slate-600">#102A43</code>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-slate-200 bg-[#F7F7F5] flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#D4A017] shadow-sm border border-black/10 shrink-0" />
              <div>
                <strong className="block text-[#102A43]">Prestige Gold</strong>
                <code className="text-[11px] font-mono font-bold text-slate-600">#D4A017</code>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-slate-200 bg-[#F7F7F5] flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#F7F7F5] shadow-sm border border-slate-300 shrink-0" />
              <div>
                <strong className="block text-[#102A43]">Soft Off-White</strong>
                <code className="text-[11px] font-mono font-bold text-slate-600">#F7F7F5</code>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-slate-200 bg-[#F7F7F5] flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#1F7A4D] shadow-sm border border-black/10 shrink-0" />
              <div>
                <strong className="block text-[#102A43]">Emerald Accent</strong>
                <code className="text-[11px] font-mono font-bold text-slate-600">#1F7A4D</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Export Workstation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
          {/* Controls Header */}
          <div className="bg-[#102A43] text-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 border-b border-[#243E56]">
            {/* Block Selector Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-[#0B1E30] p-1.5 rounded-lg text-xs">
              {[
                { id: 'all' as const, label: 'Complete Landing Page' },
                { id: 'hero' as const, label: 'Hero Section' },
                { id: 'form' as const, label: 'Admissions Form' },
                { id: 'programs' as const, label: 'Programs Grid' },
                { id: 'header-footer' as const, label: 'Header & Footer' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#D4A017] text-[#102A43] font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Actions: Preview Toggle, Copy, Download */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                  showPreview
                    ? 'bg-white text-[#102A43] border-white'
                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                }`}
              >
                {showPreview ? <Code className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showPreview ? 'View Source Code' : 'Live Preview'}</span>
              </button>

              <button
                onClick={() => copyToClipboard(getActiveCode(), activeTab)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#D4A017] hover:bg-[#c29012] text-[#102A43] font-bold text-xs rounded-lg transition-colors shadow-sm"
              >
                {copiedKey === activeTab ? <Check className="w-3.5 h-3.5 text-[#102A43]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === activeTab ? 'Copied to Clipboard!' : 'Copy HTML'}</span>
              </button>

              <button
                onClick={() => downloadHtmlFile(getActiveCode(), getActiveFilename())}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-lg transition-colors border border-white/20"
                title="Download HTML file"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>

          {/* Instructions Strip */}
          <div className="bg-amber-50 border-b border-amber-200 px-5 py-3 text-xs text-amber-900 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4A017] shrink-0" />
              <span>
                <strong>How to paste into Elementor:</strong> Drag an <em>"HTML"</em> widget onto your section and paste this code.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#D4A017] shrink-0" />
              <span>
                <strong>How to paste into Gutenberg:</strong> Add a <em>"Custom HTML"</em> block and paste directly.
              </span>
            </div>
          </div>

          {/* Main Content Area: Code Viewer or Live Preview */}
          {showPreview ? (
            <div className="p-4 bg-slate-100">
              <div className="bg-white rounded-lg border border-slate-300 overflow-hidden shadow-inner">
                <div className="bg-slate-200 px-4 py-2 border-b border-slate-300 text-[11px] font-mono text-slate-600 flex items-center justify-between">
                  <span>Simulated Live Rendering of Block ({getActiveFilename()})</span>
                  <span>Responsive Sandbox View</span>
                </div>
                <iframe
                  srcDoc={getActiveCode()}
                  title="WordPress Block Preview"
                  className="w-full h-[600px] border-none"
                  sandbox="allow-scripts"
                />
              </div>
            </div>
          ) : (
            <div className="relative">
              <pre className="p-6 bg-[#0B1E30] text-slate-200 font-mono text-xs overflow-x-auto max-h-[600px] leading-relaxed selection:bg-[#D4A017]/30 selection:text-white">
                <code>{getActiveCode()}</code>
              </pre>
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => copyToClipboard(getActiveCode(), activeTab)}
                  className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 transition-colors backdrop-blur-sm"
                >
                  {copiedKey === activeTab ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#D4A017]" />}
                  <span>{copiedKey === activeTab ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Integration Guide Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-cinzel text-base font-bold text-[#102A43]">1. Elementor Deployment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Open your target page in Elementor. Create a 1-column full-width section with 0 padding. Drag in the <strong>HTML</strong> widget, and paste the code block. Save and publish.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-cinzel text-base font-bold text-[#102A43]">2. Gutenberg Block Editor</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In the default WordPress editor, click the <strong>+</strong> button, search for <strong>Custom HTML</strong>, and paste any block code. You can preview instantly inside the editor.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-cinzel text-base font-bold text-[#102A43]">3. Standalone PHP / Theme File</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Use the <strong>Complete Landing Page</strong> export as a standalone custom page template (e.g., <code>page-wiseup.php</code>) inside your active WordPress child theme directory.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
