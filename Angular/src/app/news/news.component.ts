import { Component, OnInit } from '@angular/core';
import { SampleService } from '../shared/services/sample.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any[] = [];
  topNews: any = {};
  newsModel: any = {};
  newsDate: Date;

  isLoaded: boolean = false;
  dtOptions: DataTables.Settings = {};
  modalReference: any;
  ngbModalOptions: NgbModalOptions = { backdrop: 'static', keyboard: false, windowClass: 'dark-modal' };

  constructor(private sampleService: SampleService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
   this.getNews(); 
   this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5,
  lengthMenu : [5, 10, 25],
    processing: true
  };
  }

  getNews(){
    this.sampleService.getData().subscribe(response => {
      if(response.status == 'ok'){
        this.news = response.articles;
        this.isLoaded = true;
        this.topNews = this.news[0];
        console.log(this.news);
      }
      else{

      }
    }, error => {

    })
  }

  addNewsModalOpen(content){
    this.modalReference =  this.modalService.open(content, this.ngbModalOptions);
  }

  saveNews(){
    var news = this.newsModel;
    let dateString =  this.newsDate; 
    let newDate = new Date(dateString);
    this.newsModel.postedDate = newDate.getFullYear()+"-"+(newDate.getMonth()+1).toLocaleString('en-US', {minimumIntegerDigits: 2})+"-"+newDate.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2})+ 'T00:00:00';
  }
}
