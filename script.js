var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var cHeight = window.innerHeight - 20;
var cWidth = window.innerWidth - 20;
c.width = cWidth;
c.height = cHeight;

class homeScreen {
	constructor() {
		this.title = "Game Title";
		this.arrow = 0;
		this.options = ["play", "settings", "credits"];
		document.addEventListener("keydown", (e) => this.arrowMove(e));
	}
	text() {
		ctx.font = "100px Arial";
		ctx.strokeText(this.title, cWidth / 2 - 200, cHeight / 2 - 200);

		// game title

		for (let i = 0; i < this.options.length; i++) {
			ctx.strokeText(this.options[i], cWidth / 2 - 200, cHeight / 2 + i * 100);
		}
	}
	arrowMove(e) {
		if (e.key == "ArrowUp") {
			if (this.arrow == 0) {
				return;
			}
			this.arrow--;
		}
		if (e.key == "ArrowDown") {
			if (this.arrow == 2) {
				return;
			}
			this.arrow++;
		}
	}

	Update() {
		this.text();
	}
}

home = new homeScreen();

function Update() {
	home.Update();
}

Update();
