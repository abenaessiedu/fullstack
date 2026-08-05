import React from "react";

export default function App() {
  return (
    <main>
      <header>

        <a href="" className="logo"> MYBLOG </a>
        <nav>
          <a href=""> LOGIN </a>
          <a href=""> REGISTER </a>
        </nav>
      </header>
      <div className="post">
        <img src="/BEAUTYBYAD.png" alt="BEAUTYBYAD logo" />
        <div className="texts"> 
        <h2> BEAUTY BY AD. </h2>
        <p> by Adeola (Chizoba) Adeyemi, 2017, Nigeria </p>
        </div>

      </div>
      <div className="post">
        <img src="/DANESSAMYRICKSBEAUTY.png" alt="DANESSAMYRICKSBEAUTY logo" />
        <div className="texts"> 
        <h2> DANESSA MYRICKS BEAUTY </h2>
        <p> by Danessa Myricks, 2005, USA </p>
        </div> 

      </div>

      <div className="post">
        <img src="/PATMCGRATHLABS.png" alt="PATMCGRATHLABS logo" />
        <div className="texts"> 
        <h2> PAT MCGRATH LABS </h2>
        <p> by Pat McGrath, 2015, UK </p>
        </div> 

      </div>




    </main>
  );
}