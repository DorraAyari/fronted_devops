import { Component, OnInit } from '@angular/core';
import { ChambreService } from '../chambre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  chambres: any[] = [];

  constructor(private chambreService: ChambreService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.chambreService.getAll()
      .subscribe(chambres => this.chambres = chambres);
  }

  delete(id: number): void {

    if (confirm('Are you sure you want to delete this chambre?')) {
      this.chambreService.delete(id)
        .subscribe(() => {
          this.getAll(); // Refresh the list after deletion
        });
    }
  }

  goToUpdate(id: number): void {
    this.router.navigate(['/update', id]);
  }

  goToAdd(): void {
    this.router.navigate(['/create']);
  }
}