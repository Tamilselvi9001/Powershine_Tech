import { Service, Brand } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'industrial-electronics-repair',
    title: 'Industrial Electronics & PCB Repair Services',
    slug: 'industrial-electronics-pcb-repair',
    shortDesc: 'Component-level repair of complex multi-layer electronic circuit boards, CPU cards, and power modules.',
    fullDesc: 'Powershine Tech operates a state-of-the-art repair laboratory equipped with modern oscilloscope testing stations, IC programmers, BGA reballing stations, and dedicated load test benches. We specialize in repairing expensive imported electronic cards from European, Japanese, and Chinese textile machinery when OEM replacements are obsolete or prohibitively expensive.',
    features: [
      'Component-level diagnostic and IC replacements',
      'Advanced ultrasonic cleaning & anti-corrosion conformal coating',
      'Original OEM component sourcing for maximum longevity',
      'Simulated load bench testing before dispatch',
      'Quick turnaround emergency service available (24-48 Hours)',
      '100% testing warranty on all repaired cards'
    ],
    applications: [
      'Loom Main CPU & Memory Boards',
      'Weft Feeder Driver Cards',
      'Tension & Let-off Controller PCBs',
      'Power Supply Modules & SMPS',
      'Optical & Piezo Sensor Cards'
    ],
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vfd-servo-drive-overhaul',
    title: 'AC Drive & Servo System Overhaul & Servicing',
    slug: 'ac-drive-servo-repair-overhaul',
    shortDesc: 'Complete servicing, IGBT replacement, capacitor refurbishing, and load testing for VFDs & Servo drives.',
    fullDesc: 'Variable Frequency Drives and Servo Amplifiers operate under high thermal stress and lint/dust accumulation in textile mills. Our drive repair team cleans, inspects, replaces degraded electrolytic capacitors, replaces worn IGBT power packs, rewires cooling fans, and tests drives under full rated motor load.',
    features: [
      'Full rated motor load test bench testing',
      'IGBT module & gate driver circuit restoration',
      'Capacitor bank ESR testing & preventative replacement',
      'Parameter backup & restore service',
      'Servicing for Yaskawa, Mitsubishi, Delta, Siemens, Lenze, Danfoss'
    ],
    applications: [
      'Loom Main Drive Inverters',
      'Ring Frame Motor Drives',
      'Electronic Warp Let-off Servo Packs',
      'Stenter Machine Heavy Drives'
    ],
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'loom-retrofitting-automation',
    title: 'Textile Machinery Electronic Retrofitting & Upgrades',
    slug: 'textile-machinery-retrofitting-upgrades',
    shortDesc: 'Upgrading older mechanical or obsolete electronic looms with modern touchscreen HMIs & PLCs.',
    fullDesc: 'Transform legacy looms and textile machines into high-efficiency automated production assets. We replace failing proprietary control boxes with modern PLC controllers, touchscreen displays, electronic let-off/take-up systems, and energy-efficient VFD motor drives.',
    features: [
      'Custom touchscreen HMI development in regional languages',
      'Precision Electronic Warp Let-off (ELO) installation',
      'Electronic Fabric Take-up (ETU) digital control',
      'Lower energy consumption and reduced machine downtime',
      'On-site installation and technician operator training'
    ],
    applications: [
      'Airjet & Rapier Loom Controller Retrofits',
      'Shedding & Dobby Machine Automation',
      'Winding & Doubling Machine Controls',
      'Custom Industrial Conveyor Upgrades'
    ],
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hmi-touchscreen-repair',
    title: 'HMI & Touchscreen Panel Repair & Glass Replacement',
    slug: 'hmi-touchscreen-display-repair',
    shortDesc: 'Restoration of cracked touch glasses, faulty backlight inverters, membrane keypads, and display logic.',
    fullDesc: 'Display panels are subject to constant operator wear and accidental impact. Powershine Tech stocks replacement touch glass membranes, LCD backlight panels, and display controller cards for Weintek, Pro-face, Siemens, Mitsubishi, and Samkoon panels.',
    features: [
      'Touch matrix glass replacement with original accuracy',
      'CCFL to LED backlight upgrades for brighter, cooler display',
      'Membrane key switch repair and bezel rebuilding',
      'Display program backup and transfer to new panel units'
    ],
    applications: [
      'Weaving Loom Touch Terminals',
      'Spinning Mill Operator Displays',
      'Dyeing House Control Panels'
    ],
    iconName: 'Monitor',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'genuine-parts-sourcing',
    title: 'Sourcing Genuine Obsolete Electronic Parts & Components',
    slug: 'genuine-obsolete-parts-sourcing',
    shortDesc: 'Global sourcing network for hard-to-find ICs, IGBTs, encoders, sensors, and original machinery cards.',
    fullDesc: 'When machinery suppliers discontinue support for older models, textile plants face extended shutdowns. Powershine Tech maintains a global sourcing network across Japan, Europe, and Asia to supply verified genuine parts, chips, and replacement cards.',
    features: [
      'Verified genuine component quality checks',
      'Extensive stock of ready-to-ship electronic boards',
      'Direct import of hard-to-find Japanese & European textile spares',
      'Express logistics to reduce client mill downtime'
    ],
    applications: [
      'Tsudakoma, Toyota, Picanol, Staubli, Murata Spares',
      'Discontinued Industrial Electronics',
      'Specialized High-Voltage IGBTs & MOSFETs'
    ],
    iconName: 'Package',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
  }
];

export const BRANDS: Brand[] = [
  {
    name: 'Tsudakoma',
    category: 'Weaving Machinery & Electronics',
    logoText: 'TSUDAKOMA',
    description: 'Leading Japanese manufacturer of Airjet & Waterjet weaving machinery.'
  },
  {
    name: 'Picanol',
    category: 'Rapier & Airjet Looms',
    logoText: 'PICANOL',
    description: 'World-renowned Belgian weaving machine technology innovator.'
  },
  {
    name: 'Toyota',
    category: 'Textile Machinery',
    logoText: 'TOYOTA',
    description: 'Japanese textile machinery division known for JAT series airjet looms.'
  },
  {
    name: 'Staubli',
    category: 'Shedding & Jacquard Systems',
    logoText: 'STÄUBLI',
    description: 'Swiss precision Jacquard, dobby, and shedding automation systems.'
  },
  {
    name: 'Siemens',
    category: 'Industrial Automation & PLCs',
    logoText: 'SIEMENS',
    description: 'Global pioneer in industrial automation, drives, and S7 controllers.'
  },
  {
    name: 'Mitsubishi Electric',
    category: 'PLCs, Inverters & Servos',
    logoText: 'MITSUBISHI',
    description: 'Japanese leader in FX/Q series PLCs, FR inverters, and MR servo systems.'
  },
  {
    name: 'Yaskawa',
    category: 'AC Drives & Servo Systems',
    logoText: 'YASKAWA',
    description: 'Premium motion control, A1000/GA700 VFD drives, and Sigma-7 servos.'
  },
  {
    name: 'Delta Electronics',
    category: 'Automation & Drives',
    logoText: 'DELTA',
    description: 'Cost-effective high reliability PLCs, HMIs, and VFD motor drives.'
  },
  {
    name: 'Pro-face',
    category: 'HMI Touch Displays',
    logoText: 'PRO-FACE',
    description: 'Industrial touch panel displays and operator terminals.'
  },
  {
    name: 'Weintek',
    category: 'HMI Displays',
    logoText: 'WEINTEK',
    description: 'Versatile touch panels with broad industrial protocol compatibility.'
  },
  {
    name: 'Eltex',
    category: 'Yarn & Weft Sensors',
    logoText: 'ELTEX',
    description: 'Swedish specialist in optical and piezoelectric yarn stop motion sensors.'
  },
  {
    name: 'Baumer',
    category: 'Encoders & Industrial Sensors',
    logoText: 'BAUMER',
    description: 'Precision rotary encoders, optical sensors, and position feedback.'
  }
];
