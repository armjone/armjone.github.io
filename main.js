import * as THREE from 'three';
import { GLTFLoader } from 'gltfloader';
import { MindARThree } from 'mindar-image-three';

const loadGLTF = (path)=>{
    return new Promise((resolve,reject)=>{
        const loader = new GLTFLoader();
        loader,load(path,(gltf)=>{
            resolve(gltf);
        });
    });
}

document,addEventListener('DOMContentLoaded',()=>{

    const start = async()=>{
        const MindARThree = new MindARThree({
            continer:document,body,
            imageTargetSrc:'./targets/targets.mind',
            maxTrack:1,
        });

        const{renderer,scene,camera} = mindarThree;

        const light = new THREE.HemisphereLight(0xffffff,0xffffff,1);

        scene.add(light)

        const bread = await loadGLTF('./models/baead.glb')
        bread.scene.scale.set(1,1,1);
        bread.scene.position.set(0,-0.5,0);

        const breadAnchor = mindarThree.addAnchor(0);
        breadAnchor.group.add(bread.scene);

        await mindarThree.start();
        renderer.setAnimationLoop(()=>{
            renderer.render(scene,camera);
        });
    }

    start();

});