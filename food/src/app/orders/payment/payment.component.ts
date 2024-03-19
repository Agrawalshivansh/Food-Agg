import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from '../../cart/cart.service';
import { PaymentService } from 'src/app/Services/payment.service';
enum PaymentMethod {
  CreditCard = 'creditCard',
  DebitCard = 'debitCard',
  UPI = 'upi',
  Wallet = 'wallet',
  NetBanking = 'netBanking',
  COD = 'cod'
}

enum WalletType {
  Paytm = 'paytm',
  PhonePe = 'phonePe',
  GooglePay = 'googlePay',
  AmazonPay = 'amazonPay'
}

enum BankName {
  HDFC = 'HDFC Bank',
  ICICI = 'ICICI Bank',
  Axis = 'Axis Bank',
  SBI = 'SBI'
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  PaymentMethod = PaymentMethod;
  WalletType = WalletType;
  BankName = BankName;
  selectedPaymentMethod: PaymentMethod | undefined;
  selectedWalletType: WalletType | undefined;
  selectedBankName: BankName | undefined;
  cardNumber: number | undefined;
  expiryDate: number | undefined;
  cvv: number | undefined;
  otp: number | undefined;
  upiId: string | undefined;
  walletNumber: number | undefined;
  walletPin: number | undefined;
  otpEnabled = true;
  netBankingId: string | undefined;
  netBankingPassword: string | undefined;
  totalAmount: number;

  constructor(private cartService: CartService, private paymentService:PaymentService) {
    this.totalAmount = this.cartService.getTotalPrice();
  }

  submitForm(paymentForm: NgForm) {
    if (paymentForm.valid) {
      const paymentData = {
        totalAmount: this.totalAmount,
        selectedPaymentMethod: this.selectedPaymentMethod,
        cardNumber: this.cardNumber,
        expiryDate: this.expiryDate,
        cvv: this.cvv,
        otp: this.otp,
        upiId: this.upiId,
        selectedWalletType: this.selectedWalletType,
        walletNumber: this.walletNumber,
        walletPin: this.walletPin,
        selectedBankName: this.selectedBankName,
        netBankingId: this.netBankingId,
        netBankingPassword: this.netBankingPassword
      };
      this.paymentService.processPayment(paymentData).subscribe(
        (response) => {
          // Handle payment success response
          console.log('Payment successful:', response);
          // Redirect to order success page or show success message
        },
        (error) => {
          // Handle payment error
          console.error('Payment error:', error);
          // Display error message to the user
        }
      );
    }
  }  
}
