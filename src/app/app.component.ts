import { AfterViewInit, Component, ElementRef, Inject, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import {localStorageToken} from './localstorage.token'
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template</h1>
  // <p>Angular is okay</p>
  // `,
  styleUrls: ['./app.component.scss']
  // styles: [`h1 {color: red}`]
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent)
    // componentRef.instance.numberOfRooms = 50;
  }
  title = 'AngularLessons';

  role = 'Admin';

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef
  @ViewChild('name', {static: true}) name!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService,
              @Inject(localStorageToken) private localStorage: any,
              private configService: ConfigService,
              private router: Router,
            ){

              }
  
  ngOnInit(){

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)).subscribe((event) => {
        console.log('Navigation started');
      })

      this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
        console.log('Navigation completed');
      })
    
    this.router.events.subscribe((event) => {
      console.log(event)
    })
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = "Hilton Hotel"
    this.localStorage.setItem('name', 'Hilton Hotel')
  }
}
