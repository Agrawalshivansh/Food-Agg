import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Input, Output, EventEmitter } from '@angular/core';
import { UserDataService } from '../Services/user-data.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
//   userProfileForm: FormGroup;
//   isUpdateSuccess: boolean = false;
//   isUpdateFailure: boolean = false;

//   constructor(
//     private fb: FormBuilder,
//     private userProfileService: UserDataService,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     this.initForm();
//     this.fetchUserProfile();
//   }

//   initForm(): void {
//     this.userProfileForm = this.fb.group({
//       name: ['', Validators.required],
//       phone: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
//       email: [{ value: '', disabled: true }],
//       address: [''],
//       role: [{ value: '', disabled: true }]
//     });
//   }

//   fetchUserProfile(): void {
//     this.userProfileService.getUserProfile().subscribe(
//       (data) => {
//         this.userProfileForm.patchValue({
//           name: data.name,
//           phone: data.phone,
//           email: data.email,
//           address: data.address,
//           role: data.role
//         });
//       },
//       (error) => {
//         console.error('Error fetching user profile:', error);
//       }
//     );
//   }

//   onUpdate(): void {
//     if (this.userProfileForm.valid) {
//       this.userProfileService.updateUserProfile(this.userProfileForm.value).subscribe(
//         () => {
//           this.isUpdateSuccess = true;
//           this.isUpdateFailure = false;
//         },
//         (error) => {
//           console.error('Error updating user profile:', error);
//           this.isUpdateSuccess = false;
//           this.isUpdateFailure = true;
//         }
//       );
//     }
//   }
// }

profileForm: FormGroup;
  userProfile: any;
  editMode: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserDataService) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      (data: any) => {
        this.userProfile = data;
        this.initForm();
      },
      error => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

  initForm(): void {
    this.profileForm = this.formBuilder.group({
      name: [this.userProfile.name, Validators.required],
      email: [this.userProfile.email, [Validators.required, Validators.email]],
      phoneNumber: [this.userProfile.phoneNumber, Validators.required],
      address: [this.userProfile.address, Validators.required],
      // Add more form controls for additional user profile fields
    });
  }

  get f() { return this.profileForm.controls; }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      return;
    }

    const updatedProfile = this.profileForm.value;
    this.userService.updateUserProfile(updatedProfile).subscribe(
      (response: any) => {
        console.log('User profile updated successfully:', response);
        this.toggleEditMode(); // Exit edit mode after successful update
      },
      error => {
        console.error('Error updating user profile:', error);
      }
    );
  }
}
