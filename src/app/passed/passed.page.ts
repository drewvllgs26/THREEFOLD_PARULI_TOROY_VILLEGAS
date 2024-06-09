import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../home/home.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-passed',
  templateUrl: './passed.page.html',
  styleUrls: ['./passed.page.scss'],
})
export class PassedPage implements OnInit {
  user: User | null = null;
  id: any;

  constructor(private rawter: Router, private awtenticate: AuthenticationService, private rawt: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.rawt.snapshot.paramMap.get('id');
    this.user = this.awtenticate.getCurrentUser();
  }

  gotoHome(){
    this.rawter.navigate(['home']);    
  }
}
