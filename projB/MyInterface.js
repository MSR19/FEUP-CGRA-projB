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

        return true;
    }
}