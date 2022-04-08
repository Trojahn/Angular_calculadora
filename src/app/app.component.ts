import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  display : string;

  resetDisplay() {
    this.display = "";
  }

  equal() { 
    try {
      let res = eval(this.display);
      if(res == Infinity || res == -Infinity || isNaN(res)) {
        throw "Erro";
      }
      this.display = String(res);
    } catch(e) {
      this.resetDisplay();
    }    
  }

  removeLast() {
    let now = String(this.display);
    this.display = now.slice(0, now.length-1);
  }

  ngOnInit(): void {
    this.resetDisplay();
  }

  process(inp : string) {
    switch(inp) {
      case "ac":
        this.resetDisplay();
        break;
      case "=":
        this.equal();
        break;
      case "c":
        this.removeLast();
        break;
      default:
        this.display = this.display + inp;
        break;
    }
  }
}
