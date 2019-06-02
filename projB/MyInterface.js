/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

         //Axis checkBox
         this.gui.add(this.scene, 'displayAxis').name('Axis');

         //Plane checkBox
         this.gui.add(this.scene, 'displayPlane').name('Plane');

         //Map chaeckBox
         this.gui.add(this.scene, 'displayMap').name('Map');
         
         //House checkBox
        this.gui.add(this.scene, 'displayHouse').name('House');

         //Terrain checkBox
        this.gui.add(this.scene, 'displayTerrain').name('Terrain');

         //Bird checkBox
        this.gui.add(this.scene, 'displayBird').name('Bird');

         //Logs checkBox
        this.gui.add(this.scene, 'displayLogs').name('Logs');

         //ResetLog checkBox
        this.gui.add(this.scene, 'resetLogs').name('Reset Logs');

         //Nest checkBox
        this.gui.add(this.scene, 'displayNest').name('Nest');

         //Lighting checkBox
        this.gui.add(this.scene, 'displayLighting').name('Lighting');

         //Forest checkBox
        this.gui.add(this.scene, 'displayForest').name('Forest');

         //ScaleFactor
        this.gui.add(this.scene, 'scaleFactor', 0.5, 3).name('scaleFactor');

         //SpeedFactor
        this.gui.add(this.scene, 'speedFactor', 0.1, 3).name('speedFactor');

        this.initKeys();
        return true;
    }

    initKeys() {// create reference from the scene to the GUI
        this.scene.gui = this;// disable the processKeyboard function

        this.processKeyboard = function () { };// create a named array to store which keys are being pressed
        
        this.activeKeys = {};
    }
    processKeyDown(event) {
            // called when a key is pressed down
        // mark it as active in the array
        this.activeKeys[event.code] = true;
    };
    processKeyUp(event) {
        // called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code] = false;
    };
    isKeyPressed(keyCode) {
        // returns true if a key is marked as pressed, false otherwise
        return this.activeKeys[keyCode] || false;
    }
}