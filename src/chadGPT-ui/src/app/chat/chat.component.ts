import { Component, ViewChild, ElementRef, OnInit, AfterViewChecked } from '@angular/core';
import { ChadGPTapiService } from '../services/chad-gptapi.service';

interface Message {
  role: string;
  content: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  constructor(
    private chadGPT: ChadGPTapiService
  ){}

  messages: Message[] = [];
  userInput: string = '';
  @ViewChild('scrollChatBox') scrollChatBox: ElementRef;

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    this.scrollChatBox.nativeElement.scroll({
      top: this.scrollChatBox.nativeElement.scrollHeight,
      behavior: 'smooth'
    });
  }

  sendMessage(event: Event) {
    event.preventDefault();
    if (this.userInput.trim() !== '') {
      const userMessage: Message = {
        role: 'user',
        content: this.userInput
      };
      
      this.messages.push(userMessage);
      
      this.chadGPT.sendMessage(this.messages).subscribe({
        next: (response: Message) => {
          // Handle the API response
          this.messages.push(response);
        },
        error: (error) => {
          // Handle error
          console.error(error);
        }
      });;

      this.userInput = "";
      // this.generateResponse();
    }
  }
}
