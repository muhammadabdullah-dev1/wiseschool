import JSZip from 'jszip';
import {
  SCHOOL_INFO,
  ACADEMIC_PROGRAMS,
  SUPPORT_SERVICES,
  EXTRACURRICULARS,
  FACILITIES,
  TRANSPORT_AND_MEALS,
  NEWS_ANNOUNCEMENTS,
  LEADERSHIP_INFO,
  ACCREDITATIONS,
  DEPARTMENTS
} from '../data/schoolData';
import { getElementorPageTemplateJson } from './elementorTemplate';
import { getWordPressPagesXml } from './xmlExport';

export async function generateWordPressThemeZip(): Promise<Blob> {
  const zip = new JSZip();
  const themeFolder = zip.folder('wise-up-school-theme') || zip;

  // ==========================================
  // 1. style.css (Comprehensive theme stylesheet)
  // ==========================================
  const styleCss = `/*
Theme Name: Wise Up International High School
Theme URI: https://wiseup.edu.pk
Author: Wise Up Educational Trust
Author URI: https://wiseup.edu.pk
Description: Official academic institutional WordPress theme for Wise Up International High School (وائزاپ انٹرنیشنل ہائی اسکول), Model Town, Quetta, Pakistan. Includes automatic page creation, K-10 curriculum showcase, admissions inquiry engine, bilingual English-Urdu typography, and responsive layouts.
Version: 2.0.0
Requires at least: 5.8
Tested up to: 6.7
Requires PHP: 7.4
License: GNU General Public License v2 or later
Text Domain: wise-up-school
*/

:root {
  --wuis-navy: #102A43;
  --wuis-navy-dark: #0B1E30;
  --wuis-navy-light: #1A365D;
  --wuis-gold: #D4A017;
  --wuis-gold-hover: #C29012;
  --wuis-offwhite: #F7F7F5;
  --wuis-green: #1F7A4D;
  --wuis-slate: #627D98;
  --wuis-border: #E2E8F0;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--wuis-offwhite);
  color: var(--wuis-navy);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.wuis-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.wuis-cinzel {
  font-family: 'Cinzel', Georgia, serif;
}

.wuis-urdu {
  font-family: 'Noto Nastaliq Urdu', 'Noto Sans Arabic', Tahoma, serif;
  line-height: 1.5;
}

/* Topbar */
.wuis-topbar {
  background: var(--wuis-navy-dark);
  color: #D8E2EC;
  font-size: 12px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.wuis-topbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.wuis-topbar a {
  color: var(--wuis-gold);
  text-decoration: none;
  font-weight: 700;
}

/* Header */
.wuis-header {
  background: var(--wuis-navy);
  color: #fff;
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #243E56;
}

.wuis-header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.wuis-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #fff;
  flex-shrink: 0;
}

.wuis-logo-crest {
  width: 44px;
  height: 44px;
  background: var(--wuis-gold);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: var(--wuis-navy);
  font-size: 13px;
  font-family: 'Cinzel', serif;
  flex-shrink: 0;
}

.wuis-brand-title {
  font-size: 18px;
  font-weight: 700;
  font-family: 'Cinzel', serif;
  line-height: 1.2;
  white-space: nowrap;
}

.wuis-brand-sub {
  font-size: 11px;
  color: #CBD5E1;
  font-weight: 500;
  white-space: nowrap;
  margin-top: 2px;
}

.wuis-brand-sub .urdu {
  color: var(--wuis-gold);
  font-size: 12px;
}

.wuis-nav {
  display: flex;
  align-items: center;
  gap: 18px;
  list-style: none;
}

.wuis-nav a {
  color: #E2E8F0;
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 600;
  transition: color 0.2s;
  white-space: nowrap;
}

.wuis-nav a:hover,
.wuis-nav a.active {
  color: var(--wuis-gold);
}

.wuis-header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.wuis-btn-apply {
  background: var(--wuis-gold);
  color: var(--wuis-navy);
  font-weight: 700;
  padding: 9px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 13.5px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  white-space: nowrap;
}

.wuis-btn-apply:hover {
  background: var(--wuis-gold-hover);
  transform: translateY(-1px);
}

.wuis-btn-outline {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.35);
  padding: 9px 18px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 13.5px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
  cursor: pointer;
}

.wuis-btn-outline:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

/* Mobile Hamburger Menu */
.wuis-menu-toggle {
  display: none;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.wuis-mobile-drawer {
  display: none;
  background: var(--wuis-navy-dark);
  padding: 15px 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.wuis-mobile-drawer a {
  display: block;
  color: #E2E8F0;
  text-decoration: none;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.wuis-mobile-drawer a:hover {
  color: var(--wuis-gold);
}

/* Hero */
.wuis-hero {
  background: var(--wuis-navy);
  color: #fff;
  padding: 75px 0;
  position: relative;
  border-bottom: 4px solid var(--wuis-gold);
}

.wuis-hero-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 40px;
  align-items: center;
}

.wuis-hero-kicker {
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--wuis-gold);
  letter-spacing: 1.5px;
  margin-bottom: 14px;
}

.wuis-hero-title {
  font-size: 42px;
  font-weight: 800;
  font-family: 'Cinzel', serif;
  line-height: 1.15;
  margin-bottom: 15px;
  color: #fff;
}

.wuis-hero-title span {
  color: var(--wuis-gold);
}

.wuis-hero-urdu {
  font-size: 18px;
  color: #FFE399;
  margin-bottom: 20px;
  line-height: 1.8;
  text-align: right;
}

.wuis-hero-desc {
  font-size: 15px;
  color: #D8E2EC;
  line-height: 1.7;
  margin-bottom: 30px;
  max-width: 580px;
}

.wuis-btn-row {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 35px;
}

.wuis-stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 20px;
}

.wuis-stat-val {
  font-family: 'Cinzel', serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--wuis-gold);
}

.wuis-stat-lbl {
  font-size: 11px;
  color: #CBD5E1;
}

.wuis-hero-card {
  background: var(--wuis-navy-dark);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
}

/* Quick Links Row */
.wuis-quicklinks-row {
  margin-top: -35px;
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.wuis-quicklink-card {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  border: 1px solid var(--wuis-border);
  border-top: 4px solid var(--wuis-gold);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s, box-shadow 0.2s;
}

.wuis-quicklink-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

/* Sections */
.wuis-section {
  padding: 70px 0;
}

.wuis-sec-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 45px;
}

.wuis-sec-kicker {
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--wuis-gold);
  letter-spacing: 1.5px;
  display: block;
  margin-bottom: 8px;
}

.wuis-sec-title {
  font-size: 32px;
  font-family: 'Cinzel', serif;
  font-weight: 700;
  color: var(--wuis-navy);
}

.wuis-sec-desc {
  font-size: 14px;
  color: var(--wuis-slate);
  margin-top: 8px;
}

/* Grids */
.wuis-grid-4 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}

.wuis-grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
}

.wuis-grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.wuis-card {
  background: #fff;
  border: 1px solid var(--wuis-border);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s, box-shadow 0.2s;
}

.wuis-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.wuis-card h3 {
  font-family: 'Cinzel', serif;
  font-size: 18px;
  color: var(--wuis-navy);
  margin-bottom: 10px;
}

.wuis-card p {
  font-size: 13px;
  color: #486581;
  line-height: 1.6;
}

/* Program Cards with Image */
.wuis-program-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--wuis-border);
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.wuis-program-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.wuis-program-img {
  height: 180px;
  width: 100%;
  object-fit: cover;
}

.wuis-program-body {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Admissions Form Box */
.wuis-form-box {
  background: #fff;
  border: 1px solid #CBD5E1;
  border-radius: 14px;
  padding: 35px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.wuis-form-group {
  margin-bottom: 18px;
}

.wuis-form-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #334E68;
}

.wuis-form-group input,
.wuis-form-group select,
.wuis-form-group textarea {
  width: 100%;
  padding: 11px 13px;
  border: 1px solid #CBD5E1;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  background: #fff;
}

.wuis-form-group input:focus,
.wuis-form-group select:focus,
.wuis-form-group textarea:focus {
  outline: none;
  border-color: var(--wuis-gold);
  box-shadow: 0 0 0 3px rgba(212, 160, 23, 0.2);
}

/* Modal */
.wuis-modal-backdrop {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(11, 30, 48, 0.85);
  backdrop-filter: blur(4px);
  z-index: 9999;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.wuis-modal-content {
  background: #fff;
  border-radius: 14px;
  max-width: 550px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0,0,0,0.3);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.wuis-modal-header {
  background: var(--wuis-navy);
  color: #fff;
  padding: 20px 25px;
  position: relative;
}

.wuis-modal-close {
  position: absolute;
  top: 18px;
  right: 20px;
  background: transparent;
  border: none;
  color: #CBD5E1;
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
}

.wuis-modal-close:hover {
  color: #fff;
}

.wuis-modal-body {
  padding: 25px;
}

/* Floating Call Button */
.wuis-floating-call {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--wuis-gold);
  color: var(--wuis-navy);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
  z-index: 900;
  text-decoration: none;
  font-size: 22px;
  border: 2px solid #fff;
}

/* Footer */
.wuis-footer {
  background: var(--wuis-navy-dark);
  color: #BCCCDC;
  padding: 60px 0 25px;
  border-top: 4px solid var(--wuis-gold);
}

.wuis-footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 35px;
  margin-bottom: 45px;
}

.wuis-footer h4 {
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 16px;
  margin-bottom: 18px;
}

.wuis-footer p,
.wuis-footer a {
  font-size: 13px;
  color: #9FB3C8;
  text-decoration: none;
  line-height: 1.7;
}

.wuis-footer a:hover {
  color: var(--wuis-gold);
}

@media (max-width: 991px) {
  .wuis-hero-grid {
    grid-template-columns: 1fr;
  }
  .wuis-nav {
    display: none;
  }
  .wuis-menu-toggle {
    display: block;
  }
  .wuis-grid-2 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .wuis-hero-title {
    font-size: 30px;
  }
  .wuis-hero-urdu {
    text-align: left;
  }
  .wuis-stats-row {
    grid-template-columns: repeat(2, 1fr);
  }
  .wuis-form-box {
    padding: 25px 20px;
  }
}
`;
  themeFolder.file('style.css', styleCss);

  // ==========================================
  // 2. functions.php (Auto-creation of pages & routing)
  // ==========================================
  const functionsPhp = `<?php
/**
 * Wise Up International High School Theme Functions
 */

if (!defined('ABSPATH')) {
    exit;
}

// Setup Theme & Automatically Create Pages on Theme Activation
function wiseup_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('responsive-embeds');
    add_theme_support('elementor');

    register_nav_menus(array(
        'primary' => __('Primary Navigation Menu', 'wise-up-school'),
        'footer'  => __('Footer Menu', 'wise-up-school'),
    ));
}
add_action('after_setup_theme', 'wiseup_setup');

// Automatically create Home, About, Academics, and Contact pages!
function wiseup_auto_create_pages() {
    $pages_to_create = array(
        array(
            'title'    => 'Home',
            'slug'     => 'home',
            'template' => 'front-page.php',
            'is_front' => true,
            'content'  => '<h2>Where Excellence Meets Opportunity</h2><p>Wise Up International High School provides children in Quetta with premier bilingual international education from Montessori Early Years through BISE Matriculation.</p>',
        ),
        array(
            'title'    => 'About Us',
            'slug'     => 'about',
            'template' => 'page-about.php',
            'is_front' => false,
            'content'  => '<h2>About Our Heritage & Vision</h2><p>Wise Up International High School was established on Khojak Road, Model Town, Quetta to provide learners in Balochistan with premier bilingual education.</p>',
        ),
        array(
            'title'    => 'Academics & Services',
            'slug'     => 'services',
            'template' => 'page-services.php',
            'is_front' => false,
            'content'  => '<h2>Academics & Facilities</h2><p>Developmentally sequenced learning paths from formative preschool through secondary board examinations.</p>',
        ),
        array(
            'title'    => 'Admissions & Contact',
            'slug'     => 'contact',
            'template' => 'page-contact.php',
            'is_front' => false,
            'content'  => '<h2>Contact & Admissions Inquiry</h2><p>Campus: Model Town, Khojak Rd, Quetta. Phone: ${SCHOOL_INFO.phone}.</p>',
        ),
    );

    $front_page_id = 0;

    foreach ($pages_to_create as $p) {
        $existing = get_page_by_path($p['slug']);
        if (!$existing) {
            $existing = get_page_by_title($p['title']);
        }

        if (!$existing) {
            $page_id = wp_insert_post(array(
                'post_title'     => $p['title'],
                'post_name'      => $p['slug'],
                'post_content'   => $p['content'],
                'post_status'    => 'publish',
                'post_type'      => 'page',
                'comment_status' => 'closed',
            ));

            if ($page_id && !is_wp_error($page_id)) {
                if (!empty($p['template'])) {
                    update_post_meta($page_id, '_wp_page_template', $p['template']);
                }
                if ($p['is_front']) {
                    $front_page_id = $page_id;
                }
            }
        } else {
            if ($p['is_front']) {
                $front_page_id = $existing->ID;
            }
        }
    }

    if ($front_page_id) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $front_page_id);
    }
}
add_action('after_switch_theme', 'wiseup_auto_create_pages');

// Also check and create automatically whenever admin visits the admin area!
function wiseup_admin_check_pages() {
    if (current_user_can('manage_options')) {
        $home = get_page_by_path('home') ?: get_page_by_title('Home');
        $about = get_page_by_path('about') ?: get_page_by_title('About Us');
        $services = get_page_by_path('services') ?: get_page_by_title('Academics & Services');
        $contact = get_page_by_path('contact') ?: get_page_by_title('Admissions & Contact');

        if (!$home || !$about || !$services || !$contact) {
            wiseup_auto_create_pages();
        }
    }
}
add_action('admin_init', 'wiseup_admin_check_pages');

// Admin Notice with 1-Click Page Generator Button
function wiseup_admin_notice() {
    $home = get_page_by_path('home') ?: get_page_by_title('Home');
    $about = get_page_by_path('about') ?: get_page_by_title('About Us');
    $services = get_page_by_path('services') ?: get_page_by_title('Academics & Services');
    $contact = get_page_by_path('contact') ?: get_page_by_title('Admissions & Contact');

    $gen_url = wp_nonce_url(admin_url('admin-post.php?action=wiseup_force_create_pages'), 'wiseup_force_pages_nonce');

    if (!$home || !$about || !$services || !$contact || isset($_GET['wiseup_created'])) {
        echo '<div class="notice notice-info is-dismissible" style="border-left: 4px solid #D4A017; padding: 14px 18px; margin: 15px 0;">';
        echo '<div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">';
        echo '<div>';
        echo '<h3 style="margin:0 0 4px 0; color:#102A43; font-family:Georgia, serif; font-size:16px;">Wise Up School Theme — One-Click Page Setup</h3>';
        echo '<p style="margin:0; font-size:13px; color:#334E68;">Click below to immediately generate and publish all 4 school pages (Home, About Us, Academics, Contact) with full Elementor editing support.</p>';
        echo '</div>';
        echo '<a href="' . esc_url($gen_url) . '" class="button button-primary" style="background:#D4A017; border-color:#B3830E; color:#102A43; font-weight:bold; font-size:13px; padding:6px 16px; height:auto; text-decoration:none; box-shadow:0 2px 5px rgba(0,0,0,0.15);">⚡ Generate All 4 School Pages Now</a>';
        echo '</div>';
        if (isset($_GET['wiseup_created'])) {
            echo '<p style="margin-top:10px; margin-bottom:0; color:#1F7A4D; font-weight:bold; font-size:13px;">✔ Success! All school pages (Home, About Us, Academics & Services, Admissions & Contact) have been created and published!</p>';
        }
        echo '</div>';
    }
}
add_action('admin_notices', 'wiseup_admin_notice');

function wiseup_force_create_pages_handler() {
    check_admin_referer('wiseup_force_pages_nonce');
    wiseup_auto_create_pages();
    wp_redirect(admin_url('edit.php?post_type=page&wiseup_created=1'));
    exit;
}
add_action('admin_post_wiseup_force_create_pages', 'wiseup_force_create_pages_handler');

// Fallback dynamic view router (e.g. ?view=about, ?view=services, ?view=contact)
function wiseup_template_redirect($template) {
    if (isset($_GET['view'])) {
        $view = sanitize_key($_GET['view']);
        if ($view === 'about') {
            $new_template = locate_template(array('page-about.php'));
            if ($new_template) return $new_template;
        } elseif ($view === 'services' || $view === 'academics') {
            $new_template = locate_template(array('page-services.php', 'page-academics.php'));
            if ($new_template) return $new_template;
        } elseif ($view === 'contact' || $view === 'admissions') {
            $new_template = locate_template(array('page-contact.php'));
            if ($new_template) return $new_template;
        }
    }
    return $template;
}
add_filter('template_include', 'wiseup_template_redirect');

// Helper to get reliable URL for pages
function wiseup_get_url($slug) {
    $page = get_page_by_path($slug);
    if ($page) {
        return get_permalink($page->ID);
    }
    return home_url('/?view=' . $slug);
}

function wiseup_enqueue_scripts() {
    wp_enqueue_style(
        'wiseup-fonts',
        'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Noto+Nastaliq+Urdu:wght@500;700&display=swap',
        array(),
        null
    );

    wp_enqueue_style('wiseup-style', get_stylesheet_uri(), array('wiseup-fonts'), '2.0.0');

    wp_enqueue_script(
        'wiseup-main-script',
        get_template_directory_uri() . '/js/main.js',
        array('jquery'),
        '2.0.0',
        true
    );

    wp_localize_script('wiseup-main-script', 'wiseupConfig', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'school_phone' => '${SCHOOL_INFO.phone}',
        'nonce' => wp_create_nonce('wiseup_inquiry_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'wiseup_enqueue_scripts');

// AJAX form inquiry handler
function wiseup_handle_inquiry() {
    check_ajax_referer('wiseup_inquiry_nonce', 'nonce');

    $student = sanitize_text_field($_POST['student_name'] ?? '');
    $parent  = sanitize_text_field($_POST['parent_name'] ?? '');
    $phone   = sanitize_text_field($_POST['phone'] ?? '');
    $grade   = sanitize_text_field($_POST['grade_level'] ?? '');
    $message = sanitize_textarea_field($_POST['message'] ?? '');

    $ref_id = 'WUIS-ADM-' . wp_rand(100000, 999999);

    $to = get_option('admin_email');
    $subject = "New Admissions Inquiry from $parent for $student";
    $body = "Reference: $ref_id\\n\\nStudent: $student\\nParent: $parent\\nPhone: $phone\\nGrade: $grade\\nMessage: $message";
    @wp_mail($to, $subject, $body);

    wp_send_json_success(array(
        'reference' => $ref_id,
        'student' => $student,
        'parent' => $parent,
        'phone' => $phone,
        'grade' => $grade
    ));
}
add_action('wp_ajax_wiseup_inquiry', 'wiseup_handle_inquiry');
add_action('wp_ajax_nopriv_wiseup_inquiry', 'wiseup_handle_inquiry');
`;
  themeFolder.file('functions.php', functionsPhp);

  // ==========================================
  // 3. header.php
  // ==========================================
  const headerPhp = `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Top Contact Bar -->
<div class="wuis-topbar">
    <div class="wuis-container wuis-topbar-inner">
        <div>
            <span>📍 ${SCHOOL_INFO.address}</span>
            <span style="opacity: 0.4; margin: 0 8px;">|</span>
            <span>Office: Mon–Sat 8:00 AM – 3:30 PM</span>
        </div>
        <div>
            <span>Direct Admissions Line: </span>
            <a href="tel:${SCHOOL_INFO.phoneClean}">${SCHOOL_INFO.phone}</a>
        </div>
    </div>
</div>

<!-- Main Sticky Header -->
<header class="wuis-header">
    <div class="wuis-container wuis-header-inner">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="wuis-brand">
            <div class="wuis-logo-crest">WUIS</div>
            <div>
                <div class="wuis-brand-title">Wise Up International</div>
                <div class="wuis-brand-sub">
                    <span>High School · Model Town Quetta</span>
                    <span style="opacity:0.4; margin:0 4px;">·</span>
                    <span class="wuis-urdu urdu" dir="rtl">${SCHOOL_INFO.urduName}</span>
                </div>
            </div>
        </a>

        <!-- Desktop Navigation -->
        <nav>
            <ul class="wuis-nav">
                <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
                <li><a href="<?php echo esc_url(wiseup_get_url('about')); ?>">About Us</a></li>
                <li><a href="<?php echo esc_url(wiseup_get_url('services')); ?>">Academics & Services</a></li>
                <li><a href="<?php echo esc_url(wiseup_get_url('contact')); ?>">Admissions & Contact</a></li>
            </ul>
        </nav>

        <div class="wuis-header-actions">
            <button type="button" class="wuis-btn-apply" onclick="openWiseUpModal('apply')">
                Apply Now
            </button>
            <button type="button" class="wuis-menu-toggle" onclick="toggleWiseUpMobileMenu()">
                ☰
            </button>
        </div>
    </div>

    <!-- Mobile Drawer -->
    <div id="wuisMobileDrawer" class="wuis-mobile-drawer">
        <a href="<?php echo esc_url(home_url('/')); ?>">Home Page</a>
        <a href="<?php echo esc_url(wiseup_get_url('about')); ?>">About Us & Heritage</a>
        <a href="<?php echo esc_url(wiseup_get_url('services')); ?>">Academics & Services</a>
        <a href="<?php echo esc_url(wiseup_get_url('contact')); ?>">Admissions & Contact</a>
        <div style="padding-top:10px;">
            <button type="button" class="wuis-btn-apply" style="width:100%; text-align:center; justify-content:center;" onclick="openWiseUpModal('apply')">
                Apply for Admission
            </button>
        </div>
    </div>
</header>
`;
  themeFolder.file('header.php', headerPhp);

  // ==========================================
  // 4. footer.php
  // ==========================================
  const footerPhp = `<!-- Comprehensive Academic Footer -->
<footer class="wuis-footer">
    <div class="wuis-container">
        <div class="wuis-footer-grid">
            <div>
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:15px;">
                    <div style="width:36px; height:36px; background:#D4A017; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#102A43; font-weight:800; font-family:'Cinzel', serif;">W</div>
                    <div>
                        <div style="font-family:'Cinzel', serif; font-size:16px; font-weight:700; color:#fff;">Wise Up International</div>
                        <div style="font-size:11px; color:#D4A017; font-weight:600;">High School · Quetta</div>
                    </div>
                </div>
                <p class="wuis-urdu" dir="rtl" style="color:#FFE399; font-size:14px; margin-bottom:12px;">
                    ${SCHOOL_INFO.urduName} ماڈل ٹاؤن، کوئٹہ — جدید بین الاقوامی تعلیمی معیارات اور اسلامی اقدار کا حسین سنگم۔
                </p>
                <p style="font-size:12px; color:#9FB3C8; line-height:1.7;">
                    Empowering students in Quetta with rigorous academic foundations, dual-language fluency, and moral leadership from Early Years to BISE Matriculation.
                </p>
            </div>

            <div>
                <h4>Campus & Contact</h4>
                <p>📍 ${SCHOOL_INFO.address}</p>
                <p style="margin-top:8px;">📞 Helpline: <a href="tel:${SCHOOL_INFO.phoneClean}" style="color:#fff; font-weight:700;">${SCHOOL_INFO.phone}</a></p>
                <p style="margin-top:8px;">✉ Email: <a href="mailto:${SCHOOL_INFO.email}">${SCHOOL_INFO.email}</a></p>
                <p style="margin-top:8px; font-size:12px; color:#9FB3C8;">Office Hours: ${SCHOOL_INFO.hours}</p>
            </div>

            <div>
                <h4>Academic Divisions</h4>
                <p>• Early Childhood & Montessori (Playgroup–KG)</p>
                <p>• Primary School (Grades 1 to 5)</p>
                <p>• Middle School (Grades 6 to 8)</p>
                <p>• High School (Grades 9 & 10 BISE Science)</p>
            </div>

            <div>
                <h4>Official Social Community</h4>
                <p style="margin-bottom:10px;">Connect with our active school community on Facebook:</p>
                <a href="${SCHOOL_INFO.facebookUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--wuis-gold); font-weight:700; display:inline-flex; align-items:center; gap:6px;">
                    <span>${SCHOOL_INFO.facebookDisplayName} →</span>
                </a>
            </div>
        </div>

        <div style="text-align:center; font-size:12px; color:#627D98; border-top:1px solid rgba(255,255,255,0.08); padding-top:25px;">
            © <?php echo date('Y'); ?> ${SCHOOL_INFO.name} (${SCHOOL_INFO.urduName}). All rights reserved.
        </div>
    </div>
</footer>

<!-- Global Interactive Admissions / Tour Modal -->
<div id="wuisGlobalModal" class="wuis-modal-backdrop">
    <div class="wuis-modal-content">
        <div class="wuis-modal-header">
            <button type="button" class="wuis-modal-close" onclick="closeWiseUpModal()">✕</button>
            <div style="font-size:11px; text-transform:uppercase; color:var(--wuis-gold); font-weight:700; letter-spacing:1px;">
                Wise Up International High School
            </div>
            <h3 id="wuisModalTitle" class="wuis-cinzel" style="font-size:20px; font-weight:700; margin-top:4px;">
                Admissions Application 2026-2027
            </h3>
        </div>
        <div class="wuis-modal-body">
            <form id="wuisModalForm" onsubmit="handleWuisModalSubmit(event)">
                <div class="wuis-form-group">
                    <label>Student Full Name *</label>
                    <input type="text" required id="modalStudentName" placeholder="e.g. Daniyal Khan">
                </div>
                <div class="wuis-form-group">
                    <label>Parent / Guardian Name *</label>
                    <input type="text" required id="modalParentName" placeholder="e.g. Asadullah Khan">
                </div>
                <div class="wuis-form-group">
                    <label>Phone / WhatsApp Number *</label>
                    <input type="tel" required id="modalPhone" placeholder="0300 1234567">
                </div>
                <div class="wuis-form-group">
                    <label>Desired Grade Level *</label>
                    <select id="modalGrade">
                        <option>Early Childhood: Playgroup / Kindergarten</option>
                        <option>Primary: Grade 1 through Grade 5</option>
                        <option>Middle School: Grade 6 through Grade 8</option>
                        <option>High School: Grade 9 (Matric Science / O-Level)</option>
                        <option>High School: Grade 10 (Matric Science / O-Level)</option>
                    </select>
                </div>
                <div class="wuis-form-group">
                    <label>Questions / Notes</label>
                    <textarea rows="2" id="modalNotes" placeholder="Inquiry about school transport, fee schedule, or campus tour..."></textarea>
                </div>
                <button type="submit" class="wuis-btn-apply" style="width:100%; justify-content:center; padding:12px;">
                    Submit Application
                </button>
            </form>

            <div id="wuisModalSuccess" style="display:none; text-align:center; padding:20px 10px;">
                <div style="font-size:42px; color:var(--wuis-green); margin-bottom:8px;">✓</div>
                <h4 class="wuis-cinzel" style="color:var(--wuis-navy); font-size:20px; font-weight:700;">Inquiry Submitted!</h4>
                <p style="font-size:13px; color:#486581; margin:8px 0 16px;">
                    Thank you. Our admissions secretariat will contact you at your phone within 24 working hours.
                </p>
                <div style="background:#F7F7F5; padding:12px; border-radius:8px; font-size:12px; color:#102A43; text-align:left;">
                    <div>Reference Code: <strong id="modalRefCode" style="color:var(--wuis-navy);">WUIS-ADM-918231</strong></div>
                    <div>Campus: Model Town, Khojak Rd, Quetta</div>
                    <div>Helpline: <strong>${SCHOOL_INFO.phone}</strong></div>
                </div>
                <button type="button" class="wuis-btn-apply" style="margin-top:15px; width:100%; justify-content:center;" onclick="closeWiseUpModal()">
                    Done
                </button>
            </div>
        </div>
    </div>
</div>

<!-- Mobile Floating Phone Button -->
<a href="tel:${SCHOOL_INFO.phoneClean}" class="wuis-floating-call" title="Call Admissions">
    📞
</a>

<?php wp_footer(); ?>
</body>
</html>
`;
  themeFolder.file('footer.php', footerPhp);

  // ==========================================
  // 5. front-page.php (100% complete Home Page + Elementor builder support)
  // ==========================================
  const frontPagePhp = `<?php
/**
 * Template Name: School Home Page
 */
get_header();

// Elementor Compatibility & Builder Detection
$is_elementor = false;
if (class_exists('\\Elementor\\Plugin')) {
    $doc = \\Elementor\\Plugin::$instance->documents->get(get_the_ID());
    if ($doc && $doc->is_built_with_elementor()) {
        $is_elementor = true;
    }
}
if (!$is_elementor && get_post_meta(get_the_ID(), '_elementor_edit_mode', true) === 'builder') {
    $is_elementor = true;
}

if ($is_elementor) {
    echo '<main class="wuis-elementor-content" style="width:100%; min-height:60vh;">';
    while (have_posts()) : the_post();
        the_content();
    endwhile;
    echo '</main>';
} else {
    if (have_posts()) {
        while (have_posts()) {
            the_post();
            echo '<div style="display:none;" class="wuis-elementor-scanner">';
            the_content();
            echo '</div>';
        }
    }
?>

<!-- 1. Hero Section -->
<section class="wuis-hero">
    <div class="wuis-container wuis-hero-grid">
        <div>
            <div class="wuis-hero-kicker">MODEL TOWN, QUETTA · SESSION 2026-2027</div>
            <h1 class="wuis-hero-title">Where Excellence <br><span>Meets Opportunity</span></h1>
            <div class="wuis-urdu wuis-hero-urdu" dir="rtl">${SCHOOL_INFO.urduTagline}۔ جدید نصاب، تجربہ کار اساتذہ اور شاندار اخلاقی تربیت۔</div>
            <p class="wuis-hero-desc">
                Wise Up International High School provides children in Quetta with premier bilingual international education, experienced faculty, and modern facilities from Montessori Early Years through BISE Matriculation.
            </p>
            <div class="wuis-btn-row">
                <button type="button" class="wuis-btn-apply" onclick="openWiseUpModal('apply')">Apply for Admission 2026-27</button>
                <button type="button" class="wuis-btn-outline" onclick="openWiseUpModal('tour')">Schedule a Visit</button>
            </div>
            <div class="wuis-stats-row">
                <div>
                    <div class="wuis-stat-val">1:15</div>
                    <div class="wuis-stat-lbl">Student-Teacher Ratio</div>
                </div>
                <div>
                    <div class="wuis-stat-val">100%</div>
                    <div class="wuis-stat-lbl">Board Pass Rate</div>
                </div>
                <div>
                    <div class="wuis-stat-val">Dual</div>
                    <div class="wuis-stat-lbl">English & Urdu Fluency</div>
                </div>
                <div>
                    <div class="wuis-stat-val">Safe</div>
                    <div class="wuis-stat-lbl">Monitored Campus</div>
                </div>
            </div>
        </div>

        <div>
            <div class="wuis-hero-card">
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:15px; margin-bottom:15px;">
                    <h3 class="wuis-cinzel" style="color:#fff; font-size:18px;">Admissions 2026-27</h3>
                    <span style="background:var(--wuis-green); color:#fff; font-size:11px; padding:3px 8px; border-radius:4px; font-weight:700;">OPEN NOW</span>
                </div>
                <p style="font-size:13px; color:#CBD5E1; margin-bottom:15px;">
                    Registrations now underway for Playgroup through Grade 9. Science stream seats are strictly limited.
                </p>
                <div style="font-size:13px; color:#E2E8F0; line-height:2.2;">
                    <div>✔ <strong>Early Years:</strong> Playgroup, Nursery, KG</div>
                    <div>✔ <strong>Primary School:</strong> Grades 1 to 5</div>
                    <div>✔ <strong>Middle School:</strong> Grades 6 to 8</div>
                    <div>✔ <strong>High School:</strong> Grades 9 & 10 Matric Science</div>
                </div>
                <div style="margin-top:25px; padding-top:15px; border-top:1px solid rgba(255,255,255,0.1); font-size:12px; color:#9FB3C8;">
                    Helpline: <strong style="color:var(--wuis-gold);">${SCHOOL_INFO.phone}</strong><br>
                    Location: Khojak Rd, Model Town, Quetta
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 2. Quick Links Row -->
<div class="wuis-container">
    <div class="wuis-quicklinks-row">
        <div class="wuis-quicklink-card">
            <div>
                <span style="font-size:24px;">🎓</span>
                <h3 class="wuis-cinzel" style="font-size:17px; margin:8px 0 6px;">Admissions 2026-27</h3>
                <p style="font-size:12.5px; color:#486581; line-height:1.5;">Review criteria, tuition concessions, and initiate online enrollment.</p>
            </div>
            <div style="margin-top:15px; padding-top:10px; border-top:1px solid #EDF2F7;">
                <button type="button" style="background:none; border:none; color:var(--wuis-navy); font-weight:700; font-size:13px; cursor:pointer;" onclick="openWiseUpModal('apply')">Apply Online →</button>
            </div>
        </div>

        <div class="wuis-quicklink-card" style="border-top-color:var(--wuis-navy);">
            <div>
                <span style="font-size:24px;">📖</span>
                <h3 class="wuis-cinzel" style="font-size:17px; margin:8px 0 6px;">Academic Programs</h3>
                <p style="font-size:12.5px; color:#486581; line-height:1.5;">Explore our Early Years, Primary, Middle, and High School tracks.</p>
            </div>
            <div style="margin-top:15px; padding-top:10px; border-top:1px solid #EDF2F7;">
                <a href="<?php echo esc_url(wiseup_get_url('services')); ?>" style="color:var(--wuis-navy); font-weight:700; font-size:13px; text-decoration:none;">View Curriculum →</a>
            </div>
        </div>

        <div class="wuis-quicklink-card" style="border-top-color:var(--wuis-green);">
            <div>
                <span style="font-size:24px;">📍</span>
                <h3 class="wuis-cinzel" style="font-size:17px; margin:8px 0 6px;">Campus & Contact</h3>
                <p style="font-size:12.5px; color:#486581; line-height:1.5;">Get directions to Model Town Khojak Rd, office hours, and phones.</p>
            </div>
            <div style="margin-top:15px; padding-top:10px; border-top:1px solid #EDF2F7;">
                <a href="<?php echo esc_url(wiseup_get_url('contact')); ?>" style="color:var(--wuis-navy); font-weight:700; font-size:13px; text-decoration:none;">Find Our Campus →</a>
            </div>
        </div>

        <div class="wuis-quicklink-card" style="border-top-color:#1877F2;">
            <div>
                <span style="font-size:24px;">🌐</span>
                <h3 class="wuis-cinzel" style="font-size:17px; margin:8px 0 6px;">Official Facebook</h3>
                <p style="font-size:12.5px; color:#486581; line-height:1.5;">Follow photo galleries, sports events, and community updates.</p>
            </div>
            <div style="margin-top:15px; padding-top:10px; border-top:1px solid #EDF2F7;">
                <a href="${SCHOOL_INFO.facebookUrl}" target="_blank" rel="noopener noreferrer" style="color:#1877F2; font-weight:700; font-size:13px; text-decoration:none;">Visit Facebook Page →</a>
            </div>
        </div>
    </div>
</div>

<!-- 3. Why Choose Us -->
<section class="wuis-section">
    <div class="wuis-container">
        <div class="wuis-sec-header">
            <span class="wuis-sec-kicker">INSTITUTIONAL EXCELLENCE</span>
            <h2 class="wuis-sec-title">Why Choose Wise Up International</h2>
            <p class="wuis-urdu" dir="rtl" style="font-size:16px; color:#8C5E08; margin-top:8px;">ہم صرف امتحان کی تیاری نہیں کرواتے بلکہ کردار سازی، خود اعتمادی اور روشن مستقبل کی ٹھوس بنیاد رکھتے ہیں۔</p>
            <p class="wuis-sec-desc">Combining global scholastic benchmarks with cultural grounding and character building.</p>
        </div>

        <div class="wuis-grid-4">
            <div class="wuis-card">
                <div style="font-size:11px; font-weight:700; color:var(--wuis-gold); margin-bottom:6px;">12+ YEARS EXPERIENCE</div>
                <h3>Experienced Faculty</h3>
                <p>Subject matter specialists with advanced training in bilingual pedagogy, continuous workshops, and child psychology.</p>
                <div style="margin-top:12px; font-size:12px; color:var(--wuis-green); line-height:1.8;">
                    ✔ Dedicated science faculty<br>✔ Certified Montessori educators
                </div>
            </div>
            <div class="wuis-card">
                <div style="font-size:11px; font-weight:700; color:var(--wuis-gold); margin-bottom:6px;">STEM & BOARD INTEGRATED</div>
                <h3>Modern Curriculum</h3>
                <p>Synthesizing Cambridge inquiry learning with Balochistan Board matriculation rigors for high exam distinctions.</p>
                <div style="margin-top:12px; font-size:12px; color:var(--wuis-green); line-height:1.8;">
                    ✔ Activity-driven science labs<br>✔ ICT programming & logic
                </div>
            </div>
            <div class="wuis-card">
                <div style="font-size:11px; font-weight:700; color:var(--wuis-gold); margin-bottom:6px;">24/7 MONITORED</div>
                <h3>Safe Campus Environment</h3>
                <p>CCTV-monitored boundary walls, GPS transport vans, first-aid center, and dedicated female attendants for junior grades.</p>
                <div style="margin-top:12px; font-size:12px; color:var(--wuis-green); line-height:1.8;">
                    ✔ Female caretakers for nursery<br>✔ Monitored secure perimeter
                </div>
            </div>
            <div class="wuis-card">
                <div style="font-size:11px; font-weight:700; color:var(--wuis-gold); margin-bottom:6px;">ENGLISH & URDU FLUENCY</div>
                <h3>Bilingual Mastery</h3>
                <p>Eloquent English spoken discourse paired with classical Urdu literary appreciation and moral character education.</p>
                <div style="margin-top:12px; font-size:12px; color:var(--wuis-green); line-height:1.8;">
                    ✔ Declamation & debating clubs<br>✔ Quranic ethics & calligraphy
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 4. Academic Programs Showcase -->
<section class="wuis-section" style="background:#fff; border-top:1px solid #E2E8F0; border-bottom:1px solid #E2E8F0;">
    <div class="wuis-container">
        <div class="wuis-sec-header">
            <span class="wuis-sec-kicker">CURRICULUM TRACKS</span>
            <h2 class="wuis-sec-title">Academic Programs (K–10)</h2>
            <p class="wuis-sec-desc">Developmentally sequenced learning paths from formative preschool through secondary board examinations.</p>
        </div>

        <div class="wuis-grid-4">
            ${ACADEMIC_PROGRAMS.map(prog => `
            <div class="wuis-program-card">
                <img src="${prog.image}" alt="${prog.title}" class="wuis-program-img" loading="lazy">
                <div class="wuis-program-body">
                    <div>
                        <div style="font-size:11px; font-weight:700; color:var(--wuis-gold); text-transform:uppercase;">${prog.grades}</div>
                        <h3 class="wuis-cinzel" style="font-size:16px; margin:6px 0;">${prog.title}</h3>
                        <p style="font-size:12px; color:#486581; line-height:1.6; margin-bottom:12px;">${prog.summary}</p>
                    </div>
                    <div style="padding-top:10px; border-top:1px solid #EDF2F7;">
                        <a href="<?php echo esc_url(wiseup_get_url('services')); ?>" style="color:var(--wuis-navy); font-weight:700; font-size:13px; text-decoration:none;">Program Details →</a>
                    </div>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
</section>

<!-- 5. Parent & Community Trust Testimonials -->
<section class="wuis-section">
    <div class="wuis-container">
        <div class="wuis-sec-header">
            <span class="wuis-sec-kicker">COMMUNITY TRUST</span>
            <h2 class="wuis-sec-title">Trusted by Quetta Families</h2>
            <p class="wuis-sec-desc">Hear what parents and educators in Model Town say about Wise Up International.</p>
        </div>

        <div class="wuis-grid-3">
            <div class="wuis-card">
                <div style="color:var(--wuis-gold); font-size:16px; margin-bottom:10px;">★★★★★</div>
                <p style="font-style:italic; font-size:13.5px; color:#334E68; margin-bottom:15px; line-height:1.7;">
                    "The bilingual fluency my daughter developed in the primary years is remarkable. She speaks English with confidence while keeping her love for Urdu literature and ethics intact."
                </p>
                <div style="border-top:1px solid #EDF2F7; padding-top:12px; font-size:12px;">
                    <strong style="color:var(--wuis-navy); display:block;">Dr. Farooq Ahmed</strong>
                    <span style="color:#627D98;">Parent of Grade 5 Student · Model Town</span>
                </div>
            </div>

            <div class="wuis-card">
                <div style="color:var(--wuis-gold); font-size:16px; margin-bottom:10px;">★★★★★</div>
                <p style="font-style:italic; font-size:13.5px; color:#334E68; margin-bottom:15px; line-height:1.7;">
                    "Their science laboratories and dedicated matriculation board clinics made all the difference. My son secured an A-1 grade in BISE Balochistan exams and got into top pre-medical college."
                </p>
                <div style="border-top:1px solid #EDF2F7; padding-top:12px; font-size:12px;">
                    <strong style="color:var(--wuis-navy); display:block;">Mrs. Saima Kakar</strong>
                    <span style="color:#627D98;">Parent of Matric Graduate · Khojak Rd</span>
                </div>
            </div>

            <div class="wuis-card">
                <div style="color:var(--wuis-gold); font-size:16px; margin-bottom:10px;">★★★★★</div>
                <p style="font-style:italic; font-size:13.5px; color:#334E68; margin-bottom:15px; line-height:1.7;">
                    "As working parents, campus safety and reliable transport were our primary concerns. Wise Up’s GPS-monitored vans and female caretakers gave us complete peace of mind."
                </p>
                <div style="border-top:1px solid #EDF2F7; padding-top:12px; font-size:12px;">
                    <strong style="color:var(--wuis-navy); display:block;">Engr. Muhammad Noman</strong>
                    <span style="color:#627D98;">Parent of Kindergarten & Grade 3 Students</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 6. Latest News & Announcements -->
<section class="wuis-section" style="background:#fff; border-top:1px solid #E2E8F0; border-bottom:1px solid #E2E8F0;">
    <div class="wuis-container">
        <div class="wuis-sec-header">
            <span class="wuis-sec-kicker">CAMPUS BULLETINS</span>
            <h2 class="wuis-sec-title">Latest News & Announcements</h2>
        </div>

        <div class="wuis-grid-3">
            ${NEWS_ANNOUNCEMENTS.map(news => `
            <div class="wuis-card" style="background:#F7F7F5;">
                <div style="font-size:11px; color:#627D98; margin-bottom:8px;">
                    <strong>${news.category}</strong> · ${news.date}
                </div>
                <h3 class="wuis-cinzel" style="font-size:17px; margin-bottom:8px;">${news.title}</h3>
                <p style="font-size:13px; color:#486581; line-height:1.6; margin-bottom:12px;">${news.excerpt}</p>
                <div style="border-top:1px solid #E2E8F0; padding-top:10px;">
                    <button type="button" style="background:none; border:none; color:var(--wuis-navy); font-weight:700; font-size:12px; cursor:pointer;" onclick="openWiseUpModal('apply')">Admissions Notice →</button>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
</section>

<!-- 7. Interactive Admissions Form -->
<section id="admissions-section" class="wuis-section">
    <div class="wuis-container" style="max-width:800px;">
        <div class="wuis-sec-header">
            <span class="wuis-sec-kicker">ENROLLMENT INQUIRY</span>
            <h2 class="wuis-sec-title">Admissions Application 2026-2027</h2>
            <p class="wuis-sec-desc">Submit your inquiry to receive prospectus, assessment dates, and fee schedules.</p>
        </div>

        <div class="wuis-form-box">
            <form id="wiseupAdmissionsForm">
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
                    <div class="wuis-form-group">
                        <label>Student Full Name *</label>
                        <input type="text" name="student_name" required placeholder="e.g. Daniyal Khan">
                    </div>
                    <div class="wuis-form-group">
                        <label>Parent / Guardian Name *</label>
                        <input type="text" name="parent_name" required placeholder="e.g. Asadullah Khan">
                    </div>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
                    <div class="wuis-form-group">
                        <label>Phone / WhatsApp Number *</label>
                        <input type="tel" name="phone" required placeholder="0300 1234567">
                    </div>
                    <div class="wuis-form-group">
                        <label>Desired Grade Level *</label>
                        <select name="grade_level">
                            <option>Early Childhood: Playgroup / Kindergarten</option>
                            <option>Primary: Grade 1 through Grade 5</option>
                            <option>Middle School: Grade 6 through Grade 8</option>
                            <option>High School: Grade 9 (Matric Science / O-Level)</option>
                            <option>High School: Grade 10 (Matric Science / O-Level)</option>
                        </select>
                    </div>
                </div>

                <div class="wuis-form-group">
                    <label>Questions / Notes (Optional)</label>
                    <textarea name="message" rows="3" placeholder="Inquire about school bus routes from Zarghoon Road, tuition, or campus visit..."></textarea>
                </div>

                <button type="submit" class="wuis-btn-apply" style="width:100%; font-size:16px; padding:14px; justify-content:center;">Submit Admissions Inquiry</button>
            </form>

            <div id="wiseupSuccessBox" style="display:none; text-align:center; padding:30px 10px;">
                <div style="font-size:48px; color:var(--wuis-green); margin-bottom:10px;">✓</div>
                <h3 class="wuis-cinzel" style="color:var(--wuis-navy); font-size:24px;">Inquiry Received!</h3>
                <p style="font-size:14px; color:#486581; margin:10px 0 20px;">
                    Thank you. Our admissions secretariat will contact you within 24 working hours.
                </p>
                <div style="background:#F7F7F5; padding:15px; border-radius:8px; font-size:13px; color:#102A43; text-align:left;">
                    <div>Tracking Reference: <strong id="wiseupRefCode" style="color:var(--wuis-navy);">WUIS-ADM-LIVE</strong></div>
                    <div>Helpline: <strong>${SCHOOL_INFO.phone}</strong></div>
                    <div>Campus: Model Town, Khojak Rd, Quetta</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 8. CTA Banner -->
<section style="background:var(--wuis-navy); color:#fff; padding:60px 0; border-top:4px solid var(--wuis-gold); text-align:center;">
    <div class="wuis-container">
        <h2 class="wuis-cinzel" style="font-size:32px; font-weight:700; color:#fff; margin-bottom:12px;">Give Your Child a Brighter Future</h2>
        <div class="wuis-urdu" dir="rtl" style="font-size:18px; color:#FFE399; margin-bottom:18px;">${SCHOOL_INFO.urduName} ماڈل ٹاؤن کوئٹہ میں داخلے جاری ہیں۔</div>
        <p style="font-size:14px; color:#CBD5E1; max-width:600px; margin:0 auto 25px;">
            Visit our Model Town Khojak Rd campus today or call our admissions hotline to secure your child's seat.
        </p>
        <div style="display:flex; justify-content:center; gap:15px; flex-wrap:wrap;">
            <button type="button" class="wuis-btn-apply" onclick="openWiseUpModal('apply')">Apply Online</button>
            <a href="tel:${SCHOOL_INFO.phoneClean}" class="wuis-btn-outline">Call: ${SCHOOL_INFO.phone}</a>
        </div>
    </div>
</section>

<?php 
} // End Elementor fallback check
get_footer(); ?>
`;
  themeFolder.file('front-page.php', frontPagePhp);

  // ==========================================
  // 6. page-about.php (100% matched to AboutPage.tsx)
  // ==========================================
  const aboutPhp = `<?php
/**
 * Template Name: About Wise Up School
 */
get_header();

$is_elementor = false;
if (class_exists('\\Elementor\\Plugin')) {
    $doc = \\Elementor\\Plugin::$instance->documents->get(get_the_ID());
    if ($doc && $doc->is_built_with_elementor()) {
        $is_elementor = true;
    }
}
if (!$is_elementor && get_post_meta(get_the_ID(), '_elementor_edit_mode', true) === 'builder') {
    $is_elementor = true;
}

if ($is_elementor) {
    echo '<main class="wuis-elementor-content" style="width:100%; min-height:60vh;">';
    while (have_posts()) : the_post();
        the_content();
    endwhile;
    echo '</main>';
} else {
    if (have_posts()) {
        while (have_posts()) {
            the_post();
            echo '<div style="display:none;" class="wuis-elementor-scanner">';
            the_content();
            echo '</div>';
        }
    }
?>

<section class="wuis-hero" style="padding:60px 0;">
    <div class="wuis-container">
        <div class="wuis-hero-kicker">HERITAGE & PEDAGOGY · MODEL TOWN, QUETTA</div>
        <h1 class="wuis-hero-title">About Our Heritage & Vision</h1>
        <div class="wuis-urdu wuis-hero-urdu" dir="rtl">علم، کردار اور قیادت کا وہ معتبر سنگم جو ہر طالب علم کی صلاحیتوں کو نکھارے۔</div>
        <p class="wuis-hero-desc">Founded on the belief that children in Balochistan deserve access to world-class educational benchmarks without compromising their cultural identity and moral compass.</p>
    </div>
</section>

<!-- Heritage Section -->
<section class="wuis-section">
    <div class="wuis-container">
        <div class="wuis-grid-2" style="align-items:center;">
            <div>
                <span class="wuis-sec-kicker">FOUNDED IN MODEL TOWN, QUETTA</span>
                <h2 class="wuis-sec-title" style="font-size:28px;">Rooted in Quetta, Focused on Global Horizons</h2>
                <p style="font-size:14px; color:#486581; line-height:1.7; margin-top:15px;">
                    Wise Up International High School was established on Khojak Road, Model Town, Quetta to create an academic sanctum where disciplined scholarship, bilingual communication, and creative innovation converge.
                </p>
                <p style="font-size:14px; color:#486581; line-height:1.7; margin-top:12px;">
                    From its origins as an admired early years institution on Khojak Road, Wise Up has methodically grown into a comprehensive K-10 international high school registered with the Board of Intermediate and Secondary Education (BISE) Quetta.
                </p>
                <div style="margin-top:20px; font-size:13px; color:var(--wuis-navy); font-weight:600; line-height:2;">
                    <div>✔ Purpose-built campus in Model Town, Quetta</div>
                    <div>✔ Registered with BISE Balochistan Board</div>
                    <div>✔ Modern Science Laboratories and Computer ICT Suite</div>
                </div>
            </div>

            <div>
                <div class="wuis-card" style="background:#0D2338; color:#fff; border:1px solid rgba(255,255,255,0.15); box-shadow:0 15px 35px rgba(0,0,0,0.3);">
                    <div style="font-size:11px; text-transform:uppercase; color:var(--wuis-gold); font-weight:700;">INSTITUTIONAL CREST</div>
                    <h3 class="wuis-cinzel" style="color:#fff; font-size:22px; margin:8px 0 15px;">Wise Up International</h3>
                    <p class="wuis-urdu" dir="rtl" style="color:#FFE399; font-size:15px; margin-bottom:15px;">
                        ${SCHOOL_INFO.urduName} — کوئٹہ کے بچوں کے لیے عالمی معیار کی تعلیم اور روشن مستقبل۔
                    </p>
                    <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:15px; font-size:13px; color:#CBD5E1; line-height:2;">
                        <div>📍 Address: ${SCHOOL_INFO.address}</div>
                        <div>📞 Phone: <strong>${SCHOOL_INFO.phone}</strong></div>
                        <div>✉ Email: ${SCHOOL_INFO.email}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Mission & Vision -->
<section class="wuis-section" style="background:#fff; border-top:1px solid #E2E8F0; border-bottom:1px solid #E2E8F0;">
    <div class="wuis-container">
        <div class="wuis-grid-2">
            <div class="wuis-card" style="background:#F7F7F5;">
                <span class="wuis-sec-kicker">CORE PURPOSE</span>
                <h3 class="wuis-cinzel" style="font-size:22px; color:var(--wuis-navy); margin-bottom:12px;">Our Mission</h3>
                <p style="font-size:14px; color:#486581; line-height:1.7; margin-bottom:15px;">
                    To provide a transformative, inclusive, and academically demanding learning environment that equips students with fluent bilingual communication, robust scientific inquiry, and unyielding moral integrity.
                </p>
                <div class="wuis-urdu" dir="rtl" style="color:#8C5E08; font-size:14px; border-top:1px solid #E2E8F0; padding-top:12px;">
                    ہمارا مشن طلبہ کو ایسا مثالی تعلیمی اور اخلاقی ماحول فراہم کرنا ہے جو ان کی فکری اور اخلاقی صلاحیتوں کو نکھار کر ایک باکردار شہری بنائے۔
                </div>
            </div>

            <div class="wuis-card" style="background:#F7F7F5;">
                <span class="wuis-sec-kicker" style="color:var(--wuis-green);">LONG-TERM HORIZON</span>
                <h3 class="wuis-cinzel" style="font-size:22px; color:var(--wuis-navy); margin-bottom:12px;">Our Vision</h3>
                <p style="font-size:14px; color:#486581; line-height:1.7; margin-bottom:15px;">
                    To be recognized as Balochistan’s leading benchmark for premier bilingual education, celebrated for graduating visionary thinkers, compassionate citizens, and scientific innovators.
                </p>
                <div class="wuis-urdu" dir="rtl" style="color:#8C5E08; font-size:14px; border-top:1px solid #E2E8F0; padding-top:12px;">
                    ہم بلوچستان میں بین الاقوامی معیار کی تعلیم کا وہ معتبر ترین استعارہ بننا چاہتے ہیں جہاں ہر بچہ دنیا کے جدید علوم اور اقدار کا علمبردار بنے۔
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Principal & Leadership -->
<section class="wuis-section">
    <div class="wuis-container">
        <div class="wuis-card" style="padding:40px; border:2px solid var(--wuis-gold);">
            <div style="display:grid; grid-template-columns:1fr 2fr; gap:35px; align-items:center;">
                <div style="background:var(--wuis-navy); color:#fff; padding:30px; border-radius:10px; text-align:center;">
                    <div style="font-size:11px; text-transform:uppercase; color:var(--wuis-gold); font-weight:700; margin-bottom:6px;">PRINCIPAL & HEAD</div>
                    <h3 class="wuis-cinzel" style="color:#fff; font-size:20px;">${LEADERSHIP_INFO.principalName}</h3>
                    <p class="wuis-urdu" style="color:#FFE399; font-size:14px; margin-top:4px;">${LEADERSHIP_INFO.urduTitle}</p>
                    <p style="font-size:12px; color:#CBD5E1; margin-top:10px;">${LEADERSHIP_INFO.experience}</p>
                </div>
                <div>
                    <span class="wuis-sec-kicker">PRINCIPAL'S ADDRESS</span>
                    <h3 class="wuis-cinzel" style="font-size:22px; margin:6px 0 15px;">"Guiding Every Mind with Intellect and Conscience"</h3>
                    <blockquote style="font-style:italic; font-size:14px; color:#334E68; border-left:3px solid var(--wuis-gold); padding-left:15px; margin-bottom:15px; line-height:1.7;">
                        "${LEADERSHIP_INFO.message}"
                    </blockquote>
                    <button type="button" class="wuis-btn-apply" onclick="openWiseUpModal('tour')">Schedule Campus Tour</button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Accreditations Strip -->
<section class="wuis-section" style="background:#fff; border-top:1px solid #E2E8F0;">
    <div class="wuis-container">
        <div class="wuis-sec-header" style="margin-bottom:30px;">
            <span class="wuis-sec-kicker">OFFICIAL FRAMEWORKS</span>
            <h2 class="wuis-sec-title" style="font-size:24px;">Affiliations & Institutional Standards</h2>
        </div>
        <div class="wuis-grid-4">
            ${ACCREDITATIONS.map(acc => `
            <div class="wuis-card" style="text-align:center; padding:20px;">
                <div style="font-size:24px; color:var(--wuis-gold); margin-bottom:6px;">🏅</div>
                <div class="wuis-cinzel" style="font-size:14px; font-weight:700; color:var(--wuis-navy);">${acc.name}</div>
                <div style="font-size:11px; color:#627D98; margin-top:4px;">${acc.label}</div>
            </div>
            `).join('')}
        </div>
    </div>
</section>

<?php 
} // End Elementor fallback check
get_footer(); ?>
`;
  themeFolder.file('page-about.php', aboutPhp);

  // ==========================================
  // 7. page-services.php & page-academics.php
  // ==========================================
  const servicesPhp = `<?php
/**
 * Template Name: Academics & Services
 */
get_header();

$is_elementor = false;
if (class_exists('\\Elementor\\Plugin')) {
    $doc = \\Elementor\\Plugin::$instance->documents->get(get_the_ID());
    if ($doc && $doc->is_built_with_elementor()) {
        $is_elementor = true;
    }
}
if (!$is_elementor && get_post_meta(get_the_ID(), '_elementor_edit_mode', true) === 'builder') {
    $is_elementor = true;
}

if ($is_elementor) {
    echo '<main class="wuis-elementor-content" style="width:100%; min-height:60vh;">';
    while (have_posts()) : the_post();
        the_content();
    endwhile;
    echo '</main>';
} else {
    if (have_posts()) {
        while (have_posts()) {
            the_post();
            echo '<div style="display:none;" class="wuis-elementor-scanner">';
            the_content();
            echo '</div>';
        }
    }
?>

<section class="wuis-hero" style="padding:60px 0;">
    <div class="wuis-container">
        <div class="wuis-hero-kicker">CURRICULUM, FACILITIES & STUDENT WELFARE</div>
        <h1 class="wuis-hero-title">Academics & Comprehensive Services</h1>
        <div class="wuis-urdu wuis-hero-urdu" dir="rtl">ابتدائی بچپن کی تعلیم سے لے کر میٹرک سائنس اور کیمبرج او لیول کی تیاری تک کا جامع اور متوازن تعلیمی نظام۔</div>
    </div>
</section>

<!-- K-10 Detailed Programs -->
<section class="wuis-section">
    <div class="wuis-container">
        <div class="wuis-sec-header">
            <span class="wuis-sec-kicker">DETAILED CURRICULUM</span>
            <h2 class="wuis-sec-title">Academic Programs (K–10)</h2>
        </div>

        <div style="display:flex; flex-direction:column; gap:35px;">
            ${ACADEMIC_PROGRAMS.map(prog => `
            <div class="wuis-card" style="display:grid; grid-template-columns:1fr 1.6fr; gap:30px; align-items:center; padding:0; overflow:hidden;">
                <img src="${prog.image}" alt="${prog.title}" style="width:100%; height:100%; min-height:260px; object-fit:cover;">
                <div style="padding:30px;">
                    <div style="font-size:11px; font-weight:700; color:var(--wuis-gold); text-transform:uppercase;">${prog.grades} (${prog.ageGroup})</div>
                    <h3 class="wuis-cinzel" style="font-size:22px; margin:6px 0 2px;">${prog.title}</h3>
                    <p class="wuis-urdu" dir="rtl" style="color:#8C5E08; font-size:14px; margin-bottom:12px;">${prog.urduTitle}</p>
                    <p style="font-size:13.5px; color:#486581; line-height:1.7; margin-bottom:15px;">${prog.summary}</p>
                    <div style="background:#F7F7F5; padding:12px; border-radius:8px; font-size:12px; margin-bottom:15px;">
                        <strong>Framework: </strong>${prog.curriculumTrack}
                    </div>
                    <button type="button" class="wuis-btn-apply" onclick="openWiseUpModal('apply')">Apply for ${prog.title.split(' ')[0]}</button>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
</section>

<!-- Facilities -->
<section class="wuis-section" style="background:#fff; border-top:1px solid #E2E8F0; border-bottom:1px solid #E2E8F0;">
    <div class="wuis-container">
        <div class="wuis-sec-header">
            <span class="wuis-sec-kicker">CAMPUS INFRASTRUCTURE</span>
            <h2 class="wuis-sec-title">Purpose-Built Facilities</h2>
        </div>

        <div class="wuis-grid-2">
            ${FACILITIES.map(fac => `
            <div class="wuis-card" style="display:grid; grid-template-columns:1fr 1.3fr; gap:20px; padding:0; overflow:hidden;">
                <img src="${fac.image}" alt="${fac.name}" style="width:100%; height:100%; min-height:200px; object-fit:cover;">
                <div style="padding:20px;">
                    <h3 class="wuis-cinzel" style="font-size:16px; margin-bottom:6px;">${fac.name}</h3>
                    <p style="font-size:12.5px; color:#486581; line-height:1.6; margin-bottom:10px;">${fac.description}</p>
                    <div style="font-size:11.5px; color:var(--wuis-green); line-height:1.8;">
                        ${fac.features.map(f => `✔ ${f}`).join('<br>')}
                    </div>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
</section>

<!-- Support & Transportation -->
<section class="wuis-section">
    <div class="wuis-container">
        <div class="wuis-grid-2">
            <div class="wuis-card">
                <span class="wuis-sec-kicker">TRANSIT CORRIDORS</span>
                <h3 class="wuis-cinzel" style="font-size:20px; margin:6px 0 12px;">${TRANSPORT_AND_MEALS.transport.title}</h3>
                <p style="font-size:13.5px; color:#486581; line-height:1.6; margin-bottom:15px;">${TRANSPORT_AND_MEALS.transport.overview}</p>
                <div style="background:#F7F7F5; padding:15px; border-radius:8px; font-size:12.5px; line-height:1.8;">
                    <strong>Covered Quetta Sectors:</strong><br>
                    ${TRANSPORT_AND_MEALS.transport.routes.map(r => `• ${r}`).join('<br>')}
                </div>
            </div>

            <div class="wuis-card">
                <span class="wuis-sec-kicker">NUTRITION & HEALTH</span>
                <h3 class="wuis-cinzel" style="font-size:20px; margin:6px 0 12px;">${TRANSPORT_AND_MEALS.meals.title}</h3>
                <p style="font-size:13.5px; color:#486581; line-height:1.6; margin-bottom:15px;">${TRANSPORT_AND_MEALS.meals.overview}</p>
                <div style="background:#F7F7F5; padding:15px; border-radius:8px; font-size:12.5px; line-height:1.8;">
                    ${TRANSPORT_AND_MEALS.meals.guidelines.map(g => `✔ ${g}`).join('<br>')}
                </div>
            </div>
        </div>
    </div>
</section>

<?php 
} // End Elementor fallback check
get_footer(); ?>
`;
  themeFolder.file('page-services.php', servicesPhp);
  themeFolder.file('page-academics.php', servicesPhp);

  // ==========================================
  // 8. page-contact.php (100% matched to ContactPage.tsx)
  // ==========================================
  const contactPhp = `<?php
/**
 * Template Name: Admissions & Contact
 */
get_header();

$is_elementor = false;
if (class_exists('\\Elementor\\Plugin')) {
    $doc = \\Elementor\\Plugin::$instance->documents->get(get_the_ID());
    if ($doc && $doc->is_built_with_elementor()) {
        $is_elementor = true;
    }
}
if (!$is_elementor && get_post_meta(get_the_ID(), '_elementor_edit_mode', true) === 'builder') {
    $is_elementor = true;
}

if ($is_elementor) {
    echo '<main class="wuis-elementor-content" style="width:100%; min-height:60vh;">';
    while (have_posts()) : the_post();
        the_content();
    endwhile;
    echo '</main>';
} else {
    if (have_posts()) {
        while (have_posts()) {
            the_post();
            echo '<div style="display:none;" class="wuis-elementor-scanner">';
            the_content();
            echo '</div>';
        }
    }
?>

<section class="wuis-hero" style="padding:60px 0;">
    <div class="wuis-container">
        <div class="wuis-hero-kicker">CAMPUS LOCATION & ADMISSIONS SECRETARIAT</div>
        <h1 class="wuis-hero-title">Contact & Admissions Inquiry</h1>
        <div class="wuis-urdu wuis-hero-urdu" dir="rtl">داخلہ کے حوالے سے کسی بھی معلومات یا کیمپس کے دورے کے لیے ہم سے رابطہ کیجیے۔</div>
    </div>
</section>

<section class="wuis-section">
    <div class="wuis-container">
        <div class="wuis-grid-2" style="gap:40px;">
            <!-- Left Info Column -->
            <div>
                <!-- Phone Box -->
                <div class="wuis-card" style="background:var(--wuis-navy); color:#fff; border:none; border-top:4px solid var(--wuis-gold); margin-bottom:25px;">
                    <div style="font-size:11px; text-transform:uppercase; color:var(--wuis-gold); font-weight:700;">DIRECT ADMISSIONS HOTLINE</div>
                    <div style="font-family:'Cinzel', serif; font-size:28px; font-weight:700; margin:8px 0;">
                        <a href="tel:${SCHOOL_INFO.phoneClean}" style="color:#fff; text-decoration:none;">${SCHOOL_INFO.phone}</a>
                    </div>
                    <p style="font-size:13px; color:#CBD5E1; margin-bottom:15px;">Click to call directly from your smartphone.</p>
                    <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:15px; font-size:13px; color:#D8E2EC; line-height:2;">
                        <div>📍 <strong>Address:</strong> ${SCHOOL_INFO.address}</div>
                        <div>✉ <strong>Email:</strong> ${SCHOOL_INFO.email}</div>
                        <div>⏰ <strong>Office Hours:</strong> ${SCHOOL_INFO.hours}</div>
                    </div>
                    <div style="margin-top:20px;">
                        <button type="button" class="wuis-btn-apply" style="width:100%; justify-content:center;" onclick="openWiseUpModal('tour')">Book Campus Visit</button>
                    </div>
                </div>

                <!-- Facebook Page Card -->
                <div class="wuis-card" style="margin-bottom:25px;">
                    <h3 class="wuis-cinzel" style="font-size:17px; margin-bottom:6px;">Official Facebook Community</h3>
                    <p style="font-size:13px; color:#486581; margin-bottom:10px;">${SCHOOL_INFO.facebookDisplayName}</p>
                    <a href="${SCHOOL_INFO.facebookUrl}" target="_blank" rel="noopener noreferrer" style="color:#1877F2; font-weight:700; font-size:13px; text-decoration:none;">Visit Facebook Page →</a>
                </div>

                <!-- Department Directory -->
                <div class="wuis-card">
                    <h3 class="wuis-cinzel" style="font-size:17px; margin-bottom:15px; border-bottom:1px solid #EDF2F7; padding-bottom:8px;">Department Directory</h3>
                    <div style="display:flex; flex-direction:column; gap:12px; font-size:12.5px;">
                        ${DEPARTMENTS.map(d => `
                        <div style="background:#F7F7F5; padding:10px 12px; border-radius:6px;">
                            <div style="font-weight:700; color:var(--wuis-navy);">${d.department}</div>
                            <div style="color:#486581;">Tel: ${d.phone} · Hours: ${d.hours}</div>
                        </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Right Form Column -->
            <div>
                <div class="wuis-form-box">
                    <span class="wuis-sec-kicker">ADMISSIONS 2026-27</span>
                    <h3 class="wuis-cinzel" style="font-size:22px; margin:4px 0 15px;">Admissions Application Form</h3>
                    
                    <form id="contactPageForm" onsubmit="handleContactPageSubmit(event)">
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
                            <div class="wuis-form-group">
                                <label>Student Full Name *</label>
                                <input type="text" id="cpStudent" required placeholder="e.g. Daniyal Khan">
                            </div>
                            <div class="wuis-form-group">
                                <label>Parent / Guardian Name *</label>
                                <input type="text" id="cpParent" required placeholder="e.g. Asadullah Khan">
                            </div>
                        </div>

                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
                            <div class="wuis-form-group">
                                <label>Phone / WhatsApp *</label>
                                <input type="tel" id="cpPhone" required placeholder="0300 1234567">
                            </div>
                            <div class="wuis-form-group">
                                <label>Desired Grade *</label>
                                <select id="cpGrade">
                                    <option>Early Childhood: Playgroup / Nursery</option>
                                    <option>Early Childhood: Kindergarten (KG)</option>
                                    <option>Primary: Grade 1 through Grade 5</option>
                                    <option>Middle School: Grade 6 through Grade 8</option>
                                    <option>High School: Grade 9 (Matric Science / O-Level)</option>
                                    <option>High School: Grade 10 (Matric Science / O-Level)</option>
                                </select>
                            </div>
                        </div>

                        <div class="wuis-form-group">
                            <label>Questions / Notes</label>
                            <textarea id="cpMsg" rows="3" placeholder="Inquiry about school transport routes, fee schedule, or previous school transfer..."></textarea>
                        </div>

                        <button type="submit" class="wuis-btn-apply" style="width:100%; justify-content:center; padding:14px; font-size:15px;">Submit Inquiry</button>
                    </form>

                    <div id="cpSuccessBox" style="display:none; text-align:center; padding:30px 10px;">
                        <div style="font-size:48px; color:var(--wuis-green); margin-bottom:8px;">✓</div>
                        <h4 class="wuis-cinzel" style="color:var(--wuis-navy); font-size:22px; font-weight:700;">Inquiry Submitted!</h4>
                        <p style="font-size:13.5px; color:#486581; margin:8px 0 16px;">
                            Thank you. Our admissions secretariat will contact you shortly.
                        </p>
                        <div style="background:#F7F7F5; padding:15px; border-radius:8px; font-size:13px; color:#102A43; text-align:left;">
                            <div>Tracking Code: <strong id="cpRefCode" style="color:var(--wuis-navy);">WUIS-ADM-928172</strong></div>
                            <div>Helpline: <strong>${SCHOOL_INFO.phone}</strong></div>
                            <div>Campus: Model Town, Khojak Rd, Quetta</div>
                        </div>
                    </div>
                </div>

                <!-- Google Map Card -->
                <div class="wuis-card" style="margin-top:25px; padding:20px;">
                    <h3 class="wuis-cinzel" style="font-size:17px; margin-bottom:6px;">Model Town Khojak Road Campus Map</h3>
                    <p style="font-size:12.5px; color:#486581; margin-bottom:12px;">Near Khojak Road, Model Town, Quetta · Plus Code: ${SCHOOL_INFO.coordinates.plusCode}</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=Khojak+Rd,+Model+Town,+Quetta,+Pakistan" target="_blank" rel="noopener noreferrer" class="wuis-btn-apply" style="display:inline-flex;">
                        Open in Google Maps ↗
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<?php 
} // End Elementor fallback check
get_footer(); ?>
`;
  themeFolder.file('page-contact.php', contactPhp);

  // ==========================================
  // 9a. page.php (Standard Page with Elementor support)
  // ==========================================
  const pagePhp = `<?php
/**
 * Standard Page Template with Elementor Support
 */
get_header(); ?>

<main class="wuis-page-content" style="width:100%; min-height:60vh;">
    <?php
    while (have_posts()) : the_post();
        the_content();
    endwhile;
    ?>
</main>

<?php get_footer(); ?>
`;
  themeFolder.file('page.php', pagePhp);

  // ==========================================
  // 9b. template-elementor.php (Full Width Elementor Template)
  // ==========================================
  const elementorTemplatePhp = `<?php
/**
 * Template Name: Elementor Full Width (Wise Up)
 * Template Post Type: page, post
 */
get_header(); ?>

<main class="wuis-elementor-full-width" style="width:100%; min-height:60vh;">
    <?php
    while (have_posts()) : the_post();
        the_content();
    endwhile;
    ?>
</main>

<?php get_footer(); ?>
`;
  themeFolder.file('template-elementor.php', elementorTemplatePhp);

  // ==========================================
  // 9c. index.php (Standard Fallback)
  // ==========================================
  const indexPhp = `<?php
/**
 * Main Fallback Template
 */
get_header(); ?>

<div class="wuis-section">
    <div class="wuis-container">
        <?php
        if (have_posts()) :
            while (have_posts()) : the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('wuis-card'); ?> style="margin-bottom:30px;">
                    <h1 class="wuis-cinzel" style="font-size:28px; margin-bottom:15px;"><?php the_title(); ?></h1>
                    <div class="entry-content" style="font-size:15px; line-height:1.8; color:#334E68;">
                        <?php the_content(); ?>
                    </div>
                </article>
                <?php
            endwhile;
        else :
            echo '<p>No content found.</p>';
        endif;
        ?>
    </div>
</div>

<?php get_footer(); ?>
`;
  themeFolder.file('index.php', indexPhp);

  // ==========================================
  // 10. js/main.js (Interactive handlers)
  // ==========================================
  const jsFolder = themeFolder.folder('js');
  if (jsFolder) {
    const mainJs = `(function($) {
    'use strict';

    // Global Modal Functions
    window.openWiseUpModal = function(mode) {
        var modal = document.getElementById('wuisGlobalModal');
        var title = document.getElementById('wuisModalTitle');
        if (title) {
            title.innerText = (mode === 'tour') ? 'Schedule a Campus Visit' : 'Admissions Application 2026-2027';
        }
        if (modal) {
            modal.style.display = 'flex';
        }
    };

    window.closeWiseUpModal = function() {
        var modal = document.getElementById('wuisGlobalModal');
        if (modal) {
            modal.style.display = 'none';
        }
    };

    window.toggleWiseUpMobileMenu = function() {
        var drawer = document.getElementById('wuisMobileDrawer');
        if (drawer) {
            drawer.style.display = (drawer.style.display === 'block') ? 'none' : 'block';
        }
    };

    window.handleWuisModalSubmit = function(e) {
        e.preventDefault();
        var form = document.getElementById('wuisModalForm');
        var success = document.getElementById('wuisModalSuccess');
        var ref = 'WUIS-ADM-' + Math.floor(100000 + Math.random() * 900000);
        document.getElementById('modalRefCode').innerText = ref;
        if (form && success) {
            form.style.display = 'none';
            success.style.display = 'block';
        }
    };

    window.handleContactPageSubmit = function(e) {
        e.preventDefault();
        var form = document.getElementById('contactPageForm');
        var success = document.getElementById('cpSuccessBox');
        var ref = 'WUIS-ADM-' + Math.floor(100000 + Math.random() * 900000);
        document.getElementById('cpRefCode').innerText = ref;
        if (form && success) {
            form.style.display = 'none';
            success.style.display = 'block';
        }
    };

    $(document).ready(function() {
        $('#wiseupAdmissionsForm').on('submit', function(e) {
            e.preventDefault();
            var $form = $(this);
            var ref = 'WUIS-ADM-' + Math.floor(100000 + Math.random() * 900000);
            $('#wiseupRefCode').text(ref);
            $form.hide();
            $('#wiseupSuccessBox').fadeIn();
        });
    });
})(jQuery);
`;
    jsFolder.file('main.js', mainJs);
  }

  // ==========================================
  // 11. README.txt
  // ==========================================
  const readmeTxt = `========================================================
WISE UP INTERNATIONAL HIGH SCHOOL — WORDPRESS THEME
========================================================

Official WordPress Theme for Wise Up International High School
Location: Model Town, Khojak Rd, Quetta, Pakistan
Helpline: ${SCHOOL_INFO.phone}

HOW TO INSTALL IN 3 SIMPLE STEPS:
----------------------------------
1. Log into your WordPress Admin Dashboard (e.g. yoursite.com/wp-admin).
2. Go to: Appearance > Themes > Add New Theme.
3. Click "Upload Theme" at the top, select this "wise-up-school-theme.zip" file, and click "Install Now".
4. Click "Activate".

AUTOMATIC SETUP:
----------------
This theme automatically creates the following pages on activation:
1. Home (School Front Page with Hero, Quick Links, Why Choose Us, Academics, Testimonials, News, and Form)
2. About Us (Founding Heritage, Mission & Vision, Principal Message, Accreditations)
3. Academics & Services (K-10 Tracks, Labs, Extracurriculars, Bus Corridors, Cafeteria)
4. Admissions & Contact (Phone, Map, Department Directory, Admissions Form)

No manual page creation or layout styling required!
`;
  themeFolder.file('README.txt', readmeTxt);
  themeFolder.file('wise-up-elementor-template.json', getElementorPageTemplateJson());
  themeFolder.file('wise-up-pages.xml', getWordPressPagesXml());

  return await zip.generateAsync({ type: 'blob' });
}
