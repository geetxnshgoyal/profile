import * as THREE from 'three';
import Application from '../Application';
import Time from '../Utils/Time';

export default class Particles {
    application: Application;
    scene: THREE.Scene;
    time: Time;
    points: THREE.Points;
    count: number;

    constructor() {
        this.application = new Application();
        this.scene = this.application.scene;
        this.time = this.application.time;
        this.count = 800; // number of particles

        this.setGeometry();
        this.setMaterial();
        this.setPoints();
    }

    setGeometry() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.count * 3);

        for (let i = 0; i < this.count * 3; i += 3) {
            // Distribute particles in a large box volume surrounding the desk
            positions[i] = (Math.random() - 0.5) * 55000;       // X
            positions[i + 1] = Math.random() * 20000 - 3000;    // Y (above and below floor level)
            positions[i + 2] = (Math.random() - 0.5) * 55000;     // Z
        }

        geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3)
        );

        this.points = new THREE.Points(geometry);
    }

    setMaterial() {
        // Create a custom glowing circular canvas texture for the particles
        const canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 16;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.3, 'rgba(0, 255, 216, 0.8)');
            gradient.addColorStop(1, 'rgba(0, 255, 216, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 16, 16);
        }
        const texture = new THREE.CanvasTexture(canvas);

        const material = new THREE.PointsMaterial({
            size: 320,
            sizeAttenuation: true,
            map: texture,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            color: 0x00ffd8
        });

        this.points.material = material;
    }

    setPoints() {
        this.scene.add(this.points);
    }

    update() {
        const positionAttribute = this.points.geometry.getAttribute('position') as THREE.BufferAttribute;
        const positions = positionAttribute.array as Float32Array;
        
        for (let i = 0; i < this.count; i++) {
            const i3 = i * 3;
            // Slowly drift particles upwards and sideways
            positions[i3 + 1] += Math.sin(this.time.elapsed * 0.0005 + positions[i3]) * 1.0 + 1.2; 
            positions[i3] += Math.cos(this.time.elapsed * 0.0003 + positions[i3 + 1]) * 0.6;
            
            // Loop particles back to the bottom when they float too high
            if (positions[i3 + 1] > 18000) {
                positions[i3 + 1] = -3000;
            }
        }
        
        positionAttribute.needsUpdate = true;
    }
}
