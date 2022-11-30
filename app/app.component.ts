import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {APIService, Lead} from "./API.service";

@Component({
  selector: "lead-signup",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "amplify-angular-app";
  submitted = false;
  public createForm: FormGroup;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required]
    });
  }

  public onCreate(lead: Lead) {
    this.api
      .CreateLead(lead)
      .then((event) => {
        console.log("item created!");
        this.submitted = true;
        this.createForm.reset();
      })
      .catch((e) => {
        console.log("error creating lead...", e);
      });
  }
}
