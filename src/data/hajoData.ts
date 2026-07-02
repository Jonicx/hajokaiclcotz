import { HajoService, HajoProject, HajoMilestone } from '../types';
import batchPlantImg from '../assets/Construction-of-Batch-Plant.webp';
import roadFormationImg from '../assets/Road-formation-kahama.webp';
import processPlantImg from '../assets/Process-Plant-North.webp';
import structuralTanksImg from '../assets/Structural-tanks-corosion-control.webp';
import sewageImg from '../assets/sewage-hydrocarbon-control.webp';
import craneSteelImg from '../assets/Crane-Steel-Structure-Assembling.webp';

export const HAJO_SERVICES: HajoService[] = [
  {
    id: 'mechanical',
    title: 'Mechanical Engineering',
    swahiliTitle: 'Mechanical Engineering',
    description: 'Grading, structural excavation, and bulk earthworks utilizing our state-of-the-art heavy fleet.',
    longDescription: 'Whether your project involves a failure analysis of a mechanical component, or new component design, engineering a new system or resolving problems in an existing one, evaluating the stresses in an existing component or designing a new one for long term, trouble free lifecycle, we offer these and more services to solve your challenges. Our team of Engineers has a longterm experience that will bring the best out of your project. Our mechanical engineering services find acceptance across multiple industry verticals. Some of our most popular clients belong to Mining, Automotive, Marine and Shipping, Telecommunication, Oil & Gas, Transportation and Logistics',
    iconName: 'Wrench',
    features: [
      'Mass Earthworks & Soil Stabilization',
      'Structural Excavation & Site Grading',
      'Foundation Sub-Structure Works',
      'Retaining Structures & Slope Protection'
    ]
  },
  {
    id: 'roads',
    title: 'Roads & Infrastructure',
    swahiliTitle: 'Civil Engineering',
    description: 'Constructing and rehabilitating modern highways, urban road networks, bridges, and complete drainage systems.',
    longDescription: 'With modern fleets, technology and a dedicated team in our projects, Construction Services partners with our clients from urban centers to remote locations. We Construct or Maintain Roadways, Water reservoirs, Buildings, Bridges, Airports, Dams and Tunnels.',
    iconName: 'TrendingUp',
    features: [
      'Asphalt Paving & Rehabilitation',
      'Gravel & Sub-base Stabilization',
      'Bridges, Culverts & Drainage Channels',
      'Urban Transport Networks'
    ]
  },
  {
    id: 'building',
    title: 'Commercial & Residential Building',
    swahiliTitle: 'Civil Engineering',
    description: 'Erecting high-rise commercial structures, modern offices, warehouses, and master-planned housing projects.',
    longDescription: 'We are a fully integrated infrastructure firm that can construct anything. The world’s infrastructure is not keeping pace with current demand. Solving this complex challenge requires an organization steeped in experience and primed for the future. Our construction experts integrate the best practices from the last century into the technologies defining our industry today. Through several strategic acquisitions over the last years, we’ve best positioned ourselves to serve a diverse range of clients.',
    iconName: 'Building2',
    features: [
      'Multi-Story Reinforced Concrete Shells',
      'Commercial Offices & Warehousing',
      'Eco-Friendly Green Facades',
      'Turnkey Industrial Facilities'
    ]
  },
  {
    id: 'water',
    title: 'Water Works & Environment Managment',
    swahiliTitle: 'Environment Control',
    description: 'Developing sustainable clean water pipelines, reservoirs, pump stations, recycling and municipal sewerage networks.',
    longDescription: 'Water security is vital to Tanzanian communities. HAJOKA ICL constructs reliable water distribution mains, wastewater treatment plants, elevated storage reservoirs, and protective river intake structures. HAJOKA ICL is certified and complies with OSHA in the United Republic of Tanzania.',
    iconName: 'Droplet',
    features: [
      'Sewage Disposal; Collection & Treatment',
      'Elevated Steel & Concrete Reservoirs',
      'Pump Station Mechanical Outfitting',
      'Water Waste Management & Rehabilitation.'
    ]
  }
];

export const HAJO_PROJECTS: HajoProject[] = [
  {
    id: 'proj-1',
    title: 'Construction Of A Batch Plant',
    location: 'Geita Gold Mine',
    category: 'building',
    year: '2023',
    status: 'AnglogoldAshanti',
    image: batchPlantImg,
    scope: [
      '120ft Batch Plant High-end Frame',
      'Custom Sun-Shading African Motif Screen',
      'Complete Waste Layout and Recycling',
      'Complete HVAC and High-Speed Fiber Layout',
    ]
  },
  {
    id: 'proj-2',
    title: 'Road formation & Maintenance',
    location: 'Kahama & Ushetu Districts',
    category: 'roads',
    year: '2026',
    status: 'Tarura',
    image: roadFormationImg,
    scope: [
      '45km Asphalt Paving & Shoulder Widening',
      'Installation of 12 Major Double Box Culverts',
      'Massive Rock Blasting & Embankment Stabilization',
      'Swahili Heritage Community Walkways'
    ]
  },
  {
    id: 'proj-3',
    title: 'Plant Structural Refurbishment',
    location: 'Bulyanhulu Gold Mine',
    category: 'building',
    year: '2025',
    status: 'Acacia',
    image: processPlantImg,
    scope: [
      '120ft Batch Plant High-end Frame',
      'Custom Sun-Shading African Motif Screen',
      'Complete Waste Layout and Recycling',
      'Complete HVAC and High-Speed Fiber Layout',
    ]
  },

    {
    id: 'proj-4',
    title: 'Structural & Tanks Corosion',
    location: 'Buzwagi Gold Mine',
    category: 'water',
    year: '2024',
    status: 'Acacia',
    image: structuralTanksImg,
    scope: [
      'Main Water Control For Sanitary and Saftey',
      '2-Million Litre Reinforced Concrete Reservoir -- Ref',
      'Solar-Powered Intake Station with telemetry controls -- Ref',
      'Local Community Technical Skills Training -- Ref'
    ]
  },
  {
    id: 'proj-5',
    title: 'Sewage & Hydrocarbon',
    location: 'Bulyanhulu Gold Mine',
    category: 'water',
    year: '2022',
    status: 'Acacia',
    image: sewageImg,
    scope: [
      '100km Sewage and waste water Pipeline',
      'Solar-Powered Intake Station with telemetry controls',
      'Local Community Technical Skills Training'
    ]
  },
  {
    id: 'proj-6',
    title: 'Crane Steel Structure Assembling',
    location: 'Bulyanhulu Gold Mine',
    category: 'building',
    year: '2020',
    status: 'Acacia',
    image: craneSteelImg,
    scope: [
      '1000-ton Crane Steel Structure Assembling',
      'Heavy machinery and equipment installation',
    ]
  }
];

export const HAJO_MILESTONES: HajoMilestone[] = [
  {
    year: '2012',
    title: 'Inception in Tanzania',
    swahiliTitle: 'Kuanzishwa Tanzania',
    description: 'HAJOKA ICL was incorporated on 17th August with an incorporation Number: 93083 of the Tanzanian Jurisdiction with headquaters in Kahama.'
  },
  {
    year: '2015',
    title: 'Class Expansion',
    swahiliTitle: 'Kukua kwa Madaraja',
    description: 'Achieved high-tier Contractors Registration Board (CRB) classification Registration Numbers M5/37/10/2015 and C5/823/10/2015.'
  },
  {
    year: '2018',
    title: 'Green Structural Shift',
    swahiliTitle: 'Mabadiliko ya Kijani',
    description: 'Established the provision to a wide range of options for your facilities, natural environment, recycling & Water waste management plus rehabilitation '
  },
  {
    year: '2026',
    title: 'Remixed Digital Blueprint',
    swahiliTitle: 'Mtazamo Mpya wa Kidijitali',
    description: 'Completely overhauled our delivery process to provide transparent 3D schedules and real-time site telemetry for clients.'
  }
];
