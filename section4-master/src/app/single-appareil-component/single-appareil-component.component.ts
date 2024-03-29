import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../appareil.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-appareil',
  templateUrl: 'single-appareil-component.component.html',
  styleUrls: ['single-appareil-component.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Statut';

  constructor(private appareilService: AppareilService,private route: ActivatedRoute) { }
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id).name;
    this.status = this.appareilService.getAppareilById(+id).status;
  }


}
