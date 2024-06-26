import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string;
  password!: string;
  errorMessage!: string;

  constructor(public authService: ApiService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      () => this.router.navigate(['/']), // Redirigeix a la pàgina principal en cas d'èxit
      error => this.errorMessage = error.message // Mostra l'error en cas de fallo
    );
  }
}

