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
