// task_5/js/main.ts

// Interfaces with brand properties for nominal typing
export interface MajorCredits {
  credits: number;
  _majorBrand: "major"; // unique brand
}

export interface MinorCredits {
  credits: number;
  _minorBrand: "minor"; // unique brand
}

// Functions to sum credits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: "major"
  };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: "minor"
  };
}
