/** Class that stores all primer3 parameter data. */
export const p3Params = {
  "PRIMER_DNA_CONC": {
    "default_value": 50.0,
    "description": "\n\nA value to use as nanomolar (nM) concentration of each annealing oligo \nover the course the PCR.\nPrimer3 uses this argument to esimate oligo melting\ntemperatures. This parameter corresponds to 'c' in equation (ii) \nof the paper [SantaLucia (1998) A unified view of polymer, dumbbell, \nand oligonucleotide DNA nearest-neighbor thermodynamics. \nProc Natl Acad Sci 95:1460-1465\nhttp://www.pnas.org/content/95/4/1460.full.pdf+html],\nwhere a suitable value (for a lower initial concentration of template) \nis \"empirically determined\".\n\nThe default (50nM) works well with the standard\nprotocol used at the Whitehead/MIT Center for Genome \nResearch--0.5 microliters of 20 micromolar concentration for each\nprimer in a 20 microliter reaction with 10 nanograms\ntemplate, 0.025 units/microliter Taq polymerase in 0.1 mM each\ndNTP, 1.5mM MgCl2, 50mM KCl, 10mM Tris-HCL (pH 9.3) using 35\ncycles with an annealing temperature of 56 degrees Celsius.\n\nThe value of this parameter is less than the actual\nconcentration of oligos in the initial reaction mix because it is the\nconcentration of annealing oligos, which in turn depends on the\namount of template (including PCR product) in a given cycle.\nThis concentration increases a great deal during a PCR;\nfortunately PCR seems quite robust for a variety of oligo melting\ntemperatures.\n\nSee ADVICE FOR PICKING PRIMERS.",
    "form_type": "input_number",
    "name": "PRIMER_DNA_CONC",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_DNTP_CONC": {
    "default_value": 0.6,
    "description": "The millimolar concentration of the sum of all \ndeoxyribonucleotide triphosphates. A reaction mix containing \n0.2 mM ATP, 0.2 mM CTP, 0.2 mM GTP and 0.2 mM TTP would have a \nPRIMER_DNTP_CONC=0.8. \nThis argument is considered for oligo and\nprimer melting temperatures, for\nPCR product melting temperature, or for secondary \nstructure calculations only if \nPRIMER_SALT_DIVALENT is > 0.0.\nSee PRIMER_SALT_DIVALENT.",
    "form_type": "input_number",
    "name": "PRIMER_DNTP_CONC",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_EXPLAIN_FLAG": {
    "default_value": false,
    "description": "If this flag is 1 (non-0), produce PRIMER_LEFT_EXPLAIN,\nPRIMER_RIGHT_EXPLAIN, PRIMER_INTERNAL_EXPLAIN and/or\nPRIMER_PAIR_EXPLAIN output\ntags as appropriate.  \nThese output tags are intended to provide information on the number of\noligos and primer pairs that primer3 examined and counts of\nthe number discarded for various reasons.  If -format_output is\nset similar information is produced in the user-oriented output.",
    "form_type": "checkbox",
    "name": "PRIMER_EXPLAIN_FLAG",
    "setting_type": "additional",
    "type": "boolean"
  },
  "PRIMER_FIRST_BASE_INDEX": {
    "default_value": 0,
    "description": "This parameter is the index of the first base in the input\nsequence.  For input and output using 1-based indexing (such as\nthat used in GenBank and to which many users are accustomed) set\nthis parameter to 1.  For input and output using 0-based indexing\nset this parameter to 0.  (This parameter also affects the\nindexes in the contents of the files produced when the primer\nfile flag is set.)",
    "form_type": "input_number",
    "name": "PRIMER_FIRST_BASE_INDEX",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_GC_CLAMP": {
    "default_value": 0,
    "description": "Require the specified number of consecutive Gs and Cs at the 3'\nend of both the left and right primer.  (This parameter has no\neffect on the internal oligo if one is requested.)",
    "form_type": "input_number",
    "name": "PRIMER_GC_CLAMP",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_INSIDE_PENALTY": {
    "default_value": -1.0,
    "description": "Non-default values are valid only for sequences with 0 or 1\ntarget regions.  If the primer is part of a pair that spans a\ntarget and overlaps the target, then multiply this value times\nthe number of nucleotide positions by which the primer overlaps\nthe (unique) target to get the 'position penalty'.  The effect of\nthis parameter is to allow primer3 to include overlap with the\ntarget as a term in the objective function.",
    "form_type": "input_number",
    "name": "PRIMER_INSIDE_PENALTY",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_DNA_CONC": {
    "default_value": 50.0,
    "description": "Equivalent parameter of PRIMER_DNA_CONC for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_DNA_CONC",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_DNTP_CONC": {
    "default_value": 0.0,
    "description": "Parameter for internal oligos analogous to PRIMER_DNTP_CONC.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_DNTP_CONC",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_MAX_GC": {
    "default_value": 80.0,
    "description": "Equivalent parameter of PRIMER_MAX_GC for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MAX_GC",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_MAX_HAIRPIN_TH": {
    "default_value": 47.0,
    "description": "The most stable monomer structure of internal oligo\ncalculated by thermodynamic approach. See PRIMER_MAX_HAIRPIN_TH for details.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MAX_HAIRPIN_TH",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_MAX_LIBRARY_MISHYB": {
    "default_value": 12.0,
    "description": "Similar to PRIMER_MAX_LIBRARY_MISPRIMING except that this parameter applies\nto the similarity of candidate internal oligos to the library\nspecified in PRIMER_INTERNAL_MISHYB_LIBRARY.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MAX_LIBRARY_MISHYB",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_INTERNAL_MAX_NS_ACCEPTED": {
    "default_value": 0,
    "description": "Equivalent parameter of PRIMER_MAX_NS_ACCEPTED for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MAX_NS_ACCEPTED",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_INTERNAL_MAX_POLY_X": {
    "default_value": 5,
    "description": "Equivalent parameter of PRIMER_MAX_POLY_X for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MAX_POLY_X",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_INTERNAL_MAX_SELF_ANY": {
    "default_value": 12.0,
    "description": "Equivalent parameter of PRIMER_MAX_SELF_ANY for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MAX_SELF_ANY",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_INTERNAL_MAX_SELF_ANY_TH": {
    "default_value": 47.0,
    "description": "Equivalent parameter of PRIMER_MAX_SELF_ANY_TH for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MAX_SELF_ANY_TH",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_INTERNAL_MAX_SELF_END": {
    "default_value": 12.0,
    "description": "PRIMER_INTERNAL_MAX_SELF_END is meaningless when applied\nto internal oligos used for hybridization-based detection, since\nprimer-dimer will not occur.  We recommend that\nPRIMER_INTERNAL_MAX_SELF_END be set at least as high as\nPRIMER_INTERNAL_MAX_SELF_ANY.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MAX_SELF_END",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_INTERNAL_MAX_SELF_END_TH": {
    "default_value": 47.0,
    "description": "Same as PRIMER_INTERNAL_MAX_SELF_END but for\ncalculating the score (melting temperature of structure) thermodynamical\napproach is used.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MAX_SELF_END_TH",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_INTERNAL_MAX_SIZE": {
    "default_value": 27,
    "description": "Equivalent parameter of PRIMER_MAX_SIZE for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MAX_SIZE",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_INTERNAL_MAX_TM": {
    "default_value": 63.0,
    "description": "Equivalent parameter of PRIMER_MAX_TM for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MAX_TM",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_MIN_GC": {
    "default_value": 20.0,
    "description": "Equivalent parameter of PRIMER_MIN_GC for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MIN_GC",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_MIN_QUALITY": {
    "default_value": 0,
    "description": "Equivalent parameter of PRIMER_MIN_QUALITY for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MIN_QUALITY",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_INTERNAL_MIN_SIZE": {
    "default_value": 18,
    "description": "Equivalent parameter of PRIMER_MIN_SIZE for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MIN_SIZE",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_INTERNAL_MIN_TM": {
    "default_value": 57.0,
    "description": "Equivalent parameter of PRIMER_MIN_TM for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_MIN_TM",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_MISHYB_LIBRARY": {
    "default_value": null,
    "description": "Similar to PRIMER_MISPRIMING_LIBRARY, except that the event we\nseek to avoid is hybridization of the internal oligo to sequences\nin this library rather than priming from them.",
    "form_type": "input_text",
    "name": "PRIMER_INTERNAL_MISHYB_LIBRARY",
    "setting_type": "additional",
    "type": "string"
  },
  "PRIMER_INTERNAL_MUST_MATCH_FIVE_PRIME": {
    "default_value": null,
    "description": "Equivalent parameter of PRIMER_MUST_MATCH_FIVE_PRIME for the internal oligo.",
    "form_type": "input_text",
    "name": "PRIMER_INTERNAL_MUST_MATCH_FIVE_PRIME",
    "setting_type": "additional",
    "type": "ambiguous nucleotide sequence"
  },
  "PRIMER_INTERNAL_MUST_MATCH_THREE_PRIME": {
    "default_value": null,
    "description": "Equivalent parameter of PRIMER_MUST_MATCH_THREE_PRIME for the internal oligo.",
    "form_type": "input_text",
    "name": "PRIMER_INTERNAL_MUST_MATCH_THREE_PRIME",
    "setting_type": "additional",
    "type": "ambiguous nucleotide sequence"
  },
  "PRIMER_INTERNAL_OPT_GC_PERCENT": {
    "default_value": 50.0,
    "description": "Equivalent parameter of PRIMER_OPT_GC_PERCENT for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_OPT_GC_PERCENT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_OPT_SIZE": {
    "default_value": 20,
    "description": "Equivalent parameter of PRIMER_OPT_SIZE for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_OPT_SIZE",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_INTERNAL_OPT_TM": {
    "default_value": 60.0,
    "description": "Equivalent parameter of PRIMER_OPT_TM for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_OPT_TM",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_SALT_DIVALENT": {
    "default_value": 0.0,
    "description": "Equivalent parameter of PRIMER_SALT_DIVALENT for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_SALT_DIVALENT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_SALT_MONOVALENT": {
    "default_value": 50.0,
    "description": "Equivalent parameter of PRIMER_SALT_MONOVALENT for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_SALT_MONOVALENT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_END_QUAL": {
    "default_value": 0.0,
    "description": " 18. \"PROGRAM\" INPUT TAGS\"Program\" input tags start with P3_... describe the \nparameters that deal with the behavior of the primer3 program \nitself.)",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_END_QUAL",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_GC_PERCENT_GT": {
    "default_value": 0.0,
    "description": "Equivalent parameter of PRIMER_WT_GC_PERCENT_GT for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_GC_PERCENT_GT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_GC_PERCENT_LT": {
    "default_value": 0.0,
    "description": "Equivalent parameter of PRIMER_WT_GC_PERCENT_LT for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_GC_PERCENT_LT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_HAIRPIN_TH": {
    "default_value": 0.0,
    "description": "Penalty weight for the most stable\nprimer hairpin structure value as in PRIMER_INTERNAL_MAX_HAIRPIN_TH.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_HAIRPIN_TH",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_LIBRARY_MISHYB": {
    "default_value": 0.0,
    "description": "Equivalent parameter of PRIMER_WT_LIBRARY_MISPRIMING for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_LIBRARY_MISHYB",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_NUM_NS": {
    "default_value": 0.0,
    "description": "Equivalent parameter of PRIMER_WT_NUM_NS for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_NUM_NS",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_SELF_ANY": {
    "default_value": 0.0,
    "description": "Equivalent parameter of PRIMER_WT_SELF_ANY for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_SELF_ANY",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_SELF_ANY_TH": {
    "default_value": 0.0,
    "description": "Equivalent parameter of PRIMER_WT_SELF_ANY_TH for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_SELF_ANY_TH",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_SELF_END": {
    "default_value": 0.0,
    "description": "Equivalent parameter of PRIMER_WT_SELF_END for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_SELF_END",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_SELF_END_TH": {
    "default_value": 0.0,
    "description": "Equivalent parameter of PRIMER_WT_SELF_END_TH for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_SELF_END_TH",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_SEQ_QUAL": {
    "default_value": 0.0,
    "description": "Equivalent parameter of PRIMER_WT_SEQ_QUAL for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_SEQ_QUAL",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_SIZE_GT": {
    "default_value": 1.0,
    "description": "Equivalent parameter of PRIMER_INTERNAL_WT_SIZE_GT for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_SIZE_GT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_SIZE_LT": {
    "default_value": 1.0,
    "description": "Equivalent parameter of PRIMER_WT_SIZE_LT for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_SIZE_LT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_TM_GT": {
    "default_value": 1.0,
    "description": "Equivalent parameter of PRIMER_WT_TM_GT for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_TM_GT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_INTERNAL_WT_TM_LT": {
    "default_value": 1.0,
    "description": "Equivalent parameter of PRIMER_WT_TM_LT for the internal oligo.",
    "form_type": "input_number",
    "name": "PRIMER_INTERNAL_WT_TM_LT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_LIBERAL_BASE": {
    "default_value": false,
    "description": "This parameter provides a quick-and-dirty way to get primer3 to\naccept IUB / IUPAC codes for ambiguous bases (i.e. by changing\nall unrecognized bases to N).  If you wish to include an\nambiguous base in an oligo, you must set PRIMER_MAX_NS_ACCEPTED to a\n1 (non-0) value.\n\nPerhaps '-' and '* ' should be squeezed out rather than changed\nto 'N', but currently they simply get converted to N's.  The authors\ninvite user comments.",
    "form_type": "checkbox",
    "name": "PRIMER_LIBERAL_BASE",
    "setting_type": "additional",
    "type": "boolean"
  },
  "PRIMER_LIB_AMBIGUITY_CODES_CONSENSUS": {
    "default_value": false,
    "description": "If set to 1, treat ambiguity codes as if they were consensus\ncodes when matching oligos to mispriming or mishyb\nlibraries. For example, if this flag is set, then a C in an\noligo will be scored as a perfect match to an S in a library\nsequence, as will a G in the oligo. More importantly,\nthough, any base in an oligo will be scored as a perfect\nmatch to an N in the library.  This is very bad if the\nlibrary contains strings of Ns, as no oligo will be legal\n(and it will take a long time to find this out). So unless\nyou know for sure that your library does not have runs of Ns\n(or Xs), then set this flag to 0.",
    "form_type": "checkbox",
    "name": "PRIMER_LIB_AMBIGUITY_CODES_CONSENSUS",
    "setting_type": "additional",
    "type": "boolean"
  },
  "PRIMER_LOWERCASE_MASKING": {
    "default_value": 0,
    "description": "This option allows for intelligent design of primers in sequence in\nwhich masked regions (for example repeat-masked regions) are\nlower-cased.  (New in v. 1.1.0, added by Maido Remm and Triinu\nKoressaar)\n\nA value of 1 directs primer3 to reject primers overlapping\nlowercase a base exactly at the 3' end.\n\nThis property relies on the assumption that masked features\n(e.g. repeats) can partly overlap primer, but they cannot overlap\nthe 3'-end of the primer.  In other words, lowercase bases at\nother positions in the primer are accepted, assuming that the\nmasked features do not influence the primer performance if they\ndo not overlap the 3'-end of primer.",
    "form_type": "input_number",
    "name": "PRIMER_LOWERCASE_MASKING",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_MAX_END_GC": {
    "default_value": 5,
    "description": "The maximum number of Gs or Cs allowed in the last five 3' \nbases of a left or right primer.",
    "form_type": "input_number",
    "name": "PRIMER_MAX_END_GC",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_MAX_END_STABILITY": {
    "default_value": 100.0,
    "description": "The maximum stability for the last five 3' bases of a left or\nright primer.  Bigger numbers mean more stable 3' ends.  The\nvalue is the maximum delta G (kcal/mol) for duplex disruption for\nthe five 3' bases as calculated using the nearest-neighbor\nparameter values specified by the option of PRIMER_TM_FORMULA\n\n\nFor example if the table of thermodynamic parameters suggested\nby SantaLucia 1998, DOI:10.1073/pnas.95.4.1460 is used the deltaG \nvalues for the most stable and for the most labile 5mer duplex \nare 6.86 kcal/mol (GCGCG) and 0.86 kcal/mol (TATAT) respectively.\n\t\nIf the table of thermodynamic parameters suggested by \nBreslauer et al. 1986, 10.1073/pnas.83.11.3746 is used the deltaG \nvalues for the most stable and for the most labile 5mer are \n13.4 kcal/mol (GCGCG) and 4.6 kcal/mol (TATAC) respectively.\n\n\n",
    "form_type": "input_number",
    "name": "PRIMER_MAX_END_STABILITY",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_MAX_GC": {
    "default_value": 80.0,
    "description": "Maximum allowable percentage of Gs and Cs in any primer generated\nby Primer.",
    "form_type": "input_number",
    "name": "PRIMER_MAX_GC",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_MAX_HAIRPIN_TH": {
    "default_value": 47.0,
    "description": "This is the most stable monomer structure of internal oligo\ncalculated by thermodynamic approach. The hairpin loops,\nbulge loops, internal loops, internal single mismatches, dangling ends,\nterminal mismatches have been considered. This parameter is calculated only\nif PRIMER_THERMODYNAMIC_OLIGO_ALIGNMENT=1. The default value is 10 degrees\nlower than the default value of PRIMER_MIN_TM. For example the structure:      -///------\\\\\\-\n   5' ACGCTGTGCTGCGA 3'\n      //////----\\\\\\\\\\\\\n   5' CCGCAGTAAGCTGCGG 3'\n\nwith melting temperature 71.0918 (calculated according to by\ndefault values of primer3)\n\nFor details about papers used for calculating hairpins see PRIMER_MAX_SELF_ANY_TH",
    "form_type": "input_number",
    "name": "PRIMER_MAX_HAIRPIN_TH",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_MAX_LIBRARY_MISPRIMING": {
    "default_value": 12.0,
    "description": "The maximum allowed weighted similarity with any sequence in\nPRIMER_MISPRIMING_LIBRARY.",
    "form_type": "input_number",
    "name": "PRIMER_MAX_LIBRARY_MISPRIMING",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_MAX_NS_ACCEPTED": {
    "default_value": 0,
    "description": "Maximum number of unknown bases (N) allowable in any primer.",
    "form_type": "input_number",
    "name": "PRIMER_MAX_NS_ACCEPTED",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_MAX_POLY_X": {
    "default_value": 5,
    "description": "The maximum allowable length of a mononucleotide repeat,\nfor example AAAAAA.",
    "form_type": "input_number",
    "name": "PRIMER_MAX_POLY_X",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_MAX_SELF_ANY": {
    "default_value": 8.0,
    "description": "PRIMER_MAX_SELF_ANY describes the tendency of a primer to bind to \nitself (interfering with target sequence binding). It will score \nANY binding occurring within the entire primer sequence.\nIt is the maximum allowable local alignment score when testing \na single primer for (local) self-complementarity.  Local \nself-complementarity is taken to predict the tendency of primers \nto anneal to each other without necessarily causing self-priming \nin the PCR.  The scoring system gives 1.00 for complementary \nbases, -0.25 for a match of any base (or N) with an N, -1.00 for \na mismatch, and -2.00 for a gap. Only single-base-pair gaps are \nallowed. For example, the alignment   5' ATCGNA 3'\n      || | |\n   3' TA-CGT 5'\n   5' ATCCGNA 3'\n      ||  | |\n   3' TA--CGT 5'\nis not considered.  Scores are non-negative, and a score of 0.00\nindicates that there is no reasonable local alignment between two\noligos.",
    "form_type": "input_number",
    "name": "PRIMER_MAX_SELF_ANY",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_MAX_SELF_ANY_TH": {
    "default_value": 47.0,
    "description": " The same as PRIMER_MAX_SELF_ANY but all calculations are based on\n\t  thermodynamical approach. The melting temperature of the most stable\n\t  structure is calculated. To calculate secondary structures nearest-neighbor\n\t  parameters for perfect matches, single internal mismatches, terminal\n\t  mismatches, dangling ends have been used. Also parameters for\nincrements for length dependence of\nbulge and internal loops have been used. This parameter is calculated only\nif PRIMER_THERMODYNAMIC_OLIGO_ALIGNMENT=1. The default value is 10 degrees\nlower than the default value of PRIMER_MIN_TM. For example, the alignment\nwidth length 15nt  5' ATTAGATAGAGCATC 3'\n  3' TAATCTATCTCGTAG 5'\n     T        C\n  5'  GCGGCCGC GCGC 3'\n  3'  CGCCGGCG CGCG 5'\n     A        A\nis not considered (Tm=57.0997 and the length of oligo is 14nt).\nThermodynamical parameters and methods for finding\nthe most stable structure are described in following papers:[SantaLucia JR (1998) \"A unified view of polymer, dumbbell and\noligonucleotide DNA nearest-neighbor\nthermodynamics\", Proc Natl Acad Sci 95:1460-65\n http://dx.doi.org/10.1073/pnas.95.4.1460]\n\n[SantaLucia JR and Hicks D (2004) \"The thermodynamics of DNA structural\nmotifs\", Annu Rev Biophys Biomol Struct 33:415-40\nhttp://dx.doi.org/10.1146/annurev.biophys.32.110601.141800]\n\n[Bommarito S, Peyret N and SantaLucia J Jr (2000) \"Thermodynamic parameters\nfor DNA sequences with dangling ends\", Nucleic Acids Res 28(9):1929-34\nhttp://dx.doi.org/10.1093/nar/28.9.1929]\n\n[Peyret N, Seneviratne PA, Allawi HT, SantaLucia J Jr. (1999)\n\"Nearest-neighbor thermodynamics and NMR of DNA sequences with internal A.A,\nC.C, G.G, and T.T mismatches\", Biochemistry 38(12):3468-77\nhttp://dx.doi.org/10.1021/bi9825091]\n\n[Allawi HT and SantaLucia J Jr. (1998) \"Nearest-Neighbor Thermodynamics of\nInternal A·C Mismatches in DNA:  Sequence Dependence and pH Effects\",\nBiochemistry 37(26):9435-44\nhttp://dx.doi.org/10.1021/bi9803729\n\n[Allawi HT and SantaLucia J Jr. (1998) \"Thermodynamics of internal C.T\nmismatches in DNA.\" Nucleic Acids Res 26(11):2694-701http://dx.doi.org/10.1093/nar/26.11.2694]\n\n[Allawi HT and SantaLucia J Jr. (1998) \"Nearest neighbor thermodynamic\nparameters for internal G.A mismatches in DNA.\" Biochemistry 37(8):2170-9\nhttp://dx.doi.org/10.1021/bi9724873]\n\n[Allawi HT and SantaLucia J Jr. (1997) \"Thermodynamics and NMR of internal\nG.T mismatches in DNA.\" Biochemistry 36(34):10581-94\nhttp://dx.doi.org/10.1021/bi962590c]\n\n[SantaLucia J Jr and Peyret N. (2001) \"Method and system for predicting\nnucleic acid hybridization thermodynamics and computer-readable storage\nmedium for use therein\" World Intellectual Property Organization, WO 01/94611\nhttp://www.wipo.int/pctdb/en/wo.jsp?wo=2001094611]\n\nPredicting secondary structures can improve primer design by eliminating\nsequences with high possibility to form alternative secondary structures.\n\t  ",
    "form_type": "input_number",
    "name": "PRIMER_MAX_SELF_ANY_TH",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_MAX_SELF_END": {
    "default_value": 3.0,
    "description": "\nPRIMER_MAX_SELF_END tries to bind the 3'-END to a identical primer \nand scores the best binding it can find. This is critical for \nprimer quality because it allows primers use itself as a target \nand amplify a short piece (forming a primer-dimer). These primers \nare then unable to bind and amplify the target sequence.\nPRIMER_MAX_SELF_END is the maximum allowable 3'-anchored global \nalignment score when testing a single primer for \nself-complementarity. The 3'-anchored global alignment score \nis taken to predict the likelihood of PCR-priming primer-dimers, \nfor example   5' ATGCCCTAGCTTCCGGATG 3'\n                ||| |||||\n             3' AAGTCCTACATTTAGCCTAGT 5'\n   5` AGGCTATGGGCCTCGCGA 3'\n                  ||||||\n               3' AGCGCTCCGGGTATCGGA 5'\nThe scoring system is as for the Maximum Complementarity\nargument. In the examples above the scores are 7.00 and 6.00\nrespectively. Scores are non-negative, and a score of 0.00\nindicates that there is no reasonable 3'-anchored global\nalignment between two oligos.  In order to estimate 3'-anchored\nglobal alignments for candidate primers, Primer3\nassumes that the sequence from which to choose primers is\npresented 5'->3'. It is nonsensical to provide a larger value\nfor this parameter than for the Maximum (local) Complementarity\nparameter (PRIMER_MAX_SELF_ANY) because the score of a local \nalignment will always be at least as great as the score of a \nglobal alignment.",
    "form_type": "input_number",
    "name": "PRIMER_MAX_SELF_END",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_MAX_SELF_END_TH": {
    "default_value": 47.0,
    "description": "Same as PRIMER_MAX_SELF_END but is based on\nthermodynamical approach - the stability of structure is analyzed. The value\nof tag is expressed as melting temperature. See\nPRIMER_MAX_SELF_ANY_TH for details.",
    "form_type": "input_number",
    "name": "PRIMER_MAX_SELF_END_TH",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_MAX_SIZE": {
    "default_value": 27,
    "description": "Maximum acceptable length (in bases) of a primer.  Currently this\nparameter cannot be larger than 35.  This limit is governed by\nmaximum oligo size for which primer3's melting-temperature is\nvalid.",
    "form_type": "input_number",
    "name": "PRIMER_MAX_SIZE",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_MAX_TEMPLATE_MISPRIMING": {
    "default_value": -1.0,
    "description": "The maximum allowed similarity to ectopic sites in the\ntemplate.  A negative value means do not check.  The scoring\nsystem is the same as used for PRIMER_MAX_LIBRARY_MISPRIMING, except\nthat an ambiguity code in the template is never treated as a\nconsensus (see PRIMER_LIB_AMBIGUITY_CODES_CONSENSUS).",
    "form_type": "input_number",
    "name": "PRIMER_MAX_TEMPLATE_MISPRIMING",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_MAX_TEMPLATE_MISPRIMING_TH": {
    "default_value": -1.0,
    "description": "Similar to PRIMER_MAX_TEMPLATE_MISPRIMING but \nassesses alternative binding sites in the template using thermodynamic models\n(when PRIMER_THERMODYNAMIC_TEMPLATE_ALIGNMENT=1).\nThis parameter specifies the maximum allowed\nmelting temperature of an oligo (primer)\nat an \"ectopic\" site within the template sequence; 47.0 would be\na reasonable choice if PRIMER_MIN_TM is 57.0.\n",
    "form_type": "input_number",
    "name": "PRIMER_MAX_TEMPLATE_MISPRIMING_TH",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_MAX_TM": {
    "default_value": 63.0,
    "description": "Maximum acceptable melting temperature (Celsius) for a primer\noligo.",
    "form_type": "input_number",
    "name": "PRIMER_MAX_TM",
    "setting_type": "basic",
    "type": "float"
  },
  "PRIMER_MIN_3_PRIME_OVERLAP_OF_JUNCTION": {
    "default_value": 4,
    "description": "The 3' end of the left OR the right primer must \noverlap one of the junctions in SEQUENCE_OVERLAP_JUNCTION_LIST by this amount.\nSee details in SEQUENCE_OVERLAP_JUNCTION_LIST.\n",
    "form_type": "input_number",
    "name": "PRIMER_MIN_3_PRIME_OVERLAP_OF_JUNCTION",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_MIN_5_PRIME_OVERLAP_OF_JUNCTION": {
    "default_value": 7,
    "description": "The 5' end of the left OR the right primer must \noverlap one of the junctions in SEQUENCE_OVERLAP_JUNCTION_LIST by this amount.\nSee details in SEQUENCE_OVERLAP_JUNCTION_LIST.\n",
    "form_type": "input_number",
    "name": "PRIMER_MIN_5_PRIME_OVERLAP_OF_JUNCTION",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_MIN_END_QUALITY": {
    "default_value": 0,
    "description": "The minimum sequence quality (as specified by\nSEQUENCE_QUALITY) allowed within the 5' pentamer of a\nprimer. Note that there is no PRIMER_INTERNAL_MIN_END_QUALITY.",
    "form_type": "input_number",
    "name": "PRIMER_MIN_END_QUALITY",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_MIN_GC": {
    "default_value": 20.0,
    "description": "Minimum allowable percentage of Gs and Cs in any primer.",
    "form_type": "input_number",
    "name": "PRIMER_MIN_GC",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_MIN_LEFT_THREE_PRIME_DISTANCE": {
    "default_value": -1,
    "description": "When returning multiple primer pairs,\nthe minimum number of base pairs between the 3' ends of\nany two left primers.\n\nPrimers with 3' ends at positions e.g.  30 and 31 in the template\nsequence have a three-prime distance of 1.\n\nIn addition to positive values, the values -1 and 0 \nare acceptable and have special interpretations:\n\n\n-1 indicates that a given left primer can appear in\nmultiple primer pairs returned by primer3. \nThis is the default behavior.\n\n\n\n\n0 indicates that a left primer is acceptable if it\nwas not already used.  \nIn other words, two left primers are allowed to\nhave the same 3' position provided their 5' positions differ.\n\n\n\n\nFor n > 0:\nA left primer is acceptable if:\n\nNOT(3' end of left primer closer than n to the 3' end of a previously\nused left primer)",
    "form_type": "input_number",
    "name": "PRIMER_MIN_LEFT_THREE_PRIME_DISTANCE",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_MIN_QUALITY": {
    "default_value": 0,
    "description": "The minimum sequence quality (as specified by\nSEQUENCE_QUALITY) allowed within a primer.",
    "form_type": "input_number",
    "name": "PRIMER_MIN_QUALITY",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_MIN_RIGHT_THREE_PRIME_DISTANCE": {
    "default_value": -1,
    "description": "Analogous to PRIMER_MIN_LEFT_THREE_PRIME_DISTANCE, \nbut for right primers.",
    "form_type": "input_number",
    "name": "PRIMER_MIN_RIGHT_THREE_PRIME_DISTANCE",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_MIN_SIZE": {
    "default_value": 18,
    "description": "Minimum acceptable length of a primer.  Must be greater than 0\nand less than or equal to PRIMER_MAX_SIZE.",
    "form_type": "input_number",
    "name": "PRIMER_MIN_SIZE",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_MIN_THREE_PRIME_DISTANCE": {
    "default_value": -1,
    "description": "A \"convenience\" tag that simultaneously\nsets \nPRIMER_MIN_LEFT_THREE_PRIME_DISTANCE\nand\nPRIMER_MIN_RIGHT_THREE_PRIME_DISTANCE\n\n\nFor examplePRIMER_MIN_THREE_PRIME_DISTANCE=3\nPRIMER_MIN_LEFT_THREE_PRIME_DISTANCE=3\nPRIMER_MIN_RIGHT_THREE_PRIME_DISTANCE=3\n\nIt is an error to specify both \nPRIMER_MIN_THREE_PRIME_DISTANCE and either\nPRIMER_MIN_LEFT_THREE_PRIME_DISTANCE or \nPRIMER_MIN_RIGHT_THREE_PRIME_DISTANCE\nin the same input record.",
    "form_type": "input_number",
    "name": "PRIMER_MIN_THREE_PRIME_DISTANCE",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_MIN_TM": {
    "default_value": 57.0,
    "description": "Minimum acceptable melting temperature (Celsius) for a primer\noligo.",
    "form_type": "input_number",
    "name": "PRIMER_MIN_TM",
    "setting_type": "basic",
    "type": "float"
  },
  "PRIMER_MISPRIMING_LIBRARY": {
    "default_value": null,
    "description": "The name of a file containing a nucleotide sequence library of\nsequences to avoid amplifying (for example repetitive sequences, or\npossibly the sequences of genes in a gene family that should\nnot be amplified.)  The file must be in (a slightly restricted)\nFASTA format (W. B. Pearson and D.J. Lipman, PNAS 85:8 pp\n2444-2448 [1988]); we briefly discuss the organization of this\nfile below.  If this parameter is specified then primer3 locally\naligns each candidate primer against each library sequence and\nrejects those primers for which the local alignment score times a\nspecified weight (see below) exceeds PRIMER_MAX_LIBRARY_MISPRIMING.\n(The maximum value of the weight is arbitrarily set to 100.0.)\n\nEach sequence entry in the FASTA-format file must begin with an\n\"id line\" that starts with '>'.  The contents of the id line is\n\"slightly restricted\" in that primer3 parses everything after any\noptional asterisk ('*') as a floating point number to use as the\nweight mentioned above.  If the id line contains no asterisk then\nthe weight defaults to 1.0.  The alignment scoring system used is\nthe same as for calculating complementarity among oligos (e.g.\nPRIMER_MAX_SELF_ANY), except for the handling of IUB/IUPAC ambiguity\ncodes (discussed below).\n\nThe remainder of an entry contains the sequence as lines\nfollowing the id line up until a line starting with '>' or\nthe end of the file.  Whitespace and newlines are ignored.\nCharacters 'A', 'T', 'G', 'C', 'a', 't', 'g', 'c' and\nIUB/IUPAC 'ambiguity' codes ('R, 'Y', 'K', 'M', 'S', 'W',\n'N', including lower case) are retained. For technical\nreasons the length of the sequence must be >= 3. Of course,\nsequences of length < 10 or so are probably useless, but\nwill be accepted without complaint.\n\nWARNING: always set PRIMER_LIB_AMBIGUITY_CODES_CONSENSUS=0\nif any sequence in the library contains strings of 'N's:\nNNNNNNNNNNNNNNNNNNNN.\nNOWWW\nThere are no restrictions on line length.\n\nAn empty value for this parameter indicates that no repeat\nlibrary should be used and \"turns off\" the use of a\npreviously specified library.\n\nRepbase (J. Jurka, A.F.A. Smit, C. Pethiyagoda, and\nothers, 1995-1996, ftp://ftp.ncbi.nih.gov/repository/repbase/)\nis an excellent source of repeat sequences and pointers to the\nliterature. (The Repbase files need to be converted to Fasta\nformat before they can be used by primer3.)",
    "form_type": "input_text",
    "name": "PRIMER_MISPRIMING_LIBRARY",
    "setting_type": "additional",
    "type": "string"
  },
  "PRIMER_MUST_MATCH_FIVE_PRIME": {
    "default_value": null,
    "description": "Discards all primers which do not match this match sequence at the 5' end. \n(New in v. 2.3.6, added by A. Untergasser.)\n\nThe match sequence must be 5 nucletides long and can contain the following letters:\n    N   Any nucleotide\n\n    A   Adenine\n    G   Guanine\n    C   Cytosine\n    T   Thymine\n\n    R   Purine (A or G)\n    Y   Pyrimidine (C or T)\n    W   Weak (A or T)\n    S   Strong (G or C)\n    M   Amino (A or C)\n    K   Keto (G or T)\n    B   Not A (G or C or T)\n    H   Not G (A or C or T)\n    D   Not C (A or G or T)\n    V   Not T (A or G or C)\nExample 1:    tgcatgattggatacgtttga\n    |||||\n    tgnnn\n\n -> This primer would be used.\n\n\n    attcgattctccccggtatc\n      |||\n    tgnnn\n\n -> This primer would be discarded.\nExample 2:    tgcatgattggatacgtttga\n    |||||\n    hnnnn\n\n -> This primer would be used.\n\n\n    ggctgatgaaggaaagcaag\n     ||||\n    hnnnn\n\n -> This primer would be discarded.\n",
    "form_type": "input_text",
    "name": "PRIMER_MUST_MATCH_FIVE_PRIME",
    "setting_type": "additional",
    "type": "ambiguous nucleotide sequence"
  },
  "PRIMER_MUST_MATCH_THREE_PRIME": {
    "default_value": null,
    "description": "Discards all primers which do not match this match sequence at the 3' end. Similar \nparameter to PRIMER_MUST_MATCH_FIVE_PRIME, but limits the 3' end. \n(New in v. 2.3.6, added by A. Untergasser.)\n\nThe match sequence must be 5 nucletides long and can contain the following letters:\n    N   Any nucleotide\n\n    A   Adenine\n    G   Guanine\n    C   Cytosine\n    T   Thymine\n\n    R   Purine (A or G)\n    Y   Pyrimidine (C or T)\n    W   Weak (A or T)\n    S   Strong (G or C)\n    M   Amino (A or C)\n    K   Keto (G or T)\n    B   Not A (G or C or T)\n    H   Not G (A or C or T)\n    D   Not C (A or G or T)\n    V   Not T (A or G or C)\nExample 1:    tgcatgattggatacgtttga\n                    |||||\n                    nnnga\n\n -> This primer would be used.\n\n\n    attcgattctccccggtatc\n                   |||\n                   nnnga\n\n -> This primer would be discarded.\n",
    "form_type": "input_text",
    "name": "PRIMER_MUST_MATCH_THREE_PRIME",
    "setting_type": "additional",
    "type": "ambiguous nucleotide sequence"
  },
  "PRIMER_NUM_RETURN": {
    "default_value": 5,
    "description": "The maximum number of primer (pairs) to return.  Primer pairs\nreturned are sorted by their \"quality\", in other words by the\nvalue of the objective function (where a lower number indicates a\nbetter primer pair).  Caution: setting this parameter to a large\nvalue will increase running time.",
    "form_type": "input_number",
    "name": "PRIMER_NUM_RETURN",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_OPT_GC_PERCENT": {
    "default_value": 50.0,
    "description": "Optimum GC percent.  This parameter influences primer selection only if\nPRIMER_WT_GC_PERCENT_GT or PRIMER_WT_GC_PERCENT_LT are non-0.",
    "form_type": "input_number",
    "name": "PRIMER_OPT_GC_PERCENT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_OPT_SIZE": {
    "default_value": 20,
    "description": "Optimum length (in bases) of a primer. Primer3 will attempt to \npick primers close to this length.",
    "form_type": "input_number",
    "name": "PRIMER_OPT_SIZE",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_OPT_TM": {
    "default_value": 60.0,
    "description": "Optimum melting temperature (Celsius) for a primer. Primer3\nwill try to pick primers with melting temperatures are close to\nthis temperature.  The oligo melting temperature formula used can\nbe specified by user. Please see PRIMER_TM_FORMULA for more\ninformation.",
    "form_type": "input_number",
    "name": "PRIMER_OPT_TM",
    "setting_type": "basic",
    "type": "float"
  },
  "PRIMER_OUTSIDE_PENALTY": {
    "default_value": 0.0,
    "description": "Non-default values are valid only for sequences with 0 or 1\ntarget regions.  If the primer is part of a pair that spans a\ntarget and does not overlap the target, then multiply this value\ntimes the number of nucleotide positions from the 3' end to the\n(unique) target to get the 'position penalty'.  The effect of\nthis parameter is to allow primer3 to include nearness to the\ntarget as a term in the objective function.",
    "form_type": "input_number",
    "name": "PRIMER_OUTSIDE_PENALTY",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_MAX_COMPL_ANY": {
    "default_value": 8.0,
    "description": "PRIMER_PAIR_MAX_COMPL_ANY describes the tendency of the left primer \nto bind to the right primer. It is the maximum allowable local alignment score when testing for \ncomplementarity between left and right primers. It is similar to PRIMER_MAX_SELF_ANY.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_MAX_COMPL_ANY",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_PAIR_MAX_COMPL_ANY_TH": {
    "default_value": 47.0,
    "description": "PRIMER_PAIR_MAX_COMPL_ANY_TH describes the tendency of the left primer \n    to bind to the right primer. It is similar to PRIMER_MAX_SELF_ANY_TH.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_MAX_COMPL_ANY_TH",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_PAIR_MAX_COMPL_END": {
    "default_value": 3.0,
    "description": "PRIMER_PAIR_MAX_COMPL_END tries to bind the 3'-END of the left primer \nto the right primer and scores the best binding it can find. \nIt is similar to PRIMER_MAX_SELF_END.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_MAX_COMPL_END",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_PAIR_MAX_COMPL_END_TH": {
    "default_value": 47.0,
    "description": "Same as PRIMER_PAIR_MAX_COMPL_END but for calculating the\nscore (melting temperature of structure) thermodynamical approach is used.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_MAX_COMPL_END_TH",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_PAIR_MAX_DIFF_TM": {
    "default_value": 100.0,
    "description": "Maximum acceptable (unsigned) difference between the melting\ntemperatures of the left and right primers.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_MAX_DIFF_TM",
    "setting_type": "basic",
    "type": "float"
  },
  "PRIMER_PAIR_MAX_LIBRARY_MISPRIMING": {
    "default_value": 24.0,
    "description": "The maximum allowed sum of similarities of a primer pair\n(one similarity for each primer) with any single sequence in\nPRIMER_MISPRIMING_LIBRARY.  \nLibrary sequence weights are not used in computing the sum\nof similarities.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_MAX_LIBRARY_MISPRIMING",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_PAIR_MAX_TEMPLATE_MISPRIMING": {
    "default_value": -1.0,
    "description": "The maximum allowed summed similarity of both primers to\nectopic sites in the template. A negative value means do not\ncheck.  The scoring system is the same as used for\nPRIMER_PAIR_MAX_LIBRARY_MISPRIMING, except that an ambiguity code \nin the template is never treated as a consensus (see\nPRIMER_LIB_AMBIGUITY_CODES_CONSENSUS).  Primer3 does not\ncheck the similarity of hybridization oligos (internal\noligos) to locations outside of the amplicon.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_MAX_TEMPLATE_MISPRIMING",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_PAIR_MAX_TEMPLATE_MISPRIMING_TH": {
    "default_value": -1.0,
    "description": "The maximum allowed summed melting temperatures\nof both primers at ectopic sites within the template (with\nthe two primers in an orientation that would allow PCR\namplification.) \nThe melting temperatures are calculated\nas for PRIMER_MAX_TEMPLATE_MISPRIMING_TH.\n\n\n",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_MAX_TEMPLATE_MISPRIMING_TH",
    "setting_type": "additional",
    "type": "decimal"
  },
  "PRIMER_PAIR_WT_COMPL_ANY": {
    "default_value": 0.0,
    "description": "Penalty weight for the binding value of the primer pair as in \nPRIMER_MAX_SELF_ANY.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_COMPL_ANY",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_WT_COMPL_ANY_TH": {
    "default_value": 0.0,
    "description": "Penalty weight for the binding value of the primer pair as in PRIMER_MAX_SELF_ANY_TH.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_COMPL_ANY_TH",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_WT_COMPL_END": {
    "default_value": 0.0,
    "description": "Penalty weight for the binding value of the primer pair as in \nPRIMER_MAX_SELF_END.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_COMPL_END",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_WT_COMPL_END_TH": {
    "default_value": 0.0,
    "description": "Penalty weight for the binding value of the primer pair as in PRIMER_MAX_SELF_END_TH.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_COMPL_END_TH",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_WT_DIFF_TM": {
    "default_value": 0.0,
    "description": "Penalty weight for the TM difference between the left primer and \nthe right primer.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_DIFF_TM",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_WT_IO_PENALTY": {
    "default_value": 0.0,
    "description": "Penalty factor for the internal oligo added to the pair penalty.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_IO_PENALTY",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_WT_LIBRARY_MISPRIMING": {
    "default_value": 0.0,
    "description": "Penalty for a primer pair binding to any single sequence \nin PRIMER_MISPRIMING_LIBRARY.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_LIBRARY_MISPRIMING",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_WT_PRODUCT_SIZE_GT": {
    "default_value": 0.0,
    "description": "Penalty weight for products longer than PRIMER_PRODUCT_OPT_SIZE.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_PRODUCT_SIZE_GT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_WT_PRODUCT_SIZE_LT": {
    "default_value": 0.0,
    "description": "Penalty weight for products shorter than PRIMER_PRODUCT_OPT_SIZE.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_PRODUCT_SIZE_LT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_WT_PRODUCT_TM_GT": {
    "default_value": 0.0,
    "description": "Penalty weight for products with a Tm higher than  \nPRIMER_PRODUCT_OPT_TM.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_PRODUCT_TM_GT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_WT_PRODUCT_TM_LT": {
    "default_value": 0.0,
    "description": "Penalty weight for products with a Tm lower than \nPRIMER_PRODUCT_OPT_TM.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_PRODUCT_TM_LT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_WT_PR_PENALTY": {
    "default_value": 1.0,
    "description": "Penalty factor for the sum of the left and the right primer added \nto the pair penalty. Setting this value below 1.0 will increase \nrunning time.\n\nAs PRIMER_PAIR_WT_PR_PENALTY or the per-primer \npenalties it multiplies become lower with respect to various \npair penalties (for example PRIMER_PAIR_WT_PRODUCT_SIZE_LT\nPRIMER_PAIR_WT_PRODUCT_SIZE_GT\nPRIMER_PAIR_WT_DIFF_TM, etc.) the running time of the \nsearch for primer pairs is likely to grow substantially. The \nreason is that the search algorithm must calculate the penalty \nfor more primer pairs (as opposed to excluding them based on \nthe penalties of the individual oligos).\n\n",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_PR_PENALTY",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_WT_TEMPLATE_MISPRIMING": {
    "default_value": 0.0,
    "description": "Penalty for a primer pair binding to the template sequence.\n\nThe use of this Tag is modified from primer3 version 2.0 on: \nThe values used with the older versions have to be multiplied \nby the factor 100 to have the same effect.",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_TEMPLATE_MISPRIMING",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PAIR_WT_TEMPLATE_MISPRIMING_TH": {
    "default_value": 0.0,
    "description": "Penalty for a primer pair binding to the template sequence\n(thermodynamic approach, when PRIMER_THERMODYNAMIC_TEMPLATE_ALIGNMENT=1).",
    "form_type": "input_number",
    "name": "PRIMER_PAIR_WT_TEMPLATE_MISPRIMING_TH",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PICK_ANYWAY": {
    "default_value": false,
    "description": "If true use primer provided in SEQUENCE_PRIMER, SEQUENCE_PRIMER_REVCOMP, \nor SEQUENCE_INTERNAL_OLIGO even if it violates specific \nconstraints.",
    "form_type": "checkbox",
    "name": "PRIMER_PICK_ANYWAY",
    "setting_type": "additional",
    "type": "boolean"
  },
  "PRIMER_PICK_INTERNAL_OLIGO": {
    "default_value": false,
    "description": "If the associated value = 1 (non-0), then primer3 will attempt to\npick an internal oligo (hybridization probe to detect the PCR\nproduct).",
    "form_type": "checkbox",
    "name": "PRIMER_PICK_INTERNAL_OLIGO",
    "setting_type": "basic",
    "type": "boolean"
  },
  "PRIMER_PICK_LEFT_PRIMER": {
    "default_value": true,
    "description": "If the associated value = 1 (non-0), then primer3 will attempt to\npick left primers.",
    "form_type": "checkbox",
    "name": "PRIMER_PICK_LEFT_PRIMER",
    "setting_type": "basic",
    "type": "boolean"
  },
  "PRIMER_PICK_RIGHT_PRIMER": {
    "default_value": true,
    "description": "If the associated value = 1 (non-0), then primer3 will attempt to\npick a right primer.",
    "form_type": "checkbox",
    "name": "PRIMER_PICK_RIGHT_PRIMER",
    "setting_type": "basic",
    "type": "boolean"
  },
  "PRIMER_PRODUCT_MAX_TM": {
    "default_value": 1000000.0,
    "description": "The maximum allowed melting temperature of the amplicon.  Primer3\ncalculates product Tm calculated using the formula from Bolton\nand McCarthy, PNAS 84:1390 (1962) as presented in Sambrook,\nFritsch and Maniatis, Molecular Cloning, p 11.46 (1989, CSHL\nPress).   Tm = 81.5 + 16.6(log10([Na+])) + .41*(%GC) - 600/length\nWhere [Na+] is the molar sodium concentration, (%GC) is the\npercent of Gs and Cs in the sequence, and length is the length of\nthe sequence.\n\nA similar formula is used by the prime primer selection program\nin GCG (http://www.gcg.com), which instead uses 675.0 / length in\nthe last term (after F. Baldino, Jr, M.-F. Chesselet, and M.E.\nLewis, Methods in Enzymology 168:766 (1989) eqn (1) on page 766\nwithout the mismatch and formamide terms).  The formulas here and\nin Baldino et al. assume Na+ rather than K+.  According to\nJ.G. Wetmur, Critical Reviews in BioChem. and Mol. Bio. 26:227\n(1991) 50 mM K+ should be equivalent in these formulae to .2 M\nNa+.  Primer3 uses the same salt concentration value for\ncalculating both the primer melting temperature and the oligo\nmelting temperature.  If you are planning to use the PCR product\nfor hybridization later this behavior will not give you the Tm\nunder hybridization conditions.",
    "form_type": "input_number",
    "name": "PRIMER_PRODUCT_MAX_TM",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PRODUCT_MIN_TM": {
    "default_value": -1000000.0,
    "description": "The minimum allowed melting temperature of the amplicon.  Please\nsee the documentation on PRIMER_PRODUCT_MAX_TM for details.",
    "form_type": "input_number",
    "name": "PRIMER_PRODUCT_MIN_TM",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PRODUCT_OPT_SIZE": {
    "default_value": 0,
    "description": "The optimum size for the PCR product.  0 indicates that there is\nno optimum product size.  This parameter influences primer pair \nselection only if PRIMER_PAIR_WT_PRODUCT_SIZE_GT or\nPRIMER_PAIR_WT_PRODUCT_SIZE_LT is non-0.\n\nA non-0 value for this parameter will likely increase calculation time, so set this only if \na product size near a specific value is truly important.\n",
    "form_type": "input_number",
    "name": "PRIMER_PRODUCT_OPT_SIZE",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_PRODUCT_OPT_TM": {
    "default_value": 0.0,
    "description": "The optimum melting temperature for the PCR product. 0 indicates\nthat there is no optimum temperature.",
    "form_type": "input_number",
    "name": "PRIMER_PRODUCT_OPT_TM",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_PRODUCT_SIZE_RANGE": {
    "default_value": "100-300",
    "description": "The associated values specify the lengths of the product that the\nuser wants the primers to create, and is a space separated list\nof elements of the form<x>-<y>\nwhere an <x>-<y> pair is a legal range of lengths for the\nproduct.  For example, if one wants PCR products to be between\n100 to 150 bases (inclusive) then one would set this parameter to\n100-150.  If one desires PCR products in either the range from\n100 to 150 bases or in the range from 200 to 250 bases then one\nwould set this parameter to 100-150 200-250.\n\nPrimer3 favors product-size ranges to the left side of the parameter string.\nPrimer3 will return legal primers pairs in the first range\nregardless the value of the objective function for pairs in subsequent ranges.\n\nOnly if there are an insufficient number of primers in the first\nrange will primer3 return primers in a subsequent range.\n\nFor those with primarily a computational background,\nthe PCR product size is the size (in base pairs) \nof the DNA fragment that would be produced by the\nPCR reaction on the given sequence template.  This\nwould, of course, include the primers themselves.",
    "form_type": "input_text",
    "name": "PRIMER_PRODUCT_SIZE_RANGE",
    "setting_type": "basic",
    "type": "size range list"
  },
  "PRIMER_QUALITY_RANGE_MAX": {
    "default_value": 100,
    "description": "The maximum legal sequence quality (used for error checking\nof PRIMER_MIN_QUALITY and PRIMER_MIN_END_QUALITY).",
    "form_type": "input_number",
    "name": "PRIMER_QUALITY_RANGE_MAX",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_QUALITY_RANGE_MIN": {
    "default_value": 0,
    "description": "The minimum legal sequence quality (used for error checking\nof PRIMER_MIN_QUALITY and PRIMER_MIN_END_QUALITY).",
    "form_type": "input_number",
    "name": "PRIMER_QUALITY_RANGE_MIN",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_SALT_CORRECTIONS": {
    "default_value": 1,
    "description": "Specifies the salt correction formula for the melting temperature\ncalculation.  (New in v. 1.1.0, added by Maido Remm and Triinu\nKoressaar)\n\nA value of 0 directs primer3 to use the the salt correction\nformula in the paper [Schildkraut, C, and Lifson, S (1965)\n\"Dependence of the melting temperature of DNA on salt\nconcentration\", Biopolymers 3:195-208 (not available on-line)].\nThis was the formula used in older versions of primer3.\n\n\nA value of 1 (*RECOMMENDED*) directs primer3 to use the salt correction\nformula in the paper [SantaLucia JR (1998) \"A unified view of polymer,\ndumbbell and oligonucleotide DNA nearest-neighbor thermodynamics\",\nProc Natl Acad Sci 95:1460-65\nhttp://dx.doi.org/10.1073/pnas.95.4.1460]\n\n\nA value of 2 directs primer3 to use the salt correction formula\nin the paper [Owczarzy, R., Moreira, B.G., You, Y., Behlke, M.A., and\nWalder, J.A. (2008). Predicting stability of DNA duplexes in solutions\ncontaining magnesium and monovalent cations. Biochemistry 47, 5336-5353\nhttp://dx.doi.org/10.1021/bi702363u] following recommendations in the paper\n[Ahsen, v.N., Wittwer, C.T., and SchÃ¼tz, E. (2010). Monovalent and divalent\nsalt correction algorithms for Tm prediction-recommendations for Primer3\nusage. Brief Bioinform 12, 514 http://dx.doi.org/10.1093/bib/bbq081]. \n\n\nFor all values of PRIMER_SALT_CORRECTIONS,\nPrimer3 also considers the values of the\ntags PRIMER_SALT_DIVALENT, \nPRIMER_INTERNAL_SALT_DIVALENT,\nPRIMER_DNTP_CONC, and\nPRIMER_INTERNAL_DNTP_CONC.\n",
    "form_type": "input_number",
    "name": "PRIMER_SALT_CORRECTIONS",
    "setting_type": "basic",
    "type": "int"
  },
  "PRIMER_SALT_DIVALENT": {
    "default_value": 1.5,
    "description": "The millimolar concentration of divalent salt cations (usually MgCl^(2+)) in\nthe PCR. (New in v. 1.1.0, added by Maido Remm and Triinu Koressaar)\n\nPrimer3 converts concentration of divalent cations to concentration\nof monovalent cations using formula suggested in the paper [Ahsen von N,\nWittwer CT, Schutz E (2001) \"Oligonucleotide Melting Temperatures under PCR\nConditions: Nearest-Neighbor Corrections for Mg^(2+), Deoxynucleotide Triphosphate,\nand Dimethyl Sulfoxide Concentrations with Comparison to Alternative Empirical \nFormulas\", Clinical Chemistry 47:1956-61 http://www.clinchem.org/cgi/content/full/47/11/1956].[Monovalent cations] = [Monovalent cations] + 120*(([divalent cations] - [dNTP])^0.5)\nIn addition, \nif the specified concentration of dNTPs (PRIMER_DNTP_CONC)\nis larger than the concentration of divalent cations (PRIMER_SALT_DIVALENT)\nthen the effect of the divalent cations is not considered. The\nconcentration of dNTPs is considered in the formula above \nbecause of some magnesium is bound by the dNTP.\nThe adjusted concentration of monovalent cations is used in the\ncalculation of oligo/primer\nmelting temperature, PCR product melting temperature,\nthe stability of oligo dimers and \nsecondary structures (when PRIMER_THERMODYNAMIC_OLIGO_ALIGNMENT is 1),\nand the stability of ectopic annealing of oligos to template\n(when PRIMER_THERMODYNAMIC_TEMPLATE_ALIGNMENT is 1).\nIf PRIMER_SALT_DIVALENT > 0.0, be sure to\nset tag PRIMER_DNTP_CONC to specify the concentration of dNTPs.\n",
    "form_type": "input_number",
    "name": "PRIMER_SALT_DIVALENT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_SALT_MONOVALENT": {
    "default_value": 50.0,
    "description": "The millimolar (mM) concentration of monovalent salt cations (usually KCl) in the PCR.\nPrimer3 uses this argument to calculate oligo and primer melting\ntemperatures. \nUse tag PRIMER_SALT_DIVALENT and \nPRIMER_INTERNAL_SALT_DIVALENT to specify the concentrations\nof divalent cations (in which case you also should also set tag PRIMER_DNTP_CONC to\na reasonable value).\n",
    "form_type": "input_number",
    "name": "PRIMER_SALT_MONOVALENT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_SEQUENCING_ACCURACY": {
    "default_value": 20,
    "description": "Defines the space from the calculated position of the 3'end to \nboth sides in which primer3plus picks the best primer. Value only used if \nPRIMER_TASK=pick_sequencing_primers.",
    "form_type": "input_number",
    "name": "PRIMER_SEQUENCING_ACCURACY",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_SEQUENCING_INTERVAL": {
    "default_value": 250,
    "description": "Defines the space from the 3'end of the primer to the 3'end of \nthe next primer on the reverse strand. Value only used if \nPRIMER_TASK=pick_sequencing_primers.",
    "form_type": "input_number",
    "name": "PRIMER_SEQUENCING_INTERVAL",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_SEQUENCING_LEAD": {
    "default_value": 50,
    "description": "Defines the space from the 3'end of the primer to the point \nwere the trace signals are readable. Value only used if \nPRIMER_TASK=pick_sequencing_primers.",
    "form_type": "input_number",
    "name": "PRIMER_SEQUENCING_LEAD",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_SEQUENCING_SPACING": {
    "default_value": 500,
    "description": "Defines the space from the 3'end of the primer to the 3'end of \nthe next primer on the same strand. Value only used if \nPRIMER_TASK=pick_sequencing_primers.",
    "form_type": "input_number",
    "name": "PRIMER_SEQUENCING_SPACING",
    "setting_type": "additional",
    "type": "int"
  },
  "PRIMER_TASK": {
    "default_value": "generic",
    "description": "This tag tells primer3 what task to perform.\nLegal values are:\n\ngeneric\n\n   Design a primer pair (the classic primer3 task) if\n   the PRIMER_PICK_LEFT_PRIMER=1, and\n   PRIMER_PICK_RIGHT_PRIMER=1. In addition, pick\n   an internal hybridization oligo if \n   PRIMER_PICK_INTERNAL_OLIGO=1.\n   \n   NOTE: If PRIMER_PICK_LEFT_PRIMER=1, \n   PRIMER_PICK_RIGHT_PRIMER=0 \n   and\n   PRIMER_PICK_INTERNAL_OLIGO=1,\n   then behaves similarly to \n   PRIMER_TASK=pick_primer_list.\n\n\npick_detection_primers\n\n   Deprecated alias for PRIMER_TASK=generic\n\ncheck_primers\n\n   Primer3 only checks the primers \n   provided in SEQUENCE_PRIMER, SEQUENCE_INTERNAL_OLIGO and \n   SEQUENCE_PRIMER_REVCOMP. It is the only task that does not\n   require a sequence. However, if SEQUENCE_TEMPLATE is provided, it is used.\n   \n\npick_primer_list\n\n   Pick all primers in SEQUENCE_TEMPLATE (possibly\n   limited by SEQUENCE_INCLUDED_REGION, \n   SEQUENCE_EXCLUDED_REGION,\n   SEQUENCE_PRIMER_PAIR_OK_REGION_LIST, etc.).\n   Returns the primers sorted by quality starting with the \n   best primers. If PRIMER_PICK_LEFT_PRIMER and \n   PRIMER_PICK_RIGHT_PRIMER is selected primer3 does not to pick \n   primer pairs but generates independent lists of left primers, right primers,\n   and, if requested, internal oligos.\n\npick_sequencing_primers\n\n   Pick primers suited to sequence a region. SEQUENCE_TARGET can be \n   used to indicate several targets. The position of each primer is \n   calculated for optimal sequencing results.\n\npick_cloning_primers\n\n   Pick primers suited to clone a gene were the start nucleotide and \n   the end nucleotide of the PCR fragment must be fixed, for example \n   to clone an ORF. SEQUENCE_INCLUDED_REGION must be used to \n   indicate the first and the last nucleotide. Due to these \n   limitations primer3 can only vary the length of the primers. Set \n   PRIMER_PICK_ANYWAY=1 to obtain primers even if they violate \n   specific constraints.\n\npick_discriminative_primers\n\n   Pick primers suited to select primers which bind with their end at \n   a specific position. This can be used to force the end of a primer \n   to a polymorphic site, with the goal of discriminating between\n   sequence variants. SEQUENCE_INCLUDED_REGION must be used to \n   indicate the last nucleotide of the left (first nucleotide of \n   included region) and the right primer (last nucleotide of \n   included region). Due to these limitations primer3 can only vary \n   the length of the primers. Set PRIMER_PICK_ANYWAY=1 to obtain \n   primers even if they violate specific constraints.\n\npick_pcr_primers\n\n   Deprecated shortcut for the following settings:\nPRIMER_TASK=generic\nPRIMER_PICK_LEFT_PRIMER=1\nPRIMER_PICK_INTERNAL_OLIGO=0\nPRIMER_PICK_RIGHT_PRIMER=1\n\n   WARNING: this task changes the values of PRIMER_PICK_LEFT_PRIMER,\n   PRIMER_PICK_INTERNAL_OLIGO, and PRIMER_PICK_RIGHT_PRIMER\n   in a way that is not obvious by looking at the input.\n\npick_pcr_primers_and_hyb_probe\n\n   Deprecated shortcut for the following settings:\nPRIMER_TASK=generic\nPRIMER_PICK_LEFT_PRIMER=1\nPRIMER_PICK_INTERNAL_OLIGO=1\nPRIMER_PICK_RIGHT_PRIMER=1\n\n   WARNING: this task changes the values of PRIMER_PICK_LEFT_PRIMER,\n   PRIMER_PICK_INTERNAL_OLIGO, and PRIMER_PICK_RIGHT_PRIMER\n   in a way that is not obvious by looking at the input.\n\npick_left_only\n\n   Deprecated shortcut for the following settings:\nPRIMER_TASK=generic\nPRIMER_PICK_LEFT_PRIMER=1\nPRIMER_PICK_INTERNAL_OLIGO=0\nPRIMER_PICK_RIGHT_PRIMER=0\n\n   WARNING: this task changes the values of PRIMER_PICK_LEFT_PRIMER,\n   PRIMER_PICK_INTERNAL_OLIGO, and PRIMER_PICK_RIGHT_PRIMER\n   in a way that is not obvious by looking at the input.\n\npick_right_only\n\n   Deprecated shortcut for the following settings:\nPRIMER_TASK=generic\nPRIMER_PICK_LEFT_PRIMER=0\nPRIMER_PICK_INTERNAL_OLIGO=0\nPRIMER_PICK_RIGHT_PRIMER=1\n\n   WARNING: this task changes the values of PRIMER_PICK_LEFT_PRIMER,\n   PRIMER_PICK_INTERNAL_OLIGO, and PRIMER_PICK_RIGHT_PRIMER\n   in a way that is not obvious by looking at the input.\n\npick_hyb_probe_only\n\n   Deprecated shortcut for the following settings:\nPRIMER_TASK=generic\nPRIMER_PICK_LEFT_PRIMER=0\nPRIMER_PICK_INTERNAL_OLIGO=1\nPRIMER_PICK_RIGHT_PRIMER=0\n\n   WARNING: this task changes the values of PRIMER_PICK_LEFT_PRIMER,\n   PRIMER_PICK_INTERNAL_OLIGO, and PRIMER_PICK_RIGHT_PRIMER\n   in a way that is not obvious by looking at the input.\n",
    "form_type": "input_text",
    "name": "PRIMER_TASK",
    "setting_type": "additional",
    "type": "string"
  },
  "PRIMER_THERMODYNAMIC_OLIGO_ALIGNMENT": {
    "default_value": true,
    "description": "If the associated value = 1, then primer3 will use\nthermodynamic models to calculate the\nthe propensity of oligos to form hairpins and dimers.\n",
    "form_type": "checkbox",
    "name": "PRIMER_THERMODYNAMIC_OLIGO_ALIGNMENT",
    "setting_type": "additional",
    "type": "boolean"
  },
  "PRIMER_THERMODYNAMIC_PARAMETERS_PATH": {
    "default_value": "./primer3_config",
    "description": "This tag specifies the path to the directory that contains all the\nparameter files used by the thermodynamic approach. In Linux, there are two\ndefault locations that are tested if this tag is not defined: \n./primer3_config/ and /opt/primer3_config/.\nFor Windows, there is only one default location: .\\primer3_config\\.",
    "form_type": "input_text",
    "name": "PRIMER_THERMODYNAMIC_PARAMETERS_PATH",
    "setting_type": "additional",
    "type": "string"
  },
  "PRIMER_THERMODYNAMIC_TEMPLATE_ALIGNMENT": {
    "default_value": false,
    "description": "If the associated value = 1, then primer3 will use\nthermodynamic models to calculate the\nthe propensity of oligos to anneal to undesired sites in the template sequence.\n",
    "form_type": "checkbox",
    "name": "PRIMER_THERMODYNAMIC_TEMPLATE_ALIGNMENT",
    "setting_type": "additional",
    "type": "boolean"
  },
  "PRIMER_TM_FORMULA": {
    "default_value": 1,
    "description": "Specifies details of melting temperature calculation.  (New in\nv. 1.1.0, added by Maido Remm and Triinu Koressaar.)\n\nA value of 0 directs primer3 to a backward compatible calculation\n(in other words, the only calculation available in previous\nversion of primer3).\n\nThis backward compatible calculation uses the table of\nthermodynamic parameters in the paper [Breslauer KJ, Frank R,\nBlÃ¶cker H and Marky LA (1986) \"Predicting DNA duplex stability\nfrom the base sequence\" Proc Natl Acad Sci 83:4746-50\nhttp://dx.doi.org/10.1073/pnas.83.11.3746],\nand the method in the paper [Rychlik W, Spencer WJ and Rhoads\nRE (1990) \"Optimization of the annealing temperature for DNA\namplification in vitro\", Nucleic Acids Res 18:6409-12\nhttp://dx.doi.org/10.1093/nar/18.21.6409].\n\nA value of 1 (*RECOMMENDED*) directs primer3 to use the table of\nthermodynamic values and the method for melting temperature\ncalculation suggested in the paper [SantaLucia JR (1998) \"A unified\nview of polymer, dumbbell and oligonucleotide DNA nearest-neighbor\nthermodynamics\", Proc Natl Acad Sci 95:1460-65\nhttp://dx.doi.org/10.1073/pnas.95.4.1460].\n\nUse tag PRIMER_SALT_CORRECTIONS, to specify the salt correction\nmethod for melting temperature calculation.\n\nExample of calculating the melting temperature of an oligo if\nPRIMER_TM_FORMULA=1 and PRIMER_SALT_CORRECTIONS=1\nrecommended values):\n\nprimer=CGTGACGTGACGGACT\n\nUsing default salt and DNA concentrations we haveTm = deltaH/(deltaS + R*ln(C/4))\nwhere R is the gas constant (1.987 cal/K mol) and C is the DNA \nconcentration.deltaH(predicted) =\n  = dH(CG) + dH(GT) + dH(TG) + .. + dH(CT) +\n     + dH(init.w.term.GC) + dH(init.w.term.AT) =\n\n  = -10.6 + (-8.4) + (-8.5) + .. + (-7.8) + 0.1 + 2.3  =\n\n  = -128.8 kcal/mol\nwhere 'init.w.term GC' and 'init.w.term AT' are two\ninitiation parameters for duplex formation: 'initiation with\nterminal GC' and 'initiation with terminal AT'deltaS(predicted) =\n  = dS(CG) + dS(GT) + dS(TG) + .. + dS(CT) +\n    + dS(init.w.term.GC) + dS(init.w.term.AT) =\n\n  = -27.2 + (-22.4) + (-22.7) + .. + (-21.0) + (-2.8) + 4.1 =\n \n  = -345.2 cal/k*mol\n\ndeltaS(salt corrected) = \n  = deltaS(predicted) + 0.368*15(NN pairs)*ln(0.05M monovalent cations) =\n  = -361.736\n\nTm = -128.800/(-361.736+1.987*ln((5*10^(-8))/4)) =\n   = 323.704 K\n\nTm(C) = 323.704 - 273.15 = 50.554 C\n",
    "form_type": "input_number",
    "name": "PRIMER_TM_FORMULA",
    "setting_type": "basic",
    "type": "int"
  },
  "PRIMER_WT_END_QUAL": {
    "default_value": 0.0,
    "description": " ",
    "form_type": "input_number",
    "name": "PRIMER_WT_END_QUAL",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_END_STABILITY": {
    "default_value": 0.0,
    "description": "Penalty factor for the calculated maximum stability for the \nlast five 3' bases of a left or right primer.",
    "form_type": "input_number",
    "name": "PRIMER_WT_END_STABILITY",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_GC_PERCENT_GT": {
    "default_value": 0.0,
    "description": "Penalty weight for primers with GC percent higher than\nPRIMER_OPT_GC_PERCENT.",
    "form_type": "input_number",
    "name": "PRIMER_WT_GC_PERCENT_GT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_GC_PERCENT_LT": {
    "default_value": 0.0,
    "description": "Penalty weight for primers with GC percent lower than\nPRIMER_OPT_GC_PERCENT.",
    "form_type": "input_number",
    "name": "PRIMER_WT_GC_PERCENT_LT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_HAIRPIN_TH": {
    "default_value": 0.0,
    "description": "Penalty weight for the individual primer hairpin structure value as in PRIMER_MAX_HAIRPIN_TH.",
    "form_type": "input_number",
    "name": "PRIMER_WT_HAIRPIN_TH",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_LIBRARY_MISPRIMING": {
    "default_value": 0.0,
    "description": "Penalty for a single primer binding to any single sequence \nin PRIMER_MISPRIMING_LIBRARY.",
    "form_type": "input_number",
    "name": "PRIMER_WT_LIBRARY_MISPRIMING",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_NUM_NS": {
    "default_value": 0.0,
    "description": "Penalty weight for the number of Ns in the primer.",
    "form_type": "input_number",
    "name": "PRIMER_WT_NUM_NS",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_POS_PENALTY": {
    "default_value": 1.0,
    "description": "Penalty for the primer which do not overlap the target.",
    "form_type": "input_number",
    "name": "PRIMER_WT_POS_PENALTY",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_SELF_ANY": {
    "default_value": 0.0,
    "description": "Penalty weight for the individual primer self binding value as in \nPRIMER_MAX_SELF_ANY.",
    "form_type": "input_number",
    "name": "PRIMER_WT_SELF_ANY",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_SELF_ANY_TH": {
    "default_value": 0.0,
    "description": "Penalty weight for the individual primer self binding value as in \n     PRIMER_MAX_SELF_ANY_TH.",
    "form_type": "input_number",
    "name": "PRIMER_WT_SELF_ANY_TH",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_SELF_END": {
    "default_value": 0.0,
    "description": "Penalty weight for the individual primer self binding value as in \nPRIMER_MAX_SELF_END.",
    "form_type": "input_number",
    "name": "PRIMER_WT_SELF_END",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_SELF_END_TH": {
    "default_value": 0.0,
    "description": "Penalty weight for the individual primer self binding\nvalue as in PRIMER_MAX_SELF_END_TH",
    "form_type": "input_number",
    "name": "PRIMER_WT_SELF_END_TH",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_SEQ_QUAL": {
    "default_value": 0.0,
    "description": "Penalty weight for the sequence quality of the primer.",
    "form_type": "input_number",
    "name": "PRIMER_WT_SEQ_QUAL",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_SIZE_GT": {
    "default_value": 1.0,
    "description": "Penalty weight for primers longer than PRIMER_OPT_SIZE.",
    "form_type": "input_number",
    "name": "PRIMER_WT_SIZE_GT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_SIZE_LT": {
    "default_value": 1.0,
    "description": "Penalty weight for primers shorter than PRIMER_OPT_SIZE.",
    "form_type": "input_number",
    "name": "PRIMER_WT_SIZE_LT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_TEMPLATE_MISPRIMING": {
    "default_value": 0.0,
    "description": "Penalty for a single primer binding to the template sequence.\n\nThe use of this Tag is modified from primer3 version 2.0 on: \nThe values used with the older versions have to be multiplied \nby the factor 100 to have the same effect.",
    "form_type": "input_number",
    "name": "PRIMER_WT_TEMPLATE_MISPRIMING",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_TEMPLATE_MISPRIMING_TH": {
    "default_value": 0.0,
    "description": "Penalty for a single primer binding to the template sequence (thermodynamic approach, when PRIMER_THERMODYNAMIC_TEMPLATE_ALIGNMENT=1).",
    "form_type": "input_number",
    "name": "PRIMER_WT_TEMPLATE_MISPRIMING_TH",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_TM_GT": {
    "default_value": 1.0,
    "description": "Penalty weight for primers with Tm over PRIMER_OPT_TM.",
    "form_type": "input_number",
    "name": "PRIMER_WT_TM_GT",
    "setting_type": "additional",
    "type": "float"
  },
  "PRIMER_WT_TM_LT": {
    "default_value": 1.0,
    "description": "Penalty weight for primers with Tm lower than PRIMER_OPT_TM.",
    "form_type": "input_number",
    "name": "PRIMER_WT_TM_LT",
    "setting_type": "additional",
    "type": "float"
  },
  "SEQUENCE_EXCLUDED_REGION": {
    "default_value": null,
    "description": "Primers and oligos may not overlap any region specified in this tag.\nThe associated value must be a space-separated list of<start>,<length>\npairs where <start> is the index of the first base of\nthe excluded region, and <length> is its length.  This tag is\nuseful for tasks such as excluding regions of low sequence\nquality or for excluding regions containing repetitive elements\nsuch as ALUs or LINEs.",
    "form_type": "input_number",
    "name": "SEQUENCE_EXCLUDED_REGION",
    "setting_type": "basic",
    "type": "int"
  },
  "SEQUENCE_FORCE_LEFT_END": {
    "default_value": -1000000,
    "description": "Forces the 3' end of the left primer to be at the indicated \nposition. Primers are also picked if they violate certain\nconstraints. The default value indicates that the end of the left primer\ncan be anywhere.",
    "form_type": "input_number",
    "name": "SEQUENCE_FORCE_LEFT_END",
    "setting_type": "additional",
    "type": "int"
  },
  "SEQUENCE_FORCE_LEFT_START": {
    "default_value": -1000000,
    "description": "Forces the 5' end of the left primer to be at the indicated \nposition. Primers are also picked if they violate certain\nconstraints. The default value indicates that the start of the left primer\ncan be anywhere.",
    "form_type": "input_number",
    "name": "SEQUENCE_FORCE_LEFT_START",
    "setting_type": "additional",
    "type": "int"
  },
  "SEQUENCE_FORCE_RIGHT_END": {
    "default_value": -1000000,
    "description": "Forces the 3' end of the right primer to be at the indicated \nposition. Primers are also picked if they violate certain\nconstraints. The default value indicates that the end of the right primer\ncan be anywhere.17. \"GLOBAL\" INPUT TAGS\"Global\" input tags start with PRIMER_... and describe the \ngeneral parameters that primer3 should use in its searches. \nThe values of these tags persist between input Boulder \nrecords until or unless they are explicitly reset. Errors \nin \"Global\" input tags are fatal because they invalidate \nthe basic conditions under which primers are being picked.\n\nBecause the laboratory detection step using internal oligos is \nindependent of the PCR amplification procedure, internal oligo \ntags have defaults that are independent of the parameters that \ngovern the selection of PCR primers. For example, the melting \ntemperature of an oligo used for hybridization might be \nconsiderably lower than that used as a PCR primer.\n\n\nPRIMER_DNA_CONC\nPRIMER_MAX_END_GC\nPRIMER_PAIR_WT_PRODUCT_SIZE_LT\n\n\nPRIMER_DNTP_CONC\nPRIMER_MAX_END_STABILITY\nPRIMER_PAIR_WT_PRODUCT_TM_GT\n\n\nPRIMER_EXPLAIN_FLAG\nPRIMER_MAX_GC\nPRIMER_PAIR_WT_PRODUCT_TM_LT\n\n\nPRIMER_FIRST_BASE_INDEX\nPRIMER_MAX_HAIRPIN_TH\nPRIMER_PAIR_WT_PR_PENALTY\n\n\nPRIMER_GC_CLAMP\nPRIMER_MAX_LIBRARY_MISPRIMING\nPRIMER_PAIR_WT_TEMPLATE_MISPRIMING\n\n\nPRIMER_INSIDE_PENALTY\nPRIMER_MAX_NS_ACCEPTED\nPRIMER_PAIR_WT_TEMPLATE_MISPRIMING_TH\n\n\nPRIMER_INTERNAL_DNA_CONC\nPRIMER_MAX_POLY_X\nPRIMER_PICK_ANYWAY\n\n\nPRIMER_INTERNAL_DNTP_CONC\nPRIMER_MAX_SELF_ANY\nPRIMER_PICK_INTERNAL_OLIGO\n\n\nPRIMER_INTERNAL_MAX_GC\nPRIMER_MAX_SELF_ANY_TH\nPRIMER_PICK_LEFT_PRIMER\n\n\nPRIMER_INTERNAL_MAX_HAIRPIN_TH\nPRIMER_MAX_SELF_END\nPRIMER_PICK_RIGHT_PRIMER\n\n\nPRIMER_INTERNAL_MAX_LIBRARY_MISHYB\nPRIMER_MAX_SELF_END_TH\nPRIMER_PRODUCT_MAX_TM\n\n\nPRIMER_INTERNAL_MAX_NS_ACCEPTED\nPRIMER_MAX_SIZE\nPRIMER_PRODUCT_MIN_TM\n\n\nPRIMER_INTERNAL_MAX_POLY_X\nPRIMER_MAX_TEMPLATE_MISPRIMING\nPRIMER_PRODUCT_OPT_SIZE\n\n\nPRIMER_INTERNAL_MAX_SELF_ANY\nPRIMER_MAX_TEMPLATE_MISPRIMING_TH\nPRIMER_PRODUCT_OPT_TM\n\n\nPRIMER_INTERNAL_MAX_SELF_ANY_TH\nPRIMER_MAX_TM\nPRIMER_PRODUCT_SIZE_RANGE\n\n\nPRIMER_INTERNAL_MAX_SELF_END\nPRIMER_MIN_3_PRIME_OVERLAP_OF_JUNCTION\nPRIMER_QUALITY_RANGE_MAX\n\n\nPRIMER_INTERNAL_MAX_SELF_END_TH\nPRIMER_MIN_5_PRIME_OVERLAP_OF_JUNCTION\nPRIMER_QUALITY_RANGE_MIN\n\n\nPRIMER_INTERNAL_MAX_SIZE\nPRIMER_MIN_END_QUALITY\nPRIMER_SALT_CORRECTIONS\n\n\nPRIMER_INTERNAL_MAX_TM\nPRIMER_MIN_GC\nPRIMER_SALT_DIVALENT\n\n\nPRIMER_INTERNAL_MIN_GC\nPRIMER_MIN_LEFT_THREE_PRIME_DISTANCE\nPRIMER_SALT_MONOVALENT\n\n\nPRIMER_INTERNAL_MIN_QUALITY\nPRIMER_MIN_QUALITY\nPRIMER_SEQUENCING_ACCURACY\n\n\nPRIMER_INTERNAL_MIN_SIZE\nPRIMER_MIN_RIGHT_THREE_PRIME_DISTANCE\nPRIMER_SEQUENCING_INTERVAL\n\n\nPRIMER_INTERNAL_MIN_TM\nPRIMER_MIN_SIZE\nPRIMER_SEQUENCING_LEAD\n\n\nPRIMER_INTERNAL_MISHYB_LIBRARY\nPRIMER_MIN_THREE_PRIME_DISTANCE\nPRIMER_SEQUENCING_SPACING\n\n\nPRIMER_INTERNAL_MUST_MATCH_FIVE_PRIME\nPRIMER_MIN_TM\nPRIMER_TASK\n\n\nPRIMER_INTERNAL_MUST_MATCH_THREE_PRIME\nPRIMER_MISPRIMING_LIBRARY\nPRIMER_THERMODYNAMIC_OLIGO_ALIGNMENT\n\n\nPRIMER_INTERNAL_OPT_GC_PERCENT\nPRIMER_MUST_MATCH_FIVE_PRIME\nPRIMER_THERMODYNAMIC_PARAMETERS_PATH\n\n\nPRIMER_INTERNAL_OPT_SIZE\nPRIMER_MUST_MATCH_THREE_PRIME\nPRIMER_THERMODYNAMIC_TEMPLATE_ALIGNMENT\n\n\nPRIMER_INTERNAL_OPT_TM\nPRIMER_NUM_RETURN\nPRIMER_TM_FORMULA\n\n\nPRIMER_INTERNAL_SALT_DIVALENT\nPRIMER_OPT_GC_PERCENT\nPRIMER_WT_END_QUAL\n\n\nPRIMER_INTERNAL_SALT_MONOVALENT\nPRIMER_OPT_SIZE\nPRIMER_WT_END_STABILITY\n\n\nPRIMER_INTERNAL_WT_END_QUAL\nPRIMER_OPT_TM\nPRIMER_WT_GC_PERCENT_GT\n\n\nPRIMER_INTERNAL_WT_GC_PERCENT_GT\nPRIMER_OUTSIDE_PENALTY\nPRIMER_WT_GC_PERCENT_LT\n\n\nPRIMER_INTERNAL_WT_GC_PERCENT_LT\nPRIMER_PAIR_MAX_COMPL_ANY\nPRIMER_WT_HAIRPIN_TH\n\n\nPRIMER_INTERNAL_WT_HAIRPIN_TH\nPRIMER_PAIR_MAX_COMPL_ANY_TH\nPRIMER_WT_LIBRARY_MISPRIMING\n\n\nPRIMER_INTERNAL_WT_LIBRARY_MISHYB\nPRIMER_PAIR_MAX_COMPL_END\nPRIMER_WT_NUM_NS\n\n\nPRIMER_INTERNAL_WT_NUM_NS\nPRIMER_PAIR_MAX_COMPL_END_TH\nPRIMER_WT_POS_PENALTY\n\n\nPRIMER_INTERNAL_WT_SELF_ANY\nPRIMER_PAIR_MAX_DIFF_TM\nPRIMER_WT_SELF_ANY\n\n\nPRIMER_INTERNAL_WT_SELF_ANY_TH\nPRIMER_PAIR_MAX_LIBRARY_MISPRIMING\nPRIMER_WT_SELF_ANY_TH\n\n\nPRIMER_INTERNAL_WT_SELF_END\nPRIMER_PAIR_MAX_TEMPLATE_MISPRIMING\nPRIMER_WT_SELF_END\n\n\nPRIMER_INTERNAL_WT_SELF_END_TH\nPRIMER_PAIR_MAX_TEMPLATE_MISPRIMING_TH\nPRIMER_WT_SELF_END_TH\n\n\nPRIMER_INTERNAL_WT_SEQ_QUAL\nPRIMER_PAIR_WT_COMPL_ANY\nPRIMER_WT_SEQ_QUAL\n\n\nPRIMER_INTERNAL_WT_SIZE_GT\nPRIMER_PAIR_WT_COMPL_ANY_TH\nPRIMER_WT_SIZE_GT\n\n\nPRIMER_INTERNAL_WT_SIZE_LT\nPRIMER_PAIR_WT_COMPL_END\nPRIMER_WT_SIZE_LT\n\n\nPRIMER_INTERNAL_WT_TM_GT\nPRIMER_PAIR_WT_COMPL_END_TH\nPRIMER_WT_TEMPLATE_MISPRIMING\n\n\nPRIMER_INTERNAL_WT_TM_LT\nPRIMER_PAIR_WT_DIFF_TM\nPRIMER_WT_TEMPLATE_MISPRIMING_TH\n\n\nPRIMER_LIBERAL_BASE\nPRIMER_PAIR_WT_IO_PENALTY\nPRIMER_WT_TM_GT\n\n\nPRIMER_LIB_AMBIGUITY_CODES_CONSENSUS\nPRIMER_PAIR_WT_LIBRARY_MISPRIMING\nPRIMER_WT_TM_LT\n\n\nPRIMER_LOWERCASE_MASKING\nPRIMER_PAIR_WT_PRODUCT_SIZE_GT\n \n\n",
    "form_type": "input_number",
    "name": "SEQUENCE_FORCE_RIGHT_END",
    "setting_type": "additional",
    "type": "int"
  },
  "SEQUENCE_FORCE_RIGHT_START": {
    "default_value": -1000000,
    "description": "Forces the 5' end of the right primer to be at the indicated \nposition. Primers are also picked if they violate certain\nconstraints. The default value indicates that the start of the right primer\ncan be anywhere.",
    "form_type": "input_number",
    "name": "SEQUENCE_FORCE_RIGHT_START",
    "setting_type": "additional",
    "type": "int"
  },
  "SEQUENCE_ID": {
    "default_value": null,
    "description": "Short description of the sequence. It is used as an identifier \nthat is reproduced in the output to enable users to identify the \nsource of the chosen primers.\n\nThis tag must be present if P3_FILE_FLAG is non-zero.",
    "form_type": "input_text",
    "name": "SEQUENCE_ID",
    "setting_type": "additional",
    "type": "string"
  },
  "SEQUENCE_INCLUDED_REGION": {
    "default_value": null,
    "description": "A sub-region of the given sequence in which to pick primers.  For\nexample, often the first dozen or so bases of a sequence are\nvector, and should be excluded from consideration. The value for\nthis parameter has the form<start>,<length>\nwhere <start> is the index of the first base to consider,\nand <length> is the number of subsequent bases in the\nprimer-picking region.",
    "form_type": "input_number",
    "name": "SEQUENCE_INCLUDED_REGION",
    "setting_type": "additional",
    "type": "int"
  },
  "SEQUENCE_INTERNAL_EXCLUDED_REGION": {
    "default_value": null,
    "description": "Middle oligos may not overlap any region specified by this tag.\nThe associated value must be a space-separated list of<start>,<length>\npairs, where <start> is the index of the first base of\nan excluded region, and <length> is its length.  Often one would\nmake Target regions excluded regions for internal oligos.",
    "form_type": "input_number",
    "name": "SEQUENCE_INTERNAL_EXCLUDED_REGION",
    "setting_type": "additional",
    "type": "int"
  },
  "SEQUENCE_INTERNAL_OLIGO": {
    "default_value": null,
    "description": "The sequence of an internal oligo to check and around which to\ndesign left and right primers.  Must be a substring of \nSEQUENCE_TEMPLATE.",
    "form_type": "input_text",
    "name": "SEQUENCE_INTERNAL_OLIGO",
    "setting_type": "basic",
    "type": "nucleotide sequence"
  },
  "SEQUENCE_OVERLAP_JUNCTION_LIST": {
    "default_value": null,
    "description": "If this list is not empty, then\nthe forward OR the reverse primer must overlap one of \nthese junction points by at least PRIMER_MIN_3_PRIME_OVERLAP_OF_JUNCTION \nnucleotides at the 3' end and at least PRIMER_MIN_5_PRIME_OVERLAP_OF_JUNCTION \nnucleotides at the 5' end.\n\nIn more detail: The junction associated with a given position is the space immediately to the right\nof that position in the template sequence on the strand given as input.\n\nFor example:\nSEQUENCE_OVERLAP_JUNCTION_LIST=20\n# 1-based indexes\nPRIMER_MIN_3_PRIME_OVERLAP_OF_JUNCTION=4\n\ntemplate: atcataggccatgcctgagc^gctacgact\n\n          ok           ...gagc^gcta-3'  (left primer)\n          not ok       ...gagc^gct-3'   (left primer)\n          ok           3'-ctcg^cgat...  (right pimer)\n          not ok        3'-tcg^cgat...  (right primer)\n\nPRIMER_MIN_5_PRIME_OVERLAP_OF_JUNCTION=5\n\n         ok           5'-tgagc^gccg...  (left primer)\n         not ok        5'-gagc^gccg...  (left primer)\n         ok           ...tgagc^gctac-5' (right primer)\n         not ok       ...tgagc^gcta-5'  (right primer)\n\n\n",
    "form_type": "input_number",
    "name": "SEQUENCE_OVERLAP_JUNCTION_LIST",
    "setting_type": "additional",
    "type": "int"
  },
  "SEQUENCE_PRIMER": {
    "default_value": null,
    "description": "The sequence of a left primer to check and around which to design\nright primers and optional internal oligos.  Must be a substring\nof SEQUENCE_TEMPLATE.",
    "form_type": "input_text",
    "name": "SEQUENCE_PRIMER",
    "setting_type": "additional",
    "type": "nucleotide sequence"
  },
  "SEQUENCE_PRIMER_PAIR_OK_REGION_LIST": {
    "default_value": null,
    "description": "\n\nThis tag allows detailed specification of possible\nlocations of left and right primers in primer pairs.\n\nThe associated value must be a semicolon-separated list of<left_start>,<left_length>,<right_start>,<right_length>\nquadruples.\n\nThe left primer must be in the region specified by \n<left_start>,<left_length> and \nthe right primer must be in the region specified by\n<right_start>,<right_length>.\n\n<left_start> and <left_length> specify the location of the left primer in terms of the index of\nthe first base in the region and the length of the region.\n\n<right_start> and <right_length> specify the location of the right primer in analogous fashion.\n\nAs seen in the example below, if no integers are specified for a region then the location of the\ncorresponding primer is not constrained.\n\n\nExample:SEQUENCE_PRIMER_PAIR_OK_REGION_LIST=100,50,300,50 ; 900,60,, ; ,,930,100\n\n\nSpecifies that there are three choices:\n\nLeft primer in the 50 bp region starting at position 100 AND right primer\nin the 50 bp region starting at position 300\n\nOR\n\nLeft primer in the 60 bp region starting at position 900 (and right primer anywhere)\n\nOR\n\nRight primer in the 100 bp region starting at position 930 (and left\nprimer anywhere)\n",
    "form_type": "input_number",
    "name": "SEQUENCE_PRIMER_PAIR_OK_REGION_LIST",
    "setting_type": "additional",
    "type": "int"
  },
  "SEQUENCE_PRIMER_REVCOMP": {
    "default_value": null,
    "description": "The sequence of a right primer to check and around which to\ndesign left primers and optional internal oligos.  Must be a\nsubstring of the reverse strand of SEQUENCE_TEMPLATE.",
    "form_type": "input_text",
    "name": "SEQUENCE_PRIMER_REVCOMP",
    "setting_type": "basic",
    "type": "nucleotide sequence"
  },
  "SEQUENCE_QUALITY": {
    "default_value": null,
    "description": "A list of space separated integers. There must be exactly\none integer for each base in SEQUENCE_TEMPLATE if this argument is\nnon-empty.  For example, for the sequence ANNTTCA...\nSEQUENCE_QUALITY might be 45 10 0 50 30 34 50 67 ....\nHigh numbers indicate high confidence in the base called at\nthat position and low numbers indicate low confidence in the\nbase call at that position.  This parameter is only relevant\nif you are using a base calling program that provides\nquality information (for example phred).",
    "form_type": "input_number",
    "name": "SEQUENCE_QUALITY",
    "setting_type": "additional",
    "type": "int"
  },
  "SEQUENCE_START_CODON_POSITION": {
    "default_value": -2000000,
    "description": "This parameter should be considered EXPERIMENTAL at this point.\nPlease check the output carefully; some erroneous inputs might\ncause an error in primer3.\n\nIndex of the first base of a start codon.  This parameter allows\nprimer3 to select primer pairs to create in-frame amplicons\ne.g. to create a template for a fusion protein.  Primer3 will\nattempt to select an in-frame left primer, ideally starting at or\nto the left of the start codon, or to the right if necessary.\nNegative values of this parameter are legal if the actual start\ncodon is to the left of available sequence. If this parameter is\nnon-negative primer3 signals an error if the codon at the\nposition specified by this parameter is not an ATG.  A value less\nthan or equal to -10^6 indicates that primer3 should ignore this\nparameter.\n\nPrimer3 selects the position of the right primer by scanning\nright from the left primer for a stop codon.  Ideally the right\nprimer will end at or after the stop codon.",
    "form_type": "input_number",
    "name": "SEQUENCE_START_CODON_POSITION",
    "setting_type": "additional",
    "type": "int"
  },
  "SEQUENCE_TARGET": {
    "default_value": null,
    "description": "If one or more targets is specified then a legal primer pair must\nflank at least one of them.  A target might be a simple sequence\nrepeat site (for example a CA repeat) or a single-base-pair\npolymorphism, or an exon for resequencing.  The value should be a space-separated list of<start>,<length>\npairs where <start> is the index of the first base of a\ntarget, and <length> is its length.",
    "form_type": "input_number",
    "name": "SEQUENCE_TARGET",
    "setting_type": "basic",
    "type": "int"
  },
  "SEQUENCE_TEMPLATE": {
    "default_value": null,
    "description": "The sequence from which to choose primers.  The sequence\nmust be presented 5' -> 3' (i.e, in the normal way).\nIn general, the bases may be upper or lower case, but \nlower case letters are treated \nspecially if PRIMER_LOWERCASE_MASKING is set.\nThe entire sequence MUST be all on a single line. \n(In other words, the sequence cannot span several lines.)\n",
    "form_type": "input_text",
    "name": "SEQUENCE_TEMPLATE",
    "setting_type": "basic",
    "type": "nucleotide sequence"
  }
};

export const p3Options = Object.keys(p3Params);
