import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ResponsiveService} from '../../../services/responsive.service';
import {SecurityService} from '../../../services/security.service';
import {AuthenticatedRole} from '../../../../software-modules/user-management/software-features/authentication/domain/authenticated-role';

@Component({
  selector: 'app-top-menu-large',
  templateUrl: './top-menu-large.component.html',
  styleUrls: ['./top-menu-large.component.css']
})
export class TopMenuLargeComponent implements OnInit {

  @Output() clickedEvent = new EventEmitter<boolean>();
  @Output() directionChangedEvent = new EventEmitter<string>();
  @Output() logoutEvent = new EventEmitter<boolean>();

  isMediumWeb = true;
  isLargeWeb = true;
  isSideBarMinimized = false;
  loginUserName = '';
  userRoleNames: Array<string>;

  constructor(private responsiveService: ResponsiveService, private securityService: SecurityService) {
    this.securityService.loginUserTitle
      .subscribe(value => {
        this.loginUserName = value;
      });
    this.securityService.userRoleNames
      .subscribe(value => {
        this.userRoleNames = value;
      });
  }

  ngOnInit() {
    // Medium Observation
    this.responsiveService.isWebMedium
      .subscribe(matched => {
        this.isMediumWeb = matched;
      });
    // Large Observation
    this.responsiveService.isWebLarge
      .subscribe(matched => {
        this.isLargeWeb = matched;
      });
  }

  toggleSideBar() {
    this.isSideBarMinimized = !this.isSideBarMinimized;
    this.clickedEvent.emit(this.isSideBarMinimized);
  }

  rtl() {
    this.directionChangedEvent.emit('RTL');
  }

  ltr() {
    this.directionChangedEvent.emit('LTR');
  }

  logout() {
    this.logoutEvent.emit(true);
  }

}
