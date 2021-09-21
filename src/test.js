// const loader = new THREE.TextureLoader();
// const mountI = loader.load(mount);
// const ht = loader.load(height);
// const alpha1 = loader.load(alpha);
// const canvas = document.querySelector("canvas.webgl");

// //scene Object Material
// const geometry = new THREE.PlaneBufferGeometry(3, 3, 64, 64);
// const scene = new THREE.Scene();
// const matreial = new THREE.MeshStandardMaterial({
//   color: "gray",
//   map: mountI,
//   displacementMap: ht,
//   displacementScale: 0.8,
//   alphaMap: alpha1,
//   transparent: true,
// });

// //Lights
// const pointLight = new THREE.PointLight("#00b3ff", 2);
// pointLight.position.x = 2;
// pointLight.position.y = 3;
// pointLight.position.z = 4;
// scene.add(pointLight);

// const plane = new THREE.Mesh(geometry, matreial);
// scene.add(plane);
// plane.rotation.x = 150;
// const sizes = {
//   width: window.innerWidth,
//   height: 1000,
// };

// // const gui = new dat.GUI();
// console.log(plane);
// // gui.add(pointLight.position, "x");

// const col = { color: "#00ff00" };
// // gui.addColor(col, "color").onChange(() => {
// //   pointLight.color.set(col.color);
// // });

// window.addEventListener("resize", () => {
//   // Update sizes
//   sizes.width = window.innerWidth;
//   sizes.height = 1000;

//   // Update camera
//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   // Update renderer
//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1,
//   100
// );
// camera.position.x = -1;
// camera.position.y = -0.5;
// camera.position.z = 3;
// scene.add(camera);
// // gui.add(camera.position, "z");

// // Controls
// // const controls = new OrbitControls(camera, canvas)
// // controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// /**
//  * Animate
//  */

// const clock = new THREE.Clock();

// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();

//   // Update objects
//   // sphere.rotation.y = 0.5 * elapsedTime;

//   // Update Orbital Controls
//   // controls.update()

//   // Render
//   plane.rotation.z = 0.5 * elapsedTime;
//   renderer.render(scene, camera);

//   // Call tick again on the next frame
//   window.requestAnimationFrame(tick);
// };

// tick();

// import * as THREE from "three";
// import * as dat from "dat.gui";
// import mount from "./component/mount";
// import alpha from "./component/al.png";
// import height from "./component/height.png";
// import { Scene } from "three";
//font ranchers
{
  /* <video className="videoTag" autoPlay loop muted>
            <source src={vid} autoPlay type="video/mp4" />
          </video>
          <h1 id="Logo">Afloat</h1> */
}
{
  /* <div className="container"> */
}
{
  /* <h1>
              Radioactive
              <br /> is here
            </h1> */
}
{
  /* <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p> */
}
{
  /* <button>Go Biking</button> */
}
{
  /* </div> */
}
{
  /* <h2 className="bigText">
          Radioactive is <br />
          here
        </h2> */
}
{
  /* <canvas className="webgl"></canvas> */
}

<div className="relMe">
  <div className="portBox">Welcome To Space</div>
  <div className="portBox1">
    Explore Each Domain <br /> to know more
  </div>
  <div className="btnBox">
    <button>Education</button>
    <button>Domain 2</button>
    <button>Domain 3</button>
    <button>Domain 4</button>
  </div>
</div>;

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43, 21, 49],
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27, 33, 12],
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21, 14, 15, 13],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          stackType: "100%",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        xaxis: {
          categories: [
            "2011 Q1",
            "2011 Q2",
            "2011 Q3",
            "2011 Q4",
            "2012 Q1",
            "2012 Q2",
            "2012 Q3",
            "2012 Q4",
          ],
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "right",
          offsetX: 0,
          offsetY: 50,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

const domContainer = document.querySelector("#app");
ReactDOM.render(React.createElement(ApexChart), domContainer);

<AnanlyticsDiv1>
  <GraphContainerA>
    <GraphContainerHeader>Rating Vs College Tier</GraphContainerHeader>
    <GraphContainerBody>
      {eduVscredTier1 && label1 && (
        <BarChart
          label={label1}
          data={[
            eduVscredTier1,
            eduVscredTier2,
            eduVscredTier3,
            eduVscredTier4,
          ]}
        />
      )}
    </GraphContainerBody>
  </GraphContainerA>
  <GraphContainerA></GraphContainerA>
</AnanlyticsDiv1>;
