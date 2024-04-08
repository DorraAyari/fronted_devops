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
    // Implement your create logic here
    console.log(this.chambre); // Log the data for testing
    // Example: Call a service method to create data
     this.chambreService.add(this.chambre)
       .subscribe(() => {
         this.router.navigate(['/read']); // Navigate back to the read page after creation
       });
  }
}
