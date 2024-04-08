import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreService } from '../chambre.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: any;
  chambre: any = {};

  constructor(private route: ActivatedRoute, private chambreService: ChambreService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Get the id from the route parameters
    // Fetch existing data using the id
    this.chambreService.getById(this.id)
       .subscribe(data => {
         this.chambre = data;
       });
  }

  updateChambre(): void {
    // Implement your logic to update university here
    console.log(this.chambre); // Log the form data for testing
    // Example: Call a service method to update university
     this.chambreService.update(this.id, this.chambre)
       .subscribe(() => {
         this.router.navigate(['/read']); // Navigate back to the universities page after updating
       });
  }
}