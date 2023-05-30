import { Component, Input } from '@angular/core';

interface Message {
  role: string;
  content: string;
}

@Component({
  selector: 'app-chat-block',
  templateUrl: './chat-block.component.html',
  styleUrls: ['./chat-block.component.scss']
})
export class ChatBlockComponent {
  @Input() message: Message = {role: 'sender',content:'content'};
}
