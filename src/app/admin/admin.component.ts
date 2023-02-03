import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { window } from 'rxjs';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
[x: string]: any;
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
   

  
   data:any

 
  constructor(private service:ApiService , private form:FormBuilder ) { }
  employee = this.form.group({
    id : ['',[Validators.required]],
    name : ['',[Validators.required]],
    country :['',[Validators.required]],
    email :  ['',[Validators.required]],
    date : ['',[Validators.required]]
  })
  ngOnInit(): void {
    this.findarray();
    
  }
  fileName= 'ExcelSheet.xlsx';

  userList:any = [

    {
    
    "id": 1,
    
    "name": "ruhi",
    
    "country": "USA",
    
    "email": "ruhi@gmail.com",
    "date" : "12/1/2012",
    
    },
    
    {
    
    "id": 2,
    
    "name": "sara",
    
    "country": "USA",
    
    "email"     : "sara@gmail.com",
    "date"    : "12/1/2012"
    
    },
    
    {
    
    "id": 3,
    
    "name": "harshit",
    
    "country": "India",
    
    "email": "harshit@gmail.com",

    "date" : "12/1/2012",
    
    },
    
    {
    
    "id": 4,
    
    "name": "viya jadhav",
    
    "country": "Indian",
    
    "email": "viya1234@gmail.com",
    "date" : "12/1/2012",
    
    },
    
    {
    
    "id": 5,
    
    "name": "anita",
    
    "country": "USA",
    
    "email": "anita@gmail.com",

    "date" : "12/1/2012",
    
    }
    
    ]
    exportexcel(): void
    {
      
      let element = document.getElementById('excel-table');
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
   
      
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   
      
      XLSX.writeFile(wb, this.fileName);
       let pass = document.getElementById('hello')
       const window: XLSX.WorkSheet = XLSX.utils.table_to_sheet(pass)
    }
    
 
    edit(item:any){
      this.employee.patchValue(item)
      
    }
    update(){
      this.userList.push({
        id: this.employee.value.id,
        name : this.employee.value.name,
        country : this.employee.value.country,
        email : this.employee.value.email,
        date :this.employee.value.date
      })
      
    }
    submit(){
      alert('you have succesfully submit your form')
      this.employee.reset()
    }    
    
    student =[
      {
        name:'seema',
        collage:'siem',
        city:'nashik'
      },
      {
        name:'shamala',
        collage:'sips',
        city:'pune'
      },
      {
        name:'varsha',
        collage:'sitrc',
        city:'nashik'
      },
      {
        name:'sara',
        collage:'siem',
        city:'pune'
      }
    ]
    findarray(){
      let student =this.student.find((item)=>{
        item.name =='seema'
      })
        console.log(student)

    }
    // students(){
    //   let fiterarray = this.student.filter((student)=>{student.nama =='red'})

    //   console.log(fiterarray)
    // }

    

      
    
}
