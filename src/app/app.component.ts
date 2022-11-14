import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lifecycle-Hook';

  inputText: String= '';
  destroy: boolean = true;

  onSubmit(inputEl: HTMLInputElement){
    this.inputText= inputEl.value;
  }
  DestroyComponent(){
    this.destroy = false;
  }
}
