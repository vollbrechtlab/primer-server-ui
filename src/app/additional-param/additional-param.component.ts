import {Component, ElementRef, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-additional-param',
  templateUrl: './additional-param.component.html',
  styleUrls: ['./additional-param.component.css']
})
export class AdditionalParamComponent {
  displayedColumns = ['userName', 'progress'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;

  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
  }
}

/** Constants used to fill up our data base. */
const NAMES = [
  'SEQUENCE_EXCLUDED_REGION', 
  'SEQUENCE_INCLUDED_REGION',
  'SEQUENCE_FORCE_LEFT_END', 
  'SEQUENCE_QUALITY', 
  'SEQUENCE_FORCE_LEFT_START', 
  'SEQUENCE_START_CODON_POSITION', 
  'SEQUENCE_FORCE_RIGHT_END', 
  'SEQUENCE_OVERLAP_JUNCTION_LIST', 
  'SEQUENCE_FORCE_RIGHT_START', 
  'SEQUENCE_ID', 
  'SEQUENCE_PRIMER_PAIR_OK_REGION_LIST', 
  'PRIMER_DNA_CONC', 
  'PRIMER_MAX_END_GC', 
  'PRIMER_PAIR_WT_PRODUCT_SIZE_LT', 
  'PRIMER_DNTP_CONC', 
  'PRIMER_MAX_END_STABILITY', 
  'PRIMER_PAIR_WT_PRODUCT_TM_GT', 
  'PRIMER_EXPLAIN_FLAG', 
  'PRIMER_MAX_GC', 
  'PRIMER_PAIR_WT_PRODUCT_TM_LT', 
  'PRIMER_FIRST_BASE_INDEX', 
  'PRIMER_MAX_HAIRPIN_TH', 
  'PRIMER_PAIR_WT_PR_PENALTY', 
  'PRIMER_GC_CLAMP', 
  'PRIMER_MAX_LIBRARY_MISPRIMING', 
  'PRIMER_PAIR_WT_TEMPLATE_MISPRIMING', 
  'PRIMER_INSIDE_PENALTY', 
  'PRIMER_MAX_NS_ACCEPTED', 
  'PRIMER_PAIR_WT_TEMPLATE_MISPRIMING_TH', 
  'PRIMER_INTERNAL_DNA_CONC', 
  'PRIMER_MAX_POLY_X', 
  'PRIMER_PICK_ANYWAY', 
  'PRIMER_INTERNAL_DNTP_CONC', 
  'PRIMER_MAX_SELF_ANY', 
  'PRIMER_INTERNAL_MAX_GC', 
  'PRIMER_MAX_SELF_ANY_TH', 
  'PRIMER_INTERNAL_MAX_HAIRPIN_TH', 
  'PRIMER_MAX_SELF_END', 
  'PRIMER_INTERNAL_MAX_LIBRARY_MISHYB', 
  'PRIMER_MAX_SELF_END_TH', 
  'PRIMER_PRODUCT_MAX_TM', 
  'PRIMER_INTERNAL_MAX_NS_ACCEPTED', 
  'PRIMER_MAX_SIZE', 
  'PRIMER_PRODUCT_MIN_TM', 
  'PRIMER_INTERNAL_MAX_POLY_X', 
  'PRIMER_MAX_TEMPLATE_MISPRIMING', 
  'PRIMER_PRODUCT_OPT_SIZE', 
  'PRIMER_INTERNAL_MAX_SELF_ANY', 
  'PRIMER_MAX_TEMPLATE_MISPRIMING_TH', 
  'PRIMER_PRODUCT_OPT_TM', 
  'PRIMER_INTERNAL_MAX_SELF_ANY_TH', 
  'PRIMER_INTERNAL_MAX_SELF_END', 
  'PRIMER_MIN_3_PRIME_OVERLAP_OF_JUNCTION', 
  'PRIMER_QUALITY_RANGE_MAX', 
  'PRIMER_INTERNAL_MAX_SELF_END_TH', 
  'PRIMER_MIN_5_PRIME_OVERLAP_OF_JUNCTION', 
  'PRIMER_QUALITY_RANGE_MIN', 
  'PRIMER_INTERNAL_MAX_SIZE', 
  'PRIMER_MIN_END_QUALITY', 
  'PRIMER_INTERNAL_MAX_TM', 
  'PRIMER_MIN_GC', 
  'PRIMER_SALT_DIVALENT', 
  'PRIMER_INTERNAL_MIN_GC', 
  'PRIMER_MIN_LEFT_THREE_PRIME_DISTANCE', 
  'PRIMER_SALT_MONOVALENT', 
  'PRIMER_INTERNAL_MIN_QUALITY', 
  'PRIMER_MIN_QUALITY', 
  'PRIMER_SEQUENCING_ACCURACY', 
  'PRIMER_INTERNAL_MIN_SIZE', 
  'PRIMER_MIN_RIGHT_THREE_PRIME_DISTANCE', 
  'PRIMER_SEQUENCING_INTERVAL', 
  'PRIMER_INTERNAL_MIN_TM', 
  'PRIMER_MIN_SIZE', 
  'PRIMER_SEQUENCING_LEAD', 
  'PRIMER_INTERNAL_MISHYB_LIBRARY', 
  'PRIMER_MIN_THREE_PRIME_DISTANCE', 
  'PRIMER_SEQUENCING_SPACING', 
  'PRIMER_INTERNAL_MUST_MATCH_FIVE_PRIME', 
  'PRIMER_TASK', 
  'PRIMER_INTERNAL_MUST_MATCH_THREE_PRIME', 
  'PRIMER_MISPRIMING_LIBRARY', 
  'PRIMER_THERMODYNAMIC_OLIGO_ALIGNMENT', 
  'PRIMER_INTERNAL_OPT_GC_PERCENT', 
  'PRIMER_MUST_MATCH_FIVE_PRIME', 
  'PRIMER_THERMODYNAMIC_PARAMETERS_PATH', 
  'PRIMER_INTERNAL_OPT_SIZE', 
  'PRIMER_MUST_MATCH_THREE_PRIME', 
  'PRIMER_THERMODYNAMIC_TEMPLATE_ALIGNMENT', 
  'PRIMER_INTERNAL_OPT_TM', 
  'PRIMER_NUM_RETURN', 
  'PRIMER_INTERNAL_SALT_DIVALENT', 
  'PRIMER_OPT_GC_PERCENT', 
  'PRIMER_WT_END_QUAL', 
  'PRIMER_INTERNAL_SALT_MONOVALENT', 
  'PRIMER_OPT_SIZE', 
  'PRIMER_WT_END_STABILITY', 
  'PRIMER_INTERNAL_WT_END_QUAL', 
  'PRIMER_WT_GC_PERCENT_GT', 
  'PRIMER_INTERNAL_WT_GC_PERCENT_GT', 
  'PRIMER_OUTSIDE_PENALTY', 
  'PRIMER_WT_GC_PERCENT_LT', 
  'PRIMER_INTERNAL_WT_GC_PERCENT_LT', 
  'PRIMER_PAIR_MAX_COMPL_ANY', 
  'PRIMER_WT_HAIRPIN_TH', 
  'PRIMER_INTERNAL_WT_HAIRPIN_TH', 
  'PRIMER_PAIR_MAX_COMPL_ANY_TH', 
  'PRIMER_WT_LIBRARY_MISPRIMING', 
  'PRIMER_INTERNAL_WT_LIBRARY_MISHYB', 
  'PRIMER_PAIR_MAX_COMPL_END', 
  'PRIMER_WT_NUM_NS', 
  'PRIMER_INTERNAL_WT_NUM_NS', 
  'PRIMER_PAIR_MAX_COMPL_END_TH', 
  'PRIMER_WT_POS_PENALTY', 
  'PRIMER_INTERNAL_WT_SELF_ANY', 
  'PRIMER_WT_SELF_ANY', 
  'PRIMER_INTERNAL_WT_SELF_ANY_TH', 
  'PRIMER_PAIR_MAX_LIBRARY_MISPRIMING', 
  'PRIMER_WT_SELF_ANY_TH', 
  'PRIMER_INTERNAL_WT_SELF_END', 
  'PRIMER_PAIR_MAX_TEMPLATE_MISPRIMING', 
  'PRIMER_WT_SELF_END', 
  'PRIMER_INTERNAL_WT_SELF_END_TH', 
  'PRIMER_PAIR_MAX_TEMPLATE_MISPRIMING_TH', 
  'PRIMER_WT_SELF_END_TH', 
  'PRIMER_INTERNAL_WT_SEQ_QUAL', 
  'PRIMER_PAIR_WT_COMPL_ANY', 
  'PRIMER_WT_SEQ_QUAL', 
  'PRIMER_INTERNAL_WT_SIZE_GT', 
  'PRIMER_PAIR_WT_COMPL_ANY_TH', 
  'PRIMER_WT_SIZE_GT', 
  'PRIMER_INTERNAL_WT_SIZE_LT', 
  'PRIMER_PAIR_WT_COMPL_END', 
  'PRIMER_WT_SIZE_LT', 
  'PRIMER_INTERNAL_WT_TM_GT', 
  'PRIMER_PAIR_WT_COMPL_END_TH', 
  'PRIMER_WT_TEMPLATE_MISPRIMING', 
  'PRIMER_INTERNAL_WT_TM_LT', 
  'PRIMER_PAIR_WT_DIFF_TM', 
  'PRIMER_WT_TEMPLATE_MISPRIMING_TH', 
  'PRIMER_LIBERAL_BASE', 
  'PRIMER_PAIR_WT_IO_PENALTY', 
  'PRIMER_WT_TM_GT', 
  'PRIMER_LIB_AMBIGUITY_CODES_CONSENSUS', 
  'PRIMER_PAIR_WT_LIBRARY_MISPRIMING', 
  'PRIMER_WT_TM_LT', 
  'PRIMER_LOWERCASE_MASKING', 
  'PRIMER_PAIR_WT_PRODUCT_SIZE_GT'];

export interface UserData {
  name: string;
  progress: string;
}


/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 100; i++) { this.addUser(); }
  }

  /** Adds a new user to the database. */
  addUser() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewUser() {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: (this.data.length + 1).toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
    };
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this._exampleDatabase.data.slice().filter((item: UserData) => {
        let searchStr = (item.name).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
    });
  }

  disconnect() {}
}

