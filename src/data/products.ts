import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'tsudakoma-weft-feeder-pcb',
    name: 'Tsudakoma ZAX/ZAX9100 Weft Feeder Control PCB',
    slug: 'tsudakoma-zax9100-weft-feeder-pcb',
    category: 'textile-electronics',
    brand: 'Tsudakoma',
    model: 'ZAX-9100-WF4',
    shortDesc: 'Main electronic driver board for Tsudakoma Airjet Loom electronic weft feeders.',
    fullDesc: 'High-performance control board engineered specifically for Tsudakoma ZAX series Airjet looms. Features precise solenoid firing synchronization, anti-static noise filtering, and high thermal resistance for 24/7 continuous weaving operations.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: {
      'Compatible Machines': 'Tsudakoma ZAX / ZAX-E / ZAX9100 / ZAX9200',
      'Operating Voltage': '24V DC / 110V AC Solenoid Signal',
      'Feeder Channels': '4 Channel Weft Selector',
      'Mounting Type': 'Loom Controller Sub-Rack Unit',
      'Origin': 'Japan / OEM Compatible'
    },
    applications: [
      'Airjet Weaving Looms',
      'Electronic Weft Selection',
      'High-Speed Cotton & Synthetic Fabric Weaving'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'picanol-gammax-master-board',
    name: 'Picanol GamMax / OMNIplus Suma Master Controller Board',
    slug: 'picanol-gammax-master-controller-board',
    category: 'textile-electronics',
    brand: 'Picanol',
    model: 'Picanol SUMA-3000',
    shortDesc: 'Central CPU and logic board for Picanol OmniPlus and GamMax Rapier/Airjet looms.',
    fullDesc: 'The main processing heart of Picanol weaving machines. Controls let-off, take-up, main motor synchronization, shedding motion monitoring, and CANbus communication with the operator interface.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Machine Compatibility': 'Picanol GamMax, OmniPlus, OmniPlus 800',
      'Processor Core': '32-Bit Industrial RISC Processor',
      'Interfaces': 'CANbus, RS485, Fiber Optical Input',
      'Power Input': '24V DC +/- 10%'
    },
    applications: [
      'Rapier Weaving Machines',
      'Airjet Weaving Looms',
      'Textile Mill Automation'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'mitsubishi-fx3u-64mt-plc',
    name: 'Mitsubishi FX3U-64MT/ES-A Programmable Logic Controller',
    slug: 'mitsubishi-fx3u-64mt-plc',
    category: 'plc-automation',
    brand: 'Mitsubishi Electric',
    model: 'FX3U-64MT/ES-A',
    shortDesc: '32 Input / 32 Transistor Output high-speed compact PLC with built-in high speed counters.',
    fullDesc: 'Industry-standard compact PLC from Mitsubishi Electric. Ideal for textile machinery, wrapping machines, carding units, and conveyor control. Supports up to 224 I/O points with expansion modules.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Digital Inputs': '32 Sink/Source 24V DC Inputs',
      'Digital Outputs': '32 Transistor Outputs',
      'Power Supply': '100-240V AC',
      'Memory Capacity': '64,000 Steps Flash Memory',
      'High Speed Counters': '6 Points up to 100kHz'
    },
    applications: [
      'Textile Spinning & Winding',
      'Automatic Packing Machinery',
      'Industrial Conveyor Automation'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'siemens-s7-1200-cpu1214c',
    name: 'Siemens SIMATIC S7-1200 CPU 1214C DC/DC/DC PLC',
    slug: 'siemens-s7-1200-cpu1214c',
    category: 'plc-automation',
    brand: 'Siemens',
    model: '6ES7214-1AG40-0XB0',
    shortDesc: 'Compact CPU with 14 DI / 10 DO / 2 AI, PROFINET port, and integrated web server.',
    fullDesc: 'Siemens S7-1200 CPU 1214C provides versatile automation control for textile preparation machines, stenter frames, and chemical processing lines.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Digital I/O': '14 Inputs / 10 Outputs',
      'Analog Inputs': '2 Integrated Analog Inputs (0-10V)',
      'Communication': 'Profinet RJ45 Ethernet',
      'Program Memory': '100 KB Integrated Work Memory'
    },
    applications: [
      'Dyeing & Bleaching Machine Automation',
      'Stenter Frame Temperature & Speed Control',
      'Spinning Mill Central Monitoring'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'yaskawa-a1000-vfd-inverter',
    name: 'Yaskawa A1000 Heavy Duty VFD Inverter Drive (15kW / 20HP)',
    slug: 'yaskawa-a1000-vfd-inverter-15kw',
    category: 'drives-inverters',
    brand: 'Yaskawa',
    model: 'CIMR-AT4A0038FAA',
    shortDesc: 'High performance vector control AC drive designed for harsh industrial & textile environments.',
    fullDesc: 'Yaskawa A1000 delivers maximum torque at zero speed, exceptionally quiet operation, and heavy-duty overload capacity (150% for 60s). Ideal for loom main drives, ring frames, and heavy blower motors.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Power Rating': '15 kW (20 HP) Heavy Duty',
      'Input Voltage': '3-Phase 380-480V AC 50/60Hz',
      'Control Method': 'Closed Loop Vector, Open Loop Vector, V/f',
      'Enclosure': 'IP20 NEMA 1 Industrial Enclosure'
    },
    applications: [
      'Loom Main Drive Speed Control',
      'Ring Frame Motor Acceleration',
      'Textile Compressor & Fan Drives'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'delta-vfd-e-inverter',
    name: 'Delta VFD-E Series Sensorless Vector Micro Drive (3.7kW)',
    slug: 'delta-vfd-e-series-3-7kw',
    category: 'drives-inverters',
    brand: 'Delta',
    model: 'VFD037E43A',
    shortDesc: 'Flexible modular AC drive with built-in PLC function and Modbus RS485 communication.',
    fullDesc: 'Compact modular AC Drive with IP20 rating, built-in EMI filter, and removable keypad. Extensively used in textile winding, bobbin transport, and small industrial pumps.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Motor Output': '3.7 kW (5 HP)',
      'Input Supply': '3-Phase 400V AC',
      'Built-in PLC': '500 Steps Ladder Logic',
      'Communication': 'Built-in Modbus RTU / ASCII'
    },
    applications: [
      'Yarn Winding Machines',
      'Textile Conveyors',
      'Auxiliary Pump Motor Drives'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'weintek-7inch-touch-hmi',
    name: 'Weintek MT8071iE 7" Color TFT Touch HMI Display',
    slug: 'weintek-mt8071ie-7inch-hmi',
    category: 'displays-hmi',
    brand: 'Weintek',
    model: 'MT8071iE',
    shortDesc: 'High resolution 800x480 TFT display with Ethernet, RS232/RS485, and wide PLC protocol support.',
    fullDesc: 'Rugged 7-inch industrial touch panel engineered for easy integration with Mitsubishi, Siemens, Delta, Omron, and Tsudakoma PLCs. Supports remote viewing, recipe management, and multi-language operator interface.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Screen Size': '7" TFT 16.7M Colors',
      'Resolution': '800 x 480 WVGA',
      'Ports': 'Ethernet, USB 2.0 Host, RS232/485',
      'Protection Rating': 'NEMA 4 / IP65 Front Panel'
    },
    applications: [
      'Textile Loom Operator Touch Panel',
      'Dyeing Machine Batch Controller Interface',
      'Custom Machine Retrofit Display'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'proface-gp4501t-hmi',
    name: 'Pro-face GP-4501T 10.4" SVGA Industrial Touch Screen Display',
    slug: 'proface-gp4501t-10inch-hmi',
    category: 'displays-hmi',
    brand: 'Pro-face',
    model: 'PFXGP4501TAD',
    shortDesc: 'Premium 10.4-inch industrial display panel designed for demanding textile mill environments.',
    fullDesc: 'Pro-face GP-4501T offers crisp clarity, high oil and chemical resistance, dual serial ports, and Ethernet connectivity. Perfect replacement panel for imported European and Asian textile machinery.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Display Size': '10.4 Inch TFT Active Matrix',
      'Resolution': '800 x 600 SVGA',
      'Power Rating': '24V DC',
      'Brand Protocols': 'Siemens, Mitsubishi, Schneider, Omron, Yaskawa'
    },
    applications: [
      'High-end Jacquard Weaving Display',
      'Circular Knitting Machine Controller',
      'Central Loom Shed Operator Terminal'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'yaskawa-sigma7-servo-pack',
    name: 'Yaskawa Sigma-7 Series Servo Drive Pack (1.5kW)',
    slug: 'yaskawa-sigma7-servo-drive-1-5kw',
    category: 'servo-systems',
    brand: 'Yaskawa',
    model: 'SGD7S-120A00A',
    shortDesc: 'Ultra-high response frequency servo amplifier with 24-bit absolute encoder feedback.',
    fullDesc: 'Yaskawa Sigma-7 Servo Drives represent the pinnacle of motion control performance. Delivers 3.1 kHz speed frequency response, vibration suppression filters, and instant synchronization for electronic shedding and warp let-off systems.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Continuous Output Power': '1.5 kW',
      'Input Voltage': '3-Phase 200-240V AC',
      'Encoder Interface': '24-Bit Serial Encoder Feedback',
      'Control Mode': 'Position, Speed, Torque Control'
    },
    applications: [
      'Electronic Warp Let-off (ELO)',
      'Electronic Fabric Take-up (ETU)',
      'Electronic Jacquard Drive Servo'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'panasonic-a6-servo-motor-drive',
    name: 'Panasonic MINAS A6 Series AC Servo Motor & Driver Set (750W)',
    slug: 'panasonic-minas-a6-servo-set-750w',
    category: 'servo-systems',
    brand: 'Panasonic',
    model: 'MADLN15SG / MSMD082G1U',
    shortDesc: 'Compact 750W 3000 RPM servo driver and high-torque motor set.',
    fullDesc: 'Panasonic A6 family offers low cogging torque, 23-bit absolute encoder, high speed capability up to 6000 RPM, and IP67 motor sealing against textile dust and oil mist.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Rated Output': '750 Watts',
      'Rated Speed': '3000 RPM',
      'Protection Class': 'IP67 (Motor Unit)',
      'Feedback': '23-Bit Absolute Encoder'
    },
    applications: [
      'Rapier Drive Servo Mechanism',
      'High Speed Winding Positioning',
      'Textile Printing Machine Drive'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'eltex-optical-weft-sensor',
    name: 'Eltex / Loepfe Optical Weft Stop Sensor Detector',
    slug: 'eltex-optical-weft-stop-sensor',
    category: 'sensors-encoders',
    brand: 'Eltex',
    model: 'G3s-12V-OPT',
    shortDesc: 'High sensitivity infrared optical yarn break sensor for Airjet & Rapier looms.',
    fullDesc: 'Detects the movement of yarn down to 5 denier spun yarn. Features instant stop signal output (<2ms response) to prevent loom faults and damaged fabric selvages.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Detection Type': 'Infrared Piezoelectric & Optical Motion Sensor',
      'Response Time': '< 2 Milliseconds',
      'Supply Voltage': '12V - 24V DC',
      'Yarn Range': '5 Denier to 2000 Denier'
    },
    applications: [
      'Airjet Weft Arrival Detection',
      'Rapier Weft Stop Motion',
      'Creel Yarn Break Monitoring'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'baumer-rotary-encoder',
    name: 'Baumer / Hengstler Industrial Rotary Incremental Encoder',
    slug: 'baumer-rotary-encoder-1024ppr',
    category: 'sensors-encoders',
    brand: 'Baumer',
    model: 'EIL580-TT12.5BN.1024.A',
    shortDesc: '1024 PPR hollow shaft heavy duty rotary encoder for loom mainshaft synchronization.',
    fullDesc: 'Designed to withstand heavy mechanical vibration and electrical noise. Provides absolute shaft position feedback to loom main electronic control unit.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Resolution': '1024 Pulses Per Revolution (PPR)',
      'Shaft Type': '12mm Hollow Through Shaft',
      'Output Signal': 'HTL Push-Pull / TTL RS422',
      'Operating Temperature': '-20°C to +85°C'
    },
    applications: [
      'Loom Mainshaft Angle Position Sensor',
      'Fabric Length Metering Control',
      'Motor Speed Feedback'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'staubli-jacquard-display-card',
    name: 'Staubli JC5 / JC6 Electronic Jacquard Controller Board',
    slug: 'staubli-jc5-jc6-jacquard-controller-board',
    category: 'textile-electronics',
    brand: 'Staubli',
    model: 'JC6-M2-REV4',
    shortDesc: 'Electronic control board for Staubli electronic Jacquard weaving heads.',
    fullDesc: 'Refurbished and certified genuine electronic drive board for Staubli JC5 and JC6 Jacquard controllers. Complete with high voltage solenoid driver channels and optical noise isolation.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Head Compatibility': 'Staubli CX, SX, LX Jacquard Heads',
      'Channels': '2688 / 5120 Solenoid Drivers',
      'Input Interface': 'Fiber Optic High Speed Bus',
      'Condition': 'New / Fully Refurbished with Warranty'
    },
    applications: [
      'Electronic Jacquard Weaving',
      'Complex Pattern Tapestry Production',
      'Shedding Machine Electronic Control'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'toyota-jat710-main-inverter-board',
    name: 'Toyota JAT710 / JAT810 Main Inverter & Power Board',
    slug: 'toyota-jat710-main-inverter-power-board',
    category: 'textile-electronics',
    brand: 'Toyota',
    model: 'JAT710-INV-P2',
    shortDesc: 'Power supply and inverter driver board for Toyota JAT Airjet loom main drive motor.',
    fullDesc: 'High reliability inverter board for Toyota JAT710 and JAT810 Airjet weaving machines. Ensures smooth slow motion, rapid braking, and energy efficient motor operation.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Loom Models': 'Toyota JAT710, JAT810 Airjet Looms',
      'Braking Circuit': 'Built-in High Speed Dynamic Braking Driver',
      'Protection': 'Overcurrent, Thermal Overload, Under-voltage'
    },
    applications: [
      'Toyota Airjet Weaving Looms',
      'Quick Brake & Inch Control',
      'Main Motor Power Management'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'semikron-igbt-module-textile',
    name: 'Semikron / Fuji 3-Phase IGBT Power Module for Inverters',
    slug: 'semikron-fuji-3phase-igbt-power-module',
    category: 'pcb-components',
    brand: 'Fuji / Semikron',
    model: '6MBI75U4B-120',
    shortDesc: '75A 1200V 6-Pack IGBT module for industrial inverter and servo amplifier repair.',
    fullDesc: 'High power density IGBT module designed for replacing blown power stages in Yaskawa, Mitsubishi, Delta, and Danfoss VFD inverters used across textile mills.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Collector Current': '75 Amperes',
      'Voltage Rating': '1200 Volts',
      'Configuration': '6-Pack 3-Phase Bridge',
      'Thermal Resistance': 'Super Low Junction-to-Case Resistance'
    },
    applications: [
      'Inverter Drive PCB Repair',
      'Servo Amplifier Power Stage Refurbishment',
      'Industrial Power Electronic Bench Testing'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'tsudakoma-sub-nozzle-solenoid-valve-card',
    name: 'Tsudakoma Sub-Nozzle Solenoid Driver Valve Card',
    slug: 'tsudakoma-sub-nozzle-solenoid-card',
    category: 'textile-spare-parts',
    brand: 'Tsudakoma',
    model: 'SNV-08-VALVE',
    shortDesc: '8-Channel high frequency sub-nozzle solenoid driver module for Tsudakoma Airjet looms.',
    fullDesc: 'Controls the precision air pulsing of sub-nozzles across the reed profile. Fast switching MOSFET driver channels ensure minimum air consumption and reliable weft flight across wide loom widths.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    specifications: {
      'Outputs': '8 Solenoid Valve Drivers',
      'Firing Frequency': 'Up to 1200 Pulses / Minute',
      'Protection': 'Individual Fuse and Surge Suppression per channel'
    },
    applications: [
      'Airjet Relay Nozzle Control',
      'Air Consumption Optimization',
      'High Speed Weft Insertion'
    ],
    featured: false,
    inStock: true
  }
];
