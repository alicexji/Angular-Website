import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  newCard: any = {};
  myForm: any = {};
  @Output() cardAdded = new EventEmitter<any>();
  showSchoolField: boolean = false;

  submitForm() {
    if (this.myForm.valid) {
      // Perform form submission logic here
      console.log('Form submitted successfully:', this.newCard);
    } else {
      // Form is invalid, do not submit
      console.log('Form is invalid');
    }
    this.cardAdded.emit(this.newCard);
    this.newCard = {}; // Clear the form after emitting the event
  }


  

  toggleSchoolField(event: Event) {
    const target = event.target as HTMLInputElement;
    this.showSchoolField = target.value === 'yes';
    const schoolInput = document.getElementById("school") as HTMLInputElement;

    if (this.showSchoolField) {
      schoolInput.disabled = false;
      schoolInput.required = true; // Make school field required if student is selected
    } else {
      schoolInput.disabled = true;
      schoolInput.required = false; // Make school field optional if student is not selected
    }
  }
}
