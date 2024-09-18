# ChemLab
Perform chemistry calculations and operations.

# Quickstart

`npm install chemicallab`

## Getting element information from symbol

```js
console.log(element("O"))
```

## Getting element information from other categoeries

```js
console.log(searchElement(atomicNumber : 1))
```

### Defined categories

```js
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
density?: number | 'unknown';// g/cm³ at STP
isRadioactive?: boolean | 'unknown';
electronConfiguration: string | 'unknown';
category: 'alkali metal' | 'alkaline earth metal' | 'transition metal' | 
  'post-transition metal' | 'metalloid' | 'nonmetal' | 
  'halogen' | 'noble gas' | 'lanthanide' | 'actinide' | 'unknown';
```
