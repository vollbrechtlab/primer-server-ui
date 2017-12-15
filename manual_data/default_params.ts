let default_params = {
  /* Basic Parameters */
  SEQUENCE_TEMPLATE: null,
  PRIMER_PICK_LEFT_PRIMER: true,
  SEQUENCE_PRIMER: null,
  PRIMER_PICK_INTERNAL_OLIGO: false,
  SEQUENCE_INTERNAL_OLIGO: null,
  PRIMER_PICK_RIGHT_PRIMER: false,
  SEQUENCE_PRIMER_REVCOMP: null,
  PRIMER_PRODUCT_SIZE_RANGE: "150-250 100-300 301-400 401-500 501-600 601-700 701-850 851-1000",
  SEQUENCE_TARGET: null,
  SEQUENCE_EXCLUDED_REGION: null,
  PRIMER_MIN_TM: 57.0,
  PRIMER_OPT_TM: 60.0,
  PRIMER_MAX_TM: 63.0,
  PRIMER_PAIR_MAX_DIFF_TM: 100,
  PRIMER_SALT_CORRECTIONS: null,
  PRIMER_TM_FORMULA: null, // not written

  /* Advanced Parameters */
  SEQUENCE_INTERNAL_EXCLUDED_REGION: Array<Array<number>>;
  SEQUENCE_INCLUDED_REGION: Array<Array<number>>;
  SEQUENCE_FORCE_LEFT_END: number;
  SEQUENCE_QUALITY: Array<number>;
  SEQUENCE_FORCE_LEFT_START: number;  
  SEQUENCE_START_CODON_POSITION: number;
  SEQUENCE_FORCE_RIGHT_END: number;
  SEQUENCE_OVERLAP_JUNCTION_LIST: Array<number>;
  SEQUENCE_FORCE_RIGHT_START: number;
  SEQUENCE_ID: string;
  SEQUENCE_PRIMER_PAIR_OK_REGION_LIST: Array<Array<number>>;
  PRIMER_DNA_CONC: number;
  PRIMER_MAX_END_GC: number;
  PRIMER_PAIR_WT_PRODUCT_SIZE_LT: number;
  PRIMER_DNTP_CONC: number;
  PRIMER_MAX_END_STABILITY: number;
  PRIMER_PAIR_WT_PRODUCT_TM_GT: number;
  PRIMER_EXPLAIN_FLAG: boolean;
  PRIMER_MAX_GC: number;
  PRIMER_PAIR_WT_PRODUCT_TM_LT: number;
  PRIMER_FIRST_BASE_INDEX: number;
  PRIMER_MAX_HAIRPIN_TH: number;
  PRIMER_PAIR_WT_PR_PENALTY: number;
  PRIMER_GC_CLAMP: number;
  PRIMER_MAX_LIBRARY_MISPRIMING: number;
  PRIMER_PAIR_WT_TEMPLATE_MISPRIMING: number;
  PRIMER_INSIDE_PENALTY: number;
  PRIMER_MAX_NS_ACCEPTED: number;
  PRIMER_PAIR_WT_TEMPLATE_MISPRIMING_TH: number;
  PRIMER_INTERNAL_DNA_CONC: number;
  PRIMER_MAX_POLY_X: number;
  PRIMER_PICK_ANYWAY: boolean;
  PRIMER_INTERNAL_DNTP_CONC: number;
  PRIMER_MAX_SELF_ANY: number;
  PRIMER_INTERNAL_MAX_GC: number;
  PRIMER_MAX_SELF_ANY_TH: number;
  PRIMER_INTERNAL_MAX_HAIRPIN_TH: number;
  PRIMER_MAX_SELF_END: number;
  PRIMER_INTERNAL_MAX_LIBRARY_MISHYB: number;
  PRIMER_MAX_SELF_END_TH: number;
  PRIMER_PRODUCT_MAX_TM: number;
  PRIMER_INTERNAL_MAX_NS_ACCEPTED: number;
  PRIMER_MAX_SIZE: number;
  PRIMER_PRODUCT_MIN_TM: number;
  PRIMER_INTERNAL_MAX_POLY_X: number;
  PRIMER_MAX_TEMPLATE_MISPRIMING: number;
  PRIMER_PRODUCT_OPT_SIZE: number;
  PRIMER_INTERNAL_MAX_SELF_ANY: number;
  PRIMER_MAX_TEMPLATE_MISPRIMING_TH: number;
  PRIMER_PRODUCT_OPT_TM: number;
  PRIMER_INTERNAL_MAX_SELF_ANY_TH: number;
  PRIMER_INTERNAL_MAX_SELF_END: number;
  PRIMER_MIN_3_PRIME_OVERLAP_OF_JUNCTION: number;
  PRIMER_QUALITY_RANGE_MAX: number;
  PRIMER_INTERNAL_MAX_SELF_END_TH: number;
  PRIMER_MIN_5_PRIME_OVERLAP_OF_JUNCTION: number;
  PRIMER_QUALITY_RANGE_MIN: number;
  PRIMER_INTERNAL_MAX_SIZE: number;
  PRIMER_MIN_END_QUALITY: number;
  PRIMER_INTERNAL_MAX_TM: number;
  PRIMER_MIN_GC: number;
  PRIMER_SALT_DIVALENT: number;
  PRIMER_INTERNAL_MIN_GC: number;
  PRIMER_MIN_LEFT_THREE_PRIME_DISTANCE: number;
  PRIMER_SALT_MONOVALENT: number;
  PRIMER_INTERNAL_MIN_QUALITY: number;
  PRIMER_MIN_QUALITY: number;
  PRIMER_SEQUENCING_ACCURACY: number;
  PRIMER_INTERNAL_MIN_SIZE: number;
  PRIMER_MIN_RIGHT_THREE_PRIME_DISTANCE: number;
  PRIMER_SEQUENCING_INTERVAL: number;
  PRIMER_INTERNAL_MIN_TM: number;
  PRIMER_MIN_SIZE: number;
  PRIMER_SEQUENCING_LEAD: number;
  PRIMER_INTERNAL_MISHYB_LIBRARY: string;
  PRIMER_MIN_THREE_PRIME_DISTANCE: number;
  PRIMER_SEQUENCING_SPACING: number;
  PRIMER_INTERNAL_MUST_MATCH_FIVE_PRIME: string;
  PRIMER_TASK: string;
  PRIMER_INTERNAL_MUST_MATCH_THREE_PRIME: string;
  PRIMER_MISPRIMING_LIBRARY: string;
  PRIMER_THERMODYNAMIC_OLIGO_ALIGNMENT: boolean;
  PRIMER_INTERNAL_OPT_GC_PERCENT: number;
  PRIMER_MUST_MATCH_FIVE_PRIME: string;
  PRIMER_THERMODYNAMIC_PARAMETERS_PATH: string;
  PRIMER_INTERNAL_OPT_SIZE: number;
  PRIMER_MUST_MATCH_THREE_PRIME: string;
  PRIMER_THERMODYNAMIC_TEMPLATE_ALIGNMENT: boolean;
  PRIMER_INTERNAL_OPT_TM: number;
  PRIMER_NUM_RETURN: number;
  PRIMER_INTERNAL_SALT_DIVALENT: number;
  PRIMER_OPT_GC_PERCENT: number;
  PRIMER_WT_END_QUAL: number;
  PRIMER_INTERNAL_SALT_MONOVALENT: number;
  PRIMER_OPT_SIZE: number;
  PRIMER_WT_END_STABILITY: number;
  PRIMER_INTERNAL_WT_END_QUAL: number;
  PRIMER_WT_GC_PERCENT_GT: number;
  PRIMER_INTERNAL_WT_GC_PERCENT_GT: number;
  PRIMER_OUTSIDE_PENALTY: number;
  PRIMER_WT_GC_PERCENT_LT: number;
  PRIMER_INTERNAL_WT_GC_PERCENT_LT: number;
  PRIMER_PAIR_MAX_COMPL_ANY: number;
  PRIMER_WT_HAIRPIN_TH: number;
  PRIMER_INTERNAL_WT_HAIRPIN_TH: number;
  PRIMER_PAIR_MAX_COMPL_ANY_TH: number;
  PRIMER_WT_LIBRARY_MISPRIMING: number;
  PRIMER_INTERNAL_WT_LIBRARY_MISHYB: number;
  PRIMER_PAIR_MAX_COMPL_END: number;
  PRIMER_WT_NUM_NS: number;
  PRIMER_INTERNAL_WT_NUM_NS: number;
  PRIMER_PAIR_MAX_COMPL_END_TH: number;
  PRIMER_WT_POS_PENALTY: number;
  PRIMER_INTERNAL_WT_SELF_ANY: number;
  PRIMER_WT_SELF_ANY: number;
  PRIMER_INTERNAL_WT_SELF_ANY_TH: number;
  PRIMER_PAIR_MAX_LIBRARY_MISPRIMING: number;
  PRIMER_WT_SELF_ANY_TH: number;
  PRIMER_INTERNAL_WT_SELF_END: number;
  PRIMER_PAIR_MAX_TEMPLATE_MISPRIMING: number;
  PRIMER_WT_SELF_END: number;
  PRIMER_INTERNAL_WT_SELF_END_TH: number;
  PRIMER_PAIR_MAX_TEMPLATE_MISPRIMING_TH: number;
  PRIMER_WT_SELF_END_TH: number;
  PRIMER_INTERNAL_WT_SEQ_QUAL: number;
  PRIMER_PAIR_WT_COMPL_ANY: number;
  PRIMER_WT_SEQ_QUAL: number;
  PRIMER_INTERNAL_WT_SIZE_GT: number;
  PRIMER_PAIR_WT_COMPL_ANY_TH: number;
  PRIMER_WT_SIZE_GT: number;
  PRIMER_INTERNAL_WT_SIZE_LT: number;
  PRIMER_PAIR_WT_COMPL_END: number;
  PRIMER_WT_SIZE_LT: number;
  PRIMER_INTERNAL_WT_TM_GT: number;
  PRIMER_PAIR_WT_COMPL_END_TH: number;
  PRIMER_WT_TEMPLATE_MISPRIMING: number;
  PRIMER_INTERNAL_WT_TM_LT: number;
  PRIMER_PAIR_WT_DIFF_TM: number;
  PRIMER_WT_TEMPLATE_MISPRIMING_TH: number;
  PRIMER_LIBERAL_BASE: boolean;
  PRIMER_PAIR_WT_IO_PENALTY: number;
  PRIMER_WT_TM_GT: number;
  PRIMER_LIB_AMBIGUITY_CODES_CONSENSUS: boolean;
  PRIMER_PAIR_WT_LIBRARY_MISPRIMING: number;
  PRIMER_WT_TM_LT: number;
  PRIMER_LOWERCASE_MASKING: number;
  PRIMER_PAIR_WT_PRODUCT_SIZE_GT: number;
}