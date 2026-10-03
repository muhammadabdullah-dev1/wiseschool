/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActivePage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { WordPressExportPage } from './pages/WordPressExportPage';
import { ScheduleTourModal } from './components/ScheduleTourModal';
import { SCHOOL_INFO } from './data/schoolData';
import { Phone } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isUrduMode, setIsUrduMode] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<'tour' | 'apply'>('apply');

  // Sync title dynamically based on active page
  useEffect(() => {
    const titles: Record<ActivePage, string> = {
      home: 'Wise Up International High School – Model Town, Quetta',
      about: 'About Us & Heritage – Wise Up International High School Quetta',
      services: 'Academics & Facilities – Wise Up International High School Quetta',
      contact: 'Admissions & Contact – Wise Up International High School Quetta',
      'wordpress-export': 'WordPress & Elementor Export – Wise Up International High School',
    };
    document.title = titles[activePage] || titles.home;
  }, [activePage]);

  const handleOpenApply = () => {
    setModalMode('apply');
    setIsModalOpen(true);
  };

  const handleOpenTour = () => {
    setModalMode('tour');
    setIsModalOpen(true);
  };

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#102A43]">
      {/* 1. Sticky Header with Bilingual Support & Click-to-call */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        isUrduMode={isUrduMode}
        onToggleUrdu={() => setIsUrduMode((prev) => !prev)}
        onOpenApply={handleOpenApply}
      />

      {/* 2. Page Content View */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenApply={handleOpenApply}
            onOpenTour={handleOpenTour}
            isUrduMode={isUrduMode}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onOpenApply={handleOpenApply}
            onOpenTour={handleOpenTour}
            isUrduMode={isUrduMode}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onOpenApply={handleOpenApply}
            onOpenTour={handleOpenTour}
            isUrduMode={isUrduMode}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            isUrduMode={isUrduMode}
            onOpenTour={handleOpenTour}
          />
        )}

        {activePage === 'wordpress-export' && (
          <WordPressExportPage />
        )}
      </main>

      {/* 3. Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenApply={handleOpenApply}
        isUrduMode={isUrduMode}
      />

      {/* 4. Global Admissions / Campus Tour Modal */}
      <ScheduleTourModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultMode={modalMode}
      />

      {/* 5. Mobile Quick Floating Call Action Button */}
      <div className="sm:hidden fixed bottom-4 right-4 z-40">
        <a
          href={`tel:${SCHOOL_INFO.phoneClean}`}
          className="bg-[#D4A017] text-[#102A43] font-bold p-3.5 rounded-full shadow-2xl flex items-center justify-center border-2 border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102A43]"
          title="Direct Call Admissions"
          aria-label="Direct Phone Call to Admissions Desk"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
