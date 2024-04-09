import { Component, OnInit } from '@angular/core';

import { ChambreService } from '../chambre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  chambre: any = {}; // Define a generic object to store form data

  constructor(private chambreService: ChambreService, private router: Router) { }

  addChambre(): void {
    // Assign the value of numeroChambre from the input field to chambre object
    this.chambre.numeroChambre = this.chambre.numChambre; // assuming 'numChambre' is the name of your input field
  
    // Log the data for testing
    console.log(this.chambre);
  
    // Call the service method to create data
    this.chambreService.add(this.chambre)
      .subscribe(() => {
        this.router.navigate(['/read']); // Navigate back to the read page after creation
      });
  }
  
}
