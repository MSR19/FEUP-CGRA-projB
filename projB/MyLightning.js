/**
 * MyLSystem
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);
        this.init();
        this.timeInit;
        this.depth = 0;
        this.animation = false;
    }

    init() {
        // cria o lexico da gramática
        this.initGrammar()

    }

    // cria o lexico da gramática
    initGrammar() {
        this.grammar = {
            "F": new MyQuad(this.scene),
            "X": new MyQuad(this.scene)
        };
    }

    update(t) {
        this.timepassed = t - this.timeInit;
        if (this.timepassed <= 1000 && this.depth <= this.axiom.length) {
            this.depth = this.depth + this.timepassed/2;
        }
        else {
            this.depth = 0;
        }

        if (this.timepassed > 1000) {
            this.depth = 0;
            this.animation = false;
        }
    }

    startAnimation(t) {
        if (this.animation) {
            this.update(t);
            this.timeInit = t;
        }
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(this.scale * 3, -this.scale * 3, this.scale * 3);

        var i;
        // percorre a cadeia de caracteres
        for (i = 0; i < this.axiom.length; ++i) {

            // verifica se sao caracteres especiais
            switch (this.axiom[i]) {
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                case "\ ":
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;

                case "/":
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;

                case "^":
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;

                case "&":
                    this.scene.rotate(-this.angle, 0, 1, 0);
                    break;
                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive = this.grammar[this.axiom[i]];

                    if (primitive && i < this.depth) {
                        this.scene.pushMatrix();
                        this.scene.scale(0.1, 1, 0.1);
                        primitive.display();
                        this.scene.popMatrix();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }
}