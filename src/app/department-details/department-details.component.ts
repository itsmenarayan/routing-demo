import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
  
  <h3 >You Selected department id = {{departementId}}</h3>

  <!-- <p>
    <button (click)='showOverView()'>Overview</button>
    <button (click)='showContact()'>Contact</button>
  </p> -->
  <router-outlet></router-outlet>

  <p>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
  </p>

  <div>
    <button (click) = "gotoDepartments()" style="margin-top: 20px;">Back</button>
  </div>

  `,
  styleUrls: []
})
export class DepartmentDetailsComponent implements OnInit {

  public departementId: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.params['id']);
    //this.departementId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {

      let id = parseInt(params.get('id') || '0');
      this.departementId = (id > 0 ? id : 0);
    });
  }

  goPrevious() {
    let prevoiusId = this.departementId - 1;
    this.router.navigate(['/departments', prevoiusId]);
  }

  goNext() {
    let next = this.departementId + 1;
    this.router.navigate(['/departments', next]);
  }

  gotoDepartments() {
    let selectedId = this.departementId ? this.departementId : null;
    this.router.navigate(['/departments', {id:selectedId}])
    //this.router.navigate(['/departments', {id:selectedId, test:"textValue"}])
    //this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }


  // showOverView() {
  //   this.router.navigate(['overview'], {relativeTo:this.route});
  // }

  // showContact() {
  //   this.router.navigate(['contact'], {relativeTo: this.route});
  // }

}


