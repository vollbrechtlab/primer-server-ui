import "raphael";

export class ChartDrawer{
  w:number;
  h:number;
  paper:any;

  inputData:any;
  resultData:any;

  seqChartX:number;
  seqChartY:number;
  seqChartW:number;
  seqChartH:number;
  seqChartB:number;
  seqY:number;
  seqH:number;
  regionY:number;
  regionH:number;
  primerChartX:number;
  primerChartY:number;
  primerChartW:number;
  primerChartH:number;
  primerH:number;

  seqLen:number;

  max:number;
  tickSize:number;
  numTicks:number;
  seqChartTickSize:number;

  primerBars:any;

  //scrollService: any;


  constructor(elem, w, h){
    this.w = w;
    this.h = h;
    this.paper = Raphael(elem);
    this.paper.setViewBox(0,0,w,h,true);
    this.paper.setSize('100%', '100%');

    this.seqChartX = 10,
    console.log(this.seqChartX)
    this.seqChartY = 10,
    this.seqChartW = this.w-30,
    this.seqChartH = 40,
    this.seqChartB = this.seqChartY+this.seqChartH,
    this.seqY = this.seqChartY+this.seqChartH*0.25,
    this.seqH = this.seqChartH/4,
    this.regionY = this.seqChartY+this.seqChartH*0.50,
    this.regionH = this.seqH,
    this.primerChartX = this.seqChartX,
    this.primerChartY = this.seqChartB+40,
    this.primerChartW = this.seqChartW,
    this.primerChartH = this.seqH,
    this.primerH = 10;

    //this.scrollService = scrollService;
  }

  setInputData(data){
    this.inputData = data;
    this.seqLen = this.inputData.SEQUENCE_TEMPLATE.length;
  }
  setResultData(data){
    this.resultData = data;
  }

  // calculate and draw the chart
  draw(){
    this.paper.clear();
    this.calcSeqTickSize();
    this.seqChartTickSize = this.seqChartW/this.numTicks; 
    this.drawSeqChart();
    this.drawPrimerChart();
  }

  // calculate the tick of the sequence graph the length of sequence
  calcSeqTickSize(){
    var max = 100;
    var numTicks = 10; 

    var exponent = Math.floor(Math.log10(this.seqLen));
    var magnitude2 = Math.pow(10, exponent-1);

    var last2digitsCeiled = Math.ceil(this.seqLen/magnitude2);

    // decide max and number of ticks based on the last 2 digits
    if(last2digitsCeiled==10){
      max = 10*magnitude2;
      numTicks = 10;
    } else if(last2digitsCeiled<=12){
      max = 12*magnitude2;
      numTicks = 6;
    } else if(last2digitsCeiled<=15){
      max = 15*magnitude2;
      numTicks = 6;
    } else if(last2digitsCeiled<=20){
      max = 20*magnitude2;
      numTicks = 10;
    } else if(last2digitsCeiled<=25){
      max = 25*magnitude2;
      numTicks = 5;
    } else if(last2digitsCeiled<=30){
      max = 30*magnitude2;
      numTicks = 6;
    } else if(last2digitsCeiled<=35){
      max = 35*magnitude2;
      numTicks = 7;
    } else if(last2digitsCeiled<=40){
      max = 40*magnitude2;
      numTicks = 8;
    } else if(last2digitsCeiled<=45){
      max = 45*magnitude2;
      numTicks = 9;
    } else if(last2digitsCeiled<=50){
      max = 50*magnitude2;
      numTicks = 5;
    } else if(last2digitsCeiled<=55){
      max = 55*magnitude2;
      numTicks = 11;
    } else if(last2digitsCeiled<=60){
      max = 60*magnitude2;
      numTicks = 6;
    } else if(last2digitsCeiled<=70){
      max = 70*magnitude2;
      numTicks = 7;
    } else if(last2digitsCeiled<=80){
      max = 80*magnitude2;
      numTicks = 8;
    } else if(last2digitsCeiled<=90){
      max = 90*magnitude2;
      numTicks = 9;
    } else if(last2digitsCeiled<=100){
      max = 100*magnitude2;
      numTicks = 10;
    }

    this.max = max;
    this.tickSize = max/numTicks;
    this.numTicks = numTicks;
  }

  // draw the frames of sequence chart
  drawSeqChartFrame(){
      // left most thick vertical line
      this.paper.path(["M", this.seqChartX, this.seqChartB, "l", 0, -this.seqChartH]);
      // horizontal line
      this.paper.path(["M", this.seqChartX, this.seqChartB*0.9, "l", this.seqChartW, 0])
        .attr({stroke:'grey',"stroke-width":0.5});

      // vertical lines
      for(var i = 1; i <= this.numTicks; i++){
        this.paper.path(["M", this.seqChartX+i*this.seqChartTickSize, this.seqChartB, "l", 0, -this.seqChartH])
          .attr({stroke:'grey',"stroke-width":0.5});
      }

      // place x indeces
      for(var i = 0; i <= this.numTicks; i++){
        this.paper.text(this.seqChartX+i*this.seqChartTickSize, this.seqChartB*1.1, i*this.tickSize);
      }
  }

  // draw sequence chart
  drawSeqChart(){
    // draw frames
    this.drawSeqChartFrame();

    // calculate sequence length in pixel
    var seqLenPix = this.seqLen/(this.tickSize*this.numTicks)*this.seqChartW;

    // draw sequence bar
    var seqBar = this.paper.rect(this.seqChartX, this.seqChartY+this.seqChartH*0.25, seqLenPix, this.seqH);

    seqBar.attr({fill: 'grey', stroke: '#ddd', 'stroke-width': 1});

    this.drawSeqRegions();
  }

  // draw target regions and excluded regions
  drawSeqRegions(){
    //console.log(this.inputData.SEQUENCE_EXCLUDED_REGION)
    //console.log(this.inputData.SEQUENCE_TARGET)
    for(let i = 0; i < this.inputData.SEQUENCE_TARGET.length; i++){
      // target region
      let start = this.inputData.SEQUENCE_TARGET[i][0]/this.max*this.primerChartW+this.primerChartX;
      let length = this.inputData.SEQUENCE_TARGET[i][1]/this.max*this.primerChartW;
      let targetBar = this.paper.rect(start, this.regionY, length, this.primerH);
      targetBar.attr({fill: 'rgba(0, 255, 0, 0.4)', stroke: '#ddd', 'stroke-width': 1});
    }
    for(let i = 0; i < this.inputData.SEQUENCE_EXCLUDED_REGION.length; i++){
      // excluded region
      let start = this.inputData.SEQUENCE_EXCLUDED_REGION[i][0]/this.max*this.primerChartW+this.primerChartX;
      let length = this.inputData.SEQUENCE_EXCLUDED_REGION[i][1]/this.max*this.primerChartW;
      let excludedBar = this.paper.rect(start, this.regionY, length, this.primerH);
      excludedBar.attr({fill: 'rgba(255, 0, 0, 0.4)', stroke: '#ddd', 'stroke-width': 1});
    }
  }

  // go to the primer discription
  goToPrimerDisc(i){
    //console.log(i);
    //this.scrollService.scrollTo("#"+i[2]);
    //console.log(window.location.href)
  }


  // draw the primer chart
  drawPrimerChart(){
    for(let i = 0; i < this.resultData.pairs.length; i++)
    {
      let pair = this.resultData.pairs[i];

      // drawing left primer
      if (pair.PRIMER_LEFT != undefined){
        let start = pair.PRIMER_LEFT.START/this.max*this.primerChartW+this.primerChartX;
        let length = pair.PRIMER_LEFT.LENGTH/this.max*this.primerChartW;
        //var primerLBar = this.paper.rect(startL, this.primerChartY+i*20, lengthL, this.primerH);
        //let primerLBar = this.paper.path("M10,10L50,50M50,10L10,50");
        let primerLBar = this.paper.path("M"+start+","+(this.primerChartY+i*20)+"L"+(start+length)+","+(this.primerChartY+i*20));
        //console.log("M"+Math.round(start)+","+Math.round(this.primerChartY+i*20)+"L"+Math.round(start+length)+","+Math.round(this.primerChartY+i*20));
        primerLBar.attr({stroke: 'red', 'stroke-width': 2, 'arrow-end': 'classic-midium-short'});
        primerLBar.attr({
          cursor: 'pointer'
        });
        primerLBar.node.id = "l "+i;

        // setting mouse down event for the left primer
        var that = this;
        primerLBar.mousedown(function(e){
          that.goToPrimerDisc(e.target.id);
        });
      }


      // drawing right primer
      if (pair.PRIMER_RIGHT != undefined){
        var length = pair.PRIMER_RIGHT.LENGTH/this.max*this.primerChartW;
        var start = pair.PRIMER_RIGHT.START/this.max*this.primerChartW+this.primerChartX-length;
        let primerRBar = this.paper.path("M"+start+","+(this.primerChartY+i*20)+"L"+(start+length)+","+(this.primerChartY+i*20));
        primerRBar.attr({stroke: 'blue', 'stroke-width': 2, 'arrow-start': 'classic-midium-short'});
        primerRBar.attr({
          cursor: 'pointer'
        });
        primerRBar.node.id = "r "+i;

        // setting mouse down event for the left primer
        primerRBar.mousedown(function(e){
          that.goToPrimerDisc(e.target.id);
        });
      }

      // drawing internal oligo
      if (pair.PRIMER_INTERNAL != undefined){
        var start = pair.PRIMER_INTERNAL.START/this.max*this.primerChartW+this.primerChartX;
        var length = pair.PRIMER_INTERNAL.LENGTH/this.max*this.primerChartW;
        let bar = this.paper.path("M"+start+","+(this.primerChartY+i*20)+"L"+(start+length)+","+(this.primerChartY+i*20));
        bar.attr({stroke: 'green', 'stroke-width': 2});
        bar.attr({
          cursor: 'pointer'
        });
        bar.node.id = "i "+i;

        // setting mouse down event for the left primer
        bar.mousedown(function(e){
          that.goToPrimerDisc(e.target.id);
        });
      }
    }
  }

  clear(){
    this.paper.clear();
  }

  
}
