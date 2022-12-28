import { TemplateFlavor } from '@lumina/api'
import { ScriptQuery } from '../src/Script'

export const T8: ScriptQuery = {
  id: 8,
  flavor: TemplateFlavor.T8,
  video: null,
  request: {
    customer: {
      id: 22,
    },
  },
  order: {
    id: 20,
  },
  layers: {
    alternateTemplate: {
      type: 'select',
      fieldType: 'select',
      options: ['T8/T8.aep', 'T8/T8-short.aep', ''],
      scriptVariable: 'Alternate Template',
      value: 'T8/T8.aep',
    },
    soundTrack: {
      id: '1353',
      type: 'audio',
      fieldType: 'audio',
      scriptVariable: 'Soundtrack',
    },
    iconColor: {
      type: 'data',
      value: '#2E424A',
      property: 'Effects.Fill.Color',
      composition: '_control',
      fieldType: 'color',
      description: 'Used for highlight effect.',
      scriptVariable: 'Title/Border/Icon',
    },
    brandColor: {
      type: 'data',
      value: '#1EBEE7',
      property: 'Effects.Fill.Color',
      composition: '_control',
      fieldType: 'color',
      description: 'Used for pinwheel, bullet icons, & heading text.',
      scriptVariable: 'Wheel/Headings/Bullet Icons',
    },
    backgroundColor: {
      type: 'data',
      property: 'Effects.Fill.Color',
      composition: '_control',
      fieldType: 'color',
      description: 'Background color, location icon, and tagline.',
      scriptVariable: 'Background/Tagline/Location Icon',
      value: '#ffffff',
    },
    primaryTextColor: {
      type: 'data',
      value: '#2E424A',
      property: 'Effects.Fill.Color',
      composition: '_control',
      fieldType: 'color',
      description: 'Used for mission text, testimonial, & bullets.',
      scriptVariable: 'Body Text',
    },
    logo: {
      id: '1006',
      type: 'image',
      fieldType: 'image',
      scriptVariable: 'Logo',
    },
    locationIcon: {
      type: 'image',
      fieldType: 'image',
      scriptVariable: 'Location Icon',
      id: '220',
    },
    bulletIcon: {
      type: 'image',
      fieldType: 'image',
      scriptVariable: 'Location Icon',
      id: '204',
    },
    slideTwoIcon: {
      type: 'image',
      fieldType: 'image',
      scriptVariable: 'Location Icon',
      id: '2119',
    },
    slideThreeIcon: {
      type: 'image',
      fieldType: 'image',
      scriptVariable: 'Location Icon',
      id: '2116',
    },
    slideFourIcon: {
      type: 'image',
      fieldType: 'image',
      scriptVariable: 'Location Icon',
      id: '2123',
    },
    tagline: {
      type: 'data',
      fieldType: 'text',
      property: 'Text.Source Text',
      composition: '_control',
      maxLength: 15,
      scriptVariable: 'We’re Hiring!',
      value: 'We’re Hiring!',
    },
    position: {
      type: 'data',
      property: 'Text.Source Text',
      composition: '_control',
      fieldType: 'text',
      maxLength: 26,
      scriptVariable: 'Position',
      value: 'ABA Therapist',
    },
    location: {
      type: 'data',
      fieldType: 'text',
      property: 'Text.Source Text',
      composition: '_control',
      maxLength: 26,
      scriptVariable: 'Location',
      value: 'LOS ANGELES, CA'
    },
    slideTwoTitle: {
      type: 'data',
      fieldType: 'text',
      property: 'Text.Source Text',
      composition: '_control',
      maxLength: 18,
      scriptVariable: 'Title ("OUR MISSION")',
      value: 'OUR MISSION',
    },
    slideTwoBody: {
      type: 'data',
      property: 'Text.Source Text',
      composition: '_control',
      fieldType: 'textArea',
      lineLength: 25,
      maxLength: 75,
      scriptVariable: 'Body Text (Mission)',
      value: "We are dedicated to serving & bettering the lives of families of children with special needs"
    },
    slideThreeTitle: {
      type: 'data',
      fieldType: 'text',
      property: 'Text.Source Text',
      composition: '_control',
      maxLength: 18,
      scriptVariable: 'Title ("BENEFITS")',
      value: 'BENEFITS',
    },
    bulletOne: {
      type: 'data',
      property: 'Text.Source Text',
      composition: '_control',
      fieldType: 'textArea',
      lineLength: 23,
      maxLength: 46,
      scriptVariable: 'Bullet 1',
      value: 'Competitive salary, merit increase eligible',
    },
    bulletTwo: {
      type: 'data',
      property: 'Text.Source Text',
      composition: '_control',
      fieldType: 'textArea',
      lineLength: 23,
      maxLength: 46,
      scriptVariable: 'Bullet 2',
      value: 'Medical, dental, vision, life & disability insurance',
    },
    bulletThree: {
      type: 'data',
      property: 'Text.Source Text',
      composition: '_control',
      fieldType: 'textArea',
      lineLength: 23,
      maxLength: 46,
      scriptVariable: 'Bullet 3',
      value: 'Advancement opportunity',
    },
    testimonial: {
      type: 'data',
      property: 'Text.Source Text',
      composition: '_control',
      fieldType: 'textArea',
      lineLength: 24,
      maxLength: 72,
      scriptVariable: 'Testimonial',
      value: 'It feels meaningful to wake up each day and make a difference!'
    },
    attribution: {
      type: 'data',
      property: 'Text.Source Text',
      composition: '_control',
      fieldType: 'text',
      maxLength: 25,
      scriptVariable: 'Attribution',
      value: 'EMPLOYEE REVIEW'
    },
    callToAction: {
      type: 'data',
      property: 'Text.Source Text',
      fieldType: 'text',
      composition: '_control',
      maxLength: 15,
      scriptVariable: 'Call to Action',
      value: 'APPLY NOW',
    },
  },
}