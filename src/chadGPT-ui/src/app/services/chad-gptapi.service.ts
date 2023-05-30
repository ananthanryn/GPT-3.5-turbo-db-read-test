import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface Message {
  role: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChadGPTapiService {

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(mes: Message[]){
    const apiUrl = 'http://127.0.0.1:8000/sendToOpenAI'; // Replace with your API endpoint URL
    return this.http.post<Message>(apiUrl, mes);
  }
}
