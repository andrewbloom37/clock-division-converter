interface Map<T> {
  [key: string]: T;
}

interface Divisions {
  triplet: number;
  straight: number;
  dotted: number;
}

const generateTriplet = (straightNote: number) => straightNote * (2 / 3);

const generateDotted = (straightNote: number) => straightNote * 1.5;

const roundToThousandths = (ms: number) => parseInt(`${ms * 1000}`, 10) / 1000

const generateDivisions = (straightNote: number): Divisions => ({
  triplet: roundToThousandths(generateTriplet(straightNote)),
  straight: roundToThousandths(straightNote),
  dotted: roundToThousandths(generateDotted(straightNote)),
})

export const validateInput = (tempo: number) => {
  if (tempo < 1) return 1;
  if (tempo > 999) return 999;
  return tempo;
}

const tempoToMs = (tempo: number) => (60 / tempo) * 1000;

export default (tempo: number): Map<Divisions> => {
  const quarterNote = tempoToMs(validateInput(tempo));
  return ({
    '8 bars': generateDivisions(quarterNote * (2 ** 5)),
    '4 bars': generateDivisions(quarterNote * (2 ** 4)),
    '2 bars': generateDivisions(quarterNote * (2 ** 3)),
    '1 bar': generateDivisions(quarterNote * (2 ** 2)),
    '1/2': generateDivisions(quarterNote * (2 ** 1)),
    '1/4': generateDivisions(quarterNote),
    '1/8': generateDivisions(quarterNote * (2 ** -1)),
    '1/16': generateDivisions(quarterNote * (2 ** -2)),
    '1/32': generateDivisions(quarterNote * (2 ** -3)),
    '1/64': generateDivisions(quarterNote * (2 ** -4)),
    '1/128': generateDivisions(quarterNote * (2 ** -5)),
  });
}
