var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <form #form="ngForm" (submit)="handleSubmit()">
        <pre>
          {{user | json}}
        </pre>
        <input name="name" required [(ngModel)]="user.name" #name="ngModel" />
        <p *ngIf="!name.valid">Name is required</p>
        <p>{{form.form.valid}}</p>
      </form>
    `
  })
  .Class({
    constructor: function() {
      this.user = {
        name: "Davey",
        age: 55
      }

    }
  })

var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {
    }
  });


// Finally bootstrap
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);
