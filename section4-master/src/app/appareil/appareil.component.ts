import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appreilService: AppareilService) { }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }
  onSwitch(){
    if(this.appareilStatus==='allumé'){
      this.appreilService.switchOffOne(this.index);
    }else if(this.appareilStatus==='éteint'){
      this.appreilService.switchOnOne(this.index);
    }
  }
  

}
