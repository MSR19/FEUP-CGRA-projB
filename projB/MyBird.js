/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
    constructor(scene, x, y, z, angle, speed) {
        super(scene);
        this.init(scene);
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.z = z;
        this.up = true;
        this.direction = angle;
        this.speed = speed;
        this.catch = false;
        this.descending = false;
        this.rad = 0;
    }

    init(scene) {
        this.body = new MySphere(this.scene);
        this.head = new MySphere(this.scene);
        this.rEye = new MySphereTop(this.scene);
        this.lEye = new MySphereTop(this.scene);
        this.beak = new MyPyramid(this.scene, 3, 3);
        this.rTail = new MyTriangle(this.scene);
        this.lTail = new MyTriangle(this.scene);
        this.rWing = new MyWing(this.scene);
        this.lWing = new MyWing(this.scene);
        this.rLeg = new MyLeg(this.scene);
        this.lLeg = new MyLeg(this.scene);
        this.log = new MyTreeBranch(this.scene, 0, 0);

        this.textureFeathers = new CGFtexture(this.scene, 'images/feathers.jpg');
        this.materialFeathers = new CGFappearance(this.scene);
        this.materialFeathers.setAmbient(0.4, 0.4, 1, 1.0);
        this.materialFeathers.setDiffuse(0.4, 0.4, 1, 1.0);
        this.materialFeathers.setSpecular(0.4, 0.4, 1, 1.0);
        this.materialFeathers.setShininess(10.0);
        this.materialFeathers.setTexture(this.textureFeathers);
        this.materialFeathers.setTextureWrap('REPEAT', 'REPEAT');

        this.textureBeak = new CGFtexture(this.scene, 'images/beak.jpg');
        this.materialBeak = new CGFappearance(this.scene);
        this.materialBeak.setAmbient(1, 1, 0, 1.0);
        this.materialBeak.setDiffuse(1, 1, 0, 1.0);
        this.materialBeak.setSpecular(1, 1, 0, 1.0);
        this.materialBeak.setShininess(10.0);
        this.materialBeak.setTexture(this.textureBeak);
        this.materialBeak.setTextureWrap('REPEAT', 'REPEAT');

        this.textureEyes = new CGFtexture(this.scene, 'images/eye.jpg');
        this.materialEyes = new CGFappearance(this.scene);
        this.materialEyes.setAmbient(0, 0, 0, 1.0);
        this.materialEyes.setDiffuse(0, 0, 0, 1.0);
        this.materialEyes.setSpecular(0, 0, 0, 1.0);
        this.materialEyes.setShininess(10.0);
        this.materialEyes.setTexture(this.textureEyes);
        this.materialEyes.setTextureWrap('REPEAT', 'REPEAT');

    }

    display(scaleFactor) {
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.direction, 0, 1, 0);
        this.scene.scale(scaleFactor, scaleFactor, scaleFactor);


        this.materialFeathers.apply();

        this.body.display();
        this.scene.pushMatrix();
        this.scene.translate(1.30, 1, 0);
        this.scene.scale(0.75, 0.8, 0.75);
        this.head.display();
        this.scene.popMatrix();

        this.materialEyes.apply();
        this.scene.pushMatrix();
        this.scene.translate(1.6, 1.4, -0.5);
        this.scene.scale(0.25, 0.25, 0.25);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.rEye.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(1.6, 1.4, 0.5);
        this.scene.scale(0.25, 0.25, 0.25);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.lEye.display();
        this.scene.popMatrix();

        this.materialBeak.apply();
        this.scene.pushMatrix();
        this.scene.translate(1.8, 0.8, 0);
        this.scene.scale(0.5, 0.6, 0.5);
        this.beak.display();
        this.scene.popMatrix();

        this.materialFeathers.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.5, 0);
        this.scene.scale(3, 1, 1);
        this.scene.rotate(Math.PI / 8, 1, 0, 0);
        this.lTail.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.5, 0);
        this.scene.scale(3, 1, 1);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.scene.rotate(-Math.PI / 8, 1, 0, 0);
        this.rTail.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.6, 0.8);
        this.scene.scale(1, -1, 1);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.rWing.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.6, -0.8);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.lWing.display();
        this.scene.popMatrix();


        if (this.catch) {
            this.rLeg.update(true);
            this.lLeg.update(true);

            this.scene.pushMatrix();
            this.scene.rotate(Math.PI / 2, 1, 0, 0);
            this.scene.scale(0.5, 1, 0.5);
            this.scene.translate(0.6, -1, 1.8);
            this.log.display();
            this.scene.popMatrix();
        }
        else {
            this.rLeg.update(false);
            this.lLeg.update(false);
        }


        this.materialBeak.apply();

        this.scene.pushMatrix();
        this.scene.translate(0, -1.3, -0.4);
        this.lLeg.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -1.3, 0.4);
        this.rLeg.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }

    enableNormalViz() {
        this.body.enableNormalViz();
        this.head.enableNormalViz();
        this.rEye.enableNormalViz();
        this.lEye.enableNormalViz();
        this.rTail.enableNormalViz();
        this.lTail.enableNormalViz();
        this.rWing.enableNormalViz();
        this.lWing.enableNormalViz();
    }

    disableNormalViz() {
        this.body.disableNormalViz();
        this.head.disableNormalViz();
        this.rEye.disableNormalViz();
        this.lEye.disableNormalViz();
        this.rTail.disableNormalViz();
        this.lTail.disableNormalViz();
        this.rWing.disableNormalViz();
        this.lWing.disableNormalViz();
    }

    update(t) {
        this.x += Math.cos(this.direction) * this.speed;
        this.z -= Math.sin(this.direction) * this.speed;




        if (this.descending) {
            this.rad = (t / 1000) * Math.PI;


            if (t - this.tinicial < 1000) {
                this.y -= 0.25;
            }

            else if (t - this.tinicial < 2000) {
                this.y += 0.25;
            }
            else if (t - this.tinicial > 2000) {
                this.descending = false;
            }
        }
        else {
            if (this.speed > 2) {
                this.y = Math.sin((t * this.speed* 0.5) / 500 * Math.PI) + 5;
                this.rWing.update(t * this.speed * 0.5);
                this.lWing.update(t * this.speed * 0.5);
            }
            else {
                this.y = Math.sin(t / 500 * Math.PI) + 5;
                this.rWing.update(t);
                this.lWing.update(t);
            }
        }

    }

    turn(v) {
        this.direction += v;
    }


    accelerate(v) {
        if (this.speed + v >= 0)
            this.speed += v;
        else
            this.speed = 0;
    }

    descent(t) {

        if (this.descending == false) {
            this.rad = Math.PI / 2;
            this.descending = true;
            this.tinicial = t;
        }

    }

    reset() {
        this.rWing.reset();
        this.lWing.reset();
        this.speed = 0;
        this.direction = 0;
        this.x = 0;
        this.y = 4;
        this.z = 0;
    }
}
