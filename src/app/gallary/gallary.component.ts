import { Component } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {
  images = [
    { src: '../../assets/images/image1.jpeg', alt: 'Image 1', description: 'This is the first image' },
    {  src: '../../assets/images/image2.jpg',alt: 'Image 2', description: 'This is the second image' },
    {  src: '../../assets/images/image3.jpg',alt: 'Image 3', description: 'This is the third image' },
    {  src: '../../assets/images/image4.jpg',alt: 'Image 4', description: 'This is the fourth image' },
    {  src: '../../assets/images/image5.jpg',alt: 'Image 5', description: 'This is the fifth image' },
    {  src: '../../assets/images/image6.jpg', alt: 'Image 6',description: 'This is the sixth image' },
  ];

  searchQuery: string = '';
  



  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

 
    }
  
