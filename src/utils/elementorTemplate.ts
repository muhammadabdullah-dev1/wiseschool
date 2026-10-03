import { SCHOOL_INFO } from '../data/schoolData';

export function getElementorPageTemplateJson(): string {
  const template = {
    version: '0.4',
    title: 'Wise Up International School - Home Page',
    type: 'page',
    content: [
      {
        id: 'wuis_hero_section',
        elType: 'section',
        settings: {
          layout: 'full_width',
          background_background: 'classic',
          background_color: '#102A43',
          padding: {
            unit: 'px',
            top: '70',
            right: '20',
            bottom: '70',
            left: '20',
            isLinked: false
          }
        },
        elements: [
          {
            id: 'wuis_hero_col',
            elType: 'column',
            settings: {
              _column_size: 100
            },
            elements: [
              {
                id: 'wuis_hero_kicker',
                elType: 'widget',
                widgetType: 'heading',
                settings: {
                  title: 'MODEL TOWN, QUETTA · SESSION 2026-2027',
                  header_size: 'h5',
                  title_color: '#D4A017'
                }
              },
              {
                id: 'wuis_hero_title',
                elType: 'widget',
                widgetType: 'heading',
                settings: {
                  title: 'Where Excellence Meets Opportunity',
                  header_size: 'h1',
                  title_color: '#FFFFFF'
                }
              },
              {
                id: 'wuis_hero_urdu',
                elType: 'widget',
                widgetType: 'heading',
                settings: {
                  title: SCHOOL_INFO.urduTagline,
                  header_size: 'h3',
                  title_color: '#FFE399',
                  align: 'right'
                }
              },
              {
                id: 'wuis_hero_desc',
                elType: 'widget',
                widgetType: 'text-editor',
                settings: {
                  editor: '<p style="color: #D8E2EC; font-size: 15px; line-height: 1.7;">Wise Up International High School provides children in Quetta with premier bilingual international education, experienced faculty, and modern facilities from Montessori Early Years through BISE Matriculation.</p>'
                }
              },
              {
                id: 'wuis_hero_btn_apply',
                elType: 'widget',
                widgetType: 'button',
                settings: {
                  text: 'Apply for Admission 2026-27',
                  link: { url: '#admissions-section' },
                  button_type: 'warning',
                  background_color: '#D4A017',
                  button_text_color: '#102A43'
                }
              }
            ]
          }
        ]
      }
    ]
  };

  return JSON.stringify(template, null, 2);
}
