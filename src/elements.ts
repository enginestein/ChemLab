// Interface for chemical element properties
interface ChemicalElement {
    name: string | 'unknown';
    symbol: string | 'unknown';
    atomicNumber: number | 'unknown';
    atomicWeight: number | 'unknown';
    period: number | 'unknown';
    group: number | 'unknown';
    phaseAtSTP: 'solid' | 'liquid' | 'gas' |'unknown'; // Standard Temperature and Pressure
    meltingPoint?: number | 'unknown';   // in Kelvin
    boilingPoint?: number| 'unknown';   // in Kelvin
    electronegativity?: number | 'unknown'; // Pauling scale
    density?: number | 'unknown';        // g/cm³ at STP
    isRadioactive?: boolean | 'unknown';
    electronConfiguration: string | 'unknown';
    category: 'alkali metal' | 'alkaline earth metal' | 'transition metal' | 
              'post-transition metal' | 'metalloid' | 'nonmetal' | 
              'halogen' | 'noble gas' | 'lanthanide' | 'actinide' | 'unknown';
}

const oxygen: ChemicalElement = {
    name: 'Oxygen',
    symbol: 'O',
    atomicNumber: 8,
    atomicWeight: 15.999,
    period: 2,
    group: 16,
    phaseAtSTP: 'gas',
    meltingPoint: 54.36,
    boilingPoint: 90.20,
    electronegativity: 3.44,
    density: 0.001429,
    isRadioactive: false,
    electronConfiguration: '[He] 2s2 2p4',
    category: 'nonmetal',
};

const strontium: ChemicalElement = {
    name: 'Strontium',
    symbol: 'Sr',
    atomicNumber: 38,
    atomicWeight: 87.62,
    period: 5,
    group: 2,
    phaseAtSTP: 'solid',
    meltingPoint: 777,    // in Kelvin
    boilingPoint: 1382,   // in Kelvin
    electronegativity: 0.95,
    density: 2.63,        // g/cm³ at STP
    isRadioactive: false,
    electronConfiguration: '[Kr] 5s2',
    category: 'alkaline earth metal',
};

const livermorium: ChemicalElement = {
    name: 'Livermorium',
    symbol: 'Lv',
    atomicNumber: 116,
    atomicWeight: 293,  // Approximate value
    period: 7,
    group: 16,
    phaseAtSTP: 'solid', // Expected phase, as Livermorium's phase at STP is not well-documented
    meltingPoint: 500,   // Approximate value in Kelvin
    boilingPoint: 700,   // Approximate value in Kelvin
    electronegativity: 1.0, // Approximate value
    density: 5.0,        // Approximate value in g/cm³
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p1',
    category: 'post-transition metal',
};


const hydrogen: ChemicalElement = {
    name: 'Hydrogen',
    symbol: 'H',
    atomicNumber: 1,
    atomicWeight: 1.008,
    period: 1,
    group: 1,
    phaseAtSTP: 'gas',
    meltingPoint: 14.01,
    boilingPoint: 20.28,
    electronegativity: 2.20,
    density: 0.00008988,
    isRadioactive: false,
    electronConfiguration: '1s1',
    category: 'nonmetal',
};

const helium: ChemicalElement = {
    name: 'Helium',
    symbol: 'He',
    atomicNumber: 2,
    atomicWeight: 4.0026,
    period: 1,
    group: 18,
    phaseAtSTP: 'gas',
    meltingPoint: 0.95,
    boilingPoint: 4.22,
    electronegativity: undefined,  
    density: 0.0001786,
    isRadioactive: false,
    electronConfiguration: '1s2',
    category: 'noble gas',
};

const lithium: ChemicalElement = {
    name: 'Lithium',
    symbol: 'Li',
    atomicNumber: 3,
    atomicWeight: 6.94,
    period: 2,
    group: 1,
    phaseAtSTP: 'solid',
    meltingPoint: 453.65,
    boilingPoint: 1590,
    electronegativity: 0.98,
    density: 0.534,
    isRadioactive: false,
    electronConfiguration: '[He] 2s1',
    category: 'alkali metal',
};

const beryllium: ChemicalElement = {
    name: 'Beryllium',
    symbol: 'Be',
    atomicNumber: 4,
    atomicWeight: 9.0122,
    period: 2,
    group: 2,
    phaseAtSTP: 'solid',
    meltingPoint: 1560,
    boilingPoint: 2742,
    electronegativity: 1.57,
    density: 1.848,
    isRadioactive: false,
    electronConfiguration: '[He] 2s2',
    category: 'alkaline earth metal',
};

const sodium: ChemicalElement = {
    name: 'Sodium',
    symbol: 'Na',
    atomicNumber: 11,
    atomicWeight: 22.989769,
    period: 3,
    group: 1,
    phaseAtSTP: 'solid',
    meltingPoint: 370.87,
    boilingPoint: 1156,
    electronegativity: 0.93,
    density: 0.971,
    isRadioactive: false,
    electronConfiguration: '[Ne] 3s1',
    category: 'alkali metal',
};

const magnesium: ChemicalElement = {
    name: 'Magnesium',
    symbol: 'Mg',
    atomicNumber: 12,
    atomicWeight: 24.305,
    period: 3,
    group: 2,
    phaseAtSTP: 'solid',
    meltingPoint: 923,
    boilingPoint: 1380,
    electronegativity: 1.31,
    density: 1.738,
    isRadioactive: false,
    electronConfiguration: '[Ne] 3s2',
    category: 'alkaline earth metal',
};

const potassium: ChemicalElement = {
    name: 'Potassium',
    symbol: 'K',
    atomicNumber: 19,
    atomicWeight: 39.098,
    period: 4,
    group: 1,
    phaseAtSTP: 'solid',
    meltingPoint: 336.7,
    boilingPoint: 1032,
    electronegativity: 0.82,
    density: 0.856,
    isRadioactive: false,
    electronConfiguration: '[Ar] 4s1',
    category: 'alkali metal',
};

const calcium: ChemicalElement = {
    name: 'Calcium',
    symbol: 'Ca',
    atomicNumber: 20,
    atomicWeight: 40.078,
    period: 4,
    group: 2,
    phaseAtSTP: 'solid',
    meltingPoint: 1115,
    boilingPoint: 1757,
    electronegativity: 1.00,
    density: 1.54,
    isRadioactive: false,
    electronConfiguration: '[Ar] 4s2',
    category: 'alkaline earth metal',
};


const lanthanum: ChemicalElement = {
    name: 'Lanthanum',
    symbol: 'La',
    atomicNumber: 57,
    atomicWeight: 138.904,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1191,
    boilingPoint: 3737,
    electronegativity: 1.10,
    density: 6.45,
    isRadioactive: false,
    electronConfiguration: '[Xe] 5d1 6s2',
    category: 'lanthanide',
};

const cerium: ChemicalElement = {
    name: 'Cerium',
    symbol: 'Ce',
    atomicNumber: 58,
    atomicWeight: 140.116,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1068,
    boilingPoint: 3718,
    electronegativity: 1.12,
    density: 6.77,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f1 5d1 6s2',
    category: 'lanthanide',
};

const praseodymium: ChemicalElement = {
    name: 'Praseodymium',
    symbol: 'Pr',
    atomicNumber: 59,
    atomicWeight: 140.907,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1208,
    boilingPoint: 3456,
    electronegativity: 1.13,
    density: 6.77,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f3 6s2',
    category: 'lanthanide',
};

const neodymium: ChemicalElement = {
    name: 'Neodymium',
    symbol: 'Nd',
    atomicNumber: 60,
    atomicWeight: 144.242,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1297,
    boilingPoint: 3370,
    electronegativity: 1.14,
    density: 7.01,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f4 6s2',
    category: 'lanthanide',
};

const europium: ChemicalElement = {
    name: 'Europium',
    symbol: 'Eu',
    atomicNumber: 63,
    atomicWeight: 151.964,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1099,
    boilingPoint: 1527,
    electronegativity: 1.20,
    density: 5.24,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f7 6s2',
    category: 'lanthanide',
};

const gadolinium: ChemicalElement = {
    name: 'Gadolinium',
    symbol: 'Gd',
    atomicNumber: 64,
    atomicWeight: 157.25,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1313,
    boilingPoint: 3273,
    electronegativity: 1.20,
    density: 7.90,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f7 5d1 6s2',
    category: 'lanthanide',
};

const terbium: ChemicalElement = {
    name: 'Terbium',
    symbol: 'Tb',
    atomicNumber: 65,
    atomicWeight: 158.925,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1356,
    boilingPoint: 3287,
    electronegativity: 1.20,
    density: 8.23,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f9 6s2',
    category: 'lanthanide',
};

const promethium: ChemicalElement = {
    name: 'Promethium',
    symbol: 'Pm',
    atomicNumber: 61,
    atomicWeight: 144.912,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1315,
    boilingPoint: 3273,
    electronegativity: 1.13,
    density: 7.26,
    isRadioactive: true,
    electronConfiguration: '[Xe] 4f5 6s2',
    category: 'lanthanide',
};


const rubidium: ChemicalElement = {
    name: 'Rubidium',
    symbol: 'Rb',
    atomicNumber: 37,
    atomicWeight: 85.4678,
    period: 5,
    group: 1,
    phaseAtSTP: 'solid',
    meltingPoint: 312.46,  // in Kelvin
    boilingPoint: 688.0,   // in Kelvin
    electronegativity: 0.82,
    density: 1.532,        // g/cm³ at STP
    isRadioactive: false,
    electronConfiguration: '[Kr] 5s1',
    category: 'alkali metal',
};


const dysprosium: ChemicalElement = {
    name: 'Dysprosium',
    symbol: 'Dy',
    atomicNumber: 66,
    atomicWeight: 162.500,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1680,
    boilingPoint: 2840,
    electronegativity: 1.22,
    density: 8.55,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f10 6s2',
    category: 'lanthanide',
};

const holmium: ChemicalElement = {
    name: 'Holmium',
    symbol: 'Ho',
    atomicNumber: 67,
    atomicWeight: 164.930,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1474,
    boilingPoint: 2700,
    electronegativity: 1.23,
    density: 8.79,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f11 6s2',
    category: 'lanthanide',
};

const erbium: ChemicalElement = {
    name: 'Erbium',
    symbol: 'Er',
    atomicNumber: 68,
    atomicWeight: 167.259,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1529,
    boilingPoint: 2868,
    electronegativity: 1.24,
    density: 9.07,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f12 6s2',
    category: 'lanthanide',
};

const thulium: ChemicalElement = {
    name: 'Thulium',
    symbol: 'Tm',
    atomicNumber: 69,
    atomicWeight: 168.934,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1545,
    boilingPoint: 1629,
    electronegativity: 1.25,
    density: 9.32,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f13 6s2',
    category: 'lanthanide',
};

const ytterbium: ChemicalElement = {
    name: 'Ytterbium',
    symbol: 'Yb',
    atomicNumber: 70,
    atomicWeight: 173.04,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1097,
    boilingPoint: 1466,
    electronegativity: 1.10,
    density: 6.97,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 6s2',
    category: 'lanthanide',
};

const lutetium: ChemicalElement = {
    name: 'Lutetium',
    symbol: 'Lu',
    atomicNumber: 71,
    atomicWeight: 174.966,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1663,
    boilingPoint: 3249,
    electronegativity: 1.27,
    density: 9.84,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 5d1 6s2',
    category: 'lanthanide',
};

// Actinides
const actinium: ChemicalElement = {
    name: 'Actinium',
    symbol: 'Ac',
    atomicNumber: 89,
    atomicWeight: 227,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1500,
    boilingPoint: 3200,
    electronegativity: 1.1,
    density: 10.07,
    isRadioactive: true,
    electronConfiguration: '[Rn] 6d1 7s2',
    category: 'actinide',
};

const thorium: ChemicalElement = {
    name: 'Thorium',
    symbol: 'Th',
    atomicNumber: 90,
    atomicWeight: 232.038,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 2115,
    boilingPoint: 3300,
    electronegativity: 1.3,
    density: 11.72,
    isRadioactive: true,
    electronConfiguration: '[Rn] 6d2 7s2',
    category: 'actinide',
};

const protactinium: ChemicalElement = {
    name: 'Protactinium',
    symbol: 'Pa',
    atomicNumber: 91,
    atomicWeight: 231.035,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1572,
    boilingPoint: 4027,
    electronegativity: 1.5,
    density: 15.37,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f2 6d1 7s2',
    category: 'actinide',
};

const uranium: ChemicalElement = {
    name: 'Uranium',
    symbol: 'U',
    atomicNumber: 92,
    atomicWeight: 238.028,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1405,
    boilingPoint: 4131,
    electronegativity: 1.38,
    density: 18.95,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f3 6d1 7s2',
    category: 'actinide',
};

const neptunium: ChemicalElement = {
    name: 'Neptunium',
    symbol: 'Np',
    atomicNumber: 93,
    atomicWeight: 237.048,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 644,
    boilingPoint: 4175,
    electronegativity: 1.36,
    density: 20.45,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f4 6d1 7s2',
    category: 'actinide',
};

const plutonium: ChemicalElement = {
    name: 'Plutonium',
    symbol: 'Pu',
    atomicNumber: 94,
    atomicWeight: 244,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 912,
    boilingPoint: 3232,
    electronegativity: 1.28,
    density: 19.86,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f6 7s2',
    category: 'actinide',
};

const americium: ChemicalElement = {
    name: 'Americium',
    symbol: 'Am',
    atomicNumber: 95,
    atomicWeight: 243,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1176,
    boilingPoint: 2607,
    electronegativity: 1.3,
    density: 13.69,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f7 6d1 7s2',
    category: 'actinide',
};

const curium: ChemicalElement = {
    name: 'Curium',
    symbol: 'Cm',
    atomicNumber: 96,
    atomicWeight: 247,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1340,
    boilingPoint: 3100,
    electronegativity: 1.3,
    density: 13.51,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f7 6d1 7s2',
    category: 'actinide',
};

const berkelium: ChemicalElement = {
    name: 'Berkelium',
    symbol: 'Bk',
    atomicNumber: 97,
    atomicWeight: 247,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 986,
    boilingPoint: 2627,
    electronegativity: 1.3,
    density: 14.78,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f9 7s2',
    category: 'actinide',
};

const californium: ChemicalElement = {
    name: 'Californium',
    symbol: 'Cf',
    atomicNumber: 98,
    atomicWeight: 251,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 900,
    boilingPoint: 1470,
    electronegativity: 1.3,
    density: 15.1,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f10 7s2',
    category: 'actinide',
};

const einsteinium: ChemicalElement = {
    name: 'Einsteinium',
    symbol: 'Es',
    atomicNumber: 99,
    atomicWeight: 252,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 860,
    boilingPoint: 996,
    electronegativity: 1.3,
    density: 8.08,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f11 7s2',
    category: 'actinide',
};

const fermium: ChemicalElement = {
    name: 'Fermium',
    symbol: 'Fm',
    atomicNumber: 100,
    atomicWeight: 257,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1527,
    boilingPoint: 2600,
    electronegativity: 1.3,
    density: 9.7,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f12 7s2',
    category: 'actinide',
};

const mendelevium: ChemicalElement = {
    name: 'Mendelevium',
    symbol: 'Md',
    atomicNumber: 101,
    atomicWeight: 258,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1100,
    boilingPoint: 1500,
    electronegativity: 1.3,
    density: 10.3,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f13 7s2',
    category: 'actinide',
};

const nobelium: ChemicalElement = {
    name: 'Nobelium',
    symbol: 'No',
    atomicNumber: 102,
    atomicWeight: 259,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 827,
    boilingPoint: 1577,
    electronegativity: 1.3,
    density: 9.9,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 7s2',
    category: 'actinide',
};

const lawrencium: ChemicalElement = {
    name: 'Lawrencium',
    symbol: 'Lr',
    atomicNumber: 103,
    atomicWeight: 262,
    period: 7,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1627,
    boilingPoint: 3460,
    electronegativity: 1.3,
    density: 15.6,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 7s2 7p1',
    category: 'actinide',
};

const samarium: ChemicalElement = {
    name: 'Samarium',
    symbol: 'Sm',
    atomicNumber: 62,
    atomicWeight: 150.36,
    period: 6,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1072,
    boilingPoint: 1900,
    electronegativity: 1.17,
    density: 7.52,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f6 6s2',
    category: 'lanthanide',
};

const caesium: ChemicalElement = {
    name: 'Caesium',
    symbol: 'Cs',
    atomicNumber: 55,
    atomicWeight: 132.90545196,
    period: 6,
    group: 1,
    phaseAtSTP: 'solid',
    meltingPoint: 301.59,  // in Kelvin
    boilingPoint: 671.0,   // in Kelvin
    electronegativity: 0.79,
    density: 1.933,        // g/cm³ at STP
    isRadioactive: false,
    electronConfiguration: '[Xe] 6s1',
    category: 'alkali metal',
};

const francium: ChemicalElement = {
    name: 'Francium',
    symbol: 'Fr',
    atomicNumber: 87,
    atomicWeight: 223,  // Approximate value
    period: 7,
    group: 1,
    phaseAtSTP: 'solid', // Expected phase, as Francium is highly radioactive and its phase at STP is not well-documented
    meltingPoint: 300,   // Approximate value in Kelvin
    boilingPoint: 950,   // Approximate value in Kelvin
    electronegativity: 0.7, // Approximate value
    density: 1.87,       // Approximate value in g/cm³
    isRadioactive: true,
    electronConfiguration: '[Rn] 7s1',
    category: 'alkali metal',
};

const barium: ChemicalElement = {
    name: 'Barium',
    symbol: 'Ba',
    atomicNumber: 56,
    atomicWeight: 137.33,
    period: 6,
    group: 2,
    phaseAtSTP: 'solid',
    meltingPoint: 1000,    // in Kelvin
    boilingPoint: 1890,    // in Kelvin
    electronegativity: 0.89,
    density: 3.62,         // g/cm³ at STP
    isRadioactive: false,
    electronConfiguration: '[Xe] 6s2',
    category: 'alkaline earth metal',
};


const radium: ChemicalElement = {
    name: 'Radium',
    symbol: 'Ra',
    atomicNumber: 88,
    atomicWeight: 226,    // Approximate value
    period: 7,
    group: 2,
    phaseAtSTP: 'solid',  // Expected phase, as Radium is highly radioactive and its phase at STP is not well-documented
    meltingPoint: 1413,   // Approximate value in Kelvin
    boilingPoint: 1413,   // Approximate value in Kelvin
    electronegativity: 0.90, // Approximate value
    density: 5.5,         // Approximate value in g/cm³
    isRadioactive: true,
    electronConfiguration: '[Rn] 7s2',
    category: 'alkaline earth metal',
};


const boron: ChemicalElement = {
    name: 'Boron',
    symbol: 'B',
    atomicNumber: 5,
    atomicWeight: 10.81,
    period: 2,
    group: 13,
    phaseAtSTP: 'solid',
    meltingPoint: 2349,  // Kelvin
    boilingPoint: 4200,  // Kelvin
    electronegativity: 2.04,
    density: 2.46,  // g/cm³
    isRadioactive: false,
    electronConfiguration: '[He] 2s2 2p1',
    category: 'metalloid',
};

const aluminum: ChemicalElement = {
    name: 'Aluminum',
    symbol: 'Al',
    atomicNumber: 13,
    atomicWeight: 26.98,
    period: 3,
    group: 13,
    phaseAtSTP: 'solid',
    meltingPoint: 933.47,  // Kelvin
    boilingPoint: 2792,   // Kelvin
    electronegativity: 1.61,
    density: 2.70,  // g/cm³
    isRadioactive: false,
    electronConfiguration: '[Ne] 3s2 3p1',
    category: 'post-transition metal',
};

const gallium: ChemicalElement = {
    name: 'Gallium',
    symbol: 'Ga',
    atomicNumber: 31,
    atomicWeight: 69.72,
    period: 4,
    group: 13,
    phaseAtSTP: 'solid',
    meltingPoint: 302.91,  // Kelvin
    boilingPoint: 2204,    // Kelvin
    electronegativity: 1.81,
    density: 5.91,  // g/cm³
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d10 4s2 4p1',
    category: 'post-transition metal',
};

const indium: ChemicalElement = {
    name: 'Indium',
    symbol: 'In',
    atomicNumber: 49,
    atomicWeight: 114.82,
    period: 5,
    group: 13,
    phaseAtSTP: 'solid',
    meltingPoint: 429.75,  // Kelvin
    boilingPoint: 2345,    // Kelvin
    electronegativity: 1.78,
    density: 7.31,  // g/cm³
    isRadioactive: false,
    electronConfiguration: '[Kr] 4d10 5s2 5p1',
    category: 'post-transition metal',
};

const thallium: ChemicalElement = {
    name: 'Thallium',
    symbol: 'Tl',
    atomicNumber: 81,
    atomicWeight: 204.38,
    period: 6,
    group: 13,
    phaseAtSTP: 'solid',
    meltingPoint: 577,  // Kelvin
    boilingPoint: 1746,  // Kelvin
    electronegativity: 1.62,
    density: 11.85,  // g/cm³
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 5d10 6s2 6p1',
    category: 'post-transition metal',
};

const nihonium: ChemicalElement = {
    name: 'Nihonium',
    symbol: 'Nh',
    atomicNumber: 113,
    atomicWeight: 286,  // Approximate value
    period: 7,
    group: 13,
    phaseAtSTP: 'solid', // Expected phase, as Nihonium is a synthetic element
    meltingPoint: null, // Not well-documented
    boilingPoint: null, // Not well-documented
    electronegativity: null, // Not well-documented
    density: null, // Not well-documented
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p1',
    category: 'post-transition metal',
};

const carbon: ChemicalElement = {
    name: 'Carbon',
    symbol: 'C',
    atomicNumber: 6,
    atomicWeight: 12.01,
    period: 2,
    group: 14,
    phaseAtSTP: 'solid',
    meltingPoint: 3915,  // Graphite form
    boilingPoint: 4300,  // Graphite form
    electronegativity: 2.55,
    density: 2.267,  // Graphite form
    isRadioactive: false,
    electronConfiguration: '[He] 2s2 2p2',
    category: 'nonmetal',
};

const silicon: ChemicalElement = {
    name: 'Silicon',
    symbol: 'Si',
    atomicNumber: 14,
    atomicWeight: 28.085,
    period: 3,
    group: 14,
    phaseAtSTP: 'solid',
    meltingPoint: 1687,
    boilingPoint: 2900,
    electronegativity: 1.90,
    density: 2.329,
    isRadioactive: false,
    electronConfiguration: '[Ne] 3s2 3p2',
    category: 'metalloid',
};

const germanium: ChemicalElement = {
    name: 'Germanium',
    symbol: 'Ge',
    atomicNumber: 32,
    atomicWeight: 72.63,
    period: 4,
    group: 14,
    phaseAtSTP: 'solid',
    meltingPoint: 1211,
    boilingPoint: 2833,
    electronegativity: 2.01,
    density: 5.323,
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d10 4s2 4p2',
    category: 'metalloid',
};

const tin: ChemicalElement = {
    name: 'Tin',
    symbol: 'Sn',
    atomicNumber: 50,
    atomicWeight: 118.71,
    period: 5,
    group: 14,
    phaseAtSTP: 'solid',
    meltingPoint: 231.93,
    boilingPoint: 2602,
    electronegativity: 1.96,
    density: 7.310,
    isRadioactive: false,
    electronConfiguration: '[Kr] 4d10 5s2 5p2',
    category: 'post-transition metal',
};

const lead: ChemicalElement = {
    name: 'Lead',
    symbol: 'Pb',
    atomicNumber: 82,
    atomicWeight: 207.2,
    period: 6,
    group: 14,
    phaseAtSTP: 'solid',
    meltingPoint: 327.46,
    boilingPoint: 1749,
    electronegativity: 2.33,
    density: 11.34,
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 5d10 6s2 6p2',
    category: 'post-transition metal',
};

const nitrogen: ChemicalElement = {
    name: 'Nitrogen',
    symbol: 'N',
    atomicNumber: 7,
    atomicWeight: 14.007,
    period: 2,
    group: 15,
    phaseAtSTP: 'gas',
    meltingPoint: 63.15,  // Kelvin
    boilingPoint: 77.36,  // Kelvin
    electronegativity: 3.04,
    density: 0.0012506,   // g/cm³
    isRadioactive: false,
    electronConfiguration: '[He] 2s2 2p3',
    category: 'nonmetal',
};

const phosphorus: ChemicalElement = {
    name: 'Phosphorus',
    symbol: 'P',
    atomicNumber: 15,
    atomicWeight: 30.974,
    period: 3,
    group: 15,
    phaseAtSTP: 'solid',
    meltingPoint: 317.3,  // Kelvin
    boilingPoint: 553,    // Kelvin
    electronegativity: 2.19,
    density: 1.82,        // g/cm³
    isRadioactive: false,
    electronConfiguration: '[Ne] 3s2 3p3',
    category: 'nonmetal',
};

const arsenic: ChemicalElement = {
    name: 'Arsenic',
    symbol: 'As',
    atomicNumber: 33,
    atomicWeight: 74.92160,
    period: 4,
    group: 15,
    phaseAtSTP: 'solid',
    meltingPoint: 817,    // Kelvin
    boilingPoint: 614,    // Kelvin
    electronegativity: 2.18,
    density: 5.72,        // g/cm³
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d10 4s2 4p3',
    category: 'metalloid',
};

const antimony: ChemicalElement = {
    name: 'Antimony',
    symbol: 'Sb',
    atomicNumber: 51,
    atomicWeight: 121.760,
    period: 5,
    group: 15,
    phaseAtSTP: 'solid',
    meltingPoint: 903.78, // Kelvin
    boilingPoint: 1860,   // Kelvin
    electronegativity: 2.05,
    density: 6.697,       // g/cm³
    isRadioactive: false,
    electronConfiguration: '[Kr] 4d10 5s2 5p3',
    category: 'post-transition metal',
};

const bismuth: ChemicalElement = {
    name: 'Bismuth',
    symbol: 'Bi',
    atomicNumber: 83,
    atomicWeight: 208.980,
    period: 6,
    group: 15,
    phaseAtSTP: 'solid',
    meltingPoint: 544.7,  // Kelvin
    boilingPoint: 1837,   // Kelvin
    electronegativity: 1.97,
    density: 9.78,        // g/cm³
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 5d10 6s2 6p3',
    category: 'post-transition metal',
};


const sulfur: ChemicalElement = {
    name: 'Sulfur',
    symbol: 'S',
    atomicNumber: 16,
    atomicWeight: 32.06,
    period: 3,
    group: 16,
    phaseAtSTP: 'solid',
    meltingPoint: 388.36, // Kelvin
    boilingPoint: 718,    // Kelvin
    electronegativity: 2.58,
    density: 2.07, // g/cm³
    isRadioactive: false,
    electronConfiguration: '[Ne] 3s2 3p4',
    category: 'nonmetal',
};

const selenium: ChemicalElement = {
    name: 'Selenium',
    symbol: 'Se',
    atomicNumber: 34,
    atomicWeight: 78.971,
    period: 4,
    group: 16,
    phaseAtSTP: 'solid',
    meltingPoint: 458,    // Kelvin
    boilingPoint: 685,    // Kelvin
    electronegativity: 2.55,
    density: 4.82, // g/cm³
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d10 4s2 4p4',
    category: 'metalloid',
};

const tellurium: ChemicalElement = {
    name: 'Tellurium',
    symbol: 'Te',
    atomicNumber: 52,
    atomicWeight: 127.60,
    period: 5,
    group: 16,
    phaseAtSTP: 'solid',
    meltingPoint: 722.66, // Kelvin
    boilingPoint: 1261,   // Kelvin
    electronegativity: 2.10,
    density: 6.24, // g/cm³
    isRadioactive: false,
    electronConfiguration: '[Kr] 4d10 5s2 5p4',
    category: 'metalloid',
};

const polonium: ChemicalElement = {
    name: 'Polonium',
    symbol: 'Po',
    atomicNumber: 84,
    atomicWeight: 209,
    period: 6,
    group: 16,
    phaseAtSTP: 'solid',
    meltingPoint: 527,    // Kelvin
    boilingPoint: 1235,   // Kelvin
    electronegativity: 2.0,
    density: 9.17, // g/cm³
    isRadioactive: true,
    electronConfiguration: '[Xe] 4f14 5d10 6s2 6p4',
    category: 'post-transition metal',
};

const flevorium: ChemicalElement = {
    name: 'Flevorium',
    symbol: 'Fl',
    atomicNumber: 114,
    atomicWeight: 289, // Approximate value
    period: 7,
    group: 14,
    phaseAtSTP: 'solid', // Expected phase based on its position in the periodic table
    meltingPoint: 330,  // Approximate value in Kelvin
    boilingPoint: 420,  // Approximate value in Kelvin
    electronegativity: 1.0, // Approximate value
    density: 14.0,     // Approximate value in g/cm³
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p1',
    category: 'post-transition metal',
};


const fluorine: ChemicalElement = {
    name: 'Fluorine',
    symbol: 'F',
    atomicNumber: 9,
    atomicWeight: 18.998,
    period: 2,
    group: 17,
    phaseAtSTP: 'gas',
    meltingPoint: 53.5,  // in Kelvin
    boilingPoint: 85.0,  // in Kelvin
    electronegativity: 3.98,
    density: 0.0017,    // in g/cm³
    isRadioactive: false,
    electronConfiguration: '[He] 2s2 2p5',
    category: 'halogen',
};

const chlorine: ChemicalElement = {
    name: 'Chlorine',
    symbol: 'Cl',
    atomicNumber: 17,
    atomicWeight: 35.45,
    period: 3,
    group: 17,
    phaseAtSTP: 'gas',
    meltingPoint: 171.6,  // in Kelvin
    boilingPoint: 239.1,  // in Kelvin
    electronegativity: 3.16,
    density: 0.0032,    // in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Ne] 3s2 3p5',
    category: 'halogen',
};

const bromine: ChemicalElement = {
    name: 'Bromine',
    symbol: 'Br',
    atomicNumber: 35,
    atomicWeight: 79.904,
    period: 4,
    group: 17,
    phaseAtSTP: 'liquid',
    meltingPoint: 265.8,  // in Kelvin
    boilingPoint: 331.8,  // in Kelvin
    electronegativity: 2.96,
    density: 3.102,     // in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Ar] 4s2 3d10 4p5',
    category: 'halogen',
};

const iodine: ChemicalElement = {
    name: 'Iodine',
    symbol: 'I',
    atomicNumber: 53,
    atomicWeight: 126.90,
    period: 5,
    group: 17,
    phaseAtSTP: 'solid',
    meltingPoint: 387.0,  // in Kelvin
    boilingPoint: 457.4,  // in Kelvin
    electronegativity: 2.66,
    density: 4.933,     // in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Kr] 5s2 4d10 5p5',
    category: 'halogen',
};

const astatine: ChemicalElement = {
    name: 'Astatine',
    symbol: 'At',
    atomicNumber: 85,
    atomicWeight: 210,  // Approximate value
    period: 6,
    group: 17,
    phaseAtSTP: 'solid', // Expected phase, as Astatine is highly radioactive and its phase at STP is not well-documented
    meltingPoint: 575,   // Approximate value in Kelvin
    boilingPoint: 610,   // Approximate value in Kelvin
    electronegativity: 2.2,  // Approximate value
    density: 7.0,       // Approximate value in g/cm³
    isRadioactive: true,
    electronConfiguration: '[Xe] 4f14 5d10 6s2 6p5',
    category: 'halogen',
};

const tennessine: ChemicalElement = {
    name: 'Tennessine',
    symbol: 'Ts',
    atomicNumber: 117,
    atomicWeight: 294,  // Approximate value
    period: 7,
    group: 17,
    phaseAtSTP: 'solid', // Expected phase, as Tennessine is highly radioactive and its phase at STP is not well-documented
    meltingPoint: 723,   // Approximate value in Kelvin
    boilingPoint: 900,   // Approximate value in Kelvin
    electronegativity: 1.0,  // Approximate value
    density: 7.5,       // Approximate value in g/cm³
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p5',
    category: 'halogen',
};


const neon: ChemicalElement = {
    name: 'Neon',
    symbol: 'Ne',
    atomicNumber: 10,
    atomicWeight: 20.1797,
    period: 2,
    group: 18,
    phaseAtSTP: 'gas',
    meltingPoint: 24.56, // Kelvin
    boilingPoint: 27.07, // Kelvin
    electronegativity: null, // Not applicable for noble gases
    density: 0.0008999, // g/cm³
    isRadioactive: false,
    electronConfiguration: '1s2 2s2 2p6',
    category: 'noble gas',
};

const argon: ChemicalElement = {
    name: 'Argon',
    symbol: 'Ar',
    atomicNumber: 18,
    atomicWeight: 39.948,
    period: 3,
    group: 18,
    phaseAtSTP: 'gas',
    meltingPoint: 83.8, // Kelvin
    boilingPoint: 87.3, // Kelvin
    electronegativity: null, // Not applicable for noble gases
    density: 0.0017837, // g/cm³
    isRadioactive: false,
    electronConfiguration: '1s2 2s2 2p6 3s2 3p6',
    category: 'noble gas',
};

const krypton: ChemicalElement = {
    name: 'Krypton',
    symbol: 'Kr',
    atomicNumber: 36,
    atomicWeight: 83.798,
    period: 4,
    group: 18,
    phaseAtSTP: 'gas',
    meltingPoint: 115.79, // Kelvin
    boilingPoint: 119.93, // Kelvin
    electronegativity: null, // Not applicable for noble gases
    density: 0.003733, // g/cm³
    isRadioactive: false,
    electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6',
    category: 'noble gas',
};

const xenon: ChemicalElement = {
    name: 'Xenon',
    symbol: 'Xe',
    atomicNumber: 54,
    atomicWeight: 131.293,
    period: 5,
    group: 18,
    phaseAtSTP: 'gas',
    meltingPoint: 161.4, // Kelvin
    boilingPoint: 165.03, // Kelvin
    electronegativity: null, // Not applicable for noble gases
    density: 0.005887, // g/cm³
    isRadioactive: false,
    electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6',
    category: 'noble gas',
};

const radon: ChemicalElement = {
    name: 'Radon',
    symbol: 'Rn',
    atomicNumber: 86,
    atomicWeight: 222, // Approximate value
    period: 6,
    group: 18,
    phaseAtSTP: 'gas',
    meltingPoint: 202, // Kelvin
    boilingPoint: 211, // Kelvin
    electronegativity: null, // Not applicable for noble gases
    density: 0.00973, // g/cm³
    isRadioactive: true,
    electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6',
    category: 'noble gas',
};

const yttrium: ChemicalElement = {
    name: 'Yttrium',
    symbol: 'Y',
    atomicNumber: 39,
    atomicWeight: 88.906,  // Approximate value
    period: 5,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1799,   // Approximate value in Kelvin
    boilingPoint: 3246,   // Approximate value in Kelvin
    electronegativity: 1.22, // Approximate value
    density: 4.47,        // Approximate value in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Kr] 4d1 5s2',
    category: 'transition metal',
};


const scandium: ChemicalElement = {
    name: 'Scandium',
    symbol: 'Sc',
    atomicNumber: 21,
    atomicWeight: 44.955,  // Approximate value
    period: 4,
    group: 3,
    phaseAtSTP: 'solid',
    meltingPoint: 1814,   // Approximate value in Kelvin
    boilingPoint: 3109,   // Approximate value in Kelvin
    electronegativity: 1.36, // Approximate value
    density: 2.98,        // Approximate value in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d1 4s2',
    category: 'transition metal',
};


const titanium: ChemicalElement = {
    name: 'Titanium',
    symbol: 'Ti',
    atomicNumber: 22,
    atomicWeight: 47.867,  // Approximate value
    period: 4,
    group: 4,
    phaseAtSTP: 'solid',
    meltingPoint: 1885,   // Approximate value in Kelvin
    boilingPoint: 3287,   // Approximate value in Kelvin
    electronegativity: 1.54, // Approximate value
    density: 4.54,        // Approximate value in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d2 4s2',
    category: 'transition metal',
};

const zirconium: ChemicalElement = {
    name: 'Zirconium',
    symbol: 'Zr',
    atomicNumber: 40,
    atomicWeight: 91.224,  // Approximate value
    period: 5,
    group: 4,
    phaseAtSTP: 'solid',
    meltingPoint: 2135,   // Approximate value in Kelvin
    boilingPoint: 4682,   // Approximate value in Kelvin
    electronegativity: 1.33, // Approximate value
    density: 6.52,        // Approximate value in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Kr] 4d2 5s2',
    category: 'transition metal',
};

const hafnium: ChemicalElement = {
    name: 'Hafnium',
    symbol: 'Hf',
    atomicNumber: 72,
    atomicWeight: 178.49,  // Approximate value
    period: 6,
    group: 4,
    phaseAtSTP: 'solid',
    meltingPoint: 2506,   // Approximate value in Kelvin
    boilingPoint: 4876,   // Approximate value in Kelvin
    electronegativity: 1.30, // Approximate value
    density: 13.31,       // Approximate value in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 5d2 6s2',
    category: 'transition metal',
};

const rutherfordium: ChemicalElement = {
    name: 'Rutherfordium',
    symbol: 'Rf',
    atomicNumber: 104,
    atomicWeight: 267,  // Approximate value
    period: 7,
    group: 4,
    phaseAtSTP: 'unknown', // Expected phase is not well-documented
    meltingPoint: 2100,   // Approximate value in Kelvin
    boilingPoint: 5500,   // Approximate value in Kelvin
    electronegativity: 'unknown',
    density: 'unknown',   // Approximate value not well-documented
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d2 7s2',
    category: 'transition metal',
};

const vanadium: ChemicalElement = {
    name: 'Vanadium',
    symbol: 'V',
    atomicNumber: 23,
    atomicWeight: 50.9415,
    period: 4,
    group: 5,
    phaseAtSTP: 'solid',
    meltingPoint: 2183, // Approximate value in Kelvin
    boilingPoint: 2910, // Approximate value in Kelvin
    electronegativity: 1.63,
    density: 6.11, // Approximate value in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d3 4s2',
    category: 'transition metal',
};

const niobium: ChemicalElement = {
    name: 'Niobium',
    symbol: 'Nb',
    atomicNumber: 41,
    atomicWeight: 92.90637,
    period: 5,
    group: 5,
    phaseAtSTP: 'solid',
    meltingPoint: 2750, // Approximate value in Kelvin
    boilingPoint: 4744, // Approximate value in Kelvin
    electronegativity: 1.6,
    density: 8.57, // Approximate value in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Kr] 4d4 5s1',
    category: 'transition metal',
};

const tantalum: ChemicalElement = {
    name: 'Tantalum',
    symbol: 'Ta',
    atomicNumber: 73,
    atomicWeight: 180.947,
    period: 6,
    group: 5,
    phaseAtSTP: 'solid',
    meltingPoint: 3290, // Approximate value in Kelvin
    boilingPoint: 5731, // Approximate value in Kelvin
    electronegativity: 1.5,
    density: 16.69, // Approximate value in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 5d3 6s2',
    category: 'transition metal',
};

const dubnium: ChemicalElement = {
    name: 'Dubnium',
    symbol: 'Db',
    atomicNumber: 105,
    atomicWeight: 268,
    period: 7,
    group: 5,
    phaseAtSTP: 'unknown',
    meltingPoint: 2830, // Approximate value in Kelvin
    boilingPoint: 3500, // Approximate value in Kelvin
    electronegativity: undefined,
    density: undefined,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d3 7s2',
    category: 'transition metal',
};

const chromium: ChemicalElement = {
    name: 'Chromium',
    symbol: 'Cr',
    atomicNumber: 24,
    atomicWeight: 51.9961,
    period: 4,
    group: 6,
    phaseAtSTP: 'solid',
    meltingPoint: 2180, // Approximate value in Kelvin
    boilingPoint: 2944, // Approximate value in Kelvin
    electronegativity: 1.66,
    density: 7.14, // Approximate value in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d5 4s1',
    category: 'transition metal',
};

const molybdenum: ChemicalElement = {
    name: 'Molybdenum',
    symbol: 'Mo',
    atomicNumber: 42,
    atomicWeight: 95.95,
    period: 5,
    group: 6,
    phaseAtSTP: 'solid',
    meltingPoint: 2896, // Approximate value in Kelvin
    boilingPoint: 4912, // Approximate value in Kelvin
    electronegativity: 2.16,
    density: 10.28, // Approximate value in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Kr] 4d5 5s1',
    category: 'transition metal',
};

const tungsten: ChemicalElement = {
    name: 'Tungsten',
    symbol: 'W',
    atomicNumber: 74,
    atomicWeight: 183.84,
    period: 6,
    group: 6,
    phaseAtSTP: 'solid',
    meltingPoint: 3422, // Approximate value in Kelvin
    boilingPoint: 5555, // Approximate value in Kelvin
    electronegativity: 2.36,
    density: 19.25, // Approximate value in g/cm³
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 5d4 6s2',
    category: 'transition metal',
};

const seaborgium: ChemicalElement = {
    name: 'Seaborgium',
    symbol: 'Sg',
    atomicNumber: 106,
    atomicWeight: 271,
    period: 7,
    group: 6,
    phaseAtSTP: 'unknown',
    meltingPoint: 2700, // Approximate value in Kelvin
    boilingPoint: 3300, // Approximate value in Kelvin
    electronegativity: undefined,
    density: undefined,
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d4 7s2',
    category: 'transition metal',
};

const nickel: ChemicalElement = {
    name: 'Nickel',
    symbol: 'Ni',
    atomicNumber: 28,
    atomicWeight: 58.6934,  
    period: 4,
    group: 10,
    phaseAtSTP: 'solid',
    meltingPoint: 1728,   
    boilingPoint: 3003,   
    electronegativity: 1.91, 
    density: 8.908,       
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d8 4s2',
    category: 'transition metal',
};

const palladium: ChemicalElement = {
    name: 'Palladium',
    symbol: 'Pd',
    atomicNumber: 46,
    atomicWeight: 106.42,  
    period: 5,
    group: 10,
    phaseAtSTP: 'solid',
    meltingPoint: 1554,   
    boilingPoint: 2963,   
    electronegativity: 2.2, 
    density: 12.023,       
    isRadioactive: false,
    electronConfiguration: '[Kr] 4d10',
    category: 'transition metal',
};

const platinum: ChemicalElement = {
    name: 'Platinum',
    symbol: 'Pt',
    atomicNumber: 78,
    atomicWeight: 195.084,  
    period: 6,
    group: 10,
    phaseAtSTP: 'solid',
    meltingPoint: 2041,   
    boilingPoint: 4098,   
    electronegativity: 2.28, 
    density: 21.45,       
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 5d9 6s1',
    category: 'transition metal',
};

const darmstadtium: ChemicalElement = {
    name: 'Darmstadtium',
    symbol: 'Ds',
    atomicNumber: 110,
    atomicWeight: 281,  // Approximate value
    period: 7,
    group: 10,
    phaseAtSTP: 'unknown', 
    meltingPoint: 0,   
    boilingPoint: 0,   
    electronegativity: 0, 
    density: 0,       
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p1',
    category: 'transition metal',
};

const copper: ChemicalElement = {
    name: 'Copper',
    symbol: 'Cu',
    atomicNumber: 29,
    atomicWeight: 63.546,  
    period: 4,
    group: 11,
    phaseAtSTP: 'solid',
    meltingPoint: 1357,   
    boilingPoint: 2835,   
    electronegativity: 1.9, 
    density: 8.96,       
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d10 4s1',
    category: 'transition metal',
};

const silver: ChemicalElement = {
    name: 'Silver',
    symbol: 'Ag',
    atomicNumber: 47,
    atomicWeight: 107.8682,  
    period: 5,
    group: 11,
    phaseAtSTP: 'solid',
    meltingPoint: 1234,   
    boilingPoint: 2162,   
    electronegativity: 1.93, 
    density: 10.49,       
    isRadioactive: false,
    electronConfiguration: '[Kr] 4d10 5s1',
    category: 'transition metal',
};

const gold: ChemicalElement = {
    name: 'Gold',
    symbol: 'Au',
    atomicNumber: 79,
    atomicWeight: 196.9665,  
    period: 6,
    group: 11,
    phaseAtSTP: 'solid',
    meltingPoint: 1337,   
    boilingPoint: 3129,   
    electronegativity: 2.54, 
    density: 19.3,       
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 5d10 6s1',
    category: 'transition metal',
};

const roentgenium: ChemicalElement = {
    name: 'Roentgenium',
    symbol: 'Rg',
    atomicNumber: 111,
    atomicWeight: 282,  // Approximate value
    period: 7,
    group: 11,
    phaseAtSTP: 'unknown', 
    meltingPoint: 0,   
    boilingPoint: 0,   
    electronegativity: 0, 
    density: 0,       
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p1',
    category: 'transition metal',
};


const zinc: ChemicalElement = {
    name: 'Zinc',
    symbol: 'Zn',
    atomicNumber: 30,
    atomicWeight: 65.409,  
    period: 4,
    group: 12,
    phaseAtSTP: 'solid',
    meltingPoint: 692,   
    boilingPoint: 1180,   
    electronegativity: 1.65, 
    density: 7.14,       
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d10 4s2',
    category: 'post-transition metal',
};

const cadmium: ChemicalElement = {
    name: 'Cadmium',
    symbol: 'Cd',
    atomicNumber: 48,
    atomicWeight: 112.414,  
    period: 5,
    group: 12,
    phaseAtSTP: 'solid',
    meltingPoint: 594,   
    boilingPoint: 1040,   
    electronegativity: 1.69, 
    density: 8.65,       
    isRadioactive: false,
    electronConfiguration: '[Kr] 4d10 5s2',
    category: 'post-transition metal',
};

const mercury: ChemicalElement = {
    name: 'Mercury',
    symbol: 'Hg',
    atomicNumber: 80,
    atomicWeight: 200.592,  
    period: 6,
    group: 12,
    phaseAtSTP: 'liquid',
    meltingPoint: 234,   
    boilingPoint: 630,   
    electronegativity: 2.0, 
    density: 13.546,       
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 5d10 6s2',
    category: 'post-transition metal',
};

const copernicium: ChemicalElement = {
    name: 'Copernicium',
    symbol: 'Cn',
    atomicNumber: 112,
    atomicWeight: 285,  // Approximate value
    period: 7,
    group: 12,
    phaseAtSTP: 'unknown',  // Copernicium is a synthetic element and its phase at STP is not well-determined
    meltingPoint: 'unknown',  // Data is not well-established due to its short half-life
    boilingPoint: 'unknown',  // Data is not well-established due to its short half-life
    electronegativity: 'unknown',  // Electronegativity is not well-determined
    density: 'unknown',  // Density is not well-established
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p1',  // Predicted configuration based on periodic trends
    category: 'post-transition metal',  // Based on its position in the periodic table
};

const manganese: ChemicalElement = {
    name: 'Manganese',
    symbol: 'Mn',
    atomicNumber: 25,
    atomicWeight: 54.938045,  
    period: 4,
    group: 7,
    phaseAtSTP: 'solid',
    meltingPoint: 1519,   
    boilingPoint: 2334,   
    electronegativity: 1.55, 
    density: 7.21,       
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d5 4s2',
    category: 'transition metal',
};

const technetium: ChemicalElement = {
    name: 'Technetium',
    symbol: 'Tc',
    atomicNumber: 43,
    atomicWeight: 98,  
    period: 5,
    group: 7,
    phaseAtSTP: 'solid',
    meltingPoint: 2200,   
    boilingPoint: 5150,   
    electronegativity: 1.9, 
    density: 11.5,       
    isRadioactive: true,
    electronConfiguration: '[Kr] 4d5 5s2',
    category: 'transition metal',
};

const rhenium: ChemicalElement = {
    name: 'Rhenium',
    symbol: 'Re',
    atomicNumber: 75,
    atomicWeight: 186.207,  
    period: 6,
    group: 7,
    phaseAtSTP: 'solid',
    meltingPoint: 3186,   
    boilingPoint: 5630,   
    electronegativity: 1.9, 
    density: 20.73,       
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 5d5 6s2',
    category: 'transition metal',
};

const bohrium: ChemicalElement = {
    name: 'Bohrium',
    symbol: 'Bh',
    atomicNumber: 107,
    atomicWeight: 264,  // Approximate value
    period: 7,
    group: 7,
    phaseAtSTP: 'unknown', 
    meltingPoint: 0,   
    boilingPoint: 0,   
    electronegativity: 0, 
    density: 0,       
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d5 7s2 7p1',
    category: 'transition metal',
};

const iron: ChemicalElement = {
    name: 'Iron',
    symbol: 'Fe',
    atomicNumber: 26,
    atomicWeight: 55.847,  
    period: 4,
    group: 8,
    phaseAtSTP: 'solid',
    meltingPoint: 1811,   
    boilingPoint: 3134,   
    electronegativity: 1.83, 
    density: 7.9,       
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d6 4s2',
    category: 'transition metal',
};

const ruthenium: ChemicalElement = {
    name: 'Ruthenium',
    symbol: 'Ru',
    atomicNumber: 44,
    atomicWeight: 101.07,  
    period: 5,
    group: 8,
    phaseAtSTP: 'solid',
    meltingPoint: 2607,   
    boilingPoint: 4423,   
    electronegativity: 2.2, 
    density: 12.37,       
    isRadioactive: false,
    electronConfiguration: '[Kr] 4d7 5s1',
    category: 'transition metal',
};

const osmium: ChemicalElement = {
    name: 'Osmium',
    symbol: 'Os',
    atomicNumber: 76,
    atomicWeight: 190.23,  
    period: 6,
    group: 8,
    phaseAtSTP: 'solid',
    meltingPoint: 3045,   
    boilingPoint: 5027,   
    electronegativity: 2.2, 
    density: 22.59,       
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 5d6 6s2',
    category: 'transition metal',
};

const hassium: ChemicalElement = {
    name: 'Hassium',
    symbol: 'Hs',
    atomicNumber: 108,
    atomicWeight: 269,  // Approximate value
    period: 7,
    group: 8,
    phaseAtSTP: 'unknown', 
    meltingPoint: 0,   
    boilingPoint: 0,   
    electronegativity: 0, 
    density: 0,       
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d6 7s2 7p1',
    category: 'transition metal',
};

const cobalt: ChemicalElement = {
    name: 'Cobalt',
    symbol: 'Co',
    atomicNumber: 27,
    atomicWeight: 58.933195,  
    period: 4,
    group: 9,
    phaseAtSTP: 'solid',
    meltingPoint: 1768,   
    boilingPoint: 2927,   
    electronegativity: 1.88, 
    density: 8.9,       
    isRadioactive: false,
    electronConfiguration: '[Ar] 3d7 4s2',
    category: 'transition metal',
};

const rhodium: ChemicalElement = {
    name: 'Rhodium',
    symbol: 'Rh',
    atomicNumber: 45,
    atomicWeight: 102.9055,  
    period: 5,
    group: 9,
    phaseAtSTP: 'solid',
    meltingPoint: 1966,   
    boilingPoint: 3727,   
    electronegativity: 2.28, 
    density: 12.31,       
    isRadioactive: false,
    electronConfiguration: '[Kr] 4d8 5s1',
    category: 'transition metal',
};

const iridium: ChemicalElement = {
    name: 'Iridium',
    symbol: 'Ir',
    atomicNumber: 77,
    atomicWeight: 192.217,  
    period: 6,
    group: 9,
    phaseAtSTP: 'solid',
    meltingPoint: 2466,   
    boilingPoint: 4428,   
    electronegativity: 2.2, 
    density: 22.32,       
    isRadioactive: false,
    electronConfiguration: '[Xe] 4f14 5d7 6s2',
    category: 'transition metal',
};

const meitnerium: ChemicalElement = {
    name: 'Meitnerium',
    symbol: 'Mt',
    atomicNumber: 109,
    atomicWeight: 278, // The most stable isotope
    period: 7,
    group: 9, // Group 9 (the same as Iridium, Rhodium)
    phaseAtSTP: 'solid',
    meltingPoint: 1100, // Estimated value
    boilingPoint: 1500, // Estimated value
    electronegativity: null, // Not well defined due to its high instability
    density: null, // Not well defined due to its high instability
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d7 7s2', // Based on periodic trends
    category: 'transition metal',
};

const moscovium: ChemicalElement = {
    name: 'Moscovium',
    symbol: 'Mc',
    atomicNumber: 115,
    atomicWeight: 288,  // Approximate value
    period: 7,
    group: 15,
    phaseAtSTP: 'solid', // Expected phase, as Moscovium is highly radioactive and its phase at STP is not well-documented
    meltingPoint: 300,   // Approximate value in Kelvin
    boilingPoint: 500,   // Approximate value in Kelvin
    electronegativity: 1.0, // Approximate value
    density: 7.0,        // Approximate value in g/cm³
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p1',
    category: 'post-transition metal',
};

const oganesson: ChemicalElement = {
    name: 'Oganesson',
    symbol: 'Og',
    atomicNumber: 118,
    atomicWeight: 294,  // Approximate value
    period: 7,
    group: 18,
    phaseAtSTP: 'unknown', // Oganesson's phase at STP is not well-documented due to its high instability
    meltingPoint: 330,   // Approximate value in Kelvin
    boilingPoint: 500,   // Approximate value in Kelvin
    electronegativity: 1.0, // Approximate value
    density: 4.9,        // Approximate value in g/cm³
    isRadioactive: true,
    electronConfiguration: '[Rn] 5f14 6d10 7s2 7p6',
    category: 'noble gas',
};

const periodicTable: Map<number, ChemicalElement> = new Map([
    [1, hydrogen],
    [115, moscovium],
    [118, oganesson],
    [2, helium],
    [3, lithium],
    [4, beryllium],
    [11, sodium],
    [12, magnesium],
    [19, potassium],
    [20, calcium],
    [8, oxygen],
    [89, actinium],
    [90, thorium],
    [91, protactinium],
    [92, uranium],
    [93, neptunium],
    [94, plutonium],
    [95, americium],
    [96, curium],
    [97, berkelium],
    [98, californium],
    [99, einsteinium],
    [100, fermium],
    [101, mendelevium],
    [102, nobelium],
    [103, lawrencium],
    [57, lanthanum],
    [58, cerium],
    [59, praseodymium],
    [60, neodymium],
    [61, promethium], 
    [62, samarium],
    [63, europium],
    [64, gadolinium],
    [65, terbium],
    [66, dysprosium],
    [67, holmium],
    [68, erbium],
    [69, thulium],
    [70, ytterbium],
    [71, lutetium],
    [37, rubidium],
    [55, caesium],
    [87, francium],
    [38, strontium],
    [56, barium],
    [88, radium],
    [116, livermorium],
    [13, aluminum],
    [31, gallium],
    [49, indium],
    [81, thallium],
    [113, nihonium],
    [6, carbon],
    [14, silicon],
    [32, germanium],
    [50, tin],
    [82, lead],
    [7, nitrogen],
    [15, phosphorus],
    [33, arsenic],
    [51, antimony],
    [83, bismuth],
    [16, sulfur],
    [34, selenium],
    [52, tellurium],
    [84, polonium],
    [9, fluorine],
    [17, chlorine],
    [35, bromine],
    [53, iodine],
    [85, astatine],
    [117, tennessine],
    [10, neon],
    [18, argon],
    [36, krypton],
    [54, xenon],
    [86, radon],
    [21, scandium],
    [39, yttrium],
    [22, titanium],
    [40, zirconium],
    [72, hafnium],
    [104, rutherfordium],
    [23, vanadium],
    [41, niobium],
    [73, tantalum],
    [105, dubnium],
    [24, chromium],
    [42, molybdenum],
    [74, tungsten],
    [106, seaborgium],
    [28, nickel],
    [46, palladium],
    [78, platinum],
    [29, copper],
    [47, silver],
    [79, gold],
    [30, zinc],
    [48, cadmium],
    [80, mercury],
    [112, copernicium],
    [25, manganese],
    [43, technetium],
    [75, rhenium],
    [107, bohrium],
    [26, iron],
    [44, ruthenium],
    [76, osmium],
    [108, hassium],
    [27, cobalt],
    [45, rhodium],
    [77, iridium],
    [109, meitnerium],
    [110, darmstadtium],
    [111, roentgenium],
    [5, boron],
    [114, flevorium],
    
]);

function element(symbol: string): ChemicalElement | undefined {
    return Array.from(periodicTable.values()).find(element => element.symbol === symbol);
}

function searchElement(query: Partial<ChemicalElement>): ChemicalElement[] {
    return Array.from(periodicTable.values()).filter(element => {
        return Object.entries(query).every(([key, value]) => {
            if (value === 'unknown') return true;
            if (element[key as keyof ChemicalElement] === value) return true;
            return false;
        });
    });
}