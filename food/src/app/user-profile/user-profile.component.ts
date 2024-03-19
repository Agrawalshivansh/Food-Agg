import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDataService } from '../Services/user-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  isUpdateSuccess: boolean = false;
  isUpdateFailure: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.fetchUserProfile();
  }

  initForm(): void {
    this.userProfileForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      email: [{ value: '', disabled: true }],
      address: [''],
      role: [{ value: '', disabled: true }]
    });
  }

  fetchUserProfile(): void {
    this.userProfileService.getUserProfile().subscribe(
      (data) => {
        this.userProfileForm.patchValue({
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: data.address,
          role: data.role
        });
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

  onUpdate(): void {
    if (this.userProfileForm.valid) {
      this.userProfileService.updateUserProfile(this.userProfileForm.value).subscribe(
        () => {
          this.isUpdateSuccess = true;
          this.isUpdateFailure = false;
        },
        (error) => {
          console.error('Error updating user profile:', error);
          this.isUpdateSuccess = false;
          this.isUpdateFailure = true;
        }
      );
    }
  }
}

