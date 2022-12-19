import '../style.css';
import kepler from './kepler';
import eccentricity from './eccentricity';

document.querySelector('#app').innerHTML = `
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
`;

document.addEventListener('DOMContentLoaded', (ready) => {
  const keplerForm = document.getElementById('f:k');
  const eccenForm = document.getElementById('f-e');
  const keplerPara = document.getElementById('k:result');
  const eccenPara = document.getElementById('e:result');

  keplerForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const a = document.getElementById('k:a').value;
    const e = document.getElementById('k:e').value;

    const theta = document.getElementById('k:o').value;

    document.getElementById('k:a').value = '';
    document.getElementById('k:e').value = '';
    document.getElementById('k:o').value = '';

    const r = kepler.calculator(+a, +e, +theta);
    keplerPara.innerHTML = `when a = ${a}, e = ${e} and &Theta; = ${theta}, r = ${r}`;
  });

  eccenForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const a = document.getElementById('e:a').value;
    const b = document.getElementById('e:b').value;

    document.getElementById('e:a').value = '';
    document.getElementById('e:b').value = '';

    const e = eccentricity.calculator(a, b);
    eccenPara.innerHTML = `when a = ${a} and b = ${b}, e ${
      typeof e === 'number' ? ' = ' + e : e
    }`;
  });

  const keplerClear = document.getElementById('k:c');
  const eccenClear = document.getElementById('e:c');

  keplerClear.addEventListener('click', () => {
    keplerPara.innerText = '';
  });

  eccenClear.addEventListener('click', () => {
    eccenPara.innerText = '';
  });
});
