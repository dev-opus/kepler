(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function m(o,r,l){const s=o*(1-r**2),e=1+r*Math.cos(l);return(s/e).toFixed(3)}const b={calculator:m};function p(o,r){const l=r**2/o**2;console.log({dividend:l});const s=1-l;return s<0?"could not be determined because of negative sign in square-root":Math.sqrt(s).toFixed(3)}const v={calculator:p};document.querySelector("#app").innerHTML=`
  <div class='container'>
    <div class=''>
      <h4 class='text-center'>
        Kepler's First Law and Eccentricity Calculator
        <hr />
      </h4>
    </div>

    <div class='mt-3'>
      <div class="row row-cols-1 gy-3">
        <div class="kepler col">
          <h4 class='text-center'>
            Kepler's First Law (r)
            <hr />
          </h4>

          <div class="row row-cols-2">
            <div class="col-5 formula">
              <p>kepler's first law is given as...</p <br />
              <img src='../assets/kepler.svg' class='rounded mx-auto d-block'>
              <p>where...</p>

              <table class='table table-bordered text-center'>
                <thead>
                  <tr>
                    <th scope='col'>Symbol</th>
                    <th scope='col'>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>r</td>
                    <td>radius</td>
                  </tr>
                  <tr>
                    <td>e</td>
                    <td>eccentricity</td>
                  </tr>
                  <tr>
                    <td>&Theta;</td>
                    <td>theta</td>
                  </tr>
                  <tr>
                    <td>a</td>
                    <td>semi-major axis</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="col-7">
              <div class="row row-cols-2 g-2 calc">
                <div class="col-6 form-col">
                  <form class='mt-3' id='f:k'>
                    <p>Use the form below to calculate radius of an ellipse of a planet using Kepler's First Law</p>

                    <div class='mb-2'>
                      <label for='a:semi-major axis' class='form-label'> semi-major axis (a) </label>
                      <input type='number' class='form-control' id='k:a' required step="0.0001">
                    </div>

                    <div class="mb-2">
                      <label for='e:eccentricity' class='form-label'> eccentricity (e) </label>
                      <input type='number' class='form-control' id='k:e' required step="0.0001">
                    </div>

                    <div class="mb-2">
                      <label for='o:theta' class='form-label'> theta (&Theta;) </label>
                      <input type='number' class='form-control' id='k:o' required step="0.0001">
                    </div>

                    <button class='btn btn-primary'> Calculate </button>
                  </form>
                </div>

                <div class="col-6 result mt-4 mb-4 text-center">
                  <p class="fs-3">Result</p>

                  <div class="h-50 w-75 bg-dark text-light mx-auto">
                    <p>result of computation is shown here...</p>
                    <p id='k:result' class='text-light'></p>
                  </div>

                  

                  <button class='btn btn-primary' id='k:c'>Clear</button>
                </div>

                
              </div>
            </div>
          </div>
          
        </div>

        <div class="eccentricity col ">
          <h4 class='text-center'>
            Eccentricity (e)
            <hr />
          </h4>

          <div class="row row-cols-2">
            <div class="col-5 formula-e">
              <p> eccentricity (e) is given as...</p <br />
              <img src='../assets/eccentricity.svg' class='rounded mx-auto d-block'>
              <p>where...</p>

              <table class='table table-bordered text-center'>
              <thead>
                <tr>
                  <th scope='col'>Symbol</th>
                  <th scope='col'>Meaning</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>e</td>
                  <td>eccentricity</td>
                </tr>

                <tr>
                  <td>a</td>
                  <td>semi-major axis</td>
                </tr>

                <tr>
                  <td> b </td>
                  <td> semi-minor axis</td>
              </tbody>
            </table>
            </div>

            <div class="col-7">
            <div class="row row-cols-2 g-2 calc">
              <div class="col-6 form-col">
                <form class='mt-3' id='f-e'>
                  <p>Use the form below to calculate eccentricity of an ellipse of a planet using Kepler's First Law</p>

                  <div class='mb-3'>
                    <label for='a:semi-major axis' class='form-label'> semi-major axis (a) </label>
                    <input type='number' class='form-control' id='e:a' required step="0.0001">
                  </div>

                  <div class="mb-4">
                    <label for='b:semi-minor axis' class='form-label'> semi-minor axis (b) </label>
                    <input type='number' class='form-control' id='e:b' required step="0.0001">
                  </div>

                  <button class='btn btn-primary'> Calculate </button>
                </form>
              </div>

              <div class="col-6 result mt-4 mb-4 text-center">
                <p class="fs-3">Result</p>

                <div class="h-50 w-75 bg-dark text-light mx-auto">
                  <p>result of computation is shown here...</p>
                  <p id='e:result' class=''></p>
                </div>

                

                <button class='btn btn-primary' id='e:c'>Clear</button>
              </div>  
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  </div>
`;document.addEventListener("DOMContentLoaded",o=>{const r=document.getElementById("f:k"),l=document.getElementById("f-e"),s=document.getElementById("k:result"),e=document.getElementById("e:result");r.addEventListener("submit",d=>{d.preventDefault();const n=document.getElementById("k:a").value,i=document.getElementById("k:e").value,c=document.getElementById("k:o").value;document.getElementById("k:a").value="",document.getElementById("k:e").value="",document.getElementById("k:o").value="";const u=b.calculator(+n,+i,+c);s.innerHTML=`when a = ${n}, e = ${i} and &Theta; = ${c}, r = ${u}`}),l.addEventListener("submit",d=>{d.preventDefault();const n=document.getElementById("e:a").value,i=document.getElementById("e:b").value;document.getElementById("e:a").value="",document.getElementById("e:b").value="";const c=v.calculator(n,i);e.innerHTML=`when a = ${n} and b = ${i}, e ${typeof c=="number"?" = "+c:c}`});const t=document.getElementById("k:c"),a=document.getElementById("e:c");t.addEventListener("click",()=>{s.innerText=""}),a.addEventListener("click",()=>{e.innerText=""})});
