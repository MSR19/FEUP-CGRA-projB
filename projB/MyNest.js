/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyNest extends CGFobject {
	constructor(scene, numLogs) {
        super(scene);
        this.scene = scene;
        this.numLogs = numLogs;
        this.init(scene, numLogs);
    }

	init(scene, numLogs) {
        this.logs = [];

        for(var i = 0; i != numLogs; i++) {
            this.logs.push(new MyTreeBranch(this.scene));
        }
    }

	display () {     
        this.scene.pushMatrix();
        var camada = 2;
        var camadasPassadas = 0;
        var passo = 1;

        if(this.numLogs > 0)
            this.logs[0].display();

        for (var i = 1; i != this.numLogs; i++) {
            //x+ e todos os pontos ate z+ //working
            if (passo == 1) {
                this.scene.pushMatrix();
                this.scene.translate((camada+camadasPassadas) - i,camada*0.60, i - (camadasPassadas+1));
                this.scene.scale(1.5,0.7,1.8);
                this.scene.rotate(Math.PI/4,1,0,0);
                this.logs[i].display(); 
                this.scene.popMatrix();       
                
                if (((camada-1)+camadasPassadas) == i)
                    passo++;      
            }
            //z+ e todos os pontos ate x- //working
            else if (passo == 2) {
                this.scene.pushMatrix();
                this.scene.translate((camada+camadasPassadas) - i,camada*0.60, (((camada-1))+(camada)+camadasPassadas) - i);
                this.scene.scale(1.5,0.7,1.8);
                this.scene.rotate(Math.PI/4,0,0,1);
                this.logs[i].display(); 
                this.scene.popMatrix();       
                 
                if ((((camada-1)*2)+camadasPassadas) == i)
                    passo++;
            }
            //x- e todos os pontos ate z- //working
            else if (passo == 3) {
                this.scene.pushMatrix();
                this.scene.translate(i - ((camada-1)*3+camadasPassadas +1), camada*0.6 ,((camada-1) + camada +camadasPassadas) - i);
                this.scene.scale(1.5,0.7,1.8);
                this.scene.rotate(Math.PI/4,-1,0,0);
                this.logs[i].display(); 
                this.scene.popMatrix();       
                 
                if ((((camada-1)*3)+camadasPassadas) == i)
                    passo++;
            }
            //z- e todos os pontos ate x+
            else if (passo == 4) {
                this.scene.pushMatrix();
                this.scene.translate((i - (((camada-1)*4)+camadasPassadas - (camada - 2))),camada*0.60,(i - (((camada-1)*5)+camadasPassadas)+(camada-2)));
                this.scene.scale(1.5,0.7,1.8);
                this.scene.rotate(Math.PI/4,0,0,-1);
                this.logs[i].display(); 
                this.scene.popMatrix();       
                 
            }

            if (camadasPassadas + ((camada-1)*4) == i) {
                camadasPassadas = i;
                camada = camada + 1;
                passo = 1;
            }
        }


        //camada para em 0, 4, 12, 24... //

        //o primeiro ponto 
        //Para a esquerda

        //o segundo ponto
        //Para a direita

        //primeira medate mais um
        //um ponto para cima

        //segunda metade mais o anteriro
        //um ponto para baixo
        
        /*
        *        8   
        *
        *    7   3   9
        *       
        *5   1   0   2   6
        *
        *   10   4   12
        * 
        *       11
        */

        this.scene.popMatrix();
    }
    
    newLog() {
        this.numLogs++;
        this.logs.push(new MyTreeBranch(this.scene));
    }

    enableNormalViz() {
        this.cilinder.enableNormalViz();
    }
    
    disableNormalViz() {
        this.cilinder.disableNormalViz();
    }

}

