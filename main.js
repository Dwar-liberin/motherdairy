
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
              campaignName: "Mother_Dairy",
              serverUrl: "https://staging.lttl.in/event"
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
  

  
    
      const image_d466bb3e_901ecfc3_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_d466bb3e_901ecfc3_texture = await loadTexture("assets/blinkit-logo.png");
  const image_d466bb3e_901ecfc3_image = new THREE.MeshBasicMaterial({
      map: image_d466bb3e_901ecfc3_texture,
    });
    const image_d466bb3e_901ecfc3 = new THREE.Mesh(image_d466bb3e_901ecfc3_iconGeometry, image_d466bb3e_901ecfc3_image);
    image_d466bb3e_901ecfc3.scale.set(0.3, 0.3, 0.3);
    image_d466bb3e_901ecfc3.position.set(-0.32, -0.96, 0);
    image_d466bb3e_901ecfc3.rotation.set(-0.001, 0, 0);
    image_d466bb3e_901ecfc3.userData.clickable = true
    
    image_d466bb3e_901ecfc3.userData.eventName ="blinkit"
const target_imageundefiec7f7_iconGeometry = new THREE.PlaneGeometry(1, 1.4920127795527156);
   const target_imageundefiec7f7_texture = await loadTexture("assets/e-dairymilk marker.png");
  const target_imageundefiec7f7_image = new THREE.MeshBasicMaterial({
      map: target_imageundefiec7f7_texture,
    });
    const target_imageundefiec7f7 = new THREE.Mesh(target_imageundefiec7f7_iconGeometry, target_imageundefiec7f7_image);
    target_imageundefiec7f7.scale.set(1, 1, 1);
    target_imageundefiec7f7.position.set(0.01, -0.01, 0.01);
    target_imageundefiec7f7.rotation.set(-0.001, 0, 0);
    
    
    
const image_b9599a50_c221c13f_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_b9599a50_c221c13f_texture = await loadTexture("assets/amazon-logo.png");
  const image_b9599a50_c221c13f_image = new THREE.MeshBasicMaterial({
      map: image_b9599a50_c221c13f_texture,
    });
    const image_b9599a50_c221c13f = new THREE.Mesh(image_b9599a50_c221c13f_iconGeometry, image_b9599a50_c221c13f_image);
    image_b9599a50_c221c13f.scale.set(0.3, 0.3, 0.3);
    image_b9599a50_c221c13f.position.set(0.34, -0.96, 0);
    image_b9599a50_c221c13f.rotation.set(-0.001, 0, 0);
    image_b9599a50_c221c13f.userData.clickable = true
    
    image_b9599a50_c221c13f.userData.eventName ="amazon"

    const video_asset_d1c1252be8f_planeGeometry = new THREE.PlaneGeometry(1, 1.2857142857142858);

    const video_asset_d1c1252be8f_Item0Video = await loadVideo("assets/mother dairy video.mp4");

    const video_asset_d1c1252be8f_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_d1c1252be8f_Item0Video
    );

    let video_asset_d1c1252be8f_Item0VideoMaterial

      video_asset_d1c1252be8f_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_d1c1252be8f_Item0VideoTexture,
        })
    
     const video_asset_d1c1252be8f = new THREE.Mesh(
      video_asset_d1c1252be8f_planeGeometry,
      video_asset_d1c1252be8f_Item0VideoMaterial
    );

  video_asset_d1c1252be8f.position.set(0, 0.02, 0);



  if (isIOS) {
    video_asset_d1c1252be8f_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_d1c1252be8f_Item0Video.loop=true;
  
  video_asset_d1c1252be8f.scale.set(0.95, 1.05, 1);

    video_asset_d1c1252be8f.rotation.set(-0.002, 0, 0);

    
  
      
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
            video_asset_d1c1252be8f_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === image_d466bb3e_901ecfc3) {
        setTimeout(()=>{
          window.location.href = "https://blinkit.com/s/?q=mother%20dairy%20milkshake"
        },100)
        }
      

      if (o.userData.clickable && o === image_b9599a50_c221c13f) {
        setTimeout(()=>{
          window.location.href = "https://www.amazon.in/s?k=mother+dairy+milkshake&crid=286KBV3I5DWQD&sprefix=mother+dairy+milk%2Caps%2C255&ref=nb_sb_ss_ts-doa-p_1_17"
        },100)
        }
      
      }

    })
    
      
    anchor.group.add(image_d466bb3e_901ecfc3)

anchor.group.add(image_b9599a50_c221c13f)
anchor.group.add(video_asset_d1c1252be8f)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            




     
      video_asset_d1c1252be8f_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_d1c1252be8f_Item0Video.pause();

        



    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    