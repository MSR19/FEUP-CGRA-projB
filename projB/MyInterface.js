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

        return true;
    }
}