var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `

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
