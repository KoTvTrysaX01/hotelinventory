import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;

  get guests(){
    return this.bookingForm.get('guests') as FormArray
  }

  constructor(private configService: ConfigService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl(''),
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([this.fb.group({guestName: [''],
      age: new FormControl('')
      })])
    })
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue())
  }
  addGuest(){
    this.guests.push(
      this.fb.group({guestName: [''], age: new FormControl('')})
    )
  }
}

