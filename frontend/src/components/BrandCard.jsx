export default function Post() {
    return (
        <>
              <div className="post">
        <div className="image">
          <img src="/BEAUTYBYAD.png" alt="BEAUTYBYAD logo" />
        </div>
        <div className="texts">
          <h2> BEAUTY BY AD. </h2> 
          <p className="info"> 
            <a className="author"> Adeola Adeyemi </a>
            <time> 2026-08-05 9:23 </time>
          </p>
          <p className="summary"> by Adeola (Chizoba) Adeyemi, 2017, Nigeria </p>
        </div>

      </div>
      <div className="post">
        <div className="image">
          <img src="/DANESSAMYRICKSBEAUTY.png" alt="DANESSAMYRICKSBEAUTY logo" />
        </div>
        <div className="texts">
          <h2> DANESSA MYRICKS BEAUTY </h2>
            <p className="info"> 
            <a className="author"> Danessa Myricks  </a>
            <time> 2026-08-05 9:23 </time>
          </p>
          <p> by Danessa Myricks, 2005, USA </p>
        </div>

      </div>

      <div className="post">
        <div className="image">
          <img src="/PATMCGRATHLABS.png" alt="PATMCGRATHLABS logo" />
        </div>
        <div className="texts">
          <h2> PAT MCGRATH LABS </h2>
            <p className="info"> 
            <a className="author"> Adeola Adeyemi </a>
            <time> 2026-08-05 9:23 </time>
          </p>
          <p> by Pat McGrath, 2015, UK </p>
        </div>

      </div>
        </>
    )
}