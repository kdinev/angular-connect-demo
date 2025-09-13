import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_LIST_DIRECTIVES, IgxIconComponent } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/northwind-swagger/customer-dto';
import { NorthwindSwaggerService } from '../services/northwind-swagger.service';

@Component({
  selector: 'app-child-view',
  imports: [IGX_LIST_DIRECTIVES, IgxIconComponent],
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public selectedCustomer?: CustomerDto;
  public northwindSwaggerCustomerDto: CustomerDto[] = [];

  constructor(
    private northwindSwaggerService: NorthwindSwaggerService,
  ) {}


  ngOnInit() {
    this.northwindSwaggerService.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindSwaggerCustomerDto = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
