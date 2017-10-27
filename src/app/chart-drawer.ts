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
  primerChartX:number;
  primerChartY:number;
  primerH:number;

  seqLen:number;

  max:number;
  tickSize:number;
  numTicks:number;
  seqChartTickSize:number;

  primerDiscFunc;


  constructor(elem, w, h){
    this.w = w;
    this.h = h;
    this.paper = Raphael(elem);
    this.paper.setViewBox(0,0,w,h,true);
    this.paper.setSize('100%', '100%');

    this.seqChartX = 10,
    this.seqChartY = 10,
    this.seqChartW = this.w-30,
    this.seqChartH = 40,
    this.seqChartB = this.seqChartY+this.seqChartH,
    this.primerChartX = this.seqChartX,
    this.primerChartY = this.seqChartB+40,
    this.primerH = 10;
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
    var seqBar = this.paper.rect(this.seqChartX, this.seqChartY+this.seqChartH*0.25, seqLenPix, this.seqChartH/4);

    seqBar.attr({fill: 'grey', stroke: '#ddd', 'stroke-width': 1});
  }

  // go to the primer discription
  goToPrimerDisc(i){
    //console.log(i);
    window.location.href = "#"+i[2];
  }


  // draw the primer chart
  drawPrimerChart(){
    for(var i = 0; i < this.resultData.result.pairs.length; i++)
    {
      // drawing left primer
      var pair = this.resultData.result.pairs[i];
      //console.log(i)
      //console.log(pair.PRIMER_LEFT.START, pair.PRIMER_LEFT.LENGTH);
      var startL = pair.PRIMER_LEFT.START/this.max*this.seqChartW+this.seqChartX;
      var lengthL = pair.PRIMER_LEFT.LENGTH/this.max*this.seqChartW+this.seqChartX;
      var primerLBar = this.paper.rect(startL, this.primerChartY+i*20, lengthL, this.seqChartH/4);
      primerLBar.attr({fill: 'red', stroke: '#ddd', 'stroke-width': 1});
      primerLBar.attr({
        cursor: 'pointer'
      });
      primerLBar.node.id = "l "+i;

      // setting mouse down event for the left primer
      var that = this;
      primerLBar.mousedown(function(e){
        that.goToPrimerDisc(e.target.id);
        this.primerDiscFunc;
      });

      // drawing right primer
      var pair = this.resultData.result.pairs[i];
      //console.log(pair.PRIMER_RIGHT.START, pair.PRIMER_RIGHT.LENGTH);
      var startR = pair.PRIMER_RIGHT.START/this.max*this.seqChartW+this.seqChartX;
      var lengthR = pair.PRIMER_RIGHT.LENGTH/this.max*this.seqChartW+this.seqChartX;
      var primerRBar = this.paper.rect(startR, this.primerChartY+i*20, lengthR, this.seqChartH/4);
      primerRBar.attr({fill: 'blue', stroke: '#ddd', 'stroke-width': 1});
      primerRBar.attr({
        cursor: 'pointer'
      });
      primerRBar.node.id = "r "+i;

      // setting mouse down event for the left primer
      primerRBar.mousedown(function(e){
        that.goToPrimerDisc(e.target.id);
      });
    }
  }

  clear(){
    this.paper.clear();
  }

  
}
