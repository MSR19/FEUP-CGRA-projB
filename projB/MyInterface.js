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

        //Normals checkBox
        this.gui.add(this.scene, 'displayNoramls').name('Normals');

        //Cubemap checkbox
        this.gui.add(this.scene, 'displayCubemap').name("CubeMap");

        //Floor checkBox
        this.gui.add(this.scene, 'displayFloor').name('Floor');

        //myhouse checkBox
        this.gui.add(this.scene, 'displayHouse').name('House');

        //bigHillFormation checkBox
        this.gui.add(this.scene, 'displayBigHillFormation').name('Hill Fortion Big');

        //smallHillFormation checkBox
        this.gui.add(this.scene, 'displaySmallHillFormation').name('Hill Fortion Small');

        //TreeRowPatch checkbox
        this.gui.add(this.scene, 'displayTreeRowPatch').name('Tree Row');

        //TreeGroupPatch checkbox
        this.gui.add(this.scene, 'displayTreeGroupPatch').name('Tree Group');

        //Fire checkbox
        this.gui.add(this.scene, 'displayFire').name('Fire');

        //Table checkbox
        this.gui.add(this.scene, 'displayTable').name('Table');

        this.gui.add(this.scene, 'displayBetterHouse').name('house2');

        this.gui.add(this.scene, 'displayNight').name('night');

        return true;
    }
}