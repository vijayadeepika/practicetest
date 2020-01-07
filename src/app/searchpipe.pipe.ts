import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(storedata,searchbyname): any {
   let condition=y=>y.title.toLowerCase().indexOf(searchbyname.toLowerCase())>-1
   if(!searchbyname)
   {
     return storedata
   }
   else
   {
     return storedata.filter(condition)
   }
  }

}
