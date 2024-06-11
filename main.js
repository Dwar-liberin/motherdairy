
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    import { createChromaMaterial } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/chroma-video.js" 
    import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";
      let analytics=null
  const animationManager = new AnimationManager();

      const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;
      try {

        analytics = new Analytics(
          {
              appName: "DwAR",
              customerId: "4",
              campaignName: "Dairy milk",
              serverUrl: "https://3.110.158.27/event"
          }
       );

      Analytics.active = true;

      } catch(e) {
        console.log("Err", e.message)
      }
      
  

    const THREE = window.MINDAR.IMAGE.THREE;

    
    async function loadUnmuteLogo() {
      const muteIconGeo = new THREE.CircleGeometry(0.5, 32);
      const muteIconTexture = await loadTexture("assets/mute.png");
      const muteIconMaterial = new THREE.MeshBasicMaterial({
        map: muteIconTexture,
      });
    
      const muteIconMesh = new THREE.Mesh(muteIconGeo, muteIconMaterial);
      muteIconMesh.scale.set(0.1, 0.1);
      muteIconMesh.position.set(0, -0.5, 0.3);
    
      muteIconMesh.userData.clickable = true;
    
      return muteIconMesh;
    }

    

    
 function executeAnimation(animation, mesh) {
  console.log('animation', animation)
  const { name, state, value, duration, delay } = animation;

  switch (name) {
    case "slide":
      if (state === "left") {
        animationManager.animateSlide(mesh, null, duration, null, value, delay);
      }
      else if (state === "right") {
        animationManager.animateSlide(mesh, null, duration, value, state, delay);
      } else if (state === "up") {
        animationManager.animateSlideUp(mesh, duration, value, delay);
      } else {
        animationManager.animateSlideDown(mesh, duration, value, delay);

      }
      break;
    case "fade":
      if (state == "in") {
        animationManager.animateFadeIn(mesh, duration, delay);
      } else {
        animationManager.animateFadeOut(mesh, duration, delay);
      }
      break;
    case "scale":
      if (state == "up") animationManager.animateScaleUp(mesh, value, duration, null, delay);
      else animationManager.animateScaleDown(mesh, value, duration, null, delay);
      break;
    case "bounce":
      animationManager.animateBounce(mesh, "z", value, duration, delay); // Assuming "z" axis for bounce
      break;
    default:
      console.error("Unknown animation");
      break;
  }
}
    

    document.addEventListener("DOMContentLoaded", () => {

    // DwAR Analytics
    try {
      console.log("ana", analytics)
      if(analytics){
        console.log("ana", analytics)
        analytics.trackPageLoad({
          eventType: 'load',
          payload: true,
        });
  
        analytics.sendQueryParam()
      }
     
    } catch(e) {
      console.log("e", e.message)
    }


    async function start(){

      let muteIconMesh;
      
      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const anchor = mindThree.addAnchor(0);

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loadFont = () => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json",
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  const font = await loadFont();
  

  
    
      const target_image9100d1238b7_iconGeometry = new THREE.PlaneGeometry(1, 1.4920127795527156);
   const target_image9100d1238b7_texture = await loadTexture("assets/e-dairymilk marker.png");
  const target_image9100d1238b7_image = new THREE.MeshBasicMaterial({
      map: target_image9100d1238b7_texture,
    });
    const target_image9100d1238b7 = new THREE.Mesh(target_image9100d1238b7_iconGeometry, target_image9100d1238b7_image);
    target_image9100d1238b7.scale.set(1, 1, 1);
    target_image9100d1238b7.position.set(0, 0, 0);
    target_image9100d1238b7.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_862bace743e_planeGeometry = new THREE.PlaneGeometry(1, 1.2857142857142858);

    const video_asset_862bace743e_Item0Video = await loadVideo("assets/mother dairy .webm");

    const video_asset_862bace743e_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_862bace743e_Item0Video
    );

    let video_asset_862bace743e_Item0VideoMaterial

      video_asset_862bace743e_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_862bace743e_Item0VideoTexture,
        })
    
     const video_asset_862bace743e = new THREE.Mesh(
      video_asset_862bace743e_planeGeometry,
      video_asset_862bace743e_Item0VideoMaterial
    );

  video_asset_862bace743e.position.set(0, 0, 0);



  if (isIOS) {
    video_asset_862bace743e_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_862bace743e_Item0Video.loop=true;
  
  video_asset_862bace743e.scale.set(0.95, 1.05, 1);

    video_asset_862bace743e.rotation.set(-0.001, 0, 0);

    
  
const image_d466bb3e_9019012d_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_d466bb3e_9019012d_texture = await loadTexture("assets/blinkit-logo.png");
  const image_d466bb3e_9019012d_image = new THREE.MeshBasicMaterial({
      map: image_d466bb3e_9019012d_texture,
    });
    const image_d466bb3e_9019012d = new THREE.Mesh(image_d466bb3e_9019012d_iconGeometry, image_d466bb3e_9019012d_image);
    image_d466bb3e_9019012d.scale.set(0.3, 0.3, 0.3);
    image_d466bb3e_9019012d.position.set(-0.3, -1, 0);
    image_d466bb3e_9019012d.rotation.set(-0.001, 0, 0);
    image_d466bb3e_9019012d.userData.clickable = true
    
    image_d466bb3e_9019012d.userData.eventName ="blinkit"
const image_b9599a50_c22c2205_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_b9599a50_c22c2205_texture = await loadTexture("assets/amazon-logo.png");
  const image_b9599a50_c22c2205_image = new THREE.MeshBasicMaterial({
      map: image_b9599a50_c22c2205_texture,
    });
    const image_b9599a50_c22c2205 = new THREE.Mesh(image_b9599a50_c22c2205_iconGeometry, image_b9599a50_c22c2205_image);
    image_b9599a50_c22c2205.scale.set(0.3, 0.3, 0.3);
    image_b9599a50_c22c2205.position.set(0.3, -1, 0);
    image_b9599a50_c22c2205.rotation.set(-0.001, 0, 0);
    image_b9599a50_c22c2205.userData.clickable = true
    
    image_b9599a50_c22c2205.userData.eventName ="amazon"
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      if(o.userData.clickable && analytics){
        
        try {
          analytics.trackClick({
            eventType: "click",
            payload: o.userData.eventName
          })
        } catch (err){
          console.log("Err", err)
        }
       
      }

        if(isIOS){ 
          if (o.userData.clickable && o === muteIconMesh) {
            video_asset_862bace743e_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === image_d466bb3e_9019012d) {
        setTimeout(()=>{
          window.location.href = "https://blinkit.com/s/?q=mother%20dairy%20milkshake"
        },100)
        }
      

      if (o.userData.clickable && o === image_b9599a50_c22c2205) {
        setTimeout(()=>{
          window.location.href = "https://www.amazon.in/s?k=mother+dairy+milkshake&crid=286KBV3I5DWQD&sprefix=mother+dairy+milk%2Caps%2C255&ref=nb_sb_ss_ts-doa-p_1_17"
        },100)
        }
      
      }

    })
    
      
    
anchor.group.add(video_asset_862bace743e)
anchor.group.add(image_d466bb3e_9019012d)
anchor.group.add(image_b9599a50_c22c2205)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            




     
      video_asset_862bace743e_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_862bace743e_Item0Video.pause();

        



    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    