import {
  BatteryStorage,
  Breaker,
  ElectricalGrid,
  FuelCell,
  Home,
  InverterBattery,
} from '../assets';

interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: 'Solar Panel Installation',
    description:
      'Expert installation of high-efficiency solar panels tailored to your energy needs.',
    icon: Home,
  },
  {
    title: 'Breakers/Fuses',
    description:
      'Ensure the safety of your electrical system with our professional breakers and fuses services.',
    icon: Breaker,
  },
  {
    title: 'Meter & Panel Upgrades',
    description:
      'Upgrade your meter and panel to handle increased power demands efficiently and safely.',
    icon: InverterBattery,
  },
  {
    title: 'Repair Service',
    description:
      'Quick and reliable electrical repair services to keep your home or business running smoothly.',
    icon: BatteryStorage,
  },
  {
    title: 'Dedicated Circuits',
    description:
      'Specialized dedicated circuits for appliances and specific power needs.',
    icon: FuelCell,
  },
  {
    title: 'Emergency Repairs',
    description:
      '24/7 emergency repair services to address urgent electrical issues promptly.',
    icon: ElectricalGrid,
  },
];
