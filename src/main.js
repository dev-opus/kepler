import '../style.css';
import keplerImg from './assets/kepler.svg';
import eccenImg from './assets/eccen.svg';
import minorImg from './assets/mia2.svg';
import geoflatImg from './assets/gfl3.svg';

import kepler from './kepler';
import eccentricity from './eccentricity';
import minor from './minor';
import geoflat from './geoflat';

document.querySelector('#app').innerHTML = `
  <div class='container'>
    <div class=''>
      <h4 class='text-center'>
        The Ellipsoid and it's Properties Calculator Program
        <hr />
      </h4>
    </div>

    <div class="minor col ">
      <h4 class='text-center'>
        Semi Minor Axis (b)
        <hr />
      </h4>

      <div class="row row-cols-2">
        <div class="col-5 formula-e">
          <p> semi minor axis (b) is given as...</p <br />
          <img src='${minorImg}' class='rounded mx-auto d-block'>
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
              <td>b</td>
              <td>semi-minor axis</td>
            </tr>

            <tr>
              <td>a</td>
              <td>semi-major axis</td>
            </tr>

            <tr>
              <td> f </td>
              <td> geometric flattening</td>
          </tbody>
        </table>
        </div>

        <div class="col-7">
        <div class="row row-cols-2 g-2 calc">
          <div class="col-6 form-col">
            <form class='mt-3' id='f:s'>
              <p>Use the form below to calculate semi-minor axis of an ellipse</p>

              <div class='mb-5 input-group'>
              <span class='input-group-text'>a</span>
                <input type='number' class='form-control' id='s:a' required step="0.0001">
                <span class='input-group-text'>m</span>
              </div>

              <div class="mb-5 input-group">
              <span class='input-group-text'>f</span>
                <input type='number' class='form-control' id='s:f' required step="0.0001">
                <span class='input-group-text'>m</span>
              </div>

              <button class='btn btn-primary'> Calculate </button>
            </form>
          </div>

          <div class="col-6 result mt-4 mb-4 text-center">
            <p class="fs-3">Result</p>

            <div class="h-75 w-75 bg-dark text-light mx-auto">
              <p>result of computation is shown here...</p>
              <p id='s:result' class=''></p>
            </div>

            

            <button class='btn btn-primary' id='s:c'>Clear</button>
          </div>  
        </div>
      </div>

      </div>
    </div>

    <div class="geometric col ">
      <h4 class='text-center'>
        Geometric Flattening (f)
        <hr />
      </h4>

      <div class="row row-cols-2">
        <div class="col-5 formula-e">
          <p> geometric flattening (f) is given as...</p <br />
          <img src='${geoflatImg}' class='rounded mx-auto d-block'>
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
              <td>a</td>
              <td>semi-major axis</td>
            </tr>

            <tr>
              <td>b</td>
              <td>semi-minor axis</td>
            </tr>

          </tbody>
        </table>
        </div>

        <div class="col-7">
        <div class="row row-cols-2 g-2 calc">
          <div class="col-6 form-col">
            <form class='mt-3' id='f:g'>
              <p>Use the form below to calculate geometric flattening of an ellipse</p>

              <div class='mb-5 input-group'>
              <span class='input-group-text'>a</span>
                <input type='number' class='form-control' id='g:a' required step="0.0001">
                <span class='input-group-text'>m</span>
              </div>

              <div class="mb-5 input-group">
              <span class='input-group-text'>b</span>
                <input type='number' class='form-control' id='g:b' required step="0.0001">
                <span class='input-group-text'>m</span>
              </div>

              <button class='btn btn-primary'> Calculate </button>
            </form>
          </div>

          <div class="col-6 result mt-4 mb-4 text-center">
            <p class="fs-3">Result</p>

            <div class="h-75 w-75 bg-dark text-light mx-auto">
              <p>result of computation is shown here...</p>
              <p id='g:result' class=''></p>
            </div>

            

            <button class='btn btn-primary' id='g:c'>Clear</button>
          </div>  
        </div>
      </div>

      </div>
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
              <img src='${keplerImg}' class='rounded mx-auto d-block'>
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
              <div class="row row-cols-2 calc">
                <div class="col form-col">
                  <form class='mt-3' id='f:k'>
                    <p>Use the form below to calculate radius of an ellipse</p>

                    <div class='mb-4 input-group'>
                      <span class='input-group-text'>a</span>
                      <input type='number' class='form-control' id='k:a' required step="0.0001">
                      <span class='input-group-text'>m</span>
                    </div>

                    <div class="mb-4 input-group">
                      <span class='input-group-text'>e</span>
                      <input type='number' class='form-control' id='k:e' required step="0.0001">
                      
                    </div>

                    <div class="mb-4 input-group">
                      
                      <span class='input-group-text'> &Theta;</span>
                      <input type='number' class='form-control' id='k:o' required step="0.0001">
                      <span class='input-group-text'>&#176;</span>
                      
                    </div>

                    <button class='btn btn-primary'> Calculate </button>
                  </form>
                </div>

                <div class="col result mt-4 mb-4 text-center">
                  <p class="fs-3">Result</p>

                  <div class="h-75 w-75 bg-dark text-light mx-auto">
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
            First Eccentricity (e)
            <hr />
          </h4>

          <div class="row row-cols-2">
            <div class="col-5 formula-e">
              <p> first eccentricity (e) is given as...</p <br />
              <img src='${eccenImg}' class='rounded mx-auto d-block'>
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
                  <p>Use the form below to calculate first eccentricity </p>

                  <div class='mb-5 input-group'>
                  <span class='input-group-text'>a</span>
                    <input type='number' class='form-control' id='e:a' required step="0.0001">
                    <span class='input-group-text'>m</span>
                  </div>

                  <div class="mb-5 input-group">
                  <span class='input-group-text'>b</span>
                    <input type='number' class='form-control' id='e:b' required step="0.0001">
                    <span class='input-group-text'>m</span>
                  </div>

                  <button class='btn btn-primary'> Calculate </button>
                </form>
              </div>

              <div class="col-6 result mt-4 mb-4 text-center">
                <p class="fs-3">Result</p>

                <div class="h-75 w-75 bg-dark text-light mx-auto">
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
`;

document.addEventListener('DOMContentLoaded', (ready) => {
  const keplerForm = document.getElementById('f:k');
  const eccenForm = document.getElementById('f-e');
  const minorForm = document.getElementById('f:s');
  const geoFlatForm = document.getElementById('f:g');

  const keplerPara = document.getElementById('k:result');
  const eccenPara = document.getElementById('e:result');
  const minorPara = document.getElementById('s:result');
  const geoflatPara = document.getElementById('g:result');

  minorForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const a = document.getElementById('s:a').value;
    const f = document.getElementById('s:f').value;

    const b = minor.calculator(a, f);
    minorPara.innerHTML = `when a = ${a}m and f = ${f}m, b = ${b}m`;
  });

  geoFlatForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const a = document.getElementById('g:a').value;
    const b = document.getElementById('g:b').value;

    const f = geoflat.calculator(a, b);
    geoflatPara.innerHTML = `when a = ${a}m and b = ${b}m, f = ${f}m`;
  });

  keplerForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const a = document.getElementById('k:a').value;
    const e = document.getElementById('k:e').value;

    const theta = document.getElementById('k:o').value;

    document.getElementById('k:a').value = '';
    document.getElementById('k:e').value = '';
    document.getElementById('k:o').value = '';

    const r = kepler.calculator(+a, +e, +theta);
    keplerPara.innerHTML = `when a = ${a} m, e = ${e} and &Theta; = ${theta}&#176;, r = ${r} m`;
  });

  eccenForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const a = document.getElementById('e:a').value;
    const b = document.getElementById('e:b').value;

    document.getElementById('e:a').value = '';
    document.getElementById('e:b').value = '';

    const e = eccentricity.calculator(a, b);
    eccenPara.innerHTML = `when a = ${a} m and b = ${b} m, e ${
      typeof e === 'number' ? ' = ' + e : e
    }`;
  });

  const keplerClear = document.getElementById('k:c');
  const eccenClear = document.getElementById('e:c');
  const minorClear = document.getElementById('s:c');
  const geoflatClear = document.getElementById('g:c');

  keplerClear.addEventListener('click', () => {
    keplerPara.innerText = '';
  });

  eccenClear.addEventListener('click', () => {
    eccenPara.innerText = '';
  });

  minorClear.addEventListener('click', () => {
    minorPara.innerText = '';
  });

  geoflatClear.addEventListener('click', () => {
    geoflatPara.innerText = '';
  });
});
