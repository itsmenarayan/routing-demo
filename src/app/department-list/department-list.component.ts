import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <div>
    <p>
      Department list
    </p>

    <div>
      <ul class="items">
        <li (click)="onSelect(depart)" [class.selected]="isSelected(depart)" *ngFor="let depart of departments">
          <span class="badge">{{depart.id}}</span> {{depart.name}}
        </li>
    </ul>
    </div>

  </div>

  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId:any;

  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "Java" },
    { "id": 4, "name": "MongoDB" },
    { "id": 5, "name": "Ruby" }
  ]

  constructor(private router:Router, private route:ActivatedRoute){}


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id') || '0');
      this.selectedId = id;
    });
  }


  onSelect(department:any){
    this.router.navigate(['/departments', department.id])
    //this.router.navigate([department.id], {relativeTo:this.route});
  }

  isSelected(department:any){
    return department.id === this.selectedId;
  }

}
