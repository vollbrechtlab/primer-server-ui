export class P3Input {
  SEQUENCE_TEMPLATE: string;

  PRIMER_PICK_LEFT_PRIMER = true;
  SEQUENCE_PRIMER: string;
  PRIMER_PICK_INTERNAL_OLIGO = false;
  SEQUENCE_INTERNAL_OLIGO: string;
  PRIMER_PICK_RIGHT_PRIMER = true;
  SEQUENCE_PRIMER_REVCOMP: string;
  // product size
  PRIMER_PRODUCT_SIZE: Array<number>;
  // targets
  SEQUENCE_TARGET: string;
  // excluded regions
  SEQUENCE_INTERNAL_EXCLUDED_REGION: string;
  // primer melting temp
  PRIMER_MIN_TM = 57.0;
  PRIMER_OPT_TM = 60.0;
  PRIMER_MAX_TM = 63.0;
  // max tm difference
  PRIMER_PAIR_MAX_DIFF_TM = 100.0;
  // salt correction formula
  PRIMER_SALT_CORRECTIONS = 1;
  // table of thermodynamic parameters
  PRIMER_TM_FORMULA = 1;
}
