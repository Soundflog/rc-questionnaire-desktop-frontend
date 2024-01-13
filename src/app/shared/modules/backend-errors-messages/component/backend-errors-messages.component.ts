import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorsInterface} from "../../../../auth/types/BackendErrors.interface";

@Component({
  selector: 'app-backend-errors-messages',
  templateUrl: './backend-errors-messages.component.html',
  styleUrls: ['./backend-errors-messages.component.css']
})
export class BackendErrorsMessagesComponent implements OnInit{
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;

  errorMessages: string[]

  ngOnInit() {
    this.errorMessages = Object.keys(this.backendErrorsProps)
      .map((name: string) => {
        const messages = this.backendErrorsProps[name].join(', ')
        return `${name} ${messages}`
      })

  }
}
