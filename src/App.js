import logo from './logo.svg';
import './App.css'
function App() {
  return (
      <header className="App-header">
       <div className="container">
         <div className="row">
           <div className="col-md-11">
             <h1 className="roi-calculator">ROI Calculator</h1>
           </div>
           <div className="col-md-1 cross-mark">
            X
           </div>

         </div>
         <div className="row">
           <div className="col-md-4"></div>
           <div className="col-md-5"></div>
           <div className="col-md-2">
             <img className="cake-image" src='/cake.jpeg'/><span className="cake-heading">CAKE</span>
           </div>
<div className="col-md-1">
<label class="switch" for="checkbox">
    <input type="checkbox" id="checkbox" />
    <div class="slider round"></div>
  </label>

<div className="usd-wrapper"><span>USD</span></div>

   </div>
         </div>
         <div className="row">
         <div className="col-lg-12">
         <input className="input-text-usd" type="text" /> 
          <span className="usd-value">0.000USD</span>
         </div>
        

         </div>
         <div className="row">
           <div className="col-md-2">
             <div className="one-thousand">$1000</div>
           </div>
           <div className="col-md-2">
             <div className="one-thousand">$100</div>
           </div>
           <div className="col-md-6"></div>
           <div className="col-md-2">
            <div className="tild-cake">~CAKE 0.000</div> 
           </div>
         </div>
         <div>
           <h1 className="timeframe">Timeframe</h1>
         </div>
         

         <div className="row">
           <div className="col-md-2">
           <div className="one-day">1 Day</div>
           </div>
           <div className="col-md-2 ">
             <div className="seven-day1">7 Days</div>
           </div>
           <div className="col-md-3">
             <div className="seven-day30" >30 Days</div>
           </div>
           <div className="col-md-3">
             <div className="seven-day">1 Year</div>
           </div>
           <div className="col-md-2">
             <div className="seven-day">5 Year</div>
           </div>

         </div>
        
         <div className="row Enable-row">
           <div className="col-md-5">
             <h1 className="enable-heading">Enable Accelerated API</h1>
             </div>
           <div className="col-md-6"></div>
           <div className="col-md-1">
           <label class="switch enable-switch" for="checkbox">
    <input type="checkbox" id="checkbox" />
    <div class="slider round"></div>
  </label>

           </div>

         </div>
         <div>
           <h1 className="select-tier">Select Tier</h1>
           </div>
           <div className="row">
           <div className="col-md-2">
          <div className="tier-selector-one">   Tier 1</div>
           </div>
           <div className="col-md-2">
             <div className="tier-selector-two">Tier 2</div>
             </div>
           <div className="col-md-3">
             <div className="tier-selector-three">Tier 3</div>
             </div>
           <div className="col-md-3">
             <div className="tier-selector-four">Tier 4</div>
             </div>
           <div className="col-md-2">
             <div className="tier-selector-five">Tier 5</div>
           </div>

         </div>
         <div>
           <h1 className="roi-current-rate">ROI at Current Rates</h1>
         </div>
         <div className="row input-search">
         <div className="col-lg-12">
         <input className="input-text-usd" type="text" /> 
          <span className="usd-value">0.000USD</span>
         </div>
        

         </div>
         <div className="cake-price">~0.00 CAKE + 0.000000DON </div>
         <div className="row button-row">
        <div className="col-md-5 apply-button-wrapper">
        <div className="button-apply">Apply</div>
        </div>
        <div className="col-md-2 nothing"></div>
        <div className="col-md-5 cancle-button-wrapper">
        <div className="button-cancle">Cancel</div>
        </div>
       
         </div>
        <div className="show-details"> Show Details </div>
       </div>
      </header>
   
  );
}

export default App;
