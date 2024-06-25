import { EmilyR, JohnD, SarahM } from '../assets';

interface User {
  avatar: string;
  direction: string;
  name: string;
  testimonial: string;
}

export const users: User[] = [
  {
    name: 'Sarah M.',
    testimonial:
      "Switching to solar with J Power Connection was the best decision for our family. We're saving money and contributing to a cleaner environment.",
    direction: 'Los Angeles, CA',
    avatar: SarahM,
  },
  {
    name: 'John D.',
    testimonial:
      'The installation process was seamless, and the team was professional and knowledgeable. Highly recommend!',
    direction: 'Los Angeles, CA',
    avatar: JohnD,
  },
  {
    name: 'Emily R.',
    testimonial:
      'Their energy efficiency upgrades have significantly reduced our power consumption. Our home is now more eco-friendly and cost-effective.',
    direction: 'San Diego, CA',
    avatar: EmilyR,
  },
];
