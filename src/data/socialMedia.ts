import { SocialMediaPost, ContentWorkflowStep } from '@/models/SocialMediaPost'

export const socialMediaPosts: SocialMediaPost[] = [
  new SocialMediaPost(
    '1',
    'Ayat of the Day: Trust in Allah',
    'Beautiful calligraphy of Quranic verses reminding youth to place their trust in Allah while taking action for positive change.',
    'inspirational',
    '',
    ['Quran', 'Tawakkul', 'Faith'],
  ),
  new SocialMediaPost(
    '2',
    'Community Clean-Up: Before & After',
    'A powerful side-by-side visual showcasing the dramatic transformation of a local park after our youth volunteers\' dedicated clean-up effort.',
    'impact',
    '',
    ['Community', 'Service', 'Cleanliness'],
  ),
  new SocialMediaPost(
    '3',
    'Youth Workshop Registration Now Open!',
    'Eye-catching announcement graphic for our upcoming Youth Leadership Workshop with speaker lineup, date, and registration QR code.',
    'event',
    '',
    ['Workshop', 'Leadership', 'Registration'],
  ),
  new SocialMediaPost(
    '4',
    'Hadith of the Week: Kindness',
    'An elegantly designed card featuring the Prophet\'s (PBUH) teachings on kindness, with reflection prompts for youth.',
    'inspirational',
    '',
    ['Hadith', 'Kindness', 'Character'],
  ),
  new SocialMediaPost(
    '5',
    'Health Camp Reaches 300+ Patients',
    'Infographic summarizing the impact of our recent free health camp including number of patients treated, medicines distributed, and volunteer hours.',
    'impact',
    '',
    ['Health', 'Community', 'Impact'],
  ),
]

export const contentWorkflowSteps: ContentWorkflowStep[] = [
  new ContentWorkflowStep(
    'brainstorm',
    'Brainstorming',
    'Youth members submit content ideas aligned with our mission and current community needs.',
    1,
  ),
  new ContentWorkflowStep(
    'align',
    'Aligning with Pillars',
    'Ideas are mapped to the 5 core pillars to ensure consistency with our values and character framework.',
    2,
  ),
  new ContentWorkflowStep(
    'brand',
    'Applying Brand Colors',
    'Content is designed using our established brand palette, typography, and visual identity guidelines.',
    3,
  ),
  new ContentWorkflowStep(
    'approve',
    'Approval Workflow',
    'Final content is reviewed by leadership for accuracy, appropriateness, and alignment before publication.',
    4,
  ),
]
