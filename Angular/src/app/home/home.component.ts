import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TaskService } from "../shared/services/task.service";
import { EmployeeService } from "../shared/services/employee.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoaded = false;
  newTask = {
    id: 0,
    name: '',
    date: new Date(),
    employeeId: 0,
    description: ''
  };
  taskData: any[] = [];
  employeeData: any[] = [];
  modalReference: any;
  ngbModalOptions: NgbModalOptions = { backdrop: 'static', keyboard: false, windowClass: 'dark-modal' };
  dtOptions: DataTables.Settings = {};

  constructor(
    private taskService: TaskService,
    private employeeService: EmployeeService,
    private modalService: NgbModal

  ) { }

  ngOnInit(): void {
    this.getEmployee();
    this.getTodaysTask();
  }

  getEmployee() {
    this.employeeService.getEmployee().subscribe(response => {
      debugger;
      if (response != null && response.length > 0) {
        this.employeeData = response;
        this.isLoaded = true;
      }
    });
  }

  getTodaysTask() {
    var TodaysDate = new Date();
    var date = TodaysDate.getFullYear() + "-" + (TodaysDate.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 }) + "-" + TodaysDate.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2 });

    this.taskService.getByDates(date, date).subscribe(response => {
      debugger;
      if (response != null && response.length > 0) {
        this.taskData = response;
      }
    });
  }

  saveTask() {


    this.taskService.save(this.newTask).subscribe(response => {
      debugger;
      if (response != null && response.length > 0) {
        alert(response.message);
        if (response.code == 200) {
          location.reload();
        }
      }
    });
  }

  addTaskModalOpen(content) {
    this.modalReference = this.modalService.open(content, this.ngbModalOptions);
  }
}


